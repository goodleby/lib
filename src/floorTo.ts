/**
 * Floor a number with custom precision
 * @param number Number to floor
 * @param decimals Optional, default is 0. Number of decimal places to floor to
 * @returns Floored number
 */
export const floorTo = (number: number, decimals = 0): number =>
  Math.floor(number * 10 ** decimals) / 10 ** decimals;
