/**
 * Filter out trailing slash from URL
 * @param url URL to filter
 * @returns URL without trailing slash
 */
export const popSlash = (url: string): string => url.replace(/\/+$/u, '');
