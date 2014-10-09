(ns webapp.routes
  (:require [cemerick.friend :as friend]
            [webapp.admin :as admin]
            [compojure.core :refer :all]
            [compojure.route :as route]
            [selmer.parser :refer [render-file]]
            [webapp.data :as db]))

(defroutes app-routes
           (GET "/" []
                (render-file "templates/index.html" {}))
           (GET "/trip" []
                (render-file "templates/index.html"
                             {
                               :trip-name "Florida Trip - December 2014"
                               :name "Krishna Vangapandu"
                               :users (vals db/users)
                             }))
           (route/not-found "<h3>the path you are trying to execute is not valid</h3>"))

(def secured-routes
  (-> app-routes
      (friend/authenticate {})))
