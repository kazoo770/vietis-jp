import type { Metadata } from 'next';
import FaqInit from '@/components/FaqInit';

export const metadata: Metadata = {
  title: 'Menraku｜AI採用支援で選考を自動化 - VIETISジャパン',
  description: '書類選考からAI面接・評価まで24時間365日完全自動化。採用担当者が「見極め・口説く」本質業務に集中できる環境をVIETISが構築します。',
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
  --red-pale:  #FFF0F3;
  --ink:       #1A1C23;
  --ink-dark:  #0F1117;
  --muted:     #555B6E;
  --subtle:    #8B92A5;
  --bg:        #FFFFFF;
  --bg-off:    #F7F8FC;
  --bg-mid:    #F0F2F8;
  --border:    #E4E7EF;
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
.btn-red {
  background: var(--red);
  color: #fff;
  border-color: var(--red);
}
.btn-red:hover { background: #cc0029; border-color: #cc0029; }
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
html.js-ready .reveal.in { opacity: 1; transform: none; }
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
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px; height: 36px; padding: 6px;
  background: none; border: none; cursor: pointer;
  margin-left: auto; flex-shrink: 0;
}
.hamburger span {
  display: block; width: 20px; height: 1.5px;
  background: var(--ink); border-radius: 2px;
  transition: transform 0.25s var(--ease), opacity 0.2s;
  transform-origin: center;
}
.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
.mobile-nav {
  display: none;
  position: fixed; inset: 72px 0 0;
  background: #fff; z-index: 99;
  overflow-y: auto; padding: 24px var(--gutter) 48px;
  flex-direction: column; gap: 0;
  transform: translateY(-8px); opacity: 0;
  transition: opacity 0.25s var(--ease), transform 0.25s var(--ease);
}
.mobile-nav.open { display: flex; opacity: 1; transform: none; }
.mobile-nav-list { display: flex; flex-direction: column; border-top: 1px solid var(--border); }
.mobile-nav-list a {
  padding: 16px 0; font-size: 18px; font-weight: 700;
  border-bottom: 1px solid var(--border); color: var(--ink);
}
.mobile-nav-lang {
  display: flex; align-items: center; gap: 8px; margin-top: 24px;
  font-family: var(--en); font-size: 13px; font-weight: 700; color: var(--subtle);
}
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-actions { display: flex; flex-direction: column; gap: 10px; margin-top: 24px; }
.mobile-nav-actions .btn { width: 100%; justify-content: center; font-size: 15px; padding: 16px; }
@media (max-width: 900px) {
  .header-nav { display: none; }
  .header-actions { display: none; }
  .hamburger { display: flex; }
}
@media (max-width: 640px) { .header-lang { display: none; } }

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
.breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-size: 12px; color: var(--subtle);
  margin-bottom: clamp(24px, 3vw, 36px);
  flex-wrap: wrap;
}
.breadcrumb a { color: var(--subtle); transition: color 0.15s; }
.breadcrumb a:hover { color: var(--ink); }
.breadcrumb-sep { font-size: 10px; opacity: 0.5; }
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

/* ─── Demo badge ────────────────────────────── */
.demo-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--red-pale);
  border: 1px solid #FFCCD6;
  border-radius: 2px;
  padding: 6px 14px;
  margin-bottom: 24px;
}
.demo-badge-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--red);
  flex-shrink: 0;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.3); }
}
.demo-badge-text {
  font-size: 12px; font-weight: 700;
  color: var(--red);
}

/* ─── Hero split layout ──────────────────────── */
.page-hero-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
.page-hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
}
/* App mockup frame */
.mock-frame {
  width: 100%;
  max-width: 440px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: 0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06);
  overflow: hidden;
}
.mock-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--ink-dark);
  gap: 12px;
}
.mock-topbar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}
.mock-topbar-logo img {
  width: 24px; height: 24px;
  border-radius: 4px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}
