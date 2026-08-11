import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ApplyForm from '../components/ApplyForm';

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
    alternates: { canonical: `https://www.hiterkredit.com/${locale}/apply` },
  };
}

export default function ApplyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20">
      <ApplyForm />
    </section>
  );
}
