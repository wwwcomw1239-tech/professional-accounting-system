import { Card } from '@/components/ui/Card';

export default function QuizzesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">الاختبارات القصيرة</h1>
      <Card>
        <p>سؤال تجريبي: ما القيد المحاسبي لعملية شراء نقدي؟</p>
        <div className="mt-3 grid gap-2">
          <label><input type="radio" name="q1" /> من ح/ المشتريات إلى ح/ الصندوق</label>
          <label><input type="radio" name="q1" /> من ح/ الصندوق إلى ح/ المشتريات</label>
        </div>
      </Card>
    </section>
  );
}
