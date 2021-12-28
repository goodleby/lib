import { debounce } from '../debounce';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('should return a function that will execute the callback after the waiting period', () => {
    const callback = jest.fn(() => {
      // Do nothing
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
      // Do nothing
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
      // Do nothing
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

  it('should throw an error when `maxWait` is smaller than `wait`', () => {
    expect(() => debounce(jest.fn(), 500, 250)).toThrow();
  });
});
