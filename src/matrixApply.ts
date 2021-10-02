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
