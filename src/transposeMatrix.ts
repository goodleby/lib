/**
 * Transpose a matrix
 * @param matrix Matrix to transpose
 * @returns Transposed matrix
 */
export const transposeMatrix = <T>(matrix: readonly T[][]): T[][] => {
  // Error handling
  const cols = matrix[0].length;
  if (!matrix.every((row) => row.length === cols)) {
    throw new Error(
      `[goodlebyLib/transposeMatrix] => All rows in a matrix must have the same number of columns. But received: ${JSON.stringify(
        matrix
      )}`
    );
  }
  // Transformations
  return Array(cols)
    .fill(0)
    .map((_, i) => matrix.map((row) => row[i]));
};
