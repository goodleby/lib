import { popSlash } from '../popSlash';

describe('popSlash', () => {
  it('should filter out trailing slash from URL', () => {
    const trailed = 'https://example.com/';
    const doubleTrailed = 'https://example.com//';
    const untrailed = 'https://example.com';

    expect(popSlash(trailed)).toBe(untrailed);
    expect(popSlash(doubleTrailed)).toBe(untrailed);
    expect(popSlash(untrailed)).toBe(untrailed);
  });
});
