import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import AboutManifesto from '@/components/about/AboutManifesto'
import AboutTeam from '@/components/about/AboutTeam'
import AboutStartWithProblem from '@/components/about/AboutStartWithProblem'
import AboutPrinciples from '@/components/about/AboutPrinciples'
import AboutNoBlackBox from '@/components/about/AboutNoBlackBox'
import AboutHonestAdvice from '@/components/about/AboutHonestAdvice'
import AboutTechnology from '@/components/about/AboutTechnology'
import AboutFounder from '@/components/about/AboutFounder'
import ServiceCTA from '@/components/service/ServiceCTA'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: 'О нас — Команда и принципы агентства VOLTRENA Digital',
  description: 'Команда VOLTRENA Digital: стратегия, разработка сайтов, контекстная реклама, внедрение CRM, AI-автоматизация и сквозная аналитика.',
  alternates: { canonical: siteUrl + '/about/' },
  openGraph: {
    title: 'О нас — Команда и принципы агентства VOLTRENA Digital',
    description: 'Команда VOLTRENA Digital: стратегия, разработка сайтов, контекстная реклама, внедрение CRM, AI-автоматизация и сквозная аналитика.',
    url: siteUrl + '/about/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'О нас — Команда и принципы агентства VOLTRENA Digital',
    description: 'Команда VOLTRENA Digital: стратегия, разработка сайтов, контекстная реклама, внедрение CRM, AI-автоматизация и сквозная аналитика.',
  },
  robots: { index: true, follow: true },
}

export default function AboutPage() {
  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'О команде VOLTRENA Digital',
    description: 'Команда инженеров, маркетологов и стратегов, создающих связанные цифровые системы продаж.',
    url: siteUrl + '/about/',
    mainEntity: {
      '@type': 'Organization',
      name: 'VOLTRENA Digital',
      url: siteUrl + '/',
      founder: {
        '@type': 'Person',
        name: 'Роман Корнев',
        jobTitle: 'Founder & Digital Strategist',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl + '/' },
      { '@type': 'ListItem', position: 2, name: 'О нас' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 01. Hero */}
      <AboutHero />

      {/* 02. Manifesto (Fragmented vs VOLTRENA System) */}
      <AboutManifesto />

      {/* 03. Team */}
      <AboutTeam />

      {/* 04. Start with the problem */}
      <AboutStartWithProblem />

      {/* 05. Engineering principles */}
      <AboutPrinciples />

      {/* 06. Trust / No black box */}
      <AboutNoBlackBox />

      {/* 07. We don't sell what you don't need */}
      <AboutHonestAdvice />

      {/* 08. Technology Ecosystem */}
      <AboutTechnology />

      {/* 09. Founder / Responsibility */}
      <AboutFounder />

      {/* 10. Final CTA */}
      <ServiceCTA
        mode="directContact"
        title="Начнём с задачи."
        description="Не обязательно сразу перестраивать всю digital-инфраструктуру компании. Покажите нам задачу — мы разберёмся, где находится наиболее рациональная точка роста."
        benefits={[
          'Определим главное узкое место',
          'Предложим границы первой очереди',
          'Покажем возможную архитектуру развития',
        ]}
      />
    </>
  )
}
