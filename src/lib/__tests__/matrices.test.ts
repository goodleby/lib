import {
  matrixDot,
  matrixPlus,
  matrixMinus,
  matrixApply,
  linearMatrixDot,
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

  it('should throw an error "All rows in a matrix must have an equal amount of columns"', () => {
    const A = [
      [3, 2, 5],
      [6, 4],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixDot(A, B)).toThrow(
      'All rows in a matrix must have an equal amount of columns'
    );
  });

  it('should throw an error "Amount of columns in the 1st matrix must match an amount of rows in the 2nd matrix"', () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6, 1],
      [5, 3, 4],
    ];
    expect(() => matrixDot(A, B)).toThrow(
      'Amount of columns in the 1st matrix must match an amount of rows in the 2nd matrix'
    );
  });
});

describe('matrixPlus', () => {
  it('should add up matrices', () => {
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

  it('should throw an error "Matrices must be same size"', () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixPlus(A, B)).toThrow('Matrices must be same size');
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

  it('should throw an error "Matrices must be same size"', () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => matrixMinus(A, B)).toThrow('Matrices must be same size');
  });
});

describe('matrixApply', () => {
  it('should apply function to each matrix item', () => {
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

  it('should throw an error "Matrices must be same size"', () => {
    const A = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const B = [
      [2, 6],
      [5, 3],
      [1, 4],
    ];
    expect(() => linearMatrixDot(A, B)).toThrow('Matrices must be same size');
  });
});

describe('getMatrix', () => {
  it('should return a custom filled matrix with passed rows and cols', () => {
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
  it('should return a deep clone of the passed matrix', () => {
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

  it('should return a custom filled clone of the passed matrix', () => {
    const fillFn = jest.fn((indexes: number[]) =>
      indexes.reduce((acc, item) => acc + item, 0)
    );
    const matrix = [
      [3, 2, 5],
      [6, 4, 1],
    ];
    const result = [
      [0, 1, 2],
      [1, 2, 3],
    ];
    expect(getMatrixClone(matrix, fillFn)).toStrictEqual(result);
    expect(fillFn).toHaveBeenNthCalledWith(1, [0, 0]);
    expect(fillFn).toHaveBeenNthCalledWith(2, [0, 1]);
    expect(fillFn).toHaveBeenNthCalledWith(3, [0, 2]);
    expect(fillFn).toHaveBeenNthCalledWith(4, [1, 0]);
    expect(fillFn).toHaveBeenNthCalledWith(5, [1, 1]);
    expect(fillFn).toHaveBeenNthCalledWith(6, [1, 2]);
  });
});

describe('transposeMatrix', () => {
  it('should rotate a matrix shape', () => {
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

  it('should throw an error "All rows in a matrix must have an equal amount of columns"', () => {
    const matrix = [
      [3, 2, 5],
      [6, 4],
    ];
    expect(() => transposeMatrix(matrix)).toThrow(
      'All rows in a matrix must have an equal amount of columns'
    );
  });
});
