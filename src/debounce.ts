/**
 * Debounce a function to reduce requests frequency
 * @param func Function to debounce
 * @param wait Waiting period for the call
 * @param maxWait Optional. Maximum waiting period before the next call
 * @returns Debounced function
 */
export const debounce = <T extends (...args: readonly any[]) => void>(
  func: T,
  wait: number,
  maxWait?: number
): ((...args: Parameters<T>) => void) => {
  if (maxWait && maxWait < wait) {
    throw new Error(
      `[goodlebyLib/debounce] => \`maxWait\` must be greater than or equal to the \`wait\` period. But received: maxWait=${maxWait} and wait=${wait}`
    );
  }

  let mainTimer: NodeJS.Timeout | null = null;
  let maxTimer: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>): void => {
    const call = () => {
      func(...args);
      if (mainTimer) {
        clearTimeout(mainTimer);
        mainTimer = null;
      }
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
    };

    if (mainTimer) {
      clearTimeout(mainTimer);
      mainTimer = null;
    } else if (maxWait) {
      maxTimer = setTimeout(call, maxWait);
    }

    mainTimer = setTimeout(call, wait);
  };
};
