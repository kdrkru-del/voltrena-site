'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const phases = [
  {
    phase: '01',
    title: 'Найти узкое место',
    desc: 'Диагностика воронки, аудит потерь и запуск первоочередного рабочего узла.',
    deliverables: ['Карта текущего процесса', 'Схема первой очереди'],
  },
  {
    phase: '02',
    title: 'Соединить соседние процессы',
    desc: 'Подключение CRM, сквозной передачи данных, автоматических сценариев и уведомлений.',
    deliverables: ['Работающий сквозной сценарий', 'Список измеряемых событий'],
  },
  {
    phase: '03',
    title: 'Измерить и развить',
    desc: 'Оценка окупаемости, устранение трения и подключение следующих компонентов системы.',
    deliverables: ['Сквозной отчёт по результатам', 'Backlog следующего этапа'],
  },
]

export default function HomePhasedLaunch() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ПОЭТАПНЫЙ ЗАПУСК"
            title="Не обязательно перестраивать всё сразу."
            subtitle="Мы проектируем архитектуру на перспективу, но внедряем поэтапно — с осязаемым результатом на каждом шаге."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {phases.map((p, idx) => (
            <ScrollReveal key={p.phase} delay={idx * 80}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold mb-3 block">
                    ЭТАП {p.phase}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 space-y-1.5">
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block mb-1">
                    Артефакты этапа:
                  </span>
                  {p.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-text-primary font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
