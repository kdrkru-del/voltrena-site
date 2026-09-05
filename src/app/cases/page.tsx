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
  title: 'Кейсы и проекты digital-агентства VOLTRENA',
  description: 'Кейсы и проекты digital-агентства VOLTRENA: Окна Центр (в разработке: 5 концепций Hero), ЗемТрак (сайт + медийная реклама спецтехники), ТехУчёт (сайт + Яндекс Директ), Зелёный Срез (локальный сервис + Telegram), ГИЭ Групп (B2B закупки).',
  alternates: { canonical: siteUrl + '/cases/' },
  openGraph: {
    title: 'Кейсы и проекты digital-агентства VOLTRENA',
    description: 'Кейсы и проекты digital-агентства VOLTRENA: Окна Центр (в разработке: 5 концепций Hero), ЗемТрак (сайт + медийная реклама спецтехники), ТехУчёт (сайт + Яндекс Директ), Зелёный Срез (локальный сервис + Telegram), ГИЭ Групп (B2B закупки).',
    url: siteUrl + '/cases/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Кейсы и проекты digital-агентства VOLTRENA',
    description: 'Примеры работающих систем: ТехУчёт (сайт + Яндекс Директ + tracking), Зелёный Срез (локальный сайт + Telegram delivery), ГИЭ Групп (закупочный поиск).',
  },
  robots: { index: true, follow: true },
}

export default function CasesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Кейсы VOLTRENA Digital',
    description: 'Примеры цифровых систем: реклама, сайты, автоматизация и B2B поиск.',
    url: siteUrl + '/cases/',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Окна Центр: выбор направления из 5 концепций Hero', url: siteUrl + '/cases/#okna-center' },
        { '@type': 'ListItem', position: 2, name: 'ЗемТрак: сайт и медийная реклама спецтехники', url: siteUrl + '/cases/#zemtrak' },
        { '@type': 'ListItem', position: 3, name: 'ТехУчёт: сайт и реклама Гостехнадзора', url: siteUrl + '/cases/#tehuchet' },
        { '@type': 'ListItem', position: 4, name: 'Зелёный Срез: локальный сайт и Telegram delivery', url: siteUrl + '/cases/#zelenyi-srez' },
        { '@type': 'ListItem', position: 5, name: 'ГИЭ Групп: подбор закупок без госопыта', url: siteUrl + '/cases/#gie-group' },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Кейсы' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. Hero */}
      <CasesHero />

      {/* 2. System Proof Map */}
      <CasesSystemMap />

      {/* 3. Featured Cases Overview */}
      <CasesFeaturedOverview />

      {/* 4. Detailed Editorial Case Sections */}
      <CaseDetailSections />

      {/* 5. Method */}
      <CasesMethod />

      {/* 6. Final CTA */}
      <ServiceCTA
        mode="directContact"
        title="Хотите такой же разбор своей задачи?"
        description="Опишите, где сейчас теряются заявки, данные или возможности. Мы предложим первую рабочую очередь: что собрать, что измерять и как не распылять бюджет."
        benefits={[
          'Определим главное узкое место',
          'Предложим границы первой очереди',
          'Покажем возможную архитектуру развития',
        ]}
      />
    </>
  )
}
