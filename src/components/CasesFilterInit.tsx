'use client';
import { useEffect } from 'react';

export default function CasesFilterInit() {
  useEffect(() => {
    const countEl = document.getElementById('cases-count');
    const noResults = document.getElementById('no-results');
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.case-card'));
    let activeCat = 'all';
    let activeInd = 'all';

    function applyFilter() {
      let visible = 0;
      cards.forEach(c => {
        const catMatch = activeCat === 'all' || c.dataset.cat === activeCat;
        const indMatch = activeInd === 'all' || c.dataset.ind === activeInd;
        const show = catMatch && indMatch;
        c.style.display = show ? '' : 'none';
        if (show) visible++;
      });
      if (countEl) countEl.textContent = String(visible);
      if (noResults) noResults.classList.toggle('show', visible === 0);
    }

    const btns = Array.from(document.querySelectorAll<HTMLElement>('.filter-btn'));
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterType = btn.dataset.filter;
        btns
          .filter(b => b.dataset.filter === filterType)
          .forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (filterType === 'cat') activeCat = btn.dataset.value ?? 'all';
        else activeInd = btn.dataset.value ?? 'all';
        applyFilter();
      });
    });
  }, []);

  return null;
}
