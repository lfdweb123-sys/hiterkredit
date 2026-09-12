import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import TrustBar from './components/TrustBar';
import { LoanProvider } from './loan-context';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE_URL = 'https://www.fondslink.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = `${SITE_URL}/${l}`;
  });
  languages['x-default'] = `${SITE_URL}/sl`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('titleHome'),
      template: `%s — ${t('siteName')}`,
    },
    description: t('descHome'),
    verification: {
      google: 'Ts-YtItyFwcXUHdUPJ3T4S6HHyOebHl_wbEDsIodinE',
    },
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages,
    },
    openGraph: {
      siteName: t('siteName'),
      locale,
      type: 'website',
      url: `${SITE_URL}/${locale}`,
      title: t('titleHome'),
      description: t('descHome'),
      images: [
        {
          url: '/images/og-cover.jpg',
          width: 1200,
          height: 630,
          alt: t('titleHome'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('titleHome'),
      description: t('descHome'),
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/images/favicon-32.png', sizes: '32x32', type: 'image/png' },
        { url: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: '/images/apple-touch-icon.png',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'FondsLink',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: 'podpora@fondslink.com',
    areaServed: ['SI', 'SK', 'LT', 'PR', 'NL', 'BE', 'IE'],
    availableLanguage: ['sl', 'sk', 'lt', 'es', 'nl', 'en'],
  };

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[var(--color-ink)] antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LoanProvider>
            <Header />
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <TrustBar locale={locale as Locale} />
            <Footer />
            <BottomNav />
          </LoanProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
