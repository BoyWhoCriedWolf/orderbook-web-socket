import React, { useEffect } from "react";
import centrifuge from "../../../services";
const OrderBookList = () => {
  const init = () => {
    const orderbookSubscription = centrifuge.newSubscription("orderbook", {
      getData: async (ctx) => {
        console.log(ctx);
        return new Promise<any>((resolve, reject) => {
          resolve(ctx);
        });
      },
    });

    orderbookSubscription.presence().then(
      function (message) {
        console.log(message);
      },
      function (err) {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    init();
  }, []);

  return <div>OrderBookList</div>;
};

export default OrderBookList;
