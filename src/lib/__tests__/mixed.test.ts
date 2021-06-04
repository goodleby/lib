import {
  ERR_TIME_FORMAT,
  ERR_MAX_WAIT,
  popSlash,
  relativeUrl,
  regexpEscape,
  replaceStr,
  filterPhone,
  camelize,
  sumTime,
  getYearWeek,
  shuffle,
  getPermutations,
  getDOM,
  getScrollbarWidth,
  getScrollbarHeight,
  memoize,
  debounce,
  onSwipe,
} from '../mixed';

describe('popSlash', () => {
  it('should filter out trailing slash from URL', () => {
    const trailed = 'https://example.com/';
    const doubleTrailed = 'https://example.com//';
    const untrailed = 'https://example.com';

    expect(popSlash(trailed)).toBe(untrailed);
    expect(popSlash(doubleTrailed)).toBe(untrailed);
    expect(popSlash(untrailed)).toBe(untrailed);
  });
});

describe('relativeUrl', () => {
  it('should convert any URL to relative without trailing slash', () => {
    const absolute = 'https://example.com/path/to/the/page';
    const absoluteTrailed = 'https://example.com/path/to/the/page/';
    const relative = '/path/to/the/page';
    const relativeTrailed = '/path/to/the/page/';

    expect(relativeUrl(absolute)).toBe(relative);
    expect(relativeUrl(absoluteTrailed)).toBe(relative);
    expect(relativeUrl(relative)).toBe(relative);
    expect(relativeUrl(relativeTrailed)).toBe(relative);
  });
});

describe('regexpEscape', () => {
  it('should escape the following symbols with a backslash in a string: . * + \\ - ? ^ $ { } ( ) | [ ]', () => {
    const unescaped = 'Escaped symbols: * + \\ - ? ^ $ { } ( ) | [ ]';
    const escaped =
      'Escaped symbols: \\* \\+ \\\\ \\- \\? \\^ \\$ \\{ \\} \\( \\) \\| \\[ \\]';

    expect(regexpEscape(unescaped)).toBe(escaped);
  });
});

describe('replaceStr', () => {
  it('should replace all keys of the search object with the corresponding values in a string', () => {
    const string = 'The quick brown fox jumps over the lazy dog';
    const search = {
      quick: 'slow',
      brown: 'red',
      dog: 'cat',
    };
    const result = 'The slow red fox jumps over the lazy cat';

    expect(replaceStr(string, search)).toBe(result);
  });
});

describe('filterPhone', () => {
  it('should filter out all symbols and whitespaces in a phone number', () => {
    const phone = '+1 (202) 555-0176';
    const filtered = '12025550176';

    expect(filterPhone(phone)).toBe(filtered);
  });

  it('should take an optional second argument, the country code to add to the filtered phone number if not present', () => {
    const phoneWithCountryCode = '+1 (334) 856-1437';
    const phoneWithoutCountryCode = '(334) 856-1437';
    const filtered = '13348561437';

    expect(filterPhone(phoneWithCountryCode, '1')).toBe(filtered);
    expect(filterPhone(phoneWithoutCountryCode, '1')).toBe(filtered);
  });
});

describe('camelize', () => {
  it('should remove all non-alphabetic characters in a string and capitalize the first letters of the alphabetic parts, except for the first', () => {
    const string = '$test-not_camelized String!';
    const camelCase = 'testNotCamelizedString';

    expect(camelize(string)).toBe(camelCase);
  });

  it('should take an optional second parameter that defines whether to make the first letter uppercase', () => {
    const string = '$test-not_camelized String!';
    const upperCamelCase = 'TestNotCamelizedString';

    expect(camelize(string, true)).toBe(upperCamelCase);
  });
});

describe('sumTime', () => {
  it('should sum all passed time strings in the format HH:MM', () => {
    expect(sumTime('01:25', '02:45')).toBe('04:10');
  });

  it('should sum all passed time strings in the format HH:MM:SS', () => {
    expect(sumTime('02:30:30', '03:29:30')).toBe('06:00:00');
  });

  it(`should throw "${ERR_TIME_FORMAT}"`, () => {
    expect(() => sumTime('1:30:30', '02:45')).toThrow(ERR_TIME_FORMAT);
  });
});

describe('getYearWeek', () => {
  it('should take date string, timestamp or Date object and return a week number of the year', () => {
    const string = '2021-05-30';
    const timestamp = new Date(string).getTime();
    const date = new Date(string);
    const weekNumber = 22;

    expect(getYearWeek(string)).toBe(weekNumber);
    expect(getYearWeek(timestamp)).toBe(weekNumber);
    expect(getYearWeek(date)).toBe(weekNumber);
  });
});

