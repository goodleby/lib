import { getWords } from './getWords';

/**
 * Convert any string to UPPER_SNAKE_CASE
 * @param string String to convert
 * @returns UPPER_SNAKE_CASE string
 */
export const upperSnakeCase = (string: string): string => {
  return getWords(string).join('_').toUpperCase();
};
