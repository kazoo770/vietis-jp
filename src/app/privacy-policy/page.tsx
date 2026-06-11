import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー - 株式会社VIETISジャパン',
  description: '株式会社VIETISジャパンのプライバシーポリシー。個人情報の取り扱いについて定めています。',
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
.page-hero-sub{font-size:clamp(15px,1.5vw,18px);color:var(--muted);line-height:1.8;text-wrap:pretty}

/* POLICY CONTENT */
.policy-section{padding:clamp(64px,10vw,120px) 0}
.policy-layout{display:grid;grid-template-columns:200px 1fr;gap:clamp(40px,6vw,80px);align-items:start}
.policy-toc{position:sticky;top:96px}
.policy-toc-title{font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--subtle);margin-bottom:16px;font-family:var(--en)}
.policy-toc-list{display:flex;flex-direction:column;gap:6px}
.policy-toc-list a{font-size:13px;color:var(--muted);padding:4px 0;border-left:2px solid var(--border);padding-left:12px;transition:color 0.15s,border-color 0.15s;line-height:1.4}
.policy-toc-list a:hover{color:var(--ink);border-left-color:var(--blue)}
.policy-body{max-width:720px}
.policy-updated{font-size:13px;color:var(--subtle);margin-bottom:48px}
.policy-block{margin-bottom:48px}
.policy-block:last-child{margin-bottom:0}
.policy-block-title{font-size:18px;font-weight:700;color:var(--ink);margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border)}
.policy-block p{font-size:15px;color:var(--ink);line-height:1.85;margin-bottom:16px}
.policy-block p:last-child{margin-bottom:0}
.policy-block ul{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}
.policy-block ul li{font-size:15px;color:var(--ink);line-height:1.75;padding-left:16px;position:relative}
.policy-block ul li::before{content:'・';position:absolute;left:0;color:var(--subtle)}
.policy-block a{color:var(--blue);text-decoration:underline;text-underline-offset:2px}
.policy-contact-box{background:var(--bg-off);border:1px solid var(--border);border-radius:var(--r);padding:24px 28px;margin-top:16px}
.policy-contact-box p{font-size:14px;color:var(--ink);line-height:1.75;margin-bottom:0}
.policy-contact-box strong{color:var(--ink);font-weight:700}

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
@media(max-width:768px){
  .header-nav,.header-lang,.header-actions{display:none}
  .hamburger{display:flex}
  .header-inner{grid-template-columns:auto 1fr}
  .policy-layout{grid-template-columns:1fr}
  .policy-toc{display:none}
  .footer-top{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){.footer-top{grid-template-columns:1fr}}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb reveal"><a href="/">トップ</a><span className="breadcrumb-sep">/</span><span aria-current="page">プライバシーポリシー</span></nav>
      <h1 className="page-hero-h1 reveal d1">プライバシーポリシー</h1>
      <p className="page-hero-sub reveal d2">株式会社VIETISジャパンにおける個人情報の取り扱いについて定めます。</p>
    </div>
  </div>
</div>

<div className="policy-section">
  <div className="wrap">
    <div className="policy-layout">

      <aside className="policy-toc reveal">
        <p className="policy-toc-title">目次</p>
        <nav className="policy-toc-list">
          <a href="#s1">基本方針</a>
          <a href="#s2">個人情報の定義</a>
          <a href="#s3">収集する情報</a>
          <a href="#s4">利用目的</a>
          <a href="#s5">第三者提供</a>
          <a href="#s6">委託</a>
          <a href="#s7">安全管理</a>
          <a href="#s8">Cookie・解析ツール</a>
          <a href="#s9">開示・訂正・削除</a>
          <a href="#s10">お問い合わせ</a>
        </nav>
      </aside>

      <div className="policy-body">
        <p className="policy-updated reveal">制定日：2020年4月1日　最終改定：2025年1月1日</p>

        <div className="policy-block reveal" id="s1">
          <h2 className="policy-block-title">基本方針</h2>
          <p>株式会社VIETISジャパン（以下「当社」）は、お客様・求職者・お取引先の皆様の個人情報を適切に保護することを社会的責務と認識し、個人情報の保護に関する法律（個人情報保護法）その他の関連法令・ガイドラインを遵守します。</p>
          <p>当社はISO 27001の認証を取得しており、情報セキュリティマネジメントシステムに基づき個人情報を管理します。</p>
        </div>

        <div className="policy-block reveal" id="s2">
          <h2 className="policy-block-title">個人情報の定義</h2>
          <p>本ポリシーにおける「個人情報」とは、生存する個人に関する情報であって、氏名・生年月日・メールアドレス・電話番号その他の記述等により特定の個人を識別できるもの、または個人識別符号が含まれるものをいいます。</p>
        </div>

        <div className="policy-block reveal" id="s3">
          <h2 className="policy-block-title">収集する情報</h2>
          <p>当社は以下の場面において個人情報を取得します。</p>
          <ul>
            <li>お問い合わせフォームの送信時（氏名・会社名・メールアドレス・電話番号・お問い合わせ内容）</li>
            <li>資料請求・ダウンロードの申し込み時（氏名・会社名・メールアドレス）</li>
            <li>無料相談の予約時（氏名・会社名・メールアドレス・電話番号）</li>
            <li>採用応募の際（氏名・連絡先・職務経歴等）</li>
            <li>ウェブサイト閲覧時（Cookieを通じた行動情報、IPアドレス）</li>
          </ul>
        </div>

        <div className="policy-block reveal" id="s4">
          <h2 className="policy-block-title">利用目的</h2>
          <p>取得した個人情報は、以下の目的の範囲内でのみ利用します。</p>
          <ul>
            <li>お問い合わせ・ご相談への対応および回答</li>
            <li>サービスに関する情報・資料の提供</li>
            <li>見積もり・提案書の作成および送付</li>
            <li>契約の締結・履行・管理</li>
            <li>採用選考および入社後の連絡</li>
            <li>サービス改善を目的とした分析・調査（個人を特定しない形での統計処理を含む）</li>
            <li>法令に基づく対応</li>
          </ul>
          <p>上記以外の目的に利用する場合は、あらかじめ本人の同意を取得します。</p>
        </div>

        <div className="policy-block reveal" id="s5">
          <h2 className="policy-block-title">個人情報の第三者提供</h2>
          <p>当社は、以下の場合を除き、本人の同意なく個人情報を第三者に提供しません。</p>
          <ul>
            <li>法令に基づく場合</li>
            <li>人の生命・身体・財産の保護のために必要であり、本人の同意取得が困難な場合</li>
            <li>公衆衛生の向上または児童の健全な育成推進のために特に必要な場合</li>
            <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令所定事務を遂行するために協力する必要がある場合</li>
          </ul>
        </div>

        <div className="policy-block reveal" id="s6">
          <h2 className="policy-block-title">個人情報の取り扱い委託</h2>
          <p>当社は、業務遂行に必要な範囲で個人情報の取り扱いを外部委託することがあります。委託先には適切な監督を行い、機密保持契約を締結したうえで情報を提供します。</p>
        </div>

        <div className="policy-block reveal" id="s7">
          <h2 className="policy-block-title">安全管理措置</h2>
          <p>当社は、個人情報の漏洩・滅失・毀損の防止その他安全管理のため、ISO 27001に基づく情報セキュリティマネジメントシステムを運用しています。また、個人情報を取り扱う従業員に対して、適切な教育・監督を実施します。</p>
          <p>不正アクセス・不正持出し等のリスクに対しては、技術的および組織的な安全管理措置を講じます。</p>
        </div>

        <div className="policy-block reveal" id="s8">
          <h2 className="policy-block-title">Cookieおよびアクセス解析ツールについて</h2>
          <p>当社のウェブサイトでは、利便性の向上・サービス改善・広告効果の測定を目的として、Cookieおよびアクセス解析ツール（Google Analytics等）を使用しています。これらのツールはCookieを用いてデータを収集しますが、個人を特定する情報は含みません。</p>
          <p>Cookieの受け入れはブラウザの設定から拒否することができますが、一部の機能が利用できなくなる場合があります。Google Analyticsのデータ収集を無効化するには、<a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google アナリティクス オプトアウト アドオン</a>をご利用ください。</p>
        </div>

        <div className="policy-block reveal" id="s9">
          <h2 className="policy-block-title">個人情報の開示・訂正・削除等</h2>
          <p>本人から個人情報の開示・訂正・追加・削除・利用停止または第三者提供の停止を求められた場合、本人確認のうえ、法令の定めに従い速やかに対応します。</p>
          <p>ただし、以下に該当する場合は、全部または一部の開示等に応じられないことがあります。</p>
          <ul>
            <li>本人または第三者の生命・身体・財産その他の権利利益を害するおそれがある場合</li>
            <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
            <li>法令に違反することとなる場合</li>
          </ul>
        </div>

        <div className="policy-block reveal" id="s10">
          <h2 className="policy-block-title">個人情報に関するお問い合わせ</h2>
          <p>個人情報の取り扱いに関するお問い合わせ・ご相談・開示等のご請求は、下記窓口までご連絡ください。</p>
          <div className="policy-contact-box">
            <p>
              <strong>株式会社VIETISジャパン　個人情報保護窓口</strong><br />
              〒103-0013 東京都中央区日本橋人形町3-3-10 日本橋TECビル 7F<br />
              TEL：03-5759-4881<br />
              受付時間：平日 10:00〜18:00（土日祝・年末年始を除く）<br />
              <a href="/contact">お問い合わせフォームはこちら</a>
            </p>
          </div>
          <p style={{marginTop: '24px'}}>本ポリシーは、法令の改正・社内規程の変更等に応じて予告なく改定することがあります。最新版は本ページにてご確認ください。</p>
        </div>
      </div>

    </div>
  </div>
</div>
    </>
  );
}
