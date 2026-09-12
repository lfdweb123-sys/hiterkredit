import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { title: t('termsTitle') };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  const footer = await getTranslations({ locale, namespace: 'footer' });

  return (
    <section className="mx-auto max-w-4xl px-5 md:px-8 py-14 md:py-20 transition-all duration-300">
      {/* En-tête : Eyebrow sous forme de trait avec texte + Titre */}
      <div className="mb-10 text-center md:text-left">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[var(--color-sky)]"></span>
          <span className="text-sm font-semibold tracking-wide uppercase text-[var(--color-sky-deep)]">
            {t('termsTitle')}
          </span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
          {t('termsTitle')}
        </h1>
      </div>

      {/* Conteneur de contenu juridique */}
      <div className="bg-[var(--color-sky-mist)]/30 rounded-3xl p-6 md:p-10 border border-[var(--color-sky-pale)] shadow-sm space-y-6 text-[var(--color-ink-soft)] leading-relaxed text-base md:text-lg transition-all duration-300">
        <p className="border-l-2 border-[var(--color-sky)] pl-4 py-0.5 text-[var(--color-ink)] font-medium">
          {t('termsP1')}
        </p>
        <p>{t('termsP2')}</p>
        <p>{t('termsP3')}</p>
        <p>{t('termsP4')}</p>

        {/* Note de risque encadrée pour accentuer la conformité */}
        <div className="mt-8 rounded-2xl bg-white p-5 border border-[var(--color-sky-pale)] text-sm text-[var(--color-ink-soft)] shadow-sm">
          <p className="font-semibold text-[var(--color-ink)] mb-1 uppercase tracking-wider text-xs">
            Avertissement
          </p>
          <p className="leading-relaxed">{footer('riskNote')}</p>
        </div>
      </div>
    </section>
  );
}
