export declare const popSlash: (url: string) => string;
export declare const relativeUrl: (url: string) => string;
export declare const regexpEscape: (string: string) => string;
export declare const stringReplace: (string: string, search: {
    [key: string]: string;
}) => string;
export declare const filterPhone: (phone: string, countryCode?: string | undefined) => string;
export declare const camelize: (string: string) => string;
export declare const addTime: (...time: string[]) => string;
export declare const shuffleArr: <T>(array: T[]) => T[];
export declare const getPermutations: <T>(items: T[]) => T[][];
export declare const getDOM: (html: string) => Element[];
export declare const getScrollbarWidth: () => number;
export declare const getScrollbarHeight: () => number;
export declare const getMemoizedFn: (fn: (...args: any[]) => any) => (...args: any[]) => any;
export declare const debounce: (callback: (...args: any[]) => any, delay: number, maxDelay?: number | null) => (...args: any[]) => void;
export declare const onSwipe: (element: HTMLElement, callback: (e: TouchEvent, direction: 'left' | 'right' | 'up' | 'down') => void, opts?: {
    swipeLength: number;
}) => void;
