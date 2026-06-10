import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-logo" aria-label="VIETISジャパン">
              <svg width="350" height="61" viewBox="0 0 350 61" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g clipPath="url(#ftr-clip)">
                  <path d="M0 .33H2.02L34.03 60.67H0V.33Z" fill="white"/>
                  <path d="M19.7.33H60V2.79L39.95 39.2 19.7.33Z" fill="white"/>
                  <path d="M60 35.02 46.23 60.67H60V35.02Z" fill="white"/>
                  <path d="M73.08 12.06 80.25.33H92V60.67H73.08V12.06Z" fill="white"/>
                  <path d="M111.47.33S100.28 4.03 99.39 20.43c-.45 14.36-2.24 32.87 11.08 40.24h57.75l-.11-15.36h-44c0 0-5.93-.79-5.93-8.37h49.93V22.68h-49.93s-1-4.64 3.81-6.89h46.1V.33h-56.63Z" fill="white"/>
                  <path d="M242.69 15.79V.33h-64.67v15.46h21.25v44.88h18.65l-.08-44.88h24.85Z" fill="white"/>
                  <path d="M260.35.33s-.08.16-.24.45c-1.35 2.55-7.96 15.02-7.96 15.02V60.67h18.95L271.09.33h-10.74Z" fill="rgba(255,255,255,0.45)"/>
                  <path d="M350 .33v15.46h-51.16s-.31 3.07 11.6 6.89c11.2 3.92 25.73 8.62 25.73 8.62s11.7 3.26 13.82 10.3v12.85s-2.12 6.22-11.5 6.22H279.86V45.31h47.12s-2.32-4.37-19.17-8.37c-15.95-4.1-26.24-4.75-27.96-21.15V9.29S280 1.57 296.71.33H350Z" fill="rgba(255,255,255,0.45)"/>
                </g>
                <defs><clipPath id="ftr-clip"><rect width="350" height="61" fill="white"/></clipPath></defs>
              </svg>
            </div>
            <p className="footer-tagline">AI・DX推進の伴走パートナー。<br />戦略から開発・運用まで一気通貫で支援。</p>
            <address className="footer-address">
              〒103-0013 東京都中央区日本橋人形町3-3-10<br />
              日本橋TECビル 7F&nbsp;&nbsp;TEL: 03-5759-4881
            </address>
          </div>
          <div>
            <p className="footer-col-label">サービス</p>
            <ul className="footer-links">
              <li><Link href="/service/ai-driving-suite/">AI/DX Driving Suite</Link></li>
              <li><Link href="/service/ai-development/">AIシステム開発</Link></li>
              <li><Link href="/service/dev-system/">Webシステム開発</Link></li>
              <li><Link href="/service/dev-app/">アプリ開発</Link></li>
              <li><Link href="/service/dev-web/">Webサイト制作</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-label">運用・保守</p>
            <ul className="footer-links">
              <li><Link href="/service/support-ai/">AIシステム運用保守</Link></li>
              <li><Link href="/service/support-system/">業務システム運用保守</Link></li>
              <li><Link href="/service/support-web/">Webサイト運用保守</Link></li>
            </ul>
            <p className="footer-col-label" style={{ marginTop: '24px' }}>プロダクト</p>
            <ul className="footer-links">
              <li><Link href="/product/keyspider/">Keyspider</Link></li>
              <li><Link href="/product/menraku/">Menraku</Link></li>
            </ul>
          </div>
          <div>
            <p className="footer-col-label">会社</p>
            <ul className="footer-links">
              <li><Link href="/about/">企業情報</Link></li>
              <li><Link href="/cases/">実績</Link></li>
              <li><Link href="/blog/">ブログ</Link></li>
              <li><Link href="/recruit/">採用情報</Link></li>
              <li><Link href="/contact/">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 VIETIS Japan Co., Ltd.</p>
          <nav className="footer-legal" aria-label="法的情報">
            <Link href="/privacy-policy/">プライバシーポリシー</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
