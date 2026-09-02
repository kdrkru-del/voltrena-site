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
  description: 'Превращаем путь от первого клика до продажи в управляемую систему. Сайты, реклама, CRM, AI-автоматизация и сквозная аналитика.',
  alternates: { canonical: siteUrl + '/' },
  openGraph: {
    title: 'VOLTRENA Digital — Системы цифрового роста и автоматизации продаж',
    description: 'Превращаем путь от первого клика до продажи в управляемую систему. Сайты, реклама, CRM, AI-автоматизация и сквозная аналитика.',
    url: siteUrl + '/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
    images: [
      {
        url: siteConfig.getCanonicalUrl('/images/og-image.svg'),
        width: 1200,
        height: 630,
        alt: 'VOLTRENA Digital — Digital Growth Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Системы цифрового роста и автоматизации продаж',
    description: 'Превращаем путь от первого клика до продажи в управляемую систему. Сайты, реклама, CRM, AI-автоматизация и сквозная аналитика.',
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: { index: true, follow: true },
}

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VOLTRENA Digital',
    url: siteUrl + '/',
    description: 'Агентство цифровых систем роста и автоматизации продаж.',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VOLTRENA Digital',
    url: siteUrl + '/',
    sameAs: [siteConfig.telegramUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@voltrena.com',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      {/* 1. HERO: Позиционирование + Living System Flow */}
      <Hero />

      {/* 2. PROBLEM NAVIGATOR: Что мешает бизнесу расти? */}
      <HomeProblemNavigator />

      {/* 3. PROOF / CASES: Реальные проекты и результаты */}
      <ProofSection />

      {/* 4. SOLUTIONS: Готовые связанные решения */}
      <HomeSolutionsShowcase />

      {/* 5. SYSTEM ADVANTAGE: Один подрядчик на всю цепочку */}
      <HomeOneSystemAdvantage />

      {/* 6. TEAM / TRUST: Люди за системой */}
      <HomeTeamTrust />

      {/* 7. FINAL CONTACT: Прямой контакт и форма */}
      <HomeFinalContact />
    </>
  )
}
