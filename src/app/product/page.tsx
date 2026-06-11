import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プロダクト｜Keyspider・Menraku - VIETISジャパン',
  description: '現場が直面するリソース不足や技術の課題を解決する厳選プロダクト。クラウドID管理「Keyspider」導入サポートとAI採用支援「Menraku」を提供します。',
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
.breadcrumb-sep { font-size: 10px; opacity: 0.5; }
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
   PRODUCT CARDS
═══════════════════════════════════════════════ */
.product-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: clamp(32px, 4vw, 48px);
}

.product-card {
  background: var(--bg-mid);
  border-radius: var(--r);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid transparent;
  transition: border-color 0.2s;
}
.product-card:hover { border-color: var(--border); }

.product-card-body {
  padding: clamp(36px, 5vw, 56px);
  display: flex;
  flex-direction: column;
  gap: 0;
}

.product-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--en);
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--blue);
  background: var(--blue-pale);
  border-radius: 2px;
  padding: 4px 10px;
  margin-bottom: 18px;
  width: fit-content;
}

.product-name {
  font-size: clamp(1.8rem, 2.8vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 10px;
}

.product-tagline {
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--muted);
  line-height: 1.75;
  margin-bottom: 28px;
  max-width: 56ch;
  text-wrap: pretty;
}

.product-meta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  flex: 1;
}

.product-meta-row {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: flex-start;
}

.product-meta-key {
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
  white-space: nowrap;
  padding-top: 2px;
  letter-spacing: 0.02em;
}

.product-meta-val {
  font-size: 14px;
  color: var(--ink);
  line-height: 1.6;
}

.product-card-cta {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

/* Right panel — visual */
.product-card-visual {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: clamp(36px, 5vw, 56px);
  gap: 28px;
  border-left: 1px solid var(--border);
}

.product-icon-wrap {
  width: 88px;
  height: 88px;
  border-radius: 20px;
  background: var(--blue-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
}

.product-icon-wrap.red {
  background: #FFF0F3;
  color: var(--red);
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.product-tag {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  background: var(--bg-off);
  border: 1px solid var(--border);
  border-radius: var(--r-pill);
  padding: 5px 12px;
  white-space: nowrap;
}

.product-award {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-off);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 10px 14px;
  width: 100%;
  max-width: 280px;
}

.product-award-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  color: #F59E0B;
}

.product-award-text {
  font-size: 11px;
  color: var(--muted);
  line-height: 1.5;
}

.product-award-text strong {
  font-size: 12px;
  color: var(--ink);
  display: block;
  font-weight: 700;
}

.product-demo-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #FFF0F3;
  border: 1px solid #FFCCD6;
  border-radius: var(--r);
  padding: 10px 14px;
  width: 100%;
  max-width: 280px;
}

.product-demo-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}

.product-demo-text {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.4;
}

