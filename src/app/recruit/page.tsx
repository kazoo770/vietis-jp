import type { Metadata } from 'next';
import FaqInit from '@/components/FaqInit';

export const metadata: Metadata = {
  title: '採用情報｜VIETISジャパンで働く - 株式会社VIETISジャパン',
  description: 'VIETISジャパンの採用情報。AIエンジニア・Webエンジニア・PM・DXコンサルタントなど、AI/DX推進を担うポジションを募集しています。',
};

export default function Page() {
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
.page-hero{padding-top:72px;border-bottom:1px solid var(--border);position:relative;overflow:hidden}
.page-hero-inner{padding:clamp(80px,11vw,160px) 0 clamp(72px,10vw,140px);position:relative;z-index:2;max-width:40%}

/* HERO PHOTO MOSAIC */
.hero-photos{position:absolute;right:0;top:0;bottom:0;width:60%;pointer-events:none}
.photo-grid{position:absolute;inset:-30% 0 -30% 0;display:flex;gap:12px;transform:rotate(-12deg);transform-origin:center center}
.photo-col{flex-shrink:0}
.photo-strip{display:flex;flex-direction:column;gap:12px}
.photo-strip img{width:176px;height:235px;object-fit:cover;border-radius:6px;display:block}
.photo-strip--down{animation:recruit-down 32s linear infinite}
.photo-strip--up{animation:recruit-up 28s linear infinite}
.photo-col:nth-child(2) .photo-strip{animation-duration:38s;animation-delay:-10s}
.photo-col:nth-child(3) .photo-strip{animation-duration:30s;animation-delay:-18s}
.photo-col:nth-child(4) .photo-strip{animation-duration:36s;animation-delay:-5s}
.photo-col:nth-child(5) .photo-strip{animation-duration:34s;animation-delay:-24s}
@keyframes recruit-down{from{transform:translateY(-50%)}to{transform:translateY(0)}}
@keyframes recruit-up{from{transform:translateY(0)}to{transform:translateY(-50%)}}
@media(prefers-reduced-motion:reduce){.photo-strip{animation:none!important}}




.page-hero-h1{font-size:clamp(48px,6vw,70px);font-weight:700;letter-spacing:-0.04em;line-height:1.0;color:var(--ink);margin-bottom:20px}
.page-hero-sub{font-size:clamp(15px,1.5vw,18px);color:var(--muted);line-height:1.85;text-wrap:pretty;max-width:680px}

/* POSITIONS ACCORDION */
.positions-list{margin-top:40px;display:flex;flex-direction:column;gap:10px}
.position-item{border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:border-color 0.25s var(--ease),background 0.25s var(--ease)}
.position-item.open{background:var(--bg-off);border-color:rgba(43,73,231,0.25)}
.position-trigger{width:100%;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:22px 24px;background:none;border:none;cursor:pointer;text-align:left;transition:transform 0.1s var(--ease)}
.position-trigger:active{transform:scale(0.995)}
.position-title{font-size:clamp(16px,1.8vw,20px);font-weight:700;color:var(--ink);line-height:1.3;transition:color 0.18s}
.position-trigger:hover .position-title{color:var(--blue)}
.position-title-en{font-size:13px;font-weight:400;color:var(--subtle);margin-top:3px;font-family:var(--en)}
.position-meta{display:flex;align-items:center;gap:16px;flex-shrink:0}
.position-location{font-size:12px;color:var(--subtle);white-space:nowrap}
.position-chevron{width:20px;height:20px;flex-shrink:0;color:var(--subtle);transition:transform 0.35s cubic-bezier(0.23,1,0.32,1),color 0.22s}
.position-item.open .position-chevron{transform:rotate(180deg);color:var(--blue)}
.position-body-wrap{display:grid;grid-template-rows:0fr;transition:grid-template-rows 0.22s cubic-bezier(0.4,0,1,1)}
.position-item.open .position-body-wrap{grid-template-rows:1fr;transition:grid-template-rows 0.42s cubic-bezier(0.23,1,0.32,1)}
.position-body{overflow:hidden;min-height:0}
.position-body-inner{padding:0 24px 24px}
.position-grid{display:grid;grid-template-columns:1fr 1fr;gap:32px}
.position-body-inner>*{opacity:0;transform:translateY(6px);transition:opacity 0.1s var(--ease),transform 0.1s var(--ease)}
.position-item.open .position-body-inner>*{opacity:1;transform:none}
.position-section-title{font-size:11px;font-weight:700;letter-spacing:0.04em;color:var(--subtle);margin-bottom:12px}
.position-body-text{font-size:15px;color:var(--ink);line-height:1.85}
.position-skill-list{display:flex;flex-direction:column;gap:8px}
.position-skill-item{display:flex;align-items:flex-start;gap:8px;font-size:14px;color:var(--ink);line-height:1.6}
.position-skill-item::before{content:'';width:4px;height:4px;border-radius:50%;background:var(--blue);flex-shrink:0;margin-top:8px}
.position-apply{margin-top:20px;border-top:1px solid var(--border);padding-top:20px;display:flex;align-items:center;justify-content:space-between;gap:16px}
.position-apply-loc{font-size:13px;color:var(--muted)}
.position-apply-loc strong{color:var(--ink);font-weight:700}
@media(prefers-reduced-motion:reduce){.position-body-wrap,.position-chevron,.position-item,.position-title{transition:none!important}.position-body-inner>*{transition:none!important;opacity:1!important;transform:none!important}}

/* INQUIRY SECTION */
.inquiry-block{background:var(--bg-off);border:1px solid var(--border);border-radius:var(--r);padding:clamp(32px,4vw,56px);display:grid;grid-template-columns:1fr auto;gap:32px;align-items:center}
.inquiry-title{font-size:22px;font-weight:700;color:var(--ink);margin-bottom:8px}
.inquiry-desc{font-size:15px;color:var(--muted);line-height:1.75}
.inquiry-email{display:inline-flex;align-items:center;gap:6px;margin-top:12px;font-size:15px;font-weight:700;color:var(--blue)}

/* FAQ */
.faq-list{margin-top:48px;border-top:1px solid var(--border)}
.faq-item{border-bottom:1px solid var(--border)}
.faq-trigger{width:100%;display:flex;align-items:flex-start;gap:16px;padding:24px 0;background:none;border:none;cursor:pointer;text-align:left}
.faq-q-mark{font-family:var(--en);font-size:18px;font-weight:700;color:var(--blue);line-height:1.4;flex-shrink:0;width:20px}
.faq-question{font-size:16px;font-weight:700;color:var(--ink);line-height:1.6;flex:1}
.faq-chevron{width:18px;height:18px;flex-shrink:0;color:var(--subtle);transition:transform 0.25s var(--ease);margin-top:3px}
.faq-item.open .faq-chevron{transform:rotate(180deg)}
.faq-body{display:none;padding:0 0 24px 36px}
.faq-item.open .faq-body{display:block}
.faq-answer{font-size:15px;color:var(--ink);line-height:1.85}

/* CTA BAND */
.cta-band{background:var(--ink-dark);padding:clamp(72px,10vw,120px) 0}
.cta-band-inner{display:grid;grid-template-columns:1fr 1.2fr;gap:clamp(40px,6vw,80px);align-items:center}
.cta-head{font-size:clamp(2.4rem,5vw,4.2rem);font-weight:700;letter-spacing:-0.03em;line-height:1.05;color:#fff;text-wrap:balance;margin-bottom:16px}
.cta-sub{font-size:16px;color:rgba(255,255,255,0.55);line-height:1.75;max-width:38ch}
.cta-actions{display:flex;flex-direction:column}
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
  .position-grid{grid-template-columns:1fr}
  .inquiry-block{grid-template-columns:1fr}
}
@media(max-width:768px){
  .header-nav,.header-lang,.header-actions{display:none}
  .hamburger{display:flex}
  .header-inner{grid-template-columns:auto 1fr}
  .position-location{display:none}
  .cta-band-inner{grid-template-columns:1fr}
  .footer-top{grid-template-columns:1fr 1fr}
  .page-hero{display:flex;flex-direction:column}
  .page-hero .wrap{order:0}
  .hero-photos{position:relative;width:100%;height:280px;order:1}
  .photo-grid{inset:-20% 0 -20% 0;transform:rotate(-8deg)}
  .page-hero-inner{max-width:100%}
}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}

      `}</style>
<div className="page-hero">
  <div className="hero-photos" aria-hidden="true">
    <div className="photo-grid">
      {/* Col 0: 1,6,11 — down */}
      <div className="photo-col"><div className="photo-strip photo-strip--down">
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_1.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_6.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_11.jpg" alt="" loading="eager" />
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_1.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_6.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_11.jpg" alt="" loading="eager" />
      </div></div>
      {/* Col 1: 2,7,12 — up */}
      <div className="photo-col"><div className="photo-strip photo-strip--up">
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_2.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_7.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_12.jpg" alt="" loading="eager" />
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_2.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_7.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_12.jpg" alt="" loading="eager" />
      </div></div>
      {/* Col 2: 3,8,13 — down */}
      <div className="photo-col"><div className="photo-strip photo-strip--down">
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_3.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_8.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_13.jpg" alt="" loading="eager" />
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_3.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_8.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_13.jpg" alt="" loading="eager" />
      </div></div>
      {/* Col 3: 4,9,14 — up */}
      <div className="photo-col"><div className="photo-strip photo-strip--up">
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_4.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_9.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_14.jpg" alt="" loading="eager" />
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_4.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_9.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_14.jpg" alt="" loading="eager" />
      </div></div>
      {/* Col 4: 5,10,15 — down */}
      <div className="photo-col"><div className="photo-strip photo-strip--down">
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_5.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_10.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_15.jpg" alt="" loading="eager" />
        <img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_5.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_10.jpg" alt="" loading="eager" /><img src="https://vietis.co.jp/wp/wp-content/themes/vietis/images/picture_15.jpg" alt="" loading="eager" />
      </div></div>
    </div>
  </div>
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal"><a href="/">トップ</a><span className="breadcrumb-sep">/</span><span aria-current="page">採用</span></nav>
      <h1 className="page-hero-h1 reveal d1">採用</h1>
    </div>
  </div>
</div>

<section className="section">
  <div className="wrap">
    <p className="recruit-lead reveal" style={{fontSize:'clamp(16px,1.6vw,20px)',fontWeight:700,color:'var(--ink)',lineHeight:1.85,maxWidth:'52ch',marginBottom:'clamp(40px,5vw,64px)'}}>伴走型AI/DXエージェンシーとして、戦略立案から実装・運用まで一貫して支援しています。技術と事業の両方を理解しながら、クライアントと並走できる人材を求めています。スキルや経験の幅より、自分で考えて動ける意志を大切にしています。</p>
    <h2 className="h2 reveal">募集職種</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px', whiteSpace: 'nowrap'}}>東京・ベトナム・福岡・米国と国際的な環境で、ともに挑戦できる仲間を募集しています。</p>

    <div className="positions-list">

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">営業 / セールス</div>
              <div className="position-title-en">Sales</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">AI/DX関連サービスの新規開拓・既存顧客深耕を担当します。クライアントの課題をヒアリングし、最適なサービスを提案します。技術的な知識がなくても、入社後にキャッチアップできる環境を整えています。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">法人営業の実務経験（2年以上）</li>
                <li className="position-skill-item">IT / SaaS / コンサルティング業界の経験（あれば優遇）</li>
                <li className="position-skill-item">顧客折衝・提案資料作成の経験</li>
                <li className="position-skill-item">新規開拓への意欲</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">AIエンジニア</div>
              <div className="position-title-en">AI Engineer</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京 / ハノイ</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">生成AI・RAG・LLMを活用したシステムの設計・開発・実装を担当します。クライアントの業務課題を技術的に解決するPoC設計から本番実装まで一貫して携わります。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">Pythonを用いたバックエンド開発経験</li>
                <li className="position-skill-item">OpenAI / Azure OpenAI / Anthropic等のLLM APIの実装経験（あれば優遇）</li>
                <li className="position-skill-item">RAG・ベクトルDB・エンベディングの知識（あれば優遇）</li>
                <li className="position-skill-item">チームで開発を進めた経験</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京 / ベトナム（ハノイ）</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">Webエンジニア（フロントエンド）</div>
              <div className="position-title-en">Frontend Engineer</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京 / ハノイ</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">React / Next.jsを用いたWebシステム・業務アプリ・AIシステムのUI開発を担当します。デザインの意図を理解しながら、高品質なフロントエンドを実装します。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">Reactを用いた開発経験（1年以上）</li>
                <li className="position-skill-item">TypeScriptの実務経験（あれば優遇）</li>
                <li className="position-skill-item">Next.js / Tailwind CSSの経験（あれば優遇）</li>
                <li className="position-skill-item">デザインツール（Figma等）の読み取り経験</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京 / ベトナム（ハノイ）</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">Webエンジニア（バックエンド）</div>
              <div className="position-title-en">Backend Engineer</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京 / ハノイ</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">PHP / Python / Node.js等を用いたWebシステム・業務システムのバックエンド開発を担当します。API設計・DB設計から実装・テストまで幅広く携わります。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">PHP / Python / Node.jsのいずれかを用いた開発経験</li>
                <li className="position-skill-item">Laravel / Django / NestJS等のフレームワーク経験（あれば優遇）</li>
                <li className="position-skill-item">MySQL / PostgreSQL等のRDB設計・運用経験</li>
                <li className="position-skill-item">REST APIの設計・実装経験</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京 / ベトナム（ハノイ）</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">モバイルアプリエンジニア</div>
              <div className="position-title-en">Mobile App Engineer</div>
            </div>
          <div className="position-meta">
            <span className="position-location">ハノイ</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">Flutter / React Nativeを用いたiOS・Androidアプリの開発を担当します。クライアントの要件をもとに、設計・実装・テスト・ストアリリースまで一貫して対応します。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">Flutter または React Nativeを用いたアプリ開発経験</li>
                <li className="position-skill-item">iOS / Androidいずれかのネイティブ開発経験（あれば優遇）</li>
                <li className="position-skill-item">REST APIとの連携実装経験</li>
                <li className="position-skill-item">ストアリリース対応経験（あれば優遇）</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>ベトナム（ハノイ）</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">UIデザイナー</div>
              <div className="position-title-en">UI Designer</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京 / ハノイ</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">WebシステムやアプリのUI設計・デザインを担当します。クライアントのブランドや要件をもとに、使いやすく美しいインターフェースを設計します。エンジニアと密に連携しながら実装まで伴走します。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">Figmaを用いたUI設計・デザイン経験</li>
                <li className="position-skill-item">WebサイトやWebアプリのデザイン実務経験</li>
                <li className="position-skill-item">デザインシステムの構築・運用経験（あれば優遇）</li>
                <li className="position-skill-item">エンジニアとの協業経験</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京 / ベトナム（ハノイ）</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">PM / プロジェクトマネージャー</div>
              <div className="position-title-en">Project Manager</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京 / ハノイ</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">クライアントとの要件定義から、開発チームのマネジメント、進捗管理・品質管理まで一貫して担当します。AI・DX関連プロジェクトを中心に、エンジニアとクライアントの橋渡し役を担います。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">Webシステム・アプリ開発のPM経験（2年以上）</li>
                <li className="position-skill-item">要件定義・スケジュール管理・リスク管理の実務経験</li>
                <li className="position-skill-item">クライアントコミュニケーション経験</li>
                <li className="position-skill-item">英語または日本語でのビジネスコミュニケーション能力</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京 / ベトナム（ハノイ）</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>

      <div className="position-item reveal">
        <button className="position-trigger" aria-expanded="false">
          <div>
              <div className="position-title">DX / AIコンサルタント</div>
              <div className="position-title-en">DX / AI Consultant</div>
            </div>
          <div className="position-meta">
            <span className="position-location">東京</span>
            <svg className="position-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
          </div>
        </button>
        <div className="position-body-wrap"><div className="position-body"><div className="position-body-inner">
          <div className="position-grid">
            <div>
              <p className="position-section-title">仕事内容</p>
              <p className="position-body-text">クライアントのAI活用・DX推進を支援するコンサルタントです。現状ヒアリング・課題整理・ロードマップ策定から、実装フェーズの伴走まで一貫して担います。</p>
            </div>
            <div>
              <p className="position-section-title">求めるスキル</p>
              <ul className="position-skill-list">
                <li className="position-skill-item">ITコンサルティングまたは業務改善の実務経験</li>
                <li className="position-skill-item">AI・DXに関する基礎知識（あれば優遇）</li>
                <li className="position-skill-item">クライアントへの提案・プレゼンテーション経験</li>
                <li className="position-skill-item">論理的思考力と課題解決への意欲</li>
              </ul>
            </div>
          </div>
          <div className="position-apply">
            <p className="position-apply-loc">募集場所：<strong>東京</strong></p>
            <a href="mailto:recruit@vietis.co.jp" className="btn btn-dark" style={{fontSize: '13px', padding: '10px 20px'}}>応募・問い合わせ <span className="btn-arrow">↗</span></a>
          </div>
        </div></div></div>
      </div>


    </div>
  </div>
</section>


<section className="section">
  <div className="wrap">
    <h2 className="h2 reveal">よくある質問</h2>
    <div className="faq-list">

      <div className="faq-item reveal">
        <button className="faq-trigger" aria-expanded="false">
          <span className="faq-q-mark">Q</span>
          <span className="faq-question">日本語が話せなくても応募できますか？</span>
          <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div className="faq-body">
          <p className="faq-answer">東京オフィスのポジションは日本語でのビジネスコミュニケーションが必須です。ベトナムオフィスの求人は日本語不要のポジションがほとんどで、英語でのコミュニケーションが可能であれば問題ありません。</p>
        </div>
      </div>

      <div className="faq-item reveal">
        <button className="faq-trigger" aria-expanded="false">
          <span className="faq-q-mark">Q</span>
          <span className="faq-question">リモートワークは可能ですか？</span>
          <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div className="faq-body">
          <p className="faq-answer">ポジションによって異なります。東京オフィスのポジションは週数日のリモートワークに対応しています。詳細はお問い合わせください。</p>
        </div>
      </div>

      <div className="faq-item reveal">
        <button className="faq-trigger" aria-expanded="false">
          <span className="faq-q-mark">Q</span>
          <span className="faq-question">未経験でも応募できますか？</span>
          <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div className="faq-body">
          <p className="faq-answer">一部のポジションでは実務経験を必須としていますが、ポテンシャル採用を行うポジションもあります。まずはお問い合わせください。</p>
        </div>
      </div>

      <div className="faq-item reveal">
        <button className="faq-trigger" aria-expanded="false">
          <span className="faq-q-mark">Q</span>
          <span className="faq-question">選考フローはどのようなものですか？</span>
          <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 7.5l5 5 5-5"/></svg>
        </button>
        <div className="faq-body">
          <p className="faq-answer">書類選考 → オンライン面談（1〜2回）→ 内定、を基本としています。ポジションや状況によって変わる場合があります。</p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <h2 className="h2 reveal">採用に関するお問い合わせ</h2>
    <div style={{marginTop: '40px'}} className="reveal d1">
      <div className="inquiry-block">
        <div>
          <div className="inquiry-title">採用担当へ直接ご連絡ください</div>
          <p className="inquiry-desc">採用・求人に関するご質問は、下記のメールアドレスにお送りください。担当者より折り返しご連絡いたします。</p>
          <a href="mailto:recruit@vietis.co.jp" className="inquiry-email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            recruit@vietis.co.jp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
      <FaqInit />
    </>
  );
}
