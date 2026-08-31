'use client'

import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

const allServices = [
  { title: 'Создание сайтов', href: '/services/web-development' },
  { title: 'Яндекс Директ', href: '/services/yandex-direct' },
  { title: 'SEO / GEO & AI', href: '/services/seo-geo' },
  { title: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
  { title: 'Парсинг данных', href: '/services/web-scraping' },
  { title: 'ИИ и автоматизация', href: '/services/ai-automation' },
  { title: 'Telegram боты', href: '/services/telegram-bots' },
  { title: 'Внедрение CRM', href: '/services/crm' },
  { title: 'Сквозная аналитика', href: '/services/analytics' },
]

export default function SolutionsServicesCrossLink() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="КАТАЛОГ УСЛУГ"
            title="Хотите собрать систему самостоятельно?"
            subtitle="Вы можете выбрать любую отдельную услугу или скомбинировать собственный стек."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {allServices.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="px-4 py-2.5 rounded-xl bg-bg-surface border border-border hover:border-accent/40 text-xs md:text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
            >
              {s.title} →
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline font-bold"
          >
            <span>Смотреть полный каталог услуг</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
