import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サービス一覧｜AI活用・DX推進・システム開発・運用保守 - VIETISジャパン',
  description: 'AI活用診断・AIシステム開発・AI/DX Driving Suiteから、Webシステム・アプリ開発・運用保守まで。350件超の実績を持つAI/DXエージェンシー。まず無料相談から。',
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
  --bg-mid:    #F5F5F5;
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
  padding: clamp(56px, 12vw, 140px) 0;
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
  color: var(--ink);
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
  html.js-ready .reveal { transition: none !important; }
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
.header-nav a.active { color: var(--blue); }
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
}
.header-actions { display: flex; align-items: center; gap: 8px; }
.header-actions .btn { padding: 9px 20px; font-size: 13px; }
.header-lang {
  display: flex; align-items: center; gap: 5px;
  font-family: var(--en); font-size: 11px; font-weight: 700; color: var(--subtle);
}
.header-lang a { color: var(--subtle); transition: color 0.15s; }
.header-lang a:hover { color: var(--ink); }
.header-lang a.active { color: var(--ink); }
.header-lang span { color: var(--border); }
.hamburger {
  display: none; flex-direction: column; justify-content: center; align-items: center;
  gap: 5px; width: 40px; height: 40px; background: none; border: none; cursor: pointer; padding: 0;
}
.hamburger span {
  display: block; width: 22px; height: 1.5px; background: var(--ink);
  transition: transform 0.2s var(--ease), opacity 0.2s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
@media (max-width: 900px) {
  .header-nav { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }
}
@media (max-width: 640px) {
  .header-lang { display: none; }
}

/* Mobile Nav */
.mobile-nav {
  position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
  background: #fff; z-index: 99; padding: 32px var(--gutter);
  display: flex; flex-direction: column; gap: 32px;
  transform: translateX(100%); transition: transform 0.3s var(--ease);
  overflow-y: auto;
}
.mobile-nav.open { transform: none; }
.mobile-nav-list { display: flex; flex-direction: column; gap: 0; }
.mobile-nav-list a {
  font-size: 22px; font-weight: 700; color: var(--ink);
  padding: 16px 0; border-bottom: 1px solid var(--border);
  display: block;
}
.mobile-nav-lang { display: flex; gap: 12px; font-family: var(--en); font-size: 13px; font-weight: 700; }
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-actions { display: flex; flex-direction: column; gap: 10px; margin-top: auto; }

/* ═══════════════════════════════════════════════
   PAGE HERO
═══════════════════════════════════════════════ */
.page-hero {
  padding-top: 72px;
  border-bottom: 1px solid var(--border);
}
.page-hero-inner {
  padding: clamp(56px, 8vw, 100px) 0 clamp(48px, 7vw, 80px);
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--subtle);
  margin-bottom: clamp(24px, 3vw, 36px);
}
.breadcrumb a { color: var(--subtle); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--ink); }

