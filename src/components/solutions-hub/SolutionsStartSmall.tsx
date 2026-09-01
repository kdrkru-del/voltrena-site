'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const phases = [
  {
    phase: 'Фаза 1',
    title: 'Критичный участок',
    desc: 'Запускаем первоочередной рабочий узел, решающий самую острую боль (например, поток заявок или наведение порядка в CRM).',
    outcome: 'Быстрый осязаемый запуск первой очереди без переплаты за избыточный стек.',
  },
  {
    phase: 'Фаза 2',
    title: 'Связи и данные',
    desc: 'Подключаем соседние процессы: передачу UTM в CRM, автоматические задачи менеджерам и сквозные отчёты о продажах.',
    outcome: 'Устранение потерь на стыках между маркетингом, продажами и обработкой.',
  },
  {
    phase: 'Фаза 3',
    title: 'Масштабирование',
    desc: 'Расширяем систему: подключаем AI-квалификацию, Telegram Mini Apps, парсинг рынка и масштабируем бюджет.',
    outcome: 'Управляемый рост на базе проверенных и работающих процессов.',
  },
]

export default function SolutionsStartSmall() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПОЭТАПНЫЙ РОСТ"
            title="Не обязательно внедрять всё сразу."
            subtitle="Мы проектируем систему на перспективу, но внедряем поэтапно — начиная с того, что нужно бизнесу прямо сейчас."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((p, idx) => (
            <ScrollReveal key={p.phase} delay={idx * 80}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold mb-3 block">
                    {p.phase}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/50 text-xs text-text-primary">
                  <strong className="text-accent block mb-0.5">Результат фазы:</strong>
                  {p.outcome}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
