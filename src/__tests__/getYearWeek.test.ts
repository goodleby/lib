import { getYearWeek } from '../getYearWeek';

describe('getYearWeek', () => {
  it('should take date string, timestamp or Date object and return a week number of the year', () => {
    const string = '2021-05-30';
    const timestamp = new Date(string).getTime();
    const date = new Date(string);
    const weekNumber = 22;

    expect(getYearWeek(string)).toBe(weekNumber);
    expect(getYearWeek(timestamp)).toBe(weekNumber);
    expect(getYearWeek(date)).toBe(weekNumber);
  });
});
