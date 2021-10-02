export declare const memoize: <T extends (...args: readonly any[]) => any>(func: T, getId?: (...args: Parameters<T>) => string) => (...args: Parameters<T>) => ReturnType<T>;