describe('shuffle', () => {
  it('should randomly shuffle an array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];

    const shuffled = shuffle(arr);
    expect(shuffle(arr)).not.toStrictEqual(arr);
    arr.forEach((item) => expect(shuffled).toContainEqual(item));
    expect(shuffled.length).toBe(arr.length);
  });
});

describe('getPermutations', () => {
  it('should return an array of all permutations of items', () => {
    const items = [1, 2, 3];
    const result = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];

    const permutations = getPermutations(items);
    result.forEach((item) => expect(permutations).toContainEqual(item));
    expect(permutations.length).toBe(result.length);
  });
});

describe('getDOM', () => {
  it('should convert HTML string to an array of DOM elements', () => {
    const html =
      '<div class="block"><p class="paragraph">Paragraph</p></div><div class="block">Text</div>';

    const elements = getDOM(html);
    const block = document.createElement('div');
    elements.forEach((element) => block.appendChild(element));
    expect(block.innerHTML).toStrictEqual(html);
  });
});

describe('getScrollbarWidth', () => {
  it('should return the width of a vertical scrollbar', () => {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;

    expect(getScrollbarWidth()).toBe(scrollbarWidth);
  });
});

describe('getScrollbarHeight', () => {
  it('should return the height of a horizontal scrollbar', () => {
    const scrollbarHeight = window.innerHeight - document.body.clientWidth;

    expect(getScrollbarHeight()).toBe(scrollbarHeight);
  });
});

