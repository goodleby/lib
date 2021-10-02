import { replaceStr } from '../replaceStr';

describe('replaceStr', () => {
  it('should replace all keys of the search object with the corresponding values in a string', () => {
    const string = 'The quick brown fox jumps over the lazy dog';
    const search = {
      quick: 'slow',
      brown: 'red',
      dog: 'cat',
    };
    const result = 'The slow red fox jumps over the lazy cat';

    expect(replaceStr(string, search)).toBe(result);
  });
});
