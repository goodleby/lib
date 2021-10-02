import { getPrimes } from './getPrimes';
import { randNum } from './randNum';

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
