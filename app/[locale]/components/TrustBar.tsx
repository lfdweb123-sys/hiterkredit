import { getTranslations } from 'next-intl/server';
import { REGULATORS } from '@/lib/regulators';
import type { Locale } from '@/i18n/config';

export default async function TrustBar({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'trust' });
  const reg = REGULATORS[locale];

  return (
    <section className="bg-white py-14 md:py-16 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <h2 className="font-display text-xl md:text-2xl font-bold text-[var(--color-ink)]">{t('title')}</h2>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)] max-w-xl mx-auto">{t('subtitle')}</p>

        <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-sky-mist)] px-6 py-4">
          <div className="w-12 h-12 shrink-0 rounded-xl bg-[var(--color-sky)] text-white flex items-center justify-center font-display font-bold text-sm">
            {reg.short}
          </div>
          <div className="text-left">
            <p className="font-semibold text-[var(--color-ink)] text-sm">{reg.name}</p>
            <p className="text-xs text-[var(--color-ink-soft)]">{reg.country}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
