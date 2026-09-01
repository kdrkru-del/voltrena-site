import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { analyticsData } from '@/data/service-pages'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: analyticsData.seo.title,
  description: analyticsData.seo.description,
  alternates: { canonical: siteUrl + '/services/analytics/' },
  openGraph: {
    title: analyticsData.seo.title,
    description: analyticsData.seo.description,
    url: siteUrl + '/services/analytics/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: { card: 'summary_large_image', title: analyticsData.seo.title, description: analyticsData.seo.description },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero                  = dynamic(() => import('@/components/service/ServiceHero'),                  { loading: () => <SectionSkeleton /> })
const ServiceClicksVsSales         = dynamic(() => import('@/components/service/ServiceClicksVsSales'),         { loading: () => <SectionSkeleton /> })
const ServiceTypes                 = dynamic(() => import('@/components/service/ServiceTypes'),                 { loading: () => <SectionSkeleton /> })
const ServiceAnalyticsFunnel       = dynamic(() => import('@/components/service/ServiceAnalyticsFunnel'),       { loading: () => <SectionSkeleton /> })
const ServiceAnalyticsDashboard    = dynamic(() => import('@/components/service/ServiceAnalyticsDashboard'),    { loading: () => <SectionSkeleton /> })
const ServiceWhatOwnerSees         = dynamic(() => import('@/components/service/ServiceWhatOwnerSees'),         { loading: () => <SectionSkeleton /> })
const ServiceBeforeAfter           = dynamic(() => import('@/components/service/ServiceBeforeAfter'),           { loading: () => <SectionSkeleton /> })
const ServiceEcosystem             = dynamic(() => import('@/components/service/ServiceEcosystem'),             { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem            = dynamic(() => import('@/components/service/ServiceLeadSystem'),           { loading: () => <SectionSkeleton /> })
const ServiceProcess               = dynamic(() => import('@/components/service/ServiceProcess'),              { loading: () => <SectionSkeleton /> })
const ServiceUseCases              = dynamic(() => import('@/components/service/ServiceUseCases'),             { loading: () => <SectionSkeleton /> })
const ServiceIncludes              = dynamic(() => import('@/components/service/ServiceIncludes'),             { loading: () => <SectionSkeleton /> })
const ServiceAnalyticsReliability  = dynamic(() => import('@/components/service/ServiceAnalyticsReliability'),  { loading: () => <SectionSkeleton /> })
const ServiceFAQ                   = dynamic(() => import('@/components/service/ServiceFAQ'),                  { loading: () => <SectionSkeleton /> })
const ServiceCTA                   = dynamic(() => import('@/components/service/ServiceCTA'),                  { loading: () => <SectionSkeleton /> })

export default function AnalyticsPage() {
  const data = analyticsData

  const crmAnalyticsFormula = [
    { operator: '', label: 'MARKETING TRAFFIC' },
    { operator: '→', label: 'CRM PIPELINE STATUS' },
    { operator: '→', label: 'ACTUAL WON DEAL' },
    { operator: '=', label: 'TRUE BUSINESS VALUE & ROMI', isResult: true },
  ]

  const telegramAnalyticsFormula = [
    { operator: '', label: 'TELEGRAM BOT ACTION' },
    { operator: '→', label: 'EVENT TRACKING & CLIENT ID' },
    { operator: '→', label: 'CRM DEAL CONVERSION' },
    { operator: '=', label: 'MEASURABLE TELEGRAM CHANNEL', isResult: true },
  ]

  const b2bAnalyticsFormula = [
    { operator: '', label: 'COMPANIES OUTREACH' },
    { operator: '→', label: 'QUALIFIED CONTACTS' },
    { operator: '→', label: 'SALES OPPORTUNITIES' },
    { operator: '=', label: 'B2B FUNNEL TRANSPARENCY', isResult: true },
  ]

  const dataPipelineFormula = [
    { operator: '', label: 'ADS, SITES & CALLS' },
    { operator: '→', label: 'AUTOMATIC ETL PIPELINE' },
    { operator: '→', label: 'CENTRAL DATA MODEL' },
    { operator: '=', label: 'EXECUTIVE DASHBOARD 24/7', isResult: true },
  ]

  const beforeItems = [
    'Отчёты Яндекс Директа отдельно',
    'Яндекс Метрика без связки со сделками',
    'Excel-таблицы с ручным сведением',
    'CRM без рекламных меток и UTM',
    'Непонятно, какие ключи приносят деньги',
    'Ручной сбор отчётов в конце месяца',
  ]

  const afterItems = [
    'Единая сквозная система данных',
    'Сделки в CRM связаны с ключевыми словами',
    'Автоматический управленческий дашборд',
    'Точный расчёт CPL, CAC и ROMI',
    'Мгновенные Telegram-алерты об аномалиях',
    'Прозрачные решения по бюджету на основе фактов',
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: data.seo.description,
    serviceType: 'Marketing & Sales Analytics',
    areaServed: 'RU',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: siteUrl + '/services' },
      { '@type': 'ListItem', position: 3, name: 'Сквозная аналитика и дашборды' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        ctaPrimary={data.ctaPrimary}
        ctaSecondary={data.ctaSecondary}
        ctaSecondaryHref={data.ctaSecondaryHref}
        heroFlow={data.heroFlow}
      />

      {/* Section 5: Клики не равны продажам */}
      <ServiceClicksVsSales />

      {/* Section 6: Что можно измерять */}
      {data.types && (
        <ServiceTypes
          types={data.types}
          id={data.typesSection?.id}
          tag={data.typesSection?.tag}
          title={data.typesSection?.title}
        />
      )}

      {/* Section 16/17: Marketing Funnel */}
      <ServiceAnalyticsFunnel />

      {/* Section 14: Interactive Dashboard Showcase */}
      <ServiceAnalyticsDashboard />

      {/* Section 15: Руководителю нужны ответы */}
      <ServiceWhatOwnerSees />

      {/* Section 25: Before / After */}
      <ServiceBeforeAfter
        tag="СРАВНЕНИЕ"
        title="До и после внедрения системы аналитики."
        beforeTitle="BEFORE: Разрозненные таблицы"
        beforeSubtitle="Собственник не видит реальной отдачи от каждого рекламного рубля"
        beforeItems={beforeItems}
        afterTitle="AFTER: Сквозная прозрачность"
        afterSubtitle="Все данные сходятся в едином управленческом дашборде"
        afterItems={afterItems}
        conclusion="Аналитика начинается с качества данных и заканчивается ростом прибыли."
      />

      {/* Section 10: Yandex Direct + Analytics */}
      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      {/* Section 9: CRM + Analytics */}
      <ServiceLeadSystem
        tag="CRM + АНАЛИТИКА"
        title="CRM добавляет бизнес-результат к маркетинговым данным."
        formula={crmAnalyticsFormula}
        ctaLabel="CRM и автоматизация продаж"
        ctaHref="/services/crm"
      />

      {/* Section 12: Telegram + Analytics */}
      <ServiceLeadSystem
        tag="TELEGRAM + АНАЛИТИКА"
        title="Telegram тоже может быть измеримым каналом."
        formula={telegramAnalyticsFormula}
        ctaLabel="Telegram боты и Mini Apps"
        ctaHref="/services/telegram-bots"
      />

      {/* Section 13: B2B Analytics */}
      <ServiceLeadSystem
        tag="B2B + АНАЛИТИКА"
        title="B2B-воронка требует собственной аналитики."
        formula={b2bAnalyticsFormula}
        ctaLabel="B2B Лидогенерация"
        ctaHref="/services/b2b-lead-generation"
      />

      {/* Section 21: Data Pipeline / ETL */}
      <ServiceLeadSystem
        tag="ДАННЫЕ + ETL"
        title="Данные могут собираться и обновляться автоматически."
        formula={dataPipelineFormula}
        ctaLabel="Парсинг и сбор данных"
        ctaHref="/services/web-scraping"
      />

      {/* Section 24: Архитектура (Ecosystem) */}
      {data.ecosystem && (
        <ServiceEcosystem
          items={data.ecosystem}
          id={data.ecosystemSection?.id}
          tag={data.ecosystemSection?.tag}
          title={data.ecosystemSection?.title}
          centerLabel={data.ecosystemSection?.centerLabel}
        />
      )}

      {/* Section 26: Как мы внедряем аналитику (9 steps) */}
      {data.process && (
        <ServiceProcess
          steps={data.process}
          id={data.processSection?.id}
          tag={data.processSection?.tag}
          title={data.processSection?.title}
        />
      )}

      {/* Section 28: Use Cases */}
      {data.useCases && <ServiceUseCases useCases={data.useCases} />}

      {/* Section 27: Что входит в систему */}
      {data.included && <ServiceIncludes included={data.included} />}

      {/* Section 23: Алерты и надежность */}
      <ServiceAnalyticsReliability />

      {/* Section 30: FAQ */}
      <ServiceFAQ faq={data.faq} />

      {/* Section 31: Final CTA */}
      {data.finalCta && (
        <ServiceCTA
          title={data.finalCta.title}
          description={data.finalCta.description}
          benefits={data.finalCta.benefits}
        />
      )}
    </>
  )
}
