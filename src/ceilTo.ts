/**
 * Ceil a number with custom precision
 * @param number Number to ceil
 * @param decimals Optional, default is 0. Number of decimal places to ceil to
 * @returns Ceiled number
 */
export const ceilTo = (number: number, decimals = 0): number =>
  Math.ceil(number * 10 ** decimals) / 10 ** decimals;
