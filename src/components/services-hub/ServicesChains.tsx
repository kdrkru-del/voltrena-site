'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const chains = [
  {
    tag: 'СВЯЗКА 01',
    title: 'Lead Generation System',
    formula: ['Яндекс Директ', 'Конверсионный сайт', 'Сквозная аналитика'],
    result: 'Поток квалифицированных заявок с контролем стоимости лида (CPL)',
  },
  {
    tag: 'СВЯЗКА 02',
    title: 'Sales Automation',
    formula: ['Сайт / Формы', 'Внедрение CRM', 'Telegram боты', 'AI-ассистент'],
    result: 'Автоматическая обработка заявок 24/7 без потери клиентов и рутины',
  },
  {
    tag: 'СВЯЗКА 03',
    title: 'B2B Outbound Machine',
    formula: ['B2B Лидогенерация', 'Парсинг данных', 'CRM воронка', 'Автоматизация'],
    result: 'Системный поиск корпоративных клиентов и прямые выходы на ЛПР',
  },
  {
    tag: 'СВЯЗКА 04',
    title: 'Organic & AI Growth',
    formula: ['SEO / GEO', 'Архитектура сайта', 'Schema.org', 'Аналитика'],
    result: 'Долгосрочная бесплатная видимость в классическом и AI-поиске',
  },
]

export default function ServicesChains() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СИНЕРГИЯ УСЛУГ"
            title="Можно начать с одной задачи и постепенно собрать всю систему."
            subtitle="Большинство наших клиентов начинают с одного ключевого узла (например, сайта или рекламы), а затем расширяют digital-стек."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {chains.map((chain, i) => (
            <ScrollReveal key={chain.title} delay={i * 80}>
              <div className="h-full p-6 md:p-8 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold block mb-2">
                    {chain.tag}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {chain.title}
                  </h3>

                  {/* Formula badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {chain.formula.map((item, idx) => (
                      <React.Fragment key={item}>
                        <span className="px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-xs font-mono text-text-primary whitespace-nowrap">
                          {item}
                        </span>
                        {idx < chain.formula.length - 1 && (
                          <span className="text-accent font-bold text-xs">+</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-start gap-2.5 text-xs text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Результат:</strong> {chain.result}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
