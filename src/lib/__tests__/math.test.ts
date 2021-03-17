import {
  getRandNum,
  getRandBool,
  roundTo,
  floorTo,
  countDecimals,
  gcd,
} from '../math';

describe('getRandNum', () => {
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

  it('should return a random number in a [min, max] range', () => {
    expect(getRandNum(1, 9)).toBe(5);
    expect(getRandNum(1, 9)).toBe(1);
    expect(getRandNum(1, 9)).toBe(9);
  });

  it('should exclude passed numbers as array', () => {
    expect(getRandNum(1, 9, [1, 5, 6, 9])).toBe(4);
    expect(getRandNum(1, 9, [1, 5, 6, 9])).toBe(2);
    expect(getRandNum(1, 9, [1, 5, 6, 9])).toBe(8);
  });
});

describe('getRandBool', () => {
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should return a random boolean value with a passed chance rate', () => {
    const rate = 0.2;
    const range = 10;
    let random = 0;
    jest
      .spyOn(global.Math, 'random')
      .mockImplementation(() => random++ / range);
    const results = Array(range)
      .fill(null)
      .map(() => getRandBool(rate));
    expect(results.filter((item) => item)).toHaveLength(rate * range);
  });

  it('should have a default rate 0.5', () => {
    const rate = 0.5;
    const range = 10;
    let random = 0;
    jest
      .spyOn(global.Math, 'random')
      .mockImplementation(() => random++ / range);
    const results = Array(range)
      .fill(null)
      .map(() => getRandBool());
    expect(results.filter((item) => item)).toHaveLength(rate * range);
  });
});

describe('roundTo', () => {
  it('should round to a demanded amount of decimals only if needed', () => {
    expect(roundTo(3.1410000592, 5)).toBe(3.141);
    expect(roundTo(3.141592, 5)).toBe(3.14159);
  });

  it('should just round if nothing was passed', () => {
    expect(roundTo(3.1410000592)).toBe(3);
  });
});

describe('floorTo', () => {
  it('should floor to a demanded amount of decimals only if needed', () => {
    expect(floorTo(3.1410000592, 5)).toBe(3.141);
    expect(floorTo(3.141592, 5)).toBe(3.14159);
  });

  it('should just round if nothing was passed', () => {
    expect(floorTo(3.1410000592)).toBe(3);
  });
});

describe('countDecimals', () => {
  it('should return an amount of decimals in a number', () => {
    expect(countDecimals(1.200345)).toBe(6);
    expect(countDecimals(2)).toBe(0);
  });
});

describe('gcd', () => {
  it('should return the gratest common divisor of two passed numbers no matter in what order', () => {
    expect(gcd(9, 15)).toBe(3);
    expect(gcd(25, 10)).toBe(5);
  });
});
