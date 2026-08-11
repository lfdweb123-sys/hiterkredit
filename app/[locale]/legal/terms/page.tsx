import { getTranslations } from 'next-intl/server';

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20">
      <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">{t('terms')}</h1>
      <div className="mt-8 prose-legal space-y-5 text-[var(--color-ink-soft)] leading-relaxed">
        <p>
          Tento dokument upravuje podmienky používania webovej stránky HiterKredit
          (www.hiterkredit.com) a služieb simulácie a žiadosti o pôžičku, ktoré
          poskytuje. Používaním stránky súhlasíte s týmito podmienkami.
        </p>
        <p>
          Simulácia pôžičky dostupná na stránke má výlučne informatívny charakter a
          nepredstavuje záväznú ponuku úveru. Konečná ponuka závisí od individuálneho
          posúdenia žiadosti.
        </p>
        <p>
          HiterKredit si vyhradzuje právo odmietnuť akúkoľvek žiadosť o pôžičku bez
          uvedenia dôvodu, v súlade s platnou legislatívou danej krajiny.
        </p>
        <p>
          Obsah stránky je chránený autorským právom. Akékoľvek kopírovanie alebo
          šírenie obsahu bez súhlasu je zakázané.
        </p>
        <p>{t('riskNote')}</p>
      </div>
    </section>
  );
}
