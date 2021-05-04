/**
 * Generate a random number in the range [min, max] with an optional array of numbers to exclude
 * @param min Minimum number to generate
 * @param max Maximum number to generate
 * @param exclude Optional. Array of numbers to exclude from generation
 * @returns Random number
 */
export const randNum = (
  min: number,
  max: number,
  exclude: number[] = []
): number => {
  let num = Math.floor(Math.random() * (max - min + 1 - exclude.length) + min);
  exclude
    .sort((a, b) => a - b)
    .every((exeption) => exeption <= num && (num++, true));
  return num;
};

/**
 * Generate a random boolean with success rate
 * @param rate Optional, default is 0.5. Success rate, percentage of generated true booleans
 * @returns Random boolean
 */
export const randBool = (rate = 0.5): boolean => Math.random() < rate;

/**
 * Round a number with custom precision
 * @param number Number to round
 * @param decimals Optional, default is 0. Number of decimal places to round to
 * @returns Rounded number
 */
export const roundTo = (number: number, decimals = 0): number =>
  Math.round(number * 10 ** decimals) / 10 ** decimals;

/**
 * Floor a number with custom precision
 * @param number Number to floor
 * @param decimals Optional, default is 0. Number of decimal places to floor to
 * @returns Floored number
 */
export const floorTo = (number: number, decimals = 0): number =>
  Math.floor(number * 10 ** decimals) / 10 ** decimals;

/**
 * Ceil a number with custom precision
 * @param number Number to ceil
 * @param decimals Optional, default is 0. Number of decimal places to ceil to
 * @returns Ceiled number
 */
export const ceilTo = (number: number, decimals = 0): number =>
  Math.ceil(number * 10 ** decimals) / 10 ** decimals;

/**
 * Count the amount of decimal places in a number
 * @param number Number for counting decimal places
 * @returns Amount of decimal places in a number
 */
export const countDecimals = (number: number): number =>
  Math.floor(number) !== number ? number.toString().split('.')[1].length : 0;

/**
 * Calculate the Greatest Common Divisor (GCD) of two numbers
 * @param a Number one
 * @param b Number two
 * @returns Greatest Common Divisor (GCD)
 */
export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);

/**
 * Calculate the factorial of a number
 * @param number Number to calculate the factorial
 * @returns Factorial of a number
 */
export const factorial = (number: number): number => {
  let result = 1;
  for (let i = 2; i <= number; i++) result *= i;
  return result;
};

/**
 * Calculate the average of all passed numbers
 * @param numbers Numbers to calculate the average
 * @returns Average number
 */
export const avg = (...numbers: number[]): number =>
  numbers.reduce((acc, item) => acc + item, 0) / numbers.length;
