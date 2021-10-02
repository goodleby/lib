import { floorTo } from '../floorTo';

describe('floorTo', () => {
  it('should floor a number with custom precision', () => {
    expect(floorTo(3.729, 2)).toBe(3.72);
  });

  it('should just floor if no precision has been passed', () => {
    expect(floorTo(3.729)).toBe(3);
  });
});
