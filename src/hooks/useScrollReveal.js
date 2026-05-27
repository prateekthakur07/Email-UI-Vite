import { useEffect } from 'react';

// Reveal-on-scroll: observes every `.reveal` element inside `rootRef` and adds
// the `.in` class as it enters the viewport, with a small staggered delay.
// Ported from the original IntersectionObserver in app-logic.js.
export function useScrollReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = root.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 60}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [rootRef]);
}
