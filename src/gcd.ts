/**
 * Calculate the Greatest Common Divisor (GCD) of two numbers
 * @param a Number one
 * @param b Number two
 * @returns Greatest Common Divisor (GCD)
 */
export const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};
