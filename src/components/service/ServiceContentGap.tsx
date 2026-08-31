'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Layers, HelpCircle, FilePlus, Target } from 'lucide-react'

const gapSteps = [
  {
    icon: Target,
    title: 'Реальный поисковый спрос',
    desc: 'Сотни конкретных вопросов и коммерческих запросов, которые вводят ваши потенциальные клиенты.',
  },
  {
    icon: HelpCircle,
    title: 'Анализ текущего сайта',
    desc: 'Выявляем темы и направления, на которые у вас на сайте пока нет выделенных страниц и ответов.',
  },
  {
    icon: Layers,
    title: 'Content Gap (Точки роста)',
    desc: 'Список конкретных посадочных страниц и экспертных материалов, которые заберут целевой спрос.',
  },
  {
    icon: FilePlus,
    title: 'Новые коммерческие страницы',
    desc: 'Создание целевых страниц под каждую группу спроса с выходом в топ поисковой выдачи.',
  },
]

export default function ServiceContentGap() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ТОЧКИ РОСТА"
            title="Находим вопросы, на которые сайт пока не отвечает."
            subtitle="Сравниваем фактический спрос аудитории со структурой сайта и находим незакрытые направления."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gapSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.title} delay={i * 80}>
                  <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                    <div>
                      <div className="p-3 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-text-primary mb-2">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                Одна страница не может ответить на все запросы. Мы строим разветвленную систему под каждый интент.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
