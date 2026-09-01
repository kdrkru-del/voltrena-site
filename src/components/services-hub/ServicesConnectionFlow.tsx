'use client'

import React, { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, ArrowDown } from 'lucide-react'

interface Scenario {
  id: string
  title: string
  descriptor: string
  nodes: { label: string; role: string }[]
  outcome: string
}

const scenarios: Scenario[] = [
  {
    id: 'inbound',
    title: 'Входящие заявки',
    descriptor: 'Привлечение и обработка горячего спроса',
    nodes: [
      { label: 'Директ / SEO', role: 'Спрос' },
      { label: 'Сайт', role: 'Конверсия' },
      { label: 'CRM', role: 'Сделка' },
      { label: 'Аналитика', role: 'ROMI' },
    ],
    outcome: 'Рекламный бюджет окупается, заявки сразу попадают в воронку менеджеров с UTM-метками.',
  },
  {
    id: 'b2b',
    title: 'B2B-продажи',
    descriptor: 'Активный выход на корпоративных клиентов',
    nodes: [
      { label: 'Парсинг данных', role: 'Сбор базы' },
      { label: 'B2B-поиск', role: 'Фильтр ЛПР' },
      { label: 'Квалификация', role: 'Скоринг' },
      { label: 'CRM', role: 'Переговоры' },
    ],
    outcome: 'Менеджеры работают только с целевыми компаниями, у которых подтверждена потребность.',
  },
  {
    id: 'automation',
    title: 'Автоматизация обработки',
    descriptor: 'Ускорение ответа и разгрузка команды',
    nodes: [
      { label: 'Заявка', role: 'Триггер' },
      { label: 'CRM', role: 'Фиксация' },
      { label: 'AI / Telegram', role: 'Контекст' },
      { label: 'Менеджер', role: 'Закрытие' },
      { label: 'Аналитика', role: 'Контроль' },
    ],
    outcome: 'Первичная обработка происходит моментально, исключая человеческий фактор и забытые задачи.',
  },
]

export default function ServicesConnectionFlow() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenarios[0].id)
  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0]

  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СВЯЗАННЫЙ СТЕК"
            title="Как услуги соединяются в рабочий процесс."
            subtitle="Каждый компонент усиливает соседний. Выберите сценарий, чтобы увидеть путь данных."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10" role="tablist">
            {scenarios.map((sc) => {
              const isSelected = activeScenarioId === sc.id
              return (
                <button
                  key={sc.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-accent text-white font-bold border-accent shadow-lg shadow-accent/20'
                      : 'bg-bg-surface text-text-secondary border-border hover:border-accent/40 hover:text-text-primary'
                  }`}
                >
                  {sc.title}
                </button>
              )
            })}
          </div>

          {/* Interactive Flow Visual */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border shadow-xl">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold block mb-1">
                {activeScenario.title}
              </span>
              <p className="text-sm text-text-secondary">
                {activeScenario.descriptor}
              </p>
            </div>

            {/* Desktop Horizontal Flow */}
            <div className="hidden md:flex items-center justify-center gap-2 lg:gap-3 mb-8">
              {activeScenario.nodes.map((node, i) => (
                <React.Fragment key={node.label}>
                  <div className="flex-1 max-w-[180px] p-3.5 rounded-xl bg-bg-primary border border-accent/40 text-center">
                    <span className="font-bold text-xs sm:text-sm text-text-primary block mb-0.5">
                      {node.label}
                    </span>
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                      {node.role}
                    </span>
                  </div>
                  {i < activeScenario.nodes.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-accent shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="md:hidden flex flex-col gap-2 mb-6">
              {activeScenario.nodes.map((node, i) => (
                <React.Fragment key={node.label}>
                  <div className="p-3 rounded-lg bg-bg-primary border border-accent/40 flex items-center justify-between">
                    <span className="font-bold text-xs text-text-primary">{node.label}</span>
                    <span className="text-[10px] font-mono text-accent uppercase">{node.role}</span>
                  </div>
                  {i < activeScenario.nodes.length - 1 && (
                    <div className="flex justify-center -my-0.5 text-accent/60">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Scenario Outcome */}
            <div className="p-4 rounded-xl bg-bg-primary/80 border border-border/80 text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                Бизнес-эффект связки:
              </span>
              <p className="text-xs sm:text-sm text-text-primary font-medium">
                {activeScenario.outcome}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
