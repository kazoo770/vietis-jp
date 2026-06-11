import type { Metadata } from 'next';
import BlogFilterInit from '@/components/BlogFilterInit';

export const metadata: Metadata = {
  title: 'ブログ｜AI/DX・システム開発の実践情報 - 株式会社VIETISジャパン',
  description: 'システム開発、アプリ開発、最新のAI活用からDX推進の実践ノウハウまで。ビジネスのDXを加速させる技術情報をお届けします。',
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
.btn-dark{background:var(--ink-dark);color:#fff;border-color:var(--ink-dark)}
.btn-dark:hover{background:#000}
.btn-outline{background:transparent;color:var(--ink);border-color:var(--border)}
.btn-outline:hover{border-color:var(--ink)}
.btn-outline-white{background:transparent;color:#fff;border-color:rgba(255,255,255,0.35)}
.btn-outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.08)}
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
.page-hero{padding-top:72px;border-bottom:1px solid var(--border)}
.page-hero-inner{padding:clamp(56px,8vw,100px) 0 clamp(48px,7vw,80px)}




.page-hero-h1{font-size:clamp(48px,6vw,70px);font-weight:700;letter-spacing:-0.04em;line-height:1.0;color:var(--ink);margin-bottom:20px}
.page-hero-sub{font-size:clamp(15px,1.5vw,18px);color:var(--muted);line-height:1.85;text-wrap:pretty;max-width:680px}

/* CATEGORY NAV */
.cat-nav{border-bottom:1px solid var(--border);background:var(--bg);position:sticky;top:72px;z-index:50}
.cat-nav-inner{max-width:var(--max);margin:0 auto;padding:0 var(--gutter);display:flex;align-items:center;gap:4px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.cat-nav-inner::-webkit-scrollbar{display:none}
.cat-btn{font-family:var(--ja);font-size:13px;font-weight:700;color:var(--muted);background:none;border:none;cursor:pointer;padding:14px 16px;white-space:nowrap;border-bottom:2px solid transparent;transition:color 0.15s,border-color 0.15s;line-height:1}
.cat-btn:hover{color:var(--ink)}
.cat-btn.active{color:var(--blue);border-bottom-color:var(--blue)}

/* BLOG GRID */
.blog-section{padding:clamp(48px,7vw,96px) 0}
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);column-gap:clamp(24px,3vw,40px);row-gap:clamp(48px,5vw,72px);margin-top:48px}
.blog-card{display:flex;flex-direction:column;transition:opacity 0.15s}
.blog-card:hover .blog-card-img img{transform:scale(1.04)}
.blog-card-img{aspect-ratio:16/9;border-radius:var(--r);overflow:hidden;background:var(--bg-mid);margin-bottom:16px}
.blog-card-img img{width:100%;height:100%;object-fit:cover;transition:transform 0.4s var(--ease)}
.blog-card-meta{display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-wrap:wrap}
.blog-card-date{font-family:var(--en);font-size:12px;color:var(--subtle);font-weight:500}
.blog-card-tag{font-family:var(--en);font-size:10px;font-weight:700;letter-spacing:0.06em;color:var(--blue);background:var(--blue-pale);padding:3px 8px;border-radius:2px;white-space:nowrap}
.blog-card-title{font-size:18px;font-weight:700;color:var(--ink);line-height:1.55;margin-bottom:10px;text-wrap:pretty;transition:color 0.15s}
.blog-card:hover .blog-card-title{color:var(--blue)}
.blog-card-excerpt{font-size:14px;color:var(--muted);line-height:1.8;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}

/* PAGINATION */
.pagination{display:flex;align-items:center;justify-content:center;gap:4px;margin-top:clamp(48px,6vw,80px)}
.page-btn{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:var(--r-btn);border:1.5px solid var(--border);font-family:var(--en);font-size:13px;font-weight:700;color:var(--muted);background:none;cursor:pointer;transition:border-color 0.15s,color 0.15s,background 0.15s}
.page-btn:hover{border-color:var(--ink);color:var(--ink)}
.page-btn.active{background:var(--blue);border-color:var(--blue);color:#fff}
.page-btn-next{width:auto;padding:0 16px;gap:6px;font-size:13px}

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
  .blog-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .header-nav,.header-lang,.header-actions{display:none}
  .hamburger{display:flex}
  .header-inner{grid-template-columns:auto 1fr}
  .footer-top{grid-template-columns:1fr 1fr}
  .blog-card-excerpt{display:none}
}
@media(max-width:600px){
  .blog-grid{grid-template-columns:1fr}
}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal"><a href="/">トップ</a><span className="breadcrumb-sep">›</span><span aria-current="page">ブログ</span></nav>
      <h1 className="page-hero-h1 reveal d1">ブログ</h1>
      <p className="page-hero-sub reveal d2">システム開発、アプリ開発、最新のAI活用からDX推進の実践ノウハウまで。<br />ビジネスの変革を加速させる技術情報をお届けします。</p>
    </div>
  </div>
</div>

<div className="cat-nav" role="navigation" aria-label="カテゴリー">
  <div className="cat-nav-inner">
    <button className="cat-btn active" data-cat="all">すべて</button>
    <button className="cat-btn" data-cat="dx">DX・業務改善</button>
    <button className="cat-btn" data-cat="dev">システム・アプリ開発</button>
    <button className="cat-btn" data-cat="ai">AI・最新技術</button>
    <button className="cat-btn" data-cat="culture">社内カルチャー</button>
  </div>
</div>

<div className="blog-section">
  <div className="wrap">
    <div className="blog-grid" id="blog-grid">

      <article className="blog-card reveal" data-cat="dev">
        <a href="/blog/001/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-legacy-system/800/450" alt="基幹システム刷新の進め方" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.06.09</span>
          <span className="blog-card-tag">システム開発</span>
        </div>
        <a href="/blog/001/" className="blog-card-title">失敗しない「基幹システム刷新」の進め方。要件定義で現場のブラックボックス化を防ぐ3つのポイント</a>
        <p className="blog-card-excerpt">レガシー化した社内システムを刷新する際、ドキュメントが整備されていないケースがほとんどです。現場担当者の暗黙知をどう可視化するか、実案件から得た知見をまとめました。</p>
      </article>

      <article className="blog-card reveal d1" data-cat="ai">
        <a href="/blog/002/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-rag-architecture/800/450" alt="RAG構築の実践" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.05.28</span>
          <span className="blog-card-tag">AI・最新技術</span>
        </div>
        <a href="/blog/002/" className="blog-card-title">社内ナレッジにRAGを導入した実例。精度を上げるチャンキング設計と評価の方法</a>
        <p className="blog-card-excerpt">「社内文書をAIで検索したい」というニーズは多いですが、精度に悩むケースも少なくありません。構築から評価まで、実案件のアプローチを解説します。</p>
      </article>

      <article className="blog-card reveal d2" data-cat="dx">
        <a href="/blog/003/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-dx-roadmap/800/450" alt="DX推進ロードマップ" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.05.15</span>
          <span className="blog-card-tag">DX・業務改善</span>
        </div>
        <a href="/blog/003/" className="blog-card-title">DX推進が「掛け声だけ」で終わる組織と、成果を出す組織の違い。現場から見えた5つの差</a>
        <p className="blog-card-excerpt">多くの企業でDX推進室が立ち上がっていますが、成果につながらないケースが目立ちます。100件以上の支援経験から見えてきた構造的な差異を整理しました。</p>
      </article>

      <article className="blog-card reveal" data-cat="ai">
        <a href="/blog/004/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-llm-business/800/450" alt="LLM業務活用" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.05.02</span>
          <span className="blog-card-tag">AI・最新技術</span>
        </div>
        <a href="/blog/004/" className="blog-card-title">LLMを業務に組み込む前に確認すべき7つのチェックリスト。セキュリティから運用コストまで</a>
        <p className="blog-card-excerpt">生成AIの業務導入は急速に進んでいますが、実装フェーズで見落とされがちな論点があります。プロジェクト開始前に確認すべき項目をまとめました。</p>
      </article>

      <article className="blog-card reveal d1" data-cat="dev">
        <a href="/blog/005/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-mobile-app/800/450" alt="モバイルアプリ開発" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.04.18</span>
          <span className="blog-card-tag">アプリ開発</span>
        </div>
        <a href="/blog/005/" className="blog-card-title">Flutter vs React Native、2026年の選択基準。プロジェクト規模・チーム構成別の判断軸</a>
        <p className="blog-card-excerpt">クロスプラットフォーム開発のフレームワーク選定は迷いやすいテーマです。直近10件の案件データをもとに、選定時に重視すべき観点を整理しました。</p>
      </article>

      <article className="blog-card reveal d2" data-cat="dx">
        <a href="/blog/006/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-process-automation/800/450" alt="業務プロセス自動化" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.04.04</span>
          <span className="blog-card-tag">DX・業務改善</span>
        </div>
        <a href="/blog/006/" className="blog-card-title">中堅製造業のデータ入力業務を月40時間削減した自動化プロジェクトの全工程</a>
        <p className="blog-card-excerpt">Excelとメールが混在する業務フローをどう整理し、自動化に落とし込んだか。要件定義から本番運用まで、12週間の取り組みを振り返ります。</p>
      </article>

      <article className="blog-card reveal" data-cat="ai">
        <a href="/blog/007/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-ai-agent/800/450" alt="AIエージェント開発" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.03.21</span>
          <span className="blog-card-tag">AI・最新技術</span>
        </div>
        <a href="/blog/007/" className="blog-card-title">AIエージェントを社内ワークフローに組み込んだ事例。承認フローの自動化で何が変わったか</a>
        <p className="blog-card-excerpt">単なるチャットボットを超えたAIエージェントの活用事例が増えています。実際の導入で得た知見と、設計上の注意点をまとめました。</p>
      </article>

      <article className="blog-card reveal d1" data-cat="dev">
        <a href="/blog/008/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-api-design/800/450" alt="API設計" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.03.07</span>
          <span className="blog-card-tag">システム開発</span>
        </div>
        <a href="/blog/008/" className="blog-card-title">長期保守を見越したREST API設計の原則。バージョニングとエラーハンドリングの実践</a>
        <p className="blog-card-excerpt">「将来の変更を見越した設計」は言うは易く行うは難しです。複数の長期保守案件から抽出した、実務で機能するAPI設計の指針をまとめました。</p>
      </article>

      <article className="blog-card reveal d2" data-cat="culture">
        <a href="/blog/009/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-team-culture/800/450" alt="チームカルチャー" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.02.20</span>
          <span className="blog-card-tag">社内カルチャー</span>
        </div>
        <a href="/blog/009/" className="blog-card-title">東京とハノイで300名が動く開発体制の作り方。コミュニケーション設計で変わること</a>
        <p className="blog-card-excerpt">地理的に分散したチームがひとつの目標に向かって動くためには、ツールよりも「情報の流れる仕組み」の設計が重要です。実際の体制づくりを振り返ります。</p>
      </article>

      <article className="blog-card reveal" data-cat="dx">
        <a href="/blog/010/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-requirements/800/450" alt="要件定義" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.02.06</span>
          <span className="blog-card-tag">DX・業務改善</span>
        </div>
        <a href="/blog/010/" className="blog-card-title">システム発注で失敗する企業の共通点。要件定義の前に整理すべき「課題の輪郭」</a>
        <p className="blog-card-excerpt">「作ってみたら使われなかった」という事態を防ぐには、要件定義以前の段階が重要です。発注前に確認すべき問いの立て方をまとめました。</p>
      </article>

      <article className="blog-card reveal d1" data-cat="ai">
        <a href="/blog/011/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-fine-tuning/800/450" alt="ファインチューニング" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.01.23</span>
          <span className="blog-card-tag">AI・最新技術</span>
        </div>
        <a href="/blog/011/" className="blog-card-title">RAGとファインチューニング、どちらを選ぶべきか。ユースケース別の判断フレームワーク</a>
        <p className="blog-card-excerpt">生成AIを業務に使いたいが、RAGで十分かファインチューニングが必要かで悩む声をよく聞きます。判断の指標を整理しました。</p>
      </article>

      <article className="blog-card reveal d2" data-cat="dev">
        <a href="/blog/012/" className="blog-card-img">
          <img src="https://picsum.photos/seed/vietis-cloud-infra/800/450" alt="クラウドインフラ" loading="lazy" />
        </a>
        <div className="blog-card-meta">
          <span className="blog-card-date">2026.01.10</span>
          <span className="blog-card-tag">システム開発</span>
        </div>
        <a href="/blog/012/" className="blog-card-title">AWSからGCPへの移行を6ヶ月で完了させた手順。コスト削減と可用性向上を両立するには</a>
        <p className="blog-card-excerpt">クラウドプロバイダーの移行は、ダウンタイムとコストのリスクを伴います。段階的移行で実現した安定稼働の手順を公開します。</p>
      </article>

    </div>

    <nav className="pagination reveal" aria-label="ページネーション">
      <button className="page-btn active" aria-current="page">1</button>
      <button className="page-btn">2</button>
      <button className="page-btn">3</button>
      <button className="page-btn page-btn-next">次へ <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button>
    </nav>
  </div>
</div>
      <BlogFilterInit />
    </>
  );
}
