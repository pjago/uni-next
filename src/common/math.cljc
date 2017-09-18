(ns common.math
  (:refer-clojure :exclude [+ - * / mod quot map cycle < > <= >= min max #?(:cljs MapEntry)])
  (:require [common.cljc :as cljc])
  #?(:cljs (:require-macros [common.math :refer [defunary defbinary]]))
  #?(:clj (:import [java.lang Boolean Number]
                   [clojure.lang Sequential APersistentVector IPersistentMap MapEntry])))

#?(:cljs ;have to create whole hierarchy, even for Object
   (do (def Object js/Object)
       (def Boolean js/Boolean)
       (def Number js/Number)
       (derive Object ::any)
       (derive Boolean ::any)
       (derive Number ::any)
       (def Sequential ::sequential)
       (derive Sequential ::any)
       (derive List Sequential)
       (derive EmptyList Sequential)
       (derive LazySeq Sequential)
       (derive IndexedSeq Sequential)
       (def APersistentVector ::vector)
       (derive APersistentVector ::any)
       (derive Subvec APersistentVector)
       (derive PersistentVector APersistentVector)
       (def IPersistentMap ::map)
       (derive IPersistentMap ::any)
       (derive PersistentArrayMap IPersistentMap)
       (derive PersistentHashMap IPersistentMap)
       (derive PersistentTreeMap IPersistentMap)
       (def MapEntry cljs.core/MapEntry)
       (derive MapEntry ::any)))

;
;GENERIC
;
(def ^:const any ::any)
(def ^:const nulary ::nulary)
(def ^:const nary ::nary)

(defn unary [x] (type x))
(defn binary [x y] [(type x) (type y)])
(defn multiary
  ([] nulary)
  ([x] (unary x))
  ([x y] (binary x y))
  ([x y & more] nary))

(deftype Zero [])
(deftype One [])

(derive Object any)
(derive Zero any)
(derive One any)

(def zero (->Zero))
(def one (->One))