.mock-topbar-name {
  font-family: var(--en);
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
}
.mock-topbar-badge {
  font-size: 10px;
  font-weight: 700;
  color: var(--red);
  background: rgba(255,0,51,0.12);
  border: 1px solid rgba(255,0,51,0.3);
  border-radius: 2px;
  padding: 2px 7px;
}
.mock-body {
  padding: 16px;
  background: #F7F8FC;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.mock-candidate-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 8px;
  padding: 12px 14px;
  border: 1px solid var(--border);
}
.mock-candidate-row.active {
  border-color: var(--red);
  box-shadow: 0 0 0 2px rgba(255,0,51,0.08);
}
.mock-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--bg-mid);
  flex-shrink: 0;
  overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.mock-avatar-inner {
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--border);
}
.mock-avatar-body {
  position: absolute;
  bottom: -4px;
  width: 22px; height: 14px;
  border-radius: 8px 8px 0 0;
  background: var(--border);
}
.mock-candidate-info { flex: 1; min-width: 0; }
.mock-candidate-name {
  font-size: 12px; font-weight: 700;
  color: var(--ink);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.mock-candidate-role {
  font-size: 10px; color: var(--subtle);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.mock-score-col { text-align: right; flex-shrink: 0; }
.mock-score-num {
  font-size: 15px; font-weight: 700;
  font-family: var(--en);
  color: var(--red);
}
.mock-score-label { font-size: 9px; color: var(--subtle); }
.mock-status-chip {
  font-size: 10px; font-weight: 700;
  padding: 2px 7px;
  border-radius: 2px;
  flex-shrink: 0;
}
.mock-status-chip.ai { background: rgba(255,0,51,0.08); color: var(--red); }
.mock-status-chip.done { background: rgba(43,73,231,0.08); color: var(--blue); }
.mock-status-chip.pending { background: var(--bg-mid); color: var(--subtle); }
/* Score bar section */
.mock-score-section {
  background: #fff;
  border-radius: 8px;
  padding: 14px 16px;
  border: 1px solid var(--border);
}
.mock-score-title {
  font-size: 11px; font-weight: 700;
  color: var(--ink);
  margin-bottom: 12px;
}
.mock-bar-row { margin-bottom: 8px; }
.mock-bar-row:last-child { margin-bottom: 0; }
.mock-bar-label {
  display: flex; justify-content: space-between;
  font-size: 10px; color: var(--muted);
  margin-bottom: 4px;
}
.mock-bar-track {
  height: 4px; background: var(--bg-mid);
  border-radius: 2px; overflow: hidden;
}
.mock-bar-fill {
  height: 100%; border-radius: 2px;
  background: var(--red);
  transition: width 0.6s var(--ease);
}
.mock-bar-fill.blue { background: var(--blue); }

@media (max-width: 800px) {
  .page-hero-split { grid-template-columns: 1fr; }
  .page-hero-visual { display: none; }
}

/* ═══════════════════════════════════════════════
   ABOUT MENRAKU (製品概要)
═══════════════════════════════════════════════ */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 7vw, 96px);
  align-items: start;
}
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

/* コア機能 */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
}
.feature-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
}
.feature-item:last-child { border-bottom: none; }
.feature-icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: var(--red-pale);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--red);
}
.feature-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 4px;
  line-height: 1.4;
}
.feature-desc {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════
   PITCH — 課題 + 導入効果
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
  margin-top: 32px;
}
.pitch-prob-item {
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
}
.pitch-prob-item:first-child { border-top: 1px solid var(--border); }
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
  width: 40px; height: 40px;
  border-radius: 8px;
  background: var(--red-pale);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: var(--red);
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
   DEMO CTA
