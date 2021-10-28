import { getWords } from './getWords';

/**
 * Convert any string to snake_case
 * @param string String to convert
 * @returns snake_case string
 */
export const snakeCase = (string: string): string =>
  getWords(string).join('_').toLowerCase();
