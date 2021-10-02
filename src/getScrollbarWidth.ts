/**
 * Get the width of a vertical scrollbar
 * @returns Width of a vertical scrollbar
 */
export const getScrollbarWidth = (): number =>
  window.innerWidth - document.body.clientWidth;
