import { ceilTo } from '../ceilTo';

describe('ceilTo', () => {
  it('should ceil a number with custom precision', () => {
    expect(ceilTo(3.721, 2)).toBe(3.73);
  });

  it('should just ceil if no precision has been passed', () => {
    expect(ceilTo(3.721)).toBe(4);
  });
});
