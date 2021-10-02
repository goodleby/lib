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
    throw new Error(
      `[goodlebyLib/matrixPlus] => Matrices must be the same size. But received: ${matrices
        .map((matrix) => JSON.stringify(matrix))
        .join(', ')}`
    );
  }
  // Calculations
  return matrices.reduce((acc, matrix) =>
    acc.map((row, y) => row.map((item, x) => item + matrix[y][x]))
  );
};
