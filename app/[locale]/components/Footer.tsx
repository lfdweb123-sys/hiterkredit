import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[var(--color-ink)] text-white mt-24">
      {/* Séparateur fluide / vague en haut du footer */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%] overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-16 text-[var(--color-ink)] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-10 pb-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Marque & Description */}
        <div>
          <span className="font-display font-bold text-2xl tracking-tight">
            Fonds<span className="text-[var(--color-sky)]">Link</span>
          </span>
          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
            {t('tagline')}
          </p>
        </div>

        {/* Navigation rapide */}
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-4 bg-[var(--color-sky)]"></span>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-white/50">
              {t('linksTitle')}
            </h3>
          </div>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {nav('home')}
              </Link>
            </li>
            <li>
              <Link href="/simulator" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {nav('simulate')}
              </Link>
            </li>
            <li>
              <Link href="/apply" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {nav('apply')}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {nav('about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {nav('contact')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Informations légales */}
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-4 bg-[var(--color-sky)]"></span>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-white/50">
              {t('legalTitle')}
            </h3>
          </div>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/legal/terms" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {t('terms')}
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {t('privacy')}
              </Link>
            </li>
            <li>
              <Link href="/legal/cookies" className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {t('cookies')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-4 bg-[var(--color-sky)]"></span>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-white/50">
              {t('contactTitle')}
            </h3>
          </div>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:podpora@fondslink.com"
                className="text-white/70 hover:text-[var(--color-sky)] transition-colors inline-flex items-center gap-2"
              >
                <span>contact@fondslink.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page / Mentions */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/50">
          <p>© {year} FondsLink. {t('rights')}</p>
          <p className="max-w-xl leading-relaxed">{t('riskNote')}</p>
        </div>
      </div>
    </footer>
  );
}
