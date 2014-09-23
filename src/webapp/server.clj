(ns webapp.server
  (:require  [ring.middleware.resource :refer [wrap-resource]]
             [ring.middleware.file-info :refer [wrap-file-info]]
             [ring.middleware.reload :refer [wrap-reload]]
             [compojure.core :refer :all]
             [compojure.route :as route]

             [org.httpkit.server :refer [run-server]]))

(defroutes route-map
    (GET "/" [] "<h1>Hello Root</h1>")
    (route/not-found "<h3>Route Not defined</h3>"))

(def app
  (-> route-map
      (wrap-resource "public")
      (wrap-file-info)))

;;;;;;;;;;;;;;
; Do not Modify
; Main function that runs auto-reloading server -> change content and come back
(defn -dev-main [port]
  (run-server (wrap-reload #'app) {:port (Integer. port)}))

(defn -main [port auto?]
  (if (Boolean. auto?)
    (-dev-main port)
    (run-server app {:port (Integer. port)})))

