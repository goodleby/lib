import { getRandNum } from './math';

/**
 * Get array of prime numbers with min and max including both
 * @param min Minimum number to be able to generate
 * @param max Maximum number to be able to generate
 * @returns Array of prime numbers
 */
export const getPrimes = (min: number, max: number): number[] => {
  const result = Array(max + 1)
    .fill(0)
    .map((_, i) => i);
  for (let i = 2; i <= Math.sqrt(max + 1); i++) {
    for (let j = i ** 2; j < max + 1; j += i) delete result[j];
  }
  return Object.values(result.slice(min));
};

/**
 * Get a random prime number with min and max including both
 * @param min Minimum number to be able to generate
 * @param max Maximum number to be able to generate
 * @returns Random prime number
 */
export const getRandPrime = (min: number, max: number): number => {
  const primes = getPrimes(min, max);
  return primes[getRandNum(0, primes.length - 1)];
};
