import { getWords } from './getWords';

/**
 * Convert any string to UpperCamelCase
 * @param string String to convert
 * @returns UpperCamel case string
 */
export const upperCamelCase = (string: string): string => {
  return getWords(string)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};
