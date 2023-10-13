/* transform a number to a price format */
export const setPriceFormat = (amount: number = 0): string => {
  return new Intl.NumberFormat("de-DE").format(amount);
};
