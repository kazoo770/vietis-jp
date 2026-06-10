'use client';
import { useEffect } from 'react';

export default function TopPageInit() {
  useEffect(() => {
    // Hero accordion (mouseenter/touchstart to activate panel)
    const panels = Array.from(document.querySelectorAll<HTMLElement>('.accordion-panel'));
    if (panels.length) {
      const activatePanel = (p: HTMLElement) => {
        panels.forEach((x) => x.classList.remove('active'));
        p.classList.add('active');
      };
      panels.forEach((p) => {
        p.addEventListener('mouseenter', () => activatePanel(p));
        p.addEventListener('touchstart', () => activatePanel(p), { passive: true });
      });
    }

    // Counter animation
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
    const runCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || '0', 10);
      const dur = 1500;
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        el.textContent = String(Math.round(easeOutQuart(p) * target));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          runCounter(e.target as HTMLElement);
          counterIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      el.textContent = el.dataset.count || '';
      counterIO.observe(el);
    });

    return () => counterIO.disconnect();
  }, []);

  return null;
}
