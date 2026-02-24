import { ReactNode } from 'react';

export function Callout({ children }: { children: ReactNode }) {
  return <div className="rounded-lg border-r-4 border-brand-500 bg-brand-50 p-4 text-sm">{children}</div>;
}
