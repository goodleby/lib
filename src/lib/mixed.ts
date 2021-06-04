import { randNum } from './math';

// Errors
export const ERR_TIME_FORMAT =
  'Strings must be in the same format: HH:MM or HH:MM:SS';
export const ERR_MAX_WAIT =
  '`maxWait` must be greater than or equal to the `wait` period';

/**
 * Filter out trailing slash from URL
 * @param url URL to filter
 * @returns URL without trailing slash
 */
export const popSlash = (url: string): string => url.replace(/\/+$/, '');

/**
 * Convert any URL to relative without trailing slash
 * @param url URL to convert
 * @returns Relative URL without trailing slash
 */
export const relativeUrl = (url: string): string =>
  popSlash(url.replace(/^(?:\/\/|[^/])+/, ''));

/**
 * Escape a string for RegExp
 * @param string String to escape
 * @returns Escaped string for RegExp
 */
export const regexpEscape = (string: string): string =>
  string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

/**
 * Replace all keys of the search object with the corresponding values in a string
 * @param string String to perform replacement
 * @param search Search object with replacement `key: value` entries
 * @returns Modified string
 */
export const replaceStr = (
  string: string,
  search: { [key: string]: string }
): string => {
  const regexp = new RegExp(
    Object.keys(search)
      .map((item) => regexpEscape(item))
      .join('|'),
    'g'
  );
  return string.replace(regexp, (match) => search[match]);
};

/**
 * Filter out all symbols and whitespaces in a phone number, adding a country code if it is not present
 * @param phone Phone number to filter
 * @param countryCode Optional. Country code to add to the filtered phone number if not present
 * @returns Filtered phone number
 */
export const filterPhone = (phone: string, countryCode?: string): string => {
  const regexp = new RegExp(
    `${countryCode ? `(^\\s*\\+?\\s*(${countryCode}))?` : ''}[^0-9]*`,
    'g'
  );
  return [countryCode, phone.replace(regexp, '')]
    .filter((item) => !!item)
    .join('');
};

/**
 * Convert any string to camel case
 * @param string String to convert
 * @param isUpper Optional, default is false. Whether to make the first letter uppercase
 * @returns Camel case string
 */
export const camelize = (string: string, isUpper = false): string => {
  const result = string.replace(/[^a-z]+([a-z])?/gi, (_, letter) =>
    letter ? letter.toUpperCase() : ''
  );
  return isUpper ? result : result[0].toLowerCase() + result.slice(1);
};

/**
 * Sum all passed time strings. Strings must be in the same format: HH:MM or HH:MM:SS
 * @param time Time strings in the format HH:MM or HH:MM:SS
 * @returns Result time string
 */
export const sumTime = (...time: string[]): string => {
  if (
    time.some((item) => time[0].split(':').length !== item.split(':').length)
  ) {
    throw new Error(ERR_TIME_FORMAT);
  }

  const operands = time[0].split(':').length;
  const numbers = Array(operands)
    .fill(0)
    .map((_, i) =>
      time.reduce((acc, item, j) => acc + Number(time[j].split(':')[i]), 0)
    );
  for (let i = operands - 2; i >= 0; i--) {
    numbers[i] += Math.floor(numbers[i + 1] / 60);
    numbers[i + 1] %= 60;
  }
  return numbers.map((item) => (item < 10 ? `0${item}` : item)).join(':');
};

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

/**
 * Randomly shuffle an array
 * @param array Array to shuffle
 * @returns Randomly shuffled array
 */
export const shuffle = <T>(array: T[]): T[] => {
  const arr = array.slice();
  for (let i = 0; i < arr.length; i++) {
    const randI = randNum(i, arr.length - i - 1);
    [arr[i], arr[randI]] = [arr[randI], arr[i]];
  }
  return arr;
};

/**
 * Get an array of all permutations of items
 * @param items Array of items for getting permutations
 * @returns Array of all permutations of items
 */
export const getPermutations = <T>(items: T[]): T[][] =>
  items.flatMap((item, i) => {
    if (items.length === 1) return [[item]];
    const mutations = getPermutations(items.filter((_, j) => i !== j));
    return mutations.map((rest) => [item, ...rest]);
  });

/**
 * Convert HTML string to an array of DOM elements
 * @param html HTML string to convert
 * @returns Array of DOM elements
 */
export const getDOM = (html: string): Element[] => {
  const block = document.createElement('div');
  block.innerHTML = html;
  return Array.from(block.children);
};

/**
 * Get the width of a vertical scrollbar
 * @returns Width of a vertical scrollbar
 */
export const getScrollbarWidth = (): number =>
  window.innerWidth - document.body.clientWidth;

/**
 * Get the height of a horizontal scrollbar
 * @returns Height of a horizontal scrollbar
 */
export const getScrollbarHeight = (): number =>
  window.innerHeight - document.body.clientHeight;

/**
 * Memoize a function to return a cached result for the same arguments
 * @param func Function to memoize
 * @param getId Function for generating an id for caching depending on the arguments
 * @returns Memoized function
 */
export const memoize = <T extends (...args: any[]) => any>(
  func: T,
  getId: (...args: Parameters<T>) => string = (...args) => JSON.stringify(args)
): ((...args: Parameters<T>) => ReturnType<T>) => {
  const cache: { [key: string]: ReturnType<T> } = {};
  return (...args: Parameters<T>) => {
    const key = getId(...args);
    return cache[key] || (cache[key] = func(...args));
  };
};

/**
 * Debounce a function to reduce requests frequency
 * @param func Function to debounce
 * @param wait Waiting period for the call
 * @param maxWait Optional. Maximum waiting period before the next call
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number,
  maxWait?: number
): ((...args: Parameters<T>) => void) => {
  if (maxWait && maxWait < wait) {
    throw new Error(ERR_MAX_WAIT);
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

/**
 * Listen to touch events and execute callback when the user has swiped for at least specified threshold
 * @param element Element to listen to touch events
 * @param callback Callback function that gets TocuhEvent and direction string
 * @param options Optional. Event listener options:
 * * `swipeLength` - Default is 50. Swipe threshold in pixels
 */
export const onSwipe = (
  element: HTMLElement,
  callback: (
    e: TouchEvent,
    direction: 'left' | 'right' | 'up' | 'down'
  ) => void,
  options: {
    swipeLength?: number;
  } = {}
): void => {
  const { swipeLength = 50 } = options;
  const swiper = {
    startX: 0,
    startY: 0,

    onTouchStart(e: TouchEvent) {
      const { clientX, clientY } = e.touches[0];
      this.startX = clientX;
      this.startY = clientY;
      element.addEventListener('touchend', swiper.onTouchEnd);
      element.addEventListener('touchmove', swiper.onTouchMove);
    },

    onTouchMove(e: TouchEvent) {
      const { startX, startY } = this;
      const { clientX, clientY } = e.touches[0];
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      if (deltaY <= -swipeLength) callback(e, 'up');
      if (deltaY >= swipeLength) callback(e, 'down');
      if (deltaX <= -swipeLength) callback(e, 'left');
      if (deltaX >= swipeLength) callback(e, 'right');
      if (Math.abs(deltaX) >= swipeLength || Math.abs(deltaY) >= swipeLength) {
        element.removeEventListener('touchend', swiper.onTouchEnd);
        element.removeEventListener('touchmove', swiper.onTouchMove);
      }
    },

    onTouchEnd() {
      element.removeEventListener('touchend', swiper.onTouchEnd);
      element.removeEventListener('touchmove', swiper.onTouchMove);
    },
  };

  element.addEventListener('touchstart', swiper.onTouchStart);
};
