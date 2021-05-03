import {
  getRandNum,
  getRandBool,
  roundTo,
  floorTo,
  ceilTo,
  countDecimals,
  gcd,
  factorial,
  avg,
} from '../math';

describe('getRandNum', () => {
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

  it('should generate a random number in the range [min, max]', () => {
    expect(getRandNum(1, 9)).toBe(1);
    expect(getRandNum(1, 9)).toBe(5);
    expect(getRandNum(1, 9)).toBe(9);
  });

  it('should take an optional third argument, an array of numbers to exclude from generation', () => {
    expect(getRandNum(1, 9, [1, 5, 6, 9])).toBe(2);
    expect(getRandNum(1, 9, [1, 5, 6, 9])).toBe(4);
    expect(getRandNum(1, 9, [1, 5, 6, 9])).toBe(8);
  });
});

describe('getRandBool', () => {
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should generate a random boolean with success rate', () => {
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

  it('should have a default success rate of 0.5', () => {
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
  it('should round a number with custom precision', () => {
    expect(roundTo(3.726, 2)).toBe(3.73);
  });

  it('should just round if no precision has been passed', () => {
    expect(roundTo(3.726)).toBe(4);
  });
});

describe('floorTo', () => {
  it('should floor a number with custom precision', () => {
    expect(floorTo(3.729, 2)).toBe(3.72);
  });

  it('should just floor if no precision has been passed', () => {
    expect(floorTo(3.729)).toBe(3);
  });
});

describe('ceilTo', () => {
  it('should ceil a number with custom precision', () => {
    expect(ceilTo(3.721, 2)).toBe(3.73);
  });

  it('should just ceil if no precision has been passed', () => {
    expect(ceilTo(3.721)).toBe(4);
  });
});

describe('countDecimals', () => {
  it('should count the amount of decimal places in a number', () => {
    expect(countDecimals(1.200345)).toBe(6);
    expect(countDecimals(2)).toBe(0);
  });
});

describe('gcd', () => {
  it('should calculate the Greatest Common Divisor (GCD) of two numbers', () => {
    expect(gcd(9, 15)).toBe(3);
    expect(gcd(25, 10)).toBe(5);
  });
});

describe('factorial', () => {
  it('should calculate the factorial of a number', () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(12)).toBe(479001600);
  });
});

describe('avg', () => {
  it('should calculate the average of all passed numbers', () => {
    expect(avg(1, 2, 3, 4, 5, 6, 7, 8)).toBe(4.5);
    expect(avg(350, 891, 3, 2400)).toBe(911);
  });
});
