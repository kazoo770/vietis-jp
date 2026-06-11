import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '企業情報｜株式会社VIETISジャパン',
  description: '株式会社VIETISジャパンの企業情報。2018年設立。AI/DXエージェンシーとして戦略から開発・運用まで一気通貫で支援。東京・ベトナム・福岡・米国に拠点を持つグローバル開発体制。',
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
  line-height: 1;
  white-space: nowrap;
  transition: opacity 0.15s, transform 0.12s;
}
.btn:hover { opacity: 0.82; }
.btn:active { transform: scale(0.97); }
.btn-dark  { background: var(--ink); color: #fff; border-color: var(--ink); }
.btn-outline { background: transparent; color: var(--ink); border-color: var(--border); }
.btn-white { background: #fff; color: var(--ink); border-color: #fff; }
.btn-outline-white { background: transparent; color: #fff; border-color: rgba(255,255,255,0.35); }
.btn-arrow { font-size: 16px; font-family: var(--en); font-weight: 400; line-height: 1; transition: transform 0.2s var(--ease); }
.btn:hover .btn-arrow { transform: translate(1px,-1px); }

/* ─── REVEAL ──────────────────────────────────── */
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.55s var(--ease), transform 0.55s var(--ease);
}
.reveal.in { opacity: 1; transform: none; }
.d1 { transition-delay: 0.08s; }
.d2 { transition-delay: 0.16s; }
.d3 { transition-delay: 0.24s; }
.d4 { transition-delay: 0.32s; }

/* ═══════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════ */
.header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.header.scrolled { border-bottom-color: var(--border); }
.header-inner {
  max-width: var(--max); margin: 0 auto; padding: 0 var(--gutter);
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; height: 72px;
}
.header-logo { flex-shrink: 0; }
.header-logo svg { height: 24px; width: auto; }
.header-nav {
  display: flex; align-items: center; gap: 28px;
}
.header-nav a { font-size: 14px; font-weight: 600; color: var(--ink); transition: opacity 0.15s; white-space: nowrap; }
.header-nav a:hover { opacity: 0.55; }
.header-nav a.active { color: var(--blue); }
.header-right {
  display: flex; align-items: center; gap: 12px; justify-content: flex-end;
}
.header-actions { display: flex; align-items: center; gap: 8px; }
.header-actions .btn { padding: 9px 20px; font-size: 13px; }
.header-lang { display: flex; align-items: center; gap: 5px; font-family: var(--en); font-size: 11px; font-weight: 700; color: var(--subtle); }
.header-lang a { color: var(--subtle); transition: color 0.15s; }
.header-lang a:hover { color: var(--ink); }
.header-lang a.active { color: var(--ink); }
.header-lang span { color: var(--border); }
.hamburger {
  display: none; flex-direction: column; justify-content: center;
  gap: 5px; width: 28px; height: 28px; background: none; border: none; cursor: pointer;
}
.hamburger span { display: block; height: 1.5px; background: var(--ink); transition: transform 0.25s, opacity 0.25s; }
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
.mobile-nav {
  display: none; position: fixed; inset: 64px 0 0 0; z-index: 99;
  background: #fff; padding: 24px var(--gutter);
  flex-direction: column; gap: 0; overflow-y: auto;
  border-top: 1px solid var(--border);
}
.mobile-nav.open { display: flex; }
.mobile-nav-list { display: flex; flex-direction: column; }
.mobile-nav-list a { font-size: 18px; font-weight: 700; color: var(--ink); padding: 14px 0; border-bottom: 1px solid var(--border); }
.mobile-nav-lang { font-size: 13px; font-weight: 700; padding: 20px 0 0; display: flex; gap: 8px; }
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-actions { display: flex; flex-direction: column; gap: 8px; padding-top: 20px; }
.mobile-nav-actions .btn { width: 100%; justify-content: center; }

@media (max-width: 960px) {
  .header-nav { display: none; }
  .header-actions { display: none; }
  .header-lang { display: none; }
  .hamburger { display: flex; }
}

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
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--subtle);
  margin-bottom: clamp(24px, 3vw, 36px);
  flex-wrap: wrap;
}
.breadcrumb a { color: var(--subtle); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--ink); }

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
  max-width: 52ch;
  text-wrap: pretty;
  margin-bottom: 36px;
}
.page-hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }

