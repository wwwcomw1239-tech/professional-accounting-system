import { Card } from '@/components/ui/Card';
import { getDownloads } from '@/lib/content';

export default function DownloadsPage() {
  const items = getDownloads();
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">ملفات قابلة للتحميل</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.slug}>
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-sm text-slate-600">{item.description}</p>
            <a href={item.fileUrl} className="mt-2 inline-block text-brand-700">
              تحميل
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
