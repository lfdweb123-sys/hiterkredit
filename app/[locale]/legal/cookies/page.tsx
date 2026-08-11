import { getTranslations } from 'next-intl/server';

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'footer' });

  return (
    <section className="mx-auto max-w-3xl px-5 md:px-8 py-16 md:py-20">
      <h1 className="font-display text-3xl font-bold text-[var(--color-ink)]">{t('cookies')}</h1>
      <div className="mt-8 space-y-5 text-[var(--color-ink-soft)] leading-relaxed">
        <p>
          Táto stránka používa minimálne množstvo technických údajov uložených vo
          vašom prehliadači (session storage), a to výlučne na to, aby si počas
          vašej návštevy zapamätala hodnoty zo simulátora pôžičky (sumu a dobu
          splácania), keď prejdete na formulár žiadosti.
        </p>
        <p>
          Tieto údaje sa automaticky vymažú, keď zatvoríte prehliadač, a nikdy nie sú
          odoslané na žiadny server.
        </p>
        <p>
          Stránka nepoužíva sledovacie ani reklamné cookies tretích strán.
        </p>
      </div>
    </section>
  );
}
