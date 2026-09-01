'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

const principles = [
  {
    title: 'Одна архитектура вместо набора несвязанных ТЗ',
    desc: 'Все инструменты проектируются с учётом взаимных требований к данным, форматам и событиям.',
  },
  {
    title: 'Один ответственный контур от входа до данных',
    desc: 'Вам не нужно искать крайнего между разработчиком сайта, маркетологом и интегратором CRM.',
  },
  {
    title: 'Сквозная проверка ключевых сценариев',
    desc: 'Перед сдачей тестируем весь путь: от показа объявления до создания сделки и отображения в отчёте.',
  },
  {
    title: 'Документация связей и правил',
    desc: 'Передаём понятную схему работы системы, обучая вашу команду правилам взаимодействия.',
  },
]

export default function SolutionsWhyVoltrena() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПОДХОД К РАБОТЕ"
            title="Единая ответственность за всю систему."
            subtitle="Когда сайт, реклама, CRM и автоматизация делаются отдельно — никто не отвечает за итоговую окупаемость. Мы соединяем всё в один контур."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {principles.map((p, idx) => (
            <ScrollReveal key={p.title} delay={idx * 60}>
              <div className="p-5 sm:p-6 rounded-xl bg-bg-surface border border-border/80 flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {p.desc}
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
