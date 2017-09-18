(ns uni-next.parser
  (:refer-clojure :exclude [parents ancestors descendants compile]))

;
;PARSER
;
(def ^:dynamic *taxonomy* (assoc (make-hierarchy) :systems {} :mutations {} :children {})) ;app-state?

(defn parents [x] (clojure.core/parents *taxonomy* x))
(defn ancestors [x] (clojure.core/ancestors *taxonomy* x))
(defn descendants [x] (clojure.core/descendants *taxonomy* x))

(def system #(get (:systems *taxonomy*) %))
(def system? #(isa? *taxonomy* % 'app/system))
(def mutation #(get (:mutations *taxonomy*) %))
(def mutation? #(isa? *taxonomy* % 'app/mutation))

(defn split [a-var]
  (let [ns' (subs (re-find #"#'.*?(?=/)" (str a-var)) 2)
        s'' (subs (re-find #"/.*" (str a-var)) 1)]
    [ns' s'']))

(defn resolve-xf [pred]
  (comp (filter #(pred (key %)))
        (mapcat val)
        (filter #(var? %))
        (map (juxt (comp symbol second split) deref))))

(def branch-xf
  (comp (mapcat #(map (fn [x] [x (first %)]) (second %)))
        (map #(if (var? (first %))
                [(-> % first split second symbol) (second %)]
                %))))

(defn add [taxons]
  (-> (transduce branch-xf (fn ([h] h) ([h [k v]] (derive h k v))) *taxonomy* taxons)
      (assoc :systems (into (:systems *taxonomy* {}) (resolve-xf system?) taxons))
      (assoc :mutations (into (:mutations *taxonomy* {}) (resolve-xf mutation?) taxons))
      (assoc :children (transduce branch-xf (fn ([c] c) ([c [k v]] (update c v (fnil conj #{}) k)))
                                  (:children *taxonomy* {}) taxons))))

(defn del [taxons]
  (-> (transduce branch-xf (fn ([h] h) ([h [k v]] (underive h k v))) *taxonomy* taxons)
      (assoc :systems (transduce (comp (resolve-xf system?) (map first)) dissoc
                                 (:systems *taxonomy* {}) taxons))
      (assoc :mutations (transduce (comp (resolve-xf mutation?) (map first)) dissoc
                                   (:mutations *taxonomy* {}) taxons))
      (assoc :children (transduce branch-xf (fn ([c] c) ([c [k v]] (update c v (fnil disj #{}) k)))
                                  (:children *taxonomy* {}) taxons))))

(defn add! [taxons]
  (set! *taxonomy* (add taxons)))

(defn del! [taxons]
  (set! *taxonomy* (del taxons)))

;
; Data locate
;
(defmulti locate (fn [_ key _] key) :hierarchy #'*taxonomy*)
(defmulti mutate (fn [_ key _] key) :hierarchy #'*taxonomy*)

(defmethod locate :default
  [{:keys [state data] :or {data @state}} key _]
  (if-let [found (get data key)]
    {:value found}
    {:value ::nil}))

(defn peek-id [maybe-ident]
  (if (vector? maybe-ident)
    (if-let [id (peek maybe-ident)]
      (if-not (= id '_) id))))

(defmethod locate :app/component
  [{:keys [state data uid reconciler] :or {data @state} :as env} key {ks :keys as :as-of}]
  (let [uid* (or (-> env :ast :key peek-id) uid)]
    (letfn [(get-one [data]
              (if (some? uid*)
                (cond-> (get-in data [key uid*]) (some? ks) (select-keys ks))
                (as-> (get data key) it
                      (if (nil? ks) it
                        (zipmap (keys it)
                          (map #(select-keys % ks)
                            (vals it)))))))]
      (if (some? as)
        (let [hist (-> reconciler :config :history)
              hidx @(.-index hist)
              harr (.-arr hist)] ;todo: try subvec on .-arr
          {:value (mapv (comp get-one #(get hidx %)) (rseq (vec (take-last as harr))))})
        (if-let [found (get-one data)]
          {:value found})))))

(defn children
  ([a] (get (:children *taxonomy*) a #{}))
  ([a b] (set (filter (children a) (children b))))
  ([a b & more] (reduce children (children a b) more)))

(defn full-query [uid]
  (into (vec (children :app/component))
        (comp (remove #(isa? *taxonomy* uid %))
              (filter #(seq (mapcat (partial children %) (children uid))))
              (map (fn [type] {type '[*]})))
        (children :app/type)))

(defn height-level [uid]
  (if-let [recur (seq (children uid))]
    (inc (apply max 0 (map height-level recur)))
    0))

(defmethod locate :app/type
  [{:keys [parser uid union-recur only level]
          {:keys [query] :or {query '[*]} maybe-ident :key} :ast
    :or   {uid key only (children key) level 1}
    :as   env} key _]
  (cond
    (vector? maybe-ident)
    (if-let [uid* (peek-id maybe-ident)] ;todo: aot filtering
      {:value (some #(if (= (-> % meta :type) key) %)
                (get (parser (assoc env :only #{uid*}) [{key query}]) key))}
      {:value (get (parser (assoc env :uid key) [{key query}]) key)})
    (= query '[*])
    (if (pos? level)
      {:value (get (parser (assoc env :level (dec level)) [{key (full-query uid)}]) key)})
    (map? query)
    (let [env* (assoc env :only only :union-recur query)] ;todo: filter isa? here
      {:value (into [] (mapcat val) (parser env* (into [] (map #(conj {} %)) query)))})
    (vector? query)
    (let [env* (assoc env :only (into #{} (mapcat children) only))]
      (if-let [uids (seq (filter only (children uid key)))]
        {:value (mapv #(with-meta (parser (assoc env* :uid %) query) {:uid % :type key})
                      uids)}))
    (number? query)
    {:value (-> (assoc env :level (+ level query))
                (parser [{key (or (get union-recur key) (full-query uid))}])
                (get key))}
    (= query '...)
    {:value (-> (assoc env :level (height-level uid))
                (parser [{key (or (get union-recur key) (full-query uid))}])
                (get key))}))

(defmethod locate :db/component
  [{:keys [state uid ast]} key _]
  {:db/component (assoc ast :key [key uid])})

;
; Data mutate
;
(defn realize [env params]
  (zipmap (keys params) (vals ((:parser env) env (vec (vals params))))))

(defn compile [env query]
  (apply comp (mapcat (fn [[k q]] (map #(-> % val :result) ((:parser env) (assoc env :component k) q)))
                      query)))

(defmethod mutate 'app/system
  [{:keys [state parser query] :as env} key _]
  (if (map? query)
    {:action #(set! *taxonomy* (assoc-in *taxonomy* [:systems key] (compile env query)))}
    {:action #(swap! state (system key))}))

(defmethod mutate 'app/mutation
  [{:keys [state parser component] :as env} key params]
  (letfn [(zip [f env] #(into {} (map (fn [[k v]] [k (f v (realize (assoc env :uid k) params))])) %))]
    {:action #(fn [x] (->> x (assoc env :data) (zip (mutation key)) (update x component)))}))

(defmethod mutate 'app/reset
  [{:keys [state]} _ {:keys [path value]}]
  {:action #(swap! state assoc-in path value)})

(defmethod mutate 'app/add
  [{:keys [state]} _ {:keys [path value]}]
  {:action #(swap! state update-in path + value)})

(defmethod mutate 'app/increment
  [{:keys [state]} _ {:keys [path]}]
  {:action #(swap! state update-in path inc)})

(defmethod mutate 'app/decrement
  [{:keys [state]} _ {:keys [path]}]
  {:action #(swap! state update-in path dec)})
