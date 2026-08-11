import type { Locale } from '@/i18n/config';

// Official financial supervisory authorities per market. Text-only badges —
// no third-party logos are reproduced, avoiding any implication of
// partnership or endorsement that unauthorized use of a trademark would
// create.
export const REGULATORS: Record<Locale, { name: string; short: string; country: string }> = {
  sl: { name: 'Banka Slovenije', short: 'BS', country: 'Slovenija' },
  sk: { name: 'Národná banka Slovenska', short: 'NBS', country: 'Slovensko' },
  lt: { name: 'Lietuvos bankas', short: 'LB', country: 'Lietuva' },
  es: { name: 'Oficina del Comisionado de Instituciones Financieras', short: 'OCIF', country: 'Puerto Rico' },
  nl: { name: 'De Nederlandsche Bank / FSMA', short: 'DNB', country: 'Nederland / België' },
  en: { name: 'Central Bank of Ireland', short: 'CBI', country: 'Ireland' },
};