/* ═══════════════════════════════════════════════
   MISSION & VALUES
═══════════════════════════════════════════════ */
.mission-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 7vw, 96px);
  align-items: center;
}
.mission-label {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 20px;
}
.mission-text {
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.4;
  color: var(--ink);
  margin-bottom: 32px;
  text-wrap: balance;
}
.values-block {
  background: var(--ink-dark);
  border-radius: var(--r);
  padding: clamp(32px, 4vw, 48px);
}
.values-label {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-bottom: 20px;
}
.values-text {
  font-family: var(--en);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  line-height: 1.3;
}
.values-desc {
  font-size: 14px;
  color: rgba(255,255,255,0.45);
  line-height: 1.75;
  margin-top: 16px;
}
/* Stat row under mission text */
.mission-stats {
  display: flex;
  gap: clamp(24px, 4vw, 48px);
  flex-wrap: wrap;
}
.mission-stat-num {
  font-family: var(--en);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 700;
  color: var(--blue);
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 4px;
}
.mission-stat-label {
  font-size: 12px;
  color: var(--muted);
}

/* ═══════════════════════════════════════════════
   会社概要
═══════════════════════════════════════════════ */
.company-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
}
.company-table {
  width: 100%;
  border-collapse: collapse;
}
.company-table tr {
  border-bottom: 1px solid var(--border);
}
.company-table tr:first-child {
  border-top: 1px solid var(--border);
}
.company-table th {
  font-size: 12px;
  font-weight: 700;
  color: var(--subtle);
  text-align: left;
  padding: 16px 0;
  padding-right: 24px;
  width: 100px;
  vertical-align: top;
  white-space: nowrap;
}
.company-table td {
  font-size: 14px;
  color: var(--ink);
  padding: 16px 0;
  line-height: 1.75;
  vertical-align: top;
}
.company-table td address {
  font-style: normal;
}
.company-cert-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.company-cert-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
}
.company-cert-badge {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 2px;
  background: var(--blue-pale);
  color: var(--blue);
  flex-shrink: 0;
}
/* Right: offices grid */
.offices-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.office-card {
  background: var(--bg-off);
  border-radius: var(--r);
  padding: 20px 22px;
  border: 1px solid var(--border);
}
.office-card-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--blue);
  margin-bottom: 8px;
  letter-spacing: 0.02em;
}
.office-card-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 6px;
}
.office-card-addr {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.7;
  font-style: normal;
}

/* ═══════════════════════════════════════════════
   アクセスマップ
═══════════════════════════════════════════════ */
.map-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(20px, 3vw, 32px);
}
.map-block {}
.map-block-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
  margin-bottom: 8px;
}
.map-block-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 6px;
}
.map-block-addr {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.7;
  font-style: normal;
  margin-bottom: 14px;
}
.map-embed {
  width: 100%;
  height: 260px;
  border: 0;
  border-radius: var(--r);
  display: block;
  background: var(--bg-mid);
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
  .mission-grid { grid-template-columns: 1fr; }
  .company-grid { grid-template-columns: 1fr; }
  .map-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-band-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .offices-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .why-grid { grid-template-columns: 1fr; }
  .why-item { border-right: none; border-bottom: 1px solid var(--border); }
  .why-item:last-child { border-bottom: none; }
  .footer-top { grid-template-columns: 1fr; }
  .page-hero-cta { flex-direction: column; }
  .page-hero-cta .btn { width: 100%; justify-content: center; }
  .mission-stats { gap: 20px; }
}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb" aria-label="パンくずリスト">
        <a href="/">トップ</a>
        <span className="breadcrumb-sep">›</span>
        <span aria-current="page">企業情報</span>
      </nav>
      <h1 className="page-hero-h1 reveal">企業情報</h1>
      <p className="page-hero-sub reveal d1">ビジネスの課題を、テクノロジーの力で解決する。戦略設計からMVP開発、リリース後の運用・改善まで、一気通貫でサポートする伴走型AI/DXエージェンシーです。</p>
      <div className="page-hero-cta reveal d2">
        <a href="/consultation" className="btn btn-dark">無料相談を予約 <span className="btn-arrow">↗</span></a>
        <a href="/download" className="btn btn-outline">資料請求</a>
      </div>
    </div>
  </div>
</div>


