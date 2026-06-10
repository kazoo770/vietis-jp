'use client';
import { useEffect } from 'react';

// アコーディオンの設定パターン
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

function initAccordion(pattern: typeof PATTERNS[number]) {
  // <details> ネイティブアコーディオンは除外（menraku 等）
  const items = Array.from(document.querySelectorAll<HTMLElement>(pattern.item))
    .filter(el => el.tagName.toLowerCase() !== 'details');
  if (!items.length) return;

  // 同じパターンの item が既にバインド済みか確認（重複防止）
  const attr = `data-acc-${pattern.trigger.replace(/[^a-z]/g, '')}`;
  const freshItems = items.filter(el => !el.hasAttribute(attr));
  if (!freshItems.length) return;

  freshItems.forEach(item => {
    item.setAttribute(attr, '1');
    const trigger = item.querySelector<HTMLElement>(pattern.trigger);
    const body = item.querySelector<HTMLElement>(pattern.body);
    if (!trigger || !body) return;

    // maxHeight 使用パターンの初期化
    if (pattern.useMaxHeight) {
      const inner = pattern.inner ? item.querySelector<HTMLElement>(pattern.inner) : null;
      if (item.classList.contains('open') && inner) {
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    }

    const toggle = () => {
      const isOpen = item.classList.contains('open');

      // 同グループを全部閉じる
      freshItems.forEach(other => {
        other.classList.remove('open');
        const otherTrigger = other.querySelector<HTMLElement>(pattern.trigger);
        const otherBody = other.querySelector<HTMLElement>(pattern.body);
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        if (otherBody && pattern.useMaxHeight) otherBody.style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        if (pattern.useMaxHeight) {
          const inner = pattern.inner ? item.querySelector<HTMLElement>(pattern.inner) : null;
          if (inner) body.style.maxHeight = inner.scrollHeight + 'px';
        }
      }
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
