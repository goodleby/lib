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
  options: Readonly<{
    swipeLength?: number;
  }> = {}
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
