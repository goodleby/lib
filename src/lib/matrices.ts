// Errors
export const ERR_SAME_SIZE = 'Matrices must be the same size';
export const ERR_ROW_LENGTH =
  'All rows in a matrix must have the same number of columns';
export const ERR_MATRIX_MULTIPLY =
  'The number of columns in the 1st matrix must be equal to the number of rows in the 2nd matrix';

/**
 * Find dot product of matrices with error handling
 * @param A Matrix one
 * @param B Matrix two
 * @returns Result matrix
 */
export const matrixDot = (
  A: readonly number[][],
  B: readonly number[][]
): number[][] => {
  // Error handling
  const mx = [A, B];
  const cols = mx.map((matrix) => matrix[0].length);
  if (!mx.every((matrix, i) => matrix.every((row) => row.length === cols[i]))) {
    throw new Error(ERR_ROW_LENGTH);
  } else if (cols[0] !== B.length) {
    throw new Error(ERR_MATRIX_MULTIPLY);
  }

  // Calculations
  return A.map((rowA) =>
    B[0].map((_, xb) =>
      rowA.reduce((acc, itemA, yb) => acc + itemA * B[yb][xb], 0)
    )
  );
};

/**
 * Sum matrices with error handling
 * @param matrices Matrices to sum
 * @returns Result matrix
 */
export const matrixPlus = (...matrices: readonly number[][][]): number[][] => {
  // Error handling
  const mx = matrices[0];
  const rows = mx.length;
  const cols = mx[0].length;
  if (
    matrices.some(
      (matrix) =>
        matrix.some((row) => row.length !== cols) || matrix.length !== rows
    )
  ) {
    throw new Error(ERR_SAME_SIZE);
  }

  // Calculations
  return matrices.reduce((acc, matrix) =>
    acc.map((row, y) => row.map((item, x) => item + matrix[y][x]))
  );
};

/**
 * Substract matrices with error handling
 * @param A Matrix one
 * @param B Matrix two
 * @returns Result matrix
 */
export const matrixMinus = (
  A: readonly number[][],
  B: readonly number[][]
): number[][] => {
  // Error handling
  const mx = [A, B];
  const cols = A[0].length;
  if (
    !mx.every((matrix) => matrix.every((row) => row.length === cols)) ||
    A.length !== B.length
  ) {
    throw new Error(ERR_SAME_SIZE);
  }

  // Calculations
  return A.map((rowA, yb) => rowA.map((itemA, xb) => itemA - B[yb][xb]));
};

/**
 * Multiply corresponding items of matrices with error handling
 * @param matrices Matrices to multiply
 * @returns Result matrix
 */
export const matrixMultiply = (
  ...matrices: readonly number[][][]
): number[][] => {
  // Error handling
  const mx = matrices[0];
  const cols = mx.length;
  const rows = mx[0].length;
  if (
    matrices.some(
      (matrix) =>
        matrix.some((row) => row.length !== cols) || matrix.length !== rows
    )
  ) {
    throw new Error(ERR_SAME_SIZE);
  }

  // Calculations
  return matrices.reduce((acc, matrix) =>
    acc.map((row, y) => row.map((item, x) => item * matrix[y][x]))
  );
};

/**
 * Apply a function to each item of the matrix
 * @param matrix Matrix to apply the function
 * @param func Function to apply to the matrix
 * @returns Result matrix
 */
export const matrixApply = <T>(
  matrix: readonly T[][],
  func: (item: T, x: number, y: number) => T
): T[][] => matrix.map((row, y) => row.map((item, x) => func(item, x, y)));

/**
 * Create a matrix with rows and columns and fill it
 * @param rows Number of rows in the matrix
 * @param cols Number of columns in the matrix
 * @param fillFunc Matrix fill function
 * @returns Custom matrix
 */
export const getMatrix = <T>(
  rows: number,
  cols: number,
  fillFunc: (x: number, y: number) => T
): T[][] =>
  Array(rows)
    .fill(0)
    .map((row, y) =>
      Array(cols)
        .fill(0)
        .map((col, x) => fillFunc(x, y))
    );

/**
 * Deep clone a matrix and optionally fill it
 * @param matrix Matrix to clone
 * @param fillFunc Optional. Function that takes indices of each item of the matrix and fills it
 * @returns Deep clone of a matrix
 */
export const cloneMatrix = <T>(
  matrix: readonly T[],
  fillFunc?: (indices: readonly number[]) => any,
  indices: readonly number[] = []
): T[] =>
  matrix.map((item, i) => {
    const updatedIndices = indices.concat([i]);
    if (Array.isArray(item)) {
      return cloneMatrix(item, fillFunc, updatedIndices);
    }
    return fillFunc ? fillFunc(updatedIndices) : item;
  });

/**
 * Transpose a matrix
 * @param matrix Matrix to transpose
 * @returns Transposed matrix
 */
export const transposeMatrix = <T>(matrix: readonly T[][]): T[][] => {
  // Error handling
  const cols = matrix[0].length;
  if (!matrix.every((row) => row.length === cols)) {
    throw new Error(ERR_ROW_LENGTH);
  }

  // Transformations
  return Array(cols)
    .fill(0)
    .map((_, i) => matrix.map((row) => row[i]));
};
