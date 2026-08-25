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
    title: 'Websites & Development',
    services: [
      { title: 'Websites', href: '/services/web-development' },
      { title: 'Landing Pages', href: '/services/web-development' },
      { title: 'Corporate Websites', href: '/services/web-development' },
      { title: 'Web Applications', href: '/services/web-development' },
      { title: 'Telegram Mini Apps', href: '/services/telegram-bots' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    services: [
      { title: 'Yandex Direct', href: '/services/yandex-direct' },
      { title: 'SEO', href: '/services/seo' },
      { title: 'GEO', href: '/services/geo' },
      { title: 'Yandex Maps', href: '/services/yandex-maps' },
      { title: 'B2B Lead Generation', href: '/services/b2b-lead-generation' },
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    services: [
      { title: 'AI Agents', href: '/services/ai-agents' },
      { title: 'Telegram Bots', href: '/services/telegram-bots' },
      { title: 'CRM', href: '/services/crm' },
      { title: 'Workflow Automation', href: '/services/automation' },
      { title: 'Integrations', href: '/services/automation' },
      { title: 'Voice AI', href: '/services/ai-agents' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    services: [
      { title: 'Web Scraping', href: '/services/web-scraping' },
      { title: 'Lead Databases', href: '/services/web-scraping' },
      { title: 'Monitoring', href: '/services/web-scraping' },
      { title: 'Data Processing', href: '/services/web-scraping' },
      { title: 'Dashboards', href: '/services/analytics' },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics',
    services: [
      { title: 'Yandex Metrica', href: '/services/analytics' },
      { title: 'End-to-end Analytics', href: '/services/analytics' },
      { title: 'CRO', href: '/services/analytics' },
      { title: 'Advertising Analytics', href: '/services/analytics' },
      { title: 'CRM Analytics', href: '/services/analytics' },
    ],
  },
  {
    id: 'reputation',
    title: 'Reputation',
    services: [
      { title: 'Yandex Business', href: '/services/yandex-maps' },
      { title: 'Reviews', href: '/services/yandex-maps' },
      { title: 'SERM', href: '/services/seo' },
      { title: 'Reputation Monitoring', href: '/services/yandex-maps' },
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
    tag: 'GROW',
    title: 'Customer Acquisition',
    description: 'We find demand and turn it into qualified opportunities.',
    technologies: ['Yandex Direct', 'SEO', 'GEO / AI Search', 'Maps', 'B2B Lead Generation', 'Outreach'],
    color: '#22c55e',
  },
  {
    id: 'build',
    tag: 'BUILD',
    title: 'Digital Products',
    description: 'We build digital products designed around business outcomes.',
    technologies: ['Websites', 'Landing Pages', 'Web Applications', 'Telegram Bots', 'Mini Apps', 'Custom Tools'],
    color: '#6366f1',
  },
  {
    id: 'automate',
    tag: 'AUTOMATE',
    title: 'AI & Automation',
    description: 'We automate repetitive work and customer communication.',
    technologies: ['AI Agents', 'CRM', 'Sales Automation', 'Workflow Automation', 'Integrations', 'Voice AI'],
    color: '#f59e0b',
  },
  {
    id: 'data',
    tag: 'DATA',
    title: 'Data Intelligence',
    description: 'We turn fragmented information into usable business data.',
    technologies: ['Web Scraping', 'B2B Databases', 'Market Monitoring', 'Competitor Monitoring', 'Analytics', 'Dashboards'],
    color: '#06b6d4',
  },
];
