import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

export const metadata: Metadata = {
  title: 'Услуги digital-агентства VOLTRENA | Сайты, реклама, AI, CRM и аналитика',
  description: 'Услуги VOLTRENA: создание сайтов, Яндекс Директ, SEO/GEO, B2B-лидогенерация, парсинг, AI-автоматизация, Telegram-боты, CRM и аналитика.',
  alternates: { canonical: siteUrl + '/services/' },
  openGraph: {
    title: 'Услуги digital-агентства VOLTRENA | Сайты, реклама, AI, CRM и аналитика',
    description: 'Услуги VOLTRENA: создание сайтов, Яндекс Директ, SEO/GEO, B2B-лидогенерация, парсинг, AI-автоматизация, Telegram-боты, CRM и аналитика.',
    url: siteUrl + '/services/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Услуги digital-агентства VOLTRENA | Сайты, реклама, AI, CRM и аналитика',
    description: 'Услуги VOLTRENA: создание сайтов, Яндекс Директ, SEO/GEO, B2B-лидогенерация, парсинг, AI-автоматизация, Telegram-боты, CRM и аналитика.',
  },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServicesHubHero          = dynamic(() => import('@/components/services-hub/ServicesHubHero'),          { loading: () => <SectionSkeleton /> })
const ServicesConnectedStack    = dynamic(() => import('@/components/services-hub/ServicesConnectedStack'),    { loading: () => <SectionSkeleton /> })
const ServicesGroupGrid         = dynamic(() => import('@/components/services-hub/ServicesGroupGrid'),         { loading: () => <SectionSkeleton /> })
const ServicesChains            = dynamic(() => import('@/components/services-hub/ServicesChains'),            { loading: () => <SectionSkeleton /> })
const ServicesProblemNavigator  = dynamic(() => import('@/components/services-hub/ServicesProblemNavigator'),  { loading: () => <SectionSkeleton /> })
const ServicesOneSystem         = dynamic(() => import('@/components/services-hub/ServicesOneSystem'),         { loading: () => <SectionSkeleton /> })
const ServicesSolutionsPreview  = dynamic(() => import('@/components/services-hub/ServicesSolutionsPreview'),  { loading: () => <SectionSkeleton /> })
const ServiceProcess            = dynamic(() => import('@/components/service/ServiceProcess'),                 { loading: () => <SectionSkeleton /> })
const ServiceCTA                = dynamic(() => import('@/components/service/ServiceCTA'),                     { loading: () => <SectionSkeleton /> })

const hubProcessSteps = [
  { number: '01', title: 'Business Goal', description: 'Определяем главную цель бизнеса: привлечение клиентов, автоматизация или наведение порядка в данных.' },
  { number: '02', title: 'System Audit', description: 'Изучаем текущие каналы, сайт, CRM и выявляем узкие места, где теряются лиды и время.' },
  { number: '03', title: 'Architecture', description: 'Проектируем взаимосвязанную архитектуру решения: какие инструменты соединяем и по какой логике.' },
  { number: '04', title: 'Implementation', description: 'Создаём и настраиваем компоненты системы: сайты, рекламу, воронки CRM, ботов и аналитику.' },
  { number: '05', title: 'Launch', description: 'Запускаем систему в работу, тестируем прохождение всех заявок и обучаем сотрудников.' },
  { number: '06', title: 'Optimization', description: 'Анализируем сквозные данные, масштабируем эффективные каналы и развиваем систему.' },
]

export default function ServicesPage() {
  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Услуги digital-агентства VOLTRENA',
    description: 'Полный цикл цифровых услуг для роста продаж и автоматизации бизнеса.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Создание сайтов', url: siteUrl + '/services/web-development/' },
      { '@type': 'ListItem', position: 2, name: 'Яндекс Директ', url: siteUrl + '/services/yandex-direct/' },
      { '@type': 'ListItem', position: 3, name: 'SEO / GEO & AI Search', url: siteUrl + '/services/seo-geo/' },
      { '@type': 'ListItem', position: 4, name: 'B2B Лидогенерация', url: siteUrl + '/services/b2b-lead-generation/' },
      { '@type': 'ListItem', position: 5, name: 'Парсинг данных', url: siteUrl + '/services/web-scraping/' },
      { '@type': 'ListItem', position: 6, name: 'ИИ и автоматизация', url: siteUrl + '/services/ai-automation/' },
      { '@type': 'ListItem', position: 7, name: 'Telegram боты и Mini Apps', url: siteUrl + '/services/telegram-bots/' },
      { '@type': 'ListItem', position: 8, name: 'Внедрение CRM', url: siteUrl + '/services/crm/' },
      { '@type': 'ListItem', position: 9, name: 'Сквозная аналитика', url: siteUrl + '/services/analytics/' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Услуги' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <ServicesHubHero />

      {/* Section 4: Инструменты работают сильнее, когда соединены */}
      <ServicesConnectedStack />

      {/* Section 5 & 6: 4 Группы (GROW, BUILD, AUTOMATE, DATA) и 9 карточек */}
      <ServicesGroupGrid />

      {/* Section 7: Как услуги соединяются в цепочки */}
      <ServicesChains />

      {/* Section 8: С чего начать? Навигатор по задачам */}
      <ServicesProblemNavigator />

      {/* Section 9, 10, 12: Один подрядчик вместо пяти & Результат вместо технологий */}
      <ServicesOneSystem />

      {/* Section 13: Решения preview */}
      <ServicesSolutionsPreview />

      {/* Section 11: Процесс работы (6 этапов) */}
      <ServiceProcess
        steps={hubProcessSteps}
        tag="ПРОЦЕСС"
        title="Как мы работаем."
        description="От формулировки бизнес-цели до запуска и сквозной оптимизации."
      />

      {/* Section 14: Final CTA */}
      <ServiceCTA
        title="С какой задачи начнём?"
        description="Опишите, что сейчас не работает или чего не хватает. Мы предложим подходящий набор услуг и архитектуру решения."
        benefits={[
          'Разберём текущие процессы и точки роста',
          'Предложим архитектуру взаимосвязанной системы',
          'Рассчитаем этапы запуска и стоимость',
        ]}
      />
    </>
  )
}
