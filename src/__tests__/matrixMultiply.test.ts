import { matrixMultiply } from '../matrixMultiply';

describe('matrixMultiply', () => {
  it('should multiply corresponding items of matrices', () => {
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
      [5, 6],
      [15, 14],
      [24, 9],
    ];
    expect(matrixMultiply(A, B)).toStrictEqual(result);
  });

  it(`should throw an error if some of the matrices have a different size`, () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixMultiply(A, B)).toThrow();
  });
});
