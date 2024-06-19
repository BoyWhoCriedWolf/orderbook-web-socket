import React, { FC, PropsWithChildren } from "react";
import { decimalFormatter } from "../../../utils/number-utils";

const OrderBookPriceTable: FC<
  PropsWithChildren<{ data?: Array<Array<string>>; type?: "buy" | "sell" }>
> = ({ data = [], type = "buy" }) => {
  const formattedData = type === "buy" ? data : data.reverse();

  return (
    <div className="w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th align="left">Price</th>
            <th align="right">Amount</th>
            <th align="right">Total</th>
          </tr>
        </thead>
        <tbody>
          {formattedData.map((item, itemIndex) => {
            const [price, amount, total] = item;

            return (
              <tr key={itemIndex}>
                <td
                  align="left"
                  className={type === "buy" ? "text-green-500" : "text-red-500"}
                >
                  {decimalFormatter(price, 0)}
                </td>
                <td align="right">{decimalFormatter(amount)}</td>
                <td align="right">{decimalFormatter(total)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookPriceTable;
