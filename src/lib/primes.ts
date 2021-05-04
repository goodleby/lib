import { randNum } from './math';

/**
 * Create an array of primes in the range [min, max]
 * @param min Minimum number to include
 * @param max Maximum number to include
 * @returns Array of primes
 */
export const getPrimes = (min: number, max: number): number[] => {
  const result = Array(max + 1)
    .fill(0)
    .map((_, i) => i);
  for (let i = 2; i <= Math.sqrt(max + 1); i++) {
    for (let j = i ** 2; j < max + 1; j += i) delete result[j];
  }
  return Object.values(result.slice(Math.max(min, 2)));
};

/**
 * Generate a random prime in the range [min, max]
 * @param min Minimum number to generate
 * @param max Maximum number to generate
 * @returns Random prime
 */
export const randPrime = (min: number, max: number): number => {
  const primes = getPrimes(min, max);
  return primes[randNum(0, primes.length - 1)];
};
