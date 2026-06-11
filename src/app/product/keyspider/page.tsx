import type { Metadata } from 'next';
import FaqInit from '@/components/FaqInit';

export const metadata: Metadata = {
  title: 'Keyspider導入サポート｜クラウドID管理を、まるごと自動化する - VIETISジャパン',
  description: 'IDaaS・SaaS・社内システムのID管理を自動化。公式開発パートナーとして深い技術知見を持つVIETISが、要件定義からカスタマイズ・API連携まで一気通貫で支援します。',
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
  --dark:      #0F1117;
  --ja:        'Noto Sans JP', sans-serif;
  --en:        'Roboto', sans-serif;
  --ease:      cubic-bezier(0.23, 1, 0.32, 1);
  --ease-io:   cubic-bezier(0.77, 0, 0.175, 1);
  --gutter:    clamp(20px, 5vw, 72px);
  --max:       1440px;
  --r:         8px;
  --r-btn:     3px;
  --r-pill:    99px;
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
.body-lead {
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--muted);
  line-height: 1.85;
  max-width: 60ch;
  text-wrap: pretty;
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
  white-space: nowrap;
  line-height: 1;
  transition: background 0.15s, border-color 0.15s, color 0.15s, transform 0.1s var(--ease);
  -webkit-user-select: none;
  user-select: none;
}
.btn:active { transform: scale(0.97); }
.btn-arrow {
  font-size: 16px;
  font-family: var(--en);
  font-weight: 400;
  line-height: 1;
  transition: transform 0.2s var(--ease);
}
.btn:hover .btn-arrow { transform: translate(1px, -1px); }


.btn-primary {
  background: var(--blue);
  color: #fff;
  border-color: var(--blue);
}
.btn-primary:hover { background: #1e37d0; border-color: #1e37d0; }
.btn-outline {
  background: transparent;
  color: var(--ink);
  border-color: var(--border);
}
.btn-outline:hover { border-color: var(--ink); }
.btn-outline-white {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,0.35);
}
.btn-outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
.btn-white {
  background: #fff;
  color: var(--ink-dark);
  border-color: #fff;
}
.btn-white:hover { background: #f0f0f0; }

/* ─── REVEAL ──────────────────────────────────── */
html.js-ready .reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}
html.js-ready .reveal.in {
  opacity: 1;
  transform: none;
}
html.js-ready .reveal.d1 { transition-delay: 0.07s; }
html.js-ready .reveal.d2 { transition-delay: 0.14s; }
html.js-ready .reveal.d3 { transition-delay: 0.21s; }
html.js-ready .reveal.d4 { transition-delay: 0.28s; }
@media (prefers-reduced-motion: reduce) {
  html.js-ready .reveal { transition: none !important; }
}

/* ═══════════════════════════════════════════════
   HEADER
═══════════════════════════════════════════════ */
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
.header.scrolled { border-bottom-color: var(--border); }
.header-inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: 0 var(--gutter);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 72px;
}
.header-logo { flex-shrink: 0; }
.header-logo svg { height: 24px; width: auto; }
.header-nav {
  display: flex;
  align-items: center;
  gap: 28px;
}
.header-nav a {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  transition: opacity 0.15s;
  white-space: nowrap;
}
.header-nav a:hover { opacity: 0.55; }
.header-nav a.active { color: var(--blue); }
.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: flex-end;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.header-actions .btn { padding: 9px 20px; font-size: 13px; }
.header-lang {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
}
.header-lang a { color: var(--subtle); transition: color 0.15s; }
.header-lang a:hover { color: var(--ink); }
.header-lang a.active { color: var(--ink); }
.header-lang span { color: var(--border); }

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
}
.hamburger span {
  display: block;
  width: 20px;
  height: 1.5px;
  background: var(--ink);
  border-radius: 2px;
  transition: transform 0.25s var(--ease), opacity 0.2s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-nav {
  display: none;
  position: fixed;
  inset: 72px 0 0;
  background: #fff;
  z-index: 99;
  overflow-y: auto;
  padding: 24px var(--gutter) 48px;
  flex-direction: column;
  gap: 0;
  transform: translateY(-8px);
  opacity: 0;
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.mobile-nav.open {
  display: flex;
  opacity: 1;
  transform: none;
}
.mobile-nav-list {
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border);
}
.mobile-nav-list a {
  padding: 16px 0;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid var(--border);
  color: var(--ink);
}
.mobile-nav-lang {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  font-family: var(--en);
  font-size: 13px;
  font-weight: 700;
  color: var(--subtle);
}
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
}
.mobile-nav-actions .btn { width: 100%; justify-content: center; font-size: 15px; padding: 16px; }

