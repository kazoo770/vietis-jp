import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Webサイト制作｜目的から逆算して、設計する - VIETISジャパン',
  description: 'LP・コーポレートサイト・大規模サイトまで、目的から逆算した設計で制作。要件定義から運用まで一気通貫。まずは無料相談から。',
};

export default function Page() {
  return (
    <>
      <style>{`

:root {
  --blue:#2B49E7; --blue-pale:#EDF0FD; --red:#FF0033;
  --ink:#1A1C23; --ink-dark:#0F1117; --muted:#555B6E; --subtle:#8B92A5;
  --bg:#FFFFFF; --bg-off:#F7F8FC; --bg-mid:#F0F2F8;
  --border:#E4E7EF;
  --ja:'Noto Sans JP',sans-serif; --en:'Roboto',sans-serif;
  --ease:cubic-bezier(0.23,1,0.32,1); --ease-io:cubic-bezier(0.77,0,0.175,1);
  --gutter:clamp(20px,5vw,72px); --max:1440px; --r:8px; --r-btn:3px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--ja);color:var(--ink);background:var(--bg);line-height:1.75;overflow-x:hidden;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul{list-style:none}
.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}
.section{padding:clamp(64px,10vw,120px) 0;border-top:1px solid var(--border)}
.h2{font-size:clamp(2rem,4vw,3.6rem);font-weight:700;letter-spacing:-0.03em;line-height:1.1;text-wrap:balance}
.body-lead{font-size:clamp(15px,1.5vw,17px);color:var(--muted);line-height:1.85;max-width:60ch;text-wrap:pretty}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--ja);font-size:14px;font-weight:700;padding:14px 28px;border-radius:var(--r-btn);border:1.5px solid transparent;cursor:pointer;white-space:nowrap;line-height:1;transition:background 0.15s,border-color 0.15s,color 0.15s,transform 0.1s var(--ease)}
.btn:active{transform:scale(0.97)}
.btn-arrow{font-size:16px;font-family:var(--en);font-weight:400;line-height:1;transition:transform 0.2s var(--ease)}
.btn:hover .btn-arrow{transform:translate(1px,-1px)}


.btn-outline{background:transparent;color:var(--ink);border-color:var(--border)}
.btn-outline:hover{border-color:var(--ink)}
.btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,0.35)}
.btn-outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.08)}
.btn-white{background:#fff;color:var(--ink-dark);border-color:#fff}
.btn-white:hover{background:#f0f0f0}
html.js-ready .reveal{opacity:0;transform:translateY(16px);transition:opacity 0.6s var(--ease),transform 0.6s var(--ease)}
html.js-ready .reveal.in{opacity:1;transform:none}
html.js-ready .reveal.d1{transition-delay:0.07s}
html.js-ready .reveal.d2{transition-delay:0.14s}
html.js-ready .reveal.d3{transition-delay:0.21s}
html.js-ready .reveal.d4{transition-delay:0.28s}
@media(prefers-reduced-motion:reduce){html.js-ready .reveal{transition:none!important}}

/* HEADER */
.header{position:fixed;top:0;left:0;right:0;z-index:100;background:#fff;border-bottom:1px solid transparent;transition:border-color 0.2s}
.header.scrolled{border-bottom-color:var(--border)}
.header-inner{max-width:var(--max);margin:0 auto;padding:0 var(--gutter);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:72px}
.header-logo svg{height:24px;width:auto}
.header-nav{display:flex;align-items:center;gap:28px}
.header-nav a{font-size:14px;font-weight:600;color:var(--ink);transition:opacity 0.15s;white-space:nowrap}
.header-nav a:hover{opacity:0.55}
.header-right{display:flex;align-items:center;gap:12px;justify-content:flex-end}
.header-actions{display:flex;align-items:center;gap:8px}
.header-actions .btn{padding:9px 20px;font-size:13px}
.header-lang{display:flex;align-items:center;gap:5px;font-family:var(--en);font-size:11px;font-weight:700;color:var(--subtle)}
.header-lang a{color:var(--subtle);transition:color 0.15s}
.header-lang a:hover{color:var(--ink)}
.header-lang a.active{color:var(--ink)}
.header-lang span{color:var(--border)}
.hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;padding:6px;background:none;border:none;cursor:pointer;margin-left:auto;flex-shrink:0}
.hamburger span{display:block;width:20px;height:1.5px;background:var(--ink);border-radius:2px;transition:transform 0.25s var(--ease),opacity 0.2s;transform-origin:center}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.mobile-nav{display:none;position:fixed;inset:72px 0 0;background:#fff;z-index:99;overflow-y:auto;padding:24px var(--gutter) 48px;flex-direction:column;gap:0;transform:translateY(-8px);opacity:0;transition:opacity 0.25s var(--ease),transform 0.25s var(--ease)}
.mobile-nav.open{display:flex;opacity:1;transform:none}
.mobile-nav-list{display:flex;flex-direction:column;border-top:1px solid var(--border)}
.mobile-nav-list a{padding:16px 0;font-size:18px;font-weight:700;border-bottom:1px solid var(--border);color:var(--ink)}
.mobile-nav-lang{display:flex;align-items:center;gap:8px;margin-top:24px;font-family:var(--en);font-size:13px;font-weight:700;color:var(--subtle)}
.mobile-nav-lang a{color:var(--subtle)}
.mobile-nav-lang a.active{color:var(--ink)}
.mobile-nav-lang span{color:var(--border)}
.mobile-nav-actions{display:flex;flex-direction:column;gap:12px;margin-top:24px}
.mobile-nav-actions .btn{width:100%;justify-content:center}

/* PAGE HERO */
.page-hero{padding-top:72px;border-bottom:1px solid var(--border)}
.page-hero-inner{padding:clamp(56px,8vw,100px) 0 clamp(48px,7vw,80px)}




.page-hero-h1{font-size:clamp(48px,6vw,70px);font-weight:700;letter-spacing:-0.04em;line-height:1.0;color:var(--ink);margin-bottom:20px}
.page-hero-sub{font-size:clamp(15px,1.5vw,18px);color:var(--muted);line-height:1.8;text-wrap:pretty;margin-bottom:36px}
.page-hero-cta{display:flex;gap:12px;flex-wrap:wrap}

/* PITCH */
.pitch-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px)}
.pitch-problem-list{margin-top:32px;display:flex;flex-direction:column}
.pitch-prob-item{padding:18px 0;border-bottom:1px solid var(--border)}
.pitch-prob-item:first-child{border-top:1px solid var(--border)}
.pitch-prob-text{font-size:16px;font-weight:600;line-height:1.6;color:var(--ink)}
.pitch-solution-list{margin-top:32px;display:flex;flex-direction:column;gap:24px}
.pitch-sol-item{display:flex;align-items:flex-start;gap:16px}
.pitch-sol-icon{width:40px;height:40px;background:var(--blue-pale);border-radius:var(--r);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--blue)}
.pitch-sol-title{font-size:16px;font-weight:700;color:var(--ink);margin-bottom:4px}
.pitch-sol-desc{font-size:14px;color:var(--muted);line-height:1.7}

/* SERVICE MENU */
.svc-menu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:40px;border-top:1px solid var(--border);border-left:1px solid var(--border)}
.svc-menu-item{padding:clamp(24px,3vw,36px);border-right:1px solid var(--border);border-bottom:1px solid var(--border);transition:background 0.15s}
@media(hover:hover) and (pointer:fine){.svc-menu-item:hover{background:var(--bg-off)}}
.svc-menu-item-icon{width:44px;height:44px;background:var(--blue-pale);border-radius:var(--r);display:flex;align-items:center;justify-content:center;color:var(--blue);margin-bottom:16px}
.svc-menu-item-title{font-size:16px;font-weight:700;color:var(--ink);margin-bottom:10px;line-height:1.4}
.svc-menu-item-desc{font-size:14px;color:var(--muted);line-height:1.7}

/* FLOW */
.flow-section{background:var(--bg-off)}
.flow-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:0;margin-top:48px;position:relative}
.flow-steps::before{content:'';position:absolute;top:28px;left:calc(10% + 20px);right:calc(10% + 20px);height:1px;background:var(--border)}
.flow-step{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 8px;position:relative;z-index:1}
.flow-step-num{width:56px;height:56px;border-radius:50%;background:var(--bg);border:1.5px solid var(--border);display:flex;align-items:center;justify-content:center;font-family:var(--en);font-size:13px;font-weight:700;color:var(--subtle);margin-bottom:16px;flex-shrink:0;transition:background 0.2s,border-color 0.2s,color 0.2s}
.flow-step.active .flow-step-num{background:var(--blue);border-color:var(--blue);color:#fff}
.flow-step-title{font-size:15px;font-weight:700;color:var(--ink);line-height:1.4;margin-bottom:8px}
.flow-step-desc{font-size:14px;color:var(--muted);line-height:1.6}

/* PRICING */
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;margin-top:48px}
.pricing-card{background:var(--bg);padding:clamp(24px,3vw,36px)}
.pricing-card-label{font-size:12px;font-weight:700;color:var(--subtle);margin-bottom:12px;letter-spacing:0.02em}
.pricing-card-name{font-size:18px;font-weight:700;color:var(--ink);margin-bottom:8px;line-height:1.3}
.pricing-card-desc{font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:20px}
.pricing-card-price{display:flex;align-items:baseline;gap:4px;margin-bottom:6px}
.pricing-num{font-family:var(--en);font-size:40px;font-weight:700;color:var(--ink);letter-spacing:-0.03em;line-height:1}
.pricing-unit{font-size:14px;font-weight:500;color:var(--muted)}
.pricing-note{font-size:11px;color:var(--subtle);margin-top:4px}
.pricing-divider{height:1px;background:var(--border);margin:20px 0}
.pricing-features{display:flex;flex-direction:column;gap:10px}
.pricing-feature{display:flex;align-items:flex-start;gap:8px;font-size:14px;color:var(--ink);line-height:1.5}
.pricing-feature::before{content:'';width:16px;height:16px;border-radius:50%;flex-shrink:0;margin-top:2px;background-color:var(--blue-pale);background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.5 8L6.5 11L12.5 5' stroke='%232B49E7' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}

/* CASES */
.cases-head{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:32px}
.cases-more{font-size:13px;font-weight:700;color:var(--muted);display:inline-flex;align-items:center;gap:5px;flex-shrink:0;transition:color 0.15s,gap 0.15s;padding-bottom:2px;border-bottom:1px solid var(--border)}
@media(hover:hover) and (pointer:fine){.cases-more:hover{color:var(--ink);gap:8px}}
.cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--border);border-left:1px solid var(--border)}
.case-card{overflow:hidden;border-right:1px solid var(--border);border-bottom:1px solid var(--border);transition:background 0.2s}
.case-card:hover{background:var(--bg-off)}
.case-card-inner{padding:clamp(20px,2.5vw,32px);display:flex;flex-direction:column;height:100%}
.case-thumb{aspect-ratio:16/10;overflow:hidden;background:var(--bg-off);margin-bottom:20px}
.case-thumb img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s var(--ease)}
.case-card:hover .case-thumb img{transform:scale(1.03)}
.case-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}
.tag{font-size:10px;font-weight:700;padding:3px 9px;border-radius:2px;letter-spacing:0.03em}
.tag-ind{color:var(--muted);border:1px solid var(--border);background:var(--bg-off)}
.tag-svc{color:var(--blue);border:1px solid var(--blue-pale);background:var(--blue-pale)}
.case-title{font-size:clamp(0.95rem,1.3vw,1.1rem);font-weight:700;letter-spacing:-0.02em;line-height:1.5;margin-bottom:auto;padding-bottom:20px}

/* WHY */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:40px}
.why-item{padding:32px 28px;border-right:1px solid var(--border)}
.why-item:last-child{border-right:none}
.why-num{font-family:var(--en);font-size:36px;font-weight:700;color:var(--blue);letter-spacing:-0.02em;line-height:1;margin-bottom:16px}
.why-item-title{font-size:16px;font-weight:700;color:var(--ink);line-height:1.4;margin-bottom:10px}
.why-item-body{font-size:14px;color:var(--muted);line-height:1.75}

/* CTA BAND */
.cta-band{background:var(--ink-dark);padding:clamp(72px,10vw,120px) 0}
.cta-band-inner{display:grid;grid-template-columns:1fr 1.2fr;gap:clamp(40px,6vw,80px);align-items:center}
.cta-head{font-size:clamp(2.4rem,5vw,4.2rem);font-weight:700;letter-spacing:-0.03em;line-height:1.05;color:#fff;text-wrap:balance;margin-bottom:16px}
.cta-sub{font-size:16px;color:rgba(255,255,255,0.55);line-height:1.75;max-width:38ch}
.cta-actions{display:flex;flex-direction:column;gap:0}
.cta-action-row{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:20px 0;border-bottom:1px solid rgba(255,255,255,0.1)}
.cta-action-row:first-child{border-top:1px solid rgba(255,255,255,0.1)}
.cta-action-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:4px}
.cta-action-desc{font-size:14px;color:rgba(255,255,255,0.45)}
.cta-action-row .btn{font-size:13px;padding:10px 20px;flex-shrink:0}

/* FOOTER */
.footer{background:#0A0A0F;color:#fff;padding:clamp(48px,7vw,80px) 0 0}
.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:clamp(32px,5vw,64px);padding-bottom:clamp(40px,5vw,60px)}
.footer-logo{margin-bottom:16px}
.footer-logo svg{height:28px;width:auto}
.footer-tagline{font-size:16px;color:rgba(255,255,255,0.55);line-height:1.7;margin-bottom:16px}
.footer-address{font-size:11px;font-style:normal;color:rgba(255,255,255,0.22);line-height:1.7}
.footer-col-label{font-family:var(--en);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:12px}
.footer-links{display:flex;flex-direction:column;gap:8px}
.footer-links a{font-size:16px;color:rgba(255,255,255,0.62);transition:color 0.15s}
.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.07);padding:20px 0;display:flex;align-items:center;justify-content:space-between;gap:16px}
.footer-copy{font-family:var(--en);font-size:11px;color:rgba(255,255,255,0.16)}
.footer-legal{display:flex;gap:20px}
.footer-legal a{font-size:11px;color:rgba(255,255,255,0.22);transition:color 0.15s}
.footer-legal a:hover{color:rgba(255,255,255,0.5)}

/* RESPONSIVE */
@media(max-width:1024px){
  .svc-menu-grid{grid-template-columns:repeat(2,1fr)}
  .flow-steps{grid-template-columns:repeat(3,1fr);gap:24px}
  .flow-steps::before{display:none}
  .why-grid{grid-template-columns:repeat(2,1fr)}
  .why-item:nth-child(2){border-right:none}
  .why-item:nth-child(1),.why-item:nth-child(2){border-bottom:1px solid var(--border)}
}
@media(max-width:768px){
  .header-nav,.header-lang,.header-actions{display:none}
  .hamburger{display:flex}
  .header-inner{grid-template-columns:auto 1fr}
  .pitch-grid{grid-template-columns:1fr}
  .svc-menu-grid{grid-template-columns:1fr}
  .flow-steps{grid-template-columns:1fr}
  .pricing-grid{grid-template-columns:1fr}
  .cases-grid{grid-template-columns:1fr}
  .why-grid{grid-template-columns:1fr}
  .why-item{border-right:none;border-bottom:1px solid var(--border)}
  .why-item:last-child{border-bottom:none}
  .cta-band-inner{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal"><a href="/">トップ</a><span className="breadcrumb-sep">/</span><a href="/service">サービス</a><span className="breadcrumb-sep">/</span><span aria-current="page">Webサイト制作</span></nav>
      <h1 className="page-hero-h1 reveal d1">Webサイト制作</h1>
      <p className="page-hero-sub reveal d2" style={{maxWidth: '680px'}}>LP・コーポレートサイト・大規模サイトまで、目的から逆算した設計で制作。要件定義から運用まで一気通貫で対応します。</p>
      <div className="page-hero-cta reveal d3">
        <a href="/consultation" className="btn btn-dark">無料相談を予約する <span className="btn-arrow">↗</span></a>
        <a href="/download" className="btn btn-outline">資料をダウンロード</a>
      </div>
    </div>
  </div>
</div>

<section className="section">
  <div className="wrap">
    <div className="pitch-grid">
      <div>
        <h2 className="h2 reveal" style={{fontSize: 'clamp(1.5rem,2.2vw,2.2rem)'}}>こんな課題、抱えていませんか</h2>
        <div className="pitch-problem-list">
          <div className="pitch-prob-item reveal d1"><p className="pitch-prob-text">サイトを作ったが成果につながらず、リニューアルのたびにゼロからやり直している</p></div>
          <div className="pitch-prob-item reveal d2"><p className="pitch-prob-text">制作会社に要件を伝えても、意図と違うものが上がってくる</p></div>
          <div className="pitch-prob-item reveal d3"><p className="pitch-prob-text">デザインは良くても表示が遅い、SEOが弱い、更新しにくいと悩んでいる</p></div>
          <div className="pitch-prob-item reveal d4"><p className="pitch-prob-text">納品後の運用保守を任せられるパートナーが見つからない</p></div>
        </div>
      </div>
      <div>
        <h2 className="h2 reveal" style={{color: 'var(--blue)', fontSize: 'clamp(1.5rem,2.2vw,2.2rem)'}}>VIETISのアプローチ</h2>
        <div className="pitch-solution-list">
          <div className="pitch-sol-item reveal d1">
            <div className="pitch-sol-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg></div>
            <div><div className="pitch-sol-title">目的から逆算した設計</div><div className="pitch-sol-desc">「なぜ作るか」を起点に設計します。KPI設定・ターゲット分析・情報設計を経てからデザインに入ります。</div></div>
          </div>
          <div className="pitch-sol-item reveal d2">
            <div className="pitch-sol-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
            <div><div className="pitch-sol-title">設計から運用まで一気通貫</div><div className="pitch-sol-desc">要件定義・デザイン・実装・SEO・CMS構築・運用保守を同一チームが担当。引き継ぎによる品質劣化がありません。</div></div>
          </div>
          <div className="pitch-sol-item reveal d3">
            <div className="pitch-sol-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
            <div><div className="pitch-sol-title">パフォーマンスとSEOを標準対応</div><div className="pitch-sol-desc">Core Web Vitals・構造化データ・セキュリティを標準実装。表示速度と検索評価を両立させます。</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <h2 className="h2 reveal">対応領域</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px'}}>LP制作から大規模サイト構築まで、Webサイトに関わる全工程に対応します。</p>
    <div className="svc-menu-grid">
      <div className="svc-menu-item reveal">
        <div className="svc-menu-item-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <div className="svc-menu-item-title">コーポレートサイト制作</div>
        <div className="svc-menu-item-desc">企業ブランドを体現するコーポレートサイト。IA設計・デザイン・CMS構築・多言語対応まで一貫対応。</div>
      </div>
      <div className="svc-menu-item reveal d1">
        <div className="svc-menu-item-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div>
        <div className="svc-menu-item-title">LP・キャンペーンサイト</div>
        <div className="svc-menu-item-desc">CV最大化を目指したランディングページ。A/Bテスト対応・アニメーション実装・高速表示に対応。</div>
      </div>
      <div className="svc-menu-item reveal d2">
        <div className="svc-menu-item-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div>
        <div className="svc-menu-item-title">UI/UXデザイン</div>
        <div className="svc-menu-item-desc">ユーザーリサーチ・ワイヤーフレーム・プロトタイプ制作。デザインシステム構築にも対応。</div>
      </div>
      <div className="svc-menu-item reveal">
        <div className="svc-menu-item-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg></div>
        <div className="svc-menu-item-title">SEO・パフォーマンス最適化</div>
        <div className="svc-menu-item-desc">Core Web Vitals改善・構造化データ実装・技術SEO対応。表示速度と検索評価を同時に向上させます。</div>
      </div>
      <div className="svc-menu-item reveal d1">
        <div className="svc-menu-item-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
        <div className="svc-menu-item-title">CMS構築・移行</div>
        <div className="svc-menu-item-desc">WordPress・Headless CMS（Contentful / microCMS等）の構築・移行。更新しやすい管理画面設計も対応。</div>
      </div>
      <div className="svc-menu-item reveal d2">
        <div className="svc-menu-item-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg></div>
        <div className="svc-menu-item-title">セキュリティ・アクセシビリティ</div>
        <div className="svc-menu-item-desc">WCAG 2.1 AA準拠・HTTPS化・WAF設定・脆弱性診断。JIS X 8341対応も相談可能。</div>
      </div>
    </div>
  </div>
</section>

<section className="section flow-section">
  <div className="wrap">
    <h2 className="h2 reveal">制作フロー</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px'}}>目的定義を起点に、同一チームが5つのフェーズで確実に進めます。</p>
    <div className="flow-steps">
      <div className="flow-step active reveal">
        <div className="flow-step-num">01</div>
        <div className="flow-step-title">目的定義・要件整理</div>
        <div className="flow-step-desc">KPI設定・ターゲット分析・競合調査・サイト構成案の策定。</div>
      </div>
      <div className="flow-step reveal d1">
        <div className="flow-step-num">02</div>
        <div className="flow-step-title">IA・UX設計</div>
        <div className="flow-step-desc">情報設計・ワイヤーフレーム・プロトタイプで構造を合意形成。</div>
      </div>
      <div className="flow-step reveal d2">
        <div className="flow-step-num">03</div>
        <div className="flow-step-title">デザイン制作</div>
        <div className="flow-step-desc">ビジュアルデザイン・レスポンシブ対応・デザインシステム構築。</div>
      </div>
      <div className="flow-step reveal d3">
        <div className="flow-step-num">04</div>
        <div className="flow-step-title">実装・CMS構築</div>
        <div className="flow-step-desc">フロントエンド実装・CMS統合・SEO設定・パフォーマンス最適化。</div>
      </div>
      <div className="flow-step reveal d4">
        <div className="flow-step-num">05</div>
        <div className="flow-step-title">公開・運用支援</div>
        <div className="flow-step-desc">リリース後の更新代行・分析レポート・継続改善もサポート。</div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <h2 className="h2 reveal">費用目安</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px', maxWidth: 'none'}}>プロジェクトの規模・複雑さに応じてご提案します。まずはご相談ください。</p>
    <div className="pricing-grid">
      <div className="pricing-card reveal">
        <div className="pricing-card-label">PLAN A</div>
        <div className="pricing-card-name">LP・シンプルサイト</div>
        <div className="pricing-card-desc">1〜5ページ程度のLP・採用サイト・サービス紹介ページ。</div>
        <div className="pricing-card-price"><span className="pricing-num">30</span><span className="pricing-unit">万円〜</span></div>
        <div className="pricing-note">納期目安: 3〜6週間</div>
        <div className="pricing-divider"></div>
        <ul className="pricing-features">
          <li className="pricing-feature">要件定義・IA設計</li>
          <li className="pricing-feature">レスポンシブデザイン</li>
          <li className="pricing-feature">基本SEO設定</li>
          <li className="pricing-feature">CMS組み込み（オプション）</li>
        </ul>
      </div>
      <div className="pricing-card reveal d1">
        <div className="pricing-card-label">PLAN B</div>
        <div className="pricing-card-name">コーポレートサイト</div>
        <div className="pricing-card-desc">会社サイト・サービスサイト・採用サイトなど10〜30ページ規模。</div>
        <div className="pricing-card-price"><span className="pricing-num">100</span><span className="pricing-unit">万円〜</span></div>
        <div className="pricing-note">納期目安: 2〜3ヶ月</div>
        <div className="pricing-divider"></div>
        <ul className="pricing-features">
          <li className="pricing-feature">UXリサーチ・IA設計</li>
          <li className="pricing-feature">デザインシステム構築</li>
          <li className="pricing-feature">CMS構築・管理画面</li>
          <li className="pricing-feature">SEO・パフォーマンス最適化</li>
          <li className="pricing-feature">多言語対応（オプション）</li>
        </ul>
      </div>
      <div className="pricing-card reveal d2">
        <div className="pricing-card-label">PLAN C</div>
        <div className="pricing-card-name">大規模サイト</div>
        <div className="pricing-card-desc">100ページ超・複数言語・複数CMS・外部システム連携が必要な大規模構築。</div>
        <div className="pricing-card-price"><span className="pricing-num">500</span><span className="pricing-unit">万円〜</span></div>
        <div className="pricing-note">納期目安: 4ヶ月〜</div>
        <div className="pricing-divider"></div>
        <ul className="pricing-features">
          <li className="pricing-feature">戦略立案・KPI設計</li>
          <li className="pricing-feature">大規模IA・UX設計</li>
          <li className="pricing-feature">Headless CMS構築</li>
          <li className="pricing-feature">多言語・多拠点対応</li>
          <li className="pricing-feature">長期運用保守体制</li>
        </ul>
      </div>
    </div>
    <p style={{marginTop: '20px', fontSize: '12px', color: 'var(--subtle)'}}>※ 上記はあくまで目安です。要件・規模によって変動します。</p>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="cases-head">
      <h2 className="h2 reveal">Webサイト制作の実績</h2>
      <a href="/cases" className="cases-more reveal">すべての実績を見る ↗</a>
    </div>
    <div className="cases-grid">
      <article className="case-card reveal">
        <div className="case-card-inner">
          <div className="case-thumb"><img src="https://picsum.photos/seed/web2025a/720/450" alt="製造業 コーポレートサイト事例" /></div>
          <div className="case-tags"><span className="tag tag-ind">製造</span><span className="tag tag-svc">コーポレートサイト</span></div>
          <h3 className="case-title">グローバル展開する製造業のコーポレートサイトを刷新。多言語対応とCMS構築で更新工数を70%削減</h3>
        </div>
      </article>
      <article className="case-card reveal d1">
        <div className="case-card-inner">
          <div className="case-thumb"><img src="https://picsum.photos/seed/web2025b/720/450" alt="人材 採用サイト事例" /></div>
          <div className="case-tags"><span className="tag tag-ind">人材・採用</span><span className="tag tag-svc">採用サイト</span></div>
          <h3 className="case-title">採用強化を目的としたリクルートサイトを新規制作。公開3ヶ月でエントリー数が2.3倍に増加</h3>
        </div>
      </article>
      <article className="case-card reveal d2">
        <div className="case-card-inner">
          <div className="case-thumb"><img src="https://picsum.photos/seed/web2025c/720/450" alt="教育 サービスサイト事例" /></div>
          <div className="case-tags"><span className="tag tag-ind">教育</span><span className="tag tag-svc">LP・サービスサイト</span></div>
          <h3 className="case-title">教育サービスのLP群を刷新。Core Web Vitalsスコア改善とCVR最適化で問い合わせ数が大幅向上</h3>
        </div>
      </article>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <h2 className="h2 reveal">選ばれる理由</h2>
    <div className="why-grid">
      <div className="why-item reveal d1"><div className="why-num">01</div><div className="why-item-title">戦略から運用まで、一気通貫</div><div className="why-item-body">要件定義・開発・運用保守を同一チームが担当。分断のない一貫した支援体制。</div></div>
      <div className="why-item reveal d2"><div className="why-num">02</div><div className="why-item-title">AI駆動開発による、スピードと品質の両立</div><div className="why-item-body">350件超の実績×AI活用知見で、確実に動くサイトを届けます。</div></div>
      <div className="why-item reveal d3"><div className="why-num">03</div><div className="why-item-title">国際水準の品質管理体制</div><div className="why-item-body">CMMI Level 3・ISO 27001・Pマーク取得。日本人PMが一貫して品質管理。</div></div>
      <div className="why-item reveal d4"><div className="why-num">04</div><div className="why-item-title">規模を問わない対応力</div><div className="why-item-body">LP30万円〜から大規模500万円〜まで、予算・規模を問わず対応。</div></div>
    </div>
  </div>
</section>

<section className="cta-band">
  <div className="wrap">
    <div className="cta-band-inner">
      <div>
        <h2 className="cta-head reveal">まずは<br />無料相談から</h2>
        <p className="cta-sub reveal d1">課題の整理だけでも歓迎します。現状をお聞きしてから、最適な進め方をご提案します。</p>
      </div>
      <div className="cta-actions reveal d2">
        <div className="cta-action-row"><div><div className="cta-action-title">無料相談を予約</div><div className="cta-action-desc">オンライン30分。課題ヒアリングと方向性のご提案。</div></div><a href="/consultation" className="btn btn-white">予約する <span className="btn-arrow" style={{color: 'var(--ink)'}}>↗</span></a></div>
        <div className="cta-action-row"><div><div className="cta-action-title">資料ダウンロード</div><div className="cta-action-desc">サービス概要・実績・料金目安をまとめた資料。</div></div><a href="/download" className="btn btn-outline-white">ダウンロード</a></div>
        <div className="cta-action-row"><div><div className="cta-action-title">お問い合わせ</div><div className="cta-action-desc">個別のご質問・お見積りのご相談はこちらから。</div></div><a href="/contact" className="btn btn-outline-white">お問い合わせ</a></div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
