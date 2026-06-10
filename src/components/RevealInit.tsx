'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.replace('no-js', 'js-ready');

    // ページ遷移のたびに .in を一度リセットしてから再登録
    const reveals = document.querySelectorAll<HTMLElement>('.will-animate, .reveal');
    const vh = window.innerHeight;

    reveals.forEach(el => {
      // 既に .in が付いていたら一旦外す（前ページの残留を防ぐ）
      el.classList.remove('in');
    });

    // 少し待ってから登録（新しいDOMが確定するのを待つ）
    const timer = setTimeout(() => {
      const freshReveals = document.querySelectorAll<HTMLElement>('.will-animate, .reveal');
      freshReveals.forEach(el => {
        if (el.getBoundingClientRect().top < vh * 1.1) {
          el.classList.add('in');
        }
      });

      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -24px 0px' });

      freshReveals.forEach(el => {
        if (!el.classList.contains('in')) io.observe(el);
      });

      return () => io.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // pathname が変わるたびに再実行

  return null;
}
