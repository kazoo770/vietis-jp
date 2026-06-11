import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生成AIを活用した就活生向け年収査定AIチャットボットの開発 - VIETISジャパン',
  description: '職種・スキル・経験を入力するとGemini×RAGが市場データを参照しリアルタイムで年収査定するAIチャットボットの実績詳細。',
};

export default function Page() {
  return (
    <>
      <style>{`

:root{--blue:#2B49E7;--blue-pale:#EDF0FD;--red:#FF0033;--ink:#1A1C23;--ink-dark:#0F1117;--muted:#555B6E;--subtle:#8B92A5;--bg:#FFFFFF;--bg-off:#F7F8FC;--bg-mid:#F0F2F8;--bg-page:#F2F4F8;--border:#E4E7EF;--ja:'Noto Sans JP',sans-serif;--en:'Roboto',sans-serif;--ease:cubic-bezier(0.23,1,0.32,1);--gutter:clamp(20px,5vw,72px);--max:1440px;--r:8px;--r-btn:3px}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--ja);color:var(--ink);background:var(--bg);line-height:1.75;overflow-x:hidden;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}a{color:inherit;text-decoration:none}ul{list-style:none}
.wrap{max-width:var(--max);margin:0 auto;padding:0 var(--gutter)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:var(--ja);font-size:14px;font-weight:700;padding:14px 28px;border-radius:var(--r-btn);border:1.5px solid transparent;cursor:pointer;white-space:nowrap;line-height:1;transition:background 0.15s,border-color 0.15s,color 0.15s,transform 0.1s var(--ease)}
.btn:active{transform:scale(0.97)}.btn-arrow{font-size:16px;font-family:var(--en);font-weight:400;line-height:1;transition:transform 0.2s var(--ease)}.btn:hover .btn-arrow{transform:translate(1px,-1px)}
.btn-dark{background:var(--ink-dark);color:#fff;border-color:var(--ink-dark)}.btn-dark:hover{background:#000}
.btn-outline{background:transparent;color:var(--ink);border-color:var(--border)}.btn-outline:hover{border-color:var(--ink)}
html.js-ready .reveal{opacity:0;transform:translateY(16px);transition:opacity 0.6s var(--ease),transform 0.6s var(--ease)}
html.js-ready .reveal.in{opacity:1;transform:none}
html.js-ready .reveal.d1{transition-delay:0.07s}html.js-ready .reveal.d2{transition-delay:0.14s}
@media(prefers-reduced-motion:reduce){html.js-ready .reveal{transition:none!important}}
.header{position:fixed;top:0;left:0;right:0;z-index:100;background:#fff;border-bottom:1px solid transparent;transition:border-color 0.2s}.header.scrolled{border-bottom-color:var(--border)}
.header-inner{max-width:var(--max);margin:0 auto;padding:0 var(--gutter);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;height:72px}
.header-logo svg{height:24px;width:auto}
.header-nav{display:flex;align-items:center;gap:28px}.header-nav a{font-size:14px;font-weight:600;color:var(--ink);transition:opacity 0.15s;white-space:nowrap}.header-nav a:hover{opacity:0.55}.header-nav a.active{color:var(--blue)}
.header-right{display:flex;align-items:center;gap:12px;justify-content:flex-end}
.header-actions{display:flex;align-items:center;gap:8px}.header-actions .btn{padding:9px 20px;font-size:13px}
.header-lang{display:flex;align-items:center;gap:5px;font-family:var(--en);font-size:11px;font-weight:700;color:var(--subtle)}.header-lang a{color:var(--subtle);transition:color 0.15s}.header-lang a:hover,.header-lang a.active{color:var(--ink)}.header-lang span{color:var(--border)}
.hamburger{display:none;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;padding:6px;background:none;border:none;cursor:pointer;margin-left:auto;flex-shrink:0}
.hamburger span{display:block;width:20px;height:1.5px;background:var(--ink);border-radius:2px;transition:transform 0.25s var(--ease),opacity 0.2s;transform-origin:center}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}.hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.mobile-nav{display:none;position:fixed;inset:72px 0 0;background:#fff;z-index:99;overflow-y:auto;padding:24px var(--gutter) 48px;flex-direction:column;transform:translateY(-8px);opacity:0;transition:opacity 0.25s var(--ease),transform 0.25s var(--ease)}.mobile-nav.open{display:flex;opacity:1;transform:none}
.mobile-nav-list{display:flex;flex-direction:column;border-top:1px solid var(--border)}.mobile-nav-list a{padding:16px 0;font-size:18px;font-weight:700;border-bottom:1px solid var(--border);color:var(--ink)}
.mobile-nav-lang{display:flex;align-items:center;gap:8px;margin-top:24px;font-family:var(--en);font-size:13px;font-weight:700;color:var(--subtle)}.mobile-nav-lang a{color:var(--subtle)}.mobile-nav-lang a.active{color:var(--ink)}.mobile-nav-lang span{color:var(--border)}
.mobile-nav-actions{display:flex;flex-direction:column;gap:12px;margin-top:24px}.mobile-nav-actions .btn{width:100%;justify-content:center}
.page-hero{padding-top:72px;background:var(--bg)}.page-hero-inner{padding:20px 0 16px}

.case-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px}
.tag{font-size:10px;font-weight:700;padding:3px 9px;border-radius:2px;letter-spacing:0.03em;white-space:nowrap}
.tag-ind{background:var(--bg-off);color:var(--muted)}.tag-svc{color:var(--blue);background:var(--blue-pale)}.tag-feat{background:var(--bg-mid);color:var(--subtle)}
.page-hero-h1{font-size:clamp(24px,3vw,40px);font-weight:700;letter-spacing:-0.03em;line-height:1.3;color:var(--ink);margin-bottom:24px;text-wrap:pretty;max-width:none}
.case-title-block{margin-bottom:clamp(40px,5vw,64px)}.case-title-block .case-tags{margin-bottom:16px}.case-title-block .page-hero-h1{margin-bottom:20px}
.case-hero-img{width:100%;aspect-ratio:16/9;overflow:hidden;background:var(--bg-mid);border-radius:var(--r);margin-bottom:clamp(32px,4vw,48px)}.case-hero-img img{width:100%;height:100%;object-fit:cover}
.case-layout{padding:clamp(24px,3vw,36px) 0 clamp(64px,8vw,96px)}.case-layout .wrap{display:grid;grid-template-columns:1fr 300px;gap:clamp(48px,6vw,80px);align-items:start}
.case-sidebar{position:sticky;top:96px}
.case-section{margin-bottom:clamp(40px,5vw,60px)}.case-section:last-child{margin-bottom:0}
.case-h2{font-size:clamp(18px,2vw,24px);font-weight:700;letter-spacing:-0.02em;line-height:1.4;color:var(--ink);margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--ink)}
.case-p{font-size:16px;color:var(--ink);line-height:2.0;margin-bottom:20px}.case-p:last-child{margin-bottom:0}
.case-ul{display:flex;flex-direction:column;gap:8px;margin-bottom:20px}.case-ul li{font-size:16px;color:var(--ink);line-height:1.8;padding-left:16px;position:relative}.case-ul li::before{content:'';position:absolute;left:0;top:0.65em;width:5px;height:5px;border-radius:50%;background:var(--blue)}
.cs-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:clamp(32px,4vw,48px)}.cs-card{background:var(--bg-off);border-radius:var(--r);padding:24px}.cs-card-label{font-size:10px;font-weight:700;letter-spacing:0.1em;color:var(--subtle);margin-bottom:10px;font-family:var(--en)}.cs-card-text{font-size:15px;color:var(--ink);line-height:1.8}
.process-list{display:flex;flex-direction:column;gap:10px}.process-item{display:grid;grid-template-columns:32px 1fr;gap:8px;padding:14px 20px;background:var(--bg-off);border-radius:var(--r)}.process-num{font-family:var(--en);font-size:11px;font-weight:700;color:var(--subtle);padding-top:2px}.process-title{font-size:15px;font-weight:700;color:var(--ink);margin-bottom:2px}.process-desc{font-size:14px;color:var(--muted);line-height:1.75}
.sidebar-card{background:var(--bg-off);border-radius:var(--r);padding:24px;margin-bottom:20px}.sidebar-card-title{font-size:11px;font-weight:700;letter-spacing:0.08em;color:var(--subtle);margin-bottom:16px;font-family:var(--en)}.sidebar-row{display:flex;flex-direction:column;gap:12px}.sidebar-item{display:flex;flex-direction:column;gap:3px}.sidebar-item-label{font-size:11px;color:var(--subtle)}.sidebar-item-value{font-size:14px;font-weight:400;color:var(--ink);line-height:1.5}
.sidebar-cta{background:var(--blue);border-radius:var(--r);padding:24px;text-align:center}.sidebar-cta-text{font-size:13px;color:rgba(255,255,255,0.7);line-height:1.7;margin-bottom:16px}.sidebar-cta .btn{width:100%;justify-content:center;background:#fff;color:var(--ink-dark);border-color:#fff;font-size:13px;padding:11px 20px}.sidebar-cta .btn:hover{background:#f0f0f0}
.related{padding:clamp(48px,6vw,72px) 0;background:var(--bg-page);border-top:1px solid var(--border)}.related-head{font-size:clamp(18px,2vw,24px);font-weight:700;letter-spacing:-0.02em;color:var(--ink);margin-bottom:32px}
.related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(24px,3vw,40px)}.related-card{background:var(--bg);border-radius:var(--r);overflow:hidden;display:flex;flex-direction:column;transition:box-shadow 0.2s var(--ease),transform 0.2s var(--ease)}
@media(hover:hover) and (pointer:fine){.related-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.07);transform:translateY(-2px);outline:2px solid var(--blue)}}
.related-thumb{aspect-ratio:16/10;overflow:hidden;background:var(--bg-mid)}.related-thumb img{width:100%;height:100%;object-fit:cover;transition:transform 400ms var(--ease)}.related-card:hover .related-thumb img{transform:scale(1.04)}
.related-body{padding:clamp(16px,2vw,24px)}.related-tags{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px}.related-title{font-size:clamp(14px,1.5vw,18px);font-weight:700;color:var(--ink);line-height:1.55;transition:color 0.15s}.related-card:hover .related-title{color:var(--blue)}
.cta-band{background:var(--ink-dark);padding:clamp(72px,10vw,120px) 0}.cta-band-inner{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px);align-items:center}
.cta-head{font-size:clamp(2rem,3.5vw,3.2rem);font-weight:700;letter-spacing:-0.03em;line-height:1.3;color:#fff;text-wrap:balance;margin-bottom:4px}.cta-sub{font-size:clamp(15px,1.4vw,16px);color:rgba(255,255,255,0.48);margin-top:18px;line-height:1.8;max-width:42ch}
.cta-actions{display:flex;flex-direction:column;gap:0}.cta-action-row{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:clamp(20px,3vw,28px) 0;border-bottom:1px solid rgba(255,255,255,0.08)}.cta-action-row:first-child{border-top:1px solid rgba(255,255,255,0.08)}
.cta-action-title{font-size:18px;font-weight:700;color:#fff;margin-bottom:4px}.cta-action-desc{font-size:14px;color:rgba(255,255,255,0.38);line-height:1.6}.cta-action-row .btn{flex-shrink:0;font-size:13px;padding:10px 20px}
.btn-white{background:#fff;color:var(--ink-dark);border-color:#fff}.btn-white:hover{background:#f0f0f0}.btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,0.35)}.btn-outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.08)}
.footer{background:#0A0A0F;color:#fff;padding:clamp(48px,7vw,80px) 0 0}.footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:clamp(32px,5vw,64px);padding-bottom:clamp(40px,5vw,60px)}
.footer-logo{margin-bottom:16px}.footer-logo svg{height:28px;width:auto}.footer-tagline{font-size:16px;color:rgba(255,255,255,0.55);line-height:1.7;margin-bottom:16px}.footer-address{font-size:11px;font-style:normal;color:rgba(255,255,255,0.22);line-height:1.7}
.footer-col-label{font-family:var(--en);font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.28);margin-bottom:12px}.footer-links{display:flex;flex-direction:column;gap:8px}.footer-links a{font-size:16px;color:rgba(255,255,255,0.62);transition:color 0.15s}.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,0.07);padding:20px 0;display:flex;align-items:center;justify-content:space-between;gap:16px}.footer-copy{font-family:var(--en);font-size:11px;color:rgba(255,255,255,0.16)}.footer-legal{display:flex;gap:20px}.footer-legal a{font-size:11px;color:rgba(255,255,255,0.22);transition:color 0.15s}.footer-legal a:hover{color:rgba(255,255,255,0.5)}
@media(max-width:1024px){.case-layout .wrap{grid-template-columns:1fr}.case-sidebar{position:static}.cta-band-inner{grid-template-columns:1fr}.related-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:768px){.header-nav,.header-lang,.header-actions{display:none}.hamburger{display:flex}.header-inner{grid-template-columns:auto 1fr}.cs-grid{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.related-grid{grid-template-columns:1fr}.footer-top{grid-template-columns:1fr}}

      `}</style>
<div className="page-hero"><div className="wrap"><div className="page-hero-inner">
  <nav className="breadcrumb reveal"><a href="/">トップ</a><span className="breadcrumb-sep">/</span><a href="/cases">実績</a><span className="breadcrumb-sep">/</span><span aria-current="page">年収査定AIチャットボット開発</span></nav>
</div></div></div>
<section className="case-layout"><div className="wrap">
  <div className="case-body">
    <div className="case-hero-img reveal"><img src="https://picsum.photos/seed/vietis-case-salaryai/1200/675" alt="生成AIを活用した就活生向け年収査定AIチャットボットの開発" loading="eager" /></div>
    <div className="case-title-block reveal">
      <div className="case-tags"><span className="tag tag-ind">業務改善・DX</span>
<span className="tag tag-svc">AI</span>
<span className="tag tag-feat">チャットボット・RAG</span></div>
      <h1 className="page-hero-h1">生成AIを活用した就活生向け年収査定AIチャットボットの開発</h1>
    </div>
    <div className="case-section reveal">
      <h2 className="case-h2">プロジェクト概要</h2>
      <p className="case-p">就職支援サービス企業において、就活生が自分の職種・スキル・経験を入力すると市場データを参照しながらリアルタイムで年収査定を行うAIチャットボットの開発を担当。生成AIとRAGを組み合わせた高精度な年収推定を実現した。</p>
      <p className="case-p">VIETISはGemini APIとRAGアーキテクチャを活用したバックエンドとReactフロントエンドを構築。業界・職種・地域・経験年数などの多変数を考慮したベクトル検索により、関連する市場データを動的に参照して精度の高い年収査定を提供する仕組みを実装した。</p>
    </div>
    <div className="case-section reveal">
      <h2 className="case-h2">課題と解決策</h2>
      <div className="cs-grid">
        <div className="cs-card"><p className="cs-card-label">CHALLENGE</p><p className="cs-card-text">一般的な年収相場サービスと異なり、個人の職種・スキルスタック・経験年数・地域などの複合要因を考慮した個別化された年収査定が求められた。また就活生が気軽に使えるチャット形式のUXも重要要件だった。</p></div>
        <div className="cs-card"><p className="cs-card-label">SOLUTION</p><p className="cs-card-text">Gemini APIによる自然言語理解とRAGによる市場データ検索を組み合わせ、個人属性に近いデータポイントを動的に参照する仕組みを構築。会話形式で情報を段階的に引き出し、精度を高めながら回答を生成するフローを設計した。</p></div>
      </div>
    </div>
    <div className="case-section reveal">
      <h2 className="case-h2">成果</h2>
      <ul className="case-ul"><li>自然な会話形式で職種・スキルを入力するだけで個別化された年収査定が可能に。</li>
<li>RAGによる市場データ参照により、汎用的な相場情報より精度の高い年収推定を実現。</li>
<li>チャット形式のUXにより、就活生の利用障壁が低下しエンゲージメントが向上。</li>
<li>査定結果とともに関連する求人・キャリアパス情報も提示できる拡張性を確保。</li></ul>
    </div>
    <div className="case-section reveal">
      <h2 className="case-h2">進め方</h2>
      <div className="process-list"><div className="process-item"><div className="process-num">01</div><div><div className="process-title">データ設計・RAGアーキテクチャ設計</div><div className="process-desc">年収市場データの収集・前処理・ベクトル化の方針を策定。Gemini APIとベクトルDBを組み合わせたRAGアーキテクチャを設計した。</div></div></div>
<div className="process-item"><div className="process-num">02</div><div><div className="process-title">バックエンドAPI・チャットフロー実装</div><div className="process-desc">Python/FastAPIで会話管理APIとRAG検索ロジックを実装。プロンプトエンジニアリングで回答精度を最適化した。</div></div></div>
<div className="process-item"><div className="process-num">03</div><div><div className="process-title">Reactチャット画面開発</div><div className="process-desc">リアルタイムストリーミングレスポンスに対応したチャットUIをReactで実装。入力ガイドや査定結果の可視化UIも構築した。</div></div></div>
<div className="process-item"><div className="process-num">04</div><div><div className="process-title">精度評価・チューニング・本番リリース</div><div className="process-desc">サンプルデータによる精度評価を繰り返し実施。RAGの検索パラメータとプロンプトをチューニングして本番リリースした。</div></div></div></div>
    </div>
  </div>
  <aside className="case-sidebar"><div className="sidebar-card">
        <p className="sidebar-card-title">PROJECT INFO</p>
        <div className="sidebar-row">
          <div className="sidebar-item"><span className="sidebar-item-label">業種</span><span className="sidebar-item-value">HR・就職支援</span></div>
          <div className="sidebar-item"><span className="sidebar-item-label">開発期間</span><span className="sidebar-item-value">数ヶ月</span></div>
          <div className="sidebar-item"><span className="sidebar-item-label">チーム規模</span><span className="sidebar-item-value">チーム規模</span></div>
          <div className="sidebar-item"><span className="sidebar-item-label">チーム規模</span><span className="sidebar-item-value">5名（PM・AIエンジニア・フロントエンド・QA）</span></div>
          <div className="sidebar-item"><span className="sidebar-item-label">技術スタック</span><span className="sidebar-item-value">Gemini API / RAG / Python / FastAPI / React</span></div>
          <div className="sidebar-item"><span className="sidebar-item-label">サービス種別</span><span className="sidebar-item-value">AIシステム開発</span></div>
        </div>
      </div>
      <div className="sidebar-cta">
        <p className="sidebar-cta-text">同様の課題をお持ちの方へ。まず30分、現状をお聞かせください。</p>
        <a href="/consultation" className="btn">無料相談を予約 <span className="btn-arrow" style={{color: 'var(--blue)'}}>↗</span></a>
      </div></aside>
</div></section>
<section className="related"><div className="wrap">
  <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px'}}>
    <h2 className="related-head reveal" style={{marginBottom: '0'}}>関連する実績</h2>
    <a href="/cases" className="reveal" style={{fontSize: '14px', fontWeight: '700', color: 'var(--muted)', borderBottom: '1px solid var(--border)', paddingBottom: '2px', whiteSpace: 'nowrap', transition: 'color 0.15s,border-color 0.15s'}}>すべての実績を見る →</a>
  </div>
  <div className="related-grid"><article className="related-card reveal"><a href="/cases/example-02/" className="related-thumb"><img src="https://picsum.photos/seed/vietis-case-menraku/720/450" alt="Menraku AI採用支援" loading="lazy" /></a><div className="related-body"><div className="related-tags"><span className="tag tag-ind">業務改善・DX</span><span className="tag tag-svc">AI</span></div><h3 className="related-title"><a href="/cases/example-02/">AI採用支援システム「Menraku」導入による採用プロセスの自動化</a></h3></div></article>
<article className="related-card reveal d1"><a href="/cases/example-17/" className="related-thumb"><img src="https://picsum.photos/seed/vietis-case-govai/720/450" alt="自治体向けAIチャットボット" loading="lazy" /></a><div className="related-body"><div className="related-tags"><span className="tag tag-ind">業務改善・DX</span><span className="tag tag-svc">AI</span></div><h3 className="related-title"><a href="/cases/example-17/">大手IT企業と連携した自治体向けAIスタッフ総合案内チャットボットの開発・運用</a></h3></div></article>
<article className="related-card reveal d2"><a href="/cases/example-01/" className="related-thumb"><img src="https://picsum.photos/seed/vietis-case-keyspider-detail/720/450" alt="Keyspider導入" loading="lazy" /></a><div className="related-body"><div className="related-tags"><span className="tag tag-ind">業務改善・DX</span><span className="tag tag-svc">Webシステム</span></div><h3 className="related-title"><a href="/cases/example-01/">クラウドID管理「Keyspider」導入によるアカウント管理の自動化</a></h3></div></article></div>
</div></section>
<section className="cta-band" aria-labelledby="cta-h"><div className="wrap"><div className="cta-band-inner">
  <div><h2 className="cta-head reveal" id="cta-h">まずは<br />無料相談から</h2><p className="cta-sub reveal d1">課題の整理だけでも歓迎します。現状をお聞きしてから、最適な進め方をご提案します。</p></div>
  <div className="reveal d2"><div className="cta-actions">
    <div className="cta-action-row"><div><div className="cta-action-title">無料相談を予約</div><div className="cta-action-desc">オンライン30分。課題ヒアリングと方向性のご提案。</div></div><a href="/consultation" className="btn btn-white">予約する <span className="btn-arrow" style={{color: 'var(--ink)'}}>↗</span></a></div>
    <div className="cta-action-row"><div><div className="cta-action-title">資料ダウンロード</div><div className="cta-action-desc">サービス概要・実績・料金目安をまとめた資料。</div></div><a href="/download" className="btn btn-outline-white">ダウンロード</a></div>
    <div className="cta-action-row"><div><div className="cta-action-title">お問い合わせ</div><div className="cta-action-desc">個別のご質問・お見積りのご相談はこちらから。</div></div><a href="/contact" className="btn btn-outline-white">お問い合わせ</a></div>
  </div></div>
</div></div></section>
    </>
  );
}
