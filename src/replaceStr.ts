import { regexpEscape } from './regexpEscape';

/**
 * Replace all keys of the search object with the corresponding values in a string
 * @param string String to perform replacement
 * @param search Search object with replacement `key: value` entries
 * @returns Modified string
 */
export const replaceStr = (
  string: string,
  search: Readonly<{ [key: string]: string }>
): string => {
  const regexp = new RegExp(
    Object.keys(search)
      .map((item) => regexpEscape(item))
      .join('|'),
    'gu'
  );
  return string.replace(regexp, (match) => search[match]);
};
