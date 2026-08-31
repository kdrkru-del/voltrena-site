import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

const siteUrl = 'https://kdrkru-del.github.io/voltrena-site'

export const metadata: Metadata = {
  title: 'Digital-решения для бизнеса | VOLTRENA Digital',
  description: 'Готовые digital-системы VOLTRENA: лидогенерация, B2B-продажи, AI-обработка заявок, автоматизация продаж и мониторинг данных.',
  alternates: { canonical: siteUrl + '/solutions/' },
  openGraph: {
    title: 'Digital-решения для бизнеса | VOLTRENA Digital',
    description: 'Готовые digital-системы VOLTRENA: лидогенерация, B2B-продажи, AI-обработка заявок, автоматизация продаж и мониторинг данных.',
    url: siteUrl + '/solutions/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital-решения для бизнеса | VOLTRENA Digital',
    description: 'Готовые digital-системы VOLTRENA: лидогенерация, B2B-продажи, AI-обработка заявок, автоматизация продаж и мониторинг данных.',
  },
  robots: { index: true, follow: true },
}

function SectionSkeleton() {
  return (
    <div className="py-section flex items-center justify-center min-h-[40vh]" aria-hidden="true">
      <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  )
}

const SolutionsHubHero               = dynamic(() => import('@/components/solutions-hub/SolutionsHubHero'),               { loading: () => <SectionSkeleton /> })
const SolutionsVsServices            = dynamic(() => import('@/components/solutions-hub/SolutionsVsServices'),            { loading: () => <SectionSkeleton /> })
const SolutionsCatalog               = dynamic(() => import('@/components/solutions-hub/SolutionsCatalog'),               { loading: () => <SectionSkeleton /> })
const SolutionsProblemNavigator      = dynamic(() => import('@/components/solutions-hub/SolutionsProblemNavigator'),      { loading: () => <SectionSkeleton /> })
const SolutionsConnectedArchitecture = dynamic(() => import('@/components/solutions-hub/SolutionsConnectedArchitecture'), { loading: () => <SectionSkeleton /> })
const SolutionsStartSmall            = dynamic(() => import('@/components/solutions-hub/SolutionsStartSmall'),            { loading: () => <SectionSkeleton /> })
const SolutionsCustom                = dynamic(() => import('@/components/solutions-hub/SolutionsCustom'),                { loading: () => <SectionSkeleton /> })
const SolutionsOutcomes              = dynamic(() => import('@/components/solutions-hub/SolutionsOutcomes'),              { loading: () => <SectionSkeleton /> })
const SolutionsWhyVoltrena           = dynamic(() => import('@/components/solutions-hub/SolutionsWhyVoltrena'),           { loading: () => <SectionSkeleton /> })
const SolutionsServicesCrossLink     = dynamic(() => import('@/components/solutions-hub/SolutionsServicesCrossLink'),     { loading: () => <SectionSkeleton /> })
const ServiceProcess                 = dynamic(() => import('@/components/service/ServiceProcess'),                       { loading: () => <SectionSkeleton /> })
const ServiceCTA                     = dynamic(() => import('@/components/service/ServiceCTA'),                           { loading: () => <SectionSkeleton /> })

const solutionsProcessSteps = [
  { number: '01', title: 'Business Goal', description: 'Формулируем конкретный измеримый результат, который должна дать система.' },
  { number: '02', title: 'Current Process', description: 'Разбираем текущий путь клиента, работу менеджеров и каналы привлечения.' },
  { number: '03', title: 'Bottlenecks', description: 'Находим узкие места, потери заявок и неэффективные ручные операции.' },
  { number: '04', title: 'Architecture', description: 'Проектируем взаимосвязанную цифровую систему и сценарии автоматизации.' },
  { number: '05', title: 'Implementation', description: 'Разрабатываем и настраиваем компоненты: сайты, рекламу, CRM, ботов и AI.' },
  { number: '06', title: 'Integration', description: 'Связываем сервисы через API и webhooks в единый непрерывный data flow.' },
  { number: '07', title: 'Launch', description: 'Запускаем систему в боевой режим и тестируем прохождение всех типов заявок.' },
  { number: '08', title: 'Measurement', description: 'Анализируем сквозную воронку, конверсию и стоимость привлечения клиентов.' },
  { number: '09', title: 'Scale', description: 'Масштабируем трафик и подключаем новые сценарии для дальнейшего роста.' },
]

export default function SolutionsPage() {
  const solutionsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Digital-решения для бизнеса VOLTRENA',
    description: 'Готовые комплексные системы: лидогенерация, B2B-продажи, AI-обработка заявок, автоматизация продаж и мониторинг данных.',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Lead Generation System', url: siteUrl + '/solutions/' },
      { '@type': 'ListItem', position: 2, name: 'B2B Lead Machine', url: siteUrl + '/solutions/' },
      { '@type': 'ListItem', position: 3, name: 'AI Sales Manager', url: siteUrl + '/solutions/' },
      { '@type': 'ListItem', position: 4, name: 'Sales Automation System', url: siteUrl + '/solutions/' },
      { '@type': 'ListItem', position: 5, name: 'Digital Intelligence', url: siteUrl + '/solutions/' },
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

      {/* Hero */}
      <SolutionsHubHero />

      {/* Section 5: Услуга решает часть задачи vs Solution — всю цепочку */}
      <SolutionsVsServices />

      {/* Section 6 & 7: Каталог 5 основных решений */}
      <SolutionsCatalog />

      {/* Section 8: Что мешает бизнесу расти? Problem Navigator */}
      <SolutionsProblemNavigator />

      {/* Section 9: Каждое решение строится из проверенных блоков */}
      <SolutionsConnectedArchitecture />

      {/* Section 10: Не обязательно внедрять всё сразу (Start Small) */}
      <SolutionsStartSmall />

      {/* Section 11: Custom решения */}
      <SolutionsCustom />

      {/* Section 12: Как мы строим решения (9 шагов) */}
      <ServiceProcess
        steps={solutionsProcessSteps}
        tag="ПРОЦЕСС"
        title="От задачи к работающей системе."
        description="Пошаговый регламент создания и запуска комплексных digital-решений."
      />

      {/* Section 13: Мы проектируем вокруг результата */}
      <SolutionsOutcomes />

      {/* Section 14: Почему VOLTRENA — единая ответственность */}
      <SolutionsWhyVoltrena />

      {/* Section 15: Ссылка на все 9 услуг */}
      <SolutionsServicesCrossLink />

      {/* Section 16: Final CTA */}
      <ServiceCTA
        title="Какую задачу нужно решить?"
        description="Опишите текущую ситуацию. Мы предложим готовое решение или спроектируем custom-архитектуру под ваш бизнес."
        benefits={[
          'Разберём вашу текущую воронку продаж',
          'Подберём готовый комплекс или custom-стек',
          'Рассчитаем этапы запуска и окупаемость',
        ]}
      />
    </>
  )
}
