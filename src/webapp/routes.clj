(ns webapp.routes
  (:require [cemerick.friend :as friend]
            [webapp.admin :as admin]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [selmer.parser :refer [render-file]]))

(defroutes app-routes
           (GET "/index" []
                (render-file "templates/index.html" {:name "Krishna Vangapandu"}))
           (route/not-found "<h3>the path you are trying to execute is not valid</h3>"))

(def secured-routes
  (-> app-routes
      (friend/authenticate {})))
