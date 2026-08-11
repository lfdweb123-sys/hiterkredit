export const AMOUNT_MIN = 500;
export const AMOUNT_MAX = 25000;
export const AMOUNT_STEP = 100;
export const AMOUNT_DEFAULT = 5000;

export const DURATION_MIN = 6;
export const DURATION_MAX = 84;
export const DURATION_STEP = 1;
export const DURATION_DEFAULT = 24;

// Nominal annual rate used for the indicative simulation
export const NOMINAL_RATE = 0.069;

export function computeMonthlyPayment(
  amount: number,
  months: number,
  annualRate: number = NOMINAL_RATE
): number {
  const monthlyRate = annualRate / 12;
  if (monthlyRate === 0) return amount / months;
  const payment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  return payment;
}

export function formatCurrency(value: number, locale: string): string {
  return new Intl.NumberFormat(localeToIntl(locale), {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(value);
}

function localeToIntl(locale: string): string {
  const map: Record<string, string> = {
    sl: 'sl-SI',
    sk: 'sk-SK',
    lt: 'lt-LT',
    es: 'es-PR',
    nl: 'nl-NL',
    en: 'en-IE',
  };
  return map[locale] ?? 'en-IE';
}
