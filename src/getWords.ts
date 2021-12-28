/**
 * Split a string into an array of words
 * @param string String to split
 * @returns Array of words
 */
export const getWords = (string: string): string[] => {
  const result = string
    // Separate all first uppercase letters with a dash
    .replace(/([A-Z])[A-Z]*/gu, (match) => `-${match}`)
    // Separate all first uppercase letters of that are part of coming after an uppercase word
    .replace(
      /([A-Z]+)([A-Z])(?=[a-z])/gu,
      (_, start, letter) => `${start}-${letter}`
    )
    // Split by all non-alphabetical and non-numerical characters
    .split(/[^a-z0-9]/giu)
    // Filter out empty strings (in the beginning or in the end)
    .filter((item) => item !== '');
  return result;
};
