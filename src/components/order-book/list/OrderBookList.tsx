import { Centrifuge } from "centrifuge";
import React, { useEffect } from "react";
import { WEB_SOCKET_API } from "../../../services/api-urls";
import { API_KEYS } from "../../../services/api-config";

const centrifuge = new Centrifuge(WEB_SOCKET_API.MAIN_NET);

centrifuge.setToken(API_KEYS.PRIVATE_JWT);

centrifuge.connect();

centrifuge.on("connected", function (context) {
  console.log("Connected to Centrifuge", context);
});

centrifuge.on("disconnected", function (context) {
  console.log("Disconnected from Centrifuge", context);
});

centrifuge.on("error", function (err) {
  console.error("Centrifuge error:", err);
});
centrifuge.newSubscription("orderbook", {});

const OrderBookList = () => {
  const init = () => {};

  useEffect(() => {
    init();
  }, []);

  return <div>OrderBookList</div>;
};

export default OrderBookList;
