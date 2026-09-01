import type { Metadata } from 'next'
import ServicesHubHero from '@/components/services-hub/ServicesHubHero'
import ServicesGroupGrid from '@/components/services-hub/ServicesGroupGrid'
import ServicesProblemNavigator from '@/components/services-hub/ServicesProblemNavigator'
import ServicesConnectionFlow from '@/components/services-hub/ServicesConnectionFlow'
import ServicesProcess from '@/components/services-hub/ServicesProcess'
import ProofSection from '@/components/cases/ProofSection'
import ServicesSolutionsCrossLink from '@/components/services-hub/ServicesSolutionsCrossLink'
import ServiceCTA from '@/components/service/ServiceCTA'

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

      {/* 1. Hero */}
      <ServicesHubHero />

      {/* 2. Каталог услуг (Основной блок: 4 группы, 9 услуг) */}
      <ServicesGroupGrid />

      {/* 3. Навигатор по задаче */}
      <ServicesProblemNavigator />

      {/* 4. Как услуги соединяются (3 переключаемых сценария) */}
      <ServicesConnectionFlow />

      {/* 5. Как начинается работа (5 конкретных шагов с результатами) */}
      <ServicesProcess />

      {/* 6. Компактный Proof-блок с примерами работ */}
      <ProofSection />

      {/* 7. Переход к Solutions */}
      <ServicesSolutionsCrossLink />

      {/* 8. Финальный прямой CTA */}
      <ServiceCTA
        mode="directContact"
        title="С какой задачи начнём?"
        description="Опишите участок, который сейчас тормозит рост. Мы предложим стартовую услугу и покажем, как она может соединиться с остальной системой."
        benefits={[
          'Разберём текущую ситуацию и узкие места',
          'Подберём стартовую услугу без навязывания лишнего',
          'Покажем архитектуру возможного расширения',
        ]}
      />
    </>
  )
}
