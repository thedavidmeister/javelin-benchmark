(set-env!
  :dependencies
  '[
    [org.clojure/clojure "1.9.0"]
    [org.clojure/clojurescript "1.9.946"]
    [adzerk/boot-cljs "2.1.4"]
    [hoplon/javelin "3.9.0"]
    [tailrecursion/boot-jetty  "0.1.3"]
    [thedavidmeister/boot-github-pages "0.1.0-SNAPSHOT"]]

  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[thedavidmeister.boot-github-pages :refer [github-pages]])

(def compiler-options
 {})

(deftask build
 []
 (comp
  (cljs
   :optimizations :advanced
   :compiler-options compiler-options)
  (target
   :dir #{"target"})))

(deftask deploy
 []
 (comp
  (build)
  (target
   :dir #{"gh-pages"})
  (github-pages)))
