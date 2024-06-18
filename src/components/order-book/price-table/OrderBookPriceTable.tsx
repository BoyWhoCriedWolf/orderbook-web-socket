import React, { FC, PropsWithChildren } from "react";

const OrderBookPriceTable: FC<
  PropsWithChildren<{ data?: Array<Array<string>> }>
> = ({ data = [] }) => {
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
            return (
              <tr key={itemIndex}>
                <td>{price}</td>
                <td>{amount}</td>
                <td>{parseFloat(price) * parseFloat(amount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderBookPriceTable;
