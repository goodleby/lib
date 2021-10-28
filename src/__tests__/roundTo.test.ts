import { roundTo } from '../roundTo';

describe('roundTo', () => {
  it('should round a number with custom precision', () => {
    expect(roundTo(3.721, 2)).toBe(3.72);
    expect(roundTo(3.725, 2)).toBe(3.73);
    expect(roundTo(3.729, 2)).toBe(3.73);
  });
});
