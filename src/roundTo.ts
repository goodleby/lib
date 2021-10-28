/**
 * Round a number with custom precision
 * @param number Number to round
 * @param decimals Number of decimal places to round to
 * @returns Rounded number
 */
export const roundTo = (number: number, decimals: number): number =>
  Math.round(number * 10 ** decimals) / 10 ** decimals;
