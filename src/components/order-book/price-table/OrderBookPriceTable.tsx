import React, { FC, PropsWithChildren } from "react";

const OrderBookPriceTable: FC<
  PropsWithChildren<{ data?: Array<Array<string>>; type?: "buy" | "sell" }>
> = ({ data = [], type = "buy" }) => {
  let t = 0;

  const calculatedData = data.map((item) => {
    const [price, amount] = item;
    t += parseFloat(amount);
    return [price, amount, t];
  });

  const formattedData =
    type === "buy" ? calculatedData : calculatedData.reverse();

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
