import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import {
  ShieldCheck,
  Zap,
  Lock,
  Headset,
  Star,
  ArrowRight,
  TriangleAlert,
  BadgeCheck,
  Clock3,
  Percent,
  Globe2,
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

/** Séparateur en vague entre deux sections de couleurs différentes (pur SVG, aucun texte). */
function WaveDivider({ top, bottom }: { top: string; bottom: string }) {
  return (
    <div style={{ backgroundColor: top, lineHeight: 0 }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        className="block w-full h-[46px] md:h-[76px]"
      >
        <path
          d="M0,30 C220,78 460,0 720,34 C980,68 1220,6 1440,42 L1440,96 L0,96 Z"
          fill={bottom}
        />
      </svg>
    </div>
  );
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

  const trustItems = [
    { icon: Clock3, label: hero('trust1') },
    { icon: Percent, label: hero('trust2') },
    { icon: Globe2, label: hero('trust3') },
  ];

  // Couleurs utilisées par WaveDivider — toutes reprises de vos jetons d'origine
  // (--color-sky-mist, --color-ink) ou de vos classes Tailwind d'origine (blanc, amber-50).
  const c = {
    white: '#ffffff',
    mist: 'var(--color-sky-mist)',
    ink: 'var(--color-ink)',
    amber50: '#fffbeb',
  };

  return (
    <>
      {/* =========================================================
          STYLES — uniquement typographie + animations.
          Aucune variable de couleur n'est redéfinie ici : vos jetons
          --color-sky / --color-ink / --color-line / --color-success /
          --color-warning restent exactement ceux de votre globals.css.
          ========================================================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

            .font-display { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; }
            .font-ledger { font-family: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace; font-variant-numeric: tabular-nums; letter-spacing: -0.01em; }

            [data-reveal] { opacity: 0; transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1); }
            [data-reveal][data-reveal-dir="up"] { transform: translateY(22px); }
            [data-reveal][data-reveal-dir="left"] { transform: translateX(-22px); }
            [data-reveal][data-reveal-dir="right"] { transform: translateX(22px); }
            [data-reveal].is-visible { opacity: 1; transform: translate(0,0); }
            @media (prefers-reduced-motion: reduce) {
              [data-reveal] { opacity: 1; transform: none; transition: none; }
            }

            .hover-underline { position: relative; text-decoration: none; }
            .hover-underline::after { content:''; position:absolute; left:0; right:100%; bottom:-2px; height:1px; background: currentColor; transition: right .4s cubic-bezier(.16,1,.3,1); }
            .hover-underline:hover::after, .hover-underline:focus-visible::after { right:0; }

            .ledger-row { position: relative; transition: background-color .35s ease, padding-left .35s ease; }
            .ledger-row:hover { background-color: var(--color-sky-pale); padding-left: .5rem; }

            .btn-sweep { position: relative; overflow: hidden; isolation: isolate; }
            .btn-sweep::before { content:''; position:absolute; inset:0; background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,.28) 45%, transparent 70%); transform: translateX(-120%); transition: transform .6s cubic-bezier(.16,1,.3,1); z-index:1; }
            .btn-sweep:hover::before, .btn-sweep:focus-visible::before { transform: translateX(120%); }

            .lift-on-hover { transition: transform .45s cubic-bezier(.16,1,.3,1), border-color .45s ease; }
            .lift-on-hover:hover { transform: translateY(-3px); }

            .group\\/icon:hover .icon-rotate { transform: rotate(-6deg) scale(1.06); }
            .icon-rotate { transition: transform .35s cubic-bezier(.16,1,.3,1); }

            .rule-grow { transform-origin:left; transform: scaleX(.35); transition: transform .45s cubic-bezier(.16,1,.3,1); }
            .group\\/step:hover .rule-grow { transform: scaleX(1); }

            .focus-ring:focus-visible { outline: 2px solid var(--color-sky-deep); outline-offset: 2px; }

            .hero-blob { border-radius: 62% 38% 55% 45% / 48% 42% 58% 52%; }
          `,
        }}
      />

      {/* ============================================================= */}
      {/* HERO                                                           */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
          <div>
            <div data-reveal data-reveal-dir="up">
              <p className="inline-flex items-center gap-2.5 text-sm text-[var(--color-ink-soft)] mb-6">
                <span className="h-px w-7 bg-[var(--color-sky)]" />
                {hero('eyebrow')}
              </p>
              <h1 className="font-display text-[2.6rem] md:text-6xl lg:text-[3.75rem] font-medium leading-[1.06] text-[var(--color-ink)] tracking-[-0.01em]">
                {hero('title')}
              </h1>
              <p className="mt-7 text-lg text-[var(--color-ink-soft)] max-w-lg leading-relaxed">
                {hero('subtitle')}
              </p>
            </div>

            <div data-reveal data-reveal-dir="up" data-reveal-delay="120">
              <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-4">
                <Link
                  href="/simulator"
                  className="btn-sweep w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-[var(--color-sky)] text-white font-medium hover:bg-[var(--color-sky-deep)] transition-colors duration-300 focus-ring"
                >
                  {hero('ctaPrimary')}
                </Link>
                <Link
                  href="#how-it-works"
                  className="hover-underline w-full sm:w-auto text-center px-7 py-3.5 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] font-medium hover:bg-[var(--color-sky-mist)] transition-colors duration-300 focus-ring"
                >
                  {hero('ctaSecondary')}
                </Link>
              </div>
            </div>

            <div data-reveal data-reveal-dir="up" data-reveal-delay="220">
              <div className="mt-12 flex flex-wrap divide-x divide-[var(--color-line)] border-t border-[var(--color-line)] pt-6">
                {trustItems.map(({ icon: Icon, label }, i) => (
                  <div key={i} className="flex items-center gap-2.5 pr-6 pl-6 first:pl-0 py-1">
                    <Icon size={16} className="text-[var(--color-sky-deep)] shrink-0" />
                    <span className="text-sm text-[var(--color-ink-soft)]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div data-reveal data-reveal-dir="right" data-reveal-delay="100">
              <div className="absolute -inset-8 -z-10 hidden md:block hero-blob bg-[var(--color-sky-pale)]" />

              <div className="rounded-[1.75rem] overflow-hidden mb-6 hidden md:block ring-1 ring-[var(--color-line)]">
                <Image
                  src={IMAGES.heroFamily.src}
                  alt={hero('title')}
                  width={IMAGES.heroFamily.width}
                  height={IMAGES.heroFamily.height}
                  className="w-full h-52 object-cover"
                  priority
                />
              </div>

              <LoanSimulator compact />

              <div className="mt-6 ledger-row flex items-center gap-3 rounded-2xl bg-white border border-[var(--color-line)] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] font-display font-semibold">
                  TC
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[var(--color-warning,#F59E0B)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                    <span className="ml-1.5 text-xs font-medium text-[var(--color-ink)]">
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
        </div>
      </section>

      <WaveDivider top={c.white} bottom={c.ink} />

      {/* ============================================================= */}
      {/* COMMENT ÇA MARCHE                                              */}
      {/* ============================================================= */}
      <section id="how-it-works" className="bg-[var(--color-ink)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div data-reveal data-reveal-dir="up">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white max-w-xl">
              {how('title')}
            </h2>
            <p className="mt-4 text-white/60 max-w-xl leading-relaxed">{how('subtitle')}</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-12">
            {[
              { num: '01', title: how('step1Title'), text: how('step1Text'), note: how('step1Note') },
              { num: '02', title: how('step2Title'), text: how('step2Text'), note: how('step2Note') },
              { num: '03', title: how('step3Title'), text: how('step3Text'), note: how('step3Note') },
            ].map((step, i) => (
              <div
                key={step.num}
                data-reveal
                data-reveal-dir="up"
                data-reveal-delay={String(i * 120)}
                className="group/step"
              >
                <span className="font-ledger text-sm text-[var(--color-sky)]">{step.num}</span>
                <div className="rule-grow mt-3 mb-5 h-px w-full bg-white/15" />
                <h3 className="font-display text-xl font-medium text-white">{step.title}</h3>
                <p className="mt-2.5 text-white/60 leading-relaxed">{step.text}</p>
                <p className="mt-4 text-sm font-medium text-[var(--color-sky)]">{step.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider top={c.ink} bottom={c.white} />

      {/* ============================================================= */}
      {/* FONCTIONNALITÉS                                                */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div data-reveal data-reveal-dir="up">
              <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-ink)] max-w-md">
                {features('title')}
              </h2>
              <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed max-w-md">
                {features('subtitle')}
              </p>
            </div>

            <div
              data-reveal
              data-reveal-dir="left"
              data-reveal-delay="100"
              className="hidden lg:flex flex-col gap-4"
            >
              <div className="relative rounded-[1.5rem] overflow-hidden lift-on-hover ring-1 ring-[var(--color-line)]">
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
              <div className="relative rounded-[1.5rem] overflow-hidden lift-on-hover ring-1 ring-[var(--color-line)]">
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

          <div className="border-t border-[var(--color-line)]">
            {[
              { title: features('f1Title'), text: features('f1Text'), icon: ShieldCheck },
              { title: features('f2Title'), text: features('f2Text'), icon: Zap },
              { title: features('f3Title'), text: features('f3Text'), icon: Lock },
              { title: features('f4Title'), text: features('f4Text'), icon: Headset },
            ].map((f, i) => (
              <div key={i} data-reveal data-reveal-dir="up" data-reveal-delay={String(i * 90)}>
                <div className="ledger-row group/icon flex items-start gap-6 py-7 border-b border-[var(--color-line)]">
                  <div className="w-11 h-11 shrink-0 rounded-2xl bg-[var(--color-sky-pale)] flex items-center justify-center text-[var(--color-sky-deep)]">
                    <f.icon size={20} className="icon-rotate" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-[var(--color-ink)]">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-[var(--color-ink-soft)] leading-relaxed max-w-md">
                      {f.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider top={c.white} bottom={c.mist} />

      {/* ============================================================= */}
      {/* TÉMOIGNAGE                                                     */}
      {/* ============================================================= */}
      <section className="bg-[var(--color-sky-mist)] py-16 md:py-20">
        <div data-reveal data-reveal-dir="up" className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <p className="inline-flex items-center gap-2.5 text-sm text-[var(--color-sky-deep)] mb-6">
            <span className="h-px w-7 bg-[var(--color-sky-deep)]" />
            {testimonial('eyebrow')}
          </p>
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="flex text-[var(--color-warning,#F59E0B)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={17} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-ledger font-medium text-[var(--color-ink)]">
              {testimonial('score')}
            </span>
            <span className="text-sm text-[var(--color-ink-soft)]">{testimonial('reviewCount')}</span>
          </div>
          <p className="font-display italic text-xl md:text-2xl font-medium text-[var(--color-ink)] leading-snug">
            {testimonial('quote')}
          </p>
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">{testimonial('author')}</p>
        </div>
      </section>

      <WaveDivider top={c.mist} bottom={c.ink} />

      {/* ============================================================= */}
      {/* PAYS                                                           */}
      {/* ============================================================= */}
      <section className="bg-[var(--color-ink)] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div data-reveal data-reveal-dir="up" className="text-center mb-14">
            <p className="inline-flex items-center gap-2.5 text-sm text-white/50 mb-5">
              <span className="h-px w-7 bg-[var(--color-sky)]" />
              {countries('eyebrow')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white">
              {countries('title')}
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto leading-relaxed">
              {countries('subtitle')}
            </p>
          </div>

          <div className="border-t border-white/15">
            {countryList.map((cItem, i) => (
              <div key={cItem.name} data-reveal data-reveal-dir="up" data-reveal-delay={String(i * 60)}>
                <div className="flex items-center gap-3.5 py-4 border-b border-white/15 px-2 transition-colors duration-300 hover:bg-white/5">
                  <span className="text-lg">{cItem.flag}</span>
                  <span className="text-white font-medium">{cItem.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider top={c.ink} bottom={c.white} />

      {/* ============================================================= */}
      {/* CONFORMITÉ RÉGLEMENTAIRE                                       */}
      {/* ============================================================= */}
      <section className="py-16 md:py-20">
        <div data-reveal data-reveal-dir="up" className="mx-auto max-w-3xl px-5 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--color-ink)]">
            {regulatory('title')}
          </h2>
          <p className="mt-3 text-[var(--color-ink-soft)]">{regulatory('subtitle')}</p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[var(--color-line)] px-6 py-4 lift-on-hover">
            <BadgeCheck size={26} className="text-[var(--color-sky-deep)] shrink-0" />
            <span className="text-sm font-medium text-[var(--color-ink)] text-left">
              {regulatory('badgeText')}
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CTA FINAL                                                      */}
      {/* ============================================================= */}
      <section className="py-16 md:py-20">
        <div data-reveal data-reveal-dir="up" className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--color-ink)]">
            {regulatory('ctaTitle')}
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">{regulatory('ctaSubtitle')}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/simulator"
              className="btn-sweep px-8 py-4 rounded-full bg-[var(--color-sky)] text-white font-medium hover:bg-[var(--color-sky-deep)] transition-colors duration-300 focus-ring inline-flex items-center gap-2"
            >
              {nav('cta')}
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/apply"
              className="hover-underline px-8 py-4 rounded-full border border-[var(--color-line)] text-[var(--color-ink)] font-medium hover:bg-[var(--color-sky-mist)] transition-colors duration-300 focus-ring"
            >
              {nav('apply')}
            </Link>
          </div>
        </div>
      </section>

      <WaveDivider top={c.white} bottom={c.amber50} />

      {/* ============================================================= */}
      {/* AVERTISSEMENT                                                  */}
      {/* ============================================================= */}
      <section className="bg-amber-50 py-5">
        <div className="mx-auto max-w-5xl px-5 md:px-8 flex items-start gap-3 text-xs text-amber-900">
          <TriangleAlert size={16} className="shrink-0 mt-0.5" />
          <p>{disclaimer('text')}</p>
        </div>
      </section>

      {/* =========================================================
          SCRIPT — active la révélation au scroll (aucune dépendance)
          ========================================================= */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              function reveal() {
                document.querySelectorAll('[data-reveal]').forEach(function (el) {
                  el.classList.add('is-visible');
                });
              }
              if (!('IntersectionObserver' in window)) { reveal(); return; }
              var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                  if (entry.isIntersecting) {
                    var el = entry.target;
                    var delay = el.getAttribute('data-reveal-delay') || '0';
                    el.style.transitionDelay = delay + 'ms';
                    el.classList.add('is-visible');
                    io.unobserve(el);
                  }
                });
              }, { threshold: 0.15, rootMargin: '0px 0px -64px 0px' });
              document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
            })();
          `,
        }}
      />
    </>
  );
}
