import { computeMonthlyPayment, NOMINAL_RATE } from './loan';

export type ContractInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amount: number;
  duration: number;
  locale: string;
};

export type ContractData = {
  reference: string;
  issueDate: Date;
  borrower: {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    phone: string;
  };
  amount: number;
  duration: number;
  nominalRatePct: number; // annual, %
  effectiveApr: number; // annual, % (compounded)
  monthlyPayment: number;
  totalRepay: number;
  totalCost: number;
  firstInstallmentDate: Date;
  lastInstallmentDate: Date;
  locale: string;
};

function computeEffectiveApr(nominalRate: number): number {
  const monthlyRate = nominalRate / 12;
  return (Math.pow(1 + monthlyRate, 12) - 1) * 100;
}

export function buildContractData(input: ContractInput): ContractData {
  const monthlyPayment = computeMonthlyPayment(input.amount, input.duration, NOMINAL_RATE);
  const totalRepay = monthlyPayment * input.duration;
  const totalCost = totalRepay - input.amount;

  const issueDate = new Date();
  const firstInstallmentDate = new Date(issueDate);
  firstInstallmentDate.setMonth(firstInstallmentDate.getMonth() + 1);
  const lastInstallmentDate = new Date(issueDate);
  lastInstallmentDate.setMonth(lastInstallmentDate.getMonth() + input.duration);

  const reference = `DEM-${issueDate.getFullYear()}-${String(
    Math.floor(Math.random() * 900000) + 100000
  )}`;

  return {
    reference,
    issueDate,
    borrower: {
      firstName: input.firstName,
      lastName: input.lastName,
      fullName: `${input.firstName} ${input.lastName}`,
      email: input.email,
      phone: input.phone,
    },
    amount: input.amount,
    duration: input.duration,
    nominalRatePct: NOMINAL_RATE * 100,
    effectiveApr: computeEffectiveApr(NOMINAL_RATE),
    monthlyPayment,
    totalRepay,
    totalCost,
    firstInstallmentDate,
    lastInstallmentDate,
    locale: input.locale,
  };
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

export function formatMoney(value: number, locale: string): string {
  return new Intl.NumberFormat(localeToIntl(locale), {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(localeToIntl(locale), {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(2)} %`;
}
