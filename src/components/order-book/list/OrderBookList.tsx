import {
  SubscribedContext,
  SubscribingContext,
  SubscriptionStateContext,
} from "centrifuge";
import { useEffect } from "react";
import centrifuge from "../../../services";
const OrderBookList = () => {
  const init = () => {
    const orderbookSubscription =
      centrifuge.newSubscription("orderbook:BTC-USD");

    orderbookSubscription.subscribe();

    orderbookSubscription.on("state", (ctx: SubscriptionStateContext) => {
      console.log("state", ctx);
    });
    orderbookSubscription.on("subscribed", (ctx: SubscribedContext) => {
      console.log("subscribed", ctx);
    });
    orderbookSubscription.on("subscribing", (ctx: SubscribingContext) => {
      console.log("subscribing", ctx);
    });
  };

  useEffect(() => {
    init();
  }, []);

  return <div>OrderBookList</div>;
};

export default OrderBookList;
