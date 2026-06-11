import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogArticleInit from '@/components/BlogArticleInit';

export function generateStaticParams() {
  return [{ slug: '001' }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} - VIETISジャパン ブログ`,
    description: article.description,
  };
}

function getArticle(slug: string) {
  const articles: Record<string, { title: string; description: string }> = {
    '001': {
      title: '失敗しない「基幹システム刷新」の進め方。要件定義で現場のブラックボックス化を防ぐ3つのポイント',
      description: 'レガシー化した社内システムを刷新する際、要件定義の進め方を誤ると開発が長期化するリスクがあります。失敗しない基幹システム刷新のポイントを専門家が解説します。',
    },
  };
  return articles[slug] ?? null;
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <style>{`
:root {
  --blue:#2B49E7; --blue-pale:#EDF0FD; --red:#FF0033;
  --ink:#1A1C23; --ink-dark:#0F1117; --muted:#555B6E; --subtle:#8B92A5;
  --bg:#FFFFFF; --bg-off:#F7F8FC; --bg-mid:#F0F2F8; --border:#E4E7EF;
  --ja:'Noto Sans JP',sans-serif; --en:'Roboto',sans-serif;
  --ease:cubic-bezier(0.23,1,0.32,1);
  --gutter:clamp(20px,5vw,72px); --max:1440px; --r:8px; --r-btn:3px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--ja);color:var(--ink);background:var(--bg);line-height:1.75;overflow-x:hidden;-webkit-font-smoothing:antialiased}
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

/* ARTICLE HEADER */
.article-header{padding-top:72px}
.article-header .wrap{max-width:1080px}
.article-header-inner{padding:clamp(32px,4vw,56px) 0 clamp(24px,3vw,36px)}




.article-cat{display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;flex-wrap:wrap}
.article-cat-tag{font-family:var(--en);font-size:10px;font-weight:700;letter-spacing:0.06em;color:var(--blue);background:var(--blue-pale);padding:4px 10px;border-radius:2px}
.article-tag{font-size:11px;font-weight:700;color:var(--subtle);background:var(--bg-off);padding:3px 8px;border-radius:2px}
.article-h1{font-size:clamp(22px,3.5vw,40px);font-weight:700;letter-spacing:-0.02em;line-height:1.4;color:var(--ink);margin-bottom:20px;text-wrap:pretty}
.article-meta{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.article-meta-item{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--subtle)}
.article-meta-item svg{flex-shrink:0}
.article-author{display:flex;align-items:center;gap:10px;margin-top:20px;padding-top:20px;border-top:1px solid var(--border)}
.article-author-avatar{width:40px;height:40px;border-radius:50%;background:var(--bg-mid);overflow:hidden;flex-shrink:0}
.article-author-avatar img{width:100%;height:100%;object-fit:cover}
.article-author-name{font-size:13px;font-weight:700;color:var(--ink)}
.article-author-role{font-size:12px;color:var(--subtle)}

/* ARTICLE LAYOUT */
.article-layout{padding:clamp(24px,3vw,40px) 0 clamp(48px,6vw,80px)}
.article-layout .wrap{max-width:1080px}
.article-columns{display:grid;grid-template-columns:1fr 220px;gap:clamp(40px,5vw,64px);align-items:start}

/* TOC SIDEBAR */
.article-toc{position:sticky;top:96px}
.toc-title{font-size:11px;font-weight:700;letter-spacing:0.08em;color:var(--subtle);margin-bottom:12px;font-family:var(--en);text-transform:uppercase}
.toc-list{display:flex;flex-direction:column;gap:0}
.toc-item a{display:block;font-size:13px;color:var(--muted);padding:7px 0 7px 12px;border-left:2px solid var(--border);line-height:1.5;transition:color 0.15s,border-color 0.15s}
.toc-item a:hover,.toc-item a.active{color:var(--blue);border-left-color:var(--blue)}
.toc-item.toc-h3 a{padding-left:24px;font-size:12px}
.toc-cta{margin-top:24px;background:var(--bg-off);border-radius:var(--r);padding:20px;border:1px solid var(--border)}
.toc-cta-text{font-size:13px;color:var(--muted);line-height:1.7;margin-bottom:14px}
.toc-cta .btn{width:100%;justify-content:center;font-size:12px;padding:10px 16px}

