import React, { FC, PropsWithChildren } from "react";
import { decimalFormatter } from "../../../utils/number-utils";

const OrderBookPriceTableTotalCell: FC<
  PropsWithChildren<{
    total?: number;
    value?: number;
    color?: "red" | "green";
  }>
> = ({ total = 0, value = 0, color = "red" }) => {
  return (
    <div className="relative w-full p-1">
      <div className="relative">{decimalFormatter(value)}</div>
      <div
        className={
          "absolute top-0 left-0 h-full bg-opacity-25 " +
          (color === "red" ? "bg-green-500" : "bg-red-500")
        }
        style={{ width: total ? Math.min(100, 100 * (value / total)) : 0 }}
      ></div>
    </div>
  );
};

export default OrderBookPriceTableTotalCell;
