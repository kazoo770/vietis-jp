import type { Metadata } from 'next';
import TopPageInit from '@/components/TopPageInit';

export const metadata: Metadata = {
  title: 'AI・DX推進ならVIETISジャパン｜戦略から開発・運用まで一気通貫',
  description: 'AI活用診断からシステム開発・運用保守まで一気通貫で支援するAI/DXエージェンシー。350件超の実績。まず無料相談から。',
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
  padding: clamp(56px, 12vw, 140px) 0;
  border-top: 1px solid var(--border);
}

/* ─── SECTION LABEL ───────────────────────────── */
.sec-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--en);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--subtle);
  margin-bottom: 20px;
}
.sec-bullet { color: var(--blue); font-size: 10px; }

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
  transform: rotate(0deg);
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
  html.js-ready .will-animate,
  .marquee-track,
  .accordion-panel,
  .accordion-panel img {
    transition: none !important;
    animation: none !important;
  }
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

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
.hero {
  min-height: calc(100dvh - 88px);
  display: flex;
  align-items: center;
  padding-top: 72px;
  overflow: hidden;
}
.hero-inner {
  max-width: var(--max);
  margin: 0 auto;
  padding: clamp(20px, 4vw, 56px) var(--gutter);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
  width: 100%;
}
.hero-content { max-width: 580px; }
.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 24px;
}
.hero-label::before {
  content: '■';
  font-size: 8px;
  color: var(--blue);
}
.hero-h1 {
  font-size: clamp(2.6rem, 4.8vw, 6rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 24px;
  text-wrap: balance;
}
.hero-sub {
  font-size: clamp(15px, 1.4vw, 17px);
  color: var(--ink);
  line-height: 1.85;
  max-width: 32em;
  margin-bottom: 40px;
  text-wrap: pretty;
}
.hero-ctas {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* ── ACCORDION ─────────────────────────────── */
.hero-visual {
  height: clamp(460px, 58vh, 580px);
  position: relative;
}
.accordion-track {
  display: flex;
  gap: 8px;
  height: 100%;
}
.accordion-panel {
  flex: 0 0 58px;
  border-radius: var(--r);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: flex-basis 560ms var(--ease);
}
.accordion-panel.active { flex: 1 0 0; }
.accordion-panel img {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 560ms var(--ease);
}
.accordion-panel.active img { transform: scale(1.04); }
.accordion-panel video {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 500ms var(--ease);
  pointer-events: none;
}
.accordion-panel.active video { opacity: 1; }
.accordion-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15,17,23,0.75) 0%,
    rgba(15,17,23,0.06) 44%,
    transparent 100%
  );
  pointer-events: none;
}
.acc-tag {
  position: absolute;
  bottom: 52px; left: 16px;
  font-family: var(--en);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.22);
  padding: 3px 10px;
  border-radius: var(--r-pill);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 280ms var(--ease) 180ms, transform 280ms var(--ease) 180ms;
  pointer-events: none;
  white-space: nowrap;
}
.accordion-panel.active .acc-tag { opacity: 1; transform: none; }
.acc-label {
  position: absolute;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  pointer-events: none;
  opacity: 0.9;
  transition: opacity 300ms var(--ease), font-size 300ms var(--ease);
  bottom: 16px; left: 50%;
  transform: translateX(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  white-space: nowrap;
  max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.accordion-panel.active .acc-label {
  writing-mode: horizontal-tb;
  bottom: 18px; left: 16px;
  transform: none;
  font-size: 20px;
  opacity: 1;
  max-height: none;
}

/* ═══════════════════════════════════════════════
   LOGOS
═══════════════════════════════════════════════ */
.logos {
  padding: clamp(20px, 2.5vw, 32px) 0;
  overflow: hidden;
}
.marquee-wrap { overflow: hidden; }
.marquee-track {
  display: flex;
  align-items: center;
  gap: clamp(44px, 7vw, 80px);
  width: max-content;
  animation: marquee 30s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }
.marquee-item {
  display: flex;
  align-items: center;
  height: 40px;
  flex-shrink: 0;
  transition: opacity 0.2s;
}
.marquee-item:hover { opacity: 0.7; }
.marquee-item img { height: 100%; width: auto; max-width: 150px; object-fit: contain; }
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ═══════════════════════════════════════════════
   STATS
═══════════════════════════════════════════════ */
.stats {
  padding: clamp(44px, 10vw, 120px) 0;
}
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid var(--border);
  margin-bottom: clamp(40px, 6vw, 72px);
  padding-bottom: clamp(40px, 6vw, 72px);
}
.stat-item {
  padding: 0 clamp(24px, 4vw, 56px);
  border-right: 1px solid var(--border);
}
.stat-item:first-child { padding-left: 0; }
.stat-item:last-child { border-right: none; }
.stat-val {
  font-family: var(--en);
  font-size: clamp(3.5rem, 6vw, 6rem);
  font-weight: 700;
  color: var(--ink);
  line-height: 1;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
}
.stat-val .stat-suffix {
  font-size: 0.45em;
  font-weight: 400;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.stat-desc {
  font-size: 16px;
  color: var(--ink);
  font-weight: 700;
}

/* Certs row */
.certs-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}
.cert-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 clamp(24px, 4vw, 56px);
  border-right: 1px solid var(--border);
}
.cert-item:first-child { padding-left: 0; }
.cert-item:last-child { border-right: none; }
.cert-logo-wrap {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border: 1px solid var(--border);
  border-radius: var(--r);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-off);
  overflow: hidden;
  padding: 8px;
}
.cert-logo-wrap img { width: 100%; height: 100%; object-fit: contain; }
.cert-name { font-size: 16px; font-weight: 700; margin-bottom: 6px; color: var(--ink); }
.cert-desc { font-size: 13px; color: var(--muted); line-height: 1.6; }