/* ARTICLE BODY */
.article-body{min-width:0}
.article-hero{border-radius:var(--r);overflow:hidden;margin-bottom:clamp(32px,4vw,48px)}
.article-hero img{width:100%;height:auto;display:block}
.article-lead{font-size:clamp(16px,1.5vw,18px);color:var(--muted);line-height:2.05;margin-bottom:clamp(32px,4vw,48px)}
.article-content h2{font-size:clamp(20px,2.2vw,26px);font-weight:700;letter-spacing:-0.02em;line-height:1.4;color:var(--ink);margin:clamp(48px,6vw,72px) 0 20px;padding-bottom:14px;border-bottom:1px solid var(--ink)}
.article-content h2:first-child{margin-top:0}
.article-content h3{font-size:clamp(17px,1.7vw,21px);font-weight:700;color:var(--ink);margin:36px 0 14px;line-height:1.5}
.article-content p{font-size:17px;color:var(--ink);line-height:2.1;margin-bottom:24px}
.article-content p:last-child{margin-bottom:0}
.article-content strong{font-weight:700;color:var(--ink)}
.article-content ul{margin:20px 0 24px;display:flex;flex-direction:column;gap:14px}
.article-content ul li{font-size:17px;color:var(--ink);line-height:1.85;padding-left:18px;position:relative}
.article-content ul li::before{content:'';position:absolute;left:0;top:11px;width:5px;height:5px;border-radius:50%;background:var(--blue)}
.article-content ol{margin:20px 0 24px;display:flex;flex-direction:column;gap:14px;counter-reset:ol-counter;list-style:none}
.article-content ol li{font-size:17px;color:var(--ink);line-height:1.85;padding-left:28px;position:relative;counter-increment:ol-counter}
.article-content ol li::before{content:counter(ol-counter);position:absolute;left:0;top:1px;width:20px;height:20px;border-radius:50%;background:var(--blue);color:#fff;font-size:11px;font-weight:700;font-family:var(--en);display:flex;align-items:center;justify-content:center}

/* CALLOUT BOX */
.callout{background:var(--blue-pale);border-radius:var(--r);padding:20px 24px;margin:24px 0;display:flex;gap:12px;align-items:flex-start}
.callout-icon{width:20px;height:20px;flex-shrink:0;margin-top:2px}
.callout p{font-size:14px;color:var(--ink);line-height:1.8;margin:0}
.callout strong{color:var(--blue)}
.callout-warn{background:#FFF8EC}
.callout-warn strong{color:#D97706}

/* CASE LINK */
.case-link{display:flex;align-items:center;gap:12px;background:var(--bg-off);border:1px solid var(--border);border-radius:var(--r);padding:16px 20px;margin:24px 0;transition:border-color 0.15s}
.case-link:hover{border-color:var(--blue)}
.case-link-label{font-size:11px;font-weight:700;color:var(--blue);letter-spacing:0.06em;font-family:var(--en);margin-bottom:4px}
.case-link-title{font-size:14px;font-weight:700;color:var(--ink);line-height:1.5}
.case-link svg{flex-shrink:0;margin-left:auto;color:var(--subtle)}

/* SHARE */
.article-share{margin-top:clamp(40px,5vw,64px);padding-top:32px;border-top:1px solid var(--border)}
.article-share-label{font-size:12px;font-weight:700;color:var(--subtle);margin-bottom:12px;letter-spacing:0.04em}
.share-btns{display:flex;gap:8px;flex-wrap:wrap}
.share-btn{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:700;padding:9px 16px;border-radius:var(--r-btn);border:1.5px solid var(--border);color:var(--muted);background:none;cursor:pointer;transition:border-color 0.15s,color 0.15s}
.share-btn:hover{border-color:var(--ink);color:var(--ink)}

/* AUTHOR BOX */
.author-box{margin-top:40px;background:var(--bg-off);border-radius:var(--r);padding:clamp(20px,3vw,32px);display:flex;gap:20px;align-items:flex-start}
.author-box-avatar{width:64px;height:64px;border-radius:50%;overflow:hidden;flex-shrink:0;background:var(--bg-mid)}
.author-box-avatar img{width:100%;height:100%;object-fit:cover}
.author-box-name{font-size:15px;font-weight:700;color:var(--ink);margin-bottom:4px}
.author-box-role{font-size:12px;color:var(--blue);margin-bottom:8px}
.author-box-bio{font-size:13px;color:var(--muted);line-height:1.8}

/* PREV/NEXT */
.article-nav{margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:16px;border-top:1px solid var(--border);padding-top:32px}
.article-nav-item{display:flex;flex-direction:column;gap:6px;padding:16px;border:1.5px solid var(--border);border-radius:var(--r);transition:border-color 0.15s}
.article-nav-item:hover{border-color:var(--blue)}
.article-nav-dir{font-size:11px;font-weight:700;color:var(--subtle);display:flex;align-items:center;gap:4px;font-family:var(--en)}
.article-nav-title{font-size:13px;font-weight:700;color:var(--ink);line-height:1.5}
.article-nav-item.next{text-align:right}
.article-nav-item.next .article-nav-dir{justify-content:flex-end}

/* RELATED */
.related-section{padding:clamp(48px,6vw,80px) 0;border-top:1px solid var(--border)}
.related-title{font-size:clamp(18px,2.5vw,26px);font-weight:700;letter-spacing:-0.02em;margin-bottom:32px}
.related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(20px,2.5vw,32px)}
.related-card{display:flex;flex-direction:column}
.related-card:hover .related-card-img img{transform:scale(1.04)}
.related-card-img{aspect-ratio:16/9;border-radius:var(--r);overflow:hidden;background:var(--bg-mid);margin-bottom:12px}
.related-card-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s var(--ease)}
.related-card-meta{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.related-card-date{font-family:var(--en);font-size:12px;color:var(--subtle)}
.related-card-tag{font-family:var(--en);font-size:10px;font-weight:700;letter-spacing:0.06em;color:var(--blue);background:var(--blue-pale);padding:3px 8px;border-radius:2px}
.related-card-title{font-size:18px;font-weight:700;color:var(--ink);line-height:1.55;transition:color 0.15s}
.related-card:hover .related-card-title{color:var(--blue)}

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
  .article-columns{grid-template-columns:1fr}
  .article-toc{display:none}
  .cta-band-inner{grid-template-columns:1fr}
  .related-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .header-nav,.header-lang,.header-actions{display:none}
  .hamburger{display:flex}
  .header-inner{grid-template-columns:auto 1fr}
  .article-nav{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr 1fr}
  .author-box{flex-direction:column}
  .related-grid{grid-template-columns:1fr}
}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}
      `}</style>

<div className="article-header">
  <div className="wrap">
    <div className="article-header-inner">
      <nav className="breadcrumb reveal">
        <a href="/">トップ</a><span className="breadcrumb-sep">/</span>
        <a href="/blog">ブログ</a><span className="breadcrumb-sep">/</span>
        <a href="/blog?cat=dev">システム・アプリ開発</a><span className="breadcrumb-sep">/</span>
        <span aria-current="page">失敗しない「基幹システム刷新」の進め方</span>
      </nav>
      <div className="article-cat reveal d1">
        <span className="article-cat-tag">システム開発</span>
        <span className="article-tag">#要件定義</span>
        <span className="article-tag">#DX</span>
      </div>
      <h1 className="article-h1 reveal d1">失敗しない「基幹システム刷新」の進め方。<br/>要件定義で現場のブラックボックス化を防ぐ3つのポイント</h1>
      <div className="article-meta reveal d2">
        <span className="article-meta-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          投稿日：2026.06.09
        </span>
        <span className="article-meta-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          更新日：2026.06.09
        </span>
      </div>
    </div>
  </div>
</div>

<div className="article-layout">
  <div className="wrap">
    <div className="article-columns">

      
      <main className="article-body">
        <div className="article-hero">
          <img src="https://picsum.photos/seed/vietis-legacy-system-detail/1200/600" alt="基幹システム刷新のプロセスを示すイメージ"/>
        </div>

        <p className="article-lead">社内システムの老朽化やブラックボックス化に伴い、基幹システムの刷新を検討される企業が増えています。しかし、要件定義の進め方を誤ると、開発が長期化したり、現場で使われないシステムになってしまうリスクがあります。本記事では、失敗しない基幹システム刷新のポイントを、弊社の豊富な開発実績をベースに解説します。</p>

        <div className="article-content">

          <h2 id="section-1">1. なぜ基幹システムの刷新はブラックボックス化しやすいのか？</h2>
          <p>多くの企業で、基幹システムの内部構造が「誰も正確に把握していない」状態に陥っています。その背景には、長年にわたる継ぎ足し開発とドキュメントの形骸化があります。</p>
          <p>特に問題になるのは、システム設計時の意思決定が記録されていないことです。「なぜこの処理がここにあるのか」「この条件分岐はどのビジネスルールに対応しているのか」といった情報が、担当者の記憶にしか存在しない状態が続きます。</p>

          <div className="callout">
            <svg className="callout-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#2B49E7"/><path d="M6 10.5L8.5 13L14 7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <p><strong>ポイント：</strong>ブラックボックス化の最大のリスクは、刷新プロジェクト開始後に「知らなかった業務ロジック」が次々と発見されることです。これが工数増大と納期遅延の最大の原因になります。</p>
          </div>

          <h3 id="section-1-1">1-1. 当時の担当者の退職とドキュメントの形骸化</h3>
          <p>システム構築当初の担当者が退職・異動するにつれ、設計の意図や業務ルールが伝承されなくなります。残された仕様書も、実際の動作と乖離していることが多く、「ドキュメントより動いているコードが正」という状況が常態化します。</p>
          <p>VIETISでは、このような案件では<strong>稼働中システムのリバースエンジニアリング</strong>を最初のフェーズに組み込むことで、現状把握の精度を高めるアプローチを採用しています。</p>

          <h2 id="section-2">2. 現場を巻き込む要件定義の3つのポイント</h2>
          <p>ブラックボックス化を防ぐ要件定義には、現場担当者を主役にした進め方が不可欠です。以下の3つのポイントが特に効果的です。</p>

          <ul>
            <li><strong>ポイント1：現場スタッフへの徹底的なヒアリング</strong> — 実際にシステムを操作している担当者から、日常業務のフローと例外処理を丹念に聞き出します。業務部門ごとに1〜2時間のワークショップを実施し、「こんな場合はどうしていますか」という問いを繰り返します。</li>
            <li><strong>ポイント2：プロトタイプの早期提示</strong> — 言葉での要件共有には限界があります。画面モックやクリッカブルプロトタイプを早期に作成し、実際に操作してもらうことで、認識のズレを早期に発見します。</li>
            <li><strong>ポイント3：業務フロー図の共同作成</strong> — 担当者と一緒に業務フロー図を描き起こします。書きながら「この処理は誰がやる？」「例外ケースはある？」と確認することで、暗黙知を可視化できます。</li>
          </ul>

          <div className="callout callout-warn">
            <svg className="callout-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#F59E0B"/><path d="M10 6V11" stroke="white" strokeWidth="1.8" strokeLinecap="round"/><circle cx="10" cy="13.5" r="1" fill="white"/></svg>
            <p><strong>注意点：</strong>要件定義のヒアリング相手は、管理職だけでは不十分です。実務担当者が知っている「現場のルール」こそが、システムに組み込まれるべき重要な要件になります。</p>
          </div>

          <h2 id="section-3">3. VIETISが実践するレガシーシステム刷新の成功事例</h2>
          <p>物流業界のお客様では、20年以上稼働し続けたオーダーメイドの在庫管理システムの刷新を手がけました。当初、社内でも全仕様を把握している担当者がいない状態でしたが、以下のアプローチで6ヶ月での本番稼働を実現しました。</p>

          <ol>
            <li>既存システムの全画面・全帳票のキャプチャと業務フロー図の作成（2週間）</li>
            <li>現場担当者5名との週次ヒアリングセッション（6週間）</li>
            <li>画面プロトタイプを使ったウォークスルー確認（4週間）</li>
            <li>段階的リリースによる業務継続性の確保</li>
          </ol>

          <p>この結果、月次の締め作業時間を従来の12時間から3時間へと短縮しました。</p>

          <a href="/cases//" className="case-link">
            <div>
              <div className="case-link-label">CASE STUDY</div>
              <div className="case-link-title">コア業務システムの全面刷新・Webシステム化実績を見る</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          <h2 id="section-4">4. まとめ：システム刷新は「現状分析」からスタート</h2>
          <p>基幹システムの刷新プロジェクトで最も重要なのは、新しい技術の選定よりも<strong>現状の正確な把握</strong>です。ブラックボックス化した既存システムを丁寧に解析し、現場の暗黙知を要件として言語化することが、プロジェクト成功の土台になります。</p>
          <p>VIETISでは、要件定義から開発・運用保守まで一貫して対応することで、途中フェーズでの認識ズレを最小化しています。「自社のシステムも刷新が必要かどうか相談したい」という段階からでも、お気軽にご連絡ください。</p>

        </div>

        
        <div className="article-share">
          <div className="article-share-label">この記事をシェア</div>
          <div className="share-btns" id="share-btns">
            <a className="share-btn" id="share-x" href="#" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X でシェア
            </a>
            <a className="share-btn" id="share-fb" href="#" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a className="share-btn" id="share-hb" href="#" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h10v-8h-3v-3h3V9.5C13 7 14.5 5.5 17 5.5c1.2 0 2.5.2 2.5.2V8h-1.5c-1.4 0-1.7.7-1.7 1.6V12h3l-.4 3H16v8h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/></svg>
              はてなブックマーク
            </a>
          </div>
        </div>

        
        <div className="author-box">
          <div className="author-box-avatar">
            <img src="https://picsum.photos/seed/vietis-author-tanaka/128/128" alt="田中 健一"/>
          </div>
          <div>
            <div className="author-box-name">VIETISジャパン 開発コンサルタントチーム</div>
            <div className="author-box-role">監修：シニアPM 田中 健一</div>
            <p className="author-box-bio">日本国内の大規模基幹システム刷新やAI導入プロジェクトを多数手がける。製造・物流・金融領域での豊富な実績を持ち、要件定義フェーズの支援に強みを持つ。</p>
          </div>
        </div>

        
        <nav className="article-nav" aria-label="前後の記事">
          <a href="/blog/012/" className="article-nav-item prev">
            <span className="article-nav-dir">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              前の記事
            </span>
            <span className="article-nav-title">AWSからGCPへの移行を6ヶ月で完了させた手順</span>
          </a>
          <a href="/blog/002/" className="article-nav-item next">
            <span className="article-nav-dir">
              次の記事
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <span className="article-nav-title">社内ナレッジにRAGを導入した実例。精度を上げるチャンキング設計と評価の方法</span>
          </a>
        </nav>
      </main>

      
      <aside className="article-toc" aria-label="目次">
        <div className="toc-title">目次</div>
        <nav className="toc-list">
          <div className="toc-item toc-h2"><a href="#section-1">1. なぜ基幹システムの刷新はブラックボックス化しやすいのか？</a></div>
          <div className="toc-item toc-h3"><a href="#section-1-1">1-1. 担当者の退職とドキュメントの形骸化</a></div>
          <div className="toc-item toc-h2"><a href="#section-2">2. 現場を巻き込む要件定義の3つのポイント</a></div>
          <div className="toc-item toc-h2"><a href="#section-3">3. VIETISが実践する成功事例</a></div>
          <div className="toc-item toc-h2"><a href="#section-4">4. まとめ</a></div>
        </nav>

      </aside>

    </div>
  </div>
</div>


<section className="related-section">
  <div className="wrap">
    <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "28px"}}>
      <h2 className="related-title reveal" style={{marginBottom: "0"}}>この記事を読んだ方におすすめ</h2>
      <a href="/blog" className="reveal" style={{fontSize: "14px", fontWeight: "700", color: "var(--muted)", borderBottom: "1px solid var(--border)", paddingBottom: "2px", whiteSpace: "nowrap", transition: "color 0.15s,border-color 0.15s"}}>ブログ一覧を見る →</a>
    </div>
    <div className="related-grid">
      <article className="related-card reveal d1">
        <a href="/blog/010/" className="related-card-img">
          <img src="https://picsum.photos/seed/vietis-requirements/600/338" alt="要件定義の前に整理すべき課題の輪郭" loading="lazy"/>
        </a>
        <div className="related-card-meta">
          <span className="related-card-date">2026.02.06</span>
          <span className="related-card-tag">DX・業務改善</span>
        </div>
        <a href="/blog/010/" className="related-card-title">システム発注で失敗する企業の共通点。要件定義の前に整理すべき「課題の輪郭」</a>
      </article>
      <article className="related-card reveal d2">
        <a href="/blog/008/" className="related-card-img">
          <img src="https://picsum.photos/seed/vietis-api-design/600/338" alt="長期保守を見越したAPI設計" loading="lazy"/>
        </a>
        <div className="related-card-meta">
          <span className="related-card-date">2026.03.07</span>
          <span className="related-card-tag">システム開発</span>
        </div>
        <a href="/blog/008/" className="related-card-title">長期保守を見越したREST API設計の原則。バージョニングとエラーハンドリングの実践</a>
      </article>
      <article className="related-card reveal d3">
        <a href="/blog/006/" className="related-card-img">
          <img src="https://picsum.photos/seed/vietis-process-automation/600/338" alt="業務プロセス自動化" loading="lazy"/>
        </a>
        <div className="related-card-meta">
          <span className="related-card-date">2026.04.04</span>
          <span className="related-card-tag">DX・業務改善</span>
        </div>
        <a href="/blog/006/" className="related-card-title">中堅製造業のデータ入力業務を月40時間削減した自動化プロジェクトの全工程</a>
      </article>
    </div>
  </div>
</section>

<section className="cta-band" aria-labelledby="cta-h">
  <div className="wrap">
    <div className="cta-band-inner">
      <div>
        <h2 className="cta-head reveal" id="cta-h">AI/DXに関する<br/>ご相談はお気軽に</h2>
        <p className="cta-sub reveal d1">課題の整理だけでも歓迎します。現状をお聞きしてから、最適な進め方をご提案します。</p>
      </div>
      <div className="cta-right reveal d2">
        <div className="cta-actions">
          <div className="cta-action-row">
            <div>
              <div className="cta-action-title">無料相談を予約</div>
              <div className="cta-action-desc">オンライン30分。課題ヒアリングと方向性のご提案。</div>
            </div>
            <a href="/consultation" className="btn btn-white">予約する <span className="btn-arrow" style={{color: "var(--ink)"}}>↗</span></a>
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
      <BlogArticleInit />
    </>
  );
}
