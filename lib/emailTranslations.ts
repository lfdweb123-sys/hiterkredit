import sl from '@/messages/sl.json';
import sk from '@/messages/sk.json';
import lt from '@/messages/lt.json';
import es from '@/messages/es.json';
import nl from '@/messages/nl.json';
import en from '@/messages/en.json';

const MESSAGES: Record<string, typeof en> = { sl, sk, lt, es, nl, en } as any;

export type ContractEmailText = {
  subject: string;
  greeting: string;
  intro: string;
  summaryTitle: string;
  amountLabel: string;
  durationLabel: string;
  monthlyLabel: string;
  instructions: string;
  closing: string;
};

export function getContractEmailText(locale: string): ContractEmailText {
  const messages = MESSAGES[locale] ?? MESSAGES.en;
  return (messages as any).contractEmail as ContractEmailText;
}
