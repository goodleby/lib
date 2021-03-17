/**
 * Remove all trailing slashes from the end of url
 * @param url Url to remove slashed from
 */
export const popSlash = (url: string): string => url.replace(/\/+$/, '');

/**
 * Convert url to relative
 * @param url Url to be converted
 */
export const relativeUrl = (url: string): string =>
  popSlash(url.replace(/^(?:\/\/|[^/])+/, ''));

/**
 * Escape a string to use it in a regular expression
 * @param string String to be escaped
 */
export const regexpEscape = (string: string): string =>
  string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');

/**
 * Replace all keys of the passed object in the string with respective values
 * @param string String to be replaced
 * @param search Search object with replacement `key: value` entries
 */
export const stringReplace = (
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
 * Filter out all symbols and whitespaces in a phone number, adding a country code if needed
 * @param phone Phone to be filtered
 * @param countryCode Optional. Country code to be added if needed
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
 * Convert any string into camel case string
 * @param string String to be converted
 */
export const camelize = (string: string): string => {
  const result = string.replace(/[^a-z]+([a-z])?/gi, (_, letter) =>
    letter ? letter.toUpperCase() : ''
  );
  return result[0].toLowerCase() + result.slice(1);
};

/**
 * Add up time strings of format HH:MM or HH:MM:SS
 * @param time Time string in format HH:MM or HH:MM:SS
 */
export const addTime = (...time: string[]): string => {
  const operands = time.reduce(
    (acc, item) =>
      item.split(':').length > acc ? item.split(':').length : acc,
    0
  );
  const sum = Array(operands)
    .fill(0)
    .map((_, i) =>
      time.reduce((acc, item, j) => acc + Number(time[j].split(':')[i] || 0), 0)
    );
  for (let i = operands - 2; i >= 0; i--) {
    sum[i] += Math.floor(sum[i + 1] / 60);
    sum[i + 1] %= 60;
  }
  return sum.map((item) => (item < 10 ? `0${item}` : item)).join(':');
};

/**
 * Get a randomly shuffled array
 * @param array Array to be shuffled
 */
export const shuffleArr = <T>(array: T[]): T[] => {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const randI = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randI]] = [arr[randI], arr[i]];
  }
  return arr;
};

/**
 * Convert html string into array of DOM elements
 * @param html Html string to be converted
 */
export const getDOM = (html: string): Element[] => {
  const block = document.createElement('div');
  block.innerHTML = html;
  return Array.from(block.children);
};

/**
 * Get a vertical scrollbar width
 */
export const getScrollbarWidth = (): number =>
  window.innerWidth - document.body.clientWidth;

/**
 * Get a horizontal scrollbar height
 */
export const getScrollbarHeight = (): number =>
  window.innerHeight - document.body.clientHeight;

/**
 * Get memoized function from function for better performance
 * @param fn Function to be memoized
 */
export const getMemoizedFn = (
  fn: (...args: any[]) => any
): ((...args: any[]) => any) => {
  const cache: { [key: string]: any } = {};
  return (...args: any[]) => {
    const key = JSON.stringify(args);
    return cache[key] || (cache[key] = fn(...args));
  };
};

/**
 * Get debounced function with reduced requests frequency
 * @param callback Function to be debounced
 * @param delay Delay until the call is made
 * @param maxDelay Optional. Maximum delay allowed
 */
export const debounce = (
  callback: (...args: any[]) => any,
  delay: number,
  maxDelay: number | null = null
): ((...args: any[]) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  let lastCall: number | null = null;
  const call = (...args: any[]) => {
    lastCall = null;
    callback(...args);
  };
  return (...args: any[]) => {
    if (!lastCall) lastCall = performance.now();
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    if (maxDelay && performance.now() - lastCall >= maxDelay) {
      call(...args);
    } else timeout = setTimeout(() => call(...args), delay);
  };
};

/**
 * Uses a callback when the user swipes on the element passing event and direction as arguments
 * @param element Element to register swipes on
 * @param callback Function to be called on swipe event
 * @param opts Optional. Options of the event
 */
export const onSwipe = (
  element: HTMLElement,
  callback: (
    e: TouchEvent,
    direction: 'left' | 'right' | 'up' | 'down'
  ) => void,
  opts = {
    swipeLength: 50,
  }
): void => {
  const swiper = {
    startX: 0,
    startY: 0,
    onTouchStart(e: TouchEvent) {
      const { clientX, clientY } = e.changedTouches[0];
      this.startX = clientX;
      this.startY = clientY;
      element.addEventListener('touchend', this.onTouchEnd);
      element.addEventListener('touchmove', this.onTouchMove);
    },
    onTouchMove(e: TouchEvent) {
      const { swipeLength } = opts;
      const { startX, startY } = this;
      const { clientX, clientY } = e.changedTouches[0];
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      if (deltaX >= swipeLength) callback(e, 'right');
      if (deltaX <= -swipeLength) callback(e, 'left');
      if (deltaY >= swipeLength) callback(e, 'down');
      if (deltaY <= -swipeLength) callback(e, 'up');
      if (Math.abs(deltaX) >= swipeLength || Math.abs(deltaY) >= swipeLength) {
        element.removeEventListener('touchend', this.onTouchEnd);
        element.removeEventListener('touchmove', this.onTouchMove);
      }
    },
    onTouchEnd() {
      element.removeEventListener('touchend', this.onTouchEnd);
      element.removeEventListener('touchmove', this.onTouchMove);
    },
  };
  element.addEventListener('touchstart', swiper.onTouchStart);
};
