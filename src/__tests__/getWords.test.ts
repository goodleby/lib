import { getWords } from '../getWords';

describe('getWords', () => {
  it('should split a regular text into an array of words', () => {
    const regularString = 'The USA has developed a transistor';
    const result = ['The', 'USA', 'has', 'developed', 'a', 'transistor'];

    expect(getWords(regularString)).toStrictEqual(result);
  });

  it('should split an upper regular text into an array of words', () => {
    const upperRegularString = 'THE USA HAS DEVELOPED A TRANSISTOR';
    const result = ['THE', 'USA', 'HAS', 'DEVELOPED', 'A', 'TRANSISTOR'];

    expect(getWords(upperRegularString)).toStrictEqual(result);
  });

  it('should split a kebab-case into an array of words', () => {
    const kebabCaseString = 'the-usa-has-developed-a-transistor';
    const result = ['the', 'usa', 'has', 'developed', 'a', 'transistor'];

    expect(getWords(kebabCaseString)).toStrictEqual(result);
  });

  it('should split an UPPER-KEBAB-CASE into an array of words', () => {
    const upperKebabCaseString = 'THE-USA-HAS-DEVELOPED-A-TRANSISTOR';
    const result = ['THE', 'USA', 'HAS', 'DEVELOPED', 'A', 'TRANSISTOR'];

    expect(getWords(upperKebabCaseString)).toStrictEqual(result);
  });

  it('should split a snake_case into an array of words', () => {
    const snakeCaseString = 'the_usa_has_developed_a_transistor';
    const result = ['the', 'usa', 'has', 'developed', 'a', 'transistor'];

    expect(getWords(snakeCaseString)).toStrictEqual(result);
  });

  it('should split an UPPER_SNAKE_CASE into an array of words', () => {
    const upperSnakeCaseString = 'THE_USA_HAS_DEVELOPED_A_TRANSISTOR';
    const result = ['THE', 'USA', 'HAS', 'DEVELOPED', 'A', 'TRANSISTOR'];

    expect(getWords(upperSnakeCaseString)).toStrictEqual(result);
  });

  it('should split a camelCase into an array of words', () => {
    const camelCaseString = 'theUSAHasDevelopedATransistor';
    const result = ['the', 'USA', 'Has', 'Developed', 'A', 'Transistor'];

    expect(getWords(camelCaseString)).toStrictEqual(result);
  });

  it('should split an UpperCamelCase into an array of words', () => {
    const upperCamelCase = 'TheUSAHasDevelopedATransistor';
    const result = ['The', 'USA', 'Has', 'Developed', 'A', 'Transistor'];

    expect(getWords(upperCamelCase)).toStrictEqual(result);
  });

  it('should split a mixed case string into an array of words', () => {
    const mixedString =
      '   ___The---USA   HAS___developedA!@#$%^&*()+=/\\.,`±§Transistor';
    const result = ['The', 'USA', 'HAS', 'developed', 'A', 'Transistor'];

    expect(getWords(mixedString)).toStrictEqual(result);
  });
});
