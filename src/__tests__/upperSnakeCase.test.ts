import { upperSnakeCase } from '../upperSnakeCase';

describe('upperSnakeCase', () => {
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
    expect(upperSnakeCase(regularString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(upperRegularString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(kebabCaseString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(upperKebabCaseString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(snakeCaseString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(upperSnakeCaseString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(camelCaseString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(upperCamelCaseString)).toBe(upperSnakeCaseString);
    expect(upperSnakeCase(mixedString)).toBe(upperSnakeCaseString);
  });
});
