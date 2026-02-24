import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Pagination } from '@/components/ui/Pagination';
import { LessonMarker } from '@/components/LessonMarker';
import { getCourseBySlug, getLessonCompiled, getLessons } from '@/lib/content';

export default async function LessonPage({ params }: { params: { courseSlug: string; lessonSlug: string } }) {
  const course = getCourseBySlug(params.courseSlug);
  const lessons = getLessons(params.courseSlug);
  const currentIndex = lessons.findIndex((l) => l.slug === params.lessonSlug);
  const prev = lessons[currentIndex - 1];
  const next = lessons[currentIndex + 1];
  const lesson = await getLessonCompiled(params.courseSlug, params.lessonSlug);

  return (
    <article>
      <LessonMarker courseSlug={params.courseSlug} order={lesson.frontmatter.order} />
      <Breadcrumbs
        items={[
          { label: 'الدورات', href: '/courses' },
          { label: course.title, href: `/courses/${params.courseSlug}` },
          { label: lesson.frontmatter.title }
        ]}
      />
      <h1 className="mb-4 text-2xl font-bold">{lesson.frontmatter.title}</h1>
      <div className="prose-rtl rounded-xl bg-white p-5">{lesson.content}</div>
      <Pagination
        prev={
          prev
            ? { href: `/courses/${params.courseSlug}/${prev.slug}`, label: prev.title }
            : undefined
        }
        next={
          next
            ? { href: `/courses/${params.courseSlug}/${next.slug}`, label: next.title }
            : undefined
        }
      />
    </article>
  );
}
