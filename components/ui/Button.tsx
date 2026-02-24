import Link from 'next/link';
import { ReactNode } from 'react';

type Props = { href?: string; children: ReactNode; ariaLabel?: string };

export function Button({ href, children, ariaLabel }: Props) {
  const cls = 'inline-flex rounded-lg bg-brand-500 px-4 py-2 text-white hover:bg-brand-700';
  return href ? (
    <Link href={href} aria-label={ariaLabel} className={cls}>
      {children}
    </Link>
  ) : (
    <button aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}
