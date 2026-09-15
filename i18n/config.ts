export const locales = ['sl', 'sk', 'lt', 'es', 'nl', 'en', 'fr', 'el', 'tr', 'sr', 'ro', 'bg', 'mk'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'sl';

export const localeNames: Record<Locale, string> = {
  sl: 'Slovenščina',
  sk: 'Slovenčina',
  lt: 'Lietuvių',
  es: 'Español',
  nl: 'Nederlands',
  en: 'English',
  fr: 'Français',
  el: 'Ελληνικά',
  tr: 'Türkçe',
  sr: 'Српски',
  ro: 'Română',
  bg: 'Български',
  mk: 'Македонски',
};

// ISO country flags/labels shown next to the language switcher
export const localeCountry: Record<Locale, string> = {
  sl: 'Slovenija',
  sk: 'Slovensko',
  lt: 'Lietuva',
  es: 'Puerto Rico',
  nl: 'Nederland / Vlaanderen',
  en: 'Ireland',
  fr: 'France',
  el: 'Ελλάδα',
  tr: 'Türkiye',
  sr: 'Србија',
  ro: 'România',
  bg: 'България',
  mk: 'Северна Македонија',
};

export const localeFlag: Record<Locale, string> = {
  sl: '🇸🇮',
  sk: '🇸🇰',
  lt: '🇱🇹',
  es: '🇵🇷',
  nl: '🇳🇱',
  en: '🇺🇸',
  fr: '🇫🇷',
  el: '🇬🇷',
  tr: '🇹🇷',
  sr: '🇷🇸',
  ro: '🇷🇴',
  bg: '🇧🇬',
  mk: '🇲🇰',
};
