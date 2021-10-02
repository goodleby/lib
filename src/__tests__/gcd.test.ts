import { gcd } from '../gcd';

describe('gcd', () => {
  it('should calculate the Greatest Common Divisor (GCD) of two numbers', () => {
    expect(gcd(9, 15)).toBe(3);
    expect(gcd(25, 10)).toBe(5);
  });
});
