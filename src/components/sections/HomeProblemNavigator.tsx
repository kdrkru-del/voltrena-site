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
  flow: string
  startWith: string
  solutionHref: string
}

const problems: ProblemItem[] = [
  {
    id: 'leads',
    problemTitle: 'Нет стабильного потока заявок',
    solutionName: 'Система привлечения клиентов (Digital Sales System)',
    flow: 'Поисковый спрос → Реклама → Сайт → CRM → Сквозная аналитика',
    startWith: 'Контекстная реклама в Яндекс Директ + посадочная страница.',
    solutionHref: '/solutions/#solution-digital-sales',
  },
  {
    id: 'b2b',
    problemTitle: 'Нужен системный B2B-поиск',
    solutionName: 'Система B2B-продаж (B2B Pipeline System)',
    flow: 'Сбор баз компаний → Скоринг ЛПР → CRM воронка → Аутрич',
    startWith: 'Сбор и обогащение базы компаний по вашему профилю клиента (ICP).',
    solutionHref: '/solutions/#solution-b2b-pipeline',
  },
  {
    id: 'speed',
    problemTitle: 'Лиды долго обрабатываются или теряются',
    solutionName: 'Квалификация и обработка заявок (Lead Operations System)',
    flow: 'Заявка → AI-квалификация → Маршрутизация → CRM карточка → Менеджер',
    startWith: 'AI-ассистент по квалификации и автооповещения в Telegram.',
    solutionHref: '/solutions/#solution-lead-operations',
  },
  {
    id: 'routine',
    problemTitle: 'Слишком много ручных операций',
    solutionName: 'Автоматизация операционных процессов (AI Operations System)',
    flow: 'Событие → Workflow правило → AI обработка → Проверка → Результат',
    startWith: 'Автоматизация ключевого рутинного сценария в отделе продаж.',
    solutionHref: '/solutions/#solution-ai-operations',
  },
  {
    id: 'market',
    problemTitle: 'Не хватает данных о рынке',
    solutionName: 'Мониторинг рынка и данных (Market Intelligence System)',
    flow: 'Источники → Парсинг → Нормализация → Анализ цен → Telegram алерты',
    startWith: 'Регулярный мониторинг цен и ассортимента ключевых конкурентов.',
    solutionHref: '/solutions/#solution-market-intelligence',
  },
]

export default function HomeProblemNavigator() {
  const [activeId, setActiveId] = useState<string>(problems[0].id)
  const activeItem = problems.find((p) => p.id === activeId) || problems[0]

  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="С ЧЕГО НАЧАТЬ"
            title="Что сейчас мешает бизнесу расти?"
            subtitle="Выберите ключевое узкое место — покажем рекомендуемую систему и минимальный шаг для запуска."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Problem Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8" role="tablist" aria-label="Выбор узкого места">
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

          {/* Active Problem Display Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                Рекомендуемое решение
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
              {activeItem.solutionName}
            </h3>

            {/* Flow line */}
            <div className="p-3.5 rounded-xl bg-bg-primary border border-border mb-5">
              <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1">
                Цепочка системы:
              </span>
              <p className="text-xs sm:text-sm font-mono text-text-primary font-medium">
                {activeItem.flow}
              </p>
            </div>

            {/* Start with box */}
            <div className="p-4 rounded-xl bg-bg-primary/80 border border-border/80 flex items-start gap-3 mb-6">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-text-secondary">
                <strong className="text-text-primary block mb-0.5">С чего можно начать:</strong>
                {activeItem.startWith}
              </div>
            </div>

            {/* Action link */}
            <Link
              href={activeItem.solutionHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
            >
              <span>Посмотреть решение</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
