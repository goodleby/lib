import { getPermutations } from '../getPermutations';

describe('getPermutations', () => {
  it('should return an array of all permutations of items', () => {
    const items = [1, 2, 3];
    const result = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];

    const permutations = getPermutations(items);
    result.forEach((item) => expect(permutations).toContainEqual(item));

    expect(permutations.length).toBe(result.length);
  });
});
