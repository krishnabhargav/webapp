(ns webapp.data
  (:require [cemerick.friend.credentials :as creds]))

; a dummy in-memory user "database"
(def users
  {
    "root" {:username "krishnabhargav"
            :password (creds/hash-bcrypt "krishna_password")
            :profilepic "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c0.0.320.320/p320x320/10524738_10152334945301483_5103722050481696588_n.jpg?oh=fd41c44fccf3042fe9f9e3dbb1ea5f27&oe=54B8495A&__gda__=1421082008_161195a83be76f6bab7eae90609a33cb"
            :roles    #{::admin}}
    "jane" {:username "archana.raguthu"
            :password (creds/hash-bcrypt "archana_password")
            :profilepic "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c0.8.320.320/p320x320/1920240_755360404525511_6844049621262428335_n.jpg?oh=4e1c25c4cdc5a0ea058054724a89606e&oe=54BC6740&__gda__=1421859103_92cec1ee5d73c7fbbcfd8e718946b880"
            :roles    #{::user}}})