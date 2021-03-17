import { getPrimes, getRandPrime } from '../primes';

describe('getPrimes', () => {
  it('should return array of prime numbers in a [min, max] range', () => {
    const min = 7;
    const max = 29;
    const result = [7, 11, 13, 17, 19, 23, 29];
    expect(getPrimes(min, max)).toStrictEqual(result);
  });
});

describe('getRandPrime', () => {
  beforeEach(() => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.99);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should return a random prime number in a [min, max] range', () => {
    const min = 7;
    const max = 29;
    expect(getRandPrime(min, max)).toBe(17);
    expect(getRandPrime(min, max)).toBe(7);
    expect(getRandPrime(min, max)).toBe(29);
  });
});
