(defproject webapp "0.1.0-SNAPSHOT"
  :description "Web Application in Clojure"
  :url "http://localhost/groupie"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [ring "1.3.1"]
                 [http-kit "2.1.16"]
                 [compojure "1.1.9"]

                 ;;clojurescript
                 [org.clojure/clojurescript "0.0-2342"]
                 [figwheel "0.1.4-SNAPSHOT"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]

  :main webapp.server

  :cljsbuild {
       :builds [{
           :source-paths ["src/cljs"]
           :compiler {
              :output-to "resources/public/js/main.js"
              :output-dir "resources/public/js"
              :optimizations :none
  }}]}

  :figwheel {
     :http-server-root "public"
     :port 8000
     :ring-handler webapp.server/app
 })

