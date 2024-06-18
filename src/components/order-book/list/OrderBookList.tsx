import React, { useEffect } from "react";
import centrifuge from "../../../services";
const OrderBookList = () => {
  const init = () => {
    centrifuge.pools.getPools().subscribe({
      next: (value) => {
        console.log("next", value); // Pool[]
      },
      complete: () => {
        console.log("complete");
      },
      error: () => {
        console.log("error");
      },
    });
  };

  useEffect(() => {
    init();
  }, []);

  return <div>OrderBookList</div>;
};

export default OrderBookList;
