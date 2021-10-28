import { snakeCase } from '../snakeCase';

describe('snakeCase', () => {
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
    expect(snakeCase(regularString)).toBe(snakeCaseString);
    expect(snakeCase(upperRegularString)).toBe(snakeCaseString);
    expect(snakeCase(kebabCaseString)).toBe(snakeCaseString);
    expect(snakeCase(upperKebabCaseString)).toBe(snakeCaseString);
    expect(snakeCase(snakeCaseString)).toBe(snakeCaseString);
    expect(snakeCase(upperSnakeCaseString)).toBe(snakeCaseString);
    expect(snakeCase(camelCaseString)).toBe(snakeCaseString);
    expect(snakeCase(upperCamelCaseString)).toBe(snakeCaseString);
    expect(snakeCase(mixedString)).toBe(snakeCaseString);
  });
});
