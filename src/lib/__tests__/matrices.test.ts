import {
  ERR_SAME_SIZE,
  ERR_ROW_LENGTH,
  ERR_MATRIX_MULTIPLY,
  matrixDot,
  matrixPlus,
  matrixMinus,
  linearMatrixDot,
  matrixApply,
  getMatrix,
  getMatrixClone,
  transposeMatrix,
} from '../matrices';

describe('matrixDot', () => {
  it('should multiply matrices', () => {
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

  it(`should throw "${ERR_ROW_LENGTH}"`, () => {
    const A = [
      [3, 2, 5],
      [6, 4],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixDot(A, B)).toThrow(ERR_ROW_LENGTH);
  });

  it(`should throw "${ERR_MATRIX_MULTIPLY}"`, () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6, 1],
      [5, 3, 4],
    ];
    expect(() => matrixDot(A, B)).toThrow(ERR_MATRIX_MULTIPLY);
  });
});

describe('matrixPlus', () => {
  it('should sum matrices', () => {
    const A = [
      [5, 2],
      [3, 7],
    ];
    const B = [
      [1, 3],
      [5, 2],
    ];
    const result = [
      [6, 5],
      [8, 9],
    ];
    expect(matrixPlus(A, B)).toStrictEqual(result);
  });

  it(`should throw "${ERR_SAME_SIZE}"`, () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixPlus(A, B)).toThrow(ERR_SAME_SIZE);
  });
});

describe('matrixMinus', () => {
  it('should substract matrices', () => {
    const A = [
      [5, 2],
      [3, 7],
    ];
    const B = [
      [1, 3],
      [5, 2],
    ];
    const result = [
      [4, -1],
      [-2, 5],
    ];
    expect(matrixMinus(A, B)).toStrictEqual(result);
  });

  it(`should throw "${ERR_SAME_SIZE}"`, () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixMinus(A, B)).toThrow(ERR_SAME_SIZE);
  });
});

describe('linearMatrixDot', () => {
  it('should multiply corresponding items of matrices', () => {
    const A = [
      [5, 2],
      [3, 7],
    ];
    const B = [
      [1, 3],
      [5, 2],
    ];
    const result = [
      [5, 6],
      [15, 14],
    ];
    expect(linearMatrixDot(A, B)).toStrictEqual(result);
  });

  it(`should throw "${ERR_SAME_SIZE}"`, () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => linearMatrixDot(A, B)).toThrow(ERR_SAME_SIZE);
  });
});

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

describe('getMatrix', () => {
  it('should create a matrix with rows and columns and fill it', () => {
    const rows = 2;
    const cols = 3;
    const result = [
      [3, 3, 3],
      [3, 3, 3],
    ];
    expect(getMatrix(rows, cols, () => 3)).toStrictEqual(result);
  });
});

describe('getMatrixClone', () => {
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
    expect(getMatrixClone(matrix)).toStrictEqual(result);
  });

  it('should take an optional second argument, a function that takes indices of each item of the matrix and fills it', () => {
    const fillFunc = jest.fn((indices: number[]) =>
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
    expect(getMatrixClone(matrix, fillFunc)).toStrictEqual(result);
    expect(fillFunc).toHaveBeenNthCalledWith(1, [0, 0]);
    expect(fillFunc).toHaveBeenNthCalledWith(2, [0, 1]);
    expect(fillFunc).toHaveBeenNthCalledWith(3, [0, 2]);
    expect(fillFunc).toHaveBeenNthCalledWith(4, [1, 0]);
    expect(fillFunc).toHaveBeenNthCalledWith(5, [1, 1]);
    expect(fillFunc).toHaveBeenNthCalledWith(6, [1, 2]);
  });
});

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

  it(`should throw "${ERR_ROW_LENGTH}"`, () => {
    const matrix = [
      [3, 2, 5],
      [6, 4],
    ];
    expect(() => transposeMatrix(matrix)).toThrow(ERR_ROW_LENGTH);
  });
});
