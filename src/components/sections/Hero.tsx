'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowRight, CheckCircle2, Sparkles, Activity } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FlowStep {
  id: string
  stage: string
  title: string
  detail: string
  metric: string
  badge: string
}

const flowSteps: FlowStep[] = [
  {
    id: 'signal',
    stage: '01. СПРОС',
    title: 'Появился сигнал',
    detail: 'Пользователь ищет решение в поиске или AI. Показ релевантного объявления.',
    metric: 'Контекст запроса зафиксирован',
    badge: 'Трафик & Поиск',
  },
  {
    id: 'capture',
    stage: '02. САЙТ',
    title: 'Заявка принята',
    detail: 'Посадочная страница отвечает на задачу посетителя и собирает контакт с UTM.',
    metric: 'Конверсия без потери меток',
    badge: 'Интерфейс',
  },
  {
    id: 'context',
    stage: '03. CRM',
    title: 'Контекст сохранён',
    detail: 'Лид автоматически создан в CRM с историей касаний, источником и компанией.',
    metric: 'Единая карточка клиента',
    badge: 'Воронка',
  },
  {
    id: 'routing',
    stage: '04. АВТОМАТИЗАЦИЯ',
    title: 'Менеджеру назначено действие',
    detail: 'AI квалифицирует лид, отправляет алерт в Telegram и ставит задачу с дедлайном.',
    metric: 'Первый ответ без задержки',
    badge: 'AI & Workflow',
  },
  {
    id: 'analytics',
    stage: '05. АНАЛИТИКА',
    title: 'Результат в аналитике',
    detail: 'Сделка и выручка возвращаются в отчёт: видна окупаемость каждого рубля рекламы.',
    metric: 'Сквозной ROMI и CAC',
    badge: 'Данные',
  },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  // Subtle cyclic step progression if not reduced motion
  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % flowSteps.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [prefersReducedMotion])

  const activeStep = flowSteps[activeStepIndex]

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                VOLTRENA / DIGITAL GROWTH SYSTEMS
              </span>
            </div>

            {/* H1 - Static first frame, high contrast */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-primary tracking-tight leading-[1.12] mb-6">
              Превращаем путь от первого клика до продажи в управляемую систему.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-8">
              Соединяем сайт, привлечение, CRM, автоматизацию и аналитику — начиная с участка, который сейчас тормозит рост.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#contact" className="w-full sm:w-auto">
                Разобрать задачу
              </Button>
              <Button variant="secondary" size="lg" href="/solutions/" className="w-full sm:w-auto">
                Посмотреть решения
              </Button>
            </div>

            {/* Competencies row */}
            <div className="pt-6 border-t border-border/70 w-full">
              <p className="font-mono text-xs text-text-muted tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Сайт</span>
                <span className="text-accent/60">·</span>
                <span>Привлечение</span>
                <span className="text-accent/60">·</span>
                <span>CRM</span>
                <span className="text-accent/60">·</span>
                <span>Автоматизация</span>
                <span className="text-accent/60">·</span>
                <span>Аналитика</span>
              </p>
            </div>
          </div>

          {/* Right Column: System Flow Visual Artifact */}
          <div className="lg:col-span-5 w-full">
            <div className="p-5 sm:p-7 rounded-2xl bg-bg-surface border border-border/80 shadow-2xl relative overflow-hidden">
              {/* Header of artifact */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/70">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-accent animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                    Сквозной Data Flow
                  </span>
                </div>
                <span className="font-mono text-[11px] text-accent px-2 py-0.5 rounded bg-accent/10 font-medium">
                  {activeStep.stage}
                </span>
              </div>

              {/* Steps Progress Pills */}
              <div className="grid grid-cols-5 gap-1.5 mb-6" role="tablist" aria-label="Этапы системы">
                {flowSteps.map((step, idx) => {
                  const isActive = idx === activeStepIndex
                  const isPast = idx < activeStepIndex
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStepIndex(idx)}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={step.title}
                      className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isActive
                          ? 'bg-accent shadow-sm shadow-accent/40'
                          : isPast
                          ? 'bg-accent/40'
                          : 'bg-bg-primary border border-border'
                      }`}
                    />
                  )
                })}
              </div>

              {/* Active Step Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-bg-primary border border-accent/30 mb-4 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-accent uppercase font-semibold">
                    {activeStep.badge}
                  </span>
                  <span className="text-xs font-mono text-text-muted">
                    Шаг {activeStepIndex + 1} из 5
                  </span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">
                  {activeStep.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {activeStep.detail}
                </p>
                <div className="pt-3 border-t border-border/60 flex items-center gap-2 text-xs text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs text-text-primary">{activeStep.metric}</span>
                </div>
              </div>

              {/* Step Selector Buttons */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {flowSteps.map((step, idx) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors border ${
                      idx === activeStepIndex
                        ? 'bg-accent text-white border-accent font-semibold'
                        : 'bg-bg-primary text-text-muted border-border hover:text-text-primary hover:border-border-light'
                    }`}
                  >
                    {step.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
