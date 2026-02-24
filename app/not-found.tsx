import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold">404 - الصفحة غير موجودة</h1>
      <p className="my-4">عذراً، لم يتم العثور على الصفحة المطلوبة.</p>
      <Link href="/" className="text-brand-700">العودة للرئيسية</Link>
    </section>
  );
}
