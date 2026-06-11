import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIシステム開発｜業務に効くAIを、要件定義から本番まで - VIETISジャパン',
  description: '生成AI統合・RAG構築・AIエージェント開発など、要件定義から運用まで一社で完結。350件超の実績を持つAI/DXエージェンシー。まず無料相談から。',
};

export default function Page() {
  return (
    <>
      <style>{`

/* ─── TOKENS ──────────────────────────────────── */
:root {
  --blue:      #2B49E7;
  --blue-pale: #EDF0FD;
  --red:       #FF0033;
  --ink:       #1A1C23;
  --ink-dark:  #0F1117;
  --muted:     #555B6E;
  --subtle:    #8B92A5;
  --bg:        #FFFFFF;
  --bg-off:    #F7F8FC;
  --bg-mid:    #F0F2F8;
  --border:    #E4E7EF;
  --dark:      #0F1117;
  --ja:        'Noto Sans JP', sans-serif;
  --en:        'Roboto', sans-serif;
  --ease:      cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io:   cubic-bezier(0.77, 0, 0.175, 1);
  --gutter:    clamp(20px, 5vw, 72px);
  --max:       1440px;
  --r:         8px;
  --r-btn:     3px;
  --r-pill:    99px;
}

/* ─── RESET ───────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: var(--ja);
  color: var(--ink);
  background: var(--bg);
  line-height: 1.75;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* ─── LAYOUT ──────────────────────────────────── */
.wrap { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }
.section {
  padding: clamp(64px, 10vw, 120px) 0;
  border-top: 1px solid var(--border);
}

/* ─── TYPOGRAPHY ──────────────────────────────── */
.h2 {
  font-size: clamp(2rem, 4vw, 3.6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-wrap: balance;
}
.body-lead {
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--muted);
  line-height: 1.85;
  max-width: 60ch;
  text-wrap: pretty;
}

/* ─── BUTTONS ─────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: var(--ja);
  font-size: 14px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: var(--r-btn);
  border: 1.5px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;
  transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s var(--ease);
  -webkit-user-select: none;
  user-select: none;
}
.btn:active { transform: scale(0.97); }
.btn-arrow {
  font-size: 16px;
  font-family: var(--en);
  font-weight: 400;
  line-height: 1;
  transition: transform 0.2s var(--ease);
}
.btn:hover .btn-arrow { transform: translate(1px, -1px); }
.btn-dark {
  background: var(--ink-dark);
  color: #fff;
  border-color: var(--ink-dark);
}
.btn-dark:hover { background: #000; border-color: #000; }
.btn-primary {
  background: var(--blue);
  color: #fff;
  border-color: var(--blue);
}
.btn-primary:hover { background: #1e37d0; border-color: #1e37d0; }
.btn-outline {
  background: transparent;
  color: var(--ink);
  border-color: var(--border);
}
.btn-outline:hover { border-color: var(--ink); }
.btn-outline-white {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,0.35);
}
.btn-outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
.btn-white {
  background: #fff;
  color: var(--ink-dark);
  border-color: #fff;
}
.btn-white:hover { background: #f0f0f0; }

/* ─── REVEAL ──────────────────────────────────── */
html.js-ready .reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}
html.js-ready .reveal.in {
  opacity: 1;
  transform: none;
}
html.js-ready .reveal.d1 { transition-delay: 0.07s; }
html.js-ready .reveal.d2 { transition-delay: 0.14s; }
html.js-ready .reveal.d3 { transition-delay: 0.21s; }
html.js-ready .reveal.d4 { transition-delay: 0.28s; }
@media (prefers-reduced-motion: reduce) {
  html.js-ready .reveal,
  .marquee-track { transition: none !important; animation: none !important; }
}

/* ═══════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════ */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.header.scrolled { border-bottom-color: var(--border); }
.header-inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 72px;
}
.header-logo { flex-shrink: 0; }
.header-logo svg { height: 24px; width: auto; }
.header-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.header-nav a {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  transition: opacity 0.15s;
  white-space: nowrap;
}
.header-nav a:hover { opacity: 0.55; }
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-actions .btn { padding: 9px 20px; font-size: 13px; }
.header-lang {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
}
.header-lang a { color: var(--subtle); transition: color 0.15s; }
.header-lang a:hover { color: var(--ink); }
.header-lang a.active { color: var(--ink); }
.header-lang span { color: var(--border); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
}
.hamburger span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.25s var(--ease), opacity 0.2s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile drawer */
.mobile-nav {
  display: none;
  position: fixed;
  inset: 72px 0 0;
  background: #fff;
  z-index: 99;
  overflow-y: auto;
  padding: 24px var(--gutter) 48px;
  flex-direction: column;
  gap: 0;
  transform: translateY(-8px);
  opacity: 0;
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.mobile-nav.open {
  display: flex;
  opacity: 1;
  transform: none;
}
.mobile-nav-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}
.mobile-nav-list a {
  padding: 16px 0;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid var(--border);
  color: var(--ink);
}
.mobile-nav-lang {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  font-family: var(--en);
  font-size: 13px;
  font-weight: 700;
  color: var(--subtle);
}
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
}
.mobile-nav-actions .btn { width: 100%; justify-content: center; font-size: 15px; padding: 16px; }

/* ═══════════════════════════════════════════════
   PAGE HERO
═══════════════════════════════════════════════ */
.page-hero {
  padding-top: 72px;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  position: relative;
}
.page-hero-video {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.7;
  pointer-events: none;
}
.page-hero-inner {
  padding: clamp(56px, 8vw, 100px) 0 clamp(48px, 7vw, 80px);
  position: relative;
}
.page-hero-h1 {
  font-size: clamp(48px, 6vw, 70px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: var(--ink);
  margin-bottom: 20px;
}
.page-hero-sub {
  font-size: clamp(15px, 1.5vw, 18px);
  color: var(--muted);
  line-height: 1.8;
  max-width: 50ch;
  text-wrap: pretty;
  margin-bottom: 36px;
}
.page-hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }

/* ═══════════════════════════════════════════════
   PITCH — 課題 + 解決
═══════════════════════════════════════════════ */
.pitch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
}
.pitch-left {}
.pitch-right {}
.pitch-problem-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 32px;
}
.pitch-prob-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}
.pitch-prob-item:first-child { border-top: 1px solid var(--border); }
.pitch-prob-num {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.04em;
  padding-top: 3px;
}
.pitch-prob-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  color: var(--ink);
}
.pitch-solution-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
}
.pitch-sol-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.pitch-sol-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--blue-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--blue);
}
.pitch-sol-body {}
.pitch-sol-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
}
.pitch-sol-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════
   SERVICE MENU
═══════════════════════════════════════════════ */
.svc-menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  margin-top: 48px;
}
.svc-menu-item {
  background: var(--bg);
  padding: 28px 24px;
  transition: background 0.15s;
}
.svc-menu-item:hover { background: var(--bg-off); }
.svc-menu-item-icon {
  width: 44px;
  height: 44px;
  background: var(--blue-pale);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  margin-bottom: 16px;
}
.svc-menu-item-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.4;
}
.svc-menu-item-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.65;
}

/* ═══════════════════════════════════════════════
   FLOW (開発フロー)
═══════════════════════════════════════════════ */
.flow-section { background: var(--bg-off); }
.flow-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  margin-top: 48px;
  position: relative;
}
.flow-steps::before {
  content: '';
  position: absolute;
  top: 28px;
  left: calc(10% + 20px);
  right: calc(10% + 20px);
  height: 1px;
  background: var(--border);
}
.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 8px;
  position: relative;
  z-index: 1;
}
.flow-step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--bg);
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--en);
  font-size: 13px;
  font-weight: 700;
  color: var(--subtle);
  margin-bottom: 16px;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.flow-step.active .flow-step-num {
  background: var(--blue);
  border-color: var(--blue);
  color: #fff;
}
.flow-step-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.4;
}
.flow-step-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}

/* ═══════════════════════════════════════════════
   PRICING
═══════════════════════════════════════════════ */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  margin-top: 48px;
}
.pricing-card {
  background: var(--bg);
  padding: clamp(24px, 3vw, 36px);
}
.pricing-card-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--subtle);
  margin-bottom: 12px;
  letter-spacing: 0.02em;
}
.pricing-card-name {
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.3;
}
.pricing-card-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.65;
  margin-bottom: 20px;
}
.pricing-card-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 6px;
}
.pricing-num {
  font-family: var(--en);
  font-size: 40px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 1;
}
.pricing-unit {
  font-size: 14px;
  color: var(--muted);
  font-weight: 500;
}
.pricing-note {
  font-size: 11px;
  color: var(--subtle);
  margin-top: 4px;
}
.pricing-divider {
  height: 1px;
  background: var(--border);
  margin: 20px 0;
}
.pricing-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pricing-feature {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  color: var(--ink);
  line-height: 1.5;
}
.pricing-feature::before {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--blue-pale);
  flex-shrink: 0;
  margin-top: 2px;
  background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 8L6.5 11L12.5 5' stroke='%232B49E7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

/* ═══════════════════════════════════════════════
   CASES
═══════════════════════════════════════════════ */
.cases-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.cases-more {
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  transition: color 0.15s, gap 0.15s;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--border);
}
@media (hover: hover) and (pointer: fine) {
  .cases-more:hover { color: var(--ink); gap: 8px; }
}
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
}
.case-card {
  overflow: hidden;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
@media (hover: hover) and (pointer: fine) {
  .case-card:hover { background: var(--bg-off); }
  .case-card:hover .case-thumb img { transform: scale(1.04); }
}
.case-card-inner {
  padding: clamp(20px, 2.5vw, 32px);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.case-thumb {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-off);
  margin-bottom: 20px;
}
.case-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 480ms var(--ease);
}
.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}
.tag {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 2px;
  letter-spacing: 0.03em;
}
.tag-ind { background: var(--bg-off); color: var(--muted); }
.tag-svc { color: var(--blue); border: 1px solid var(--blue-pale); background: var(--blue-pale); }
.case-title {
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.5;
  margin-bottom: auto;
  padding-bottom: 20px;
  color: var(--ink);
}

/* ═══════════════════════════════════════════════
   WHY
═══════════════════════════════════════════════ */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 40px;
}
.why-item {
  padding: 32px 28px;
  border-right: 1px solid var(--border);
}
.why-item:last-child { border-right: none; }
.why-num {
  font-family: var(--en);
  font-size: 36px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 16px;
}
.why-item-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.4;
  margin-bottom: 10px;
}
.why-item-body {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.75;
}

/* ═══════════════════════════════════════════════
   CTA BAND
═══════════════════════════════════════════════ */
.cta-band {
  background: var(--ink-dark);
  padding: clamp(72px, 10vw, 120px) 0;
}
.cta-band-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
.cta-head {
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fff;
  text-wrap: balance;
  margin-bottom: 16px;
}
.cta-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.55);
  line-height: 1.75;
  max-width: 38ch;
}
.cta-actions { display: flex; flex-direction: column; gap: 0; }
.cta-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.cta-action-row:first-child { border-top: 1px solid rgba(255,255,255,0.1); }
.cta-action-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.cta-action-desc { font-size: 14px; color: rgba(255,255,255,0.45); }
.cta-action-row .btn { font-size: 13px; padding: 10px 20px; flex-shrink: 0; }

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
.footer { background: #0A0A0F; color: #fff; padding: clamp(48px, 7vw, 80px) 0 0; }
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  padding-bottom: clamp(40px, 5vw, 60px);
}
.footer-logo { margin-bottom: 16px; }
.footer-logo svg { height: 28px; width: auto; }
.footer-tagline { font-size: 16px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 16px; }
.footer-address { font-size: 11px; font-style: normal; color: rgba(255,255,255,0.22); line-height: 1.7; }
.footer-col-label {
  font-family: var(--en); font-size: 10px; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: rgba(255,255,255,0.28); margin-bottom: 12px;
}
.footer-links { display: flex; flex-direction: column; gap: 8px; }
.footer-links a { font-size: 16px; color: rgba(255,255,255,0.62); transition: color 0.15s; }
.footer-links a:hover { color: #fff; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.footer-copy { font-family: var(--en); font-size: 11px; color: rgba(255,255,255,0.16); }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { font-size: 11px; color: rgba(255,255,255,0.22); transition: color 0.15s; }
.footer-legal a:hover { color: rgba(255,255,255,0.5); }

/* ═══════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════ */
@media (max-width: 1024px) {
  .svc-menu-grid { grid-template-columns: repeat(2, 1fr); }
  .flow-steps { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .flow-steps::before { display: none; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .why-item:nth-child(2) { border-right: none; }
  .why-item:nth-child(1),
  .why-item:nth-child(2) { border-bottom: 1px solid var(--border); }
}
@media (max-width: 768px) {
  .header-nav,
  .header-lang,
  .header-actions { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }

  .pitch-grid { grid-template-columns: 1fr; }
  .svc-menu-grid { grid-template-columns: 1fr; }
  .flow-steps { grid-template-columns: 1fr; }
  .pricing-grid { grid-template-columns: 1fr; }
  .cases-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .why-item { border-right: none; border-bottom: 1px solid var(--border); }
  .why-item:last-child { border-bottom: none; }
  .cta-band-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .footer-top { grid-template-columns: 1fr; }
}

      `}</style>
<div className="page-hero">
  <video className="page-hero-video" autoPlay muted playsInline loop preload="none" aria-hidden="true">
    <source src="/videos/ai_development.webm" type="video/webm" />
    <source src="/videos/ai_development.mp4" type="video/mp4" />
  </video>
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal" aria-label="パンくずリスト">
        <a href="/">トップ</a>
        <span className="breadcrumb-sep">/</span>
        <a href="/service">サービス</a>
        <span className="breadcrumb-sep">/</span>
        <span aria-current="page">AIシステム開発</span>
      </nav>
      <h1 className="page-hero-h1 reveal d1">AIシステム開発</h1>
      <p className="page-hero-sub reveal d2" style={{maxWidth: '680px'}}>生成AI統合・RAG構築・AIエージェント開発まで、要件定義から本番運用まで一社で完結。業務課題を起点に、動くAIを届けます。</p>
      <div className="page-hero-cta reveal d3">
        <a href="/consultation" className="btn btn-dark">無料相談を予約する <span className="btn-arrow">↗</span></a>
        <a href="/download" className="btn btn-outline">資料をダウンロード</a>
      </div>
    </div>
  </div>
</div>


<section className="section" aria-labelledby="pitch-h">
  <div className="wrap">
    <div className="pitch-grid">
      <div className="pitch-left">
        <h2 className="h2 reveal" id="pitch-h" style={{fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)'}}>こんな課題、抱えていませんか</h2>
        <div className="pitch-problem-list">
          <div className="pitch-prob-item reveal d1">
<p className="pitch-prob-text">AIを導入したいが、自社業務への適用方法が分からない</p>
          </div>
          <div className="pitch-prob-item reveal d2">
<p className="pitch-prob-text">PoC止まりで、本番システムへの移行が進まない</p>
          </div>
          <div className="pitch-prob-item reveal d3">
<p className="pitch-prob-text">AI開発の知見を持つエンジニアを社内で確保できない</p>
          </div>
          <div className="pitch-prob-item reveal d4">
<p className="pitch-prob-text">開発会社に任せたが、業務要件との乖離が大きかった</p>
          </div>
        </div>
      </div>
      <div className="pitch-right">
        <h2 className="h2 reveal" style={{color: 'var(--blue)', fontSize: 'clamp(1.5rem, 2.2vw, 2.2rem)'}}>VIETISのアプローチ</h2>
        <div className="pitch-solution-list">
          <div className="pitch-sol-item reveal d1">
            <div className="pitch-sol-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>
            </div>
            <div className="pitch-sol-body">
              <div className="pitch-sol-title">業務課題の深掘りからスタート</div>
              <div className="pitch-sol-desc">AIありきではなく、業務フローを徹底的に理解してから最適な実装方針を設計します。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d2">
            <div className="pitch-sol-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <div className="pitch-sol-body">
              <div className="pitch-sol-title">要件定義から本番まで一気通貫</div>
              <div className="pitch-sol-desc">設計・開発・テスト・リリース・運用引き渡しまで同一チームが担当。引き継ぎロスがありません。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d3">
            <div className="pitch-sol-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            </div>
            <div className="pitch-sol-body">
              <div className="pitch-sol-title">AI駆動開発でスピードと品質を両立</div>
              <div className="pitch-sol-desc">開発プロセスにAIを組み込み、350件超の実績から培った知見で確実に動くものを届けます。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="svc-menu-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="svc-menu-h">対応領域</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px'}}>生成AI活用からMLOps基盤まで、AI開発の全工程に対応します。</p>
    <div className="svc-menu-grid">
      <div className="svc-menu-item reveal">
        <div className="svc-menu-item-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div className="svc-menu-item-title">生成AI統合・チャットボット</div>
        <div className="svc-menu-item-desc">GPT-4 / Claude / Gemini 等のLLMを既存システムに統合。社内向け・顧客向けチャットボット構築も対応。</div>
      </div>
      <div className="svc-menu-item reveal d1">
        <div className="svc-menu-item-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
        </div>
        <div className="svc-menu-item-title">RAG構築</div>
        <div className="svc-menu-item-desc">社内ドキュメント・業務ナレッジをベクトルDB化し、精度の高い回答を生成するRAGシステムを構築します。</div>
      </div>
      <div className="svc-menu-item reveal d2">
        <div className="svc-menu-item-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v1a4 4 0 0 1-8 0v-1H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4Z"/></svg>
        </div>
        <div className="svc-menu-item-title">AIエージェント開発</div>
        <div className="svc-menu-item-desc">複数ツールを自律的に操作するエージェントを設計・実装。業務自動化・ワークフロー高度化に対応。</div>
      </div>
      <div className="svc-menu-item reveal">
        <div className="svc-menu-item-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </div>
        <div className="svc-menu-item-title">画像・音声AI</div>
        <div className="svc-menu-item-desc">画像認識・物体検出・音声文字起こし・感情分析など、マルチモーダルAIの実装・システム連携に対応。</div>
      </div>
      <div className="svc-menu-item reveal d1">
        <div className="svc-menu-item-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div className="svc-menu-item-title">予測・需要予測モデル</div>
        <div className="svc-menu-item-desc">機械学習モデルの設計・実装・チューニング。売上予測・在庫最適化・異常検知などのユースケースに対応。</div>
      </div>
      <div className="svc-menu-item reveal d2">
        <div className="svc-menu-item-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
        </div>
        <div className="svc-menu-item-title">AIシステム品質保証</div>
        <div className="svc-menu-item-desc">CMMI Level 3に基づくプロセス管理で、AIシステムの精度・信頼性・セキュリティを担保します。</div>
      </div>
    </div>
  </div>
</section>


<section className="section flow-section" aria-labelledby="flow-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="flow-h">開発フロー</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px'}}>要件定義から本番まで、同一チームが5つのフェーズで確実に進めます。</p>
    <div className="flow-steps">
      <div className="flow-step active reveal">
        <div className="flow-step-num">01</div>
        <div className="flow-step-title">課題ヒアリング・<br />要件定義</div>
        <div className="flow-step-desc">業務課題の深掘り、AI適用範囲の特定、KPI設定まで丁寧に実施。</div>
      </div>
      <div className="flow-step reveal d1">
        <div className="flow-step-num">02</div>
        <div className="flow-step-title">PoC・<br />フィジビリティ検証</div>
        <div className="flow-step-desc">本番投資前に小規模検証。精度・コスト・実現可能性を確認します。</div>
      </div>
      <div className="flow-step reveal d2">
        <div className="flow-step-num">03</div>
        <div className="flow-step-title">設計・<br />アーキテクチャ</div>
        <div className="flow-step-desc">既存システム連携を考慮したAIアーキテクチャ設計。セキュリティ要件も同時に定義。</div>
      </div>
      <div className="flow-step reveal d3">
        <div className="flow-step-num">04</div>
        <div className="flow-step-title">開発・<br />テスト・チューニング</div>
        <div className="flow-step-desc">アジャイル開発でスプリントごとに成果物を確認。精度改善を繰り返します。</div>
      </div>
      <div className="flow-step reveal d4">
        <div className="flow-step-num">05</div>
        <div className="flow-step-title">リリース・<br />運用引き渡し</div>
        <div className="flow-step-desc">本番デプロイ後もモニタリング体制を整備。運用保守への移行もサポート。</div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="pricing-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="pricing-h">費用目安</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px', maxWidth: 'none'}}>プロジェクトの規模・複雑さに応じてご提案します。まずはご相談ください。</p>
    <div className="pricing-grid">
      <div className="pricing-card reveal">
        <div className="pricing-card-label">PLAN A</div>
        <div className="pricing-card-name">小規模AIシステム</div>
        <div className="pricing-card-desc">チャットボット・RAG導入など、単一機能のAIシステム。</div>
        <div className="pricing-card-price">
          <span className="pricing-num">100</span>
          <span className="pricing-unit">万円〜</span>
        </div>
        <div className="pricing-note">納期目安: 1〜2ヶ月</div>
        <div className="pricing-divider"></div>
        <ul className="pricing-features">
          <li className="pricing-feature">要件定義・PoC検証</li>
          <li className="pricing-feature">単一AI機能の実装</li>
          <li className="pricing-feature">既存システムとのAPI連携</li>
          <li className="pricing-feature">テスト・本番デプロイ</li>
        </ul>
      </div>
      <div className="pricing-card reveal d1">
        <div className="pricing-card-label">PLAN B</div>
        <div className="pricing-card-name">業務特化AIシステム</div>
        <div className="pricing-card-desc">業務フローに深く組み込んだ、複数機能を持つAIシステム。</div>
        <div className="pricing-card-price">
          <span className="pricing-num">300</span>
          <span className="pricing-unit">万円〜</span>
        </div>
        <div className="pricing-note">納期目安: 2〜4ヶ月</div>
        <div className="pricing-divider"></div>
        <ul className="pricing-features">
          <li className="pricing-feature">詳細要件定義・設計</li>
          <li className="pricing-feature">複数AI機能の統合</li>
          <li className="pricing-feature">ファインチューニング・RAG</li>
          <li className="pricing-feature">管理画面・ダッシュボード</li>
          <li className="pricing-feature">精度改善・チューニング</li>
        </ul>
      </div>
      <div className="pricing-card reveal d2">
        <div className="pricing-card-label">PLAN C</div>
        <div className="pricing-card-name">AI基盤・エンタープライズ</div>
        <div className="pricing-card-desc">全社横断のAI基盤構築、エンタープライズグレードのシステム。</div>
        <div className="pricing-card-price">
          <span className="pricing-num">1,000</span>
          <span className="pricing-unit">万円〜</span>
        </div>
        <div className="pricing-note">納期目安: 4ヶ月〜</div>
        <div className="pricing-divider"></div>
        <ul className="pricing-features">
          <li className="pricing-feature">全社AI戦略立案</li>
          <li className="pricing-feature">MLOps基盤・モデル管理</li>
          <li className="pricing-feature">マルチモーダルAI統合</li>
          <li className="pricing-feature">セキュリティ・コンプライアンス対応</li>
          <li className="pricing-feature">継続的なモデル改善体制</li>
        </ul>
      </div>
    </div>
    <p style={{marginTop: '20px', fontSize: '12px', color: 'var(--subtle)'}}>※ 上記はあくまで目安です。要件・規模によって変動します。詳細はお気軽にご相談ください。</p>
  </div>
</section>


<section className="section" aria-labelledby="cases-h">
  <div className="wrap">
    <div className="cases-head">
      <h2 className="h2 reveal" id="cases-h">AI開発の実績</h2>
      <a href="/cases" className="cases-more reveal">すべての実績を見る ↗</a>
    </div>
    <div className="cases-grid">
      <article className="case-card reveal">
        <div className="case-card-inner">
          <div className="case-thumb">
            <img src="https://picsum.photos/seed/aimanuf2025/720/450" alt="製造業 AI画像検査システム事例" />
          </div>
          <div className="case-tags">
            <span className="tag tag-ind">製造業</span>
            <span className="tag tag-svc">画像AI</span>
          </div>
          <h3 className="case-title">製造ラインの外観検査をAI化。検品工数を60%削減し、不良品検出率が向上</h3>
        </div>
      </article>
      <article className="case-card reveal d1">
        <div className="case-card-inner">
          <div className="case-thumb">
            <img src="https://picsum.photos/seed/ragfinance2025/720/450" alt="金融 社内RAGシステム事例" />
          </div>
          <div className="case-tags">
            <span className="tag tag-ind">金融</span>
            <span className="tag tag-svc">RAG構築</span>
          </div>
          <h3 className="case-title">社内規定・契約書を対象としたRAGチャットボット。問い合わせ対応時間を大幅に短縮</h3>
        </div>
      </article>
      <article className="case-card reveal d2">
        <div className="case-card-inner">
          <div className="case-thumb">
            <img src="https://picsum.photos/seed/aiedu2025/720/450" alt="教育 AIレコメンドシステム事例" />
          </div>
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">生成AI統合</span>
          </div>
          <h3 className="case-title">学習管理システムへのAIアシスタント統合。受講者の学習効率と継続率が改善</h3>
        </div>
      </article>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="why-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="why-h">選ばれる理由</h2>
    <div className="why-grid">
      <div className="why-item reveal d1">
        <div className="why-num">01</div>
        <div className="why-item-title">戦略から運用まで、一気通貫</div>
        <div className="why-item-body">要件定義・開発・運用保守を同一チームが担当。分断のない一貫した支援体制。</div>
      </div>
      <div className="why-item reveal d2">
        <div className="why-num">02</div>
        <div className="why-item-title">AI駆動開発による、スピードと品質の両立</div>
        <div className="why-item-body">主要AIを活用した開発プロセスで、350件超の実績にAI活用知見を組み合わせ。</div>
      </div>
      <div className="why-item reveal d3">
        <div className="why-num">03</div>
        <div className="why-item-title">国際水準の品質管理体制</div>
        <div className="why-item-body">CMMI Level 3・ISO 27001・Pマーク取得。日本人PMが一貫して品質管理。</div>
      </div>
      <div className="why-item reveal d4">
        <div className="why-num">04</div>
        <div className="why-item-title">規模を問わない対応力</div>
        <div className="why-item-body">予算・規模・業種を問わず、ビジネス課題に合わせたプランを提案。</div>
      </div>
    </div>
  </div>
</section>


<section className="cta-band" aria-labelledby="cta-h">
  <div className="wrap">
    <div className="cta-band-inner">
      <div>
        <h2 className="cta-head reveal" id="cta-h">まずは<br />無料相談から</h2>
        <p className="cta-sub reveal d1">課題の整理だけでも歓迎します。現状をお聞きしてから、最適な進め方をご提案します。</p>
      </div>
      <div className="cta-actions reveal d2">
        <div className="cta-action-row">
          <div>
            <div className="cta-action-title">無料相談を予約</div>
            <div className="cta-action-desc">オンライン30分。課題ヒアリングと方向性のご提案。</div>
          </div>
          <a href="/consultation" className="btn btn-white">予約する <span className="btn-arrow" style={{color: 'var(--ink)'}}>↗</span></a>
        </div>
        <div className="cta-action-row">
          <div>
            <div className="cta-action-title">資料ダウンロード</div>
            <div className="cta-action-desc">サービス概要・実績・料金目安をまとめた資料。</div>
          </div>
          <a href="/download" className="btn btn-outline-white">ダウンロード</a>
        </div>
        <div className="cta-action-row">
          <div>
            <div className="cta-action-title">お問い合わせ</div>
            <div className="cta-action-desc">個別のご質問・お見積りのご相談はこちらから。</div>
          </div>
          <a href="/contact" className="btn btn-outline-white">お問い合わせ</a>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
