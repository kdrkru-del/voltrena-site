import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { seoGeoData } from '@/data/service-pages'

const siteUrl = siteConfig.siteUrl

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
    images: [{ url: siteConfig.getCanonicalUrl('/images/og-image.svg'), width: 1200, height: 630, alt: 'VOLTRENA — SEO, GEO и видимость в AI-поиске' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoGeoData.seo.title,
    description: seoGeoData.seo.description,
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true"><div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" /></div>
}

const ServiceHero = dynamic(() => import('@/components/service/ServiceHero'), { loading: () => <SectionSkeleton /> })
const ServiceSeoVsGeo = dynamic(() => import('@/components/service/ServiceSeoVsGeo'), { loading: () => <SectionSkeleton /> })
const ServiceTypes = dynamic(() => import('@/components/service/ServiceTypes'), { loading: () => <SectionSkeleton /> })
const ServiceEntitySignals = dynamic(() => import('@/components/service/ServiceEntitySignals'), { loading: () => <SectionSkeleton /> })
const ServiceAiSearchReadiness = dynamic(() => import('@/components/service/ServiceAiSearchReadiness'), { loading: () => <SectionSkeleton /> })
const ServiceBeforeAfter = dynamic(() => import('@/components/service/ServiceBeforeAfter'), { loading: () => <SectionSkeleton /> })
const ServiceEcosystem = dynamic(() => import('@/components/service/ServiceEcosystem'), { loading: () => <SectionSkeleton /> })
const ServiceProcess = dynamic(() => import('@/components/service/ServiceProcess'), { loading: () => <SectionSkeleton /> })
const ServiceUseCases = dynamic(() => import('@/components/service/ServiceUseCases'), { loading: () => <SectionSkeleton /> })
const ServiceIncludes = dynamic(() => import('@/components/service/ServiceIncludes'), { loading: () => <SectionSkeleton /> })
const ServiceNoGuarantees = dynamic(() => import('@/components/service/ServiceNoGuarantees'), { loading: () => <SectionSkeleton /> })
const ServiceFAQ = dynamic(() => import('@/components/service/ServiceFAQ'), { loading: () => <SectionSkeleton /> })
const ServiceCTA = dynamic(() => import('@/components/service/ServiceCTA'), { loading: () => <SectionSkeleton /> })

export default function SeoGeoPage() {
  const data = seoGeoData

  const beforeItems = [
    'Сайт состоит из нескольких общих страниц без структуры под спрос',
    'Нет посадочных под конкретные услуги и намерения',
    'Технические ошибки мешают поисковой индексации',
    'Контент не даёт поиску и AI достаточно фактов и контекста',
    'Отсутствует микроразметка и цельный цифровой профиль',
  ]

  const afterItems = [
    'Структура сайта соответствует группам поискового спроса',
    'Коммерческие страницы отвечают на конкретные намерения',
    'Технический фундамент поддерживает индексацию и скорость',
    'Контент содержит факты, сущности и структуру для поиска и AI',
    'Органический трафик связан с заявками и дальнейшей воронкой',
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
    mainEntity: data.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Услуги', item: siteUrl + '/services/' },
      { '@type': 'ListItem', position: 3, name: 'SEO / GEO и видимость в AI-поиске', item: siteUrl + '/services/seo-geo/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ServiceHero eyebrow={data.eyebrow} title={data.title} description={data.description} ctaPrimary={data.ctaPrimary} ctaSecondary={data.ctaSecondary} ctaSecondaryHref={data.ctaSecondaryHref} heroFlow={data.heroFlow} />
      <ServiceSeoVsGeo />

      {data.types && <ServiceTypes types={data.types} id={data.typesSection?.id} tag={data.typesSection?.tag} title={data.typesSection?.title} />}
      {data.ecosystem && <ServiceEcosystem items={data.ecosystem} id={data.ecosystemSection?.id} tag={data.ecosystemSection?.tag} title={data.ecosystemSection?.title} centerLabel={data.ecosystemSection?.centerLabel} />}

      <ServiceEntitySignals />
      <ServiceAiSearchReadiness />

      <ServiceBeforeAfter
        tag="СРАВНЕНИЕ"
        title="Как выглядит сайт без поисковой стратегии и с ней."
        beforeTitle="BEFORE: сайт почти не отвечает на спрос"
        beforeSubtitle="Случайная структура и слабые сигналы для поиска"
        beforeItems={beforeItems}
        afterTitle="AFTER: органическая система"
        afterSubtitle="Структура, технический фундамент и измеримая видимость"
        afterItems={afterItems}
        conclusion="SEO / GEO работает как модуль системы привлечения клиентов: создаёт долгосрочный органический канал и снижает зависимость от одного источника трафика."
      />

      {data.process && <ServiceProcess steps={data.process} id={data.processSection?.id} tag={data.processSection?.tag} title={data.processSection?.title} />}
      {data.useCases && <ServiceUseCases useCases={data.useCases} />}
      {data.included && <ServiceIncludes included={data.included} />}
      <ServiceNoGuarantees />
      <ServiceFAQ faq={data.faq} />

      {data.finalCta && <ServiceCTA title={data.finalCta.title} description={data.finalCta.description} benefits={data.finalCta.benefits} />}
    </>
  )
}
