import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import LoanSimulator from './components/LoanSimulator';
import { IMAGES } from '@/lib/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('titleHome'),
    description: t('descHome'),
    alternates: { canonical: `https://www.posojilnica.com/${locale}` },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const hero = await getTranslations({ locale, namespace: 'hero' });
  const how = await getTranslations({ locale, namespace: 'howItWorks' });
  const features = await getTranslations({ locale, namespace: 'features' });
  const countries = await getTranslations({ locale, namespace: 'countries' });
  const nav = await getTranslations({ locale, namespace: 'nav' });

  const countryList = [
    { flag: '🇸🇮', name: 'Slovenija' },
    { flag: '🇸🇰', name: 'Slovensko' },
    { flag: '🇱🇹', name: 'Lietuva' },
    { flag: '🇵🇷', name: 'Puerto Rico' },
    { flag: '🇳🇱', name: 'Nederland / Vlaanderen' },
    { flag: '🇮🇪', name: 'Ireland' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-rise">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] text-sm font-semibold mb-6">
              {hero('eyebrow')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-[var(--color-ink)]">
              {hero('title')}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)] max-w-lg leading-relaxed">
              {hero('subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/simulator"
                className="px-7 py-3.5 rounded-full bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
              >
                {hero('ctaPrimary')}
              </Link>
              <a
                href="#how-it-works"
                className="px-7 py-3.5 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-sky-mist)] transition-colors focus-ring"
              >
                {hero('ctaSecondary')}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-ink-soft)]">
              <TrustItem label={hero('trust1')} />
              <TrustItem label={hero('trust2')} />
              <TrustItem label={hero('trust3')} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-[var(--color-sky-pale)] rounded-[2.5rem] -z-10 hidden md:block" />
            <div className="rounded-3xl overflow-hidden mb-6 hidden md:block">
              <Image
                src={IMAGES.heroFamily.src}
                alt={hero('title')}
                width={IMAGES.heroFamily.width}
                height={IMAGES.heroFamily.height}
                className="w-full h-56 object-cover"
                priority
              />
            </div>
            <LoanSimulator compact />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-[var(--color-sky-mist)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] text-center">
            {how('title')}
          </h2>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard num="1" title={how('step1Title')} text={how('step1Text')} />
            <StepCard num="2" title={how('step2Title')} text={how('step2Text')} />
            <StepCard num="3" title={how('step3Title')} text={how('step3Text')} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)]">
                {features('title')}
              </h2>
            </div>
            <div className="rounded-3xl overflow-hidden hidden lg:block">
              <Image
                src={IMAGES.featuresSecurity.src}
                alt={features('title')}
                width={IMAGES.featuresSecurity.width}
                height={IMAGES.featuresSecurity.height}
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title={features('f1Title')} text={features('f1Text')} icon="shield" />
            <FeatureCard title={features('f2Title')} text={features('f2Text')} icon="bolt" />
            <FeatureCard title={features('f3Title')} text={features('f3Text')} icon="lock" />
            <FeatureCard title={features('f4Title')} text={features('f4Text')} icon="chat" />
          </div>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="bg-[var(--color-sky)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{countries('title')}</h2>
          <p className="mt-4 text-white/85 max-w-2xl mx-auto">{countries('subtitle')}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {countryList.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white font-medium backdrop-blur-sm"
              >
                <span className="text-xl">{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)]">
            {hero('ctaPrimary')}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/simulator"
              className="px-8 py-4 rounded-full bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
            >
              {nav('cta')}
            </Link>
            <Link
              href="/apply"
              className="px-8 py-4 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-sky-mist)] transition-colors focus-ring"
            >
              {nav('apply')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 13L9 17L19 7" stroke="var(--color-success)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </span>
  );
}

function StepCard({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[var(--color-line)]">
      <span className="font-display text-4xl font-bold text-[var(--color-sky)]">{num}</span>
      <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
    </div>
  );
}

const icons: Record<string, React.ReactNode> = {
  shield: (
    <path d="M12 3L5 6V11C5 15.5 8 19.5 12 21C16 19.5 19 15.5 19 11V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
  bolt: <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 11V7A4 4 0 0 1 16 7V11" stroke="currentColor" strokeWidth="1.8" />
    </>
  ),
  chat: (
    <path d="M4 4H20V16H8L4 20V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  ),
};

function FeatureCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <div className="rounded-3xl p-7 border border-[var(--color-line)] hover:border-[var(--color-sky)] transition-colors">
      <div className="w-12 h-12 rounded-2xl bg-[var(--color-sky-pale)] flex items-center justify-center text-[var(--color-sky-deep)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          {icons[icon]}
        </svg>
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
    </div>
  );
}
