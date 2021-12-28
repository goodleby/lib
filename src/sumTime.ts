/**
 * Sum all passed time strings. Strings must be in the same format: HH:MM or HH:MM:SS
 * @param time Time strings in the format HH:MM or HH:MM:SS
 * @returns Result time string
 */
export const sumTime = (...time: readonly string[]): string => {
  if (
    time.some((item) => time[0].split(':').length !== item.split(':').length)
  ) {
    throw new Error(
      `[goodlebyLib/sumTime] => Strings must be in the same format: HH:MM or HH:MM:SS. But received: ${time.join(
        ', '
      )}`
    );
  }

  const operands = time[0].split(':').length;
  const numbers = Array(operands)
    .fill(0)
    .map((zero, i) => {
      return time.reduce((acc, _, j) => acc + Number(time[j].split(':')[i]), 0);
    });
  for (let i = operands - 2; i >= 0; i--) {
    numbers[i] += Math.floor(numbers[i + 1] / 60);
    numbers[i + 1] %= 60;
  }

  return numbers.map((item) => (item < 10 ? `0${item}` : item)).join(':');
};
