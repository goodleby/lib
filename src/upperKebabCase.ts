import { getWords } from './getWords';

/**
 * Convert any string to UpperKebabCase
 * @param string String to convert
 * @returns UpperCamel case string
 */
export const upperKebabCase = (string: string): string =>
  getWords(string).join('-').toUpperCase();
