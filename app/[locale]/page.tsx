import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock,
  Headset,
  Star,
  ArrowRight,
  TriangleAlert,
  BadgeCheck,
} from 'lucide-react';
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
  const testimonial = await getTranslations({ locale, namespace: 'testimonial' });
  const countries = await getTranslations({ locale, namespace: 'countries' });
  const regulatory = await getTranslations({ locale, namespace: 'regulatory' });
  const disclaimer = await getTranslations({ locale, namespace: 'disclaimer' });
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
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] text-sm font-semibold mb-6">
              {hero('eyebrow')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-[var(--color-ink)]">
              {hero('title')}
            </h1>
            <p className="mt-6 text-lg text-[var(--color-ink-soft)] max-w-lg leading-relaxed">
              {hero('subtitle')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/simulator"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
              >
                {hero('ctaPrimary')}
              </Link>
              
              {/* FIXED: Added opening <Link> tag and removed stray </a> */}
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-sky-mist)] transition-colors focus-ring"
              >
                {hero('ctaSecondary')}
              </Link>
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

            {/* Mini témoignage sous le simulateur, comme sur la maquette */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white border border-[var(--color-line)] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] font-display font-bold">
                TC
              </div>
              <div>
                <div className="flex items-center gap-1 text-[var(--color-warning,#F59E0B)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                  <span className="ml-1.5 text-xs font-semibold text-[var(--color-ink)]">
                    {hero('heroRatingScore')}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-[var(--color-ink-soft)]">
                  {hero('heroTestimonial')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-[var(--color-sky-mist)] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] text-center">
            {how('title')}
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)] text-center max-w-2xl mx-auto">
            {how('subtitle')}
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard num="01" title={how('step1Title')} text={how('step1Text')} note={how('step1Note')} />
            <StepCard num="02" title={how('step2Title')} text={how('step2Text')} note={how('step2Note')} />
            <StepCard num="03" title={how('step3Title')} text={how('step3Text')} note={how('step3Note')} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)]">
                {features('title')}
              </h2>
              <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed max-w-md">
                {features('subtitle')}
              </p>
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={IMAGES.featuresSecurity.src}
                  alt={features('imageCaption1')}
                  width={IMAGES.featuresSecurity.width}
                  height={IMAGES.featuresSecurity.height}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/50 backdrop-blur-sm px-3 py-2 text-xs font-medium text-white">
                  {features('imageCaption1')}
                </span>
              </div>
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src={IMAGES.aboutTeam.src}
                  alt={features('imageCaption2')}
                  width={IMAGES.aboutTeam.width}
                  height={IMAGES.aboutTeam.height}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute bottom-3 left-3 right-3 rounded-xl bg-black/50 backdrop-blur-sm px-3 py-2 text-xs font-medium text-white">
                  {features('imageCaption2')}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title={features('f1Title')} text={features('f1Text')} icon={<ShieldCheck size={22} />} />
            <FeatureCard title={features('f2Title')} text={features('f2Text')} icon={<Zap size={22} />} />
            <FeatureCard title={features('f3Title')} text={features('f3Text')} icon={<Lock size={22} />} />
            <FeatureCard title={features('f4Title')} text={features('f4Text')} icon={<Headset size={22} />} />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL BAND */}
      <section className="bg-[var(--color-sky-mist)] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-[var(--color-sky-deep)] text-xs font-semibold tracking-wide mb-6">
            {testimonial('eyebrow')}
          </span>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex text-[var(--color-warning,#F59E0B)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-semibold text-[var(--color-ink)]">{testimonial('score')}</span>
            <span className="text-sm text-[var(--color-ink-soft)]">{testimonial('reviewCount')}</span>
          </div>
          <p className="font-display text-xl md:text-2xl font-medium text-[var(--color-ink)] leading-snug">
            {testimonial('quote')}
          </p>
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">{testimonial('author')}</p>
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="bg-[var(--color-ink)] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-semibold tracking-wide mb-5">
            {countries('eyebrow')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">{countries('title')}</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">{countries('subtitle')}</p>
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

      {/* REGULATORY */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)]">
            {regulatory('title')}
          </h2>
          <p className="mt-3 text-[var(--color-ink-soft)]">{regulatory('subtitle')}</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[var(--color-line)] px-6 py-4">
            <BadgeCheck size={28} className="text-[var(--color-sky-deep)]" />
            <span className="text-sm font-medium text-[var(--color-ink)] text-left">
              {regulatory('badgeText')}
            </span>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)]">
            {regulatory('ctaTitle')}
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">{regulatory('ctaSubtitle')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/simulator"
              className="px-8 py-4 rounded-full bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring inline-flex items-center gap-2"
            >
              {nav('cta')}
              <ArrowRight size={18} />
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

      {/* DISCLAIMER */}
      <section className="border-t border-[var(--color-line)] bg-amber-50 py-5">
        <div className="mx-auto max-w-5xl px-5 md:px-8 flex items-start gap-3 text-xs text-amber-900">
          <TriangleAlert size={16} className="shrink-0 mt-0.5" />
          <p>{disclaimer('text')}</p>
        </div>
      </section>
    </>
  );
}

function TrustItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-2">
      <CheckCircle2 size={18} className="text-[var(--color-success)]" />
      {label}
    </span>
  );
}

function StepCard({
  num,
  title,
  text,
  note,
}: {
  num: string;
  title: string;
  text: string;
  note: string;
}) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-[var(--color-line)]">
      <span className="font-display text-4xl font-bold text-[var(--color-sky)]">{num}</span>
      <h3 className="mt-4 font-display text-xl font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
      <p className="mt-4 text-sm font-medium text-[var(--color-sky-deep)]">{note}</p>
    </div>
  );
}

function FeatureCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl p-7 border border-[var(--color-line)] hover:border-[var(--color-sky)] transition-colors">
      <div className="w-12 h-12 rounded-2xl bg-[var(--color-sky-pale)] flex items-center justify-center text-[var(--color-sky-deep)]">
        {icon}
      </div>
      <h3 className="mt-5 font-display text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
    </div>
  );
}
