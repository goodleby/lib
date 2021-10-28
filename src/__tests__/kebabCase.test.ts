import { kebabCase } from '../kebabCase';

describe('kebebCase', () => {
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
    expect(kebabCase(regularString)).toBe(kebabCaseString);
    expect(kebabCase(upperRegularString)).toBe(kebabCaseString);
    expect(kebabCase(kebabCaseString)).toBe(kebabCaseString);
    expect(kebabCase(upperKebabCaseString)).toBe(kebabCaseString);
    expect(kebabCase(snakeCaseString)).toBe(kebabCaseString);
    expect(kebabCase(upperSnakeCaseString)).toBe(kebabCaseString);
    expect(kebabCase(camelCaseString)).toBe(kebabCaseString);
    expect(kebabCase(upperCamelCaseString)).toBe(kebabCaseString);
    expect(kebabCase(mixedString)).toBe(kebabCaseString);
  });
});
