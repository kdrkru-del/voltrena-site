import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/services/web-development',
    '/services/yandex-direct',
    '/services/seo-geo',
    '/services/b2b-lead-generation',
    '/services/web-scraping',
    '/services/ai-automation',
    '/services/telegram-bots',
    '/services/crm',
    '/services/analytics',
    '/solutions',
    '/cases',
    '/about',
    '/contact',
    '/privacy',
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: siteConfig.getCanonicalUrl(route ? `${route}/` : '/'),
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services/') ? 0.8 : 0.7,
  }));
}
