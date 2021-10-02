import { randPrime } from '../randPrime';

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
