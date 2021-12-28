import { matrixDot } from '../matrixDot';

describe('matrixDot', () => {
  it('should find dot product of matrices', () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    const result = [
      [21, 44],
      [33, 52],
    ];

    expect(matrixDot(A, B)).toStrictEqual(result);
  });

  it('should throw an error if some rows in a matrix have a different number of columns', () => {
    const A = [
      [3, 2, 5],
      [6, 4],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];

    expect(() => matrixDot(A, B)).toThrow();
  });

  it('should throw an error if the number of columns in the first matrix is not equal to the number of rows in the second matrix', () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6, 1],
      [5, 3, 4],
    ];

    expect(() => matrixDot(A, B)).toThrow();
  });
});
