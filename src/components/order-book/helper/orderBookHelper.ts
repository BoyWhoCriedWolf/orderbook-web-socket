export const calculateOrderBookData = (data: Array<Array<string>>) => {
  let t = data?.[0]?.[2] ? parseFloat(data?.[0]?.[2]) : 0;

  const calculatedData = data
    .sort((a, b) => parseFloat(a?.[0]) - parseFloat(b?.[0]))
    .map((item) => {
      const [price, amount] = item;
      t += parseFloat(amount);
      return [price, amount, t];
    })
    .slice(-10);

  return calculatedData;
};