@media (max-width: 900px) {
  .header-nav { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
}
@media (max-width: 640px) {
  .header-lang { display: none; }
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
  max-width: 50ch;
  text-wrap: pretty;
  margin-bottom: 36px;
}
.page-hero-cta { display: flex; gap: 12px; flex-wrap: wrap; }

/* ─── Product badge ─────────────────────────── */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--blue-pale);
  border-radius: 2px;
  padding: 6px 14px;
  margin-bottom: 24px;
}
.hero-badge-icon {
  width: 16px;
  height: 16px;
  color: var(--blue);
  flex-shrink: 0;
}
.hero-badge-text {
  font-size: 12px;
  font-weight: 700;
  color: var(--blue);
  letter-spacing: 0.02em;
}

/* ═══════════════════════════════════════════════
   ABOUT KEYSPIDER (製品概要)
═══════════════════════════════════════════════ */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 7vw, 96px);
  align-items: start;
}
.about-left {}
.about-tagline {
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.5;
  color: var(--ink);
  margin-bottom: 20px;
  text-wrap: balance;
}
.about-body {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.85;
  margin-bottom: 24px;
}
.about-award {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--bg-off);
  border: 1px solid var(--border);
  border-radius: var(--r);
  padding: 16px 20px;
  margin-top: 32px;
}
.about-award-star {
  color: #F59E0B;
  flex-shrink: 0;
}
.about-award-text {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.5;
}
.about-award-text strong {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 2px;
}

/* 連携サービス */
.integrations {
  margin-top: clamp(32px, 4vw, 48px);
}
.integrations-label {
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.06em;
  margin-bottom: 16px;
}
.integrations-groups {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
}
.integration-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: start;
  border-bottom: 1px solid var(--border);
}
.integration-row:last-child { border-bottom: none; }
.integration-category {
  padding: 14px 16px;
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.04em;
  background: var(--bg-off);
  border-right: 1px solid var(--border);
  height: 100%;
  display: flex;
  align-items: center;
}
.integration-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
}
.integration-tag {
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--r-pill);
  padding: 4px 12px;
  white-space: nowrap;
}

/* ═══════════════════════════════════════════════
   PITCH — 課題 + VIETISの強み
═══════════════════════════════════════════════ */
.pitch-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: start;
}
.pitch-problem-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 32px;
}
.pitch-prob-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.pitch-prob-item:first-child { border-top: 1px solid var(--border); }
.pitch-prob-num {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.04em;
  padding-top: 3px;
  flex-shrink: 0;
}
.pitch-prob-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.6;
  color: var(--ink);
}
.pitch-solution-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 32px;
}
.pitch-sol-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.pitch-sol-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--blue-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--blue);
}
.pitch-sol-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
}
.pitch-sol-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════
   FLOW (導入サポートの流れ)
═══════════════════════════════════════════════ */
.flow-section { background: var(--bg-off); }
.flow-steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  margin-top: 48px;
  position: relative;
}
.flow-steps::before {
  content: '';
  position: absolute;
  top: 28px;
  left: calc(10% + 20px);
  right: calc(10% + 20px);
  height: 1px;
  background: var(--border);
}
.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 8px;
  position: relative;
  z-index: 1;
}
.flow-step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--bg);
  border: 1.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--en);
  font-size: 13px;
  font-weight: 700;
  color: var(--subtle);
  margin-bottom: 16px;
  flex-shrink: 0;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}
