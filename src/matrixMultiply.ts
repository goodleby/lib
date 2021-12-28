/**
 * Multiply corresponding items of matrices with error handling
 * @param matrices Matrices to multiply
 * @returns Result matrix
 */
export const matrixMultiply = (
  ...matrices: readonly number[][][]
): number[][] => {
  // Error handling
  const [mx] = matrices;
  const rows = mx.length;
  const cols = mx[0].length;
  if (
    matrices.some((matrix) => {
      return (
        matrix.some((row) => row.length !== cols) || matrix.length !== rows
      );
    })
  ) {
    throw new Error(
      `[goodlebyLib/matrixMultiply] => Matrices must be the same size. But received: ${matrices
        .map((matrix) => JSON.stringify(matrix))
        .join(', ')}`
    );
  }

  // Calculations
  return matrices.reduce((acc, matrix) => {
    return acc.map((row, y) => row.map((item, x) => item * matrix[y][x]));
  });
};
