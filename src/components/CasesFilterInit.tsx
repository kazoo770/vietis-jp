'use client';
import { useEffect } from 'react';

export default function CasesFilterInit() {
  useEffect(() => {
    const countEl = document.getElementById('count');
    const noResults = document.getElementById('no-results');
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.case-card'));
    const btns = Array.from(document.querySelectorAll<HTMLElement>('.filter-btn'));

    function applyFilter(filterType: string, value: string) {
      btns.forEach(b => b.classList.remove('active'));
      const active = btns.find(b => b.dataset.filter === filterType && b.dataset.value === value);
      if (active) active.classList.add('active');

      let visible = 0;
      cards.forEach(c => {
        const show =
          filterType === 'all' ||
          (filterType === 'cat' && c.dataset.cat === value) ||
          (filterType === 'ind' && c.dataset.ind === value);
        c.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (countEl) countEl.textContent = String(visible);
      if (noResults) noResults.classList.toggle('show', visible === 0);
    }

    const filterBar = document.getElementById('filter-bar');
    const casesMain = document.querySelector<HTMLElement>('.cases-main');

    const reset = () => applyFilter('all', 'all');
    window.addEventListener('cases-reset', reset);

    btns.forEach(btn => {

      btn.addEventListener('click', () => {
        applyFilter(btn.dataset.filter ?? 'all', btn.dataset.value ?? 'all');

        // フィルターバーより下にいる場合のみ、ケース一覧の先頭へスクロール
        if (casesMain && filterBar) {
          const filterBottom = filterBar.getBoundingClientRect().bottom;
          const casesTop = casesMain.getBoundingClientRect().top;
          if (casesTop < filterBottom) {
            const targetY = window.scrollY + casesTop - filterBar.offsetHeight - 16;
            window.scrollTo({ top: targetY, behavior: 'smooth' });
          }
        }
      });
    });

    return () => window.removeEventListener('cases-reset', reset);
  }, []);

  return null;
}
