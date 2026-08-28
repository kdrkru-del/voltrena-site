import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { yandexDirectData } from '@/data/service-pages'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

export const metadata: Metadata = {
  title: yandexDirectData.seo.title,
  description: yandexDirectData.seo.description,
  alternates: {
    canonical: `${siteUrl}/services/yandex-direct/`,
  },
  openGraph: {
    title: yandexDirectData.seo.title,
    description: yandexDirectData.seo.description,
    url: `${siteUrl}/services/yandex-direct/`,
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: yandexDirectData.seo.title,
    description: yandexDirectData.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero = dynamic(() => import('@/components/service/ServiceHero'), { loading: () => <SectionSkeleton /> })
const ServiceSaleSystem = dynamic(() => import('@/components/service/ServiceSaleSystem'), { loading: () => <SectionSkeleton /> })
const ServiceTypes = dynamic(() => import('@/components/service/ServiceTypes'), { loading: () => <SectionSkeleton /> })
const ServiceApproach = dynamic(() => import('@/components/service/ServiceApproach'), { loading: () => <SectionSkeleton /> })
const ServiceIntent = dynamic(() => import('@/components/service/ServiceIntent'), { loading: () => <SectionSkeleton /> })
const ServiceComparison = dynamic(() => import('@/components/service/ServiceComparison'), { loading: () => <SectionSkeleton /> })
const ServiceEcosystem = dynamic(() => import('@/components/service/ServiceEcosystem'), { loading: () => <SectionSkeleton /> })
const ServiceProcess = dynamic(() => import('@/components/service/ServiceProcess'), { loading: () => <SectionSkeleton /> })
const ServiceCycle = dynamic(() => import('@/components/service/ServiceCycle'), { loading: () => <SectionSkeleton /> })
const ServiceUseCases = dynamic(() => import('@/components/service/ServiceUseCases'), { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem = dynamic(() => import('@/components/service/ServiceLeadSystem'), { loading: () => <SectionSkeleton /> })
const ServiceFAQ = dynamic(() => import('@/components/service/ServiceFAQ'), { loading: () => <SectionSkeleton /> })
const ServiceCTA = dynamic(() => import('@/components/service/ServiceCTA'), { loading: () => <SectionSkeleton /> })

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Настройка и ведение Яндекс Директа',
  url: `${siteUrl}/services/yandex-direct/`,
  provider: {
    '@type': 'Organization',
    name: 'VOLTRENA Digital',
    url: `${siteUrl}/`,
  },
  description: yandexDirectData.seo.description,
  serviceType: 'Yandex Direct Advertising Management',
  areaServed: 'RU',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: yandexDirectData.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: `${siteUrl}/` },
    { '@type': 'ListItem', position: 2, name: 'Яндекс Директ', item: `${siteUrl}/services/yandex-direct/` },
  ],
}

export default function YandexDirectPage() {
  const data = yandexDirectData

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
        heroExample={data.heroExample}
      />

      <ServiceSaleSystem
        nodes={data.saleSystemNodes}
        tag={data.saleSystemSection?.tag}
        title={data.saleSystemSection?.title}
        description={data.saleSystemSection?.description}
        flow={data.saleSystemSection?.flow}
        conclusion={data.saleSystemSection?.conclusion}
      />

      <ServiceTypes
        types={data.types}
        id={data.typesSection?.id}
        tag={data.typesSection?.tag}
        title={data.typesSection?.title}
        description={data.typesSection?.description}
      />

      <ServiceApproach
        steps={data.approach}
        id={data.approachSection?.id}
        tag={data.approachSection?.tag}
        title={data.approachSection?.title}
        description={data.approachSection?.description}
      />

      {data.intent && <ServiceIntent {...data.intent} />}
      {data.comparison && <ServiceComparison {...data.comparison} />}

      <ServiceEcosystem
        items={data.ecosystem}
        id={data.ecosystemSection?.id}
        tag={data.ecosystemSection?.tag}
        title={data.ecosystemSection?.title}
        description={data.ecosystemSection?.description}
        centerLabel={data.ecosystemSection?.centerLabel}
      />

      <ServiceProcess
        steps={data.process}
        id={data.processSection?.id}
        tag={data.processSection?.tag}
        title={data.processSection?.title}
        description={data.processSection?.description}
      />

      {data.recurring && <ServiceCycle {...data.recurring} />}

      {data.metrics && (
        <ServiceTypes
          types={data.metrics.items}
          id={data.metrics.id}
          tag={data.metrics.tag}
          title={data.metrics.title}
          description={data.metrics.description}
        />
      )}

      {data.principles && (
        <ServiceTypes
          types={data.principles.items}
          id={data.principles.id}
          tag={data.principles.tag}
          title={data.principles.title}
          description={data.principles.description}
        />
      )}

      <ServiceUseCases useCases={data.useCases} />

      {data.workModels && (
        <ServiceTypes
          types={data.workModels.items}
          id={data.workModels.id}
          tag={data.workModels.tag}
          title={data.workModels.title}
          description={data.workModels.description}
        />
      )}

      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          description={data.leadSystem.description}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      <ServiceFAQ faq={data.faq} />

      <ServiceCTA
        title={data.finalCta?.title}
        description={data.finalCta?.description}
        benefits={data.finalCta?.benefits}
      />
    </>
  )
}
