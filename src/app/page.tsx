import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import HomeProblemNavigator from '@/components/sections/HomeProblemNavigator'
import HomeTwoPaths from '@/components/sections/HomeTwoPaths'
import HomeBreakdownsVsSystem from '@/components/sections/HomeBreakdownsVsSystem'
import HomePhasedLaunch from '@/components/sections/HomePhasedLaunch'
import ProofSection from '@/components/cases/ProofSection'
import ServiceCTA from '@/components/service/ServiceCTA'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Системы цифрового роста и автоматизации продаж',
    description: 'Превращаем путь от первого клика до продажи в управляемую систему. Сайты, реклама, CRM, AI-автоматизация и сквозная аналитика.',
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
    sameAs: ['https://t.me/voltrena'],
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

      {/* 1. Hero + Системный Flow */}
      <Hero />

      {/* 2. Навигатор по бизнес-задаче */}
      <HomeProblemNavigator />

      {/* 3. Два способа работать с VOLTRENA (Решения vs Услуги) */}
      <HomeTwoPaths />

      {/* 4. Почему связанная система работает лучше (Разрывы vs Система) */}
      <HomeBreakdownsVsSystem />

      {/* 5. Поэтапный запуск (3 фазы) */}
      <HomePhasedLaunch />

      {/* 6. Примеры работающих систем (Компактный proof-блок) */}
      <ProofSection />

      {/* 7. Финальный прямой CTA */}
      <ServiceCTA
        mode="directContact"
        title="С какого участка начнём?"
        description="Опишите главную проблему в привлечении, продажах или операциях. Мы предложим первую рабочую очередь и покажем, как она встроится в общую систему."
        benefits={[
          'Определим главное узкое место',
          'Предложим границы первой очереди',
          'Покажем возможную архитектуру развития',
        ]}
      />
    </>
  )
}
