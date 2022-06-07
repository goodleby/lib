/**
 * Listen to touch events and execute callback when the user has swiped for at least specified threshold
 * @param element Element to listen to touch events
 * @param callback Callback function that gets TouchEvent and direction string
 * @param options Optional. Event listener options:
 * * `swipeLength` - Default is 50. Swipe threshold in pixels
 */
export const onSwipe = (
  element: HTMLElement,
  callback: (
    e: TouchEvent,
    direction: 'left' | 'right' | 'up' | 'down'
  ) => void,
  options: Readonly<{
    swipeLength?: number;
  }> = {}
): void => {
  const { swipeLength = 50 } = options;
  let startX = 0;
  let startY = 0;

  const swiper = {
    onTouchStart(this: void, e: TouchEvent) {
      const [touch] = e.touches;
      const { clientX, clientY } = touch;
      startX = clientX;
      startY = clientY;
      element.addEventListener('touchend', swiper.onTouchEnd);
      element.addEventListener('touchmove', swiper.onTouchMove);
    },

    onTouchMove(this: void, e: TouchEvent) {
      const [touch] = e.touches;
      const { clientX, clientY } = touch;
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

    onTouchEnd(this: void) {
      element.removeEventListener('touchend', swiper.onTouchEnd);
      element.removeEventListener('touchmove', swiper.onTouchMove);
    },
  };

  element.addEventListener('touchstart', swiper.onTouchStart);
};