/* ═══════════════════════════════════════════════
   PROBLEMS
═══════════════════════════════════════════════ */
.problems-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 7vw, 96px);
  align-items: start;
}
.problems-left { max-width: 380px; }
.problems-right { padding-top: 4px; }
.problems-list { }
.problem-row {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 0 20px;
  padding: clamp(18px, 2.5vw, 26px) 0;
  border-top: 1px solid var(--border);
  align-items: baseline;
}
.problem-row:last-child { border-bottom: 1px solid var(--border); }
.problem-num {
  font-family: var(--en);
  font-size: 11px;
  font-weight: 700;
  color: var(--subtle);
  letter-spacing: 0.07em;
  padding-top: 2px;
}
.problem-title {
  font-size: clamp(0.92rem, 1.3vw, 1.05rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.5;
  color: var(--ink);
}

/* ═══════════════════════════════════════════════
   SERVICES
═══════════════════════════════════════════════ */
.suite-block {
  margin-top: clamp(48px, 6vw, 72px);
  background: #F5F5F5;
  border-radius: var(--r);
  overflow: hidden;
}
.suite-left {
  padding: clamp(36px, 5vw, 56px) clamp(36px, 5vw, 56px) clamp(32px, 4vw, 48px);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 28px;
  flex-wrap: wrap;
}

.suite-left-text { flex: 1; min-width: 260px; }
.suite-flag {
  display: inline-block;
  width: fit-content;
  font-family: var(--en);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  background: var(--red);
  color: #fff;
  padding: 4px 11px;
  border-radius: 2px;
  margin-bottom: 14px;
}
.suite-title {
  font-size: clamp(1.6rem, 2.8vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--ink);
  line-height: 1.15;
  margin-bottom: 20px;
  text-wrap: balance;
}
.suite-desc {
  font-size: clamp(15px, 1.5vw, 18px);
  color: var(--ink);
  line-height: 1.8;
  max-width: 48ch;
  white-space: nowrap;
}
@media (max-width: 960px) {
  .suite-desc { white-space: normal; }
}
.suite-right {
  padding: clamp(36px, 5vw, 56px) clamp(36px, 5vw, 56px) clamp(28px, 4vw, 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  align-items: stretch;
  border-radius: 0 0 var(--r) var(--r);
}
.plan-card {
  border: 1px solid var(--border);
  border-radius: var(--r);
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s var(--ease);
}
@media (hover: hover) and (pointer: fine) {
  .plan-card:hover {
    border-color: #b0b8cc;
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
}
.plan-card.featured {
  border-color: var(--blue);
  box-shadow: 0 0 0 1px var(--blue);
}
@media (hover: hover) and (pointer: fine) {
  .plan-card.featured:hover {
    box-shadow: 0 0 0 1px var(--blue), 0 12px 40px rgba(43,73,231,0.18);
  }
}
.plan-badge-bar {
  background: var(--blue);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-align: center;
  padding: 7px 0;
  width: 100%;
  border-radius: calc(var(--r) - 1px) calc(var(--r) - 1px) 0 0;
}
.plan-badge-bar--ghost {
  background: transparent;
  pointer-events: none;
  border-radius: calc(var(--r) - 1px) calc(var(--r) - 1px) 0 0;
}
.plan-header {
  padding: 28px 24px 20px;
  border-bottom: 1px solid var(--border);
}
.plan-name {
  font-size: 22px;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 10px;
  line-height: 1.25;
  text-align: center;
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.plan-card.featured .plan-name { color: var(--blue); }
.plan-desc {
  font-size: 18px;
  color: var(--ink);
  line-height: 1.7;
  text-align: center;
}
.plan-features {
  list-style: none;
  padding: 20px 24px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;
  flex: 1;
}
.plan-features li {
  font-size: 15px;
  color: var(--ink);
  line-height: 1.5;
  padding-left: 20px;
  position: relative;
}
.plan-features li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 6px;
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--blue);
  border-bottom: 2px solid var(--blue);
  transform: rotate(-45deg);
}
.plan-price-row {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  border-top: 1px solid var(--border);
  padding: 18px 24px 6px;
  flex-wrap: wrap;
}
.plan-price-num {
  font-family: var(--en);
  font-size: clamp(2.2rem, 2.8vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: var(--ink);
  line-height: 1;
}
.plan-card.featured .plan-price-num { color: var(--blue); }
.plan-price-unit {
  font-size: 13px;
  font-weight: 500;
  color: var(--muted);
  line-height: 1;
}
.plan-period {
  font-size: 11px;
  color: var(--subtle);
  padding: 0 24px 8px;
  display: block;
  text-align: center;
}
.plan-btn {
  display: block;
  margin: 0 24px 20px;
  padding: 10px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--blue);
  border: 1px solid var(--blue);
  border-radius: var(--r-btn);
  transition: background 0.15s, color 0.15s;
  text-decoration: none;
}
.plan-btn:hover { background: var(--blue); color: #fff; }
.plan-card.featured .plan-btn {
  background: var(--blue);
  color: #fff;
}
.plan-card.featured .plan-btn:hover { background: #1e37d0; border-color: #1e37d0; }

/* Other services — editorial row list */
.services-list {
  margin-top: clamp(32px, 4vw, 48px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.svc-row {
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  border-radius: var(--r);
  padding: clamp(20px, 2.5vw, 28px);
  text-decoration: none;
  border: 1px solid transparent;
  transition: background 0.15s, border-color 0.15s;
  position: relative;
}
@media (hover: hover) and (pointer: fine) {
  .svc-row:hover {
    background: var(--blue-pale);
    border-color: var(--blue);
  }
  .svc-row:hover .svc-row-arrow { transform: translate(2px, -2px); color: var(--blue); }
}
.svc-row-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.svc-icon {
  width: 44px;
  height: 44px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--blue);
  margin-bottom: 4px;
  flex-shrink: 0;
}
.svc-name {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.3;
}
.svc-tag {
  font-size: 15px;
  color: var(--muted);
  font-weight: 400;
  line-height: 1.55;
  margin-top: 2px;
  flex: 1;
}
.svc-row-arrow {
  display: inline-block;
  font-family: var(--en);
  font-size: 18px;
  color: var(--subtle);
  transition: transform 0.2s var(--ease), color 0.15s;
  margin-top: 20px;
  align-self: flex-end;
}

/* ═══════════════════════════════════════════════
   WHY VIETIS — editorial row list
═══════════════════════════════════════════════ */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
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
@media (max-width: 900px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .why-item:nth-child(2) { border-right: none; }
  .why-item:nth-child(1),
  .why-item:nth-child(2) { border-bottom: 1px solid var(--border); }
}
@media (max-width: 560px) {
  .why-grid { grid-template-columns: 1fr; }
  .why-item { border-right: none; border-bottom: 1px solid var(--border); }
  .why-item:last-child { border-bottom: none; }
}

/* ═══════════════════════════════════════════════
   CASES
═══════════════════════════════════════════════ */
.cases-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: clamp(36px, 5vw, 56px);
}
.cases-more {
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  transition: color 0.15s, gap 0.15s;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--border);
}
@media (hover: hover) and (pointer: fine) {
  .cases-more:hover { color: var(--ink); gap: 8px; }
}
.cases-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  border-top: 1px solid var(--border);
  border-left: 1px solid var(--border);
}
.case-card {
  overflow: hidden;
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
@media (hover: hover) and (pointer: fine) {
  .case-card:hover { background: var(--bg-off); }
  .case-card:hover .case-thumb img { transform: scale(1.04); }
}
.case-card-inner {
  padding: clamp(20px, 2.5vw, 32px);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.case-thumb {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--bg-off);
  margin-bottom: 20px;
}
.case-thumb img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 480ms var(--ease);
}
.case-client-logo {
  height: 22px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
}
.case-client-logo img {
  height: 100%;
  width: auto;
  max-width: 100px;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.5;
  transition: opacity 0.2s, filter 0.2s;
}
@media (hover: hover) and (pointer: fine) {
  .case-card:hover .case-client-logo img { filter: none; opacity: 1; }
}
.case-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.tag {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 2px;
  letter-spacing: 0.03em;
}
.tag-ind { background: var(--bg-off); color: var(--muted); }
.tag-svc { color: var(--blue); border: 1px solid var(--blue-pale); background: var(--blue-pale); }
.case-title {
  font-size: clamp(0.95rem, 1.3vw, 1.1rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.5;
  margin-bottom: auto;
  padding-bottom: 20px;
  color: var(--ink);
}
.case-result {
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--ink);
  display: flex;
  align-items: baseline;
  gap: 6px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
  margin-top: 0;
  line-height: 1;
}
.case-result-label {
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0;
}
.case-result-accent { color: var(--blue); }

/* ═══════════════════════════════════════════════
   ABOUT
═══════════════════════════════════════════════ */
.about-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 7vw, 96px);
  align-items: center;
}
.about-img {
  position: relative;
}
.about-img img {
  border-radius: var(--r);
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}
.about-intro {
  font-size: clamp(15px, 1.4vw, 17px);
  color: var(--ink);
  line-height: 1.85;
  margin: 20px 0 28px;
}
.about-facts { display: flex; flex-direction: column; gap: 0; margin-bottom: 32px; }
.about-fact {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 12px;
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
}
.about-fact:first-child { border-top: 1px solid var(--border); }
.fact-label { color: var(--subtle); font-weight: 500; }
.fact-val { font-weight: 500; }

