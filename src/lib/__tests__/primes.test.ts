import { getPrimes, randPrime } from '../primes';

describe('getPrimes', () => {
  it('should generate an array of primes in the range [min, max]', () => {
    const min = 0;
    const max = 29;
    const result = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

    expect(getPrimes(min, max)).toStrictEqual(result);
  });
});

describe('randPrime', () => {
  beforeEach(() => {
    jest
      .spyOn(global.Math, 'random')
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.99);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should generate a random prime in the range [min, max]', () => {
    const min = 7;
    const max = 29;

    expect(randPrime(min, max)).toBe(7);
    expect(randPrime(min, max)).toBe(17);
    expect(randPrime(min, max)).toBe(29);
  });
});
