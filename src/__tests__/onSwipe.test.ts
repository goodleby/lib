import { onSwipe } from '../onSwipe';

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
        touchType: 'direct',
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
