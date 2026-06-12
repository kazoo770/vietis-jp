'use client';
import { useEffect } from 'react';

const PATTERNS = [
  // パターン1: .faq-q / .faq-a / .faq-a-inner (ai-driving-suite 等)
  {
    item: '.faq-item',
    trigger: '.faq-q',
    body: '.faq-a',
    inner: '.faq-a-inner',
    useMaxHeight: true,
  },
  // パターン2: .faq-trigger / .faq-body (recruit FAQ 等)
  {
    item: '.faq-item',
    trigger: '.faq-trigger',
    body: '.faq-body',
    inner: null,
    useMaxHeight: false,
  },
  // パターン3: .position-item / .position-trigger / .position-body (recruit 募集職種)
  {
    item: '.position-item',
    trigger: '.position-trigger',
    body: '.position-body',
    inner: null,
    useMaxHeight: false,
  },
];

type BoundItem = {
  item: HTMLElement;
  trigger: HTMLElement;
  body: HTMLElement;
  inner: HTMLElement | null;
};

function initAccordion(pattern: typeof PATTERNS[number]) {
  // <details> ネイティブアコーディオンは除外（menraku 等）
  const items = Array.from(document.querySelectorAll<HTMLElement>(pattern.item))
    .filter(el => el.tagName.toLowerCase() !== 'details');
  if (!items.length) return;

  const attr = `data-acc-${pattern.trigger.replace(/[^a-z]/g, '')}`;
  const freshItems = items.filter(el => !el.hasAttribute(attr));
  if (!freshItems.length) return;

  // DOM参照をバインド時にキャッシュ — クリックハンドラ内での querySelector を排除
  const bound: BoundItem[] = [];

  freshItems.forEach(item => {
    item.setAttribute(attr, '1');
    const trigger = item.querySelector<HTMLElement>(pattern.trigger);
    const body = item.querySelector<HTMLElement>(pattern.body);
    if (!trigger || !body) return;

    const inner = pattern.inner ? item.querySelector<HTMLElement>(pattern.inner) : null;

    // 初期状態が open のアイテムの maxHeight を設定
    if (pattern.useMaxHeight && item.classList.contains('open') && inner) {
      body.style.maxHeight = inner.scrollHeight + 'px';
    }

    bound.push({ item, trigger, body, inner });
  });

  bound.forEach(({ item, trigger, body, inner }) => {
    const toggle = () => {
      const isOpen = item.classList.contains('open');

      // READ フェーズ: DOM 書き込み前にまとめて読む（forced reflow 防止）
      const targetHeight = !isOpen && pattern.useMaxHeight && inner
        ? inner.scrollHeight
        : 0;
      // クリックしたアイテムの現在の画面上の位置を記録
      const anchorTop = item.getBoundingClientRect().top;

      // WRITE フェーズ
      bound.forEach(b => {
        b.item.classList.remove('open');
        b.trigger.setAttribute('aria-expanded', 'false');
        if (pattern.useMaxHeight) b.body.style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        if (pattern.useMaxHeight && inner) {
          body.style.maxHeight = targetHeight + 'px';
        }
      }

      // DOM 変更後にアイテムの位置ズレ分だけスクロールを補正し、画面上で静止させる
      const delta = item.getBoundingClientRect().top - anchorTop;
      if (delta !== 0) window.scrollBy({ top: delta, behavior: 'instant' });
    };

    trigger.addEventListener('click', toggle);
    trigger.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
}

export default function FaqInit() {
  useEffect(() => {
    PATTERNS.forEach(initAccordion);
  }, []);

  return null;
}
