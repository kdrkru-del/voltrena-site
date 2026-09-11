'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import NodeNetwork from '@/components/ui/NodeNetwork'
import { digitalProducts } from '@/data/digital-products'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SystemFlowStep {
  id: string
  name: string
  statementPrefix: string
  statementHighlight: string
  statusShort: string
  statusTitle: string
  detail: string
  tag: string
}

const systemFlowSteps: SystemFlowStep[] = [
  {
    id: 'websites',
    name: 'Сайт',
    statementPrefix: 'Мы создаём',
    statementHighlight: 'сайты.',
    statusShort: 'Конверсионный слой',
    statusTitle: 'Конверсионный интерфейс под задачу',
    detail: 'Проектируем посадочные страницы, корпоративные сайты и каталоги, удерживающие входящий трафик и UTM-метки.',
    tag: 'САЙТ И КОНВЕРСИЯ',
  },
  {
    id: 'leads',
    name: 'Спрос',
    statementPrefix: 'Мы приводим',
    statementHighlight: 'клиентов.',
    statusShort: 'Привлечение спроса',
    statusTitle: 'Управляемый поток целевых заявок',
    detail: 'Запускаем контекстную рекламу в Яндекс Директе, SEO/GEO и точечный B2B-поиск без искажения коммерческого интента.',
    tag: 'ТРАФИК И ЛИДОГЕНЕРАЦИЯ',
  },
  {
    id: 'automation',
    name: 'Продажи',
    statementPrefix: 'Мы автоматизируем',
    statementHighlight: 'продажи.',
    statusShort: 'Автоматизация воронки',
    statusTitle: 'Мгновенный разбор и квалификация',
    detail: 'AI-ассистенты, Telegram-боты и CRM моментально подхватывают обращения и передают менеджеру готовый контекст.',
    tag: 'CRM И АВТОМАТИЗАЦИЯ',
  },
  {
    id: 'data',
    name: 'Данные',
    statementPrefix: 'Мы связываем',
    statementHighlight: 'данные.',
    statusShort: 'Сквозной учёт',
    statusTitle: 'Сквозная аналитика и сбор данных',
    detail: 'Парсинг открытых данных рынка, вебхуки и сведение данных рекламы с фактической выручкой в единый отчёт.',
    tag: 'АНАЛИТИКА И ПАРСИНГ',
  },
  {
    id: 'growth',
    name: 'Система',
    statementPrefix: 'Мы строим',
    statementHighlight: 'системы роста.',
    statusShort: 'Единая система',
    statusTitle: 'Все модули объединены в систему',
    detail: 'Спрос, сайт, захват лидов, CRM-воронка, автоматизация и сквозная аналитика работают как единый механизм роста.',
    tag: 'ЕДИНЫЙ КОНТУР РОСТА',
  },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [activeStepIdx, setActiveStepIdx] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)

  // Auto-cycle through flow steps unless user interacted or prefers reduced motion
  useEffect(() => {
    if (prefersReducedMotion || userInteracted) return

    const intervalTime = activeStepIdx === systemFlowSteps.length - 1 ? 5000 : 2600

    const timer = setTimeout(() => {
      setActiveStepIdx((prev) => (prev + 1) % systemFlowSteps.length)
    }, intervalTime)

    return () => clearTimeout(timer)
  }, [activeStepIdx, prefersReducedMotion, userInteracted])

  const currentStep = systemFlowSteps[activeStepIdx]
  const isFinalState = activeStepIdx === systemFlowSteps.length - 1

  const handleSelectStep = (idx: number) => {
    setUserInteracted(true)
    setActiveStepIdx(idx)
  }

  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-18 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Background animated NodeNetwork canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <NodeNetwork className="absolute inset-0 opacity-45 sm:opacity-60 md:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-bg-primary/70 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_32%,rgba(99,102,241,0.13),transparent_48%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Heading with Dynamic Rotating Statement, CTAs & Product Links */}
          <div className="xl:col-span-6 min-w-0">
            {/* Static Primary Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-text-primary tracking-tight leading-[1.05] mb-2 break-words hyphens-auto">
              Цифровые системы.
            </h1>

            {/* Large Animated Statement rotating smoothly in-place under «Цифровые системы» */}
            <div className="relative h-12 sm:h-14 md:h-16 xl:h-20 mb-5 flex items-center overflow-hidden">
              {!prefersReducedMotion ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-text-primary whitespace-nowrap"
                  >
                    <span>{currentStep.statementPrefix} </span>
                    <span className="text-accent font-bold">{currentStep.statementHighlight}</span>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-text-primary whitespace-nowrap">
                  <span>Мы строим </span>
                  <span className="text-accent font-bold">системы роста.</span>
                </div>
              )}
            </div>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-7">
              Привлечение клиентов, B2B-продажи, обработка заявок, AI-автоматизация и мониторинг данных — как готовые связанные системы, а не набор разрозненных услуг.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button variant="primary" size="lg" href="/solutions/" className="w-full sm:w-auto">
                Выбрать систему
              </Button>
              <Button variant="secondary" size="lg" href="/cases/" className="w-full sm:w-auto">
                Посмотреть кейсы
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
              {digitalProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/solutions/${product.slug}/`}
                  className="group min-w-0 flex items-center justify-between gap-3 rounded-xl border border-border/80 bg-bg-surface/65 px-4 py-3 hover:border-accent/40 hover:bg-bg-surface transition-colors min-h-[52px]"
                >
                  <span className="min-w-0 text-sm font-semibold text-text-primary leading-tight break-words">
                    {product.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent shrink-0 transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Living System Architecture Card (No numbers) */}
          <div className="xl:col-span-6 min-w-0">
            <div className="rounded-2xl sm:rounded-3xl bg-bg-surface/88 backdrop-blur-md border border-border/90 shadow-2xl overflow-hidden">
              
              {/* Header: Architecture Live Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-border/70 bg-bg-primary/50">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-text-primary font-semibold">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                
                <span className="font-mono text-[10px] sm:text-[11px] text-accent uppercase tracking-wider flex items-center gap-1.5">
                  {isFinalState ? (
                    <>
                      <Sparkles className="w-3 h-3 text-accent" />
                      <span>Система объединена</span>
                    </>
                  ) : (
                    <span>{currentStep.statusShort}</span>
                  )}
                </span>
              </div>

              <div className="p-5 sm:p-7">
                {/* Connected Interactive Nodes (No numbers) */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 relative mb-2" role="tablist" aria-label="Логика цифровой системы">
                  {systemFlowSteps.map((step, idx) => {
                    const isActive = idx === activeStepIdx || isFinalState
                    const isDirectlyActive = idx === activeStepIdx
                    const isPast = idx < activeStepIdx

                    return (
                      <button
                        key={step.id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => handleSelectStep(idx)}
                        className={`py-3 px-2 rounded-xl text-center transition-all duration-300 relative border flex flex-col items-center justify-center min-h-[64px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isDirectlyActive
                            ? 'bg-accent/20 border-accent text-text-primary shadow-[0_0_20px_rgba(99,102,241,0.25)] scale-[1.02]'
                            : isPast
                            ? 'bg-bg-primary/80 border-accent/30 text-text-secondary'
                            : 'bg-bg-primary/80 border-border text-text-muted hover:border-border-light hover:text-text-secondary'
                        }`}
                      >
                        <span className="text-xs sm:text-[13px] font-semibold block leading-tight break-words hyphens-auto text-center px-0.5">
                          {step.name}
                        </span>

                        {/* Active indicator dot */}
                        {isDirectlyActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 animate-pulse" />
                        )}
                        {!isDirectlyActive && (
                          <span className={`w-1 h-1 rounded-full mt-1.5 ${isPast ? 'bg-accent/50' : 'bg-border'}`} />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Connecting Progress Line */}
                <div className="w-full bg-bg-primary h-1.5 rounded-full mb-6 overflow-hidden relative border border-border/40">
                  <div
                    className="h-full bg-gradient-to-r from-accent/80 via-accent to-accent-light transition-all duration-500 rounded-full"
                    style={{
                      width: isFinalState
                        ? '100%'
                        : `${((activeStepIdx + 1) / systemFlowSteps.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Dynamic Active Step Details Card */}
                <div className="rounded-2xl bg-bg-primary border border-accent/25 p-5 sm:p-6 mb-4 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold">
                      {currentStep.tag}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {isFinalState ? 'Система синхронизирована' : 'Событие активно'}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <h2 className="text-base sm:text-lg font-bold text-text-primary leading-tight break-words">
                      {currentStep.statusTitle}
                    </h2>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {currentStep.detail}
                  </p>
                </div>

                {/* 3 Steps without numbers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Выбрать задачу',
                    'Получить конфигурацию',
                    'Запустить первую очередь',
                  ].map((label) => (
                    <div key={label} className="rounded-xl bg-bg-primary/70 border border-border/80 px-4 py-3 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-accent mb-2" />
                      <span className="text-xs sm:text-sm font-semibold text-text-secondary break-words">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
