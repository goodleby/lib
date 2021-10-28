import { floorTo } from '../floorTo';

describe('floorTo', () => {
  it('should floor a number with custom precision', () => {
    expect(floorTo(3.721, 2)).toBe(3.72);
    expect(floorTo(3.725, 2)).toBe(3.72);
    expect(floorTo(3.729, 2)).toBe(3.72);
  });
});
