/**
 * Escape a string for RegExp
 * @param string String to escape
 * @returns Escaped string for RegExp
 */
export const regexpEscape = (string: string): string =>
  string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
