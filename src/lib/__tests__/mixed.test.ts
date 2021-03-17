import {
  popSlash,
  relativeUrl,
  regexpEscape,
  stringReplace,
  filterPhone,
  camelize,
  addTime,
  shuffleArr,
  getDOM,
  getScrollbarWidth,
  getScrollbarHeight,
  getMemoizedFn,
  debounce,
} from '../mixed';

describe('popSlash', () => {
  it('should return url without slashes on the end', () => {
    const trailed = 'https://example.com/';
    const doubleTrailed = 'https://example.com//';
    const untrailed = 'https://example.com';
    expect(popSlash(trailed)).toBe(untrailed);
    expect(popSlash(doubleTrailed)).toBe(untrailed);
    expect(popSlash(untrailed)).toBe(untrailed);
  });
});

describe('relativeUrl', () => {
  it('should convert any url to relative url without trailing slash', () => {
    const absolute = 'https://example.com/path/to/the/page';
    const relative = '/path/to/the/page';
    expect(relativeUrl(absolute)).toBe(relative);
    expect(relativeUrl(relative)).toBe(relative);
  });
});

describe('regexpEscape', () => {
  it('should escape with a backslash following symbols: . * + \\ - ? ^ $ { } ( ) | [ ]', () => {
    expect(regexpEscape('.')).toBe('\\.');
    expect(regexpEscape('*')).toBe('\\*');
    expect(regexpEscape('\\')).toBe('\\\\');
    expect(regexpEscape('-')).toBe('\\-');
    expect(regexpEscape('?')).toBe('\\?');
    expect(regexpEscape('^')).toBe('\\^');
    expect(regexpEscape('$')).toBe('\\$');
    expect(regexpEscape('{')).toBe('\\{');
    expect(regexpEscape('}')).toBe('\\}');
    expect(regexpEscape('(')).toBe('\\(');
    expect(regexpEscape(')')).toBe('\\)');
    expect(regexpEscape('[')).toBe('\\[');
    expect(regexpEscape(']')).toBe('\\]');
  });
});

describe('stringReplace', () => {
  it('should search all keys of the passed object and replace them with respective values', () => {
    const string = 'The quick brown fox jumped to snow';
    const search = {
      quick: 'slow',
      brown: 'black',
      fox: 'dog',
    };
    const result = 'The slow black dog jumped to snow';
    expect(stringReplace(string, search)).toBe(result);
  });
});

describe('filterPhone', () => {
  it('should return a raw phone number if no country code passed', () => {
    const phone = '+1 (202) 555-0176';
    const filtered = '12025550176';
    expect(filterPhone(phone)).toBe(filtered);
  });
  it('should return a raw phone number with passed contry code if needed', () => {
    const phoneWithCountryCode = '+1 (334) 856-1437';
    const phoneWithoutCountryCode = '(334) 856-1437';
    const filtered = '13348561437';
    expect(filterPhone(phoneWithCountryCode, '1')).toBe(filtered);
    expect(filterPhone(phoneWithoutCountryCode, '1')).toBe(filtered);
  });
});

describe('camelize', () => {
  it('should remove all non alphabetical symbols and capitalize first letters of each alphabetical part, but not the first one', () => {
    const string = '$test-not_camelized String!';
    const camelized = 'testNotCamelizedString';
    expect(camelize(string)).toBe(camelized);
  });
});

describe('addTime', () => {
  it('should add up time strings of format HH:MM, HH:MM:SS, returning a string with seconds only if one of the passed strings has seconds', () => {
    expect(addTime('1:25', '02:45')).toBe('04:10');
    expect(addTime('1:30:30', '01:50:00', '02:45', '1:10')).toBe('07:15:30');
    expect(addTime('2:30:30', '03:29:30')).toBe('06:00:00');
  });
});

describe('shuffleArr', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.99);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  it('should return randomly shuffled array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(shuffleArr(arr)).toStrictEqual(arr);
  });
});

describe('getDOM', () => {
  it('should convert an html string to equal array of elements', () => {
    const html = '<div class="block"></div><div class="block"></div>';
    const elements = getDOM(html);
    const block = document.createElement('div');
    elements.forEach((element) => block.appendChild(element));
    expect(block.innerHTML).toStrictEqual(html);
  });
});

describe('getScrollbarWidth', () => {
  it('should return a vertical scrollbar width', () => {
    expect(getScrollbarWidth()).toBe(
      window.innerWidth - document.body.clientWidth
    );
  });
});

describe('getScrollbarHeight', () => {
  it('should return a horizontal scrollbar height', () => {
    expect(getScrollbarHeight()).toBe(
      window.innerHeight - document.body.clientWidth
    );
  });
});

describe('getMemoizedFn', () => {
  it('should return function that returns same result for same arguments', () => {
    let value;
    const memoizedFn = getMemoizedFn((description) => {
      value = Symbol(description);
      return value;
    });
    memoizedFn('unique');
    expect(memoizedFn('unique')).toBe(value);
  });
});

describe('debounce', () => {
  it('should return function that would call the callback with passed arguments within a given delay after the last call to the function was made', () => {
    const callback = jest.fn((a: number, b: number) => a + b);
    const time = 15;
    const debounced = debounce(callback, time);

    const attemptStart = performance.now();
    const attemptPeriod = 100;
    const attempt = () => {
      debounced(3, 5);
      if (performance.now() - attemptStart < attemptPeriod)
        requestAnimationFrame(() => attempt());
    };
    attempt();

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(1);
      expect(callback).toHaveBeenCalledWith(3, 5);
    }, time);
  });

  it('should use the callback with at least `maxDelay` frequency if passed', () => {
    const callback = jest.fn((a: number, b: number, c: number) => a + b + c);
    const time = 15;
    const maxDelay = 30;
    const debounced = debounce(callback, time, maxDelay);

    const attemptStart = performance.now();
    const attemptPeriod = 100;
    const attempt = () => {
      debounced(1, 2, 3);
      if (performance.now() - attemptStart < attemptPeriod)
        requestAnimationFrame(() => attempt());
    };
    attempt();

    setTimeout(() => {
      expect(callback).toHaveBeenCalledTimes(4);
      expect(callback).toHaveBeenCalledWith(1, 2, 3);
    }, time);
  });
});
