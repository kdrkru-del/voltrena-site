'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Target, Layers, ArrowRight, ShieldCheck } from 'lucide-react'

const results = [
  { tech: 'Не просто бот', result: 'Быстрее квалифицировать и обрабатывать заявки' },
  { tech: 'Не просто CRM', result: 'Перестать терять клиентов и контролировать воронку' },
  { tech: 'Не просто парсер', result: 'Видеть новые компании и изменения цен конкурентов' },
  { tech: 'Не просто AI', result: 'Убрать ручную рутину и освободить время ключевых сотрудников' },
]

const workflowSteps = [
  'Стратегия', 'Разработка', 'Трафик', 'CRM', 'Автоматизация', 'Аналитика'
]

export default function ServicesOneSystem() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="АРХИТЕКТУРА"
            title="Один подрядчик вместо пяти несвязанных исполнителей."
            subtitle="Когда сайт делает одна студия, рекламу другая, CRM третья, а аналитику четвертая — никто не отвечает за итоговую окупаемость."
            align="center"
          />
        </ScrollReveal>

        {/* Workflow Stream */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border mb-12">
            <p className="text-xs font-mono text-accent uppercase tracking-widest text-center mb-6 font-semibold">
              ЕДИНЫЙ АРХИТЕКТУРНЫЙ ПОДХОД
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-3.5 py-2 rounded-xl bg-bg-primary border border-border text-xs md:text-sm font-mono text-text-primary font-medium">
                    {step}
                  </span>
                  {idx < workflowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-accent/50 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Results vs Tech */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <ScrollReveal key={r.tech} delay={i * 70}>
                <div className="p-5 rounded-xl bg-bg-surface border border-border hover:border-accent/30 transition-colors">
                  <span className="text-xs font-mono text-text-muted line-through block mb-1">
                    {r.tech}
                  </span>
                  <p className="text-sm font-medium text-text-primary">
                    ✓ Задача: {r.result}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                Технология — это инструмент. Клиент покупает прогнозируемый бизнес-результат.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
