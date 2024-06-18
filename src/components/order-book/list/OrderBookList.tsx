import React, { useEffect } from "react";
import centrifuge from "../../../services";
const OrderBookList = () => {
  const init = () => {
    centrifuge.newSubscription("orderbook", {
      getData: async (ctx) => {
        console.log(ctx);
        return new Promise<any>((resolve, reject) => {
          resolve(ctx);
        });
      },
    });
    centrifuge.newSubscription("orderbook:BTC-USD", {
      getData: async (ctx) => {
        console.log(ctx);
        return new Promise<any>((resolve, reject) => {
          resolve(ctx);
        });
      },
    });
  };

  useEffect(() => {
    init();
  }, []);

  return <div>OrderBookList</div>;
};

export default OrderBookList;
