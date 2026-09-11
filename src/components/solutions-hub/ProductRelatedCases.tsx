import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const casesByProduct: Record<string, Array<{ title: string; task: string; href: string; external?: string }>> = {
  'digital-sales-system': [
    {
      title: 'ТехУчёт',
      task: 'Сайт, Яндекс Директ и обработка входящих обращений по услугам Гостехнадзора.',
      href: '/cases/#tehuchet',
      external: 'https://techuchet24.ru/',
    },
    {
      title: 'ZEMTRAK',
      task: 'Каталог спецтехники и сценарии привлечения спроса на аренду в конкретную заявку.',
      href: '/cases/#zemtrak',
      external: 'https://zemtrak.ru/',
    },
    {
      title: 'Зелёный Срез',
      task: 'Локальный спрос, посадочные страницы и быстрый маршрут заявки к исполнителю.',
      href: '/cases/#zelenyi-srez',
      external: 'https://zelsrez.ru/',
    },
  ],
  'b2b-sales-system': [
    {
      title: 'ГИЭ Групп',
      task: 'Поиск, фильтрация и подготовка B2B-возможностей для работы отдела продаж.',
      href: '/cases/#gie-group',
    },
    {
      title: 'Globerion Group',
      task: 'B2B-каталог и цифровая инфраструктура вокруг конкретных товарных запросов и покупателей.',
      href: '/cases/',
    },
  ],
  'market-intelligence-system': [
    {
      title: 'ГИЭ Групп',
      task: 'Системный сбор и фильтрация открытых закупочных данных по заданным критериям.',
      href: '/cases/#gie-group',
    },
  ],
}

export default function ProductRelatedCases({ productSlug }: { productSlug: string }) {
  const cases = casesByProduct[productSlug] ?? []
  if (!cases.length) return null

  return (
    <section className="py-16 md:py-24 bg-bg-primary border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 break-words hyphens-auto">Где этот принцип уже используется.</h2>
            <p className="text-sm text-text-secondary leading-relaxed">Показываем только реальные проекты, которые действительно связаны с логикой этой системы.</p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((item) => (
              <article key={item.title} className="rounded-2xl bg-bg-surface border border-border/80 p-5 sm:p-6 min-w-0">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{item.task}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <Link href={item.href} className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold text-accent hover:text-accent-light">
                    Разобрать кейс
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  {item.external && (
                    <a href={item.external} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-2 text-xs text-text-muted hover:text-text-primary">
                      Открыть проект
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
