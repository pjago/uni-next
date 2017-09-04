(ns figwheel.connect.main-2358d1d4
  (:require [uni-next.core ]
            [figwheel.client ]
            [figwheel.client.utils ]))
(figwheel.client/start
  {:project-id "eea6d99ece043f24b704ccc6f5b3445e",
   :websocket-url "ws://localhost:41453",
   :on-jsload
   (fn [& x]
     (if js/uni-next.core.-main
       (apply js/uni-next.core.-main x)
       (figwheel.client.utils/log
         :debug
         "Figwheel: :on-jsload hook 'uni-next.core/-main' is missing")))})