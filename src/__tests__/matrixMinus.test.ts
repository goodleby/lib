import { matrixMinus } from '../matrixMinus';

describe('matrixMinus', () => {
  it('should substract matrices', () => {
    const A = [
      [5, 2],
      [3, 7],
      [6, 1],
    ];
    const B = [
      [1, 3],
      [5, 2],
      [4, 9],
    ];
    const result = [
      [4, -1],
      [-2, 5],
      [2, -8],
    ];
    expect(matrixMinus(A, B)).toStrictEqual(result);
  });

  it(`should throw an error if one matrix has a different size than the other`, () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixMinus(A, B)).toThrow();
  });
});
