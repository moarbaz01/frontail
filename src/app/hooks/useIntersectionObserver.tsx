import { useEffect, useState, RefObject } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  onChange?: (isIntersecting: boolean) => void;
}

export function useIntersectionObserver(
  elementRef: RefObject<Element> | Element | null,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    onChange,
  }: IntersectionObserverOptions = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element =
      elementRef && "current" in elementRef ? elementRef.current : elementRef;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (onChange) {
          onChange(isElementIntersecting);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, onChange]);

  return isIntersecting;
}
