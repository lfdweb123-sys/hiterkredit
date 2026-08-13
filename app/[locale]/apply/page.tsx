import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import ApplyForm from '../components/ApplyForm';
import { IMAGES } from '@/lib/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('titleApply'),
    description: t('descApply'),
    alternates: { canonical: `https://www.fondslink.com/${locale}/apply` },
  };
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'form' });

  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20">
      <div className="rounded-3xl overflow-hidden mb-8">
        <Image
          src={IMAGES.applyHero.src}
          alt={t('title')}
          width={IMAGES.applyHero.width}
          height={IMAGES.applyHero.height}
          className="w-full h-48 md:h-64 object-cover"
          priority
        />
      </div>
      <ApplyForm />
    </section>
  );
}