;
;ARITHMETIC ;todo: inc, dec, pos?, neg? @multi; +one, -one, +eps, -eps, +inf, -inf, nil @method
;
(def ^:const +inf #?(:clj Double/POSITIVE_INFINITY :cljs js/Infinity))
(def ^:const -inf (clojure.core/- +inf))

(defmulti + multiary)
(defmulti * multiary)
(defmulti - multiary)
(defmulti / multiary)
(defmulti abs unary)
(defmulti acos unary)
(defmulti asin unary)
(defmulti atan unary)
(defmulti ceil unary)
(defmulti cos unary)
(defmulti exp unary)
(defmulti floor unary)
(defmulti log unary)
(defmulti rint unary)
(defmulti round unary)
(defmulti sin unary)
(defmulti sqrt unary)
(defmulti tan unary)
(defmulti mod binary)
(defmulti quot binary)
(defmulti atan2 binary)
(defmulti pow binary)

;
; Axioms
;
(defmethod + nulary [] zero)
(defmethod + any [x] x)
(defmethod + [any Zero] [x y] x)
(defmethod + [Zero any] [x y] y)
(defmethod + [Boolean Boolean] [x y] (or x y))
(defmethod + nary
  [x y & more]
  (if more
    (recur (+ x y) (first more) (next more))
    (+ x y)))

(defmethod - nulary [] zero)
(defmethod - [any Zero] [x y] x)
(defmethod - [Zero any] [x y] (- y))
(defmethod - [Boolean Boolean] [x y] (not (or x y)))
(defmethod - [any any] [x y] (+ x (- y)))
(defmethod - nary
  [x y & more]
  (if more
    (recur (- x y) (first more) (next more))
    (- x y)))

(defmethod * nulary [] one)
(defmethod * any [x] x)
(defmethod * [any One] [x y] x)
(defmethod * [One any] [x y] y)
(defmethod * [Boolean Boolean] [x y] (and x y))
(defmethod * nary
  [x y & more]
  (if more
    (recur (* x y) (first more) (next more))
    (* x y)))

(defmethod / nulary [] one)
(defmethod / [any One] [x y] x)
(defmethod / [One any] [x y] (/ y))
(defmethod / [Boolean Boolean] [x y] (not (and x y)))
(defmethod / [any any] [x y] (* x (/ y)))
(defmethod / nary
  [x y & more]
  (if more
    (recur (/ x y) (first more) (next more))
    (/ x y)))

;
; Common methods
;
#?(:clj
   (defmacro defunary [op ns]
     (let [host-sym (symbol (str ns) (str op))]
       `(do (defmethod ~op ~'Number [~'x] (~host-sym ~'x))
            (defmethod ~op ~'Sequential [~'x] (clojure.core/map ~op ~'x))
            (defmethod ~op ~'APersistentVector [~'x] (mapv ~op ~'x))
            (defmethod ~op ~'IPersistentMap [~'x] (reduce #(update %1 %2 ~op) ~'x (keys ~'x)))
            (defmethod ~op ~'MapEntry [~'x] (~op (val ~'x)))))))

#?(:clj
   (defmacro defbinary [op ns]
     (let [host-sym (symbol (str ns) (str op))]
       `(do (defmethod ~op [~'Number ~'Number] [~'x ~'y] (~host-sym ~'x ~'y))
            (defmethod ~op [~'Sequential ~'Number] [~'x ~'y] (clojure.core/map ~op ~'x (repeat ~'y)))
            (defmethod ~op [~'Number ~'Sequential] [~'x ~'y] (clojure.core/map ~op (repeat ~'x) ~'y))
            (defmethod ~op [~'Sequential ~'APersistentVector] [~'x ~'y] (clojure.core/map ~op ~'x ~'y))
            (defmethod ~op [~'Sequential ~'Sequential] [~'x ~'y] (clojure.core/map ~op ~'x ~'y))
            (defmethod ~op [~'APersistentVector ~'Number] [~'x ~'y] (mapv ~op ~'x (repeat ~'y)))
            (defmethod ~op [~'Number ~'APersistentVector] [~'x ~'y] (mapv ~op (repeat ~'x) ~'y))
            (defmethod ~op [~'APersistentVector ~'Sequential] [~'x ~'y] (mapv ~op ~'x ~'y))
            (defmethod ~op [~'APersistentVector ~'APersistentVector] [~'x ~'y] (mapv ~op ~'x ~'y))
            (defmethod ~op [~'IPersistentMap ~'Number] [~'x ~'y] (reduce #(update %1 %2 ~op ~'y) ~'x (keys ~'x)))
            (defmethod ~op [~'Number ~'IPersistentMap] [~'x ~'y] (reduce #(assoc %1 %2 (~op ~'x (get %1 %2))) ~'y (keys ~'y)))
            (defmethod ~op [~'IPersistentMap ~'IPersistentMap] [~'x ~'y] (merge-with ~op ~'x ~'y))
            (defmethod ~op [~'MapEntry ~'MapEntry] [~'x ~'y] (~op (val ~'x) (val ~'y)))
            (defmethod ~op [~'MapEntry any] [~'x ~'y] (~op (val ~'x) ~'y))
            (defmethod ~op [any ~'MapEntry] [~'x ~'y] (~op ~'x (val ~'y)))
            (prefer-method ~op [~'APersistentVector ~'Sequential] [~'Sequential ~'APersistentVector])
            (prefer-method ~op [~'MapEntry any] [~'APersistentVector ~'Number])
            (prefer-method ~op [any ~'MapEntry] [~'Number ~'APersistentVector])))))

(defbinary + #?(:cljs cljs.core :clj clojure.core))
(defbinary * #?(:cljs cljs.core :clj clojure.core))
(defunary - #?(:cljs cljs.core :clj clojure.core))
(defunary / #?(:cljs cljs.core :clj clojure.core))

(defunary abs Math)
(defunary acos Math)
(defunary asin Math)
(defunary atan Math)
(defunary ceil Math)
(defunary cos Math)
(defunary exp Math)
(defunary floor Math)
(defunary log Math)
(defunary rint Math)
(defunary round Math)
(defunary sin Math)
(defunary sqrt Math)
(defunary tan Math)

(defbinary mod clojure.core)
(defbinary quot clojure.core)
(defbinary atan2 Math)
(defbinary pow Math)

;
; Functions defined in terms of the arithmetic operators
;
(defn norm [x]
  (sqrt (apply + (pow x 2))))

;
;COMPARISON
;
(defmulti > multiary)
(defmulti < multiary)
(defmulti >= multiary)
(defmulti <= multiary)

(defmethod > any [x] true)
(defmethod > nary
  [x y & more]
  (if (> x y)
    (if (next more)
      (recur y (first more) (next more))
      (> y (first more)))
    false))

(defmethod < any [x] true)
(defmethod < [any any] [x y] (> y x))
(defmethod < nary
  [x y & more]
  (if (< x y)
    (if (next more)
      (recur y (first more) (next more))
      (< y (first more)))
    false))

(defmethod >= any [x] true)
(defmethod >= [any any] [x y] (not (< x y)))
(defmethod >= nary
  [x y & more]
  (if (>= x y)
    (if (next more)
      (recur y (first more) (next more))
      (>= y (first more)))
    false))

(defmethod <= any [x] true)
(defmethod <= [any any] [x y] (not (> x y)))
(defmethod <= nary
  [x y & more]
  (if (<= x y)
    (if (next more)
      (recur y (first more) (next more))
      (<= y (first more)))
    false))

;
; Common methods
;
(defmethod > [Number Number] [x y] (clojure.core/> x y))
(defmethod > [any Number] [x y] (> (norm x) y))
(defmethod > [Number any] [x y] (> x (norm y)))
(defmethod > [any any] [x y] (> (norm x) (norm y)))

;
; Functions defined in terms of the comparison operators
;
(defn max
  ([x] x)
  ([x y] (if (> x y) x y))
  ([x y & more]
   (reduce max (max x y) more)))

(defn min
  ([x] x)
  ([x y] (if (< x y) x y))
  ([x y & more]
   (reduce min (min x y) more)))

(defn eps= [x y eps]
  (< (abs (- x y)) eps))

(defn signum [x]
  (cond (> x 0)  1
        (< x 0) -1
        :else    0))

;
;GEOMETRIC
;
(def ^:const pi Math/PI)
(def ^:const tau (* pi 2))
(def ^:const pi|2 (/ pi 2))
(def ^:const pi|4 (/ pi 4))
(def ^:const pi|6 (/ pi 6))

(defn dist [x y]
  (if-not (isa? (binary x y) [Number Number])
    (sqrt (apply + (pow (- x y) 2)))
    (abs (- x y))))

(defn ||
  ([x] x)
  ([x y] (/ (* x y) (+ x y)))
  ([x y & more] (reduce || (|| x y) more)))

;
;TRANSDUCERS
;
(defn monotone [tone]
  (let [pitch (volatile! (tone))]
    (filter #(when-let [tonic (tone % @pitch)]
               (vreset! pitch tonic)
               true))))

(defn closest [keyfn to]
  (monotone
    (fn ([] +inf)
        ([m y] (if-let [v (keyfn m)]
                 (let [x (dist v to)]
                   (if (<= x y)
                     x)))))))

;
;UNITS
;
(def ^:const fps 30)
(def ^:const dt (/ fps))
(def ^:const rad:s->rpm (/ 60 tau))
(def ^:const m:s->km:h 3.6)
(def ^:const rad->deg (/ 180 pi))

;
;BOUNDARY
;
(defn constrain
  ([v abs] (-> v (max (- abs)) (min abs)))
  ([v inf sup] (-> v (max inf) (min sup))))

(defn map [v o O p P]
  (->> (- o O) / (* (- v o) (- p P)) (+ p)))

(defn cycle
  ([v abs] (-> v (map (- abs) abs 0 1) (mod 1) (map 0 1 (- abs) abs)))
  ([v inf sup] (-> v (map inf sup 0 1) (mod 1) (map 0 1 inf sup))))

(defn bound [expr inf sup mode]
  (case mode
    :cycle (cycle expr inf sup)
    :constrain (constrain expr inf sup)
    expr))