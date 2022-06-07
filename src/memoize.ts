/**
 * Memoize a function to return a cached result for the same arguments
 * @param func Function to memoize
 * @param getId Function for generating an id for caching depending on the arguments
 * @returns Memoized function
 */
export const memoize = <T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T,
  getId: (...args: Parameters<T>) => string = (...args) => JSON.stringify(args)
): ((...args: Parameters<T>) => ReturnType<T>) => {
  const cache: { [key: string]: ReturnType<T> } = {};
  return (...args: Parameters<T>) => {
    const key = getId(...args);
    return cache[key] || (cache[key] = func(...args));
  };
};
