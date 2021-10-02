export declare const debounce: <T extends (...args: readonly any[]) => void>(func: T, wait: number, maxWait?: number | undefined) => (...args: Parameters<T>) => void;
