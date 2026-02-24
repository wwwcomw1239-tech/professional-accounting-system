import Link from 'next/link';

const links = [
  ['/', 'الرئيسية'],
  ['/tracks', 'المسارات'],
  ['/courses', 'الدورات'],
  ['/glossary', 'القاموس'],
  ['/downloads', 'التحميلات'],
  ['/faq', 'الأسئلة الشائعة']
];

export function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <Link href="/" className="font-bold text-brand-700">
          أكاديمية المحاسبة العربية
        </Link>
        <nav className="flex gap-3 text-sm">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="hover:text-brand-700">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
