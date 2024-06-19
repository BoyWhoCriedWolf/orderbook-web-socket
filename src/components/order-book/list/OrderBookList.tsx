import { PublicationContext, SubscribedContext } from "centrifuge";
import { useEffect, useState } from "react";
import centrifuge from "../../../services";
import { Orderbook } from "../../../services/types/orderbook.types";
import OrderBookPriceTable from "../price-table";
import { calculateOrderBookData } from "../helper/orderBookHelper";

const OrderBookList = () => {
  const [data, setData] = useState<Orderbook>();

  useEffect(() => {
    const subscription = centrifuge.newSubscription("orderbook:BTC-USD");

    subscription.subscribe();

    subscription.on("subscribed", (ctx: SubscribedContext) => {
      //   console.log("subscribed", ctx);
      setData({
        ...ctx.data,
        asks: calculateOrderBookData(ctx.data.asks ?? []),
        bids: calculateOrderBookData(ctx.data.bids ?? []),
      });
    });

    subscription.on("publication", (ctx: PublicationContext) => {
      //   console.log("publication", ctx);
      setData(
        (s?: Orderbook) =>
          ({
            ...(s ?? {}),
            asks: calculateOrderBookData(
              [...(s?.asks ?? []), ...(ctx.data.asks ?? [])],
              s?.asks?.[0]?.[2] ? parseFloat(s?.asks?.[0]?.[2]) : 0
            ),
            bids: calculateOrderBookData(
              [...(s?.bids ?? []), ...(ctx.data.bids ?? [])],
              s?.bids?.[0]?.[2] ? parseFloat(s?.bids?.[0]?.[2]) : 0
            ),
          } as Orderbook)
      );
    });

    return () => {
      centrifuge.removeSubscription(subscription);
    };
  }, []);

  return (
    <div className="w-full">
      <OrderBookPriceTable data={data?.asks ?? []} type="sell" />
      <OrderBookPriceTable data={data?.bids ?? []} type="buy" />
    </div>
  );
};

export default OrderBookList;
