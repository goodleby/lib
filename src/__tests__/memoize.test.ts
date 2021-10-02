import { memoize } from '../memoize';

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
