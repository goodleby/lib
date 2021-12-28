import { matrixApply } from '../matrixApply';

describe('matrixApply', () => {
  it('should apply a function to each item of the matrix', () => {
    const matrix = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const result = [
      [9, 4, 25],
      [36, 16, 1],
    ];

    expect(matrixApply(matrix, (num) => num ** 2)).toStrictEqual(result);
  });
});
