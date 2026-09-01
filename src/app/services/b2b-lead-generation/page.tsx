import { siteConfig } from '@/config/site'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'

const siteUrl = siteConfig.siteUrl

export const metadata: Metadata = {
  title: 'B2B Лидогенерация | VOLTRENA Digital',
  description: 'Автоматизированный поиск и квалификация корпоративных клиентов: сбор баз компаний, обогащение данных, сегментация и передача в CRM.',
  alternates: { canonical: siteUrl + '/services/b2b-lead-generation/' },
  openGraph: {
    title: 'B2B Лидогенерация | VOLTRENA Digital',
    description: 'Автоматизированный поиск и квалификация корпоративных клиентов.',
    url: siteUrl + '/services/b2b-lead-generation/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
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

const ServiceHero     = dynamic(() => import('@/components/service/ServiceHero'),     { loading: () => <SectionSkeleton /> })
const ServiceTypes    = dynamic(() => import('@/components/service/ServiceTypes'),    { loading: () => <SectionSkeleton /> })
const ServiceProcess  = dynamic(() => import('@/components/service/ServiceProcess'),  { loading: () => <SectionSkeleton /> })
const ServiceEcosystem= dynamic(() => import('@/components/service/ServiceEcosystem'),{ loading: () => <SectionSkeleton /> })
const ServiceUseCases = dynamic(() => import('@/components/service/ServiceUseCases'), { loading: () => <SectionSkeleton /> })
const ServiceIncludes = dynamic(() => import('@/components/service/ServiceIncludes'), { loading: () => <SectionSkeleton /> })
const ServiceFAQ      = dynamic(() => import('@/components/service/ServiceFAQ'),      { loading: () => <SectionSkeleton /> })
const ServiceCTA      = dynamic(() => import('@/components/service/ServiceCTA'),      { loading: () => <SectionSkeleton /> })

const heroFlow = [
  { id: 'sources', label: 'SOURCES' },
  { id: 'collect', label: 'COLLECT' },
  { id: 'enrich', label: 'ENRICH' },
  { id: 'qualify', label: 'QUALIFY' },
  { id: 'crm', label: 'CRM' },
]

const types = [
  { id: 'base', title: 'Сбор базы компаний', description: 'Собираем компании из открытых каталогов, справочников и отраслевых платформ по нужным фильтрам: отрасль, регион, размер, тип.', featured: true },
  { id: 'enrichment', title: 'Обогащение данных', description: 'Дополняем записи из нескольких источников: сайт, отрасль, география, публичные контакты, описание, категория деятельности.' },
  { id: 'segmentation', title: 'Сегментация', description: 'Разделяем базу по критериям: тип бизнеса, регион, активность, размер, наличие сайта, выход на новый рынок.' },
  { id: 'qualification', title: 'Квалификация', description: 'Фильтруем нецелевые записи, оставляем компании, соответствующие профилю идеального клиента.' },
  { id: 'crm-upload', title: 'Загрузка в CRM', description: 'Передаём готовую базу в вашу CRM, Google Sheets или другую систему для немедленной работы.' },
  { id: 'monitoring', title: 'Мониторинг новых компаний', description: 'Настраиваем автоматическое отслеживание новых игроков на рынке: новые регистрации, новые вакансии, новые объявления.' },
]

const process = [
  { number: '01', title: 'Профиль клиента', description: 'Определяем, какие компании вы ищете: отрасль, регион, размер, признаки.' },
  { number: '02', title: 'Анализ источников', description: 'Определяем, где находятся нужные компании: каталоги, реестры, маркетплейсы.' },
  { number: '03', title: 'Сбор данных', description: 'Собираем публично доступную информацию о компаниях из открытых источников.' },
  { number: '04', title: 'Обогащение', description: 'Дополняем записи данными из дополнительных источников.' },
  { number: '05', title: 'Очистка', description: 'Убираем дубликаты, нецелевые компании, неактивные записи.' },
  { number: '06', title: 'Квалификация', description: 'Проверяем соответствие компании профилю идеального клиента.' },
  { number: '07', title: 'Доставка', description: 'Передаём готовую базу в CRM, таблицу или другую рабочую систему.' },
  { number: '08', title: 'Мониторинг', description: 'Настраиваем регулярное обновление и отслеживание новых компаний.' },
]

const ecosystem = [
  { id: 'crm', label: 'CRM', description: 'Передаём компании напрямую в Битрикс24, amoCRM и другие системы.' },
  { id: 'sheets', label: 'Google Sheets', description: 'Обновляем рабочую таблицу по расписанию.' },
  { id: 'telegram', label: 'Telegram', description: 'Уведомляем о новых компаниях в вашем Telegram.' },
  { id: 'email', label: 'Email', description: 'Регулярные выгрузки и отчёты на почту.' },
  { id: 'api', label: 'API', description: 'Передаём данные в вашу систему через API.' },
  { id: 'scraping', label: 'Web Scraping', description: 'Используем парсинг как источник для сбора данных.' },
  { id: 'ai', label: 'AI', description: 'Классификация и квалификация компаний с помощью ИИ.' },
]

const useCases = [
  { id: 'b2b-services', title: 'B2B Услуги', description: 'Строительство, логистика, IT, консалтинг — поиск корпоративных клиентов по профилю.' },
  { id: 'manufacturing', title: 'Производство', description: 'Поиск дилеров, дистрибьюторов и корпоративных покупателей по отрасли.' },
  { id: 'saas', title: 'SaaS и продукты', description: 'Сегментированная база компаний под конкретный ICP для outbound-кампаний.' },
  { id: 'export', title: 'Экспорт', description: 'Базы зарубежных компаний из открытых международных справочников.' },
  { id: 'recruitment', title: 'Рекрутинг', description: 'Компании с открытыми вакансиями как сигнал к росту и возможной потребности.' },
]

const included = {
  base: [
    { label: 'Определение профиля компании' },
    { label: 'Анализ источников' },
    { label: 'Сбор базы' },
    { label: 'Обогащение данных' },
    { label: 'Очистка и дедупликация' },
    { label: 'Квалификация' },
    { label: 'Экспорт в нужный формат' },
  ],
  extra: [
    { label: 'CRM интеграция' },
    { label: 'Google Sheets автообновление' },
    { label: 'Telegram уведомления' },
    { label: 'Мониторинг новых компаний' },
    { label: 'AI квалификация' },
    { label: 'Регулярное ведение' },
  ],
}

const faq = [
  { question: 'Что такое B2B лидогенерация через парсинг?', answer: 'Это автоматизированный сбор данных о компаниях из открытых источников с последующей очисткой, квалификацией и загрузкой в рабочую систему.' },
  { question: 'Откуда берутся данные о компаниях?', answer: 'Из открытых бизнес-каталогов, отраслевых справочников, публичных реестров, платформ и других доступных источников.' },
  { question: 'Это законно?', answer: 'Да. Мы работаем исключительно с публично доступной информацией в рамках применимого законодательства и правил источников.' },
  { question: 'Что входит в базу?', answer: 'Название компании, сайт, отрасль, регион, публичные контакты и другие поля — зависит от источника и задачи.' },
  { question: 'В каком формате я получу данные?', answer: 'В Excel, CSV, Google Sheets, CRM или другой формат по вашей задаче.' },
  { question: 'Можно ли настроить мониторинг новых компаний?', answer: 'Да. Мы можем настроить систему, которая регулярно проверяет источники и добавляет новые компании в вашу базу.' },
  { question: 'Можно ли загрузить данные в CRM?', answer: 'Да. Интегрируем с Битрикс24, amoCRM и другими системами.' },
]

export default function B2BLeadGenerationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'B2B Лидогенерация | VOLTRENA Digital',
    provider: { '@type': 'Organization', name: 'VOLTRENA Digital', url: siteUrl },
    description: 'Автоматизированный поиск и квалификация корпоративных клиентов.',
    serviceType: 'B2B Lead Generation',
    areaServed: 'RU',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
      { '@type': 'ListItem', position: 3, name: 'B2B Лидогенерация' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <ServiceHero
        eyebrow="B2B LEAD GENERATION"
        title="Находим корпоративных клиентов из открытых источников."
        description="Собираем, обогащаем и квалифицируем базы компаний из открытых источников — и передаём их туда, где начинается работа отдела продаж."
        ctaPrimary="Обсудить задачу"
        ctaSecondary="Как мы работаем"
        ctaSecondaryHref="#process"
        heroFlow={heroFlow}
      />

      <ServiceTypes
        types={types}
        tag="ЧТО МЫ ДЕЛАЕМ"
        title="Что входит в B2B лидогенерацию."
      />

      <ServiceProcess
        steps={process}
        id="process"
        tag="ПРОЦЕСС"
        title="Как мы работаем."
      />

      <ServiceEcosystem
        items={ecosystem}
        tag="ИНТЕГРАЦИИ"
        title="Куда передаём данные."
        centerLabel="B2B DATA"
      />

      <ServiceUseCases useCases={useCases} />

      <ServiceIncludes included={included} />

      <section className="py-20 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-mono tracking-widest text-accent/70 uppercase mb-4">WEB SCRAPING</p>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Данные для B2B продаж начинаются с парсинга.
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Используем возможности веб-скрапинга для сбора актуальных данных о компаниях из открытых источников.
              </p>
              <Link
                href="/services/web-scraping"
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                Узнать о парсинге данных →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ServiceFAQ faq={faq} />

      <ServiceCTA
        title="Кто ваш идеальный клиент?"
        description="Опишите компанию, которую вы ищете. Мы предложим источники, методологию и структуру базы."
        benefits={['Определим профиль и источники', 'Предложим структуру данных', 'Оценим объём и сроки']}
      />
    </>
  )
}
