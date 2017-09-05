(ns uni-next.ui
  (:refer-clojure :exclude [+ - * /])
  (:use [common.math :only [+ - * /]])
  (:require [clojure.string :as str]
            [common.web :as web]
            [om.next :as om]
            [om.dom :as dom]
            [uni-next.parser :as p]))

;
;UI
;
(declare body)

(om/defui Blade
  static om/IQuery
  (query [_] [[:geometry :blade]])
  Object
  (render [this]
    (let [{geometry [:geometry :blade]} (om/props this)]
      (web/a-entity {:position [(/ (:width geometry) 2) 0 0]
                     :geometry geometry}))))

(def blade (om/factory Blade))

(om/defui Shaft
  static om/IQuery
  (query [_] [{:blade '...} :geometry :rotation])
  Object
  (render [this]
    (let [{:keys [blade geometry rotation] :as props} (om/props this)
          spacing (/ 360 (count blade))]
      (apply web/a-entity {:rotation [0 rotation 0]
                           :geometry geometry
                           :material {:color "grey"}}
        (map-indexed #(web/a-entity {:rotation [0 (* %1 spacing) 0]} (body %2))
                     blade)))))

(def shaft (om/factory Shaft))

(om/defui Ir
  static om/IQuery
  (query [_] [:reflection])
  Object
  (componentDidMount [this]
    (.addEventListener (dom/node this) "raycaster-intersection-cleared"
      #(om/transact! this [`(app/increment ~{:path [:rpm (-> this om/props meta :uid) :count]})])))
  (render [this]
    (let [{selector :reflection} (om/props this)]
      (web/a-entity {:line      {:color "red"}
                     :raycaster {:far       1
                                 :interval  15
                                 :direction [0 1 0]
                                 :objects   (str ".\\" (str/replace (str selector) "/" "\\/"))
                                 :showLine  true}}))))

(def ir (om/factory Ir))

(om/defui Fan
  static om/IQuery
  (query [_] [{:shaft '...} {:ir '...} :position :geometry])
  Object
  (render [this]
    (let [{:keys [shaft ir position geometry] :as props} (om/props this)
          {d :depth h :height} geometry]
      (apply web/a-entity {:position position
                           :rotation [90 0 0]
                           :geometry geometry
                           :material {:opacity 0.3}}
        (apply web/a-entity {:position [0 (/ h 2) (/ d 3)]
                             :scale    [1 (- h) 1]} (map body ir))
        (map body shaft)))))

(def fan (om/factory Fan))

(om/defui Body
  static om/Ident
  (ident [this props]
    ((juxt :type :uid) (meta props)))
  static om/IQuery
  (query [this]
    {:fan   (om/get-query Fan)
     :shaft (om/get-query Shaft)
     :blade (om/get-query Blade)
     :ir    (om/get-query Ir)})
  Object
  (componentDidMount [this]
    (let [uid (-> this om/props meta :uid)]
      (doto (dom/node this)
        (aset "className" (str/join " " (p/parents uid)))
        (aset "id" uid))))
  (render [this]
    (let [props (om/props this)]
      ((case (:type (meta props))
         :fan   fan
         :shaft shaft
         :blade blade
         :ir    ir)
       props))))

(def body (om/factory Body {:keyfn (comp str (juxt :type :uid) meta)}))