import { popSlash } from './popSlash';

/**
 * Convert any URL to relative without trailing slash
 * @param url URL to convert
 * @returns Relative URL without trailing slash
 */
export const relativeUrl = (url: string): string =>
  popSlash(url.replace(/^(?:\/\/|[^/])+/, ''));