═══════════════════════════════════════════════ */
.demo-section {
  background: var(--bg-off);
}
.demo-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}
.demo-copy-title {
  font-size: clamp(1.6rem, 2.5vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: 16px;
  text-wrap: balance;
}
.demo-copy-body {
  font-size: 15px;
  color: var(--muted);
  line-height: 1.85;
  margin-bottom: 28px;
  max-width: 44ch;
}
.demo-steps {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: var(--r);
  overflow: hidden;
}
.demo-step {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
}
.demo-step:last-child { border-bottom: none; }
.demo-step-num {
  width: 32px; height: 32px;
  border-radius: 50%;
  background: var(--red-pale);
  border: 1.5px solid #FFCCD6;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--en);
  font-size: 12px; font-weight: 700;
  color: var(--red);
  flex-shrink: 0;
}
.demo-step-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.5;
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
.faq-item { border-bottom: 1px solid var(--border); }
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
  font-size: 13px; font-weight: 700;
  color: var(--red);
  flex-shrink: 0; padding-top: 1px; width: 20px;
}
.faq-q-text {
  font-size: 16px; font-weight: 700;
  color: var(--ink); line-height: 1.55; flex: 1;
}
.faq-q-arrow {
  width: 20px; height: 20px;
  flex-shrink: 0; color: var(--subtle);
  margin-top: 2px;
  transition: transform 0.25s var(--ease);
}
details[open] .faq-q-arrow { transform: rotate(180deg); }
.faq-a {
  padding: 0 0 24px 36px;
  font-size: 15px; color: var(--muted); line-height: 1.8;
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
  font-size: 36px; font-weight: 700;
  color: var(--blue);
  letter-spacing: -0.02em; line-height: 1;
  margin-bottom: 16px;
}
.why-item-title {
  font-size: 16px; font-weight: 700;
  color: var(--ink); line-height: 1.4; margin-bottom: 10px;
}
.why-item-body {
  font-size: 14px; color: var(--muted); line-height: 1.75;
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
  font-weight: 700; letter-spacing: -0.03em;
  line-height: 1.05; color: #fff;
  text-wrap: balance; margin-bottom: 16px;
}
.cta-sub {
  font-size: 16px;
  color: rgba(255,255,255,0.55);
  line-height: 1.75; max-width: 38ch;
}
.cta-actions { display: flex; flex-direction: column; gap: 0; }
.cta-action-row {
  display: flex; align-items: center;
  justify-content: space-between; gap: 20px;
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
  display: flex; align-items: center;
  justify-content: space-between; gap: 16px;
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
  .demo-inner { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .cta-band-inner { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .why-item:nth-child(2) { border-right: none; }
  .why-item:nth-child(1),
  .why-item:nth-child(2) { border-bottom: 1px solid var(--border); }
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
      <div className="page-hero-split">
        
        <div>
          <nav className="breadcrumb" aria-label="パンくずリスト">
            <a href="/">トップ</a>
            <span className="breadcrumb-sep">›</span>
            <a href="/product">プロダクト</a>
            <span className="breadcrumb-sep">›</span>
            <span aria-current="page">Menraku</span>
          </nav>
          <div className="demo-badge reveal">
            <div className="demo-badge-dot"></div>
            <span className="demo-badge-text">登録不要・無料デモ公開中</span>
          </div>
          <h1 className="page-hero-h1 reveal">Menraku</h1>
          <p className="page-hero-sub reveal d1">採用プロセスを、AIで自動化・効率化。24時間365日、書類選考から面接・評価までAIが完全自動で対応します。</p>
          <div className="page-hero-cta reveal d2">
            <a href="https://menraku-test.vietis.com.vn" className="btn btn-red" target="_blank" rel="noopener">無料デモを体験 <span className="btn-arrow">↗</span></a>
            <a href="/consultation" className="btn btn-dark">無料相談を予約 <span className="btn-arrow">↗</span></a>
          </div>
        </div>
        
        <div className="page-hero-visual reveal d1">
          <div className="mock-frame">
            <div className="mock-topbar">
              <div className="mock-topbar-logo">
                <img src="/product/menraku/menraku_logo.png" alt="Menraku" />
                <span className="mock-topbar-name">Menraku</span>
              </div>
              <span className="mock-topbar-badge">AI稼働中</span>
            </div>
            <div className="mock-body">
              
              <div className="mock-candidate-row active">
                <div className="mock-avatar" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="13" r="7" fill="#DDE0EA"/><ellipse cx="18" cy="30" rx="11" ry="8" fill="#DDE0EA"/></svg>
                </div>
                <div className="mock-candidate-info">
                  <div className="mock-candidate-name">山田 太郎</div>
                  <div className="mock-candidate-role">エンジニア職 / 応募 #1042</div>
                </div>
                <span className="mock-status-chip ai">AI面接中</span>
                <div className="mock-score-col">
                  <div className="mock-score-num">87</div>
                  <div className="mock-score-label">スコア</div>
                </div>
              </div>
              <div className="mock-candidate-row">
                <div className="mock-avatar" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="13" r="7" fill="#DDE0EA"/><ellipse cx="18" cy="30" rx="11" ry="8" fill="#DDE0EA"/></svg>
                </div>
                <div className="mock-candidate-info">
                  <div className="mock-candidate-name">佐藤 花子</div>
                  <div className="mock-candidate-role">営業職 / 応募 #1039</div>
                </div>
                <span className="mock-status-chip done">選考通過</span>
                <div className="mock-score-col">
                  <div className="mock-score-num">92</div>
                  <div className="mock-score-label">スコア</div>
                </div>
              </div>
              <div className="mock-candidate-row">
                <div className="mock-avatar" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="13" r="7" fill="#DDE0EA"/><ellipse cx="18" cy="30" rx="11" ry="8" fill="#DDE0EA"/></svg>
                </div>
                <div className="mock-candidate-info">
                  <div className="mock-candidate-name">鈴木 一郎</div>
                  <div className="mock-candidate-role">デザイナー職 / 応募 #1037</div>
                </div>
                <span className="mock-status-chip pending">書類審査中</span>
                <div className="mock-score-col">
                  <div className="mock-score-num">—</div>
                  <div className="mock-score-label">スコア</div>
                </div>
              </div>
              
              <div className="mock-score-section">
                <div className="mock-score-title">AIスコア詳細 — 山田 太郎</div>
                <div className="mock-bar-row">
                  <div className="mock-bar-label"><span>コミュニケーション</span><span>91</span></div>
                  <div className="mock-bar-track"><div className="mock-bar-fill" style={{width: '91%'}}></div></div>
                </div>
                <div className="mock-bar-row">
                  <div className="mock-bar-label"><span>技術適合度</span><span>84</span></div>
                  <div className="mock-bar-track"><div className="mock-bar-fill blue" style={{width: '84%'}}></div></div>
                </div>
                <div className="mock-bar-row">
                  <div className="mock-bar-label"><span>カルチャーフィット</span><span>79</span></div>
                  <div className="mock-bar-track"><div className="mock-bar-fill" style={{width: '79%'}}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="section" aria-labelledby="about-h">
  <div className="wrap">
    <div className="about-grid">
      <div className="reveal">
        <h2 className="h2" id="about-h" style={{marginBottom: '24px'}}>Menrakuとは</h2>
        <p className="about-tagline">採用プロセス全体を一貫して自動化する<br />クラウド型AI採用支援システム</p>
        <p className="about-body">AIが24時間365日いつでも候補者に対応するため、面接官の工数を劇的に削減しながら、バイアスのない公平なデータ評価を実現します。日程調整や一次選考の手間をゼロにし、採用担当者は「人を見極める・口説く」という本質的な業務に集中できます。</p>
      </div>
      <div className="reveal d1">
        <p style={{fontSize: '11px', fontWeight: '700', color: 'var(--subtle)', letterSpacing: '0.06em', marginBottom: '16px'}}>3つのコア機能</p>
        <div className="features-list">
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5h14M3 10h9M3 15h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M18.5 15.5l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="feature-title">AIスクリーニング</div>
              <div className="feature-desc">履歴書を自動解析し、求人票との適合度をスコアリング。大量応募も数秒でランキング化します。</div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2C6.134 2 3 5.134 3 9c0 2.09.955 3.961 2.462 5.213L4 16l4.333-1.667A6.965 6.965 0 0 0 10 14.8c3.866 0 7-3.134 7-7S13.866 2 10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 9h.01M10 9h.01M12.5 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="feature-title">自動AI面接</div>
              <div className="feature-desc">求人票に基づきAIが質問を生成。24時間いつでも候補者の都合に合わせて実施できます。</div>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="feature-title">候補者評価・ダッシュボード</div>
              <div className="feature-desc">面接をビデオ記録しスキルを自動スコアリング。AIサマリーと選考ステータスを一元管理。</div>
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
      <div>
        <h2 className="h2 reveal" id="pitch-h" style={{fontSize: 'clamp(1.5rem,2.2vw,2.2rem)'}}>こんな課題はありませんか</h2>
        <div className="pitch-problem-list">
          <div className="pitch-prob-item reveal d1"><p className="pitch-prob-text">応募数が多すぎて、書類選考だけで手一杯になっている</p></div>
          <div className="pitch-prob-item reveal d2"><p className="pitch-prob-text">面接官によって評価基準がバラバラで、合否判断にばらつきがある</p></div>
          <div className="pitch-prob-item reveal d3"><p className="pitch-prob-text">候補者との日程調整に時間がかかりすぎ、選考スピードが落ちている</p></div>
          <div className="pitch-prob-item reveal d4"><p className="pitch-prob-text">評価ナレッジが属人化しており、社内共有や引き継ぎができない</p></div>
          <div className="pitch-prob-item"><p className="pitch-prob-text">優秀な候補者を他社に渡さないよう、選考期間を短縮したい</p></div>
        </div>
      </div>
      <div>
        <h2 className="h2 reveal" style={{fontSize: 'clamp(1.5rem,2.2vw,2.2rem)', color: 'var(--red)'}}>導入するとこう変わります</h2>
        <div className="pitch-solution-list">
          <div className="pitch-sol-item reveal d1">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a8 8 0 1 1 0 16A8 8 0 0 1 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">入社後のミスマッチを大幅削減</div>
              <div className="pitch-sol-desc">客観的なデータで評価するため、感覚に頼らない精度の高い採用が可能になります。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d2">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">優秀な人材を見落とさない</div>
              <div className="pitch-sol-desc">人間の主観やバイアスを排除し、求めているスキルを持つ人材を確実にすくい上げます。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d3">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">選考スピードの圧倒的向上</div>
              <div className="pitch-sol-desc">応募から面接・評価までシームレスに進むため、激しい人材獲得競争で優位に立てます。</div>
            </div>
          </div>
          <div className="pitch-sol-item reveal d4">
            <div className="pitch-sol-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 7h6M7 10h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="pitch-sol-title">日程調整の往復メールがゼロに</div>
              <div className="pitch-sol-desc">面接設定の自動化により、ノンコア業務に追われるストレスから解放されます。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section demo-section" aria-labelledby="demo-h">
  <div className="wrap">
    <div className="demo-inner">
      <div className="reveal">
        <h2 className="h2" id="demo-h" style={{marginBottom: '16px'}}>無料デモ公開中</h2>
        <p className="demo-copy-body">面倒なアカウント登録は一切必要ありません。AIが質問を生成し、対話し、評価レポートを作成する全プロセスをリアルにご体験いただけます。</p>
        <a href="https://menraku-test.vietis.com.vn" className="btn btn-red" target="_blank" rel="noopener">
          Menraku 無料デモを体験 <span className="btn-arrow">↗</span>
        </a>
      </div>
      <div className="reveal d1">
        <div className="demo-steps">
          <div className="demo-step">
            <div className="demo-step-num">01</div>
            <div className="demo-step-text">URLにアクセス（登録不要）</div>
          </div>
          <div className="demo-step">
            <div className="demo-step-num">02</div>
            <div className="demo-step-text">AIが自動で質問を生成・面接を開始</div>
          </div>
          <div className="demo-step">
            <div className="demo-step-num">03</div>
            <div className="demo-step-text">回答に応じた深掘り質問で対話</div>
          </div>
          <div className="demo-step">
            <div className="demo-step-num">04</div>
            <div className="demo-step-text">評価レポートのイメージを確認</div>
          </div>
        </div>
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
          <span className="faq-q-text">既存の採用管理システム（ATS）と連携できますか？</span>
          <svg className="faq-q-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className="faq-a">はい、対応可能です。現在対応している連携サービスの詳細についてはお問い合わせください。貴社独自のシステムに合わせたAPI連携の開発も承ります。</p>
      </details>

      <details className="faq-item reveal d2">
        <summary className="faq-q">
          <span className="faq-q-mark">Q</span>
          <span className="faq-q-text">候補者の個人データはどのように保護されますか？</span>
          <svg className="faq-q-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className="faq-a">候補者データはクラウド上で安全に暗号化管理されます。VIETISはISO 27001を取得しており、厳格なセキュリティ基準に準拠した体制で運用します。</p>
      </details>

      <details className="faq-item reveal d3">
        <summary className="faq-q">
          <span className="faq-q-mark">Q</span>
          <span className="faq-q-text">導入までどのくらいかかりますか？</span>
          <svg className="faq-q-arrow" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </summary>
        <p className="faq-a">まずは無料デモで動作をご確認いただき、貴社の選考フローに合わせたカスタマイズの要件をヒアリングした上で、最短でのスケジュールをご提案します。</p>
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
        <h2 className="cta-head reveal" id="cta-h">まずは<br />無料デモから</h2>
        <p className="cta-sub reveal d1">「自社の選考基準をAIに学習させられるか」「既存の採用フローにどう組み込むべきか」など、気になる点はお気軽にご相談ください。</p>
      </div>
      <div className="reveal d2">
        <div className="cta-actions">
          <div className="cta-action-row">
            <div>
              <div className="cta-action-title">無料デモを体験</div>
              <div className="cta-action-desc">登録不要。AI面接の全プロセスをその場で体験。</div>
            </div>
            <a href="https://menraku-test.vietis.com.vn" className="btn btn-white" target="_blank" rel="noopener">体験する <span className="btn-arrow" style={{color: 'var(--ink)'}}>↗</span></a>
          </div>
          <div className="cta-action-row">
            <div>
              <div className="cta-action-title">無料相談を予約</div>
              <div className="cta-action-desc">オンライン30分。課題ヒアリングと方向性のご提案。</div>
            </div>
            <a href="/consultation" className="btn btn-outline-white">予約する <span className="btn-arrow">↗</span></a>
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
