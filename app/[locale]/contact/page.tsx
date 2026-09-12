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
    title: t('titleContact'),
    description: t('descContact'),
    alternates: { canonical: `https://www.fondslink.com/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contactPage' });

  return (
    <section className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20 transition-all duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Colonne gauche : Infos & Image */}
        <div>
          {/* Eyebrow sous forme de trait avec texte */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-[var(--color-sky)]"></span>
            <span className="text-sm font-semibold tracking-wide uppercase text-[var(--color-sky-deep)]">
              {t('eyebrow')}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-ink)] tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="mt-5 text-lg text-[var(--color-ink-soft)] leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Image avec léger effet de survol */}
          <div className="group mt-10 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <Image
              src={IMAGES.contactHero.src}
              alt={t('title')}
              width={IMAGES.contactHero.width}
              height={IMAGES.contactHero.height}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>

          {/* Bloc d'informations */}
          <div className="mt-8 space-y-4">
            <InfoRow label={t('emailLabel')} value={t('emailValue')} href={`mailto:${t('emailValue')}`} />
            <InfoRow label={t('responseLabel')} value={t('responseValue')} />
            <InfoRow label={t('hoursLabel')} value={t('hoursValue')} />
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-[var(--color-sky-mist)]/30 rounded-3xl p-6 md:p-8 border border-[var(--color-sky-pale)] shadow-sm transition-all duration-300">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[var(--color-line)] p-5 transition-all duration-200 hover:border-[var(--color-sky-pale)] hover:bg-[var(--color-sky-mist)]/20">
      <div className="w-10 h-10 shrink-0 rounded-xl bg-[var(--color-sky-pale)] flex items-center justify-center text-[var(--color-sky-deep)]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">{label}</p>
        {href ? (
          <a href={href} className="mt-0.5 block font-medium text-[var(--color-ink)] hover:text-[var(--color-sky-deep)] transition-colors">
            {value}
          </a>
        ) : (
          <p className="mt-0.5 font-medium text-[var(--color-ink)]">{value}</p>
        )}
      </div>
    </div>
  );
}
