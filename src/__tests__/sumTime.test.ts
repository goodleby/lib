import { sumTime } from '../sumTime';

describe('sumTime', () => {
  it('should sum all passed time strings in the format HH:MM', () => {
    expect(sumTime('01:25', '02:45')).toBe('04:10');
  });

  it('should sum all passed time strings in the format HH:MM:SS', () => {
    expect(sumTime('02:30:30', '03:29:30')).toBe('06:00:00');
  });

  it('should throw an error if some strings are provided in different formats: HH:MM and HH:MM:SS', () => {
    expect(() => sumTime('1:30:30', '02:45')).toThrow();
  });
});
