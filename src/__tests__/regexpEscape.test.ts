import { regexpEscape } from '../regexpEscape';

describe('regexpEscape', () => {
  it('should escape the following symbols with a backslash in a string: . * + \\ - ? ^ $ { } ( ) | [ ]', () => {
    const unescaped = 'Escaped symbols: * + \\ - ? ^ $ { } ( ) | [ ]';
    const escaped =
      'Escaped symbols: \\* \\+ \\\\ \\- \\? \\^ \\$ \\{ \\} \\( \\) \\| \\[ \\]';

    expect(regexpEscape(unescaped)).toBe(escaped);
  });
});
