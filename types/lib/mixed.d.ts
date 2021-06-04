export declare const ERR_TIME_FORMAT = "Strings must be in the same format: HH:MM or HH:MM:SS";
export declare const ERR_MAX_WAIT = "`maxWait` must be greater than or equal to the `wait` period";
export declare const popSlash: (url: string) => string;
export declare const relativeUrl: (url: string) => string;
export declare const regexpEscape: (string: string) => string;
export declare const replaceStr: (string: string, search: {
    [key: string]: string;
}) => string;
export declare const filterPhone: (phone: string, countryCode?: string | undefined) => string;
export declare const camelize: (string: string, isUpper?: boolean) => string;
export declare const sumTime: (...time: string[]) => string;
export declare const getYearWeek: (date: string | number | Date) => number;
export declare const shuffle: <T>(array: T[]) => T[];
export declare const getPermutations: <T>(items: T[]) => T[][];
export declare const getDOM: (html: string) => Element[];
export declare const getScrollbarWidth: () => number;
export declare const getScrollbarHeight: () => number;
export declare const memoize: <T extends (...args: any[]) => any>(func: T, getId?: (...args: Parameters<T>) => string) => (...args: Parameters<T>) => ReturnType<T>;
export declare const debounce: <T extends (...args: any[]) => void>(func: T, wait: number, maxWait?: number | undefined) => (...args: Parameters<T>) => void;
export declare const onSwipe: (element: HTMLElement, callback: (e: TouchEvent, direction: 'left' | 'right' | 'up' | 'down') => void, options?: {
    swipeLength?: number;
}) => void;
