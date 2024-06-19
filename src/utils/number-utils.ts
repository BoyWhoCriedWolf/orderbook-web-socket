export const decimalFormatter = (p?: number | string, decimalDigit = 4) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalDigit,
  });

  return formatter.format(Number(p ?? 0));
};
