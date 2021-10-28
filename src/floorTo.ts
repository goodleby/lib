/**
 * Floor a number with custom precision
 * @param number Number to floor
 * @param decimals Number of decimal places to floor to
 * @returns Floored number
 */
export const floorTo = (number: number, decimals: number): number =>
  Math.floor(number * 10 ** decimals) / 10 ** decimals;
