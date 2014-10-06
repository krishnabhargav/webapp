(ns webapp.data
  (:require [cemerick.friend.credentials :as creds]))

; a dummy in-memory user "database"
(def users
  {
    "root" {:username "root"
            :password (creds/hash-bcrypt "admin_password")
            :roles    #{::admin}}
    "jane" {:username "jane"
            :password (creds/hash-bcrypt "user_password")
            :roles    #{::user}}})