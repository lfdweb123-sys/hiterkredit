import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return { title: t('privacyTitle') };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });

  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20">
      <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">{t('privacyTitle')}</h1>
      <div className="mt-8 space-y-5 text-[var(--color-ink-soft)] leading-relaxed">
        <p>{t('privacyP1')}</p>
        <p>{t('privacyP2')}</p>
        <p>{t('privacyP3')}</p>
        <p>
          {t('privacyP4').split('podpora@posojilnica.com')[0]}
          <a href="mailto:podpora@posojilnica.com" className="text-[var(--color-sky-deep)] font-medium">
            podpora@posojilnica.com
          </a>
          {t('privacyP4').split('podpora@posojilnica.com')[1]}
        </p>
      </div>
    </section>
  );
}
