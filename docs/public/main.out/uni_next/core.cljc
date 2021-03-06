(ns uni-next.core
  #?(:clj (:import [java.util Date]))
  #?(:cljs (:require-macros [uni-next.core :refer [read-file]]))
  (:refer-clojure :exclude [+ - * /])
  (:use [common.math :only [+ - * /]])
  (:require #?(:clj [clojure.java.io :as io])
              [common.web :as web]
              [common.math :as a]
              [om.next :as om :refer [transact!] :rename {transact! !}]
              [om.dom :as dom]
              [uni-next.parser :as p]
              [uni-next.ui :as ui]))

;
;ACTIONS
;
(defn transfer
  [it {:keys [t Ut Yt] {:keys [num den delay]} :Gz}]
  (let [n (count num) d (count den)]
    (if (<= t delay) it
      (/ (- (apply + (* num (subvec Ut (+ d delay (- n)) (+ d delay -1))))
            (apply + (* (rest den) (subvec Yt 1 (dec d)))))
         (first den)))))

(defn spin
  [it {:keys [unit scale inf sup] :or {scale 0.1 inf -180 sup 180}}]
  (a/cycle (+ it (* unit scale)) inf sup))

(defn rpm-timer
  [{d :div n :count then :time :as it} {:keys [now rpm-min] :or {rpm-min 8}}]
  (cond (pos? n)
        (assoc it :count 0 :value (* (/ n d) (/ 3600 (- now then))) :time now)
        (>= (- now then) (/ 3600 rpm-min))
        (assoc it :count -1 :value 0 :time now)
        :else it))

(defn count-children
  [it params]
  (into it (map (fn [[k v]] [k (count (p/children v))])) params))
;
;APP
;
#?(:clj (defmacro read-file [f] (read-string (slurp (io/resource (eval f))))))

(def initial "static/fan/")

(def initial-state
  (read-file (str initial "state.edn")))

(def initial-taxons
  (merge (read-file (str initial "taxons.edn"))
         {'app/mutation #{#'spin #'rpm-timer #'transfer #'count-children}
          'app/system   #{'physics 'polling 'control '*taxon*}}))

#?(:cljs (p/add! initial-taxons)
   :clj  (binding [p/*taxonomy* (make-hierarchy)]
           (alter-var-root #'p/*taxonomy*
             (constantly
               (p/add! initial-taxons)))))

(def app-state (atom initial-state))
(def par (om/parser {:read p/locate :mutate p/mutate}))
(def rec (om/reconciler {:state     app-state
                         :parser    par
                         :normalize true
                         :pathopt   true
                         :logger    false}))

;
;APP
;
(def assign #?(:clj merge :cljs js/Object.assign))

(def background
  #js{:width    "100%"
      :height   "100vh"
      :position "absolute"
      :top      0
      :left     0})
;
;When I click to add a step, it can run simultaneously with the control system
;this is a problem since it will overwrite the step, as if it never happened
;todo: find a way to give priority to transactions bellow the tree
(om/defui ShaftPot
  static om/IQuery
  (query [_] [:true-rpm])
  Object
  (render [this]
    (let [{:keys [:true-rpm] :as props} (om/props this)
          {:keys [uid type]} (meta props)]
      (dom/div #js{:style #js{:margin "8px"}}
        (dom/h3 #js{:style #js{:marginLeft "5px"}} (str (.toFixed true-rpm 2) " true-rpm"))
        (dom/button #js{:onClick #(! this [`(app/add {:path [:true-rpm ~uid] :value  100})])} "+")
        (dom/button #js{:onClick #(! this [`(app/add {:path [:true-rpm ~uid] :value -100})])} "-")))))

(def shaft-pot (om/factory ShaftPot))

(om/defui IrLcd
  static om/IQuery
  (query [_] ['(:rpm {:keys [:value]}) :reflection])
  Object
  (render [this]
    (let [{:keys [rpm reflection] :as props} (om/props this)
          {:keys [uid type]} (meta props)]
      (dom/div #js{:style #js{:margin "8px"}}
        (dom/h3 #js{:style #js{:marginLeft "5px"}}
          (str (.toFixed (:value rpm) 2) " rpm"))))))

(def ir-lcd (om/factory IrLcd))

(om/defui App
  static om/IQuery
  (query [this]
    [:time {:body (om/get-query ui/Body)} {:shaft (om/get-query ShaftPot)} {:ir (om/get-query IrLcd)}])
  Object
  (componentDidMount [this]
    (! this '[{(*taxon*) {:rpm [(count-children {:div :reflection})]}}
              {(physics) {:rotation [(spin {:unit :true-rpm})]}}
              {(polling) {:rpm [(rpm-timer {:now :time})]}}
              {(control) {:true-rpm [(transfer {:Yt (:true-rpm {:as-of 5})
                                                :Ut (:pwm {:as-of 5})
                                                :Gz :true-rpm/pwm
                                                :t  :time})]}}
              (*taxon*)]))
  (render [this] ;todo: frame independency, user priority
    (let [{:keys [body shaft ir]} (om/props this)]
      (! this '[(app/increment {:path [:time]}) (physics) (control) (polling)])
      (dom/div #js{:style background}
        (apply dom/div #js{:style #js{:zIndex 1 :position "absolute"}}
          (concat (map shaft-pot shaft)
                  (map ir-lcd ir)))
        (web/a-scene {:id "scene" :embedded true}
          (apply web/a-entity {:rotation [0 60 0]} (map ui/body body))
          (web/a-entity {:id            "camera"
                         :position      [0 0 5]
                         :camera        {:active true :zoom 2}
                         :wasd-controls {:enabled true}
                         :look-controls {:enabled true}}))))))

#?(:cljs (defn -main [& args] (om/add-root! rec App (js/document.getElementById "app")))
   :clj  (om/add-root! rec App "app"))