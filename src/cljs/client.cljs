(ns webapp.client
  (:require
    [figwheel.client :as fw :include-macros true]))

(fw/watch-and-reload)

(js/alert "Hello Zumanji")


