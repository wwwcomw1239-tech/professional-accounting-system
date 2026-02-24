'use client';

import { useEffect } from 'react';

export function LessonMarker({ courseSlug, order }: { courseSlug: string; order: number }) {
  useEffect(() => {
    const key = `progress:${courseSlug}`;
    const current = Number(localStorage.getItem(key) || 0);
    if (order > current) localStorage.setItem(key, String(order));
  }, [courseSlug, order]);

  return null;
}
