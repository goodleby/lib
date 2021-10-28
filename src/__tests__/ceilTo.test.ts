import { ceilTo } from '../ceilTo';

describe('ceilTo', () => {
  it('should ceil a number with custom precision', () => {
    expect(ceilTo(3.721, 2)).toBe(3.73);
    expect(ceilTo(3.725, 2)).toBe(3.73);
    expect(ceilTo(3.729, 2)).toBe(3.73);
  });
});
