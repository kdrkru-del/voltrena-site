import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { seoGeoData } from '@/data/service-pages'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

export const metadata: Metadata = {
  title: seoGeoData.seo.title,
  description: seoGeoData.seo.description,
  alternates: { canonical: siteUrl + '/services/seo-geo/' },
  openGraph: {
    title: seoGeoData.seo.title,
    description: seoGeoData.seo.description,
    url: siteUrl + '/services/seo-geo/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: { card: 'summary_large_image', title: seoGeoData.seo.title, description: seoGeoData.seo.description },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero               = dynamic(() => import('@/components/service/ServiceHero'),               { loading: () => <SectionSkeleton /> })
const ServiceSeoVsGeo            = dynamic(() => import('@/components/service/ServiceSeoVsGeo'),            { loading: () => <SectionSkeleton /> })
const ServiceTypes              = dynamic(() => import('@/components/service/ServiceTypes'),              { loading: () => <SectionSkeleton /> })
const ServiceEntitySignals      = dynamic(() => import('@/components/service/ServiceEntitySignals'),      { loading: () => <SectionSkeleton /> })
const ServiceAiSearchReadiness  = dynamic(() => import('@/components/service/ServiceAiSearchReadiness'),  { loading: () => <SectionSkeleton /> })
const ServiceContentGap         = dynamic(() => import('@/components/service/ServiceContentGap'),         { loading: () => <SectionSkeleton /> })
const ServiceBeforeAfter        = dynamic(() => import('@/components/service/ServiceBeforeAfter'),        { loading: () => <SectionSkeleton /> })
const ServiceEcosystem          = dynamic(() => import('@/components/service/ServiceEcosystem'),          { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem         = dynamic(() => import('@/components/service/ServiceLeadSystem'),         { loading: () => <SectionSkeleton /> })
const ServiceProcess            = dynamic(() => import('@/components/service/ServiceProcess'),            { loading: () => <SectionSkeleton /> })
const ServiceUseCases           = dynamic(() => import('@/components/service/ServiceUseCases'),           { loading: () => <SectionSkeleton /> })
const ServiceIncludes           = dynamic(() => import('@/components/service/ServiceIncludes'),           { loading: () => <SectionSkeleton /> })
const ServiceNoGuarantees       = dynamic(() => import('@/components/service/ServiceNoGuarantees'),       { loading: () => <SectionSkeleton /> })
const ServiceFAQ                = dynamic(() => import('@/components/service/ServiceFAQ'),                { loading: () => <SectionSkeleton /> })
const ServiceCTA                = dynamic(() => import('@/components/service/ServiceCTA'),                { loading: () => <SectionSkeleton /> })

export default function SeoGeoPage() {
  const data = seoGeoData

  const yandexDirectFormula = [
    { operator: '', label: 'PAID TRAFFIC (ЯНДЕКС ДИРЕКТ)' },
    { operator: '+', label: 'ORGANIC TRAFFIC (SEO / GEO)' },
    { operator: '→', label: 'OPTIMIZED CONVERSION PAGES' },
    { operator: '=', label: 'MAXIMUM MARKET COVERAGE & LEADS', isResult: true },
  ]

  const analyticsFormula = [
    { operator: '', label: 'ORGANIC IMPRESSIONS & VISITS' },
    { operator: '→', label: 'SEARCH INTENT MATCH' },
    { operator: '→', label: 'CRM QUALIFIED DEAL' },
    { operator: '=', label: 'MEASURABLE ORGANIC ROI', isResult: true },
  ]

  const crmFormula = [
    { operator: '', label: 'ORGANIC SEARCH LEAD' },
    { operator: '→', label: 'LANDING PAGE CONVERSION' },
    { operator: '→', label: 'CRM PIPELINE STATUS' },
    { operator: '=', label: 'CLOSED SALE & REVENUE', isResult: true },
  ]

  const beforeItems = [
    'Сайт состоит из 3–5 общих страниц',
    'Нет посадочных под конкретные услуги',
    'Поисковые роботы спотыкаются о технические ошибки',
    'Контент написан общими фразами без фактов',
    'Отсутствует микроразметка и данные для AI',
    'Низкая видимость в поиске и отсутствие заявок',
  ]

  const afterItems = [
    'Чёткая структура под все группы поискового спроса',
    'Выделенные коммерческие страницы услуг и решений',
    'Безупречный технический фундамент и быстрая загрузка',
    'Экспертные материалы с фактами, ценами и таблицами',
    'Внедрена микроразметка Schema.org и цифровой профиль Entity',
    'Стабильный поток бесплатного органического трафика и лидов',
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: data.seo.description,
    serviceType: 'Search Engine Optimization & Generative Engine Optimization',
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
      { '@type': 'ListItem', position: 3, name: 'SEO / GEO и видимость в AI-поиске' },
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

      {/* Section 7: SEO и GEO работают вместе */}
      <ServiceSeoVsGeo />

      {/* Section 8: Спрос и намерения */}
      {data.types && (
        <ServiceTypes
          types={data.types}
          id={data.typesSection?.id}
          tag={data.typesSection?.tag}
          title={data.typesSection?.title}
        />
      )}

      {/* Section 9: Архитектура сайта */}
      {data.ecosystem && (
        <ServiceEcosystem
          items={data.ecosystem}
          id={data.ecosystemSection?.id}
          tag={data.ecosystemSection?.tag}
          title={data.ecosystemSection?.title}
          centerLabel={data.ecosystemSection?.centerLabel}
        />
      )}

      {/* Section 14: Entity & Brand Signals */}
      <ServiceEntitySignals />

      {/* Section 15 & 17: AI Citation Readiness */}
      <ServiceAiSearchReadiness />

      {/* Section 25: Content Gap */}
      <ServiceContentGap />

      {/* Section 34: Before / After */}
      <ServiceBeforeAfter
        tag="СРАВНЕНИЕ"
        title="Как выглядит сайт без поисковой стратегии и с ней."
        beforeTitle="BEFORE: Сайт невидим для поиска"
        beforeSubtitle="Случайные тексты и отсутствие структуры под спрос"
        beforeItems={beforeItems}
        afterTitle="AFTER: Органическая система"
        afterSubtitle="Понятная архитектура, технический фундамент и видимость в поиске"
        afterItems={afterItems}
        conclusion="Органическая видимость — это долгосрочный актив компании, снижающий зависимость от платной рекламы."
      />

      {/* Section 20: SEO + Сайт */}
      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      {/* Section 21: SEO + Яндекс Директ */}
      <ServiceLeadSystem
        tag="SEO + ЯНДЕКС ДИРЕКТ"
        title="Реклама даёт заявки сегодня. SEO строит органический поток на будущее."
        formula={yandexDirectFormula}
        ctaLabel="Яндекс Директ"
        ctaHref="/services/yandex-direct"
      />

      {/* Section 22: SEO + Аналитика */}
      <ServiceLeadSystem
        tag="SEO + АНАЛИТИКА"
        title="Органический рост тоже нужно измерять в цифрах и заявках."
        formula={analyticsFormula}
        ctaLabel="Сквозная аналитика"
        ctaHref="/services/analytics"
      />

      {/* Section 23: SEO + CRM */}
      <ServiceLeadSystem
        tag="SEO + CRM"
        title="Отслеживаем качество и окупаемость органических лидов."
        formula={crmFormula}
        ctaLabel="Внедрение CRM"
        ctaHref="/services/crm"
      />

      {/* Section 28: Как мы работаем (9 steps) */}
      {data.process && (
        <ServiceProcess
          steps={data.process}
          id={data.processSection?.id}
          tag={data.processSection?.tag}
          title={data.processSection?.title}
        />
      )}

      {/* Section 31: Use Cases */}
      {data.useCases && <ServiceUseCases useCases={data.useCases} />}

      {/* Section 30: Что входит в проект */}
      {data.included && <ServiceIncludes included={data.included} />}

      {/* Section 33: Честный подход (Без пустых гарантий) */}
      <ServiceNoGuarantees />

      {/* Section 35: FAQ */}
      <ServiceFAQ faq={data.faq} />

      {/* Section 36: Final CTA */}
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
