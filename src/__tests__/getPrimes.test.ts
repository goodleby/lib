import { getPrimes } from '../getPrimes';

describe('getPrimes', () => {
  it('should generate an array of primes in the range [min, max]', () => {
    const min = 0;
    const max = 29;
    const result = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    expect(getPrimes(min, max)).toStrictEqual(result);
  });
});
