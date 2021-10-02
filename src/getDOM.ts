/**
 * Convert HTML string to an array of DOM elements
 * @param html HTML string to convert
 * @returns Array of DOM elements
 */
export const getDOM = (html: string): Element[] => {
  const block = document.createElement('div');
  block.innerHTML = html;
  return Array.from(block.children);
};
