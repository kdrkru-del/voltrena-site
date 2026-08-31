import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { crmData } from '@/data/service-pages'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

export const metadata: Metadata = {
  title: crmData.seo.title,
  description: crmData.seo.description,
  alternates: { canonical: siteUrl + '/services/crm/' },
  openGraph: {
    title: crmData.seo.title,
    description: crmData.seo.description,
    url: siteUrl + '/services/crm/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: { card: 'summary_large_image', title: crmData.seo.title, description: crmData.seo.description },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero          = dynamic(() => import('@/components/service/ServiceHero'),          { loading: () => <SectionSkeleton /> })
const ServiceBeforeAfter   = dynamic(() => import('@/components/service/ServiceBeforeAfter'),   { loading: () => <SectionSkeleton /> })
const ServiceTypes         = dynamic(() => import('@/components/service/ServiceTypes'),         { loading: () => <SectionSkeleton /> })
const ServiceEcosystem     = dynamic(() => import('@/components/service/ServiceEcosystem'),     { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem    = dynamic(() => import('@/components/service/ServiceLeadSystem'),    { loading: () => <SectionSkeleton /> })
const ServiceProcess       = dynamic(() => import('@/components/service/ServiceProcess'),       { loading: () => <SectionSkeleton /> })
const ServiceUseCases      = dynamic(() => import('@/components/service/ServiceUseCases'),      { loading: () => <SectionSkeleton /> })
const ServiceIncludes      = dynamic(() => import('@/components/service/ServiceIncludes'),      { loading: () => <SectionSkeleton /> })
const ServiceFAQ           = dynamic(() => import('@/components/service/ServiceFAQ'),           { loading: () => <SectionSkeleton /> })
const ServiceCTA           = dynamic(() => import('@/components/service/ServiceCTA'),           { loading: () => <SectionSkeleton /> })

export default function CRMPage() {
  const data = crmData

  const analyticsFormula = [
    { operator: '', label: 'CRM WON DEALS' },
    { operator: '→', label: 'ACTUAL REVENUE' },
    { operator: '→', label: 'CAMPAIGN ATTRIBUTION' },
    { operator: '=', label: 'TRUE ROMI & BUSINESS CONTROL', isResult: true },
  ]

  const telegramFormula = [
    { operator: '', label: 'NEW CRM LEAD' },
    { operator: '→', label: 'TELEGRAM INSTANT ALERT' },
    { operator: '→', label: '1-CLICK CALL BY MANAGER' },
    { operator: '=', label: 'RESPONSE IN 5 MINUTES', isResult: true },
  ]

  const beforeItems = [
    'Заявки приходят на почту или в разные мессенджеры',
    'Менеджеры вручную ведут блокноты и Excel',
    'Забытые клиенты и просроченные звонки',
    'Руководитель не видит реальной картины продаж',
    'Долгое составление счетов и КП вручную',
    'Уход менеджера означает потерю клиентской базы',
  ]

  const afterItems = [
    'Все каналы сведены в единую CRM за 1 секунду',
    'Четкие этапы воронки и автозадачи сотрудникам',
    'История переписки и записи звонков в карточке',
    'Генерация счетов и договоров в один клик',
    'Наглядная аналитика конверсий и планов продаж',
    'Вся база клиентов надёжно защищена внутри компании',
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: data.seo.description,
    serviceType: 'CRM Implementation & Sales Automation',
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
      { '@type': 'ListItem', position: 3, name: 'Внедрение и настройка CRM' },
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

      {/* Before / After */}
      <ServiceBeforeAfter
        tag="РЕЗУЛЬТАТ"
        title="Как меняется отдел продаж после внедрения CRM."
        beforeTitle="BEFORE: Потери и хаос"
        beforeSubtitle="Лиды теряются, а контроль за менеджерами отсутствует"
        beforeItems={beforeItems}
        afterTitle="AFTER: Система и прозрачность"
        afterSubtitle="Каждая заявка доводится до результата по понятному процессу"
        afterItems={afterItems}
        conclusion="Чем меньше ручных действий совершает менеджер, тем больше времени остаётся на реальные продажи."
      />

      {/* Types / What we configure */}
      {data.types && (
        <ServiceTypes
          types={data.types}
          id={data.typesSection?.id}
          tag={data.typesSection?.tag}
          title={data.typesSection?.title}
        />
      )}

      {/* Ecosystem / Integrations */}
      {data.ecosystem && (
        <ServiceEcosystem
          items={data.ecosystem}
          id={data.ecosystemSection?.id}
          tag={data.ecosystemSection?.tag}
          title={data.ecosystemSection?.title}
          centerLabel={data.ecosystemSection?.centerLabel}
        />
      )}

      {/* Lead System: CRM + Automation */}
      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      {/* Cross link: CRM + Analytics */}
      <ServiceLeadSystem
        tag="CRM + АНАЛИТИКА"
        title="CRM связывает расходы на рекламу с фактической выручкой."
        formula={analyticsFormula}
        ctaLabel="Сквозная аналитика"
        ctaHref="/services/analytics"
      />

      {/* Cross link: CRM + Telegram */}
      <ServiceLeadSystem
        tag="CRM + TELEGRAM"
        title="Менеджеры получают лиды и задачи прямо в Telegram."
        formula={telegramFormula}
        ctaLabel="Telegram боты и Mini Apps"
        ctaHref="/services/telegram-bots"
      />

      {/* Process (9 steps) */}
      {data.process && (
        <ServiceProcess
          steps={data.process}
          id={data.processSection?.id}
          tag={data.processSection?.tag}
          title={data.processSection?.title}
        />
      )}

      {/* Use Cases */}
      {data.useCases && <ServiceUseCases useCases={data.useCases} />}

      {/* Includes */}
      {data.included && <ServiceIncludes included={data.included} />}

      {/* FAQ */}
      <ServiceFAQ faq={data.faq} />

      {/* Final CTA */}
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
