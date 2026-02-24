import Link from 'next/link';

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-4 text-sm text-slate-500" aria-label="Breadcrumbs">
      {items.map((item, idx) => (
        <span key={item.label}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {idx < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  );
}
