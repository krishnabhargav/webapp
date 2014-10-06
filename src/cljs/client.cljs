(ns webapp.client
  (:require [clojure.browser.repl :as repl]))

;            [figwheel.client :as fw :include-macros true]))
; (fw/watch-and-reload)

(repl/connect "http://localhost:58770/6431/repl")

(js/alert "Hello Buddiiigaa")
