import { Centrifuge } from "centrifuge";
import React, { useEffect } from "react";
import { WEB_SOCKET_API } from "../../../services/api-urls";

const centrifuge = new Centrifuge(WEB_SOCKET_API.TEST_NET);

centrifuge.setToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MDAwMDAwMDAwIiwiZXhwIjo2NTQ4NDg3NTY5fQ.o_qBZltZdDHBH3zHPQkcRhVBQCtejIuyq8V1yj5kYq8"
);

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