.page-hero-h1 {
  font-size: clamp(3rem, 6vw, 5.5rem);
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
   SERVICES (suite block + list — from top page)
═══════════════════════════════════════════════ */
.suite-block {
  margin-top: clamp(48px, 6vw, 72px);
  background: #F5F5F5;
  border-radius: var(--r);
  overflow: hidden;
}
.suite-left {
  padding: clamp(36px, 5vw, 56px) clamp(36px, 5vw, 56px) clamp(32px, 4vw, 48px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}
.suite-left-text { flex: 1; min-width: 260px; }
.suite-flag {
  display: inline-block;
  width: fit-content;
  font-family: var(--en);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--red);
  color: #fff;
  padding: 4px 11px;
  border-radius: 2px;
  margin-bottom: 14px;
}
.suite-title {
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.15;
  margin-bottom: 20px;
  text-wrap: balance;
}
.suite-desc {
  font-size: clamp(15px, 1.5vw, 18px);
  color: var(--ink);
  line-height: 1.8;
  max-width: 48ch;
}
@media (max-width: 960px) {
  .suite-desc { white-space: normal; }
}
.suite-right {
  padding: clamp(36px, 5vw, 56px) clamp(36px, 5vw, 56px) clamp(28px, 4vw, 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  align-items: stretch;
  border-radius: 0 0 var(--r) var(--r);
}
.plan-card {
  border: 1px solid var(--border);
  border-radius: var(--r);
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .plan-card:hover {
    border-color: #b0b8cc;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
}
.plan-card.featured {
  border-color: var(--blue);
  box-shadow: 0 0 0 1px var(--blue);
}
@media (hover: hover) and (pointer: fine) {
  .plan-card.featured:hover {
    box-shadow: 0 0 0 1px var(--blue), 0 12px 40px rgba(43,73,231,0.18);
  }
}
.plan-badge-bar {
  background: var(--blue);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-align: center;
  padding: 7px 0;
  width: 100%;
  border-radius: calc(var(--r) - 1px) calc(var(--r) - 1px) 0 0;
}
.plan-badge-bar--ghost {
  background: transparent;
  pointer-events: none;
  border-radius: calc(var(--r) - 1px) calc(var(--r) - 1px) 0 0;
}
.plan-header {
  padding: 28px 24px 20px;
  border-bottom: 1px solid var(--border);
}
.plan-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 10px;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.plan-card.featured .plan-name { color: var(--blue); }
.plan-desc {
  font-size: 18px;
  color: var(--ink);
  line-height: 1.7;
  text-align: center;
}
.plan-features {
  list-style: none;
  padding: 20px 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;
  flex: 1;
}
.plan-features li {
  font-size: 15px;
  color: var(--ink);
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
}
.plan-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--blue);
  border-bottom: 2px solid var(--blue);
  transform: rotate(-45deg);
}
.plan-price-row {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  border-top: 1px solid var(--border);
  padding: 18px 24px 6px;
  flex-wrap: wrap;
}
.plan-price-num {
  font-family: var(--en);
  font-size: clamp(2.2rem, 2.8vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
}
.plan-card.featured .plan-price-num { color: var(--blue); }
.plan-price-unit {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  line-height: 1;
}
.plan-period {
  font-size: 11px;
  color: var(--subtle);
  padding: 0 24px 8px;
  display: block;
  text-align: center;
}
.plan-btn {
  display: block;
  margin: 0 24px 20px;
  padding: 10px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--blue);
  border: 1px solid var(--blue);
  border-radius: var(--r-btn);
  transition: background 0.15s, color 0.15s;
}
.plan-btn:hover { background: var(--blue); color: #fff; }
.plan-card.featured .plan-btn { background: var(--blue); color: #fff; }
.plan-card.featured .plan-btn:hover { background: #1e37d0; border-color: #1e37d0; }

/* Other services — card grid */
.services-list {
  margin-top: clamp(32px, 4vw, 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.svc-row {
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  border-radius: var(--r);
  padding: clamp(20px, 2.5vw, 28px);
  text-decoration: none;
  border: 1px solid transparent;
  transition: background 0.15s, border-color 0.15s;
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  .svc-row:hover {
    background: var(--blue-pale);
    border-color: var(--blue);
  }
  .svc-row:hover .svc-row-arrow { transform: translate(2px, -2px); color: var(--blue); }
}
.svc-row-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.svc-icon {
  width: 44px;
  height: 44px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  margin-bottom: 4px;
  flex-shrink: 0;
}
.svc-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.3;
}
.svc-tag {
  font-size: 15px;
  color: var(--muted);
  font-weight: 400;
  line-height: 1.55;
  margin-top: 2px;
  flex: 1;
}
.svc-row-arrow {
  display: inline-block;
  font-family: var(--en);
  font-size: 18px;
  color: var(--subtle);
  transition: transform 0.2s var(--ease), color 0.15s;
  margin-top: 20px;
  align-self: flex-end;
}
/* category label inside list */
.svc-cat-label {
  grid-column: 1 / -1;
  font-size: 11px;
  font-weight: 700;
  font-family: var(--en);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--subtle);
  padding-top: 8px;
}
.svc-cat-label:first-child { padding-top: 0; }

/* ═══════════════════════════════════════════════
   WHY
═══════════════════════════════════════════════ */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
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
@media (max-width: 960px) {
  .suite-right { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-band-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .services-list { grid-template-columns: repeat(2, 1fr); }
  .why-item:nth-child(2) { border-right: none; }
  .why-item:nth-child(1),
  .why-item:nth-child(2) { border-bottom: 1px solid var(--border); }
}
@media (max-width: 560px) {
  .services-list { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .why-item { border-right: none; border-bottom: 1px solid var(--border); }
  .why-item:last-child { border-bottom: none; }
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
  .cta-action-row { flex-direction: column; align-items: flex-start; gap: 12px; }
}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb" aria-label="パンくずリスト">
        <a href="/">トップ</a>
        <span className="breadcrumb-sep">›</span>
        <span aria-current="page">サービス</span>
      </nav>
      <h1 className="page-hero-h1 reveal" style={{fontSize: 'clamp(48px, 6vw, 70px)'}}>サービス</h1>
      <p className="page-hero-sub reveal d1">AI活用・DX推進から、システム開発・運用保守まで。戦略立案から本番運用まで、一気通貫で対応します。</p>
      <div className="page-hero-cta reveal d2">
        <a href="/consultation" className="btn btn-dark">無料相談を予約 <span className="btn-arrow">↗</span></a>
        <a href="/download" className="btn btn-outline">資料請求</a>
      </div>
    </div>
  </div>
</div>


<section className="section" style={{paddingTop: 'clamp(32px,5vw,56px)'}} aria-labelledby="svc-h">
  <div className="wrap">
    
    <div className="suite-block reveal" style={{marginTop: '0'}}>
      <div className="suite-left">
        <div className="suite-left-text">
          <h3 className="suite-title">AI/DX Driving Suite</h3>
          <p className="suite-desc">企業のフェーズに合わせた、AI/DX推進伴走サービス。月額契約で専任チームが継続的に支援します。</p>
        </div>
        <a href="/service/ai-driving-suite/" className="btn btn-outline">プランを見る <span className="btn-arrow">↗</span></a>
      </div>
      <div className="suite-right">
        <div className="plan-card">
          <div className="plan-badge-bar plan-badge-bar--ghost"></div>
          <div className="plan-header">
            <div className="plan-name">AIアドバイザリープラン</div>
            <div className="plan-desc">社内チームに技術顧問が伴走。AI導入の方向性を固める。</div>
          </div>
          <ul className="plan-features">
            <li>AI戦略の立案・技術選定支援</li>
            <li>週次MTGでのチームへのフィードバック</li>
            <li>コードレビュー・技術検証の伴走</li>
          </ul>
          <div className="plan-price-row">
            <span className="plan-price-num">30</span>
            <span className="plan-price-unit">万円/月〜</span>
          </div>
          <span className="plan-period">契約期間3ヶ月〜</span>
          <a href="/service/ai-driving-suite/" className="plan-btn">詳しく見る ↗</a>
        </div>
        <div className="plan-card featured">
          <div className="plan-badge-bar">おすすめ</div>
          <div className="plan-header">
            <div className="plan-name">AIラボプラン</div>
            <div className="plan-desc">PM＋専任エンジニアチームがアジャイル開発で前進する。</div>
          </div>
          <ul className="plan-features">
            <li>PM＋コアエンジニアの専任チーム体制</li>
            <li>スプリントごとに要件定義から実装まで</li>
            <li>進捗・品質・コストを一元管理</li>
          </ul>
          <div className="plan-price-row">
            <span className="plan-price-num">80</span>
            <span className="plan-price-unit">万円/月〜</span>
          </div>
          <span className="plan-period">契約期間3ヶ月〜</span>
          <a href="/service/ai-driving-suite/" className="plan-btn">詳しく見る ↗</a>
        </div>
        <div className="plan-card">
          <div className="plan-badge-bar plan-badge-bar--ghost"></div>
          <div className="plan-header">
            <div className="plan-name">AI/DXフルスタックプラン</div>
            <div className="plan-desc">戦略からインフラ・開発・運用まで全レイヤーを一社で担う。</div>
          </div>
          <ul className="plan-features">
            <li>戦略・設計・開発・運用の全工程対応</li>
            <li>CTO代行・DX推進リードとして伴走</li>
            <li>大規模・複合プロジェクトにも対応</li>
          </ul>
          <div className="plan-price-row">
            <span className="plan-price-num">150</span>
            <span className="plan-price-unit">万円/月〜</span>
          </div>
          <span className="plan-period">契約期間6ヶ月〜</span>
          <a href="/service/ai-driving-suite/" className="plan-btn">詳しく見る ↗</a>
        </div>
      </div>
    </div>

    
    <div className="services-list reveal d3">
      <span className="svc-cat-label">AI活用・システム開発</span>
      <a href="/service/ai-development/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          </div>
          <span className="svc-name">AIシステム開発</span>
          <span className="svc-tag">業務に効くAIを、要件定義から本番まで</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/dev-system/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none"/><circle cx="6" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="6" cy="19.5" r="1" fill="currentColor" stroke="none"/></svg>
          </div>
          <span className="svc-name">Webシステム・業務システム開発</span>
          <span className="svc-tag">業務を深く理解してから、作る</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/dev-app/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="7" y1="6" x2="17" y2="6"/><line x1="7" y1="18" x2="17" y2="18"/><circle cx="12" cy="20.5" r=".8" fill="currentColor" stroke="none"/></svg>
          </div>
          <span className="svc-name">アプリ開発</span>
          <span className="svc-tag">iOS・Android、使われるアプリを届ける</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/dev-web/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><circle cx="5.5" cy="6" r=".8" fill="currentColor" stroke="none"/><circle cx="8.5" cy="6" r=".8" fill="currentColor" stroke="none"/><circle cx="11.5" cy="6" r=".8" fill="currentColor" stroke="none"/><line x1="6" y1="13" x2="10" y2="13"/><line x1="6" y1="16" x2="15" y2="16"/></svg>
          </div>
          <span className="svc-name">Webサイト制作</span>
          <span className="svc-tag">目的から逆算して、設計する</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <span className="svc-cat-label">運用・保守</span>
      <a href="/service/support-ai/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <span className="svc-name">AIシステム運用保守</span>
          <span className="svc-tag">AIシステムは、リリースしてからが本番</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/support-system/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
          </div>
          <span className="svc-name">業務システム・アプリ運用保守</span>
          <span className="svc-tag">システムを止めないことが、事業を止めないこと</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/support-web/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>
          </div>
          <span className="svc-name">Webサイト運用保守</span>
          <span className="svc-tag">公開したWebサイトを、放置しない</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="why-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="why-h" style={{marginBottom: '40px'}}>選ばれる理由</h2>
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
      <div className="reveal d2">
        <div className="cta-actions">
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
  </div>
</section>
    </>
  );
}
