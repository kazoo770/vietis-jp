import type { Metadata } from 'next';
import CasesFilterInit from '@/components/CasesFilterInit';

export const metadata: Metadata = {
  title: '実績 - 株式会社VIETISジャパン',
  description: 'VIETISジャパンの導入実績・開発事例。AI、Webシステム、アプリ開発など350件以上の実績から業界・カテゴリで絞り込んでご覧いただけます。',
};

export default function Page() {
  return (
    <>
      <style>{`

:root {
  --blue:#2B49E7; --blue-pale:#EDF0FD; --red:#FF0033;
  --ink:#1A1C23; --ink-dark:#0F1117; --muted:#555B6E; --subtle:#8B92A5;
  --bg:#FFFFFF; --bg-off:#F7F8FC; --bg-mid:#F0F2F8; --bg-page:#F2F4F8; --border:#E4E7EF;
  --ja:'Noto Sans JP',sans-serif; --en:'Roboto',sans-serif;
  --ease:cubic-bezier(0.23,1,0.32,1);
  --gutter:clamp(20px,5vw,72px); --max:1440px; --r:8px; --r-btn:3px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--ja);color:var(--ink);background:var(--bg-page);line-height:1.75;overflow-x:hidden;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
ul{list-style:none}
.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--ja);font-size:14px;font-weight:700;padding:14px 28px;border-radius:var(--r-btn);border:1.5px solid transparent;cursor:pointer;white-space:nowrap;line-height:1;transition:background 0.15s,border-color 0.15s,color 0.15s,transform 0.1s var(--ease)}
.btn:active{transform:scale(0.97)}
.btn-arrow{font-size:16px;font-family:var(--en);font-weight:400;line-height:1;transition:transform 0.2s var(--ease)}
.btn:hover .btn-arrow{transform:translate(1px,-1px)}
.btn-dark{background:var(--ink-dark);color:#fff;border-color:var(--ink-dark)}
.btn-dark:hover{background:#000}
.btn-outline{background:transparent;color:var(--ink);border-color:var(--border)}
.btn-outline:hover{border-color:var(--ink)}
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
.header-nav a.active{color:var(--blue)}
.header-right{display:flex;align-items:center;gap:12px;justify-content:flex-end}
.header-actions{display:flex;align-items:center;gap:8px}
.header-actions .btn{padding:9px 20px;font-size:13px}
.header-lang{display:flex;align-items:center;gap:5px;font-family:var(--en);font-size:11px;font-weight:700;color:var(--subtle)}
.header-lang a{color:var(--subtle);transition:color 0.15s}
.header-lang a:hover,.header-lang a.active{color:var(--ink)}
.header-lang span{color:var(--border)}
.hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;padding:6px;background:none;border:none;cursor:pointer;margin-left:auto;flex-shrink:0}
.hamburger span{display:block;width:20px;height:1.5px;background:var(--ink);border-radius:2px;transition:transform 0.25s var(--ease),opacity 0.2s;transform-origin:center}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.mobile-nav{display:none;position:fixed;inset:72px 0 0;background:#fff;z-index:99;overflow-y:auto;padding:24px var(--gutter) 48px;flex-direction:column;transform:translateY(-8px);opacity:0;transition:opacity 0.25s var(--ease),transform 0.25s var(--ease)}
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
.page-hero{padding-top:72px;background:var(--bg)}
.page-hero-inner{padding:clamp(40px,6vw,72px) 0 clamp(24px,3vw,36px)}
.breadcrumb{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--subtle);margin-bottom:24px;flex-wrap:wrap}
.breadcrumb a{color:var(--subtle);transition:color 0.15s}
.breadcrumb a:hover{color:var(--ink)}
.breadcrumb-sep{color:var(--border)}
.page-hero-h1{font-size:clamp(48px,6vw,70px);font-weight:700;letter-spacing:-0.03em;line-height:1.1;color:var(--ink);margin-bottom:20px;text-wrap:balance}
.page-hero-sub{font-size:clamp(15px,1.5vw,18px);color:var(--muted);line-height:1.8;max-width:52ch;margin-bottom:32px}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}

/* FILTER */
.filter-bar{background:var(--bg);border-bottom:1px solid var(--border);position:sticky;top:72px;z-index:50}
.filter-inner{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}
.filter-row{display:flex;align-items:center;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 0;-webkit-overflow-scrolling:touch;touch-action:pan-x}
.filter-row:first-child{border-bottom:none}
.filter-row::-webkit-scrollbar{display:none}
.filter-label{font-size:11px;font-weight:700;color:var(--subtle);letter-spacing:0.04em;white-space:nowrap;flex-shrink:0;font-family:var(--ja);min-width:54px;text-align:justify;text-align-last:justify;border-right:1px solid var(--border);padding-right:14px;margin-right:4px}
.filter-btn{font-size:12px;font-weight:700;color:var(--muted);padding:5px 13px;border-radius:20px;border:1.5px solid var(--border);background:none;white-space:nowrap;cursor:pointer;transition:color 0.15s,background 0.15s,border-color 0.15s;font-family:var(--ja);flex-shrink:0;line-height:1.5}
.filter-btn.active{color:var(--blue);background:var(--blue-pale);border-color:var(--blue)}
.filter-btn:hover:not(.active){color:var(--ink);border-color:var(--ink)}

/* CASES MAIN */
.cases-main{padding:clamp(40px,5vw,64px) 0 clamp(64px,8vw,96px)}
.cases-count{font-size:13px;color:var(--subtle);margin-bottom:28px}
.cases-count strong{color:var(--ink);font-weight:700}
.cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(24px,3vw,40px)}

/* CASE CARD */
.case-card{background:var(--bg);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column;transition:box-shadow 0.2s var(--ease),transform 0.2s var(--ease)}
@media(hover:hover) and (pointer:fine){
  .case-card:hover{box-shadow:0 4px 24px rgba(0,0,0,0.07);transform:translateY(-2px);outline:2px solid var(--blue)}
  .case-card:hover .case-thumb img{transform:scale(1.04)}
}
.case-thumb{aspect-ratio:16/10;overflow:hidden;background:var(--bg-mid);flex-shrink:0}
.case-thumb img{width:100%;height:100%;object-fit:cover;transition:transform 480ms var(--ease)}
.case-body{padding:clamp(16px,2vw,24px);display:flex;flex-direction:column;flex:1}
.case-tags{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px}
.tag{font-size:10px;font-weight:700;padding:3px 9px;border-radius:2px;letter-spacing:0.03em;white-space:nowrap}
.tag-ind{background:var(--bg-off);color:var(--muted)}
.tag-svc{color:var(--blue);background:var(--blue-pale)}
.tag-feat{background:var(--bg-mid);color:var(--subtle)}
.case-title{font-size:clamp(14px,1.5vw,18px);font-weight:700;letter-spacing:-0.01em;line-height:1.55;color:var(--ink);margin-bottom:auto;padding-bottom:16px;text-wrap:pretty;transition:color 0.15s}
.case-card:hover .case-title{color:var(--blue)}
.case-result{border-top:1px solid var(--border);padding-top:14px;display:flex;align-items:baseline;gap:6px}
.case-result-num{font-family:var(--en);font-size:clamp(1.3rem,1.8vw,1.6rem);font-weight:700;letter-spacing:-0.03em;color:var(--blue);line-height:1}
.case-result-label{font-size:11px;color:var(--muted);line-height:1.4}

/* NO RESULTS */
.no-results{display:none;grid-column:1/-1;text-align:center;padding:80px 0;color:var(--subtle);font-size:15px}
.no-results.show{display:block}

/* CTA BAND */
.cta-band{background:var(--ink-dark);padding:clamp(72px,10vw,120px) 0;border-top:none}
.cta-band-inner{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px);align-items:center}
.cta-head{font-size:clamp(2rem,3.5vw,3.2rem);font-weight:700;letter-spacing:-0.03em;line-height:1.3;color:#fff;text-wrap:balance;margin-bottom:4px}
.cta-sub{font-size:clamp(15px,1.4vw,16px);color:rgba(255,255,255,0.48);margin-top:18px;line-height:1.8;max-width:42ch}
.cta-actions{display:flex;flex-direction:column;gap:0}
.cta-action-row{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:clamp(20px,3vw,28px) 0;border-bottom:1px solid rgba(255,255,255,0.08)}
.cta-action-row:first-child{border-top:1px solid rgba(255,255,255,0.08)}
.cta-action-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:4px}
.cta-action-desc{font-size:14px;color:rgba(255,255,255,0.38);line-height:1.6}
.cta-action-row .btn{flex-shrink:0;font-size:13px;padding:10px 20px}
.btn-white{background:#fff;color:var(--ink-dark);border-color:#fff}
.btn-white:hover{background:#f0f0f0}
.btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,0.35)}
.btn-outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.08)}

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
  .cases-grid{grid-template-columns:repeat(2,1fr)}
  .cta-band-inner{grid-template-columns:1fr}
}
@media(max-width:768px){
  .header-nav,.header-lang,.header-actions{display:none}
  .hamburger{display:flex}
  .header-inner{grid-template-columns:auto 1fr}
  .cases-grid{grid-template-columns:repeat(2,1fr);gap:12px}
  .footer-top{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){
  .cases-grid{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr}
}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal">
        <a href="/">トップ</a><span className="breadcrumb-sep">/</span>
        <span aria-current="page">実績</span>
      </nav>
      <h1 className="page-hero-h1 reveal d1">実績</h1>
    </div>
  </div>
</div>


<div className="filter-bar" id="filter-bar">
  <div className="filter-inner">
    <div className="filter-row" role="group" aria-label="開発カテゴリで絞り込む">
      <span className="filter-label">開発種別</span>
      <button className="filter-btn active" data-filter="cat" data-value="all">すべて</button>
      <button className="filter-btn" data-filter="cat" data-value="web">Webシステム</button>
      <button className="filter-btn" data-filter="cat" data-value="ai">AI</button>
      <button className="filter-btn" data-filter="cat" data-value="app">アプリ</button>
      <button className="filter-btn" data-filter="cat" data-value="line">LINEアプリ</button>
      <button className="filter-btn" data-filter="cat" data-value="cms">CMS</button>
    </div>
    <div className="filter-row" role="group" aria-label="分野で絞り込む">
      <span className="filter-label">業種分野</span>
      <button className="filter-btn active" data-filter="ind" data-value="all">すべて</button>
      <button className="filter-btn" data-filter="ind" data-value="dx">業務改善・DX</button>
      <button className="filter-btn" data-filter="ind" data-value="edu">教育</button>
      <button className="filter-btn" data-filter="ind" data-value="fin">金融・決済</button>
      <button className="filter-btn" data-filter="ind" data-value="retail">小売・店舗</button>
    </div>
  </div>
</div>


<section className="cases-main">
  <div className="wrap">
    <p className="cases-count reveal"><strong id="count">17</strong>件の実績</p>
    <div className="cases-grid" id="cases-grid">

      
      <article className="case-card reveal" data-cat="web" data-ind="dx">
        <a href="/cases/example-01/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-keyspider/720/450" alt="クラウドID管理 Keyspider導入事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">データ連携・API</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-01/">クラウドID管理「Keyspider」導入によるアカウント管理の自動化</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d1" data-cat="ai" data-ind="dx">
        <a href="/cases/example-02/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-menraku/720/450" alt="AI採用支援システム Menraku導入事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">AI</span>
            <span className="tag tag-feat">チャットボット・RAG</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-02/">採用プロセスを24時間自動化するAI採用支援システム「Menraku」の導入</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d2" data-cat="web" data-ind="dx">
        <a href="/cases/example-03/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-legacy/720/450" alt="コア業務システム刷新事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">データ連携・API</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-03/">老朽化した社内コア業務システムの全面刷新・Webシステム化</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal" data-cat="cms" data-ind="edu">
        <a href="/cases/example-04/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-eduweb/720/450" alt="大手教育サービス企業 コーポレートサイト構築事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">CMS</span>
            <span className="tag tag-feat">長期継続・安定稼働</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-04/">大手教育サービス企業・コーポレートサイトの構築・運用保守</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d1" data-cat="cms" data-ind="edu">
        <a href="/cases/example-05/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-teacher/720/450" alt="教師向け総合情報プラットフォーム機能拡張事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">CMS</span>
            <span className="tag tag-feat">データ連携・API</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-05/">教育現場のDXを支える教師向け総合情報プラットフォームの機能拡張</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d2" data-cat="web" data-ind="edu">
        <a href="/cases/example-06/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-manavision/720/450" alt="マナビジョン システム運用保守事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">長期継続・安定稼働</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-06/">日本最大級の高校生向け進路選択サイト「マナビジョン」システム運用保守</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal" data-cat="app" data-ind="retail">
        <a href="/cases/example-07/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-ebike/720/450" alt="電動バイクレンタルアプリ開発事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">小売・店舗</span>
            <span className="tag tag-svc">アプリ</span>
            <span className="tag tag-feat">IoT・BLE</span>
            <span className="tag tag-feat">短期間開発</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-07/">予約から自動解錠まで完結する電動バイクレンタルアプリの開発</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d1" data-cat="web" data-ind="edu">
        <a href="/cases/example-08/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-ittraining/720/450" alt="IT研修企業 基幹システム開発保守事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">長期継続・安定稼働</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-08/">国内最大級のIT・ビジネス研修企業における基幹システムの開発・保守</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d2" data-cat="web" data-ind="edu">
        <a href="/cases/example-09/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-elearning/720/450" alt="eラーニング オフライン機能実装事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">短期間開発</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-09/">eラーニング統合プラットフォームへの「オフライン学習機能」短期間実装</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal" data-cat="web" data-ind="dx">
        <a href="/cases/example-10/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-hreval/720/450" alt="人事評価システム構築事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">データ連携・API</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-10/">プロジェクト稼働データと自動連携する人事評価システムの構築</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d1" data-cat="web" data-ind="dx">
        <a href="/cases/example-11/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-docmgmt/720/450" alt="帳票作成・管理システム開発事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">短期間開発</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-11/">複雑な承認プロセスに対応した帳票作成・管理システムの開発</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d2" data-cat="web" data-ind="dx">
        <a href="/cases/example-12/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-expense/720/450" alt="出張・精算管理システム機能拡張事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">Webシステム / アプリ</span>
            <span className="tag tag-feat">OCR・データ連携</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-12/">領収書OCR搭載・グローバル対応の出張・精算管理システム機能拡張</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal" data-cat="line" data-ind="retail">
        <a href="/cases/example-13/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-lineapp/720/450" alt="サービスステーション向けLINEアプリ開発事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">小売・店舗</span>
            <span className="tag tag-svc">LINEアプリ</span>
            <span className="tag tag-feat">OCR・ポイント管理</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-13/">車検・洗車予約から店舗管理まで統合するサービスステーション向けLINEアプリ</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d1" data-cat="web" data-ind="retail">
        <a href="/cases/example-14/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-realestate/720/450" alt="不動産管理DXシステム構築事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">小売・店舗</span>
            <span className="tag tag-svc">Webシステム</span>
            <span className="tag tag-feat">短期間開発</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-14/">物件の稼働・財務状況を一目で把握する不動産管理DXシステムの構築</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d2" data-cat="app" data-ind="fin">
        <a href="/cases/example-15/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-fintech/720/450" alt="電子マネーアプリ QUICPay決済機能追加事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">金融・決済</span>
            <span className="tag tag-svc">アプリ</span>
            <span className="tag tag-feat">短期間開発</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-15/">大手金融機関・電子マネーアプリへのQUICPay決済機能の追加カスタマイズ</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal" data-cat="ai" data-ind="dx">
        <a href="/cases/example-16/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-carerai/720/450" alt="就活生向け年収査定AIチャットボット開発事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">AI</span>
            <span className="tag tag-feat">チャットボット・RAG</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-16/">生成AIを活用した就活生向け年収査定AIチャットボットの開発</a></h2>
        </div>
      </article>

      
      <article className="case-card reveal d1" data-cat="ai" data-ind="dx">
        <a href="/cases/example-17/" className="case-thumb">
          <img src="https://picsum.photos/seed/vietis-case-govai/720/450" alt="自治体向けAI総合案内チャットボット開発事例" loading="lazy" />
        </a>
        <div className="case-body">
          <div className="case-tags">
            <span className="tag tag-ind">業務改善・DX</span>
            <span className="tag tag-svc">AI</span>
            <span className="tag tag-feat">チャットボット・RAG</span>
          </div>
          <h2 className="case-title"><a href="/cases/example-17/">大手IT企業と連携した自治体向けAIスタッフ総合案内チャットボットの開発・運用</a></h2>
        </div>
      </article>

      <p className="no-results" id="no-results">該当する実績がありません。別の条件でお試しください。</p>

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
      <div className="cta-right reveal d2">
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
      <CasesFilterInit />
    </>
  );
}
