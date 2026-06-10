import type { Metadata } from 'next';
import SpirWidget from '@/components/SpirWidget';

export const metadata: Metadata = {
  title: '無料相談を予約する - VIETISジャパン',
  description: 'AI・DX推進に関する無料相談を受け付けています。30分のオンライン面談で、課題の整理から方向性のご提案まで。',
};

export default function Page() {
  return (
    <>
      <style>{`

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
  --ja:        'Noto Sans JP', sans-serif;
  --en:        'Roboto', sans-serif;
  --ease:      cubic-bezier(0.23, 1, 0.32, 1);
  --gutter:    clamp(20px, 5vw, 72px);
  --max:       1440px;
  --r:         8px;
  --r-btn:     3px;
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
body { font-family: var(--ja); color: var(--ink); background: var(--bg); line-height: 1.75; overflow-x: hidden; -webkit-font-smoothing: antialiased; }
img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }
.wrap { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); }

/* ─── BUTTONS ─────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 6px;
  font-family: var(--ja); font-size: 14px; font-weight: 700;
  padding: 14px 28px; border-radius: var(--r-btn); border: 1.5px solid transparent;
  cursor: pointer; white-space: nowrap; line-height: 1;
  transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s var(--ease);
}
.btn:active { transform: scale(0.97); }
.btn-arrow { font-size: 16px; font-family: var(--en); font-weight: 400; line-height: 1; transition: transform 0.2s var(--ease); }
.btn:hover .btn-arrow { transform: translate(1px, -1px); }
.btn-dark { background: var(--ink-dark); color: #fff; border-color: var(--ink-dark); }
.btn-dark:hover { background: #000; border-color: #000; }
.btn-primary { background: var(--blue); color: #fff; border-color: var(--blue); }
.btn-primary:hover { background: #1e37d0; border-color: #1e37d0; }
.btn-outline { background: transparent; color: var(--ink); border-color: var(--border); }
.btn-outline:hover { border-color: var(--ink); }
.btn-outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,0.35); }
.btn-outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
.btn-white { background: #fff; color: var(--ink-dark); border-color: #fff; }
.btn-white:hover { background: #f0f0f0; }

/* ─── REVEAL ──────────────────────────────────── */
html.js-ready .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s var(--ease), transform 0.6s var(--ease); }
html.js-ready .reveal.in { opacity: 1; transform: none; }
html.js-ready .reveal.d1 { transition-delay: 0.07s; }
html.js-ready .reveal.d2 { transition-delay: 0.14s; }
html.js-ready .reveal.d3 { transition-delay: 0.21s; }
@media (prefers-reduced-motion: reduce) { html.js-ready .reveal { transition: none !important; } }

/* ═══ HEADER ═══════════════════════════════════ */
.header { position: fixed; top: 0; left: 0; right: 0; z-index: 100; background: #fff; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
.header.scrolled { border-bottom-color: var(--border); }
.header-inner { max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; height: 72px; }
.header-logo svg { height: 24px; width: auto; }
.header-nav { display: flex; align-items: center; gap: 28px; }
.header-nav a { font-size: 14px; font-weight: 600; color: var(--ink); transition: opacity 0.15s; white-space: nowrap; }
.header-nav a:hover { opacity: 0.55; }
.header-right { display: flex; align-items: center; gap: 12px; justify-content: flex-end; }
.header-actions { display: flex; align-items: center; gap: 8px; }
.header-actions .btn { padding: 9px 20px; font-size: 13px; }
.header-lang { display: flex; align-items: center; gap: 5px; font-family: var(--en); font-size: 11px; font-weight: 700; color: var(--subtle); }
.header-lang a { color: var(--subtle); transition: color 0.15s; }
.header-lang a:hover, .header-lang a.active { color: var(--ink); }
.header-lang span { color: var(--border); }
.hamburger { display: none; flex-direction: column; justify-content: center; gap: 5px; width: 36px; height: 36px; padding: 6px; background: none; border: none; cursor: pointer; margin-left: auto; flex-shrink: 0; }
.hamburger span { display: block; width: 20px; height: 1.5px; background: var(--ink); border-radius: 2px; transition: transform 0.25s var(--ease), opacity 0.2s; transform-origin: center; }
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
.mobile-nav { display: none; position: fixed; inset: 72px 0 0; background: #fff; z-index: 99; overflow-y: auto; padding: 24px var(--gutter) 48px; flex-direction: column; opacity: 0; transform: translateY(-8px); transition: opacity 0.25s var(--ease), transform 0.25s var(--ease); }
.mobile-nav.open { display: flex; opacity: 1; transform: none; }
.mobile-nav-list { display: flex; flex-direction: column; border-top: 1px solid var(--border); }
.mobile-nav-list a { padding: 16px 0; font-size: 18px; font-weight: 700; border-bottom: 1px solid var(--border); color: var(--ink); }
.mobile-nav-lang { display: flex; align-items: center; gap: 8px; margin-top: 24px; font-family: var(--en); font-size: 13px; font-weight: 700; color: var(--subtle); }
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-lang span { color: var(--border); }
.mobile-nav-actions { display: flex; flex-direction: column; gap: 12px; margin-top: 24px; }
.mobile-nav-actions .btn { width: 100%; justify-content: center; }

/* ═══ PAGE HERO ════════════════════════════════ */
.page-hero { padding-top: 72px; background: var(--bg); }
.page-hero-inner { padding: clamp(56px, 8vw, 100px) 0 clamp(32px, 4vw, 48px); }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--subtle); margin-bottom: clamp(24px, 3vw, 36px); flex-wrap: wrap; }
.breadcrumb a { color: var(--subtle); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--ink); }
.breadcrumb-sep { font-size: 10px; opacity: 0.5; }
.page-hero-h1 { font-size: clamp(48px, 6vw, 70px); font-weight: 700; letter-spacing: -0.04em; line-height: 1.0; color: var(--ink); margin-bottom: 20px; text-wrap: balance; }
.page-hero-sub { font-size: clamp(15px, 1.5vw, 18px); color: var(--muted); line-height: 1.8; max-width: 56ch; text-wrap: pretty; }

/* ═══ POINTS ════════════════════════════════════ */
.points-section { padding: clamp(8px, 2vw, 16px) 0 clamp(32px, 4vw, 48px); }
.points-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.point-card { background: var(--bg-off); border: 1px solid var(--border); border-radius: var(--r); padding: 24px; }
.point-num { font-family: var(--en); font-size: 11px; font-weight: 700; color: var(--blue); letter-spacing: 0.06em; margin-bottom: 8px; }
.point-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px; line-height: 1.4; }
.point-desc { font-size: 13px; color: var(--muted); line-height: 1.7; }

/* ═══ SPIR EMBED ════════════════════════════════ */
.calendly-section { padding: clamp(24px, 3vw, 40px) 0 clamp(80px, 10vw, 120px); }
.calendly-wrap { border: 1px solid var(--border); border-radius: var(--r); overflow: hidden; background: var(--bg); }
.spir-widget { min-width: 320px; height: 650px; max-height: 650px; overflow: hidden; }

/* ═══ CTA BAND ═════════════════════════════════ */
.cta-band { background: var(--ink-dark); padding: clamp(72px, 10vw, 120px) 0; }
.cta-band-inner { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 80px); align-items: center; }
.cta-head { font-size: clamp(1.4rem, 2.2vw, 2rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.3; color: #fff; text-wrap: balance; }
.cta-sub { font-size: clamp(15px, 1.4vw, 16px); color: rgba(255,255,255,0.48); margin-top: 18px; line-height: 1.8; max-width: 42ch; }
.cta-actions { display: flex; flex-direction: column; }
.cta-action-row { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: clamp(20px, 3vw, 28px) 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
.cta-action-row:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
.cta-action-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.cta-action-desc { font-size: 14px; color: rgba(255,255,255,0.38); line-height: 1.6; }
.cta-action-row .btn { flex-shrink: 0; font-size: 13px; padding: 10px 20px; }

/* ═══ FOOTER ════════════════════════════════════ */
.footer { background: #0A0A0F; color: #fff; padding: clamp(48px, 7vw, 80px) 0 0; }
.footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: clamp(32px, 5vw, 64px); padding-bottom: clamp(40px, 5vw, 60px); }
.footer-logo { margin-bottom: 16px; }
.footer-logo svg { height: 28px; width: auto; }
.footer-tagline { font-size: 16px; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 16px; }
.footer-address { font-size: 11px; font-style: normal; color: rgba(255,255,255,0.22); line-height: 1.7; }
.footer-col-label { font-family: var(--en); font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.28); margin-bottom: 12px; }
.footer-links { display: flex; flex-direction: column; gap: 8px; }
.footer-links a { font-size: 16px; color: rgba(255,255,255,0.62); transition: color 0.15s; }
.footer-links a:hover { color: #fff; }
.footer-bottom { border-top: 1px solid rgba(255,255,255,0.07); padding: 20px 0; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.footer-copy { font-family: var(--en); font-size: 11px; color: rgba(255,255,255,0.16); }
.footer-legal { display: flex; gap: 20px; }
.footer-legal a { font-size: 11px; color: rgba(255,255,255,0.22); transition: color 0.15s; }
.footer-legal a:hover { color: rgba(255,255,255,0.5); }

/* ═══ RESPONSIVE ════════════════════════════════ */
@media (max-width: 1024px) {
  .points-grid { grid-template-columns: 1fr; }
  .cta-band-inner { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .header-nav { display: none; }
  .header-lang { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }
  .points-grid { grid-template-columns: 1fr; }
  .spir-widget { height: 1000px; }
}
@media (max-width: 480px) {
  .footer-top { grid-template-columns: 1fr; }
}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal" aria-label="パンくずリスト">
        <a href="/">トップ</a>
        <span className="breadcrumb-sep">›</span>
        <span aria-current="page">無料相談予約</span>
      </nav>
      <h1 className="page-hero-h1 reveal d1">無料相談を予約する</h1>
      <p className="page-hero-sub reveal d2">オンライン30分。課題の整理から方向性のご提案まで。<br />まず話すだけでも、歓迎します。</p>
    </div>
  </div>
</div>


<div className="points-section">
  <div className="wrap">
    <div className="points-grid reveal">
      <div className="point-card">
        <div className="point-num">01</div>
        <div className="point-title">課題の整理だけでも</div>
        <div className="point-desc">「何から手をつけるべきか分からない」という段階でも大丈夫です。現状をお聞きして、優先度を整理します。</div>
      </div>
      <div className="point-card">
        <div className="point-num">02</div>
        <div className="point-title">費用・期間の目安をお伝えします</div>
        <div className="point-desc">概算の費用感や開発期間、必要なリソースについて、具体的な数字でお伝えします。</div>
      </div>
      <div className="point-card">
        <div className="point-num">03</div>
        <div className="point-title">提案・見積りは後日</div>
        <div className="point-desc">この場での即決は不要です。ヒアリング後に改めて提案書・見積書をご用意します。</div>
      </div>
    </div>
  </div>
</div>


<div className="calendly-section">
  <div className="wrap">
    <div className="calendly-wrap reveal d1">
      <SpirWidget />
    </div>
  </div>
</div>


<section className="cta-band" aria-labelledby="cta-h">
  <div className="wrap">
    <div className="cta-band-inner">
      <div>
        <h2 className="cta-head reveal" id="cta-h">その他のお問い合わせはこちら</h2>
        <p className="cta-sub reveal d1">日程が合わない場合や、まずはメールでご相談したい場合はお問い合わせフォームをご利用ください。</p>
      </div>
      <div className="reveal d2">
        <div className="cta-actions">
          <div className="cta-action-row">
            <div>
              <div className="cta-action-title">お問い合わせフォーム</div>
              <div className="cta-action-desc">メールでのご相談・ご質問。2営業日以内に返信します。</div>
            </div>
            <a href="/contact" className="btn btn-white">フォームへ</a>
          </div>
          <div className="cta-action-row">
            <div>
              <div className="cta-action-title">資料ダウンロード</div>
              <div className="cta-action-desc">サービス概要・実績・料金目安をまとめた資料。</div>
            </div>
            <a href="/download" className="btn btn-outline-white">ダウンロード</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
