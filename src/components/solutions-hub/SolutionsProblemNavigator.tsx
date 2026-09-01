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
    problemText: 'Нужен стабильный поток входящих заявок',
    recommendedSolution: 'Система привлечения клиентов (Digital Sales System)',
    targetAnchor: '#solution-digital-sales',
    nodes: ['Поисковый спрос', 'Яндекс Директ', 'Сайт', 'CRM', 'Сквозная аналитика'],
    processChange: 'Реклама ведёт на подготовленный сайт, заявка за 1 секунду фиксируется в CRM, а аналитика показывает реальную цену продажи.',
    startWith: 'Контекстная реклама + конверсионная посадочная страница.',
  },
  {
    id: 'b2b',
    problemText: 'Нужен системный B2B-поиск',
    recommendedSolution: 'Система B2B-продаж (B2B Pipeline System)',
    targetAnchor: '#solution-b2b-pipeline',
    nodes: ['Анализ рынка', 'Сбор баз', 'Скоринг ЛПР', 'CRM воронка', 'Аутрич'],
    processChange: 'Вместо ожидания органики формируется верифицированная база ЛПР с прямым сценарием первых переговоров.',
    startWith: 'Сбор базы компаний по вашему портрету клиента (ICP).',
  },
  {
    id: 'speed',
    problemText: 'Заявки обрабатываются медленно',
    recommendedSolution: 'Квалификация и обработка заявок (Lead Operations System)',
    targetAnchor: '#solution-lead-operations',
    nodes: ['Входящий лид', 'AI-квалификация', 'Маршрутизация', 'CRM карточка', 'Менеджер'],
    processChange: 'Заявка мгновенно распознаётся AI по регламенту, обогащается контекстом и передаётся свободному менеджеру.',
    startWith: 'AI-квалификатор в связке с Telegram и CRM.',
  },
  {
    id: 'routine',
    problemText: 'Ручные операции мешают масштабированию',
    recommendedSolution: 'Автоматизация операционных процессов (AI Operations System)',
    targetAnchor: '#solution-ai-operations',
    nodes: ['Событие', 'Workflow правило', 'AI обработка', 'Проверка человеком', 'Лог результата'],
    processChange: 'Рутинные действия (формирование КП, передача данных, напоминания) выполняются автоматически по триггерам.',
    startWith: 'Автоматизация ключевого узкого места в отделе продаж.',
  },
  {
    id: 'market',
    problemText: 'Нужны данные о рынке и управленческие сигналы',
    recommendedSolution: 'Мониторинг рынка и данных (Market Intelligence System)',
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
          <SectionHeading
            tag="НАВИГАТОР РЕШЕНИЙ"
            title="Что сейчас мешает бизнесу расти?"
            subtitle="Выберите ключевое узкое место — покажем архитектуру системы и минимальный шаг для старта."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Question Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8" role="tablist">
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
                  <span>{p.problemText}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-accent shrink-0 ml-2" />}
                </button>
              )
            })}
          </div>

          {/* Active Solution Recommendation Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                Рекомендуемая система
              </span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              {activeItem.recommendedSolution}
            </h3>

            {/* Nodes strip */}
            <div className="mb-6">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-2">
                Узлы системы:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeItem.nodes.map((node, idx) => (
                  <span key={node} className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-xs font-mono text-text-primary">
                    {idx + 1}. {node}
                  </span>
                ))}
              </div>
            </div>

            {/* Process Change & Minimal Start */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-bg-primary border border-border">
                <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                  Что изменится в процессе:
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {activeItem.processChange}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-primary border border-border">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                  Можно начать с:
                </span>
                <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                  {activeItem.startWith}
                </p>
              </div>
            </div>

            <a
              href={activeItem.targetAnchor}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
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
