import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import HomeShortBenefits from '@/components/sections/HomeShortBenefits'
import HomeProblemNavigator from '@/components/sections/HomeProblemNavigator'
import DigitalGrowthContours from '@/components/sections/DigitalGrowthContours'
import ProofSection from '@/components/cases/ProofSection'
import HomeWorkflowSteps from '@/components/sections/HomeWorkflowSteps'
import HomeTrustBlock from '@/components/sections/HomeTrustBlock'
import HomeFinalContact from '@/components/sections/HomeFinalContact'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: 'VOLTRENA — Сайты, реклама и CRM для бизнеса',
  description: 'Создаём быстрые сайты, настраиваем Яндекс Директ и связываем формы с CRM и Telegram. Менеджер получает заявку сразу со всеми деталями заказа, а вы видите, какая реклама сработала.',
  alternates: { canonical: siteUrl + '/' },
  openGraph: {
    title: 'VOLTRENA — Сайты, реклама и CRM для бизнеса',
    description: 'Создаём быстрые сайты, настраиваем Яндекс Директ и связываем формы с CRM и Telegram. Менеджер получает заявку сразу со всеми деталями заказа, а вы видите, какая реклама сработала.',
    url: siteUrl + '/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA',
    images: [{ url: siteConfig.getCanonicalUrl('/images/og-image.svg'), width: 1200, height: 630, alt: 'VOLTRENA — Сайты, реклама и CRM для бизнеса' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA — Сайты, реклама и CRM для бизнеса',
    description: 'Создаём быстрые сайты, настраиваем Яндекс Директ и связываем формы с CRM и Telegram. Менеджер получает заявку сразу со всеми деталями заказа, а вы видите, какая реклама сработала.',
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: { index: true, follow: true },
  other: {
    'mailru-domain': 'DxRmBd6fQAwzmUtk',
    'verification': '1ibbmuc2oi48kvex',
  },
}

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VOLTRENA',
    url: siteUrl + '/',
    description: 'Сайты, реклама и CRM для бизнеса.',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'VOLTRENA',
    url: siteUrl + '/',
    sameAs: [siteConfig.telegramUrl],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: siteConfig.email,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Hero />
      <HomeShortBenefits />
      <HomeProblemNavigator />
      <DigitalGrowthContours />
      <ProofSection />
      <HomeWorkflowSteps />
      <HomeTrustBlock />
      <HomeFinalContact />
    </>
  )
}
