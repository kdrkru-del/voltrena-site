import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { digitalProducts } from '@/data/digital-products';

export const dynamic = 'force-static';

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
    ...digitalProducts.map((product) => `/solutions/${product.slug}`),
    '/cases',
    '/about',
    '/contact',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: siteConfig.getCanonicalUrl(route ? `${route}/` : '/'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/solutions/') ? 0.9 : route.startsWith('/services/') ? 0.8 : 0.7,
  }));
}
