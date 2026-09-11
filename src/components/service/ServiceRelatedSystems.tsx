import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { digitalProducts } from '@/data/digital-products'

const serviceSystemMap: Record<string, string[]> = {
  'web-development': ['digital-sales-system'],
  'yandex-direct': ['digital-sales-system'],
  'seo-geo': ['digital-sales-system'],
  'b2b-lead-generation': ['b2b-sales-system'],
  'web-scraping': ['market-intelligence-system', 'b2b-sales-system'],
  'ai-automation': ['ai-operations-system', 'lead-operations-system'],
  'telegram-bots': ['lead-operations-system', 'ai-operations-system'],
  crm: ['digital-sales-system', 'b2b-sales-system', 'lead-operations-system'],
  analytics: ['digital-sales-system', 'market-intelligence-system'],
}

export default function ServiceRelatedSystems({ serviceSlug }: { serviceSlug: string }) {
  const slugs = serviceSystemMap[serviceSlug] ?? []
  const products = slugs
    .map((slug) => digitalProducts.find((product) => product.slug === slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product))

  if (!products.length) return null

  return (
    <section className="py-16 md:py-24 bg-bg-secondary border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 min-w-0">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              В составе систем
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4 break-words hyphens-auto">
              Эта технология используется в системах.
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Услуга не существует отдельно от бизнес-результата. Мы подключаем её как модуль конкретной цифровой системы.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/solutions/${product.slug}/`}
                className="group min-w-0 rounded-2xl bg-bg-surface border border-border/80 p-5 sm:p-6 hover:border-accent/45 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-accent font-semibold">
                    {product.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-3 break-words">
                  {product.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {product.summary}
                </p>
                <span className="inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold text-accent">
                  Открыть систему
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
