import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'お問い合わせ - VIETISジャパン',
  description: 'VIETISジャパンへのお問い合わせはこちらから。サービス内容・料金・採用など、お気軽にご相談ください。',
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
.page-hero-sub { font-size: clamp(15px, 1.5vw, 18px); color: var(--muted); line-height: 1.8; max-width: 62ch; text-wrap: pretty; margin-bottom: 36px; }

/* ═══ MAIN LAYOUT ══════════════════════════════ */
.contact-layout { padding: clamp(24px, 3vw, 40px) 0 clamp(80px, 10vw, 120px); }
.contact-layout .wrap { display: grid; grid-template-columns: 1fr 360px; gap: clamp(48px, 6vw, 96px); align-items: start; }

/* ─── Form ── */
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.field-group { display: flex; flex-direction: column; gap: 6px; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.field-label { font-size: 13px; font-weight: 700; color: var(--ink); }
.field-label .req { color: var(--red); margin-left: 3px; font-size: 11px; }
.field-label .opt { color: var(--subtle); margin-left: 4px; font-size: 11px; font-weight: 400; }
.field-input, .field-select, .field-textarea {
  width: 100%; padding: 12px 16px;
  font-family: var(--ja); font-size: 15px; color: var(--ink);
  background: var(--bg); border: 1.5px solid var(--border);
  border-radius: var(--r); outline: none;
  transition: border-color 0.15s; -webkit-appearance: none;
}
.field-input::placeholder, .field-textarea::placeholder { color: var(--subtle); }
.field-input:focus, .field-select:focus, .field-textarea:focus { border-color: var(--blue); }
.field-input:focus-visible, .field-select:focus-visible, .field-textarea:focus-visible { box-shadow: 0 0 0 3px rgba(43,73,231,0.12); }
.field-select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238B92A5' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; padding-right: 36px; cursor: pointer; }
.field-textarea { resize: vertical; min-height: 160px; line-height: 1.75; }
.privacy-note { font-size: 12px; color: var(--subtle); line-height: 1.7; }
.privacy-note a { color: var(--blue); text-decoration: underline; text-underline-offset: 2px; }
.submit-btn { width: 100%; justify-content: center; padding: 16px 28px; font-size: 15px; }

/* ─── Thank you ── */
.contact-thanks { display: none; flex-direction: column; align-items: flex-start; gap: 24px; padding: 40px; background: var(--bg-off); border-radius: var(--r); border: 1px solid var(--border); }
.contact-thanks.show { display: flex; }
.thanks-icon { width: 48px; height: 48px; background: var(--blue-pale); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.thanks-icon svg { color: var(--blue); }
.thanks-title { font-size: 20px; font-weight: 700; color: var(--ink); line-height: 1.4; }
.thanks-body { font-size: 15px; color: var(--muted); line-height: 1.8; }

/* ─── Sidebar ── */
.contact-sidebar { position: sticky; top: 96px; display: flex; flex-direction: column; gap: 16px; }
.sidebar-card { background: var(--bg-off); border: 1px solid var(--border); border-radius: var(--r); padding: 28px; }
.sidebar-card-title { font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 12px; }
.sidebar-card-body { font-size: 13px; color: var(--muted); line-height: 1.8; }
.sidebar-card-body a { color: var(--blue); }
.sidebar-divider { border: none; border-top: 1px solid var(--border); margin: 16px 0; }
.sidebar-info-row { display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px; }
.sidebar-info-row:last-child { margin-bottom: 0; }
.sidebar-info-label { font-size: 11px; color: var(--subtle); }
.sidebar-info-value { font-size: 14px; color: var(--ink); font-weight: 500; }
.sidebar-cta-card { background: var(--blue); border-radius: var(--r); padding: 28px; text-align: center; }
.sidebar-cta-card p { font-size: 13px; color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 16px; }
.sidebar-cta-card .btn { width: 100%; justify-content: center; background: #fff; color: var(--ink-dark); border-color: #fff; font-size: 13px; padding: 11px 20px; }
.sidebar-cta-card .btn:hover { background: #f0f0f0; }

/* ═══ CTA BAND ═════════════════════════════════ */
.cta-band { background: var(--ink-dark); padding: clamp(72px, 10vw, 120px) 0; }
.cta-band-inner { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 80px); align-items: center; }
.cta-head { font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.3; color: #fff; text-wrap: balance; }
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
  .contact-layout .wrap { grid-template-columns: 1fr; }
  .contact-sidebar { position: static; }
  .cta-band-inner { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .header-nav { display: none; }
  .header-lang { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }
  .field-row { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
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
        <span aria-current="page">お問い合わせ</span>
      </nav>
      <h1 className="page-hero-h1 reveal d1">お問い合わせ</h1>
      <p className="page-hero-sub reveal d2">サービス内容・料金・採用など、ご不明点はお気軽にご連絡ください。<br />通常2営業日以内にご返信いたします。</p>
    </div>
  </div>
</div>


<div className="contact-layout">
  <div className="wrap">

    
    <div>
      <ContactForm />
    </div>
    <aside className="contact-sidebar reveal d1">
      <div className="sidebar-card">
        <div className="sidebar-card-title">お電話でのお問い合わせ</div>
        <div className="sidebar-card-body">
          <div style={{fontSize: '22px', fontWeight: '700', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: '6px'}}>03-5759-4881</div>
          <div style={{fontSize: '12px', color: 'var(--subtle)'}}>平日 10:00〜18:00</div>
          <hr className="sidebar-divider" />
          <div className="sidebar-info-row">
            <span className="sidebar-info-label">所在地</span>
            <span className="sidebar-info-value">〒103-0013<br />東京都中央区日本橋人形町3-3-10<br />日本橋TECビル 7F</span>
          </div>
          <div className="sidebar-info-row">
            <span className="sidebar-info-label">メールアドレス</span>
            <span className="sidebar-info-value">info@vietis.co.jp</span>
          </div>
        </div>
      </div>
      <div className="sidebar-cta-card">
        <p>まず30分、課題をお聞かせください。方向性をご提案します。</p>
        <a href="/consultation" className="btn">無料相談を予約 <span className="btn-arrow" style={{color: 'var(--blue)'}}>↗</span></a>
      </div>
    </aside>

  </div>
</div>


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
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
