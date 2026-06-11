import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '資料ダウンロード｜サービス概要・実績・料金目安 - VIETISジャパン',
  description: 'VIETISジャパンのサービス概要・実績・料金目安をまとめた資料をダウンロードいただけます。お名前・会社名・メールアドレスをご入力ください。',
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




.page-hero-h1 { font-size: clamp(48px, 6vw, 70px); font-weight: 700; letter-spacing: -0.04em; line-height: 1.0; color: var(--ink); margin-bottom: 20px; text-wrap: balance; }
.page-hero-sub { font-size: clamp(15px, 1.5vw, 18px); color: var(--muted); line-height: 1.8; max-width: 62ch; text-wrap: pretty; margin-bottom: 36px; }

/* ═══ MAIN LAYOUT ══════════════════════════════ */
.dl-layout {
  padding: clamp(24px, 3vw, 40px) 0 clamp(80px, 10vw, 120px);
}
.dl-layout .wrap {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: clamp(48px, 6vw, 96px);
  align-items: start;
}

/* ─── Form side ── */
.dl-form-section {}
.dl-form-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.04em;
  margin-bottom: 24px;
}
.dl-form { display: flex; flex-direction: column; gap: 16px; }
.field-group { display: flex; flex-direction: column; gap: 6px; }
.field-label { font-size: 13px; font-weight: 700; color: var(--ink); }
.field-label .req { color: var(--red); margin-left: 3px; font-size: 11px; }
.field-input {
  width: 100%;
  padding: 12px 16px;
  font-family: var(--ja);
  font-size: 15px;
  color: var(--ink);
  background: var(--bg);
  border: 1.5px solid var(--border);
  border-radius: var(--r);
  outline: none;
  transition: border-color 0.15s;
  -webkit-appearance: none;
}
.field-input::placeholder { color: var(--subtle); }
.field-input:focus { border-color: var(--blue); }
.field-input:focus-visible { box-shadow: 0 0 0 3px rgba(43,73,231,0.12); }
.privacy-note {
  font-size: 12px;
  color: var(--subtle);
  line-height: 1.7;
}
.privacy-note a { color: var(--blue); text-decoration: underline; text-underline-offset: 2px; }
.submit-btn {
  width: 100%;
  justify-content: center;
  padding: 16px 28px;
  font-size: 15px;
}

/* ─── Thank you state ── */
.dl-thanks {
  display: none;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 40px;
  background: var(--bg-off);
  border-radius: var(--r);
  border: 1px solid var(--border);
}
.dl-thanks.show { display: flex; }
.dl-thanks-icon {
  width: 48px; height: 48px;
  background: var(--blue-pale);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.dl-thanks-icon svg { color: var(--blue); }
.dl-thanks-title { font-size: 20px; font-weight: 700; color: var(--ink); line-height: 1.4; }
.dl-thanks-body { font-size: 15px; color: var(--muted); line-height: 1.8; }
.dl-thanks-btn { font-size: 15px; padding: 14px 32px; }

/* ─── Document preview side ── */
.dl-doc-card {
  background: var(--bg-off);
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  position: sticky;
  top: 96px;
}
.dl-doc-thumb {
  aspect-ratio: 4/3;
  background: var(--bg-mid);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-bottom: 1px solid var(--border);
  padding: 32px;
}
.dl-doc-thumb-icon { color: var(--blue); opacity: 0.7; }
.dl-doc-thumb-label {
  font-family: var(--en);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--subtle);
  text-transform: uppercase;
}
.dl-doc-body { padding: 24px; }
.dl-doc-title { font-size: 16px; font-weight: 700; color: var(--ink); line-height: 1.5; margin-bottom: 16px; }
.dl-doc-list { display: flex; flex-direction: column; gap: 8px; }
.dl-doc-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
}
.dl-doc-item-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--blue);
  margin-top: 0.55em;
  flex-shrink: 0;
}
.dl-doc-meta {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--subtle);
}

