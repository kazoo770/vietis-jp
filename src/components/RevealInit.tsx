'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.replace('no-js', 'js-ready');

    // Batch-remove .in so previous-page state doesn't linger
    const reveals = document.querySelectorAll<HTMLElement>('.will-animate, .reveal');
    reveals.forEach(el => el.classList.remove('in'));

    let io: IntersectionObserver | null = null;

    // rAF waits for new DOM to paint before observing — no setTimeout needed
    const raf = requestAnimationFrame(() => {
      const freshReveals = document.querySelectorAll<HTMLElement>('.will-animate, .reveal');

      // rootMargin '10% 0px' extends the detection area upward so elements
      // already in the viewport on page load are caught on the first callback,
      // eliminating the need for a synchronous getBoundingClientRect() loop.
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add('in');
              io!.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '10% 0px -24px 0px' },
      );

      freshReveals.forEach(el => io!.observe(el));
    });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
