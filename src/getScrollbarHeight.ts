/**
 * Get the height of a horizontal scrollbar
 * @returns Height of a horizontal scrollbar
 */
export const getScrollbarHeight = (): number => {
  return window.innerHeight - document.body.clientHeight;
};
