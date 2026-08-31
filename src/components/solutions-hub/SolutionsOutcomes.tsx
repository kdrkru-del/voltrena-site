'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const outcomes = [
  { tool: 'Трафик', outcome: 'Целевые обращения и спрос' },
  { tool: 'Сайт', outcome: 'Высокая конверсия в заявку' },
  { tool: 'CRM', outcome: 'Полный контроль над сделками' },
  { tool: 'ИИ', outcome: 'Мгновенная обработка заявок' },
  { tool: 'Данные', outcome: 'Точные решения на фактах' },
  { tool: 'Аналитика', outcome: 'Прозрачная окупаемость и ROMI' },
  { tool: 'Автоматизация', outcome: 'Минимум рутинных операций' },
]

export default function SolutionsOutcomes() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="БИЗНЕС-РЕЗУЛЬТАТ"
            title="Мы проектируем вокруг результата, а не технологий."
            subtitle="Каждый компонент системы решает понятную экономическую задачу компании."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {outcomes.map((o, i) => (
            <ScrollReveal key={o.tool} delay={i * 50}>
              <div className="p-5 rounded-xl bg-bg-surface border border-border flex items-center justify-between">
                <span className="font-mono text-xs text-text-muted">{o.tool}</span>
                <span className="text-accent font-bold text-xs">→</span>
                <span className="text-sm font-semibold text-text-primary text-right">{o.outcome}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