.product-demo-text strong {
  font-size: 12px;
  color: var(--ink);
  font-weight: 700;
  display: block;
}

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
  .product-card { grid-template-columns: 1fr; }
  .product-card-visual { border-left: none; border-top: 1px solid var(--border); flex-direction: row; flex-wrap: wrap; justify-content: flex-start; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-band-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .why-item:nth-child(2) { border-right: none; }
  .why-item:nth-child(1),
  .why-item:nth-child(2) { border-bottom: 1px solid var(--border); }
}
@media (max-width: 560px) {
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
        <span aria-current="page">プロダクト</span>
      </nav>
      <h1 className="page-hero-h1 reveal">プロダクト</h1>
      <p className="page-hero-sub reveal d1">現場が直面するリソース不足や技術の課題を解決し、ビジネスを次のステージへ進めるための厳選プロダクト。</p>
      <div className="page-hero-cta reveal d2">
        <a href="/consultation" className="btn btn-dark">無料相談を予約 <span className="btn-arrow">↗</span></a>
        <a href="/download" className="btn btn-outline">資料請求</a>
      </div>
    </div>
  </div>
</div>


<section className="section" style={{paddingTop: 'clamp(32px,5vw,56px)'}} aria-label="プロダクト一覧">
  <div className="wrap">
    <div className="product-list">

      
      <article className="product-card reveal">
        <div className="product-card-body">
          <div className="product-label">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>
            クラウドID管理
          </div>
          <h2 className="product-name">Keyspider<br />導入サポート</h2>
          <p className="product-tagline">情報システム部門の「手作業」と「セキュリティリスク」をゼロへ。日本企業の複雑な組織・人事制度に対応した国産クラウドID管理サービスです。</p>
          <div className="product-meta">
            <div className="product-meta-row">
              <span className="product-meta-key">対象の課題</span>
              <span className="product-meta-val">アカウントの手動管理 / IDaaS導入の手間 / 権限設定ミス / J-SOX対応</span>
            </div>
            <div className="product-meta-row">
              <span className="product-meta-key">VIETISの強み</span>
              <span className="product-meta-val">公式開発パートナーとしての深い技術知見、API連携・カスタマイズ開発力</span>
            </div>
          </div>
          <div className="product-card-cta">
            <a href="/product/keyspider/" className="btn btn-dark">詳細を見る <span className="btn-arrow">↗</span></a>
          </div>
        </div>
        <div className="product-card-visual">
          <div className="product-icon-wrap">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.5 17.5 26 12l3 3-1.5 1.5L29 18l-2 2-1.5-1.5L23 21l-2.5-3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 24v6M18 24v6M16 30h-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="product-tags">
            <span className="product-tag">AzureAD / Okta</span>
            <span className="product-tag">Active Directory</span>
            <span className="product-tag">J-SOX対応</span>
            <span className="product-tag">ゼロトラスト</span>
            <span className="product-tag">API連携</span>
          </div>
          <div className="product-award">
            <svg className="product-award-icon" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M14 3l2.83 5.73 6.32.92-4.57 4.45 1.08 6.3L14 17.27l-5.66 2.98 1.08-6.3-4.57-4.45 6.32-.92L14 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12"/>
            </svg>
            <div className="product-award-text">
              <strong>ITトレンド年間ランキング</strong>
              ID管理ツール部門 3年連続第1位
            </div>
          </div>
        </div>
      </article>

      
      <article className="product-card reveal d1">
        <div className="product-card-body">
          <div className="product-label" style={{color: 'var(--red)', background: '#FFF0F3'}}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5"/></svg>
            AI採用支援
          </div>
          <h2 className="product-name">Menraku</h2>
          <p className="product-tagline">採用プロセスの完全自動化で、人事が「見極め」に集中できる環境を。24時間365日、書類選考からAI面接・評価まで完全自動対応。</p>
          <div className="product-meta">
            <div className="product-meta-row">
              <span className="product-meta-key">対象の課題</span>
              <span className="product-meta-val">書類選考のパンク / 面接官による評価のブレ / 日程調整の往復メール</span>
            </div>
            <div className="product-meta-row">
              <span className="product-meta-key">ポイント</span>
              <span className="product-meta-val">登録不要で今すぐAI面接を体験できる「無料デモ」を公開中</span>
            </div>
          </div>
          <div className="product-card-cta">
            <a href="/product/menraku/" className="btn btn-dark">詳細を見る <span className="btn-arrow">↗</span></a>
          </div>
        </div>
        <div className="product-card-visual">
          <div className="product-icon-wrap red">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M20 8C14.477 8 10 12.477 10 18c0 3.137 1.434 5.942 3.693 7.82L12 32l6.5-2.5A9.92 9.92 0 0 0 20 29.8c5.523 0 10-4.477 10-10S25.523 8 20 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 18h.01M20 18h.01M24 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="product-tags">
            <span className="product-tag">AIスクリーニング</span>
            <span className="product-tag">自動AI面接</span>
            <span className="product-tag">評価ダッシュボード</span>
            <span className="product-tag">24時間365日</span>
          </div>
          <div className="product-demo-badge">
            <div className="product-demo-dot"></div>
            <div className="product-demo-text">
              <strong>登録不要・無料デモ公開中</strong>
              その場でAI面接の全プロセスを体験できます
            </div>
          </div>
        </div>
      </article>

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
