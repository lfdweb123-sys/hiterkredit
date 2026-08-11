import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20">
      <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">{t('privacy')}</h1>
      <div className="mt-8 space-y-5 text-[var(--color-ink-soft)] leading-relaxed">
        <p>
          HiterKredit rešpektuje vaše súkromie. Simulátor pôžičky na tejto stránke
          nevyžaduje žiadne osobné údaje a nič sa neukladá na našich serveroch —
          hodnoty zostávajú iba vo vašom prehliadači počas relácie.
        </p>
        <p>
          Osobné údaje (meno, priezvisko, e-mail, telefón), ktoré nám poskytnete
          prostredníctvom kontaktného formulára alebo formulára žiadosti o pôžičku,
          sú použité výlučne na účely vybavenia vašej žiadosti a odoslané priamo na
          náš e-mail. Tieto údaje neukladáme do databázy.
        </p>
        <p>
          Vaše údaje nikdy nepredávame ani neposkytujeme tretím stranám na
          marketingové účely.
        </p>
        <p>
          Pre akékoľvek otázky týkajúce sa ochrany údajov nás kontaktujte na{' '}
          <a href="mailto:podpora@hiterkredit.com" className="text-[var(--color-sky-deep)] font-medium">
            podpora@hiterkredit.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
