import type { Metadata } from 'next';
import FaqInit from '@/components/FaqInit';

export const metadata: Metadata = {
  title: 'AI/DX Driving Suite｜VIETISジャパン',
  description: '企業のフェーズに合わせたAI/DX推進伴走サービス。月額契約で専任チームが継続支援。AIアドバイザリー・AIラボ・フルスタックの3プランから選択可能。',
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
  --bg-mid:    #F5F5F5;
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
.section { padding: clamp(72px, 10vw, 120px) 0; }
.section-bordered { border-top: 1px solid var(--border); }

/* ─── TYPOGRAPHY ──────────────────────────────── */
.h2 {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-wrap: balance;
}
.body-lead {
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--ink);
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
  font-size: 16px;
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
.btn-dark {
  background: var(--ink-dark);
  color: #fff;
  border-color: var(--ink-dark);
}
.btn-dark:hover { background: #000; border-color: #000; }
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
html.js-ready .will-animate {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
}
html.js-ready .will-animate.in {
  opacity: 1;
  transform: none;
}
html.js-ready .will-animate.d1 { transition-delay: 0.07s; }
html.js-ready .will-animate.d2 { transition-delay: 0.14s; }
html.js-ready .will-animate.d3 { transition-delay: 0.21s; }
html.js-ready .will-animate.d4 { transition-delay: 0.28s; }
@media (prefers-reduced-motion: reduce) {
  html.js-ready .will-animate { transition: none !important; }
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
.header-actions { display: flex; align-items: center; gap: 8px; }
.header-actions .btn { padding: 9px 20px; font-size: 13px; }
.header-lang {
  display: flex; align-items: center; gap: 5px;
  font-family: var(--en); font-size: 11px; font-weight: 700; color: var(--subtle);
}
.header-lang a { color: var(--subtle); transition: color 0.15s; }
.header-lang a:hover { color: var(--ink); }
.header-lang a.active { color: var(--ink); }
.header-lang span { color: var(--border); }
.hamburger {
  display: none; flex-direction: column; justify-content: center; align-items: center;
  gap: 5px; width: 40px; height: 40px; background: none; border: none; cursor: pointer; padding: 0;
}
.hamburger span {
  display: block; width: 22px; height: 1.5px; background: var(--ink);
  transition: transform 0.2s var(--ease), opacity 0.2s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
@media (max-width: 768px) {
  .header-nav { display: none; }
  .header-lang { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }
}

/* Mobile Nav */
.mobile-nav {
  position: fixed; top: 72px; left: 0; right: 0; bottom: 0;
  background: #fff; z-index: 99; padding: 32px var(--gutter);
  display: flex; flex-direction: column; gap: 32px;
  transform: translateX(100%); transition: transform 0.3s var(--ease);
  overflow-y: auto;
}
.mobile-nav.open { transform: none; }
.mobile-nav-list { display: flex; flex-direction: column; gap: 0; }
.mobile-nav-list a {
  font-size: 22px; font-weight: 700; color: var(--ink);
  padding: 16px 0; border-bottom: 1px solid var(--border);
  display: block;
}
.mobile-nav-lang { display: flex; gap: 12px; font-family: var(--en); font-size: 13px; font-weight: 700; }
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-actions { display: flex; flex-direction: column; gap: 10px; margin-top: auto; }
.mobile-nav-actions .btn { justify-content: center; }

/* ═══════════════════════════════════════════════
   PAGE HERO (dark)
═══════════════════════════════════════════════ */
.page-hero {
  background: var(--ink-dark);
  padding-top: 72px;
  overflow: hidden;
  position: relative;
}
.page-hero-video {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.22;
  pointer-events: none;
}
.page-hero::before {
  content: '';
  position: absolute;
  top: -120px; right: -80px;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(43,73,231,0.18) 0%, transparent 70%);
  pointer-events: none;
}
.page-hero-inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(56px, 8vw, 100px) var(--gutter) clamp(64px, 10vw, 120px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: end;
}
.page-hero-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--en);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 28px;
  text-transform: uppercase;
}
.page-hero-breadcrumb a { color: rgba(255,255,255,0.4); transition: color 0.15s; }
.page-hero-breadcrumb a:hover { color: rgba(255,255,255,0.7); }
.page-hero-breadcrumb span { color: rgba(255,255,255,0.2); }
.page-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
  background: rgba(43,73,231,0.14);
  border: 1px solid rgba(43,73,231,0.3);
  padding: 5px 12px;
  border-radius: var(--r-pill);
  margin-bottom: 20px;
}
.page-hero-h1 {
  font-size: clamp(2.4rem, 4.5vw, 5.5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #fff;
  margin-bottom: 20px;
  text-wrap: balance;
}
.page-hero-sub {
  font-size: clamp(15px, 1.4vw, 17px);
  color: rgba(255,255,255,0.9);
  line-height: 1.85;
  max-width: 46ch;
  text-wrap: pretty;
  margin-bottom: 36px;
}
.page-hero-ctas {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.page-hero-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: center;
}
.hero-stat-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.hero-stat-box {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: var(--r);
  padding: 24px 20px;
}
.hero-stat-n {
  font-family: var(--en);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-bottom: 6px;
}
.hero-stat-n span { font-size: 0.5em; color: rgba(255,255,255,0.5); }
.hero-stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  line-height: 1.4;
}
.hero-quote-box {
  background: rgba(43,73,231,0.12);
  border: 1px solid rgba(43,73,231,0.25);
  border-radius: var(--r);
  padding: 24px 24px;
}
.hero-quote-text {
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  font-weight: 500;
}
.hero-quote-src {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
}
.hero-quote-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: rgba(43,73,231,0.3);
  border: 1px solid rgba(255,255,255,0.12);
}
.hero-quote-avatar svg {
  width: 100%;
  height: 100%;
}
.hero-quote-src-text {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
}
@media (max-width: 900px) {
  .page-hero-inner { grid-template-columns: 1fr; }
  .page-hero-right { display: none; }
}

