import { cloneMatrix } from '../cloneMatrix';

describe('cloneMatrix', () => {
  it('should deep clone a matrix', () => {
    const matrix = [
      [
        [3, 2, 5],
        [6, 4, 1],
      ],
      [
        [7, 2, 1],
        [3, 3, 8],
      ],
    ];
    const result = [
      [
        [3, 2, 5],
        [6, 4, 1],
      ],
      [
        [7, 2, 1],
        [3, 3, 8],
      ],
    ];
    expect(cloneMatrix(matrix)).toStrictEqual(result);
  });

  it('should take an optional second argument, a function that takes indices of each item of the matrix and fills it', () => {
    const fillFunc = jest.fn((indices: readonly number[]) =>
      indices.reduce((acc, item) => acc + item, 0)
    );
    const matrix = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const result = [
      [0, 1, 2],
      [1, 2, 3],
    ];
    expect(cloneMatrix(matrix, fillFunc)).toStrictEqual(result);
    expect(fillFunc).toHaveBeenNthCalledWith(1, [0, 0]);
    expect(fillFunc).toHaveBeenNthCalledWith(2, [0, 1]);
    expect(fillFunc).toHaveBeenNthCalledWith(3, [0, 2]);
    expect(fillFunc).toHaveBeenNthCalledWith(4, [1, 0]);
    expect(fillFunc).toHaveBeenNthCalledWith(5, [1, 1]);
    expect(fillFunc).toHaveBeenNthCalledWith(6, [1, 2]);
  });
});
