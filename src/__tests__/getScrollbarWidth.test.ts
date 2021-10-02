import { getScrollbarWidth } from '../getScrollbarWidth';

describe('getScrollbarWidth', () => {
  it('should return the width of a vertical scrollbar', () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    expect(getScrollbarWidth()).toBe(scrollbarWidth);
  });
});