describe('memoize', () => {
  it('should return a function that returns a cached result for the same arguments', () => {
    const func = jest.fn((description: string) => Symbol(description));

    const memoized = memoize(func);

    const value = memoized('unique');
    expect(memoized('unique')).toBe(value);
  });

  it('should take an optional second argument, a function for generating an id for caching depending on the arguments', () => {
    const func = jest.fn((description: string) => Symbol(description));
    const getId = jest.fn((description: string) =>
      Number.isNaN(Number(description)) ? 'string' : 'number'
    );

    const memoized = memoize(func, getId);
    const value1 = memoized('1');
    const value2 = memoized('4');
    const value3 = memoized('text');
    expect(value1).toBe(value2);
    expect(value1).not.toBe(value3);
  });

  it('should execute memoized function only once when new arguments are passed or a new id is returned', () => {
    // Without getId
    const func = jest.fn((description: string) => Symbol(description));

    const memoized = memoize(func);
    memoized('one');
    memoized('one');
    memoized('another');
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenNthCalledWith(1, 'one');
    expect(func).toHaveBeenNthCalledWith(2, 'another');

    // With getId
    const func2 = jest.fn(() => Symbol('unique'));
    const getId = jest
      .fn()
      .mockReturnValueOnce('oneId')
      .mockReturnValueOnce('oneId')
      .mockReturnValueOnce('anotherId');

    const memoized2 = memoize(func2, getId);
    memoized2();
    memoized2();
    memoized2();
    expect(func2).toHaveBeenCalledTimes(2);
  });
});

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should return a function that will execute the callback after the waiting period', () => {
    const callback = jest.fn(() => {
      // do nothing
    });
    const wait = 500;

    const debounced = debounce(callback, wait);
    debounced();
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(wait);
    expect(callback).toBeCalled();
  });

  it('should delay the execution of the callback every time the function is called', () => {
    const callback = jest.fn(() => {
      // do nothing
    });
    const wait = 500;

    const debounced = debounce(callback, wait);
    for (let i = 0; i < 20; i++) {
      debounced();
    }
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(wait);
    expect(callback).toBeCalled();
  });

  it('should execute the callback with the arguments passed to the function', () => {
    const callback = jest.fn((a: number, b: number) => a + b);
    const wait = 500;

    const debounced = debounce(callback, wait);
    debounced(3, 5);
    jest.advanceTimersByTime(wait);
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledWith(3, 5);
  });

  it('should take an optional third argument that specifies the maximum allowed period to wait until the callback is executed', () => {
    const callback = jest.fn(() => {
      // do nothing
    });
    const wait = 500;
    const maxWait = 1000;

    const debounced = debounce(callback, wait, maxWait);
    debounced();
    for (let i = 0; i < 10; i++) {
      jest.advanceTimersByTime(maxWait / 10);
      debounced();
    }
    expect(callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(wait);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it(`should throw "${ERR_MAX_WAIT}"`, () => {
    expect(() => debounce(jest.fn(), 500, 250)).toThrow(ERR_MAX_WAIT);
  });
});

describe('onSwipe', () => {
  const dispatchTouchEvent = (element: Element, type: string, x = 0, y = 0) => {
    const touches = [
      {
        identifier: 0,
        target: element,
        clientX: x,
        clientY: y,
        screenX: x,
        screenY: y,
        pageX: x,
        pageY: y,
        radiusX: 0,
        radiusY: 0,
        rotationAngle: 0,
        force: 1,
        altitudeAngle: 0,
        azimuthAngle: 0,
        touchType: 'direct' as TouchType,
      },
    ];
    const touchEvent = new TouchEvent(type, {
      changedTouches: touches,
      targetTouches: type !== 'touchend' ? touches : [],
      touches: type !== 'touchend' ? touches : [],
    });
    element.dispatchEvent(touchEvent);
    return touchEvent;
  };

  it('should execute a swipe callback with a direction string when the user has swiped for at least 50px threshold', () => {
    const threshold = 50;
    const element = document.createElement('div');
    const callback = jest.fn((e: TouchEvent, direction: string) => ({
      e,
      direction,
    }));

    onSwipe(element, callback);

    // No swipe
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', 0, threshold / 2);
    dispatchTouchEvent(element, 'touchend', 0, threshold / 2);

    // Swipe up
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', 0, -threshold / 2);
    const upEvent = dispatchTouchEvent(element, 'touchmove', 0, -threshold);
    dispatchTouchEvent(element, 'touchend', 0, -threshold);

    // Swipe down
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', 0, threshold / 2);
    const downEvent = dispatchTouchEvent(element, 'touchmove', 0, threshold);
    dispatchTouchEvent(element, 'touchend', 0, threshold);

    // Swipe left
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', -threshold / 2, 0);
    const leftEvent = dispatchTouchEvent(element, 'touchmove', -threshold, 0);
    dispatchTouchEvent(element, 'touchend', -threshold, 0);

    // Swipe right
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', threshold / 2, 0);
    const rightEvent = dispatchTouchEvent(element, 'touchmove', threshold, 0);
    dispatchTouchEvent(element, 'touchend', threshold, 0);

    expect(callback).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenNthCalledWith(1, upEvent, 'up');
    expect(callback).toHaveBeenNthCalledWith(2, downEvent, 'down');
    expect(callback).toHaveBeenNthCalledWith(3, leftEvent, 'left');
    expect(callback).toHaveBeenNthCalledWith(4, rightEvent, 'right');
  });

  it('should take an optional third argument with a swipeLength property that specifies the threshold', () => {
    const threshold = 100;
    const element = document.createElement('div');
    const callback = jest.fn((e: TouchEvent, direction: string) => ({
      e,
      direction,
    }));

    onSwipe(element, callback, { swipeLength: threshold });

    // No swipe
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', 0, threshold / 2);
    dispatchTouchEvent(element, 'touchend', 0, threshold / 2);

    // Swipe up
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', 0, -threshold / 2);
    const upEvent = dispatchTouchEvent(element, 'touchmove', 0, -threshold);
    dispatchTouchEvent(element, 'touchend', 0, -threshold);

    // Swipe down
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', 0, threshold / 2);
    const downEvent = dispatchTouchEvent(element, 'touchmove', 0, threshold);
    dispatchTouchEvent(element, 'touchend', 0, threshold);

    // Swipe left
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', -threshold / 2, 0);
    const leftEvent = dispatchTouchEvent(element, 'touchmove', -threshold, 0);
    dispatchTouchEvent(element, 'touchend', -threshold, 0);

    // Swipe right
    dispatchTouchEvent(element, 'touchstart', 0, 0);
    dispatchTouchEvent(element, 'touchmove', threshold / 2, 0);
    const rightEvent = dispatchTouchEvent(element, 'touchmove', threshold, 0);
    dispatchTouchEvent(element, 'touchend', threshold, 0);

    expect(callback).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenNthCalledWith(1, upEvent, 'up');
    expect(callback).toHaveBeenNthCalledWith(2, downEvent, 'down');
    expect(callback).toHaveBeenNthCalledWith(3, leftEvent, 'left');
    expect(callback).toHaveBeenNthCalledWith(4, rightEvent, 'right');
  });
});
