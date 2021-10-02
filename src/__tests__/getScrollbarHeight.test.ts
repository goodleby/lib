import { getScrollbarHeight } from '../getScrollbarHeight';

describe('getScrollbarHeight', () => {
  it('should return the height of a horizontal scrollbar', () => {
    const scrollbarHeight = window.innerHeight - document.body.clientWidth;

    expect(getScrollbarHeight()).toBe(scrollbarHeight);
  });
});
