(ns app.main
 (:require
  [javelin.core :as j]))

(enable-console-print!)

(let [c (j/cell nil)]
 (time
   (doall
     (for [x (range 0 1000)]
       (reset! c x)))))

(let [a (atom nil)]
 (time
   (doall
     (for [x (range 0 1000)]
       (reset! a x)))))
