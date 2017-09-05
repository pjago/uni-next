(def +project+ 'uni-next)
(def +version+ "0.0.0")

(set-env!
  :source-paths #{"src" "test"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/tools.reader "1.0.5" :scope "test"]
                  [criterium "0.4.4" :scope "test"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [powerlaces/boot-figreload "LATEST" :scope "test"]
                  [pandeiro/boot-http "0.8.3" :scope "test"]
                  [adzerk/boot-cljs "LATEST" :scope "test"]
                  [adzerk/boot-cljs-repl "0.3.3" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [org.clojure/clojure "1.9.0-alpha17"]
                  [org.clojure/clojurescript "1.9.542"]
                  [org.clojure/core.async "0.3.442"]
                  [com.taoensso/sente "1.11.0"]
                  [http-kit "2.3.0-alpha2"]
                  [compojure "1.6.0"]
                  [claro "0.2.19"]
                  [manifold "0.1.6"]
                  [ring/ring-core "1.6.1"]
                  [ring/ring-defaults "0.3.0"]
                  [ring-middleware-format "0.7.0"]
                  [org.omcljs/om "1.0.0-beta2-SNAPSHOT"]])

(require '[powerlaces.boot-figreload :refer [reload]]
         '[pandeiro.boot-http :refer [serve]]
         '[adzerk.boot-cljs :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]])

(task-options!
  pom {:project +project+
       :version +version+}
  cljs {:compiler-options {:foreign-libs [{:file "src" :module-type :es6}]}})

(deftask dev []
  (comp (watch)
        (repl :server true :port 9000)
        (serve :port 3002 :dir "docs")
        (reload)
        (cljs-repl :nrepl-opts {:port 9001})
        (cljs :optimizations :none)
        (notify :audible true)
        (target)))

(deftask build []
  (comp (cljs :optimizations :none)
        (target :dir #{"docs"})))