(ns webapp.client
  (:require [clojure.browser.repl :as repl]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(repl/connect "http://localhost:51143/7404/repl")

(enable-console-print!)

(defn by [id]
  (.getElementById js/document id))

(defn log [message]
  (.log js/console message))

(def app-state (atom {:list ["Lion" "Zebra" "Buffalo" "Antelope"]}))

(om/root
  (fn [app owner]
    (om/component
      (apply dom/ul nil
             (map (fn [text] (dom/li nil text)) (:list app)))))
  app-state
  { :target (by "content") })


(om.core/root
  (fn [app owner]
    (om/component
      (dom/form #js {:className "form-horizontal"}
          (dom/div #js {:className "control-group"}
              (dom/label #js {:className "control-label" :for "input-email"} "Email")
              (dom/div #js {:className "controls"}
                       (dom/input #js {:type "text" :id "input-email" :placeholder "enter email"})))
          (dom/div #js {:className "control-group"}
              (dom/label #js {:className "control-label" :for "input-password"} "Password")
              (dom/div #js {:className "controls"}
                       (dom/input #js {:type "password" :id "input-password" :placeholder "enter password"}))))))
  {}
  {:target (by "content")})