<section className="section" aria-labelledby="mission-h">
  <div className="wrap">
    <div className="mission-grid">
      <div className="reveal">
        <p className="mission-label">Mission</p>
        <h2 className="mission-text" id="mission-h">テクノロジーの力で企業価値を創出し<br />社会とユーザーに幸せをもたらす</h2>
        <div className="mission-stats">
          <div>
            <div className="mission-stat-num">350<span style={{fontSize: '0.6em', opacity: '0.7'}}>+</span></div>
            <div className="mission-stat-label">累計プロジェクト</div>
          </div>
          <div>
            <div className="mission-stat-num">15<span style={{fontSize: '0.6em', opacity: '0.7'}}>年+</span></div>
            <div className="mission-stat-label">業界経験</div>
          </div>
          <div>
            <div className="mission-stat-num">300<span style={{fontSize: '0.6em', opacity: '0.7'}}>名+</span></div>
            <div className="mission-stat-label">エンジニア在籍</div>
          </div>
        </div>
      </div>
      <div className="reveal d1">
        <div className="values-block">
          <p className="values-label">Values</p>
          <div className="values-text">IN PURSUIT OF EXCELLENCE</div>
          <p className="values-desc">品質への妥協を持たず、常に卓越を追求する。技術力とデザイン力、そして誠実さをもって、クライアントのビジネスに向き合います。</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="company-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="company-h" style={{marginBottom: 'clamp(32px,4vw,56px)'}}>会社概要</h2>
    <div className="company-grid">
      <div className="reveal">
        <table className="company-table">
          <tbody>
            <tr>
              <th>会社名</th>
              <td>株式会社VIETISジャパン<br /><span style={{fontSize: '12px', color: 'var(--subtle)'}}>VIETIS Japan Inc.</span></td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2018年</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>
                代表取締役　グエン・ゴック・タン<br />
                代表取締役　渡辺 和久
              </td>
            </tr>
            <tr>
              <th>従業員数</th>
              <td>255名（グループ全体）</td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>03-5759-4881（代表）</td>
            </tr>
            <tr>
              <th>関連会社</th>
              <td>株式会社VIETISフィンテック</td>
            </tr>
            <tr>
              <th>認証</th>
              <td>
                <div className="company-cert-list">
                  <div className="company-cert-item">
                    <span className="company-cert-badge">CMMI</span>
                    CMMI Level 3
                  </div>
                  <div className="company-cert-item">
                    <span className="company-cert-badge">ISO</span>
                    ISO 27001（情報セキュリティ）
                  </div>
                  <div className="company-cert-item">
                    <span className="company-cert-badge">P</span>
                    Pマーク（個人情報保護）
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="reveal d1">
        <p style={{fontSize: '12px', fontWeight: '700', color: 'var(--subtle)', marginBottom: '16px'}}>拠点</p>
        <div className="offices-grid">
          <div className="office-card">
            <p className="office-card-label">東京本社</p>
            <p className="office-card-name">日本橋オフィス</p>
            <address className="office-card-addr">
              〒103-0013<br />
              東京都中央区<br />
              日本橋人形町3-3-10<br />
              TECビル 7F
            </address>
          </div>
          <div className="office-card">
            <p className="office-card-label">グローバル本社</p>
            <p className="office-card-name">ハノイ開発本部</p>
            <address className="office-card-addr">
              ベトナム ハノイ<br />
              カウザイ区<br />
              ズイタン通り 82-3<br />
              3Aビル 3F・5F
            </address>
          </div>
          <div className="office-card">
            <p className="office-card-label">福岡事業所</p>
            <p className="office-card-name">福岡オフィス</p>
            <address className="office-card-addr">
              〒812-0044<br />
              福岡市博多区<br />
              千代2-22-8<br />
              一豊ビル 202
            </address>
          </div>
          <div className="office-card">
            <p className="office-card-label">米国事業所</p>
            <p className="office-card-name">Bothell, WA</p>
            <address className="office-card-addr">
              16420 38TH Ave SE<br />
              Bothell, WA<br />
              98012-5408<br />
              U.S.A.
            </address>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="map-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="map-h" style={{marginBottom: 'clamp(32px,4vw,56px)'}}>アクセス</h2>
    <div className="map-grid">
      <div className="map-block reveal">
        <p className="map-block-label">東京本社</p>
        <p className="map-block-name">日本橋TECビル 7F</p>
        <address className="map-block-addr">〒103-0013 東京都中央区日本橋人形町3-3-10 TECビル7F</address>
        <iframe
          className="map-embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.5!2d139.7833!3d35.6855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889571b5c5e2f%3A0x1f8c8f24e76a1b9!2z5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL5Lq677yT77yT77yT4oiS77yQ!5e0!3m2!1sja!2sjp!4v1"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="東京本社 アクセスマップ"
        ></iframe>
      </div>
      <div className="map-block reveal d1">
        <p className="map-block-label">グローバル本社（開発本部）</p>
        <p className="map-block-name">ハノイ 3Aビル 3F・5F</p>
        <address className="map-block-addr">ベトナム ハノイ カウザイ区 ズイタン通り 82-3 3Aビル 3F・5F</address>
        <iframe
          className="map-embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0!2d105.8380!3d21.0278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2k!5e0!3m2!1sja!2svn!4v1"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ベトナム本社 アクセスマップ"
        ></iframe>
      </div>
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
