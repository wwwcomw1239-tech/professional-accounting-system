import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CourseProgress } from '@/components/CourseProgress';
import { getCourseBySlug, getLessons } from '@/lib/content';

export default function CourseDetails({ params }: { params: { courseSlug: string } }) {
  const course = getCourseBySlug(params.courseSlug);
  const lessons = getLessons(params.courseSlug);

  return (
    <section className="space-y-4">
      <Breadcrumbs items={[{ label: 'الدورات', href: '/courses' }, { label: course.title }]} />
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-slate-600">{course.description}</p>
      <CourseProgress courseSlug={params.courseSlug} totalLessons={lessons.length} />
      <h2 className="font-semibold">دروس الدورة</h2>
      <ol className="list-decimal space-y-2 pr-6">
        {lessons.map((lesson) => (
          <li key={lesson.slug}>
            <Link href={`/courses/${params.courseSlug}/${lesson.slug}`} className="text-brand-700">
              {lesson.title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
