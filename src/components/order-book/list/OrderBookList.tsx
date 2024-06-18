import React, { useEffect } from "react";
import centrifuge from "../../../services";
const OrderBookList = () => {
  const init = () => {
    centrifuge.newSubscription("orderbook");
  };

  useEffect(() => {
    init();
  }, []);

  return <div>OrderBookList</div>;
};

export default OrderBookList;
