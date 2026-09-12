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

  return (
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

      {/* Hero Image premium avec halo lumineux et badge overlay */}
      <div className="relative mb-12">
        {/* Halo lumineux en arrière-plan */}
        <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-[var(--color-sky-pale)] via-[var(--color-sky)]/20 to-[var(--color-sky-pale)] opacity-60 blur-xl transition-all duration-500 group-hover:opacity-100" />

        <div className="relative group rounded-3xl overflow-hidden border border-[var(--color-sky-pale)] bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <Image
            src={IMAGES.simulatorSide.src}
            alt={t('title')}
            width={IMAGES.simulatorSide.width}
            height={IMAGES.simulatorSide.height}
            className="w-full h-52 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          
          {/* Dégradé sombre au bas de l'image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent opacity-80" />

          {/* Badge flottant pro en bas à gauche */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 flex items-center justify-between text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Simulation rapide & 100% sécurisée</span>
            </div>
          </div>
        </div>
      </div>

      {/* Formulaire / Composant du simulateur */}
      <div className="bg-[var(--color-sky-mist)]/30 rounded-3xl p-6 md:p-8 border border-[var(--color-sky-pale)] shadow-sm transition-all duration-300">
        <LoanSimulator />
      </div>
    </section>
  );
}
