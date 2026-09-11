'use client'

import React, { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

interface ProblemItem {
  id: string
  problemText: string
  recommendedSolution: string
  targetAnchor: string
  nodes: string[]
  processChange: string
  startWith: string
}

const problems: ProblemItem[] = [
  {
    id: 'leads',
    problemText: 'Нет потока заявок',
    recommendedSolution: 'Система привлечения клиентов',
    targetAnchor: '#solution-digital-sales',
    nodes: ['Поисковый спрос', 'Яндекс Директ', 'Сайт', 'CRM', 'Сквозная аналитика'],
    processChange: 'Реклама ведёт на подготовленный сайт, заявка за 1 секунду фиксируется в CRM, а аналитика показывает реальную цену продажи.',
    startWith: 'Контекстная реклама + конверсионная посадочная страница.',
  },
  {
    id: 'b2b',
    problemText: 'Нужны B2B-продажи',
    recommendedSolution: 'Система B2B-продаж',
    targetAnchor: '#solution-b2b-pipeline',
    nodes: ['Анализ рынка', 'Сбор баз', 'Скоринг ЛПР', 'CRM воронка', 'Аутрич'],
    processChange: 'Вместо ожидания органики формируется верифицированная база ЛПР с прямым сценарием первых переговоров.',
    startWith: 'Сбор базы компаний по вашему портрету клиента (ICP).',
  },
  {
    id: 'speed',
    problemText: 'Теряются лиды',
    recommendedSolution: 'Квалификация и обработка заявок',
    targetAnchor: '#solution-lead-operations',
    nodes: ['Входящий лид', 'AI-квалификация', 'Маршрутизация', 'CRM карточка', 'Менеджер'],
    processChange: 'Заявка мгновенно распознаётся AI по регламенту, обогащается контекстом и передаётся свободному менеджеру.',
    startWith: 'AI-квалификатор в связке с Telegram и CRM.',
  },
  {
    id: 'routine',
    problemText: 'Рутина в процессах',
    recommendedSolution: 'Автоматизация операционных процессов',
    targetAnchor: '#solution-ai-operations',
    nodes: ['Событие', 'Workflow правило', 'AI обработка', 'Проверка человеком', 'Лог результата'],
    processChange: 'Рутинные действия (формирование КП, передача данных, напоминания) выполняются автоматически по триггерам.',
    startWith: 'Автоматизация ключевого узкого места в отделе продаж.',
  },
  {
    id: 'market',
    problemText: 'Цены конкурентов',
    recommendedSolution: 'Мониторинг рынка и данных',
    targetAnchor: '#solution-market-intelligence',
    nodes: ['Источники данных', 'Парсинг', 'Нормализация', 'Анализ цен', 'Telegram алерты'],
    processChange: 'Бизнес ежедневно видит изменения цен конкурентов и новые события в автоматическом отчёте.',
    startWith: 'Парсинг каталогов и цен ключевых конкурентов.',
  },
]

export default function SolutionsProblemNavigator() {
  const [activeId, setActiveId] = useState<string>(problems[0].id)
  const activeItem = problems.find((p) => p.id === activeId) || problems[0]

  return (
    <section id="solution-navigator" className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary text-center mb-10 tracking-tight">
            Что сейчас мешает бизнесу расти?
          </h2>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Question Tabs: Short bold tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8" role="tablist">
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
                  <span>{p.problemText}</span>
                </button>
              )
            })}
          </div>

          {/* Active Solution Recommendation Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
              {activeItem.recommendedSolution}
            </h3>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-6 max-w-3xl">
              {activeItem.processChange}
            </p>

            <div className="p-4 rounded-xl bg-bg-primary border border-border mb-6">
              <p className="text-sm text-text-primary">
                <strong className="text-accent font-semibold">Стартовый шаг: </strong>
                {activeItem.startWith}
              </p>
            </div>

            {/* Nodes strip */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {activeItem.nodes.map((node) => (
                  <span key={node} className="px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-xs font-mono text-text-primary">
                    {node}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={activeItem.targetAnchor}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
            >
              <span>Смотреть подробности решения</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
