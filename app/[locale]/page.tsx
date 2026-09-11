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
    alternates: { canonical: `https://www.fondslink.com/${locale}` },
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
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-28 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-start">
          <div className="animate-rise">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-6 bg-[var(--color-brass,#B08D3E)]" />
              <span className="text-sm text-[var(--color-ink-soft)]">{hero('eyebrow')}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-[var(--color-ink)] max-w-xl">
              {hero('title')}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)] max-w-md leading-relaxed">
              {hero('subtitle')}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/simulator"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-[10px] bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
              >
                {hero('ctaPrimary')}
              </Link>
              
                href="#how-it-works"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-[10px] border border-[var(--color-line)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-sky-mist)] transition-colors focus-ring"
              >
                {hero('ctaSecondary')}
              </a>
            </div>
            <div className="mt-10 pt-6 border-t border-[var(--color-line)] flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-ink-soft)]">
              <TrustItem label={hero('trust1')} />
              <TrustItem label={hero('trust2')} />
              <TrustItem label={hero('trust3')} />
            </div>
          </div>

          <div className="relative lg:pt-6">
            <div className="absolute -top-6 -right-4 w-[72%] aspect-[4/3] rounded-2xl overflow-hidden hidden md:block">
              <Image
                src={IMAGES.heroFamily.src}
                alt={hero('title')}
                width={IMAGES.heroFamily.width}
                height={IMAGES.heroFamily.height}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[var(--color-ink)]/15" />
            </div>

            <div className="relative md:mt-28 bg-white border border-[var(--color-line)] rounded-2xl overflow-hidden shadow-[0_24px_60px_-28px_rgba(16,24,38,0.35)]">
              <div className="h-1.5 bg-[var(--color-sky)]" />
              <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-[var(--color-line)]">
                <span className="text-xs text-[var(--color-ink-soft)]">{hero('eyebrow')}</span>
                <SealMark />
              </div>
              <div className="p-6">
                <LoanSimulator compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 md:py-28 border-t border-[var(--color-line)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] max-w-lg">
            {how('title')}
          </h2>
          <div className="mt-14 divide-y divide-[var(--color-line)] md:divide-y-0 md:grid md:grid-cols-3 md:divide-x">
            <StepCard num="1" title={how('step1Title')} text={how('step1Text')} />
            <StepCard num="2" title={how('step2Title')} text={how('step2Text')} />
            <StepCard num="3" title={how('step3Title')} text={how('step3Text')} />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[var(--color-sky-mist)]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] max-w-md">
              {features('title')}
            </h2>
            <div className="rounded-lg overflow-hidden border border-[var(--color-line)] hidden lg:block">
              <Image
                src={IMAGES.featuresSecurity.src}
                alt={features('title')}
                width={IMAGES.featuresSecurity.width}
                height={IMAGES.featuresSecurity.height}
                className="w-full h-52 object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            <FeatureCard title={features('f1Title')} text={features('f1Text')} icon="shield" />
            <FeatureCard title={features('f2Title')} text={features('f2Text')} icon="bolt" />
            <FeatureCard title={features('f3Title')} text={features('f3Text')} icon="lock" />
            <FeatureCard title={features('f4Title')} text={features('f4Text')} icon="chat" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{countries('title')}</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed">{countries('subtitle')}</p>
          <div className="mt-14 flex flex-wrap justify-center gap-5">
            {countryList.map((c, i) => (
              <div
                key={c.name}
                className="flex items-center gap-2.5 border border-dashed border-white/25 rounded-md px-5 py-3 text-white/90 font-medium"
                style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)` }}
              >
                <span className="text-xl">{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)]">
            {hero('ctaPrimary')}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/simulator"
              className="px-8 py-4 rounded-[10px] bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
            >
              {nav('cta')}
            </Link>
            <Link
              href="/apply"
              className="px-8 py-4 rounded-[10px] border border-[var(--color-line)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-sky-mist)] transition-colors focus-ring"
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

function SealMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="var(--color-brass,#B08D3E)" strokeWidth="1.4" />
      <path d="M8 12.5L10.5 15L16 9" stroke="var(--color-brass,#B08D3E)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepCard({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="py-8 md:py-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0">
      <span className="font-display text-5xl font-semibold text-[var(--color-brass,#B08D3E)] tabular-nums">
        {num}
      </span>
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
  chat: <path d="M4 4H20V16H8L4 20V4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
};

function FeatureCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-0.5 w-10 h-10 shrink-0 rounded-md border border-[var(--color-line)] bg-white flex items-center justify-center text-[var(--color-sky-deep)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          {icons[icon]}
        </svg>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{title}</h3>
        <p className="mt-1.5 text-sm text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
