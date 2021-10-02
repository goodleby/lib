/**
 * Convert any string to camel case
 * @param string String to convert
 * @param isUpper Optional, default is false. Whether to make the first letter uppercase
 * @returns Camel case string
 */
export const camelize = (string: string, isUpper = false): string => {
  const result = string.replace(/[^a-z]+([a-z])?/gi, (_, letter) =>
    letter ? letter.toUpperCase() : ''
  );
  return isUpper ? result : result[0].toLowerCase() + result.slice(1);
};
