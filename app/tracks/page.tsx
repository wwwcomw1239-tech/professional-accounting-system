import { Card } from '@/components/ui/Card';
import { getTracks } from '@/lib/content';

export default function TracksPage() {
  const tracks = getTracks();
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold">المسارات التعليمية</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {tracks.map((track) => (
          <Card key={track.slug}>
            <h2 className="font-semibold">{track.title}</h2>
            <p className="text-sm text-slate-600">{track.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
