export interface ServiceItem {
  title: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'websites',
    title: 'Сайты и Разработка',
    services: [
      { title: 'Многостраничные сайты', href: '/services/web-development' },
      { title: 'Лендинги', href: '/services/web-development' },
      { title: 'Корпоративные порталы', href: '/services/web-development' },
      { title: 'Web-приложения', href: '/services/web-development' },
      { title: 'Telegram Mini Apps', href: '/services/telegram-bots' },
    ],
  },
  {
    id: 'marketing',
    title: 'Маркетинг',
    services: [
      { title: 'Яндекс Директ', href: '/services/yandex-direct' },
      { title: 'SEO продвижение', href: '/services/seo' },
      { title: 'GEO / Карты', href: '/services/geo' },
      { title: 'Авито', href: '/services/yandex-maps' },
      { title: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
    ],
  },
  {
    id: 'ai-automation',
    title: 'ИИ и Автоматизация',
    services: [
      { title: 'ИИ-агенты', href: '/services/ai-agents' },
      { title: 'Telegram боты', href: '/services/telegram-bots' },
      { title: 'Внедрение CRM', href: '/services/crm' },
      { title: 'Автоматизация процессов', href: '/services/automation' },
      { title: 'Интеграции API', href: '/services/automation' },
      { title: 'Голосовые роботы', href: '/services/ai-agents' },
    ],
  },
  {
    id: 'data',
    title: 'Работа с данными',
    services: [
      { title: 'Веб-парсинг', href: '/services/web-scraping' },
      { title: 'Сбор баз клиентов', href: '/services/web-scraping' },
      { title: 'Мониторинг цен', href: '/services/web-scraping' },
      { title: 'Обработка данных', href: '/services/web-scraping' },
      { title: 'Дашборды', href: '/services/analytics' },
    ],
  },
  {
    id: 'analytics',
    title: 'Аналитика',
    services: [
      { title: 'Яндекс Метрика', href: '/services/analytics' },
      { title: 'Сквозная аналитика', href: '/services/analytics' },
      { title: 'Увеличение конверсии (CRO)', href: '/services/analytics' },
      { title: 'Аналитика рекламы', href: '/services/analytics' },
      { title: 'CRM аналитика', href: '/services/analytics' },
    ],
  },
  {
    id: 'reputation',
    title: 'Репутация',
    services: [
      { title: 'Яндекс Бизнес', href: '/services/yandex-maps' },
      { title: 'Работа с отзывами', href: '/services/yandex-maps' },
      { title: 'SERM', href: '/services/seo' },
      { title: 'Мониторинг упоминаний', href: '/services/yandex-maps' },
    ],
  },
];

export interface Capability {
  id: string;
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  color: string;
}

export const capabilities: Capability[] = [
  {
    id: 'grow',
    tag: 'РОСТ',
    title: 'Привлечение клиентов',
    description: 'Мы находим спрос и превращаем его в квалифицированные заявки.',
    technologies: ['Яндекс Директ', 'SEO', 'GEO / ИИ-поиск', 'Карты', 'B2B Лидогенерация', 'Аутрич'],
    color: '#22c55e',
  },
  {
    id: 'build',
    tag: 'СОЗДАНИЕ',
    title: 'Цифровые продукты',
    description: 'Мы разрабатываем цифровые продукты, ориентированные на бизнес-результат.',
    technologies: ['Сайты', 'Лендинги', 'Web-приложения', 'Telegram Боты', 'Mini Apps', 'Внутренние системы'],
    color: '#6366f1',
  },
  {
    id: 'automate',
    tag: 'АВТОМАТИЗАЦИЯ',
    title: 'ИИ и Автоматизация',
    description: 'Мы автоматизируем рутину и берем на себя коммуникацию с клиентами.',
    technologies: ['ИИ-агенты', 'CRM', 'Воронки продаж', 'Бизнес-процессы', 'Интеграции', 'Голосовой ИИ'],
    color: '#f59e0b',
  },
  {
    id: 'data',
    tag: 'ДАННЫЕ',
    title: 'Работа с данными',
    description: 'Мы превращаем разрозненную информацию в полезные для бизнеса данные.',
    technologies: ['Веб-парсинг', 'B2B Базы', 'Мониторинг рынка', 'Анализ конкурентов', 'Аналитика', 'Дашборды'],
    color: '#06b6d4',
  },
];
