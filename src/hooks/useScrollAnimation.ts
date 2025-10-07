import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
  onlyOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animate',
  onlyOnce = true
}: ScrollAnimationOptions = {}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentElement.classList.add(animationClass);
            setHasAnimated(true);
            if (onlyOnce) {
              observer.unobserve(currentElement);
            }
          } else if (!onlyOnce) {
            currentElement.classList.remove(animationClass);
            setHasAnimated(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, animationClass, onlyOnce]);

  return { elementRef, hasAnimated };
};

