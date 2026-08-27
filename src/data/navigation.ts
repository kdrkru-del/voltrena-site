export interface NavLink {
  label: string
  href: string
}

export interface ServiceNavLink extends NavLink {
  description?: string
}

export const navigationLinks: NavLink[] = [
  { label: 'Услуги', href: '/services' },
  { label: 'Решения', href: '/solutions' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contact' },
];

export const serviceLinks: ServiceNavLink[] = [
  { label: 'Создание сайтов', href: '/services/web-development', description: 'Лендинги, многостраничные и корпоративные сайты' },
  { label: 'Яндекс Директ', href: '/services/yandex-direct', description: 'Контекстная реклама и лидогенерация' },
  { label: 'SEO / GEO', href: '/services/seo-geo', description: 'Поисковое продвижение и ИИ-поиск' },
  { label: 'B2B лидогенерация', href: '/services/b2b-lead-generation', description: 'Автоматизированный поиск корпоративных клиентов' },
  { label: 'Парсинг данных', href: '/services/web-scraping', description: 'Сбор и обработка данных из интернета' },
  { label: 'ИИ и автоматизация', href: '/services/ai-automation', description: 'ИИ-агенты, боты и автоматизация процессов' },
  { label: 'Telegram боты', href: '/services/telegram-bots', description: 'Боты и Mini Apps в Telegram' },
  { label: 'CRM интеграция', href: '/services/crm', description: 'Настройка и интеграция CRM-систем' },
  { label: 'Аналитика', href: '/services/analytics', description: 'Сквозная аналитика и дашборды' },
];

export const ctaButton = {
  label: 'Обсудить проект',
  href: '/contact',
} as const;
