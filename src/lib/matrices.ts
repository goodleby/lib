/**
 * Multiply matrices with math error handling
 * @param A Matrix one
 * @param B Matrix two
 * @returns Result matrix
 */
export const matrixDot = (A: number[][], B: number[][]): number[][] => {
  // Math error handling
  const mx = [A, B];
  const cols = mx.map((matrix) => matrix[0].length);
  if (!mx.every((matrix, i) => matrix.every((row) => row.length === cols[i]))) {
    throw new Error(
      'All rows in a matrix must have an equal amount of columns'
    );
  } else if (cols[0] !== B.length) {
    throw new Error(
      'Amount of columns in the 1st matrix must match an amount of rows in the 2nd matrix'
    );
  }
  // Calculations
  return A.map((rowA) =>
    B[0].map((_, xb) =>
      rowA.reduce((acc, itemA, yb) => acc + itemA * B[yb][xb], 0)
    )
  );
};

/**
 * Add up matrices with math error handling
 * @param A Matrix one
 * @param B Matrix two
 * @returns Result matrix
 */
export const matrixPlus = (A: number[][], B: number[][]): number[][] => {
  // Math error handling
  const mx = [A, B];
  const cols = A[0].length;
  if (
    !mx.every((matrix) => matrix.every((row) => row.length === cols)) ||
    A.length !== B.length
  ) {
    throw new Error('Matrices must be same size');
  }
  // Calculations
  return A.map((rowA, yb) => rowA.map((itemA, xb) => itemA + B[yb][xb]));
};

/**
 * Substract matrices with math error handling
 * @param A Matrix one
 * @param B Matrix two
 * @returns Result matrix
 */
export const matrixMinus = (A: number[][], B: number[][]): number[][] => {
  // Math error handling
  const mx = [A, B];
  const cols = A[0].length;
  if (
    !mx.every((matrix) => matrix.every((row) => row.length === cols)) ||
    A.length !== B.length
  ) {
    throw new Error('Matrices must be same size');
  }
  // Calculations
  return A.map((rowA, yb) => rowA.map((itemA, xb) => itemA - B[yb][xb]));
};

// Regular multiplication between matrices' corresponding items
export const linearMatrixDot = (A: number[][], B: number[][]): number[][] => {
  // Math error handling
  const mx = [A, B];
  const cols = A[0].length;
  if (
    !mx.every((item) => item.every((row) => row.length === cols)) ||
    A.length !== B.length
  ) {
    throw new Error('Matrices must be same size');
  }
  // Calculations
  return A.map((rowA, yb) => rowA.map((colA, xb) => colA * B[yb][xb]));
};

/**
 * Apply function to each matrix item
 * @param matrix Matrix to apply the function
 * @param fn Function to apply to the matrix
 * @returns Result matrix
 */
export const matrixApply = <T>(
  matrix: T[][],
  fn: (item: T, x: number, y: number) => T
): T[][] => matrix.map((row, y) => row.map((item, x) => fn(item, x, y)));

// Get a custom filled matrix with rows and cols
export const getMatrix = <T>(
  rows: number,
  cols: number,
  fillFunction: (x: number, y: number) => T
): T[][] =>
  Array(rows)
    .fill(0)
    .map((row, y) =>
      Array(cols)
        .fill(0)
        .map((col, x) => fillFunction(x, y))
    );

/**
 * Get a deep matrix clone, optionally custom filled
 * @param matrix Matrix to be cloned
 * @param fillFn Optional function to fill the clone
 * @param indexes Internal functionality parameter, do not set it
 * @returns Deep clone of the matrix
 */
export const getMatrixClone = <T>(
  matrix: T,
  fillFn?: (indexes?: number[]) => any,
  indexes: number[] = []
): T => {
  if (Array.isArray(matrix)) {
    return matrix.map((item, i) =>
      getMatrixClone(item, fillFn, indexes.concat([i]))
    ) as T & T[];
  }
  return fillFn ? fillFn(indexes) : matrix;
};

/**
 * Rotate a matrix shape
 * @param matrix Matrix to be transposed
 * @returns Transposed matrix
 */
export const transposeMatrix = <T>(matrix: T[][]): T[][] => {
  // Math error handling
  const cols = matrix[0].length;
  if (!matrix.every((row) => row.length === cols)) {
    throw new Error(
      'All rows in a matrix must have an equal amount of columns'
    );
  }
  // Transformations
  return Array(cols)
    .fill(0)
    .map((_, i) => matrix.map((row) => row[i]));
};
