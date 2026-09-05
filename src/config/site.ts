/**
 * VOLTRENA Digital — Central Site Configuration
 * Single source of truth for URLs, branding, contacts, and integrations.
 */

export const siteConfig = {
  name: 'VOLTRENA Digital',
  shortName: 'VOLTRENA',
  tagline: 'Системы цифрового роста и автоматизации продаж',
  description:
    'Превращаем путь от первого клика до продажи в управляемую систему. Сайты, реклама, CRM, AI-автоматизация и сквозная аналитика.',
  
  // Site URL configuration with custom domain support
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || 'https://voltrena.ru',
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH !== undefined
      ? process.env.NEXT_PUBLIC_BASE_PATH
      : '',

  // Verified Contacts
  telegramUrl: 'https://t.me/romanspes',
  telegramHandle: '@romanspes',
  whatsappPhone: '+7 (925) 757-78-88',
  whatsappPhoneRaw: '79257577888',
  whatsappUrl: 'https://wa.me/79257577888',
  email: 'hello@voltrena.com',
  leadRecipientEmail: 'hello@voltrena.com',

  // Lead Webhook Integration
  leadWebhookUrl: process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || '',

  // Analytics
  yandexMetrikaId: process.env.NEXT_PUBLIC_YM_ID || '112313992',

  // Helper for generating absolute canonical URLs
  getCanonicalUrl(pathname: string = '/'): string {
    const cleanBase = this.siteUrl.replace(/\/+$/, '');
    const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
    if (cleanPath === '/') return `${cleanBase}/`;
    return `${cleanBase}${cleanPath}`;
  },

  // Helper for generating base-aware static asset paths
  getAssetUrl(pathname: string): string {
    const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
    const base = this.basePath.replace(/\/+$/, '');
    return `${base}${cleanPath}`;
  },
} as const;
