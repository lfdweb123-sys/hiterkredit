import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import LoanSimulator from '../components/LoanSimulator';
import { IMAGES } from '@/lib/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('titleSimulate'),
    description: t('descSimulate'),
    alternates: { canonical: `https://www.posojilnica.com/${locale}/simulator` },
  };
}

export default async function SimulatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] text-sm font-semibold mb-5">
          {t('eyebrow')}
        </span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)]">
          {t('title')}
        </h1>
      </div>
      <div className="rounded-3xl overflow-hidden mb-8">
        <Image
          src={IMAGES.simulatorSide.src}
          alt={t('title')}
          width={IMAGES.simulatorSide.width}
          height={IMAGES.simulatorSide.height}
          className="w-full h-48 md:h-64 object-cover"
          priority
        />
      </div>
      <LoanSimulator />
    </section>
  );
}
