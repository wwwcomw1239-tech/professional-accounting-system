import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">تعلم المحاسبة مجاناً بالعربية</h1>
      <p className="text-slate-600">منصة جاهزة لإضافة المحتوى: مسارات، دورات، دروس، اختبارات، وقاموس محاسبي.</p>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>مسارات تعليمية منظمة</Card>
        <Card>دروس قابلة للإدارة عبر MDX</Card>
        <Card>بحث محلي سريع في القاموس</Card>
      </div>
      <Button href="/courses" ariaLabel="تصفح الدورات">
        ابدأ بالدورات
      </Button>
    </section>
  );
}
