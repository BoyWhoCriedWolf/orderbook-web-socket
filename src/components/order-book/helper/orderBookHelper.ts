export const calculateOrderBookData = (
  data: Array<Array<string>>,
  startTotal = 0
) => {
  let t = startTotal;

  const calculatedData = data
    .sort((a, b) => parseFloat(a?.[0]) - parseFloat(b?.[0]))
    .map((item, itemIndex) => {
      const [price, amount] = item;
      t += parseFloat(amount);
      return [price, amount, t];
    })
    // .slice(-10);

  return calculatedData;
};
