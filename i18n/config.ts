export const locales = ['sl', 'sk', 'lt', 'es', 'nl', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sl';

export const localeNames: Record<Locale, string> = {
  sl: 'Slovenščina',
  sk: 'Slovenčina',
  lt: 'Lietuvių',
  es: 'Español',
  nl: 'Nederlands',
  en: 'English',
};

// ISO country flags/labels shown next to the language switcher
export const localeCountry: Record<Locale, string> = {
  sl: 'Slovenija',
  sk: 'Slovensko',
  lt: 'Lietuva',
  es: 'Puerto Rico',
  nl: 'Nederland / Vlaanderen',
  en: 'Ireland',
};

export const localeFlag: Record<Locale, string> = {
  sl: '🇸🇮',
  sk: '🇸🇰',
  lt: '🇱🇹',
  es: '🇵🇷',
  nl: '🇳🇱',
  en: '🇮🇪',
};
