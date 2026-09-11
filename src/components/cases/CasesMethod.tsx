'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const methodSteps = [
  { id: 'diagnostic', title: 'Диагностика', desc: 'Фиксируем коммерческую задачу, узкое место воронки и ограничения бюджета.' },
  { id: 'assembly', title: 'Сборка', desc: 'Создаем минимальный рабочий контур: страницы, рекламу, форму или фильтры.' },
  { id: 'connect', title: 'Связка', desc: 'Соединяем каналы, формы, обработчики, Telegram и CRM в единый поток данных.' },
  { id: 'measure', title: 'Измерение', desc: 'Размечаем цели, проверяем доставку и оцениваем фактический результат.' },
]

export default function CasesMethod() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="МЕТОДОЛОГИЯ"
            title="Что объединяет эти проекты"
            subtitle="VOLTRENA не начинает с технологии. Сначала фиксируется коммерческая задача, потом собирается минимальный рабочий контур, затем связываются каналы, формы, данные и следующий шаг для человека или системы."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {methodSteps.map((m, idx) => (
            <ScrollReveal key={m.id} delay={idx * 60}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <span className="w-2 h-2 rounded-full bg-accent/80 mb-3 block" />
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
