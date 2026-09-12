'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

export default function BottomNav() {
  const t = useTranslations('bottomNav');
  const pathname = usePathname();

  const items = [
    {
      href: '/',
      label: t('home'),
      icon: (active: boolean) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 11L12 4L20 11V19A1 1 0 0 1 19 20H15V14H9V20H5A1 1 0 0 1 4 19V11Z" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      href: '/simulator',
      label: t('simulate'),
      icon: (active: boolean) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
          <path d="M8 8H16M8 12H16M8 16H12" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round" />
        </svg>
      ),
    },
    {
      href: '/apply',
      label: t('apply'),
      icon: (active: boolean) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" />
        </svg>
      ),
    },
    {
      href: '/about',
      label: t('about'),
      icon: (active: boolean) => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={active ? 2 : 1.5} />
          <path d="M12 11V16M12 8V8.1" stroke="currentColor" strokeWidth={active ? 2 : 1.5} strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[var(--color-line)] pb-[env(safe-area-inset-bottom)] shadow-sm">
      <div className="grid grid-cols-4 h-12 items-center">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1 text-[10px] font-medium transition-colors ${
                active ? 'text-[var(--color-sky-deep)] font-semibold' : 'text-[var(--color-ink-soft)]'
              }`}
            >
              {item.icon(active)}
              <span className="leading-none">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
