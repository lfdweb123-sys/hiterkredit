'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { locales, localeNames, localeFlag, type Locale } from '@/i18n/config';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/simulator', label: t('simulate') },
    { href: '/apply', label: t('apply') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--color-line)]">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0 focus-ring">
          <span className="font-display font-bold text-xl tracking-tight text-[var(--color-ink)]">
            Fonds<span className="text-[var(--color-sky-deep)]">Link</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-ring ${
                pathname === item.href
                  ? 'bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)]'
                  : 'text-[var(--color-ink-soft)] hover:text-[var(--color-ink)] hover:bg-[var(--color-sky-mist)]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-[var(--color-ink-soft)] hover:bg-[var(--color-sky-mist)] transition-colors focus-ring"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
            >
              <span>{localeFlag[locale]}</span>
              <span>{localeNames[locale]}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${langOpen ? 'rotate-180' : ''}`}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-48 max-h-80 overflow-y-auto bg-white rounded-2xl shadow-xl border border-[var(--color-line)] py-2">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={pathname}
                    locale={l}
                    onClick={() => setLangOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-[var(--color-sky-mist)] transition-colors ${
                      l === locale ? 'text-[var(--color-sky-deep)] font-semibold' : 'text-[var(--color-ink)]'
                    }`}
                  >
                    <span>{localeFlag[l]}</span>
                    <span>{localeNames[l]}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/simulator"
            className="px-5 py-2.5 rounded-full bg-[var(--color-sky)] text-white text-sm font-semibold hover:bg-[var(--color-sky-deep)] transition-colors focus-ring"
          >
            {t('cta')}
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[var(--color-ink)] focus-ring rounded-lg"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-line)] bg-white px-5 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-xl text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-sky-mist)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="h-px bg-[var(--color-line)] my-2" />
          <p className="px-3 text-xs font-semibold text-[var(--color-ink-soft)] uppercase tracking-wide mb-1">
            Jazyk / Language
          </p>
          <div className="grid grid-cols-2 gap-1 px-1">
            {locales.map((l) => (
              <Link
                key={l}
                href={pathname}
                locale={l}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm ${
                  l === locale ? 'bg-[var(--color-sky-pale)] text-[var(--color-sky-deep)] font-semibold' : 'text-[var(--color-ink)]'
                }`}
              >
                <span>{localeFlag[l]}</span>
                <span>{localeNames[l]}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
