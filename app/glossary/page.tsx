import { GlossarySearch } from '@/components/GlossarySearch';
import { getGlossary } from '@/lib/content';

export default function GlossaryPage() {
  const terms = getGlossary();
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">القاموس المحاسبي</h1>
      <GlossarySearch terms={terms} />
    </section>
  );
}
