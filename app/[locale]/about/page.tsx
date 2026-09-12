import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { IMAGES } from '@/lib/images';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: t('titleAbout'),
    description: t('descAbout'),
    alternates: { canonical: `https://www.fondslink.com/${locale}/about` },
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  const contact = await getTranslations({ locale, namespace: 'contactPage' });
  const nav = await getTranslations({ locale, namespace: 'nav' });

  // Couleurs utilisées par WaveDivider — reprises telles quelles de vos jetons d'origine.
  const c = {
    white: '#ffffff',
    mist: 'var(--color-sky-mist)',
    sky: 'var(--color-sky)',
  };

  return (
    <>
      {/* =========================================================
          STYLES — identiques à ceux de la page d'accueil, pour une
          cohérence visuelle totale. Aucune variable de couleur n'est
          redéfinie : vos jetons --color-sky / --color-ink / --color-line
          restent exactement ceux de votre globals.css. La révélation
          au scroll est en CSS pur (animation-timeline: view()) et le
          contenu reste TOUJOURS visible par défaut — aucune dépendance
          à un script qui pourrait ne pas se relancer lors d'un
          changement de langue.
          ========================================================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

            .font-display { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; }

            [data-reveal] { opacity: 1; }

            @keyframes reveal-fade-up {
              from { opacity: 0; transform: translateY(22px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes reveal-fade-left {
              from { opacity: 0; transform: translateX(-22px); }
              to { opacity: 1; transform: translateX(0); }
            }
            @keyframes reveal-fade-right {
              from { opacity: 0; transform: translateX(22px); }
              to { opacity: 1; transform: translateX(0); }
            }

            @supports (animation-timeline: view()) {
              @media (prefers-reduced-motion: no-preference) {
                [data-reveal] {
                  opacity: 0;
                  animation-duration: 1ms;
                  animation-timing-function: cubic-bezier(.16,1,.3,1);
                  animation-fill-mode: both;
                  animation-timeline: view();
                  animation-range: entry 0% cover 35%;
                }
                [data-reveal][data-reveal-dir="up"],
                [data-reveal]:not([data-reveal-dir]) {
                  animation-name: reveal-fade-up;
                }
                [data-reveal][data-reveal-dir="left"] {
                  animation-name: reveal-fade-left;
                }
                [data-reveal][data-reveal-dir="right"] {
                  animation-name: reveal-fade-right;
                }
              }
            }

            .hover-underline { position: relative; text-decoration: none; }
            .hover-underline::after { content:''; position:absolute; left:0; right:100%; bottom:-2px; height:1px; background: currentColor; transition: right .4s cubic-bezier(.16,1,.3,1); }
            .hover-underline:hover::after, .hover-underline:focus-visible::after { right:0; }

            .btn-sweep { position: relative; overflow: hidden; isolation: isolate; }
            .btn-sweep::before { content:''; position:absolute; inset:0; background: linear-gradient(120deg, transparent 20%, rgba(255,255,255,.28) 45%, transparent 70%); transform: translateX(-120%); transition: transform .6s cubic-bezier(.16,1,.3,1); z-index:1; }
            .btn-sweep:hover::before, .btn-sweep:focus-visible::before { transform: translateX(120%); }

            .lift-on-hover { transition: transform .45s cubic-bezier(.16,1,.3,1), border-color .45s ease, box-shadow .45s ease; }
            .lift-on-hover:hover { transform: translateY(-4px); border-color: var(--color-sky); }

            .focus-ring:focus-visible { outline: 2px solid var(--color-sky-deep); outline-offset: 2px; }
          `,
        }}
      />

      {/* ============================================================= */}
      {/* INTRO                                                          */}
      {/* ============================================================= */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 pt-14 md:pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-flex items-center gap-2.5 text-sm text-[var(--color-ink-soft)] mb-6">
            <span className="h-px w-7 bg-[var(--color-sky)]" />
            {t('eyebrow')}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-ink)] leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg text-[var(--color-ink-soft)] leading-relaxed">{t('intro')}</p>
        </div>
        <div className="rounded-3xl overflow-hidden lift-on-hover ring-1 ring-[var(--color-line)]">
          <Image
            src={IMAGES.aboutTeam.src}
            alt={t('title')}
            width={IMAGES.aboutTeam.width}
            height={IMAGES.aboutTeam.height}
            className="w-full h-72 md:h-96 object-cover"
          />
        </div>
      </section>

      <WaveDivider top={c.white} bottom={c.mist} />

      {/* ============================================================= */}
      {/* MISSION                                                        */}
      {/* ============================================================= */}
      <section className="bg-[var(--color-sky-mist)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div data-reveal data-reveal-dir="up">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)]">
              {t('missionTitle')}
            </h2>
            <p className="mt-4 text-[var(--color-ink-soft)] leading-relaxed">{t('missionText')}</p>
          </div>
          <div
            data-reveal
            data-reveal-dir="right"
            className="rounded-3xl overflow-hidden lift-on-hover ring-1 ring-[var(--color-line)]"
          >
            <Image
              src={IMAGES.aboutMission.src}
              alt={t('missionTitle')}
              width={IMAGES.aboutMission.width}
              height={IMAGES.aboutMission.height}
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      <WaveDivider top={c.mist} bottom={c.white} />

      {/* ============================================================= */}
      {/* VALEURS                                                        */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h2
            data-reveal
            data-reveal-dir="up"
            className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)] text-center"
          >
            {t('valuesTitle')}
          </h2>
          <div
            data-reveal
            data-reveal-dir="up"
            className="mt-10 rounded-3xl overflow-hidden max-w-4xl mx-auto lift-on-hover ring-1 ring-[var(--color-line)]"
          >
            <Image
              src={IMAGES.aboutValues.src}
              alt={t('valuesTitle')}
              width={IMAGES.aboutValues.width}
              height={IMAGES.aboutValues.height}
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div data-reveal data-reveal-dir="up">
              <ValueCard title={t('value1Title')} text={t('value1Text')} />
            </div>
            <div data-reveal data-reveal-dir="up">
              <ValueCard title={t('value2Title')} text={t('value2Text')} />
            </div>
            <div data-reveal data-reveal-dir="up">
              <ValueCard title={t('value3Title')} text={t('value3Text')} />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider top={c.white} bottom={c.sky} />

      {/* ============================================================= */}
      {/* PRÉSENCE                                                       */}
      {/* ============================================================= */}
      <section className="bg-[var(--color-sky)] py-16 md:py-20">
        <div data-reveal data-reveal-dir="up" className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{t('presenceTitle')}</h2>
          <p className="mt-4 text-white/85 leading-relaxed">{t('presenceText')}</p>
        </div>
      </section>

      <WaveDivider top={c.sky} bottom={c.white} />

      {/* ============================================================= */}
      {/* CTA CONTACT                                                    */}
      {/* ============================================================= */}
      <section className="py-16 md:py-24">
        <div data-reveal data-reveal-dir="up" className="mx-auto max-w-2xl px-5 md:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-ink)]">
            {contact('title')}
          </h2>
          <p className="mt-3 text-[var(--color-ink-soft)]">{contact('subtitle')}</p>
          <Link
            href="/contact"
            className="btn-sweep mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-sky)] text-white font-semibold hover:bg-[var(--color-sky-deep)] transition-colors duration-300 focus-ring"
          >
            {nav('contact')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="lift-on-hover rounded-3xl p-7 border border-[var(--color-line)]">
      <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">{text}</p>
    </div>
  );
}
