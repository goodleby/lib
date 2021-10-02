import { transposeMatrix } from '../transposeMatrix';

describe('transposeMatrix', () => {
  it('should transpose a matrix', () => {
    const matrix = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const result = [
      [3, 6],
      [2, 4],
      [5, 1],
    ];
    expect(transposeMatrix(matrix)).toStrictEqual(result);
  });

  it(`should throw an error if rows in a matrix have a different number of columns`, () => {
    const matrix = [
      [3, 2, 5],
      [6, 4],
    ];
    expect(() => transposeMatrix(matrix)).toThrow();
  });
});
