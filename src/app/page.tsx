import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import HomeProblemNavigator from '@/components/sections/HomeProblemNavigator'
import ProofSection from '@/components/cases/ProofSection'
import HomeSolutionsShowcase from '@/components/sections/HomeSolutionsShowcase'
import HomeOneSystemAdvantage from '@/components/sections/HomeOneSystemAdvantage'
import HomeTeamTrust from '@/components/sections/HomeTeamTrust'
import HomeFinalContact from '@/components/sections/HomeFinalContact'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: 'VOLTRENA Digital — Системы цифрового роста и автоматизации продаж',
  description: 'Готовые цифровые системы для привлечения клиентов, B2B-продаж, обработки заявок, автоматизации процессов и мониторинга данных.',
  alternates: { canonical: siteUrl + '/' },
  openGraph: {
    title: 'VOLTRENA Digital — Системы цифрового роста и автоматизации продаж',
    description: 'Готовые цифровые системы для привлечения клиентов, B2B-продаж, обработки заявок, автоматизации процессов и мониторинга данных.',
    url: siteUrl + '/', type: 'website', locale: 'ru_RU', siteName: 'VOLTRENA Digital',
    images: [{ url: siteConfig.getCanonicalUrl('/images/og-image.svg'), width: 1200, height: 630, alt: 'VOLTRENA Digital — Digital Growth Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Системы цифрового роста и автоматизации продаж',
    description: 'Готовые цифровые системы для привлечения клиентов, B2B-продаж, обработки заявок, автоматизации процессов и мониторинга данных.',
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  const websiteSchema = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'VOLTRENA Digital', url: siteUrl + '/', description: 'Готовые цифровые системы роста, продаж и автоматизации.' }
  const organizationSchema = { '@context': 'https://schema.org', '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl + '/', sameAs: [siteConfig.telegramUrl], contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: siteConfig.email } }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero />
      <HomeSolutionsShowcase />
      <ProofSection />
      <HomeProblemNavigator />
      <HomeOneSystemAdvantage />
      <HomeTeamTrust />
      <HomeFinalContact />
    </>
  )
}
