/**
 * Generate a random number in the range [min, max] with an optional array of numbers to exclude
 * @param min Minimum number to generate
 * @param max Maximum number to generate
 * @param exclude Optional. Array of numbers to exclude from generation
 * @returns Random number
 */
export const randNum = (
  min: number,
  max: number,
  exclude: readonly number[] = []
): number => {
  let num = Math.floor(Math.random() * (max - min + 1 - exclude.length) + min);
  exclude
    .slice()
    .sort((a, b) => a - b)
    .every((exeption) => exeption <= num && (num++, true));
  return num;
};
