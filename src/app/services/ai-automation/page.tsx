import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { aiAutomationData } from '@/data/service-pages'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

export const metadata: Metadata = {
  title: aiAutomationData.seo.title,
  description: aiAutomationData.seo.description,
  alternates: { canonical: siteUrl + '/services/ai-automation/' },
  openGraph: {
    title: aiAutomationData.seo.title,
    description: aiAutomationData.seo.description,
    url: siteUrl + '/services/ai-automation/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: { card: 'summary_large_image', title: aiAutomationData.seo.title, description: aiAutomationData.seo.description },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero              = dynamic(() => import('@/components/service/ServiceHero'),              { loading: () => <SectionSkeleton /> })
const ServiceManualTasks       = dynamic(() => import('@/components/service/ServiceManualTasks'),       { loading: () => <SectionSkeleton /> })
const ServiceSaleSystem        = dynamic(() => import('@/components/service/ServiceSaleSystem'),        { loading: () => <SectionSkeleton /> })
const ServiceTypes             = dynamic(() => import('@/components/service/ServiceTypes'),             { loading: () => <SectionSkeleton /> })
const ServiceBeforeAfter       = dynamic(() => import('@/components/service/ServiceBeforeAfter'),       { loading: () => <SectionSkeleton /> })
const ServiceProcess           = dynamic(() => import('@/components/service/ServiceProcess'),           { loading: () => <SectionSkeleton /> })
const ServiceWorkflowScenarios = dynamic(() => import('@/components/service/ServiceWorkflowScenarios'),{ loading: () => <SectionSkeleton /> })
const ServiceEcosystem         = dynamic(() => import('@/components/service/ServiceEcosystem'),         { loading: () => <SectionSkeleton /> })
const ServiceNoAI              = dynamic(() => import('@/components/service/ServiceNoAI'),              { loading: () => <SectionSkeleton /> })
const ServiceHumanInLoop       = dynamic(() => import('@/components/service/ServiceHumanInLoop'),       { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem        = dynamic(() => import('@/components/service/ServiceLeadSystem'),        { loading: () => <SectionSkeleton /> })
const ServiceUseCases          = dynamic(() => import('@/components/service/ServiceUseCases'),          { loading: () => <SectionSkeleton /> })
const ServiceIncludes          = dynamic(() => import('@/components/service/ServiceIncludes'),          { loading: () => <SectionSkeleton /> })
const ServiceFAQ               = dynamic(() => import('@/components/service/ServiceFAQ'),               { loading: () => <SectionSkeleton /> })
const ServiceCTA               = dynamic(() => import('@/components/service/ServiceCTA'),               { loading: () => <SectionSkeleton /> })

export default function AIAutomationPage() {
  const data = aiAutomationData

  const b2bFormula = [
    { operator: '', label: 'COMPANY DATA' },
    { operator: 'to', label: 'AI Classification' },
    { operator: 'to', label: 'ICP Match · Priority · Lead Score' },
    { operator: '=', label: 'SALES TEAM', isResult: true },
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: data.seo.description,
    serviceType: 'AI & Business Automation',
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
      { '@type': 'ListItem', position: 3, name: 'AI и автоматизация' },
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

      {/* Section 6: Где теряется время */}
      <ServiceManualTasks />

      {/* Section 7: Как работает автоматизация — Workflow nodes */}
      {data.saleSystemNodes && (
        <ServiceSaleSystem
          nodes={data.saleSystemNodes}
          tag={data.saleSystemSection?.tag}
          title={data.saleSystemSection?.title}
          flow={data.saleSystemSection?.flow}
          conclusion={data.saleSystemSection?.conclusion}
        />
      )}

      {/* Section 8: Что можно автоматизировать */}
      {data.types && (
        <ServiceTypes
          types={data.types}
          id={data.typesSection?.id}
          tag={data.typesSection?.tag}
          title={data.typesSection?.title}
        />
      )}

      {/* Section 20: Before / After */}
      <ServiceBeforeAfter />

      {/* Section 22: Как мы проектируем */}
      {data.process && (
        <ServiceProcess
          steps={data.process}
          id={data.processSection?.id}
          tag={data.processSection?.tag}
          title={data.processSection?.title}
          description={data.processSection?.description}
        />
      )}

      {/* Section 17: Workflow scenarios */}
      <ServiceWorkflowScenarios />

      {/* Section 18: Integrations ecosystem */}
      {data.ecosystem && (
        <ServiceEcosystem
          items={data.ecosystem}
          id={data.ecosystemSection?.id}
          tag={data.ecosystemSection?.tag}
          title={data.ecosystemSection?.title}
          centerLabel={data.ecosystemSection?.centerLabel}
        />
      )}

      {/* Section 19: Не каждую задачу нужно решать через AI */}
      <ServiceNoAI />

      {/* Section 23: Human in the loop */}
      <ServiceHumanInLoop />

      {/* Section 15: AI + Data (link to web-scraping) */}
      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      {/* Section 16: AI + B2B Sales */}
      <ServiceLeadSystem
        tag="AI + B2B SALES"
        title="AI может помогать работать с B2B-базой."
        formula={b2bFormula}
        ctaLabel="B2B-лидогенерация"
        ctaHref="/services/b2b-lead-generation"
      />

      {/* Section 24: Use cases */}
      {data.useCases && <ServiceUseCases useCases={data.useCases} />}

      {/* Section 25: What's included */}
      {data.included && <ServiceIncludes included={data.included} />}

      {/* Section 28: FAQ */}
      <ServiceFAQ faq={data.faq} />

      {/* Section 29: Final CTA */}
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
