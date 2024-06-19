import React, { FC, PropsWithChildren } from "react";

const OrderBookPriceTable: FC<
  PropsWithChildren<{ data?: Array<Array<string>> }>
> = ({ data = [] }) => {
  let t = 0;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th align="left">Price</th>
            <th align="right">Amount</th>
            <th align="right">Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, itemIndex) => {
            const [price, amount] = item;
            t += parseFloat(amount);

            return (
              <tr key={itemIndex}>
                <td>{price}</td>
                <td>{amount}</td>
                <td>{t}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookPriceTable;
