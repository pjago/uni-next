(ns uni-next.parser
  (:refer-clojure :exclude [parents ancestors descendants]))

;
;PARSER
;
(def ^:dynamic *taxonomy* (assoc (make-hierarchy) :mutations {} :children {})) ;merge with app-state?

(defn parents [x] (clojure.core/parents *taxonomy* x))
(defn ancestors [x] (clojure.core/ancestors *taxonomy* x))
(defn descendants [x] (clojure.core/descendants *taxonomy* x))

(def mutation? #(isa? *taxonomy* % 'app/mutation))
(def mutation #(get (:mutations *taxonomy*) %))

(defn split [a-var]
  (let [ns' (subs (re-find #"#'.*?(?=/)" (str a-var)) 2)
        s'' (subs (re-find #"/.*" (str a-var)) 1)]
    [ns' s'']))

(def resolve-xf
  (comp (filter #(mutation? (key %)))
        (mapcat val)
        (map (juxt (comp symbol second split) deref))))

(def branch-xf
  (comp (mapcat #(map (fn [x] [x (first %)]) (second %)))
        (map #(if (mutation? (second %))
                [(-> % first split second symbol) (second %)]
                %))))

(defn add [taxons]
  (-> (transduce branch-xf (fn ([h] h) ([h [k v]] (derive h k v))) *taxonomy* taxons)
      (assoc :mutations (into (:mutations *taxonomy* {}) resolve-xf taxons))
      (assoc :children (transduce branch-xf (fn ([c] c) ([c [k v]] (update c v (fnil conj #{}) k)))
                                  (:children *taxonomy* {}) taxons))))

(defn del [taxons]
  (-> (transduce branch-xf (fn ([h] h) ([h [k v]] (underive h k v))) *taxonomy* taxons)
      (assoc :mutations (transduce (comp resolve-xf (map first)) dissoc (:mutations *taxonomy* {}) taxons))
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
  [{:keys [state]} key _]
  (if-let [found (get @state key)]
    {:value found}
    {:value ::nil}))

(defn peek-id [maybe-ident]
  (if (vector? maybe-ident)
    (if-let [id (peek maybe-ident)]
      (if-not (= id '_) id))))

(defmethod locate :app/component
  [{:keys [state uid reconciler] :as env} key {ks :keys as :as-of}]
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
              harr (.-arr hist)]
          {:value (mapv (comp get-one #(get hidx %))
                    (if (pos? as)
                      (take-last as harr)
                      (drop-last (- as) harr)))})
        (if-let [found (get-one @state)]
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
    (let [env* (assoc env :only only :union-recur query)] ;todo: should filter isa? here
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
(defn realize [parser env params]
  (zipmap (keys params) (vals (parser env (vec (vals params))))))

(defmethod mutate 'app/system
  [{:keys [state parser query] :as env} key _]
  {:action #(mapv (fn [[k q]] (with-meta (parser (assoc env :component k) q) {:component k})) query)})

(defmethod mutate 'app/mutation
  [{:keys [state parser component] :as env} key params]
  {:action #(get (swap! state update component (mutation key) (realize parser env params))
                 component)})

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
