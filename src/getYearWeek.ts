/**
 * Get a week number of the year
 * @param date Date in any format to get a week number
 * @returns Week number of the year
 */
export const getYearWeek = (date: string | number | Date): number => {
  const parsed = new Date(date);
  // Remove all time units
  parsed.setUTCHours(0, 0, 0, 0);
  // Go to this week's Thursday because all weeks of the year must contain Thursday.
  // E.g. A year starting on Friday will be counted as the previous year's week
  parsed.setUTCDate(parsed.getUTCDate() + 3 - parsed.getUTCDay());

  const yearStart = new Date(parsed.getUTCFullYear(), 0);

  return Math.ceil(
    (parsed.getTime() - yearStart.getTime()) / (7 * 24 * 60 * 60 * 1000) // 7 days in ms
  );
};
