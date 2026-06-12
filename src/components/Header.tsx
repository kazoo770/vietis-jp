'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LogoSVG = ({ color = '#2B49E7' }: { color?: string }) => (
  <svg width="350" height="61" viewBox="0 0 350 61" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g clipPath="url(#hdr-clip)">
      <path d="M0 .33H2.02L34.03 60.67H0V.33Z" fill={color}/>
      <path d="M19.7.33H60V2.79L39.95 39.2 19.7.33Z" fill={color}/>
      <path d="M60 35.02 46.23 60.67H60V35.02Z" fill={color}/>
      <path d="M73.08 12.06 80.25.33H92V60.67H73.08V12.06Z" fill={color}/>
      <path d="M111.47.33S100.28 4.03 99.39 20.43c-.45 14.36-2.24 32.87 11.08 40.24h57.75l-.11-15.36h-44c0 0-5.93-.79-5.93-8.37h49.93V22.68h-49.93s-1-4.64 3.81-6.89h46.1V.33h-56.63Z" fill={color}/>
      <path d="M242.69 15.79V.33h-64.67v15.46h21.25v44.88h18.65l-.08-44.88h24.85Z" fill={color}/>
      <path d="M260.35.33s-.08.16-.24.45c-1.35 2.55-7.96 15.02-7.96 15.02V60.67h18.95L271.09.33h-10.74Z" fill="#FF0033"/>
      <path d="M350 .33v15.46h-51.16s-.31 3.07 11.6 6.89c11.2 3.92 25.73 8.62 25.73 8.62s11.7 3.26 13.82 10.3v12.85s-2.12 6.22-11.5 6.22H279.86V45.31h47.12s-2.32-4.37-19.17-8.37c-15.95-4.1-26.24-4.75-27.96-21.15V9.29S280 1.57 296.71.33H350Z" fill="#FF0033"/>
    </g>
    <defs><clipPath id="hdr-clip"><rect width="350" height="61" fill="white"/></clipPath></defs>
  </svg>
);

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const handleCasesClick = (e: React.MouseEvent) => {
    if (pathname === '/cases' || pathname === '/cases/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('cases-reset'));
    }
  };

  useEffect(() => {
    const header = headerRef.current;
    const hamburger = hamburgerRef.current;
    const mobileNav = mobileNavRef.current;
    if (!header || !hamburger || !mobileNav) return;

    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });

    const onHamburger = () => {
      const isOpen = hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) { mobileNav.classList.add('open'); document.body.style.overflow = 'hidden'; }
      else { mobileNav.classList.remove('open'); document.body.style.overflow = ''; }
    };
    hamburger.addEventListener('click', onHamburger);

    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="header" id="hdr" ref={headerRef}>
        <div className="header-inner">
          <Link href="/" className="header-logo" aria-label="VIETISジャパン トップページへ">
            <LogoSVG />
          </Link>
          <nav className="header-nav" aria-label="メインナビゲーション">
            <Link href="/service/">サービス</Link>
            <Link href="/product/">プロダクト</Link>
            <Link href="/cases/" onClick={handleCasesClick}>実績</Link>
            <Link href="/about/">企業情報</Link>
            <Link href="/blog/">ブログ</Link>
            <Link href="/recruit/">採用</Link>
          </nav>
          <div className="header-right">
            <div className="header-lang">
              <a href="/" className="active" lang="ja">JP</a>
              <span>/</span>
              <a href="/en" lang="en">EN</a>
            </div>
            <div className="header-actions">
              <Link href="/download/" className="btn btn-outline">資料請求</Link>
              <Link href="/consultation/" className="btn btn-dark">無料相談を予約 <span className="btn-arrow">↗</span></Link>
            </div>
            <button className="hamburger" id="hamburger" ref={hamburgerRef} aria-label="メニューを開く" aria-expanded="false" aria-controls="mobile-nav">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </header>

      <nav className="mobile-nav" id="mobile-nav" ref={mobileNavRef} aria-label="モバイルナビゲーション">
        <div className="mobile-nav-list">
          <Link href="/service/">サービス</Link>
          <Link href="/product/">プロダクト</Link>
          <Link href="/cases/" onClick={handleCasesClick}>実績</Link>
          <Link href="/about/">企業情報</Link>
          <Link href="/blog/">ブログ</Link>
          <Link href="/recruit/">採用</Link>
        </div>
        <div className="mobile-nav-lang">
          <a href="/" className="active" lang="ja">JP</a>
          <span>/</span>
          <a href="/en" lang="en">EN</a>
        </div>
        <div className="mobile-nav-actions">
          <Link href="/consultation/" className="btn btn-dark">無料相談を予約する <span className="btn-arrow">↗</span></Link>
          <Link href="/download/" className="btn btn-outline">資料請求</Link>
        </div>
      </nav>
    </>
  );
}
