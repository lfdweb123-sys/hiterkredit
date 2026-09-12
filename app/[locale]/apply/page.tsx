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
    <>
      {/* =========================================================
          STYLES — identiques aux autres pages, pour une cohérence
          visuelle totale. Aucune variable de couleur n'est redéfinie :
          vos jetons --color-sky / --color-ink / --color-line restent
          exactement ceux de votre globals.css. Le contenu reste
          TOUJOURS visible par défaut (opacity:1) — l'animation au
          scroll n'est qu'une amélioration progressive en CSS pur,
          sans aucun JavaScript, donc sans risque qu'elle reste
          bloquée après un changement de langue.
          ========================================================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-reveal] { opacity: 1; }

            @keyframes reveal-fade-up {
              from { opacity: 0; transform: translateY(22px); }
              to { opacity: 1; transform: translateY(0); }
            }

            @supports (animation-timeline: view()) {
              @media (prefers-reduced-motion: no-preference) {
                [data-reveal] {
                  opacity: 0;
                  animation-name: reveal-fade-up;
                  animation-duration: 1ms;
                  animation-timing-function: cubic-bezier(.16,1,.3,1);
                  animation-fill-mode: both;
                  animation-timeline: view();
                  animation-range: entry 0% cover 35%;
                }
              }
            }

            .lift-on-hover { transition: transform .45s cubic-bezier(.16,1,.3,1), border-color .45s ease; }
            .lift-on-hover:hover { transform: translateY(-3px); }
          `,
        }}
      />

      <section className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-20">
        <div
          data-reveal
          className="rounded-3xl overflow-hidden mb-8 lift-on-hover ring-1 ring-[var(--color-line)]"
        >
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
    </>
  );
}
