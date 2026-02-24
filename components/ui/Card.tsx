import { ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }) {
  return <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">{children}</article>;
}
