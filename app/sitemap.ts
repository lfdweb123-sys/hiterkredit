import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const SITE_URL = 'https://www.hiterkredit.com';
const paths = ['', '/simulator', '/apply', '/about', '/legal/terms', '/legal/privacy', '/legal/cookies'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
          ),
        },
      });
    }
  }

  return entries;
}
