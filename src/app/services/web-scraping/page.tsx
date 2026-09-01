import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { webScrapingData } from '@/data/service-pages'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: webScrapingData.seo.title,
  description: webScrapingData.seo.description,
  alternates: { canonical: siteUrl + '/services/web-scraping/' },
  openGraph: {
    title: webScrapingData.seo.title,
    description: webScrapingData.seo.description,
    url: siteUrl + '/services/web-scraping/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: { card: 'summary_large_image', title: webScrapingData.seo.title, description: webScrapingData.seo.description },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero           = dynamic(() => import('@/components/service/ServiceHero'),           { loading: () => <SectionSkeleton /> })
const ServiceDataProblem     = dynamic(() => import('@/components/service/ServiceDataProblem'),    { loading: () => <SectionSkeleton /> })
const ServiceTypes           = dynamic(() => import('@/components/service/ServiceTypes'),          { loading: () => <SectionSkeleton /> })
const ServiceDataPipeline    = dynamic(() => import('@/components/service/ServiceDataPipeline'),   { loading: () => <SectionSkeleton /> })
const ServiceEcosystem       = dynamic(() => import('@/components/service/ServiceEcosystem'),      { loading: () => <SectionSkeleton /> })
const ServiceDataMonitoring  = dynamic(() => import('@/components/service/ServiceDataMonitoring'), { loading: () => <SectionSkeleton /> })
const ServicePriceMonitoring = dynamic(() => import('@/components/service/ServicePriceMonitoring'),{ loading: () => <SectionSkeleton /> })
const ServiceMarketSignals   = dynamic(() => import('@/components/service/ServiceMarketSignals'),  { loading: () => <SectionSkeleton /> })
const ServiceNewObjects      = dynamic(() => import('@/components/service/ServiceNewObjects'),     { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem      = dynamic(() => import('@/components/service/ServiceLeadSystem'),     { loading: () => <SectionSkeleton /> })
const ServiceDataEnrichment  = dynamic(() => import('@/components/service/ServiceDataEnrichment'), { loading: () => <SectionSkeleton /> })
const ServiceDataConfigurator= dynamic(() => import('@/components/service/ServiceDataConfigurator'),{ loading: () => <SectionSkeleton /> })
const ServiceDataCompliance  = dynamic(() => import('@/components/service/ServiceDataCompliance'), { loading: () => <SectionSkeleton /> })
const ServiceUseCases        = dynamic(() => import('@/components/service/ServiceUseCases'),       { loading: () => <SectionSkeleton /> })
const ServiceIncludes        = dynamic(() => import('@/components/service/ServiceIncludes'),       { loading: () => <SectionSkeleton /> })
const ServiceFAQ             = dynamic(() => import('@/components/service/ServiceFAQ'),            { loading: () => <SectionSkeleton /> })
const ServiceCTA             = dynamic(() => import('@/components/service/ServiceCTA'),            { loading: () => <SectionSkeleton /> })

export default function WebScrapingPage() {
  const data = webScrapingData

  const aiFormula = [
    { operator: '', label: 'RAW DATA' },
    { operator: 'to', label: 'AI' },
    { operator: 'to', label: 'classification · tagging · summarization · scoring' },
    { operator: '=', label: 'STRUCTURED DATA', isResult: true },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: data.seo.description,
    serviceType: 'Web Scraping & Data Automation',
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
      { '@type': 'ListItem', position: 3, name: 'Парсинг и сбор данных' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ServiceHero
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        ctaPrimary={data.ctaPrimary}
        ctaSecondary={data.ctaSecondary}
        ctaSecondaryHref={data.ctaSecondaryHref}
        heroFlow={data.heroFlow}
      />

      <ServiceDataProblem />

      {data.types && (
        <ServiceTypes
          types={data.types}
          id={data.typesSection?.id}
          tag={data.typesSection?.tag}
          title={data.typesSection?.title}
        />
      )}

      <ServiceDataPipeline />

      {data.ecosystem && (
        <ServiceEcosystem
          items={data.ecosystem}
          id={data.ecosystemSection?.id}
          tag={data.ecosystemSection?.tag}
          title={data.ecosystemSection?.title}
          centerLabel={data.ecosystemSection?.centerLabel}
        />
      )}

      <ServiceDataMonitoring />
      <ServicePriceMonitoring />
      <ServiceMarketSignals />
      <ServiceNewObjects />

      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      <ServiceDataEnrichment />

      <ServiceLeadSystem
        title="AI помогает обработать большие массивы данных."
        formula={aiFormula}
      />

      <ServiceDataConfigurator />

      {data.useCases && <ServiceUseCases useCases={data.useCases} />}

      {data.included && <ServiceIncludes included={data.included} />}

      <ServiceDataCompliance />

      <ServiceFAQ faq={data.faq} />

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
