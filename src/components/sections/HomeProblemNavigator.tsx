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
  solutionTag: string
  outcome: string
  components: string[]
  solutionHref: string
}

const problems: ProblemItem[] = [
  {
    id: 'leads',
    problemTitle: 'Нет стабильного потока заявок',
    solutionName: 'Система привлечения клиентов (Digital Sales System)',
    solutionTag: 'ВХОДЯЩИЙ ПОТОК',
    outcome: 'Связка контекстной рекламы, конверсионного сайта и CRM со сквозным контролем окупаемости.',
    components: ['Яндекс Директ', 'Конверсионный сайт', 'Внедрение CRM', 'Сквозная аналитика'],
    solutionHref: '/solutions/#solution-digital-sales',
  },
  {
    id: 'b2b',
    problemTitle: 'Нужен системный B2B-поиск клиентов',
    solutionName: 'Система B2B-продаж (B2B Pipeline System)',
    solutionTag: 'B2B АУТРИЧ',
    outcome: 'Сбор и обогащение баз компаний, AI-скоринг ЛПР и передача контактов в отдел продаж.',
    components: ['Сбор баз компаний', 'Верификация ЛПР', 'AI-скоринг', 'CRM-воронка'],
    solutionHref: '/solutions/#solution-b2b-pipeline',
  },
  {
    id: 'speed',
    problemTitle: 'Лиды долго обрабатываются или теряются',
    solutionName: 'Квалификация и обработка заявок (Lead Operations System)',
    solutionTag: 'КВАЛИФИКАЦИЯ & СКОРОСТЬ',
    outcome: 'Моментальная AI-квалификация обращений и передача менеджеру готового контекста диалога.',
    components: ['AI-квалификатор', 'Telegram-интерфейс', 'Маршрутизация лидов', 'amoCRM / Битрикс24'],
    solutionHref: '/solutions/#solution-lead-operations',
  },
  {
    id: 'routine',
    problemTitle: 'Слишком много ручных операций в отделе продаж',
    solutionName: 'Автоматизация операционных процессов (AI Operations System)',
    solutionTag: 'АВТОМАТИЗАЦИЯ РУТИНЫ',
    outcome: 'Автоматическая генерация КП, счетов, синхронизация баз данных и оповещения команды.',
    components: ['Workflow (n8n)', 'Генерация документов', 'Telegram-боты', 'Синхронизация данных'],
    solutionHref: '/solutions/#solution-ai-operations',
  },
  {
    id: 'market',
    problemTitle: 'Не хватает данных о рынке и ценах конкурентов',
    solutionName: 'Мониторинг рынка и данных (Market Intelligence System)',
    solutionTag: 'АНАЛИТИКА РЫНКА',
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
          <SectionHeading
            tag="С ЧЕГО НАЧАТЬ"
            title="Что сейчас мешает бизнесу расти?"
            subtitle="Выберите ключевую проблему — покажем подходящее системное решение и минимальный шаг для запуска."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Problem Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-6" role="tablist" aria-label="Выбор задачи">
            {problems.map((p) => {
              const isSelected = activeId === p.id
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(p.id)}
                  className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all duration-200 border min-h-[48px] flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-accent/15 border-accent text-text-primary font-semibold shadow-md'
                      : 'bg-bg-surface text-text-secondary border-border hover:border-border-light hover:text-text-primary'
                  }`}
                >
                  <span>{p.problemTitle}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-accent shrink-0 ml-2" />}
                </button>
              )
            })}
          </div>

          {/* Active Solution Display Card (Fast & Clean) */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs text-accent font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{activeItem.solutionTag}</span>
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              {activeItem.solutionName}
            </h3>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 max-w-3xl">
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
