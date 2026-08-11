'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useLoan } from '../loan-context';
import { AMOUNT_MIN, AMOUNT_MAX, DURATION_MIN, DURATION_MAX } from '@/lib/loan';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ApplyForm() {
  const t = useTranslations('form');
  const locale = useLocale();
  const { values } = useLoan();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState(values.amount);
  const [duration, setDuration] = useState(values.duration);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    setAmount(values.amount);
    setDuration(values.duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.amount, values.duration]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consent) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phone, amount, duration, message, locale }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-[var(--color-sky-pale)] border border-[var(--color-line)] p-10 text-center">
        <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-success)] flex items-center justify-center mb-4">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-[var(--color-ink)]">{t('successTitle')}</h2>
        <p className="mt-2 text-[var(--color-ink-soft)]">{t('successText')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-[var(--color-line)] shadow-[0_20px_60px_-15px_rgba(27,111,194,0.15)] p-6 md:p-10">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)]">{t('title')}</h2>
      <p className="mt-2 text-[var(--color-ink-soft)]">{t('subtitle')}</p>
      <p className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--color-sky-deep)] bg-[var(--color-sky-pale)] px-4 py-2 rounded-full">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 11V16M12 8V8.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        {t('prefilled')}
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label={t('firstName')} required>
          <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input" />
        </Field>
        <Field label={t('lastName')} required>
          <input required value={lastName} onChange={(e) => setLastName(e.target.value)} className="input" />
        </Field>
        <Field label={t('email')} required>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
        </Field>
        <Field label={t('phone')} required>
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" />
        </Field>
        <Field label={t('amount')} required>
          <input
            required
            type="number"
            min={AMOUNT_MIN}
            max={AMOUNT_MAX}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="input"
          />
        </Field>
        <Field label={t('duration')} required>
          <input
            required
            type="number"
            min={DURATION_MIN}
            max={DURATION_MAX}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="input"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label={t('message')}>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="input resize-none" />
        </Field>
      </div>

      <label className="mt-6 flex items-start gap-3 text-sm text-[var(--color-ink-soft)] cursor-pointer">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 w-4 h-4 accent-[var(--color-sky-deep)]"
        />
        {t('consent')}
      </label>

      {status === 'error' && (
        <p className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">{t('errorText')}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || !consent}
        className="mt-7 w-full rounded-full bg-[var(--color-sky)] text-white font-semibold py-4 hover:bg-[var(--color-sky-deep)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus-ring"
      >
        {status === 'submitting' ? t('submitting') : t('submit')}
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-line);
          border-radius: 0.9rem;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
          color: var(--color-ink);
          background: white;
          transition: border-color 0.15s ease;
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

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[var(--color-ink)] mb-1.5">
        {label} {required && <span className="text-[var(--color-sky-deep)]">*</span>}
      </label>
      {children}
    </div>
  );
}
