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
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20">
      <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">{t('termsTitle')}</h1>
      <div className="mt-8 space-y-5 text-[var(--color-ink-soft)] leading-relaxed">
        <p>{t('termsP1')}</p>
        <p>{t('termsP2')}</p>
        <p>{t('termsP3')}</p>
        <p>{t('termsP4')}</p>
        <p>{footer('riskNote')}</p>
      </div>
    </section>
  );
}
