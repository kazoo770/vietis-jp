'use client';
import { useEffect } from 'react';

export default function BlogFilterInit() {
  useEffect(() => {
    const catBtns = Array.from(document.querySelectorAll<HTMLElement>('.cat-btn'));
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.blog-card'));

    catBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        catBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.cat ?? 'all';
        cards.forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
        });
      });
    });
  }, []);

  return null;
}
