import React, { FC, PropsWithChildren } from "react";

const OrderBookPriceTable: FC<
  PropsWithChildren<{ data?: Array<Array<string>>; type?: "buy" | "sell" }>
> = ({ data = [], type = "buy" }) => {
  const formattedData = type === "buy" ? data : data.reverse();

  return (
    <div className="w-full">
      <table>
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
                  className={type === "buy" ? "text-red-500" : "text-green-500"}
                >
                  {price}
                </td>
                <td align="right">{amount}</td>
                <td align="right">{total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookPriceTable;