.flow-step.active .flow-step-num {
  background: var(--blue);
  border-color: var(--blue);
  color: #fff;
}
.flow-step-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
  line-height: 1.4;
}
.flow-step-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
}

/* ═══════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════ */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 48px;
  border-top: 1px solid var(--border);
}
.faq-item {
  border-bottom: 1px solid var(--border);
}
.faq-q {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 24px 0;
  cursor: pointer;
  list-style: none;
}
.faq-q::-webkit-details-marker { display: none; }
.faq-q-mark {
  font-family: var(--en);
  font-size: 18px;
  font-weight: 700;
  color: var(--blue);
  flex-shrink: 0;
  padding-top: 1px;
  width: 20px;
}
.faq-q-text {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.55;
  flex: 1;
}
.faq-q-arrow {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--subtle);
  margin-top: 2px;
  transition: transform 0.25s var(--ease);
}
details[open] .faq-q-arrow { transform: rotate(180deg); }
.faq-a {
  padding: 0 0 24px 36px;
  font-size: 15px;
  color: var(--muted);
  line-height: 1.8;
}

/* ═══════════════════════════════════════════════
   WHY
═══════════════════════════════════════════════ */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 40px;
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
  .about-grid { grid-template-columns: 1fr; }
  .pitch-grid { grid-template-columns: 1fr; }
  .flow-steps { grid-template-columns: repeat(3, 1fr); row-gap: 40px; }
  .flow-steps::before { display: none; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-band-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .why-item:nth-child(2) { border-right: none; }
  .why-item:nth-child(1),
  .why-item:nth-child(2) { border-bottom: 1px solid var(--border); }
}
@media (max-width: 640px) {
  .flow-steps { grid-template-columns: repeat(2, 1fr); }
  .integration-row { grid-template-columns: 1fr; }
  .integration-category { border-right: none; border-bottom: 1px solid var(--border); height: auto; }
}
@media (max-width: 560px) {
  .why-grid { grid-template-columns: 1fr; }
  .why-item { border-right: none; border-bottom: 1px solid var(--border); }
  .why-item:last-child { border-bottom: none; }
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
  .cta-action-row { flex-direction: column; align-items: flex-start; gap: 12px; }
  .page-hero-cta { flex-direction: column; }
  .page-hero-cta .btn { width: 100%; justify-content: center; }
}

      `}</style>
<div className="page-hero">
  <div className="wrap">
    <div className="page-hero-inner">
      <nav className="breadcrumb" aria-label="パンくずリスト">
        <a href="/">トップ</a>
        <span className="breadcrumb-sep">/</span>
        <a href="/product">プロダクト</a>
        <span className="breadcrumb-sep">/</span>
        <span aria-current="page">Keyspider導入サポート</span>
      </nav>
      <h1 className="page-hero-h1 reveal">Keyspider<br />導入サポート</h1>
      <p className="page-hero-sub reveal d1">IDaaS・SaaS・社内システムのID管理を、まるごと自動化する。公式開発パートナーとして深い技術知見でご支援します。</p>
      <div className="page-hero-cta reveal d2">
        <a href="/consultation" className="btn btn-dark">無料相談を予約 <span className="btn-arrow">↗</span></a>
        <a href="/download" className="btn btn-outline">資料請求</a>
      </div>
    </div>
  </div>
</div>


<section className="section" aria-labelledby="about-h">
  <div className="wrap">
    <div className="about-grid">
      <div className="about-left reveal">
        <h2 className="h2" id="about-h" style={{marginBottom: '24px'}}>Keyspiderとは</h2>
        <p className="about-tagline">日本企業の複雑な組織・人事構造に合わせた<br />国産クラウドID管理サービス</p>
        <p className="about-body">Keyspider（キースパイダー）は、クラウドサービスとオンプレ社内システムを簡単にID連携し、「ユーザー管理」「複雑な階層組織管理」「社員属性による権限管理」を統合管理できます。人事異動対応・発令日対応・J-SOX対応・ゼロトラスト対応など、日本企業特有のID管理ニーズに応える機能を網羅しています。</p>
        <div className="about-award">
          <svg className="about-award-star" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M14 3l2.83 5.73 6.32.92-4.57 4.45 1.08 6.3L14 17.27l-5.66 2.98 1.08-6.3-4.57-4.45 6.32-.92L14 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
          </svg>
          <div className="about-award-text">
            <strong>ITトレンド年間ランキング</strong>
            ID管理ツール部門 3年連続第1位
          </div>
        </div>
      </div>
      <div className="about-right reveal d1">
        <div className="integrations">
          <p className="integrations-label">連携できる主なサービス</p>
          <div className="integrations-groups">
            <div className="integration-row">
              <span className="integration-category">IDaaS</span>
              <div className="integration-items">
                <span className="integration-tag">AzureAD</span>
                <span className="integration-tag">Okta</span>
                <span className="integration-tag">OneLogin</span>
                <span className="integration-tag">トラスト・ログイン</span>
              </div>
            </div>
            <div className="integration-row">
              <span className="integration-category">SaaS</span>
              <div className="integration-items">
                <span className="integration-tag">Office365</span>
                <span className="integration-tag">Salesforce</span>
                <span className="integration-tag">Google Workspace</span>
                <span className="integration-tag">Box</span>
              </div>
            </div>
            <div className="integration-row">
              <span className="integration-category">認証DB</span>
              <div className="integration-items">
                <span className="integration-tag">Active Directory</span>
                <span className="integration-tag">LDAP</span>
              </div>
            </div>
            <div className="integration-row">
              <span className="integration-category">オンプレ</span>
              <div className="integration-items">
                <span className="integration-tag">人事システム</span>
                <span className="integration-tag">各種業務システム</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="pitch-h">
  <div className="wrap">
    <div className="pitch-grid">
      <div className="pitch-left">
        <h2 className="h2 reveal" id="pitch-h" style={{fontSize: 'clamp(1.5rem,2.2vw,2.2rem)'}}>こんな課題はありませんか</h2>
        <div className="pitch-problem-list">
          <div className="pitch-prob-item reveal d1"><p className="pitch-prob-text">社員の入退社・異動のたびに、複数システムを手作業で更新している</p></div>
          <div className="pitch-prob-item reveal d2"><p className="pitch-prob-text">IDaaSを導入したいが、全システムへのユーザー登録の手間が膨大</p></div>
          <div className="pitch-prob-item reveal d3"><p className="pitch-prob-text">システムが増えるたびにID管理の工数が増え、棚卸しが追いつかない</p></div>
          <div className="pitch-prob-item reveal d4"><p className="pitch-prob-text">組織変更の際に権限設定の漏れ・ミスが発生し、セキュリティが不安</p></div>
          <div className="pitch-prob-item"><p className="pitch-prob-text">J-SOX対応や監査ログの整備を急ぎたいが、リソースが足りない</p></div>
        </div>
      </div>
      <div className="pitch-right">
        <h2 className="h2 reveal" style={{fontSize: 'clamp(1.5rem,2.2vw,2.2rem)', color: 'var(--blue)', marginBottom: '0'}}>VIETISが選ばれる理由</h2>
        <div className="pitch-solution-list">
          <div className="pitch-sol-item reveal d1">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 1 1 0 16A8 8 0 0 1 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">公式開発パートナーとしての深い技術知見</div>
              <div className="pitch-sol-desc">VIETISはKeyspiderの継続的なシステム開発に直接携わっており、内部構造や仕様を熟知。一般的な導入設定だけでなく、難易度の高い障害対応まで迅速に対応可能です。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d2">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h14M3 10h10M3 14h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">要件定義からAPI連携まで一気通貫</div>
              <div className="pitch-sol-desc">「標準機能では自社の業務フローに合わない」「古い社内システムとAPI連携したい」といった課題をクリアにします。コンサルから実装まで同一チームが担うため、窓口が分散しません。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d3">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2l1.5 3 3.3.5-2.4 2.3.6 3.3L10 9.5 7 11.1l.6-3.3L5.2 5.5l3.3-.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14h12M6 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">CMMI Lv.3・ISO 27001準拠の品質管理</div>
              <div className="pitch-sol-desc">ID情報・人事情報という最も機密性の高いデータを扱うプロジェクトだからこそ、高い品質基準と徹底した情報セキュリティ管理体制のもとで安全に遂行します。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section flow-section" aria-labelledby="flow-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="flow-h">導入サポートの流れ</h2>
    <div className="flow-steps">
      <div className="flow-step active reveal">
        <div className="flow-step-num">01</div>
        <div className="flow-step-title">現状ヒアリング・要件整理</div>
        <div className="flow-step-desc">現在のID管理フロー・連携対象システム・組織構造を確認し、要件を整理します</div>
      </div>
      <div className="flow-step reveal d1">
        <div className="flow-step-num">02</div>
        <div className="flow-step-title">導入設計・初期セットアップ</div>
        <div className="flow-step-desc">Keyspiderの環境構築、連携サービス設定、組織・権限情報のインポートを実施します</div>
      </div>
      <div className="flow-step reveal d2">
        <div className="flow-step-num">03</div>
        <div className="flow-step-title">カスタマイズ開発</div>
        <div className="flow-step-desc">開発パートナーの強みを活かし、機能追加や外部システムとのAPI連携開発を行います</div>
      </div>
      <div className="flow-step reveal d3">
        <div className="flow-step-num">04</div>
        <div className="flow-step-title">テスト・リリース支援</div>
        <div className="flow-step-desc">動作検証から本番リリースまでを支援。ユーザー向け操作説明資料の整備も対応します</div>
      </div>
      <div className="flow-step reveal d4">
        <div className="flow-step-num">05</div>
        <div className="flow-step-title">運用保守・継続改善</div>
        <div className="flow-step-desc">リリース後の保守、組織変更や連携システムの追加にも柔軟に並走サポートします</div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="faq-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="faq-h">よくある質問</h2>
    <div className="faq-list">

      <details className="faq-item reveal d1">
        <summary className="faq-q">
          <span className="faq-q-mark">Q</span>
          <span className="faq-q-text">Keyspiderを既に契約しています。導入設定やカスタマイズだけ依頼できますか？</span>
          <svg className="faq-q-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className="faq-a">はい、対応可能です。既存のKeyspiderライセンスをお持ちの場合でも、初期設定・連携設定・カスタマイズ開発のみのご依頼を承ります。まずはお気軽にご相談ください。</p>
      </details>

      <details className="faq-item reveal d2">
        <summary className="faq-q">
          <span className="faq-q-mark">Q</span>
          <span className="faq-q-text">どのくらいの期間で導入できますか？</span>
          <svg className="faq-q-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className="faq-a">連携するシステム数やカスタマイズの有無によって異なりますが、標準的な導入であれば2〜3ヶ月が目安となります。要件整理後に詳細なスケジュールをご提案します。</p>
      </details>

      <details className="faq-item reveal d3">
        <summary className="faq-q">
          <span className="faq-q-mark">Q</span>
          <span className="faq-q-text">オンプレミスの独自社内システムとも連携できますか？</span>
          <svg className="faq-q-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className="faq-a">はい。API連携またはRPAを活用し、オンプレミスシステムへの連携に対応します。対象システムの仕様を確認した上で最適なプランをご提案します。</p>
      </details>

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
        <p className="cta-sub reveal d1">「自社のシステム構成で連携できるか知りたい」「リソースが足りず困っている」など、現場のリアルな課題をお聞かせください。</p>
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
      <FaqInit />
    </>
  );
}
