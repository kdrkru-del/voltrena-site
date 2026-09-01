import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import SolutionsHubHero from '@/components/solutions-hub/SolutionsHubHero'
import SolutionsProblemNavigator from '@/components/solutions-hub/SolutionsProblemNavigator'
import SolutionsCatalog from '@/components/solutions-hub/SolutionsCatalog'
import SolutionsConnectedArchitecture from '@/components/solutions-hub/SolutionsConnectedArchitecture'
import SolutionsStartSmall from '@/components/solutions-hub/SolutionsStartSmall'
import SolutionsProcess from '@/components/solutions-hub/SolutionsProcess'
import ProofSection from '@/components/cases/ProofSection'
import SolutionsWhyVoltrena from '@/components/solutions-hub/SolutionsWhyVoltrena'
import SolutionsServicesCrossLink from '@/components/solutions-hub/SolutionsServicesCrossLink'
import ServiceCTA from '@/components/service/ServiceCTA'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: 'Готовые digital-решения для бизнеса | VOLTRENA Digital',
  description: 'Комплексные цифровые системы VOLTRENA: привлечение клиентов, B2B-продажи, обработка заявок, автоматизация операций и мониторинг рынка.',
  alternates: { canonical: siteUrl + '/solutions/' },
  openGraph: {
    title: 'Готовые digital-решения для бизнеса | VOLTRENA Digital',
    description: 'Комплексные цифровые системы VOLTRENA: привлечение клиентов, B2B-продажи, обработка заявок, автоматизация операций и мониторинг рынка.',
    url: siteUrl + '/solutions/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Готовые digital-решения для бизнеса | VOLTRENA Digital',
    description: 'Комплексные цифровые системы VOLTRENA: привлечение клиентов, B2B-продажи, обработка заявок, автоматизация операций и мониторинг рынка.',
  },
  robots: { index: true, follow: true },
}

export default function SolutionsPage() {
  const solutionsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Digital-решения для бизнеса VOLTRENA',
    description: 'Готовые комплексные системы: лидогенерация, B2B-продажи, AI-обработка заявок, автоматизация продаж и мониторинг данных.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Система привлечения клиентов', url: siteUrl + '/solutions/#solution-digital-sales' },
      { '@type': 'ListItem', position: 2, name: 'Система B2B-продаж', url: siteUrl + '/solutions/#solution-b2b-pipeline' },
      { '@type': 'ListItem', position: 3, name: 'Квалификация и обработка заявок', url: siteUrl + '/solutions/#solution-lead-operations' },
      { '@type': 'ListItem', position: 4, name: 'Автоматизация операционных процессов', url: siteUrl + '/solutions/#solution-ai-operations' },
      { '@type': 'ListItem', position: 5, name: 'Мониторинг рынка и данных', url: siteUrl + '/solutions/#solution-market-intelligence' },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Решения' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. Hero */}
      <SolutionsHubHero />

      {/* 2. Навигатор решений (Сразу после Hero) */}
      <SolutionsProblemNavigator />

      {/* 3. Каталог пяти решений */}
      <SolutionsCatalog />

      {/* 4. Общая архитектура (Шесть базовых узлов) */}
      <SolutionsConnectedArchitecture />

      {/* 5. Начать с малого (3 фазы) */}
      <SolutionsStartSmall />

      {/* 6. Регламент работы (5 шагов) */}
      <SolutionsProcess />

      {/* 7. Компактный Proof-блок с примерами работ */}
      <ProofSection />

      {/* 8. Почему VOLTRENA (Единая ответственность) */}
      <SolutionsWhyVoltrena />

      {/* 9. Cross-link к услугам */}
      <SolutionsServicesCrossLink />

      {/* 10. Финальный прямой CTA */}
      <ServiceCTA
        mode="directContact"
        title="Какую задачу нужно решить?"
        description="Опишите текущий процесс и главное узкое место. Мы предложим архитектуру первой очереди без обязательства внедрять всё сразу."
        benefits={[
          'Разберём сквозную воронку и точки потерь',
          'Подберём готовый комплекс или спроектируем первую очередь',
          'Рассчитаем этапы запуска и состав интеграций',
        ]}
      />
    </>
  )
}
