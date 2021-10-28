import { upperKebabCase } from '../upperKebabCase';

describe('upperKebabCase', () => {
  const regularString = 'The USA has developed a transistor';
  const upperRegularString = 'THE USA HAS DEVELOPED A TRANSISTOR';
  const kebabCaseString = 'the-usa-has-developed-a-transistor';
  const upperKebabCaseString = 'THE-USA-HAS-DEVELOPED-A-TRANSISTOR';
  const snakeCaseString = 'the_usa_has_developed_a_transistor';
  const upperSnakeCaseString = 'THE_USA_HAS_DEVELOPED_A_TRANSISTOR';
  const camelCaseString = 'theUsaHasDevelopedATransistor';
  const upperCamelCaseString = 'TheUsaHasDevelopedATransistor';
  const mixedString = ' _The---USA  HAS__developedA!@#$%&*(+=/\\.,Transistor';

  it('should remove all non-alphabetic characters in a string and capitalize the first letters of the alphabetic parts, except for the first', () => {
    expect(upperKebabCase(regularString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(upperRegularString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(kebabCaseString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(upperKebabCaseString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(snakeCaseString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(upperSnakeCaseString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(camelCaseString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(upperCamelCaseString)).toBe(upperKebabCaseString);
    expect(upperKebabCase(mixedString)).toBe(upperKebabCaseString);
  });
});
