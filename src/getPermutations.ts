/**
 * Get an array of all permutations of items
 * @param items Array of items for getting permutations
 * @returns Array of all permutations of items
 */
export const getPermutations = <T>(items: readonly T[]): T[][] => {
  return items.flatMap((item, i) => {
    if (items.length === 1) return [[item]];
    const mutations = getPermutations(items.filter((_, j) => i !== j));
    return mutations.map((rest) => [item, ...rest]);
  });
};
