import { camelCase } from '../camelCase';

describe('camelCase', () => {
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
    expect(camelCase(regularString)).toBe(camelCaseString);
    expect(camelCase(upperRegularString)).toBe(camelCaseString);
    expect(camelCase(kebabCaseString)).toBe(camelCaseString);
    expect(camelCase(upperKebabCaseString)).toBe(camelCaseString);
    expect(camelCase(snakeCaseString)).toBe(camelCaseString);
    expect(camelCase(upperSnakeCaseString)).toBe(camelCaseString);
    expect(camelCase(camelCaseString)).toBe(camelCaseString);
    expect(camelCase(upperCamelCaseString)).toBe(camelCaseString);
    expect(camelCase(mixedString)).toBe(camelCaseString);
  });
});
