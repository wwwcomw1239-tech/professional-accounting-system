import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const routes = ['/', '/tracks', '/courses', '/glossary', '/downloads', '/faq', '/about', '/privacy', '/terms'];
  return routes.map((route) => ({ url: `${base}${route}` }));
}
