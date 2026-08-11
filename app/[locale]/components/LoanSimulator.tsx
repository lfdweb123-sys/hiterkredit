'use client';

import { useMemo, useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  AMOUNT_MIN,
  AMOUNT_MAX,
  AMOUNT_STEP,
  DURATION_MIN,
  DURATION_MAX,
  DURATION_STEP,
  computeMonthlyPayment,
  formatCurrency,
} from '@/lib/loan';
import { useLoan } from '../loan-context';

export default function LoanSimulator({ compact = false }: { compact?: boolean }) {
  const t = useTranslations('simulator');
  const locale = useLocale();
  const { values, setValues } = useLoan();
  const [amount, setAmount] = useState(values.amount);
  const [duration, setDuration] = useState(values.duration);

  useEffect(() => {
    setAmount(values.amount);
    setDuration(values.duration);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValues({ amount, duration });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, duration]);

  const monthly = useMemo(() => computeMonthlyPayment(amount, duration), [amount, duration]);
  const total = monthly * duration;

  const amountFill = ((amount - AMOUNT_MIN) / (AMOUNT_MAX - AMOUNT_MIN)) * 100;
  const durationFill = ((duration - DURATION_MIN) / (DURATION_MAX - DURATION_MIN)) * 100;

  return (
    <div
      className={`bg-white rounded-3xl border border-[var(--color-line)] shadow-[0_20px_60px_-15px_rgba(27,111,194,0.25)] ${
        compact ? 'p-6 md:p-8' : 'p-6 md:p-10'
      }`}
    >
      {!compact && (
        <div className="mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)]">
            {t('title')}
          </h2>
          <p className="mt-2 text-[var(--color-ink-soft)]">{t('subtitle')}</p>
        </div>
      )}

      <div className="space-y-8">
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <label htmlFor="amount-range" className="text-sm font-semibold text-[var(--color-ink)]">
              {t('amountLabel')}
            </label>
            <span className="font-display text-xl font-bold text-[var(--color-sky-deep)] animate-count" key={amount}>
              {formatCurrency(amount, locale)}
            </span>
          </div>
          <input
            id="amount-range"
            type="range"
            min={AMOUNT_MIN}
            max={AMOUNT_MAX}
            step={AMOUNT_STEP}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="range-track"
            style={{ ['--fill' as string]: `${amountFill}%` }}
          />
          <div className="flex justify-between mt-1.5 text-xs text-[var(--color-ink-soft)]">
            <span>{formatCurrency(AMOUNT_MIN, locale)}</span>
            <span>{formatCurrency(AMOUNT_MAX, locale)}</span>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-3">
            <label htmlFor="duration-range" className="text-sm font-semibold text-[var(--color-ink)]">
              {t('durationLabel')}
            </label>
            <span className="font-display text-xl font-bold text-[var(--color-sky-deep)] animate-count" key={duration}>
              {duration} {t('months')}
            </span>
          </div>
          <input
            id="duration-range"
            type="range"
            min={DURATION_MIN}
            max={DURATION_MAX}
            step={DURATION_STEP}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="range-track"
            style={{ ['--fill' as string]: `${durationFill}%` }}
          />
          <div className="flex justify-between mt-1.5 text-xs text-[var(--color-ink-soft)]">
            <span>{DURATION_MIN} {t('months')}</span>
            <span>{DURATION_MAX} {t('months')}</span>
          </div>
        </div>
      </div>

      <div className="mt-9 rounded-2xl bg-[var(--color-sky)] text-white p-6 md:p-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm text-white/80">{t('monthlyPayment')}</p>
            <p className="font-display text-4xl md:text-5xl font-bold mt-1 animate-count" key={monthly}>
              {formatCurrency(monthly, locale)}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-white/80">{t('totalRepay')}</p>
            <p className="font-display text-xl font-semibold mt-1">{formatCurrency(total, locale)}</p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-xs text-[var(--color-ink-soft)] leading-relaxed">{t('rateNote')}</p>

      <Link
        href="/apply"
        className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] text-white font-semibold py-4 hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
      >
        {t('ctaUseValues')}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
      <p className="mt-3 text-center text-xs text-[var(--color-ink-soft)]">{t('disclaimer')}</p>
    </div>
  );
}
