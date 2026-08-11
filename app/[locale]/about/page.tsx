import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import ContactForm from '../components/ContactForm';
import { IMAGES } from '@/lib/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('titleAbout'),
    description: t('descAbout'),
    alternates: { canonical: `https://www.hiterkredit.com/${locale}/about` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] text-sm font-semibold mb-6">
            {t('eyebrow')}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)] leading-relaxed">{t('intro')}</p>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={IMAGES.aboutTeam.src}
            alt={t('title')}
            width={IMAGES.aboutTeam.width}
            height={IMAGES.aboutTeam.height}
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      <section className="bg-[var(--color-sky-mist)] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)]">
            {t('missionTitle')}
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed">{t('missionText')}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)] text-center">
            {t('valuesTitle')}
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard title={t('value1Title')} text={t('value1Text')} />
            <ValueCard title={t('value2Title')} text={t('value2Text')} />
            <ValueCard title={t('value3Title')} text={t('value3Text')} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-sky)] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{t('presenceTitle')}</h2>
          <p className="mt-4 text-white/85 leading-relaxed">{t('presenceText')}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl p-7 border border-[var(--color-line)]">
      <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
    </div>
  );
}
