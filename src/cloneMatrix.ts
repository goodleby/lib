/* eslint-disable @typescript-eslint/no-unsafe-return */
/**
 * Deep clone a matrix and optionally fill it
 * @param matrix Matrix to clone
 * @param fillFunc Optional. Function that takes indices of each item of the matrix and fills it
 * @returns Deep clone of a matrix
 */
export const cloneMatrix = <T>(
  matrix: readonly T[],
  fillFunc?: (indices: readonly number[]) => any, // eslint-disable-line @typescript-eslint/no-explicit-any
  indices: readonly number[] = []
): T[] => {
  return matrix.map((item, i) => {
    const updatedIndices = indices.concat([i]);
    if (Array.isArray(item)) {
      return cloneMatrix(item, fillFunc, updatedIndices);
    }
    return fillFunc ? fillFunc(updatedIndices) : item;
  });
};