/* ═══════════════════════════════════════════════
   OVERVIEW (what is it)
═══════════════════════════════════════════════ */
.overview-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 8vw, 100px);
  align-items: center;
}
.overview-left { }
.overview-tag {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.overview-tag::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 2px;
  background: var(--blue);
}
.overview-h2 {
  font-size: clamp(1.8rem, 3.2vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  text-wrap: balance;
}
.overview-body {
  font-size: clamp(14px, 1.4vw, 16px);
  color: var(--ink);
  line-height: 1.85;
  text-wrap: pretty;
}
.overview-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.overview-point {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 20px;
  background: var(--bg-mid);
  border-radius: var(--r);
}
.overview-point-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  border: 1px solid var(--border);
}
.overview-point-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
}
.overview-point-body {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.6;
}
@media (max-width: 900px) {
  .overview-inner { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════
   PLANS
═══════════════════════════════════════════════ */
.plans-bg {
  background: var(--bg-mid);
}
.plans-head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: end;
  margin-bottom: clamp(40px, 5vw, 60px);
}
.plans-head-right {
  font-size: 16px;
  color: var(--ink);
  line-height: 1.8;
  padding-bottom: 6px;
}
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  align-items: stretch;
}

/* Plan card */
.plan-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--r);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease);
  position: relative;
}
.plan-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.plan-card.featured {
  border-color: var(--blue);
}
.plan-badge-bar {
  border-radius: calc(var(--r) - 1px) calc(var(--r) - 1px) 0 0;
  padding: 8px 0;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
}
.plan-badge-bar--active {
  background: var(--blue);
  color: #fff;
}
.plan-badge-bar--ghost {
  background: transparent;
  pointer-events: none;
}
.plan-header {
  padding: 28px 24px 20px;
  border-bottom: 1px solid var(--border);
}
.plan-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
  margin-bottom: 10px;
  white-space: nowrap;
  text-align: center;
}
.plan-card.featured .plan-name { color: var(--blue); }
.plan-lead {
  font-size: 16px;
  color: var(--ink);
  line-height: 1.65;
}
.plan-price-row {
  display: flex;
  align-items: baseline;
  gap: 4px;
  padding: 20px 24px 0;
  justify-content: center;
}
.plan-price-num {
  font-family: var(--en);
  font-size: clamp(2rem, 2.6vw, 2.8rem);
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.03em;
  line-height: 1;
}
.plan-card.featured .plan-price-num { color: var(--blue); }
.plan-price-unit {
  font-size: 16px;
  color: var(--muted);
  font-weight: 500;
}
.plan-period {
  text-align: center;
  font-size: 12px;
  color: var(--subtle);
  padding: 6px 24px 0;
}
.plan-divider {
  height: 1px;
  background: var(--border);
  margin: 20px 24px;
}
.plan-features {
  padding: 0 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.plan-feature {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 16px;
  color: var(--ink);
  line-height: 1.5;
}
.plan-feature-check {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--blue-pale);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1px;
}
.plan-feature-check svg { color: var(--blue); }
.plan-card.featured .plan-feature-check {
  background: var(--blue);
}
.plan-card.featured .plan-feature-check svg { color: #fff; }
.plan-footer {
  padding: 20px 24px;
  margin-top: auto;
}
.plan-btn {
  display: block;
  text-align: center;
  padding: 11px 20px;
  font-size: 16px;
  font-weight: 700;
  border-radius: var(--r-btn);
  border: 1.5px solid var(--border);
  color: var(--ink);
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}
.plan-btn:hover { border-color: var(--ink); }
.plan-card.featured .plan-btn {
  background: var(--blue);
  color: #fff;
  border-color: var(--blue);
}
.plan-card.featured .plan-btn:hover { background: #1e37d0; border-color: #1e37d0; }
.plan-note {
  text-align: center;
  font-size: 11px;
  color: var(--subtle);
  margin-top: 6px;
}
@media (max-width: 1024px) {
  .plans-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .plans-head { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════
   FLOW (how it works)
═══════════════════════════════════════════════ */
.flow-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: clamp(40px, 5vw, 60px);
}
.flow-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
}
.flow-grid::before {
  content: '';
  position: absolute;
  top: 30px;
  left: calc(12.5% + 14px);
  right: calc(12.5% + 14px);
  height: 1px;
  background: var(--border);
  z-index: 0;
}
.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  position: relative;
  z-index: 1;
}
.flow-n {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--ink-dark);
  color: #fff;
  font-family: var(--en);
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0;
  border: 4px solid var(--bg);
  box-shadow: 0 0 0 1px var(--border);
}
.flow-step:nth-child(2) .flow-n,
.flow-step:nth-child(3) .flow-n { background: var(--blue); }
.flow-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}
.flow-body {
  font-size: 16px;
  color: var(--muted);
  line-height: 1.65;
}
@media (max-width: 768px) {
  .flow-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  .flow-grid::before { display: none; }
}
@media (max-width: 480px) {
  .flow-grid { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════
   COMPARISON TABLE
═══════════════════════════════════════════════ */
.compare-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.compare-table {
  width: 100%;
  min-width: 640px;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
  font-size: 16px;
}
.compare-table th,
.compare-table td {
  padding: 14px 20px;
  text-align: center;
  border-bottom: 1px solid var(--border);
}
.compare-table thead th:first-child,
.compare-table tbody td:first-child {
  text-align: left;
}
.compare-table tr:last-child td { border-bottom: none; }
.compare-table thead th {
  background: #fff;
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  white-space: nowrap;
}
.compare-table thead th.featured-col {
  background: var(--blue);
  color: #fff;
}
.compare-table tbody td { color: var(--muted); background: #fff; }
.compare-table tbody td:first-child { color: var(--ink); font-weight: 600; }
.compare-table tbody td.featured-col { background: var(--blue-pale); color: var(--blue); font-weight: 600; }
.compare-table tbody tr:hover td { background: var(--bg-off); }
.compare-table tbody tr:hover td.featured-col { background: var(--blue-pale); }
.check-icon { color: var(--blue); font-size: 16px; }
.dash-icon { color: var(--border); font-size: 16px; }

/* ═══════════════════════════════════════════════
   FAQ
═══════════════════════════════════════════════ */
.faq-section { background: var(--bg-mid); }
.faq-inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: clamp(40px, 6vw, 80px);
}
.faq-left { }
.faq-left-h { font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 700; letter-spacing: -0.03em; line-height: 1.2; margin-bottom: 16px; white-space: nowrap; }
.faq-left-sub { font-size: 16px; color: var(--muted); line-height: 1.7; }
.faq-list { display: flex; flex-direction: column; }
.faq-item {
  border-bottom: 1px solid var(--border);
}
.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: var(--ink);
  user-select: none;
  transition: color 0.15s;
}
.faq-q:hover { color: var(--blue); }
.faq-q-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background: var(--bg-mid);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  transition: background 0.2s, border-color 0.2s;
  position: relative;
}
.faq-q-icon::before,
.faq-q-icon::after {
  content: '';
  position: absolute;
  background: var(--muted);
  border-radius: 2px;
  transition: transform 0.25s var(--ease), opacity 0.2s;
}
.faq-q-icon::before {
  width: 10px;
  height: 1.5px;
}
.faq-q-icon::after {
  width: 1.5px;
  height: 10px;
}
.faq-item.open .faq-q-icon {
  background: var(--blue);
  border-color: var(--blue);
}
.faq-item.open .faq-q-icon::before,
.faq-item.open .faq-q-icon::after {
  background: #fff;
}
.faq-item.open .faq-q-icon::after {
  transform: scaleY(0);
  opacity: 0;
}
.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s var(--ease);
}
.faq-a-inner {
  padding-bottom: 20px;
  font-size: 16px;
  color: var(--muted);
  line-height: 1.8;
}
@media (max-width: 768px) {
  .faq-inner { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════
   CTA BAND
═══════════════════════════════════════════════ */
.cta-band {
  background: var(--ink-dark);
  padding: clamp(56px, 12vw, 140px) 0;
}
.cta-band-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
.cta-head {
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #fff;
  line-height: 1.05;
  text-wrap: balance;
  margin-bottom: 4px;
}
.cta-sub {
  font-size: clamp(15px, 1.4vw, 16px);
  color: rgba(255,255,255,0.48);
  margin-top: 18px;
  line-height: 1.8;
  max-width: 42ch;
}
.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 0;
}
.cta-action-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: clamp(20px, 3vw, 28px) 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.cta-action-row:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
.cta-action-title { font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 4px; }
.cta-action-desc { font-size: 16px; color: rgba(255,255,255,0.38); line-height: 1.6; }
.cta-action-row .btn { flex-shrink: 0; font-size: 14px; padding: 10px 20px; }
@media (max-width: 768px) {
  .cta-band-inner { grid-template-columns: 1fr; }
}

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
.footer {
  background: #0A0A0F;
  padding: clamp(48px, 7vw, 80px) 0 0;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  padding-bottom: clamp(40px, 5vw, 60px);
}
.footer-logo { margin-bottom: 16px; }
.footer-logo svg { height: 28px; width: auto; }
.footer-tagline {
  font-size: 16px;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
  margin-bottom: 16px;
}
.footer-address {
  font-size: 11px;
  font-style: normal;
  color: rgba(255,255,255,0.22);
  line-height: 1.7;
}
.footer-col-label {
  font-family: var(--en);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  margin-bottom: 12px;
}
.footer-links { display: flex; flex-direction: column; gap: 8px; }
.footer-links a {
  font-size: 16px;
  color: rgba(255,255,255,0.62);
  transition: color 0.15s;
}
.footer-links a:hover { color: #fff; }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.07);
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.footer-copy {
  font-family: var(--en);
  font-size: 11px;
  color: rgba(255,255,255,0.16);
}
.footer-legal { display: flex; gap: 20px; }
.footer-legal a {
  font-size: 11px;
  color: rgba(255,255,255,0.22);
  transition: color 0.15s;
}
.footer-legal a:hover { color: rgba(255,255,255,0.5); }
@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}

      `}</style>
<section className="page-hero" aria-label="AI/DX Driving Suite">
  <video className="page-hero-video" autoPlay muted playsInline loop preload="none" aria-hidden="true">
    <source src="/videos/ai_driving_suite.webm" type="video/webm" />
    <source src="/videos/ai_driving_suite.mp4" type="video/mp4" />
  </video>
  <div className="page-hero-inner wrap">
    <div className="page-hero-left">
      <nav className="page-hero-breadcrumb" aria-label="パンくずリスト">
        <a href="../../index.html">トップ</a>
        <span>/</span>
        <a href="#">サービス</a>
        <span>/</span>
        <span style={{color: 'rgba(255,255,255,0.65)'}}>AI/DX Driving Suite</span>
      </nav>
      <p className="page-hero-badge reveal">月額伴走サービス</p>
      <h1 className="page-hero-h1 reveal d1">AI/DX<br />Driving Suite</h1>
      <p className="page-hero-sub reveal d2">企業のフェーズに合わせた、AI/DX推進伴走サービス。月額契約で専任チームが継続的に支援します。</p>
      <div className="page-hero-ctas reveal d3">
        <a href="/consultation" className="btn btn-primary">無料相談を予約 <span className="btn-arrow">↗</span></a>
        <a href="#plans" className="btn btn-outline-white">プランを見る</a>
      </div>
    </div>
    <div className="page-hero-right reveal d2" aria-hidden="true">
      <div className="hero-stat-row">
        <div className="hero-stat-box">
          <div className="hero-stat-n">350<span>件+</span></div>
          <div className="hero-stat-label">累計プロジェクト<br />実績</div>
        </div>
        <div className="hero-stat-box">
          <div className="hero-stat-n">300<span>名+</span></div>
          <div className="hero-stat-label">在籍エンジニア数</div>
        </div>
      </div>
      <div className="hero-quote-box">
        <div className="hero-quote-text">「自社にエンジニアがいなくても、VIETISのチームが戦略から開発・運用まで一気通貫で対応してくれるので、DX推進のスピードが格段に上がりました。」</div>
        <div className="hero-quote-src">
          <div className="hero-quote-avatar">
            <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" fill="rgba(43,73,231,0.3)"/>
              <circle cx="18" cy="14" r="6" fill="rgba(255,255,255,0.45)"/>
              <ellipse cx="18" cy="28" rx="10" ry="6" fill="rgba(255,255,255,0.3)"/>
            </svg>
          </div>
          <span className="hero-quote-src-text">大手製造業 DX推進部門 担当者</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section-bordered" aria-labelledby="overview-h">
  <div className="wrap overview-inner">
    <div className="overview-left">
      <div className="overview-tag reveal">このサービスについて</div>
      <h2 className="overview-h2 reveal d1" id="overview-h">伴走するから、<br />続けられる。</h2>
      <p className="overview-body reveal d2">
        DXやAI導入は、単発のシステム開発では完結しません。戦略立案・技術選定・実装・運用改善のサイクルを継続して回す体制が必要です。<br /><br />
        AI/DX Driving Suiteは、月額契約で専任チームが貴社に伴走。フェーズや予算に応じた3プランから選べます。
      </p>
    </div>
    <div className="overview-right">
      <div className="overview-point reveal">
        <div className="overview-point-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div>
          <div className="overview-point-title">専任チームが継続的に対応</div>
          <div className="overview-point-body">PMとエンジニアが固定アサイン。プロジェクトの文脈を引き継ぎながら継続支援します。</div>
        </div>
      </div>
      <div className="overview-point reveal d1">
        <div className="overview-point-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <div>
          <div className="overview-point-title">フェーズに合わせた3プラン</div>
          <div className="overview-point-body">技術顧問のみの軽量プランから、戦略・設計・開発・運用を全包括するフルスタックプランまで。</div>
        </div>
      </div>
      <div className="overview-point reveal d2">
        <div className="overview-point-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <div>
          <div className="overview-point-title">CMMI Level 3の品質管理体制</div>
          <div className="overview-point-body">国際認証に基づくプロセス管理。日本人PMが品質と進捗を監視し、グローバルチームと連携します。</div>
        </div>
      </div>
      <div className="overview-point reveal d3">
        <div className="overview-point-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div>
          <div className="overview-point-title">月額固定で予算が読める</div>
          <div className="overview-point-body">都度発注の変動リスクがない。経営計画に組み込みやすい月額制でDX投資を継続します。</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section plans-bg" id="plans" aria-labelledby="plans-h">
  <div className="wrap">
    <div className="plans-head">
      <div>
        <h2 className="h2 reveal" id="plans-h" style={{whiteSpace: 'nowrap'}}>選べる3つのプラン</h2>
      </div>
      <p className="plans-head-right reveal d1">
        貴社のDX推進フェーズや体制に合わせて選択。最短3ヶ月から開始でき、フェーズに応じてプランの変更も可能です。すべてのプランで日本人PMが窓口を担当します。
      </p>
    </div>

    <div className="plans-grid">

      
      <div className="plan-card reveal">
        <div className="plan-badge-bar plan-badge-bar--ghost" aria-hidden="true"></div>
        <div className="plan-header">
          <div className="plan-name">AIアドバイザリープラン</div>
          <div className="plan-lead">社内チームに技術顧問が伴走。AI導入の方向性を固める。</div>
        </div>
        <div className="plan-price-row">
          <span className="plan-price-num">30</span>
          <span className="plan-price-unit">万円/月〜</span>
        </div>
        <div className="plan-period">契約期間 3ヶ月〜</div>
        <div className="plan-divider"></div>
        <ul className="plan-features">
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            AI戦略の立案・技術選定支援
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            週次MTGでのチームへのフィードバック
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            コードレビュー・技術検証の伴走
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            AI/DXロードマップ策定
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            月次進捗レポート提供
          </li>
        </ul>
        <div className="plan-footer">
          <a href="/consultation" className="plan-btn">詳しく相談する ↗</a>
          <div className="plan-note">まず3ヶ月から試せます</div>
        </div>
      </div>

      
      <div className="plan-card featured reveal d1">
        <div className="plan-badge-bar plan-badge-bar--active">おすすめ</div>
        <div className="plan-header">
          <div className="plan-name">AIラボプラン</div>
          <div className="plan-lead">PM＋コアエンジニアの専任チームで、アジャイル開発を推進。</div>
        </div>
        <div className="plan-price-row">
          <span className="plan-price-num">80</span>
          <span className="plan-price-unit">万円/月〜</span>
        </div>
        <div className="plan-period">契約期間 3ヶ月〜</div>
        <div className="plan-divider"></div>
        <ul className="plan-features">
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            アドバイザリープランの全内容を含む
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            専任PM＋エンジニア2〜3名のチーム体制
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            AIシステム・業務システムの実装開発
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            アジャイル2週間スプリントで継続改善
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            RAG・生成AI統合・エージェント開発
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            品質保証・テスト・デプロイ対応
          </li>
        </ul>
        <div className="plan-footer">
          <a href="/consultation" className="plan-btn">詳しく相談する ↗</a>
          <div className="plan-note" style={{color: 'var(--blue)', opacity: '0.7'}}>最も選ばれているプランです</div>
        </div>
      </div>

      
      <div className="plan-card reveal d2">
        <div className="plan-badge-bar plan-badge-bar--ghost" aria-hidden="true"></div>
        <div className="plan-header">
          <div className="plan-name">AI/DXフルスタックプラン</div>
          <div className="plan-lead">戦略からインフラ・開発・運用まで、全レイヤーを包括対応。</div>
        </div>
        <div className="plan-price-row">
          <span className="plan-price-num">150</span>
          <span className="plan-price-unit">万円/月〜</span>
        </div>
        <div className="plan-period">契約期間 6ヶ月〜</div>
        <div className="plan-divider"></div>
        <ul className="plan-features">
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            AIラボプランの全内容を含む
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            DX戦略立案から経営層へのレポーティング
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            UI/UXデザイン・フロントエンド開発
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            クラウドインフラ構築・セキュリティ設計
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            システム運用・監視・改善の継続対応
          </li>
          <li className="plan-feature">
            <span className="plan-feature-check"><svg width="8" height="6" viewBox="0 0 8 6" fill="none"><polyline points="1,3 3,5 7,1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            専任PMO体制でのプロジェクト統括
          </li>
        </ul>
        <div className="plan-footer">
          <a href="/consultation" className="plan-btn">詳しく相談する ↗</a>
          <div className="plan-note">大規模DX推進に最適</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section-bordered" aria-labelledby="flow-h">
  <div className="wrap">
    <div className="flow-head">
      <h2 className="h2 reveal" id="flow-h">開始までの流れ</h2>
      <p className="body-lead reveal d1">相談から最短2週間でチームをアサインし、伴走を開始します。</p>
    </div>
    <div className="flow-grid">
      <div className="flow-step reveal">
        <div className="flow-n">01</div>
        <div className="flow-title">無料相談</div>
        <div className="flow-body">オンライン30分。現状の課題とDX推進の目標をヒアリングします。</div>
      </div>
      <div className="flow-step reveal d1">
        <div className="flow-n">02</div>
        <div className="flow-title">プラン提案</div>
        <div className="flow-body">フェーズと予算に合わせた最適なプランとチーム構成を提案します。</div>
      </div>
      <div className="flow-step reveal d2">
        <div className="flow-n">03</div>
        <div className="flow-title">契約・キックオフ</div>
        <div className="flow-body">契約締結後、専任チームをアサイン。最短2週間でキックオフします。</div>
      </div>
      <div className="flow-step reveal d3">
        <div className="flow-n">04</div>
        <div className="flow-title">伴走スタート</div>
        <div className="flow-body">定例MTG・週次レポートを軸に、継続的なAI/DX推進を開始します。</div>
      </div>
    </div>
  </div>
</section>


<section className="section plans-bg section-bordered" aria-labelledby="compare-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="compare-h" style={{marginBottom: 'clamp(32px,4vw,48px)'}}>プラン比較</h2>
    <div className="compare-wrap reveal d1">
      <table className="compare-table">
        <thead>
          <tr>
            <th style={{width: '34%'}}>内容</th>
            <th>AIアドバイザリー<br /><span style={{fontSize: '11px', fontWeight: '400', opacity: '0.6'}}>30万円/月〜</span></th>
            <th className="featured-col">AIラボ<br /><span style={{fontSize: '11px', fontWeight: '400', opacity: '0.75'}}>80万円/月〜</span></th>
            <th>AI/DXフルスタック<br /><span style={{fontSize: '11px', fontWeight: '400', opacity: '0.6'}}>150万円/月〜</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI戦略立案・技術選定</td>
            <td><span className="check-icon">✓</span></td>
            <td className="featured-col"><span className="check-icon">✓</span></td>
            <td><span className="check-icon">✓</span></td>
          </tr>
          <tr>
            <td>コードレビュー・技術顧問</td>
            <td><span className="check-icon">✓</span></td>
            <td className="featured-col"><span className="check-icon">✓</span></td>
            <td><span className="check-icon">✓</span></td>
          </tr>
          <tr>
            <td>専任チームによる開発実装</td>
            <td><span className="dash-icon">-</span></td>
            <td className="featured-col"><span className="check-icon">✓</span></td>
            <td><span className="check-icon">✓</span></td>
          </tr>
          <tr>
            <td>UI/UXデザイン</td>
            <td><span className="dash-icon">-</span></td>
            <td className="featured-col"><span className="check-icon">✓</span></td>
            <td><span className="check-icon">✓</span></td>
          </tr>
          <tr>
            <td>インフラ・クラウド構築</td>
            <td><span className="dash-icon">-</span></td>
            <td className="featured-col"><span className="check-icon">✓</span></td>
            <td><span className="check-icon">✓</span></td>
          </tr>
          <tr>
            <td>システム運用・保守</td>
            <td><span className="dash-icon">-</span></td>
            <td className="featured-col"><span className="dash-icon">-</span></td>
            <td><span className="check-icon">✓</span></td>
          </tr>
          <tr>
            <td>最短契約期間</td>
            <td>3ヶ月</td>
            <td className="featured-col">3ヶ月</td>
            <td>6ヶ月</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<section className="section faq-section" aria-labelledby="faq-h">
  <div className="wrap faq-inner">
    <div className="faq-left">
      <h2 className="faq-left-h reveal" id="faq-h">よくあるご質問</h2>
      <p className="faq-left-sub reveal d1">その他のご質問は、無料相談にてお気軽にどうぞ。</p>
      <div style={{marginTop: '28px'}} className="reveal d2">
        <a href="/consultation" className="btn btn-dark" style={{fontSize: '13px'}}>相談する <span className="btn-arrow">↗</span></a>
      </div>
    </div>
    <div className="faq-list reveal d1">
      <div className="faq-item open">
        <div className="faq-q" tabIndex={0} role="button" aria-expanded="true">
          どのプランから始めるべきか分かりません
          <span className="faq-q-icon" aria-hidden="true"></span>
        </div>
        <div className="faq-a" style={{maxHeight: '200px'}}>
          <div className="faq-a-inner">
            無料相談でヒアリングした上でご提案します。一般的に、社内にエンジニアがいて方向性だけ固めたい場合はアドバイザリープラン、実装まで任せたい場合はAIラボプランが適しています。詳細は相談でお伝えします。
          </div>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" tabIndex={0} role="button" aria-expanded="false">
          途中でプランを変更することはできますか
          <span className="faq-q-icon" aria-hidden="true"></span>
        </div>
        <div className="faq-a">
          <div className="faq-a-inner">
            はい、可能です。DXの進捗に合わせてプランのアップグレードやダウングレードを柔軟に対応しています。契約更新のタイミングでご相談ください。
          </div>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" tabIndex={0} role="button" aria-expanded="false">
          社内にエンジニアがいなくても大丈夫ですか
          <span className="faq-q-icon" aria-hidden="true"></span>
        </div>
        <div className="faq-a">
          <div className="faq-a-inner">
            はい、問題ありません。AIラボプランおよびフルスタックプランでは、開発・インフラ・運用まで一式VIETISのチームが対応します。貴社側は窓口担当者1名いれば進行できます。
          </div>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" tabIndex={0} role="button" aria-expanded="false">
          契約期間中に解約できますか
          <span className="faq-q-icon" aria-hidden="true"></span>
        </div>
        <div className="faq-a">
          <div className="faq-a-inner">
            最短契約期間（3〜6ヶ月）の満了後は、1ヶ月前の通知で解約可能です。プロジェクトの状況に応じて、段階的な縮小や他サービスへの移行も柔軟に対応しています。
          </div>
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-q" tabIndex={0} role="button" aria-expanded="false">
          業種や規模の制限はありますか
          <span className="faq-q-icon" aria-hidden="true"></span>
        </div>
        <div className="faq-a">
          <div className="faq-a-inner">
            業種・規模を問わず対応しています。製造・教育・金融・流通など多様な業種での実績があります。まず無料相談でご状況をお聞かせください。
          </div>
        </div>
      </div>
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
