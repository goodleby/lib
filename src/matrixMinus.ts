/**
 * Subtract matrices with error handling
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
    throw new Error(
      `[goodlebyLib/matrixMinus] => Matrices must be the same size. But received: A=${JSON.stringify(
        A
      )} and B=${JSON.stringify(B)}`
    );
  }

  // Calculations
  return A.map((rowA, yb) => rowA.map((itemA, xb) => itemA - B[yb][xb]));
};
