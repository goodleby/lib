import { shuffle } from '../shuffle';

describe('shuffle', () => {
  it('should randomly shuffle an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    const shuffled = shuffle(arr);

    expect(shuffle(arr)).not.toStrictEqual(arr);

    arr.forEach((item) => {
      expect(shuffled).toContainEqual(item);
    });

    expect(shuffled).toHaveLength(arr.length);
  });
});
