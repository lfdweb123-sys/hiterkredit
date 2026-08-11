'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AMOUNT_DEFAULT, DURATION_DEFAULT } from '@/lib/loan';

type LoanValues = {
  amount: number;
  duration: number;
};

type LoanContextType = {
  values: LoanValues;
  setValues: (v: LoanValues) => void;
};

const LoanContext = createContext<LoanContextType | null>(null);

const STORAGE_KEY = 'hiterkredit_simulation';

export function LoanProvider({ children }: { children: ReactNode }) {
  const [values, setValuesState] = useState<LoanValues>({
    amount: AMOUNT_DEFAULT,
    duration: DURATION_DEFAULT,
  });

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (typeof parsed.amount === 'number' && typeof parsed.duration === 'number') {
          setValuesState(parsed);
        }
      }
    } catch {
      // ignore — sessionStorage unavailable or invalid data
    }
  }, []);

  const setValues = (v: LoanValues) => {
    setValuesState(v);
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(v));
    } catch {
      // ignore
    }
  };

  return (
    <LoanContext.Provider value={{ values, setValues }}>
      {children}
    </LoanContext.Provider>
  );
}

export function useLoan() {
  const ctx = useContext(LoanContext);
  if (!ctx) throw new Error('useLoan must be used within LoanProvider');
  return ctx;
}