/* ═══════════════════════════════════════════════
   CTA BAND
═══════════════════════════════════════════════ */
.cta-band {
  background: var(--ink-dark);
  padding: clamp(56px, 12vw, 140px) 0;
  border-top: none;
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
.cta-right { }
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
.cta-action-title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}
.cta-action-desc { font-size: 14px; color: rgba(255,255,255,0.38); line-height: 1.6; }
.cta-action-row .btn { flex-shrink: 0; font-size: 13px; padding: 10px 20px; }

/* ═══════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════ */
.footer {
  background: #0A0A0F;
  padding: clamp(40px, 8vw, 88px) 0 clamp(24px, 4vw, 40px);
}
.footer-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: clamp(24px, 4vw, 52px);
  padding-bottom: clamp(40px, 5vw, 60px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.footer-logo { margin-bottom: 18px; }
.footer-logo svg { height: 28px; width: auto; }
.footer-tagline {
  font-size: 16px;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
  max-width: 26ch;
  margin-bottom: 16px;
}
.footer-address {
  font-size: 11px;
  color: rgba(255,255,255,0.22);
  line-height: 1.7;
  font-style: normal;
}
.footer-col-label {
  font-family: var(--en);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  margin-bottom: 16px;
}
.footer-links { display: flex; flex-direction: column; gap: 11px; }
.footer-links a {
  font-size: 16px;
  color: rgba(255,255,255,0.62);
  transition: color 0.15s;
}
.footer-links a:hover { color: #fff; }
.footer-bottom {
  padding-top: clamp(18px, 3vw, 26px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.footer-copy { font-size: 11px; color: rgba(255,255,255,0.16); }
.footer-legal { display: flex; gap: 18px; }
.footer-legal a {
  font-size: 11px;
  color: rgba(255,255,255,0.22);
  transition: color 0.15s;
}
.footer-legal a:hover { color: rgba(255,255,255,0.6); }

/* ═══════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════ */
@media (max-width: 960px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-visual { height: 300px; }
  .accordion-panel { flex: 0 0 46px; }
  .problems-inner { grid-template-columns: 1fr; }
  .services-list { grid-template-columns: repeat(2, 1fr); }

  .about-inner { grid-template-columns: 1fr; }
  .cta-band-inner { grid-template-columns: 1fr; }
  .suite-right { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
}
/* ─── HAMBURGER ───────────────────────────────── */
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

/* Mobile drawer */
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
  transition: transform 0.3s var(--ease), opacity 0.25s var(--ease);
  pointer-events: none;
}
.mobile-nav.open {
  display: flex;
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}
.mobile-nav-list a {
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mobile-nav-list a::after { content: '↗'; font-size: 14px; color: var(--subtle); }
.mobile-nav-list a:first-child { border-top: 1px solid var(--border); }
.mobile-nav-lang {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  font-family: var(--en);
  font-size: 12px;
  font-weight: 700;
  color: var(--subtle);
}
.mobile-nav-lang a { color: var(--subtle); }
.mobile-nav-lang a.active { color: var(--ink); }
.mobile-nav-lang span { color: var(--border); }
.mobile-nav-actions {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mobile-nav-actions .btn { justify-content: center; padding: 15px; font-size: 15px; }

@media (max-width: 640px) {
  .services-list { grid-template-columns: 1fr; }
  .header-nav { display: none; }
  .header-actions { display: none; }
  .header-lang { display: none; }
  .hamburger { display: flex; }
  .header-inner { grid-template-columns: auto 1fr; }
  .header-right { gap: 0; }
  .cases-grid { grid-template-columns: 1fr; border-left: none; }
  .case-card { border-left: none; border-right: none; }
  .stats-row,
  .certs-row { grid-template-columns: 1fr; gap: 32px; }
  .stat-item { border-right: none; padding-left: 0; border-bottom: 1px solid var(--border); padding-bottom: 32px; }
  .stat-item:last-child { border-bottom: none; padding-bottom: 0; }
  .cert-item { border-right: none; padding-left: 0; }
  .cases-head { flex-direction: column; align-items: flex-start; }
  .footer-top { grid-template-columns: 1fr; }
  .hero-visual { display: block; height: 220px; margin-top: 8px; }
  .accordion-panel { flex: 0 0 40px; border-radius: 6px; }
  .accordion-panel.active { flex: 1 0 0; }
}

      `}</style>
<section className="hero" aria-label="メインビジュアル">
  <div className="hero-inner">

    <div className="hero-content">
      <p className="hero-label reveal">AI / DX 伴走型開発パートナー</p>
      <h1 className="hero-h1 reveal d1">AI×DXで、<br />ビジネスを<br /><span style={{whiteSpace: 'nowrap'}}>次のステージへ。</span></h1>
      <p className="hero-sub reveal d2">DXやAI導入の現場が直面するリソース不足や技術の課題を解決。<br />デジタル変革に伴走するAI/DXエージェンシー。</p>
      <div className="hero-ctas reveal d3">
        <a href="/consultation" className="btn btn-dark">無料相談を予約する <span className="btn-arrow">↗</span></a>
        <a href="/service" className="btn btn-outline">サービスを見る</a>
      </div>
    </div>

    <div className="hero-visual reveal d2" aria-hidden="true">
      <div className="accordion-track" id="acc">
        <a className="accordion-panel active" data-idx="0" href="/service/ai-driving-suite/">
          <img src="/images/ai-driving-suite-panel.webp" alt="" />
          <video muted playsInline loop preload="none"><source src="/videos/ai_driving_suite.webm" type="video/webm" /><source src="/videos/ai_driving_suite.mp4" type="video/mp4" /></video>
          <div className="accordion-overlay"></div>
          <span className="acc-label">AI/DX Driving Suite</span>
        </a>
        <a className="accordion-panel" data-idx="1" href="/service/ai-development/">
          <img src="/images/ai-development-panel.webp" alt="" />
          <video muted playsInline loop preload="none"><source src="/videos/ai_development.webm" type="video/webm" /><source src="/videos/ai_development.mp4" type="video/mp4" /></video>
          <div className="accordion-overlay"></div>
          <span className="acc-label">AIシステム開発</span>
        </a>
        <a className="accordion-panel" data-idx="2" href="/service/dev-system/">
          <img src="/images/system-panel.webp" alt="" />
          <video muted playsInline loop preload="none"><source src="/videos/system_dev.webm" type="video/webm" /><source src="/videos/system_dev.mp4" type="video/mp4" /></video>
          <div className="accordion-overlay"></div>
          <span className="acc-label">Webシステム開発</span>
        </a>
        <a className="accordion-panel" data-idx="3" href="/service/dev-app/">
          <img src="/images/app-panel.webp" alt="" />
          <video muted playsInline loop preload="none"><source src="/videos/app.webm" type="video/webm" /><source src="/videos/app.mp4" type="video/mp4" /></video>
          <div className="accordion-overlay"></div>
          <span className="acc-label">アプリ開発</span>
        </a>
        <a className="accordion-panel" data-idx="4" href="/service/dev-web/">
          <img src="/images/web-design-panel.webp" alt="" />
          <video muted playsInline loop preload="none"><source src="/videos/web_design.webm" type="video/webm" /><source src="/videos/web_design.mp4" type="video/mp4" /></video>
          <div className="accordion-overlay"></div>
          <span className="acc-label">Webサイト制作</span>
        </a>
      </div>
    </div>

  </div>
</section>


<div className="logos" aria-label="取引実績のあるクライアント">
  <div className="marquee-wrap">
    <div className="marquee-track">
      <span className="marquee-item"><img src="img/client/client-1.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-2.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-3.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-4.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-5.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-6.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-7.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-1.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-2.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-3.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-4.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-5.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-6.svg" alt="クライアントロゴ" /></span>
      <span className="marquee-item"><img src="img/client/client-7.svg" alt="クライアントロゴ" /></span>
    </div>
  </div>
</div>


<div className="stats" role="region" aria-label="実績と認証">
  <div className="wrap">

    <div className="stats-row">
      <div className="stat-item reveal">
        <div className="stat-val"><span data-count="350" data-suffix="">350</span><span className="stat-suffix">件+</span></div>
        <div className="stat-desc">累計プロジェクト件数</div>
      </div>
      <div className="stat-item reveal d1">
        <div className="stat-val"><span data-count="15" data-suffix="">15</span><span className="stat-suffix">年+</span></div>
        <div className="stat-desc">業界経験</div>
      </div>
      <div className="stat-item reveal d2">
        <div className="stat-val"><span data-count="300" data-suffix="">300</span><span className="stat-suffix">名+</span></div>
        <div className="stat-desc">在籍エンジニア数</div>
      </div>
    </div>

    <div className="certs-row">
      <div className="cert-item reveal">
        <div className="cert-logo-wrap">
          <img src="img/cert/logo-cmmi.png" alt="CMMI Level 3" />
        </div>
        <div>
          <div className="cert-name">CMMI Level 3</div>
          <div className="cert-desc">ソフトウェア開発プロセスの国際品質管理認証</div>
        </div>
      </div>
      <div className="cert-item reveal d1">
        <div className="cert-logo-wrap">
          <img src="img/cert/logo-isms.png" alt="ISO 27001" />
        </div>
        <div>
          <div className="cert-name">ISO 27001</div>
          <div className="cert-desc">情報セキュリティマネジメントシステムの国際規格</div>
        </div>
      </div>
      <div className="cert-item reveal d2">
        <div className="cert-logo-wrap">
          <img src="img/cert/logo-pmark.png" alt="プライバシーマーク" />
        </div>
        <div>
          <div className="cert-name">プライバシーマーク</div>
          <div className="cert-desc">個人情報保護体制の適切な取り扱いを認定</div>
        </div>
      </div>
    </div>

  </div>
</div>


<section className="section" aria-labelledby="prob-h">
  <div className="wrap">
    <div className="problems-inner">
      <div className="problems-left">
        <h2 className="h2 reveal" id="prob-h">こんな課題、<br />抱えていませんか</h2>
      </div>
      <div className="problems-right">
        <div className="problems-list">
          <div className="problem-row reveal">
            <div className="problem-num" aria-hidden="true">01</div>
            <h3 className="problem-title">社内にAI・DX人材がおらず、何から着手すべきか見えない</h3>
          </div>
          <div className="problem-row reveal d1">
            <div className="problem-num" aria-hidden="true">02</div>
            <h3 className="problem-title">戦略から開発まで、一気通貫で任せられるパートナーがいない</h3>
          </div>
          <div className="problem-row reveal d2">
            <div className="problem-num" aria-hidden="true">03</div>
            <h3 className="problem-title">スピードと品質を両立できる開発体制を社内で作れていない</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="svc-h">
  <div className="wrap">
    <h2 className="h2 reveal" id="svc-h">サービス</h2>
    <p className="body-lead reveal d1" style={{marginTop: '16px'}}>戦略立案からシステム開発・AI導入・運用保守まで、一社で完結。</p>

    
    <div className="suite-block reveal d2">
      <div className="suite-left">
        <div className="suite-left-text">
          <h3 className="suite-title">AI/DX Driving Suite</h3>
          <p className="suite-desc">企業のフェーズに合わせた、AI/DX推進伴走サービス。月額契約で専任チームが継続的に支援します。</p>
        </div>
        <a href="/service/ai-driving-suite/" className="btn btn-outline" style={{flexShrink: '0'}}>詳細を見る <span className="btn-arrow">↗</span></a>
      </div>
      <div className="suite-right">
        <div className="plan-card">
          <div className="plan-badge-bar plan-badge-bar--ghost"></div>
          <div className="plan-header">
            <div className="plan-name">AIアドバイザリープラン</div>
            <div className="plan-desc">社内チームに技術顧問が伴走。AI導入の方向性を固める。</div>
          </div>
          <ul className="plan-features">
            <li>AI戦略の立案・技術選定支援</li>
            <li>週次MTGでのチームへのフィードバック</li>
            <li>コードレビュー・技術検証の伴走</li>
          </ul>
          <div className="plan-price-row">
            <span className="plan-price-num">30</span>
            <span className="plan-price-unit">万円/月〜</span>
          </div>
          <span className="plan-period">契約期間3ヶ月〜</span>
          <a href="/service/ai-driving-suite/" className="plan-btn">詳しく見る <span className="btn-arrow">↗</span></a>
        </div>
        <div className="plan-card featured">
          <div className="plan-badge-bar">おすすめ</div>
          <div className="plan-header">
            <div className="plan-name">AIラボプラン</div>
            <div className="plan-desc">PM＋専任エンジニアチームがアジャイル開発で前進する。</div>
          </div>
          <ul className="plan-features">
            <li>PM＋コアエンジニアの専任チーム体制</li>
            <li>スプリントごとに要件定義から実装まで</li>
            <li>進捗・品質・コストを一元管理</li>
          </ul>
          <div className="plan-price-row">
            <span className="plan-price-num">80</span>
            <span className="plan-price-unit">万円/月〜</span>
          </div>
          <span className="plan-period">契約期間3ヶ月〜</span>
          <a href="/service/ai-driving-suite/" className="plan-btn">詳しく見る <span className="btn-arrow">↗</span></a>
        </div>
        <div className="plan-card">
          <div className="plan-badge-bar plan-badge-bar--ghost"></div>
          <div className="plan-header">
            <div className="plan-name">AI/DXフルスタックプラン</div>
            <div className="plan-desc">戦略からインフラ・開発・運用まで全レイヤーを一社で担う。</div>
          </div>
          <ul className="plan-features">
            <li>戦略・設計・開発・運用の全工程対応</li>
            <li>CTO代行・DX推進リードとして伴走</li>
            <li>大規模・複合プロジェクトにも対応</li>
          </ul>
          <div className="plan-price-row">
            <span className="plan-price-num">150</span>
            <span className="plan-price-unit">万円/月〜</span>
          </div>
          <span className="plan-period">契約期間6ヶ月〜</span>
          <a href="/service/ai-driving-suite/" className="plan-btn">詳しく見る <span className="btn-arrow">↗</span></a>
        </div>
      </div>
    </div>

    
    <div className="services-list reveal d3">
      <a href="/service/ai-development/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v1a4 4 0 0 1-8 0v-1H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1V6a4 4 0 0 1 4-4Z"/><circle cx="9.5" cy="10" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="10" r="1" fill="currentColor" stroke="none"/><path d="M9.5 15.5s.8 1 2.5 1 2.5-1 2.5-1"/><path d="M12 2v2M2 12h2M20 12h2M12 20v2"/></svg>
          </div>
          <span className="svc-name">AIシステム開発</span>
          <span className="svc-tag">業務に効くAIを、要件定義から本番まで</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/dev-system/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/><circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none"/><circle cx="6" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="6" cy="19.5" r="1" fill="currentColor" stroke="none"/></svg>
          </div>
          <span className="svc-name">Webシステム・業務システム開発</span>
          <span className="svc-tag">業務を深く理解してから、作る</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/dev-app/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><line x1="7" y1="6" x2="17" y2="6"/><line x1="7" y1="18" x2="17" y2="18"/><circle cx="12" cy="20.5" r=".8" fill="currentColor" stroke="none"/></svg>
          </div>
          <span className="svc-name">アプリ開発</span>
          <span className="svc-tag">iOS・Android、使われるアプリを届ける</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/dev-web/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><circle cx="5.5" cy="6" r=".8" fill="currentColor" stroke="none"/><circle cx="8.5" cy="6" r=".8" fill="currentColor" stroke="none"/><circle cx="11.5" cy="6" r=".8" fill="currentColor" stroke="none"/><line x1="6" y1="13" x2="10" y2="13"/><line x1="6" y1="16" x2="15" y2="16"/></svg>
          </div>
          <span className="svc-name">Webサイト制作</span>
          <span className="svc-tag">目的から逆算して、設計する</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
      <a href="/service/support-system/" className="svc-row">
        <div className="svc-row-left">
          <div className="svc-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <span className="svc-name">システム・アプリ運用保守</span>
          <span className="svc-tag">リリース後も、同一チームが継続支援</span>
        </div>
        <span className="svc-row-arrow">↗</span>
      </a>
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


<section className="section" aria-labelledby="cases-h">
  <div className="wrap">
    <div className="cases-head">
      <div>
        <h2 className="h2 reveal" id="cases-h">実績</h2>
      </div>
      <a href="/cases" className="cases-more reveal">すべての実績を見る ↗</a>
    </div>
    <div className="cases-grid">
      <article className="case-card reveal">
        <div className="case-card-inner">
          <div className="case-thumb">
            <img src="https://picsum.photos/seed/manuf2025/720/420" alt="製造業 AI導入事例" />
          </div>
          <div className="case-tags">
            <span className="tag tag-ind">製造業</span>
            <span className="tag tag-svc">AIシステム開発</span>
          </div>
          <h3 className="case-title">生産管理システムへのAI組み込みで、検品工数を大幅削減</h3>
        </div>
      </article>
      <article className="case-card reveal d1">
        <div className="case-card-inner">
          <div className="case-thumb">
            <img src="https://picsum.photos/seed/edudx2025/720/420" alt="教育 DX推進支援事例" />
          </div>
          <div className="case-tags">
            <span className="tag tag-ind">教育</span>
            <span className="tag tag-svc">DX推進支援</span>
          </div>
          <h3 className="case-title">大手教育サービス企業のDX基盤構築、10年超の継続支援</h3>
        </div>
      </article>
      <article className="case-card reveal d2">
        <div className="case-card-inner">
          <div className="case-thumb">
            <img src="https://picsum.photos/seed/trainit2025/720/420" alt="IT研修 業務システム開発事例" />
          </div>
          <div className="case-tags">
            <span className="tag tag-ind">IT研修</span>
            <span className="tag tag-svc">業務システム開発</span>
          </div>
          <h3 className="case-title">国内最大級のIT研修企業、基幹システム刷新で業務効率化</h3>
        </div>
      </article>
    </div>
  </div>
</section>


<section className="section" aria-labelledby="about-h">
  <div className="wrap">
    <div className="about-inner">
      <div className="about-img reveal">
        <img src="https://picsum.photos/seed/officejp2025/900/680" alt="VIETISジャパン オフィス" />
      </div>
      <div>
        <h2 className="h2 reveal" id="about-h" style={{fontSize: 'clamp(1.7rem, 3vw, 3rem)', whiteSpace: 'nowrap'}}>VIETISジャパンについて</h2>
        <p className="about-intro reveal d2">
          伴走型開発パートナーとして、日本企業のAI・DX推進を支援。グローバル開発体制のもと、戦略立案から運用保守まで一社で完結します。
        </p>
        <div className="about-facts reveal d3">
          <div className="about-fact">
            <span className="fact-label">所在地</span>
            <span className="fact-val">東京都中央区日本橋人形町</span>
          </div>
          <div className="about-fact">
            <span className="fact-label">TEL</span>
            <span className="fact-val">03-5759-4881</span>
          </div>
          <div className="about-fact">
            <span className="fact-label">累計実績</span>
            <span className="fact-val">350件超 / 15年以上の業界経験</span>
          </div>
          <div className="about-fact">
            <span className="fact-label">認証取得</span>
            <span className="fact-val">CMMI Level 3 / ISO 27001 / Pマーク</span>
          </div>
        </div>
        <a href="/about" className="btn btn-dark reveal d4">企業情報を見る <span className="btn-arrow">↗</span></a>
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
      <div className="cta-right reveal d2">
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
      <TopPageInit />
    </>
  );
}
