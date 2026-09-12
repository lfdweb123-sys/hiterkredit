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
    alternates: {
      canonical: `https://www.fondslink.com/${locale}/simulator`,
    },
  };
}

export default async function SimulatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    /* Section principale avec animation d'apparition fluide et padding responsive */
  } && (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20 transition-all duration-300">
      {/* En-tête : Eyebrow sous forme de trait avec texte + Titre */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[var(--color-sky)]"></span>
          <span className="text-sm font-semibold tracking-wide uppercase text-[var(--color-sky-deep)]">
            {t('eyebrow')}
          </span>
          <span className="h-px w-8 bg-[var(--color-sky)]"></span>
        </div>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
          {t('title')}
        </h1>
      </div>

      {/* Hero Image avec léger effet d'élévation et ombre douce au survol */}
      <div className="group rounded-3xl overflow-hidden mb-10 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <Image
          src={IMAGES.simulatorSide.src}
          alt={t('title')}
          width={IMAGES.simulatorSide.width}
          height={IMAGES.simulatorSide.height}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
      </div>

      {/* Formulaire / Composant du simulateur */}
      <div className="bg-[var(--color-sky-mist)]/30 rounded-3xl p-6 md:p-8 border border-[var(--color-sky-pale)] transition-all duration-300">
        <LoanSimulator />
      </div>
    </section>
  );
}
