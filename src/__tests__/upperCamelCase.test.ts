import { upperCamelCase } from '../upperCamelCase';

describe('upperCamelCase', () => {
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
    expect(upperCamelCase(regularString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(upperRegularString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(kebabCaseString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(upperKebabCaseString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(snakeCaseString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(upperSnakeCaseString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(camelCaseString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(upperCamelCaseString)).toBe(upperCamelCaseString);
    expect(upperCamelCase(mixedString)).toBe(upperCamelCaseString);
  });
});
