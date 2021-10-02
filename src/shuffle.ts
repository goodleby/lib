import { randNum } from './randNum';

/**
 * Randomly shuffle an array
 * @param array Array to shuffle
 * @returns Randomly shuffled array
 */
export const shuffle = <T>(array: readonly T[]): T[] => {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    const randI = randNum(i, arr.length - i - 1);
    [arr[i], arr[randI]] = [arr[randI], arr[i]];
  }
  return arr;
};
