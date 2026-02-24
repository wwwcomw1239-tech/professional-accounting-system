'use client';

import { useEffect, useState } from 'react';

export function CourseProgress({ courseSlug, totalLessons }: { courseSlug: string; totalLessons: number }) {
  const key = `progress:${courseSlug}`;
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const value = Number(localStorage.getItem(key) || 0);
    setCompleted(value);
  }, [key]);

  const percent = totalLessons ? Math.round((completed / totalLessons) * 100) : 0;
  return <p className="text-sm text-slate-600">تقدمك في الدورة: {percent}%</p>;
}
