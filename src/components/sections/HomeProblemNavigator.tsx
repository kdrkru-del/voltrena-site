'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

interface ProblemItem {
  id: string
  problemTitle: string
  solutionName: string
  outcome: string
  components: string[]
  solutionHref: string
}

const problems: ProblemItem[] = [
  {
    id: 'leads',
    problemTitle: 'Нет потока заявок',
    solutionName: 'Система привлечения клиентов',
    outcome: 'Связка контекстной рекламы, конверсионного сайта и CRM со сквозным контролем окупаемости.',
    components: ['Яндекс Директ', 'Конверсионный сайт', 'Внедрение CRM', 'Сквозная аналитика'],
    solutionHref: '/solutions/#solution-digital-sales',
  },
  {
    id: 'b2b',
    problemTitle: 'Нужны B2B-продажи',
    solutionName: 'Система B2B-продаж',
    outcome: 'Сбор и обогащение баз компаний, AI-скоринг ЛПР и передача контактов в отдел продаж.',
    components: ['Сбор баз компаний', 'Верификация ЛПР', 'AI-скоринг', 'CRM-воронка'],
    solutionHref: '/solutions/#solution-b2b-pipeline',
  },
  {
    id: 'speed',
    problemTitle: 'Теряются лиды',
    solutionName: 'Квалификация и обработка заявок',
    outcome: 'Моментальная AI-квалификация обращений и передача менеджеру готового контекста диалога.',
    components: ['AI-квалификатор', 'Telegram-интерфейс', 'Маршрутизация лидов', 'amoCRM / Битрикс24'],
    solutionHref: '/solutions/#solution-lead-operations',
  },
  {
    id: 'routine',
    problemTitle: 'Рутина в процессах',
    solutionName: 'Автоматизация операционных процессов',
    outcome: 'Автоматическая генерация КП, счетов, синхронизация баз данных и оповещения команды.',
    components: ['Workflow (n8n)', 'Генерация документов', 'Telegram-боты', 'Синхронизация данных'],
    solutionHref: '/solutions/#solution-ai-operations',
  },
  {
    id: 'market',
    problemTitle: 'Цены конкурентов',
    solutionName: 'Мониторинг рынка и данных',
    outcome: 'Регулярный сбор цен, ассортимента и активности конкурентов с оповещениями в Telegram.',
    components: ['Парсинг площадок', 'Нормализация данных', 'Мониторинг цен', 'Дашборды'],
    solutionHref: '/solutions/#solution-market-intelligence',
  },
]

export default function HomeProblemNavigator() {
  const [activeId, setActiveId] = useState<string>(problems[0].id)
  const activeItem = problems.find((p) => p.id === activeId) || problems[0]

  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary text-center mb-10 tracking-tight">
            Что сейчас мешает бизнесу расти?
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Problem Selector Buttons: Short bold tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8" role="tablist" aria-label="Выбор задачи">
            {problems.map((p) => {
              const isSelected = activeId === p.id
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(p.id)}
                  className={`p-3.5 sm:p-4 rounded-xl text-center text-sm sm:text-base font-bold transition-all duration-200 border min-h-[52px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-accent/20 border-accent text-accent-light shadow-lg scale-[1.02]'
                      : 'bg-bg-surface text-text-secondary border-border hover:border-border-light hover:text-text-primary'
                  }`}
                >
                  <span>{p.problemTitle}</span>
                </button>
              )
            })}
          </div>

          {/* Active Solution Display Card (Fast & Clean) */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
              {activeItem.solutionName}
            </h3>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-3xl">
              {activeItem.outcome}
            </p>

            {/* Components list */}
            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {activeItem.components.map((comp) => (
                  <span
                    key={comp}
                    className="px-3 py-1 rounded-lg bg-bg-primary border border-border text-xs font-mono text-text-secondary"
                  >
                    {comp}
                  </span>
                ))}
              </div>

              <Link
                href={activeItem.solutionHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[42px] shrink-0"
              >
                <span>Подробнее о решении</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
