import { relativeUrl } from '../relativeUrl';

describe('relativeUrl', () => {
  it('should convert any URL to relative without trailing slash', () => {
    const absolute = 'https://example.com/path/to/the/page';
    const absoluteTrailed = 'https://example.com/path/to/the/page/';
    const relative = '/path/to/the/page';
    const relativeTrailed = '/path/to/the/page/';

    expect(relativeUrl(absolute)).toBe(relative);
    expect(relativeUrl(absoluteTrailed)).toBe(relative);
    expect(relativeUrl(relative)).toBe(relative);
    expect(relativeUrl(relativeTrailed)).toBe(relative);
  });
});
