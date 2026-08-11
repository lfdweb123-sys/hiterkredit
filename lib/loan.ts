export const AMOUNT_MIN = 500;
export const AMOUNT_MAX = 10_000_000;
export const AMOUNT_DEFAULT = 5000;

export const DURATION_MIN = 6;
export const DURATION_MAX = 84;
export const DURATION_STEP = 1;
export const DURATION_DEFAULT = 24;

// Nominal annual rate used for the indicative simulation
export const NOMINAL_RATE = 0.069;

// The amount range spans 500 to 10,000,000 - a linear slider would make
// everyday loan amounts (a few thousand euros) impossible to select
// precisely. We map the slider position (0-1000) logarithmically onto the
// amount range so small and large amounts are equally easy to reach.
const SLIDER_STEPS = 1000;
const LOG_MIN = Math.log(AMOUNT_MIN);
const LOG_MAX = Math.log(AMOUNT_MAX);

export function sliderPositionToAmount(position: number): number {
  const ratio = position / SLIDER_STEPS;
  const value = Math.exp(LOG_MIN + ratio * (LOG_MAX - LOG_MIN));
  return roundAmount(value);
}

export function amountToSliderPosition(amount: number): number {
  const clamped = Math.min(Math.max(amount, AMOUNT_MIN), AMOUNT_MAX);
  const ratio = (Math.log(clamped) - LOG_MIN) / (LOG_MAX - LOG_MIN);
  return Math.round(ratio * SLIDER_STEPS);
}

export const SLIDER_MAX = SLIDER_STEPS;

function roundAmount(value: number): number {
  if (value < 1000) return Math.round(value / 10) * 10;
  if (value < 10000) return Math.round(value / 50) * 50;
  if (value < 100000) return Math.round(value / 500) * 500;
  if (value < 1000000) return Math.round(value / 5000) * 5000;
  return Math.round(value / 50000) * 50000;
}

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
    maximumFractionDigits: 0,
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
