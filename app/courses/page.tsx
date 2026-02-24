import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { getCourses } from '@/lib/content';

export default function CoursesPage({ searchParams }: { searchParams: { level?: string } }) {
  const courses = getCourses();
  const level = searchParams.level;
  const filtered = level ? courses.filter((c) => c.level === level) : courses;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">الدورات</h1>
      <div className="flex gap-2 text-sm">
        {['مبتدئ', 'متوسط', 'متقدم'].map((item) => (
          <Link key={item} href={`/courses?level=${item}`} className="rounded border px-3 py-1">
            {item}
          </Link>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((course) => (
          <Card key={course.slug}>
            <div className="mb-2 flex items-center justify-between">
              <h2 className="font-semibold">{course.title}</h2>
              <Badge text={course.level} />
            </div>
            <p className="mb-3 text-sm text-slate-600">{course.description}</p>
            <Link href={`/courses/${course.slug}`} className="text-brand-700">
              عرض الدورة
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
