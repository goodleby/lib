import { randNum } from '../randNum';

describe('randNum', () => {
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
    expect(randNum(1, 9)).toBe(1);
    expect(randNum(1, 9)).toBe(5);
    expect(randNum(1, 9)).toBe(9);
  });

  it('should take an optional third argument, an array of numbers to exclude from generation', () => {
    expect(randNum(1, 9, [1, 5, 6, 9])).toBe(2);
    expect(randNum(1, 9, [1, 5, 6, 9])).toBe(4);
    expect(randNum(1, 9, [1, 5, 6, 9])).toBe(8);
  });
});
