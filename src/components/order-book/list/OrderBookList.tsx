import { PublicationContext, SubscribedContext } from "centrifuge";
import { useEffect, useState } from "react";
import centrifuge from "../../../services";
import { Orderbook } from "../../../services/types/orderbook.types";
import OrderBookPriceTable from "../price-table";
const OrderBookList = () => {
  const [data, setData] = useState<Orderbook>();

  useEffect(() => {
    const subscription = centrifuge.newSubscription("orderbook:BTC-USD");

    subscription.subscribe();

    subscription.on("subscribed", (ctx: SubscribedContext) => {
      //   console.log("subscribed", ctx);
      setData(ctx.data);
    });

    subscription.on("publication", (ctx: PublicationContext) => {
        console.log("publication", ctx); 
    });

    return () => {
      centrifuge.removeSubscription(subscription);
    };
  }, []);

  return (
    <div>
      <OrderBookPriceTable data={(data?.bids ?? []).reverse()} />
      <OrderBookPriceTable data={data?.asks ?? []} />
    </div>
  );
};

export default OrderBookList;
