'use client';

import { useEffect } from 'react';

export default function BlogArticleInit() {
  useEffect(() => {
    // SNS シェアリンク
    const url = encodeURIComponent(location.href);
    const title = encodeURIComponent(document.title);
    const x = document.getElementById('share-x') as HTMLAnchorElement | null;
    const fb = document.getElementById('share-fb') as HTMLAnchorElement | null;
    const hb = document.getElementById('share-hb') as HTMLAnchorElement | null;
    if (x) x.href = `https://x.com/intent/tweet?url=${url}&text=${title}`;
    if (fb) fb.href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (hb) hb.href = `https://b.hatena.ne.jp/entry/s/${location.hostname}${location.pathname}`;

    // TOC アクティブハイライト
    const tocLinks = document.querySelectorAll<HTMLAnchorElement>('.toc-item a');
    const sections = document.querySelectorAll<HTMLElement>('.article-content h2[id], .article-content h3[id]');
    if (sections.length && tocLinks.length) {
      const tocObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            tocLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector<HTMLAnchorElement>(`.toc-item a[href="#${e.target.id}"]`);
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      sections.forEach(s => tocObserver.observe(s));
      return () => tocObserver.disconnect();
    }
  }, []);

  return null;
}
