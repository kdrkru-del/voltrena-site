import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { telegramBotsData } from '@/data/service-pages'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: telegramBotsData.seo.title,
  description: telegramBotsData.seo.description,
  alternates: { canonical: siteUrl + '/services/telegram-bots/' },
  openGraph: {
    title: telegramBotsData.seo.title,
    description: telegramBotsData.seo.description,
    url: siteUrl + '/services/telegram-bots/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: { card: 'summary_large_image', title: telegramBotsData.seo.title, description: telegramBotsData.seo.description },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const ServiceHero                 = dynamic(() => import('@/components/service/ServiceHero'),                 { loading: () => <SectionSkeleton /> })
const ServiceBotPhilosophy        = dynamic(() => import('@/components/service/ServiceBotPhilosophy'),        { loading: () => <SectionSkeleton /> })
const ServiceTypes                = dynamic(() => import('@/components/service/ServiceTypes'),                { loading: () => <SectionSkeleton /> })
const ServiceBotVsMiniApp         = dynamic(() => import('@/components/service/ServiceBotVsMiniApp'),         { loading: () => <SectionSkeleton /> })
const ServiceTelegramLeadFlow     = dynamic(() => import('@/components/service/ServiceTelegramLeadFlow'),     { loading: () => <SectionSkeleton /> })
const ServiceInternalBots         = dynamic(() => import('@/components/service/ServiceInternalBots'),         { loading: () => <SectionSkeleton /> })
const ServiceWorkflowScenarios    = dynamic(() => import('@/components/service/ServiceWorkflowScenarios'),    { loading: () => <SectionSkeleton /> })
const ServiceEcosystem            = dynamic(() => import('@/components/service/ServiceEcosystem'),            { loading: () => <SectionSkeleton /> })
const ServiceHumanHandoff         = dynamic(() => import('@/components/service/ServiceHumanHandoff'),         { loading: () => <SectionSkeleton /> })
const ServiceLeadSystem           = dynamic(() => import('@/components/service/ServiceLeadSystem'),           { loading: () => <SectionSkeleton /> })
const ServiceProcess              = dynamic(() => import('@/components/service/ServiceProcess'),              { loading: () => <SectionSkeleton /> })
const ServiceUseCases             = dynamic(() => import('@/components/service/ServiceUseCases'),             { loading: () => <SectionSkeleton /> })
const ServiceIncludes             = dynamic(() => import('@/components/service/ServiceIncludes'),             { loading: () => <SectionSkeleton /> })
const ServiceTelegramReliability  = dynamic(() => import('@/components/service/ServiceTelegramReliability'),  { loading: () => <SectionSkeleton /> })
const ServiceFAQ                  = dynamic(() => import('@/components/service/ServiceFAQ'),                  { loading: () => <SectionSkeleton /> })
const ServiceCTA                  = dynamic(() => import('@/components/service/ServiceCTA'),                  { loading: () => <SectionSkeleton /> })

export default function TelegramBotsPage() {
  const data = telegramBotsData

  const aiTelegramFormula = [
    { operator: '', label: 'TELEGRAM MESSAGE' },
    { operator: '→', label: 'AI UNDERSTANDING' },
    { operator: '→', label: 'KNOWLEDGE BASE / CLASSIFICATION' },
    { operator: '=', label: 'PRECISE ANSWER / ROUTING', isResult: true },
  ]

  const dataTelegramFormula = [
    { operator: '', label: 'DATA SOURCE' },
    { operator: '→', label: 'MONITORING PIPELINE' },
    { operator: '→', label: 'CHANGE DETECTED' },
    { operator: '=', label: 'TELEGRAM ALERT TO MANAGER', isResult: true },
  ]

  const b2bTelegramFormula = [
    { operator: '', label: 'B2B LEAD DISCOVERY' },
    { operator: '→', label: 'QUALIFICATION & ENRICHMENT' },
    { operator: '→', label: 'TELEGRAM LEAD CARD' },
    { operator: '=', label: 'FAST OUTREACH BY SALES', isResult: true },
  ]

  const websiteTelegramFormula = [
    { operator: '', label: 'WEBSITE LEAD / ACTION' },
    { operator: '→', label: 'TELEGRAM MINI APP / BOT' },
    { operator: '→', label: 'CRM SYSTEM' },
    { operator: '=', label: 'CONNECTED DIGITAL SYSTEM', isResult: true },
  ]

  const customScenarios = [
    {
      id: 'A',
      label: 'Сценарий 01 — Заявка и продажи',
      steps: ['Website / Telegram Bot', 'CRM Deal', 'Telegram Alert', 'Manager Call', 'Confirmation'],
    },
    {
      id: 'B',
      label: 'Сценарий 02 — Мониторинг рынка',
      steps: ['Web Scraper', 'Price Change Alert', 'Telegram Channel', 'Decision Maker'],
    },
    {
      id: 'C',
      label: 'Сценарий 03 — AI-ассистент',
      steps: ['User Query', 'AI Knowledge Layer', 'Instant Answer', 'Human Handoff (if needed)'],
    },
  ]

  const customIntegrations = [
    'Telegram API', 'CRM (Битрикс24 / amoCRM)', 'AI Models', 'Webhooks',
    'PostgreSQL / MongoDB', 'Google Sheets', 'Payment Gateways', 'REST APIs',
  ]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.seo.title,
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: data.seo.description,
    serviceType: 'Telegram Bots & Mini Apps Development',
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
      { '@type': 'ListItem', position: 3, name: 'Telegram боты и Mini Apps' },
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

      {/* Section 7: Сначала задача. Потом бот */}
      <ServiceBotPhilosophy />

      {/* Section 8: Что можно построить в Telegram */}
      {data.types && (
        <ServiceTypes
          types={data.types}
          id={data.typesSection?.id}
          tag={data.typesSection?.tag}
          title={data.typesSection?.title}
        />
      )}

      {/* Section 9: Бот или Mini App? */}
      <ServiceBotVsMiniApp />

      {/* Section 10/11/12: Flow заявки и калькулятора */}
      <ServiceTelegramLeadFlow />

      {/* Section 15: Telegram для сотрудников */}
      <ServiceInternalBots />

      {/* Section 20: Automation workflow */}
      <ServiceWorkflowScenarios
        tag="WORKFLOW"
        title="Telegram становится частью автоматического workflow."
        subtitle="Соединяем мессенджер с внешними сервисами, базами данных и бизнес-логикой."
        scenarios={customScenarios}
        integrations={customIntegrations}
      />

      {/* Section 24: Архитектура (Бот — только верхний слой) */}
      {data.ecosystem && (
        <ServiceEcosystem
          items={data.ecosystem}
          id={data.ecosystemSection?.id}
          tag={data.ecosystemSection?.tag}
          title={data.ecosystemSection?.title}
          centerLabel={data.ecosystemSection?.centerLabel}
        />
      )}

      {/* Section 21: Human handoff */}
      <ServiceHumanHandoff />

      {/* Section 16: Telegram + CRM */}
      {data.leadSystem && (
        <ServiceLeadSystem
          tag={data.leadSystem.tag}
          title={data.leadSystem.title}
          formula={data.leadSystem.formula}
          ctaLabel={data.leadSystem.ctaLabel}
          ctaHref={data.leadSystem.ctaHref}
        />
      )}

      {/* Section 17: Telegram + AI (Cross-link to AI Automation) */}
      <ServiceLeadSystem
        tag="TELEGRAM + AI"
        title="Добавляем AI там, где нужен смысл, а не просто кнопка."
        formula={aiTelegramFormula}
        ctaLabel="AI и автоматизация"
        ctaHref="/services/ai-automation"
      />

      {/* Section 18: Telegram + Data (Cross-link to Web Scraping) */}
      <ServiceLeadSystem
        tag="TELEGRAM + DATA"
        title="Бот может показывать данные сразу после их изменения."
        formula={dataTelegramFormula}
        ctaLabel="Парсинг и сбор данных"
        ctaHref="/services/web-scraping"
      />

      {/* Section 19: B2B Leads + Telegram (Cross-link to B2B Lead Gen) */}
      <ServiceLeadSystem
        tag="B2B LEADS + TELEGRAM"
        title="Новые B2B-клиенты могут поступать прямо менеджеру."
        formula={b2bTelegramFormula}
        ctaLabel="B2B лидогенерация"
        ctaHref="/services/b2b-lead-generation"
      />

      {/* Section 28: Bot + Website (Cross-link to Web Development) */}
      <ServiceLeadSystem
        tag="BOT + WEBSITE"
        title="Сайт и Telegram могут работать вместе."
        formula={websiteTelegramFormula}
        ctaLabel="Создание сайтов"
        ctaHref="/services/web-development"
      />

      {/* Section 25: Как мы проектируем (9 steps) */}
      {data.process && (
        <ServiceProcess
          steps={data.process}
          id={data.processSection?.id}
          tag={data.processSection?.tag}
          title={data.processSection?.title}
        />
      )}

      {/* Section 26: Для каких задач */}
      {data.useCases && <ServiceUseCases useCases={data.useCases} />}

      {/* Section 27: Что входит в проект */}
      {data.included && <ServiceIncludes included={data.included} />}

      {/* Section 30/31: Инженерная надежность и безопасность */}
      <ServiceTelegramReliability />

      {/* Section 32: FAQ */}
      <ServiceFAQ faq={data.faq} />

      {/* Section 33: Final CTA */}
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
