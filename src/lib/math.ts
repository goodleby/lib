/**
 * Get random number with min and max including both, optional third argument for passing array of numbers to be excluded
 * @param min Minimum number to be able to generate
 * @param max Maximum number to be able to generate
 * @param excluded Array of numbers to be excluded from generation
 */
export const getRandNum = (
  min: number,
  max: number,
  excluded: number[] = []
): number => {
  let num = Math.floor(Math.random() * (max - min + 1 - excluded.length) + min);
  excluded
    .sort((a, b) => a - b)
    .every((exeption) => exeption <= num && (num++, true));
  return num;
};

/**
 * Get random boolean value with success rate
 * @param rate Success rate, percent of truthful boolean values generated.
 */
export const getRandBool = (rate = 0.5): boolean => Math.random() < rate;

/**
 * Round to demanded amount of decimals only if needed
 * @param number Number to be rounded
 * @param decimals Amount of decimals to be rounded to. Default is 0 - works as regular Math.round
 */
export const roundTo = (number: number, decimals = 0): number =>
  Math.round(number * 10 ** decimals) / 10 ** decimals;

/**
 * Floor to demanded amount of decimals only if needed
 * @param number Number to be rounded
 * @param decimals Amount of decimals to be floored to. Default is 0 - works as regular Math.floor
 */
export const floorTo = (number: number, decimals = 0): number =>
  Math.floor(number * 10 ** decimals) / 10 ** decimals;

/**
 * Get amount of decimals in a number
 * @param number Number to fetch amount of decimals from
 */
export const countDecimals = (number: number): number =>
  Math.floor(number) !== number ? number.toString().split('.')[1].length : 0;

/**
 * Find Gratest Common Divisor (GCD) of two numbers
 * @param a Number one
 * @param b Number two
 */
export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);
