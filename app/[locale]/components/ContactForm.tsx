'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contactForm');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-[var(--color-sky-pale)] border border-[var(--color-line)] p-8 text-center">
        <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">{t('successTitle')}</h3>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{t('successText')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[var(--color-line)] p-6 md:p-8">
      <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">{t('title')}</h3>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{t('subtitle')}</p>

      <div className="mt-6 space-y-4">
        <input required placeholder={t('name')} value={name} onChange={(e) => setName(e.target.value)} className="input" />
        <input required type="email" placeholder={t('email')} value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
        <input placeholder={t('subject')} value={subject} onChange={(e) => setSubject(e.target.value)} className="input" />
        <textarea required placeholder={t('message')} rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className="input resize-none" />
      </div>

      {status === 'error' && (
        <p className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">{t('errorText')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-6 w-full rounded-full bg-[var(--color-ink)] text-white font-semibold py-3.5 hover:bg-[var(--color-sky-deep)] transition-colors disabled:opacity-50 focus-ring"
      >
        {status === 'submitting' ? t('submitting') : t('submit')}
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-line);
          border-radius: 0.9rem;
          padding: 0.8rem 1rem;
          font-size: 0.9rem;
          color: var(--color-ink);
          background: white;
        }
        .input:focus {
          outline: none;
          border-color: var(--color-sky-deep);
          box-shadow: 0 0 0 3px rgba(27, 111, 194, 0.15);
        }
      `}</style>
    </form>
  );
}
