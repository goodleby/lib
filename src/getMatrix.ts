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
): T[][] => {
  return Array(rows)
    .fill(0)
    .map((row, y) => {
      return Array(cols)
        .fill(0)
        .map((col, x) => fillFunc(x, y));
    });
};
