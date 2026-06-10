'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name    = (form.querySelector('#name') as HTMLInputElement).value.trim();
    const company = (form.querySelector('#company') as HTMLInputElement).value.trim();
    const email   = (form.querySelector('#email') as HTMLInputElement).value.trim();
    const type    = (form.querySelector('#type') as HTMLSelectElement).value;
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value.trim();
    const tel     = (form.querySelector('#tel') as HTMLInputElement).value.trim();

    if (!name || !company || !email || !type || !message) {
      alert('必須項目をすべてご入力ください。');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('正しいメールアドレスを入力してください。');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mojzldgn', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, company, email, tel, type, message,
          _subject: `【お問い合わせ】${type} / ${company} ${name}`,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const data = await res.json();
        throw new Error(data.error || '送信エラー');
      }
    } catch {
      setSubmitting(false);
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    }
  };

  if (submitted) {
    return (
      <div id="contact-thanks" className="contact-thanks show" role="alert" aria-live="polite">
        <div className="thanks-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 className="thanks-title">送信が完了しました</h2>
        <p className="thanks-body">
          お問い合わせいただきありがとうございます。<br />
          内容を確認のうえ、2営業日以内にご連絡いたします。
        </p>
        <a href="/" className="btn btn-dark">
          トップへ戻る <span className="btn-arrow">↗</span>
        </a>
      </div>
    );
  }

  return (
    <form id="contact-form" className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field-group">
          <label className="field-label" htmlFor="name">お名前<span className="req">*</span></label>
          <input className="field-input" type="text" id="name" name="name" placeholder="山田 太郎" autoComplete="name" required />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="company">会社名<span className="req">*</span></label>
          <input className="field-input" type="text" id="company" name="company" placeholder="株式会社サンプル" autoComplete="organization" required />
        </div>
      </div>
      <div className="field-row">
        <div className="field-group">
          <label className="field-label" htmlFor="email">メールアドレス<span className="req">*</span></label>
          <input className="field-input" type="email" id="email" name="email" placeholder="taro.yamada@example.com" autoComplete="email" required />
        </div>
        <div className="field-group">
          <label className="field-label" htmlFor="tel">電話番号<span className="opt">任意</span></label>
          <input className="field-input" type="tel" id="tel" name="tel" placeholder="03-0000-0000" autoComplete="tel" />
        </div>
      </div>
      <div className="field-group">
        <label className="field-label" htmlFor="type">お問い合わせ種別<span className="req">*</span></label>
        <select className="field-select" id="type" name="type" required defaultValue="">
          <option value="" disabled>選択してください</option>
          <option value="サービスについて">サービスについて</option>
          <option value="料金・お見積りについて">料金・お見積りについて</option>
          <option value="実績・事例について">実績・事例について</option>
          <option value="採用について">採用について</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div className="field-group">
        <label className="field-label" htmlFor="message">お問い合わせ内容<span className="req">*</span></label>
        <textarea className="field-textarea" id="message" name="message" placeholder="お問い合わせ内容をご記入ください。" required />
      </div>
      <p className="privacy-note">
        ご入力いただいた個人情報は、お問い合わせへの対応および弊社サービスのご案内にのみ使用します。<br />
        詳細は<a href="/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>をご確認ください。
      </p>
      <button type="submit" className="btn btn-primary submit-btn" disabled={submitting}>
        {submitting ? '送信中...' : <>送信する <span className="btn-arrow">↗</span></>}
      </button>
    </form>
  );
}
