import Link from 'next/link';

export function Pagination({ prev, next }: { prev?: { href: string; label: string }; next?: { href: string; label: string } }) {
  return (
    <nav className="mt-8 flex justify-between" aria-label="التنقل بين الدروس">
      {prev ? <Link href={prev.href}>← {prev.label}</Link> : <span />}
      {next ? <Link href={next.href}>{next.label} →</Link> : <span />}
    </nav>
  );
}
