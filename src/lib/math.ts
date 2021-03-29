/**
 * Get random number with min and max including both, optional third argument for passing array of numbers to be excluded
 * @param min Minimum number to be able to generate
 * @param max Maximum number to be able to generate
 * @param excluded Array of numbers to be excluded from generation
 * @returns Random number within boundaries
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
 * @param rate Success rate, percent of truthful boolean values generated
 * @returns Random boolean
 */
export const getRandBool = (rate = 0.5): boolean => Math.random() < rate;

/**
 * Round to demanded amount of decimals only if needed
 * @param number Number to be rounded
 * @param decimals Amount of decimals to be rounded to. Default is 0 - works as regular Math.round
 * @returns Rounded number
 */
export const roundTo = (number: number, decimals = 0): number =>
  Math.round(number * 10 ** decimals) / 10 ** decimals;

/**
 * Floor to a demanded amount of decimals only if needed
 * @param number Number to be rounded
 * @param decimals Amount of decimals to be floored to. Default is 0 - works as regular Math.floor
 * @returns Rounded number
 */
export const floorTo = (number: number, decimals = 0): number =>
  Math.floor(number * 10 ** decimals) / 10 ** decimals;

/**
 * Get amount of decimals in a number
 * @param number Number to fetch amount of decimals from
 * @returns Amount of decimals in the passed number
 */
export const countDecimals = (number: number): number =>
  Math.floor(number) !== number ? number.toString().split('.')[1].length : 0;

/**
 * Find Gratest Common Divisor (GCD) of two numbers
 * @param a Number one
 * @param b Number two
 * @returns Gratest Common Divisor (GCD) of passed numbers
 */
export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

/**
 * Get factorial of a passed number
 * @param number Number to be factorized
 * @returns Factorial of the passed number
 */
export const factorial = (number: number): number => {
  let result = 1;
  for (let i = 2; i <= number; i++) result *= i;
  return result;
};

/**
 * Get average of passed numbers
 * @param numbers Numbers to get the average of
 * @returns Average of passed numbers
 */
export const avg = (...numbers: number[]): number =>
  numbers.reduce((acc, item) => acc + item, 0) / numbers.length;
