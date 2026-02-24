import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-4 px-4 py-6 text-sm text-slate-600">
        <p>© أكاديمية المحاسبة العربية</p>
        <div className="flex gap-4">
          <Link href="/about">من نحن</Link>
          <Link href="/privacy">سياسة الخصوصية</Link>
          <Link href="/terms">شروط الاستخدام</Link>
        </div>
      </div>
    </footer>
  );
}
