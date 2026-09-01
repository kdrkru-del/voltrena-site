'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Диагностика задачи и процессов',
    desc: 'Фиксируем целевой бизнес-результат и анализируем текущий путь клиента от первого клика до сделки.',
    deliverable: 'Карта сквозного пути и узких мест',
  },
  {
    number: '02',
    title: 'Архитектура решения',
    desc: 'Проектируем связи между рекламой, сайтом, CRM и автоматизацией. Определяем границы первой очереди.',
    deliverable: 'Спецификация архитектуры и связей',
  },
  {
    number: '03',
    title: 'Реализация компонентов',
    desc: 'Разрабатываем интерфейсы, настраиваем рекламные кампании, воронки CRM, AI-модули и парсеры.',
    deliverable: 'Готовые рабочие компоненты системы',
  },
  {
    number: '04',
    title: 'Интеграция и сквозной тест',
    desc: 'Связываем компоненты через API и webhooks. Проводим сквозное тестирование сценариев прохождения лида.',
    deliverable: 'Проверенная непрерывная цепочка данных',
  },
  {
    number: '05',
    title: 'Измерение и развитие',
    desc: 'Запускаем систему в боевой режим, замеряем окупаемость и расширяем функциональность следующей очереди.',
    deliverable: 'Сквозной дашборд и план масштабирования',
  },
]

export default function SolutionsProcess() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="РЕГЛАМЕНТ РАБОТЫ"
            title="От постановки задачи к работающей системе."
            subtitle="Пошаговый процесс создания и внедрения комплексных цифровых решений."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.number} delay={idx * 60}>
              <div className="h-full p-5 rounded-xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold mb-2 block">
                    ШАГ {step.number}
                  </span>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block mb-0.5">
                    Выход этапа:
                  </span>
                  <span className="text-xs text-text-primary font-medium">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