/* ═══ CTA BAND ═════════════════════════════════ */
.cta-band { background: var(--ink-dark); padding: clamp(72px, 10vw, 120px) 0; }
.cta-band-inner { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(40px, 6vw, 80px); align-items: center; }
.cta-head { font-size: clamp(2rem, 3.5vw, 3.2rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.3; color: #fff; text-wrap: balance; }
.cta-sub { font-size: clamp(15px, 1.4vw, 16px); color: rgba(255,255,255,0.48); margin-top: 18px; line-height: 1.8; max-width: 42ch; }
.cta-actions { display: flex; flex-direction: column; gap: 0; }
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
  .dl-layout .wrap { grid-template-columns: 1fr; }
  .dl-doc-card { position: static; order: -1; }
  .cta-band-inner { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .header-nav { display: none; }
  .header-lang { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }
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
        <span className="breadcrumb-sep">/</span>
        <span aria-current="page">資料ダウンロード</span>
      </nav>
      <h1 className="page-hero-h1 reveal d1">資料ダウンロード</h1>
      <p className="page-hero-sub reveal d2">サービス概要・実績・料金目安をまとめた資料をご用意しています。<br />必要事項をご入力のうえ、ダウンロードください。</p>
    </div>
  </div>
</div>


<div className="dl-layout">
  <div className="wrap">

    
    <div className="dl-form-section">
      <p className="dl-form-label reveal">必要事項をご入力ください</p>

      
      <form className="dl-form reveal d1" id="dl-form" noValidate>
        <div className="field-group">
          <label className="field-label" htmlFor="name">お名前<span className="req">*</span></label>
          <input className="field-input" type="text" id="name" name="name" placeholder="山田 太郎" autoComplete="name" required />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="company">会社名<span className="req">*</span></label>
          <input className="field-input" type="text" id="company" name="company" placeholder="株式会社サンプル" autoComplete="organization" required />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="email">メールアドレス<span className="req">*</span></label>
          <input className="field-input" type="email" id="email" name="email" placeholder="taro.yamada@example.com" autoComplete="email" required />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="dept">部署名</label>
          <input className="field-input" type="text" id="dept" name="dept" placeholder="DX推進部" autoComplete="organization-title" />
        </div>
        <p className="privacy-note">
          ご入力いただいた個人情報は、資料送付および弊社サービスに関するご案内のみに使用します。<br />
          詳細は<a href="/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline-block', verticalAlign: 'middle', marginLeft: '2px', marginBottom: '1px'}} aria-hidden="true"><path d="M7 2h3v3M10 2 5.5 6.5M5 3H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V7"/></svg></a>をご確認ください。
        </p>
        <button type="submit" className="btn btn-primary submit-btn">
          資料をダウンロードする <span className="btn-arrow">↗</span>
        </button>
      </form>

      
      <div className="dl-thanks" id="dl-thanks" role="alert" aria-live="polite">
        <div className="dl-thanks-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div>
          <div className="dl-thanks-title">ご入力ありがとうございます</div>
          <p className="dl-thanks-body" style={{marginTop: '8px'}}>以下のボタンから資料をダウンロードいただけます。ご不明点があればお気軽にお問い合わせください。</p>
        </div>
        <a href="/img/vietis-service-overview.pdf" className="btn btn-primary dl-thanks-btn" download>
          資料をダウンロード（PDF）<span className="btn-arrow">↗</span>
        </a>
        <a href="/contact" className="btn btn-outline" style={{fontSize: '13px'}}>お問い合わせはこちら</a>
      </div>
    </div>

    
    <div className="dl-doc-card reveal d2">
      <div className="dl-doc-thumb">
        <svg className="dl-doc-thumb-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
        <span className="dl-doc-thumb-label">Service Overview</span>
      </div>
      <div className="dl-doc-body">
        <div className="dl-doc-title">VIETISジャパン サービス概要資料</div>
        <ul className="dl-doc-list">
          <li className="dl-doc-item"><span className="dl-doc-item-dot"></span>会社概要・開発体制・認証情報</li>
          <li className="dl-doc-item"><span className="dl-doc-item-dot"></span>AI/DX支援サービスの全メニューと特徴</li>
          <li className="dl-doc-item"><span className="dl-doc-item-dot"></span>サービス別の料金目安・契約プラン</li>
          <li className="dl-doc-item"><span className="dl-doc-item-dot"></span>業界別の導入事例・実績数値</li>
          <li className="dl-doc-item"><span className="dl-doc-item-dot"></span>よくあるご質問と開始までの流れ</li>
        </ul>
        <div className="dl-doc-meta">
          <span>PDF形式 / 最新版</span>
          <span>無料</span>
        </div>
      </div>
    </div>

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
