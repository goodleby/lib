import { camelize } from '../camelize';

describe('camelize', () => {
  it('should remove all non-alphabetic characters in a string and capitalize the first letters of the alphabetic parts, except for the first', () => {
    const string = '$test-not_camelized String!';
    const camelCase = 'testNotCamelizedString';

    expect(camelize(string)).toBe(camelCase);
  });

  it('should take an optional second parameter that defines whether to make the first letter uppercase', () => {
    const string = '$test-not_camelized String!';
    const upperCamelCase = 'TestNotCamelizedString';

    expect(camelize(string, true)).toBe(upperCamelCase);
  });
});
