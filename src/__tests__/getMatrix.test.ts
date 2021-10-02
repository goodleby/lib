import { getMatrix } from '../getMatrix';

describe('getMatrix', () => {
  it('should create a matrix with rows and columns and fill it with a function that takes x and y coordinates of each item of the matrix', () => {
    const fillFunc = jest.fn((x: number, y: number) => x + y);
    const rows = 3;
    const cols = 2;
    const result = [
      [0, 1],
      [1, 2],
      [2, 3],
    ];
    expect(getMatrix(rows, cols, fillFunc)).toStrictEqual(result);
    expect(fillFunc).toHaveBeenNthCalledWith(1, 0, 0);
    expect(fillFunc).toHaveBeenNthCalledWith(2, 1, 0);
    expect(fillFunc).toHaveBeenNthCalledWith(3, 0, 1);
    expect(fillFunc).toHaveBeenNthCalledWith(4, 1, 1);
    expect(fillFunc).toHaveBeenNthCalledWith(5, 0, 2);
    expect(fillFunc).toHaveBeenNthCalledWith(6, 1, 2);
  });
});
