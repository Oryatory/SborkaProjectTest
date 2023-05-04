export const formatPrice = (number: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  })
    .format(number / 100)
    .replace(/,/g, " ")
    .replace(/\$/g, "$ ");
};
