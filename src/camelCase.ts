import { getWords } from './getWords';

/**
 * Convert any string to camelCase
 * @param string String to convert
 * @returns camelCase string
 */
export const camelCase = (string: string): string => {
  return getWords(string)
    .map((word, i) => {
      if (i === 0) return word.toLowerCase();
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
};
