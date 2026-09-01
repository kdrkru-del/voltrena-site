'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Диагностика',
    desc: 'Фиксируем бизнес-задачу, разбираем текущую воронку и определяем главное узкое место.',
    deliverable: 'Карта процесса и узких мест',
  },
  {
    number: '02',
    title: 'Архитектура',
    desc: 'Определяем границы первой очереди, список нужных инструментов и правила их связки.',
    deliverable: 'Схема связей и ТЗ первого этапа',
  },
  {
    number: '03',
    title: 'Реализация',
    desc: 'Создаём или настраиваем выбранный компонент: лендинг, кампанию, CRM или AI-сценарий.',
    deliverable: 'Настроенный рабочий компонент',
  },
  {
    number: '04',
    title: 'Интеграция и проверка',
    desc: 'Тестируем прохождение тестовых заявок, передачу меток и корректность триггеров.',
    deliverable: 'Сквозной тест передачи лидов',
  },
  {
    number: '05',
    title: 'Измерение и развитие',
    desc: 'Оцениваем фактический результат, устраняем трения и подключаем следующий участок.',
    deliverable: 'Отчёт о результатах и план масштабирования',
  },
]

export default function ServicesProcess() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПРОЦЕСС РАБОТЫ"
            title="Как начинается работа над услугой."
            subtitle="Понятный предсказуемый регламент: от фиксации задачи до проверки результата."
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
