import { getWords } from './getWords';

/**
 * Convert any string to kebab-case
 * @param string String to convert
 * @returns kebab-case string
 */
export const kebabCase = (string: string): string => {
  return getWords(string).join('-').toLowerCase();
};
