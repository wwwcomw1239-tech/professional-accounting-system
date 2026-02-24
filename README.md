# أكاديمية المحاسبة العربية (arabic-accounting-academy)

منصة Next.js جاهزة لتعلم المحاسبة مجاناً باللغة العربية (RTL) مع هيكل محتوى MDX قابل للتوسعة.

## التشغيل المحلي
```bash
npm install
npm run dev
```
ثم افتح: `http://localhost:3000`

## الأوامر المهمة
```bash
npm run lint
npm run build
npm run test
npm run format:check
```

## هيكل المحتوى
```text
content/
  tracks/
  courses/
    [course-slug]/
      index.mdx
      lessons/
        01-lesson.mdx
  glossary/
  downloads/
  pages/
```

## إضافة دورة جديدة
1. أنشئ مجلد: `content/courses/<course-slug>`.
2. أضف ملف `index.mdx` مع frontmatter:
   - `title, slug, description, order, level, duration, tags`
3. أنشئ `lessons/` وأضف ملفات مثل `01-intro.mdx`.
4. لكل درس استخدم frontmatter:
   - `title, slug, description, order, duration, tags`
5. شغّل `npm run dev` وتحقق من ظهور الدورة تلقائياً في `/courses`.

## SEO
- Metadata أساسي + OpenGraph في `app/layout.tsx`.
- `app/sitemap.ts` و `app/robots.ts` مفعّلة.

## النشر على Vercel
1. ارفع المشروع إلى GitHub.
2. من Vercel اختر **New Project**.
3. اربط المستودع واضغط Deploy.
4. اضبط `NEXT_PUBLIC_SITE_URL` في Environment Variables.

## GitHub Actions
يوجد workflow بسيط لبناء/فحص المشروع عند كل push.

## الترخيص
MIT
