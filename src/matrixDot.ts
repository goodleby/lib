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
    throw new Error(
      `[goodlebyLib/matrixDot] => All rows in a matrix must have the same number of columns. But received: A=${JSON.stringify(
        A
      )} and B=${JSON.stringify(B)}`
    );
  } else if (cols[0] !== B.length) {
    throw new Error(
      `[goodlebyLib/matrixDot] => The number of columns in the first matrix must be equal to the number of rows in the second matrix. But A has ${
        cols[0]
      } columns and B has ${B.length} rows. A=${JSON.stringify(
        A
      )} and B=${JSON.stringify(B)}`
    );
  }

  // Calculations
  return A.map((rowA) => {
    return B[0].map((_, xb) => {
      return rowA.reduce((acc, itemA, yb) => acc + itemA * B[yb][xb], 0);
    });
  });
};
