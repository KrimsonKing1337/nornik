import { useEffect, useRef, useState } from 'react';

import { scrollToElement, simulateWheel } from 'utils';

import { Slide1, Slide2, Slide3, Slide4 } from './components';

let touchStartY = 0;

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const sectionsRefs = useRef<HTMLElement[]>([]);
  const isScrollingRef = useRef(false);

  const setSectionRef = (el: HTMLElement | null, i: number) => {
    if (el) {
      sectionsRefs.current[i] = el;
    }
  };

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrollingRef.current) {
        return;
      }

      const dir = e.deltaY > 0 ? 1 : -1;

      let nextIndex = index + dir;

      nextIndex = Math.max(0, Math.min(nextIndex, sectionsRefs.current.length - 1));

      if (nextIndex === index) {
        return;
      }

      const target = sectionsRefs.current[nextIndex];

      if (!target) {
        return;
      }

      isScrollingRef.current = true;

      setIndex(nextIndex);
      scrollToElement(target, 900);

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 900);
    };

    window.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [index]);

  useEffect(() => {
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      e.preventDefault();
    });

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = e.changedTouches[0].clientY - touchStartY;

      if (Math.abs(deltaY) < 40) {
        return;
      }

      const dir = deltaY > 0 ? -1 : 1;

      simulateWheel(dir);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
  }, []);

  return (
    <div>
      <Slide1 ref={(el: HTMLDivElement) => setSectionRef(el, 0)} isActive={index === 0} />
      <Slide2 ref={(el: HTMLDivElement) => setSectionRef(el, 1)} isActive={index === 1} />
      <Slide3 ref={(el: HTMLDivElement) => setSectionRef(el, 2)} isActive={index === 2} />
      <Slide4 ref={(el: HTMLDivElement) => setSectionRef(el, 3)} isActive={index === 3} />
    </div>
  );
};
