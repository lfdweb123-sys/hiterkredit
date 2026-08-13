import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-ink)] text-white mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <span className="font-display font-bold text-xl">
            Posojil<span className="text-[var(--color-sky)]">nica</span>
          </span>
          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
            {t('tagline')}
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-white/50 mb-4">
            {t('linksTitle')}
          </h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white transition-colors">{nav('home')}</Link></li>
            <li><Link href="/simulator" className="hover:text-white transition-colors">{nav('simulate')}</Link></li>
            <li><Link href="/apply" className="hover:text-white transition-colors">{nav('apply')}</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">{nav('about')}</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">{nav('contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-white/50 mb-4">
            {t('legalTitle')}
          </h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li><Link href="/legal/terms" className="hover:text-white transition-colors">{t('terms')}</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-white transition-colors">{t('privacy')}</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-white transition-colors">{t('cookies')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-sm uppercase tracking-wide text-white/50 mb-4">
            {t('contactTitle')}
          </h3>
          <ul className="space-y-2.5 text-sm text-white/80">
            <li>
              <a href="mailto:podpora@fondslink.com" className="hover:text-white transition-colors">
                podpora@fondslink.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-white/50">
          <p>© {year} FondsLink. {t('rights')}</p>
          <p className="max-w-xl">{t('riskNote')}</p>
        </div>
      </div>
    </footer>
  );
}
