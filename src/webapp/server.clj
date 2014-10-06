(ns webapp.server
  (:require [webapp.routes :as routes]
            [webapp.data :as db]
            [webapp.admin :as admin]

            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [org.httpkit.server :refer [run-server]]
            [cemerick.friend :as friend]))

(def app
  (-> routes/secured-routes
      (wrap-defaults site-defaults)))

(defn -dev-main [port]
  "Dev main. Reloads clojure code changes without restart of server"
  (run-server (wrap-reload #'app) {:port (Integer. port)}))

(defn -main [port auto?]
  "regular main. no auto reload of code changes without server restart"
  (if (Boolean. auto?)
    (-dev-main port)
    (run-server app {:port (Integer. port)})))

(defn run-dev-server []
  (-main 8080 true))

