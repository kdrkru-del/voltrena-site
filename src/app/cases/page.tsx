import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import CasesHero from '@/components/cases/CasesHero'
import CasesSystemMap from '@/components/cases/CasesSystemMap'
import CasesFeaturedOverview from '@/components/cases/CasesFeaturedOverview'
import CaseDetailSections from '@/components/cases/CaseDetailSections'
import CasesMethod from '@/components/cases/CasesMethod'
import ServiceCTA from '@/components/service/ServiceCTA'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: 'Кейсы цифровых систем VOLTRENA Digital',
  description: 'Реальные проекты VOLTRENA: бизнес-задача, архитектура цифровой системы, внедрённые модули и практический результат.',
  alternates: { canonical: siteUrl + '/cases/' },
  openGraph: {
    title: 'Кейсы цифровых систем VOLTRENA Digital',
    description: 'Как VOLTRENA собирает системы привлечения, B2B-продаж, автоматизации и работы с данными на реальных проектах.',
    url: siteUrl + '/cases/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
    images: [{ url: siteConfig.getCanonicalUrl('/images/og-image.svg'), width: 1200, height: 630, alt: 'Кейсы цифровых систем VOLTRENA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кейсы цифровых систем VOLTRENA Digital',
    description: 'Задача → система → внедрение → результат. Реальные проекты VOLTRENA Digital.',
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: { index: true, follow: true },
}

export default function CasesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Кейсы цифровых систем VOLTRENA Digital',
    description: 'Примеры цифровых систем для привлечения клиентов, B2B-продаж, автоматизации и работы с данными.',
    url: siteUrl + '/cases/',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ZEMTRAK: система привлечения клиентов для аренды спецтехники', url: siteUrl + '/cases/#zemtrak' },
        { '@type': 'ListItem', position: 2, name: 'ТехУчёт: система привлечения клиентов для услуг Гостехнадзора', url: siteUrl + '/cases/#tehuchet' },
        { '@type': 'ListItem', position: 3, name: 'Зелёный Срез: локальная система привлечения и обработки заявок', url: siteUrl + '/cases/#zelenyi-srez' },
        { '@type': 'ListItem', position: 4, name: 'ГИЭ Групп: система поиска и фильтрации B2B-закупок', url: siteUrl + '/cases/#gie-group' },
        { '@type': 'ListItem', position: 5, name: 'Окна Центр: проектирование цифрового продукта и интерфейса', url: siteUrl + '/cases/#okna-center' },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Кейсы', item: siteUrl + '/cases/' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <CasesHero />
      <CasesSystemMap />
      <CasesFeaturedOverview />
      <CaseDetailSections />
      <CasesMethod />

      <ServiceCTA
        mode="directContact"
        title="Какую систему нужно собрать под вашу задачу?"
        description="Опишите текущий процесс и желаемый результат. Мы определим подходящий продуктовый контур и первую очередь внедрения."
        benefits={[
          'Начинаем с бизнес-задачи, а не со списка услуг',
          'Определяем минимальную рабочую конфигурацию',
          'Показываем, какие модули нужны сейчас, а какие можно подключить позже',
        ]}
      />
    </>
  )
}
