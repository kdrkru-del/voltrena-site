'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import NodeNetwork from '@/components/ui/NodeNetwork'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SystemNode {
  id: string
  name: string
  status: string
  statusShort: string
  detail: string
  tag: string
}

interface DynamicStatement {
  id: string
  prefix: string
  highlight: string
  nodeIdx: number
  isFinalSystemState?: boolean
}

const systemNodes: SystemNode[] = [
  {
    id: 'demand',
    name: 'Спрос',
    status: 'Поисковый сигнал зафиксирован',
    statusShort: 'Поисковый сигнал',
    detail: 'Релевантный запрос в поиске или AI. Передача контекста без искажения интента.',
    tag: 'Трафик & Поиск',
  },
  {
    id: 'website',
    name: 'Сайт',
    status: 'Сессия открыта, UTM сохранены',
    statusShort: 'Конверсионный слой',
    detail: 'Посадочная страница отвечает на точную задачу посетителя и удерживает входящие метки.',
    tag: 'Конверсионный слой',
  },
  {
    id: 'lead',
    name: 'Заявка',
    status: 'Обращение получено без потерь',
    statusShort: 'Обращение получено',
    detail: 'Контакты, контекст запроса и технические параметры зафиксированы в едином пакете.',
    tag: 'Захват данных',
  },
  {
    id: 'crm',
    name: 'CRM',
    status: 'Лид в работе и обогащен',
    statusShort: 'Лид в работе',
    detail: 'Карточка клиента мгновенно создана в воронке продаж с полной историей касаний.',
    tag: 'Управление воронкой',
  },
  {
    id: 'automation',
    name: 'Процессы',
    status: 'Сценарий запущен, Telegram-алерт',
    statusShort: 'Процесс запущен',
    detail: 'Сценарий классифицирует лид, назначает ответственного, маршрутизирует задачу и отправляет уведомление.',
    tag: 'Workflow & Задачи',
  },
  {
    id: 'analytics',
    name: 'Аналитика',
    status: 'Результат связан в сквозной отчёт',
    statusShort: 'Результат связан',
    detail: 'Выручка и статус сделки сопоставлены с рекламным источником для расчета окупаемости.',
    tag: 'Сквозной контроль',
  },
]

const dynamicStatements: DynamicStatement[] = [
  {
    id: 'websites',
    prefix: 'Мы создаём',
    highlight: 'сайты.',
    nodeIdx: 1, // Сайт
  },
  {
    id: 'leads',
    prefix: 'Мы приводим',
    highlight: 'клиентов.',
    nodeIdx: 2, // Заявка
  },
  {
    id: 'sales_auto',
    prefix: 'Мы автоматизируем',
    highlight: 'продажи.',
    nodeIdx: 4, // Процессы (автоматизация, CRM, воркфлоу)
  },
  {
    id: 'data_sync',
    prefix: 'Мы связываем',
    highlight: 'данные.',
    nodeIdx: 5, // Аналитика
  },
  {
    id: 'growth_systems',
    prefix: 'Мы строим',
    highlight: 'системы роста.',
    nodeIdx: 5, // Весь pipeline
    isFinalSystemState: true,
  },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [statementIdx, setStatementIdx] = useState(0)
  const [userInteracted, setUserInteracted] = useState(false)

  // Synchronized statement cycling that drives the system flow
  useEffect(() => {
    if (prefersReducedMotion || userInteracted) return

    const intervalTime = statementIdx === dynamicStatements.length - 1 ? 6000 : 2500

    const timer = setTimeout(() => {
      setStatementIdx((prev) => (prev + 1) % dynamicStatements.length)
    }, intervalTime)

    return () => clearTimeout(timer)
  }, [statementIdx, prefersReducedMotion, userInteracted])

  const currentStatement = dynamicStatements[statementIdx]
  const isFinalState = currentStatement.isFinalSystemState
  const activeNode = systemNodes[currentStatement.nodeIdx]

  // Allow direct interaction with nodes
  const handleSelectNode = (idx: number) => {
    setUserInteracted(true)
    const matchingStatementIdx = dynamicStatements.findIndex((s) => s.nodeIdx === idx && !s.isFinalSystemState)
    if (matchingStatementIdx !== -1) {
      setStatementIdx(matchingStatementIdx)
    } else {
      if (idx === 0) setStatementIdx(1)
      else if (idx === 3) setStatementIdx(2)
      else setStatementIdx(4)
    }
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Background animated NodeNetwork layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <NodeNetwork className="absolute inset-0 opacity-60 sm:opacity-75 md:opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/25 via-bg-primary/55 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.14),transparent_55%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Positioning & Synchronized Storytelling */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold backdrop-blur-sm">
                VOLTRENA / DIGITAL GROWTH SYSTEMS
              </span>
            </div>

            {/* H1 - Short, punchy, high-contrast headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-primary tracking-tight leading-[1.12] mb-3">
              От первого контакта<br className="hidden sm:inline" /> до продажи.
            </h1>

            {/* Dynamic Synchronized Statement */}
            <div className="min-h-[44px] sm:min-h-[48px] md:min-h-[52px] flex items-center mb-5 overflow-hidden w-full">
              {prefersReducedMotion ? (
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                  <span>Мы строим </span>
                  <span className="text-accent font-bold">системы роста.</span>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStatement.id}
                    initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary"
                  >
                    <span>{currentStatement.prefix} </span>
                    <span className="text-accent font-bold">{currentStatement.highlight}</span>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mb-8">
              Соединяем привлечение, сайт, CRM, автоматизацию и аналитику — начиная с проблемы, которая сейчас ограничивает рост бизнеса.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Button variant="primary" size="lg" href="#contact" className="w-full sm:w-auto">
                Разобрать задачу
              </Button>
              <Button variant="secondary" size="lg" href="/solutions/" className="w-full sm:w-auto">
                Посмотреть решения
              </Button>
            </div>
          </div>

          {/* Right Column: Living System Flow Visual (Synchronized with text) */}
          <div className="lg:col-span-6 w-full">
            <div className="p-5 sm:p-7 rounded-2xl bg-bg-surface/85 backdrop-blur-md border border-border/90 shadow-2xl relative overflow-hidden">
              
              {/* Header: System Live Status */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-border/70">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold">
                    LIVING SYSTEM FLOW
                  </span>
                </div>
                
                {/* Semantic status indicator */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-[11px] text-accent">
                  {isFinalState ? (
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-accent" />
                      <span>Система объединена</span>
                    </span>
                  ) : (
                    <span>{activeNode.statusShort}</span>
                  )}
                </div>
              </div>

              {/* Connected Nodes Diagram (6 Clean Semantic Nodes: Спрос → Сайт → Заявка → CRM → Процессы → Аналитика) */}
              <div className="mb-6">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 relative" role="tablist" aria-label="Узлы системы">
                  {systemNodes.map((node, idx) => {
                    const isDirectlyActive = idx === currentStatement.nodeIdx
                    const isPartOfSystem = isFinalState
                    const isActive = isDirectlyActive || isPartOfSystem
                    const isPast = idx < currentStatement.nodeIdx

                    return (
                      <button
                        key={node.id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => handleSelectNode(idx)}
                        className={`py-3 px-2 rounded-xl text-center transition-all duration-300 relative border flex flex-col items-center justify-center min-h-[64px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isActive
                            ? 'bg-accent/20 border-accent text-text-primary shadow-[0_0_20px_rgba(99,102,241,0.25)] scale-[1.02]'
                            : isPast
                            ? 'bg-bg-primary/80 border-accent/30 text-text-secondary'
                            : 'bg-bg-primary/80 border-border text-text-muted hover:border-border-light hover:text-text-secondary'
                        }`}
                      >
                        <span className="text-xs sm:text-[13px] font-semibold block leading-tight">
                          {node.name}
                        </span>

                        {/* Active signal indicator dot */}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 animate-pulse" />
                        )}
                        {!isActive && (
                          <span className={`w-1 h-1 rounded-full mt-2 ${isPast ? 'bg-accent/40' : 'bg-border'}`} />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Connecting Pulse Line */}
                <div className="w-full bg-bg-primary/80 h-1.5 rounded-full mt-3 overflow-hidden relative border border-border/40">
                  <div
                    className="h-full bg-gradient-to-r from-accent/80 via-accent to-accent-light transition-all duration-500 rounded-full"
                    style={{
                      width: isFinalState
                        ? '100%'
                        : `${((currentStatement.nodeIdx + 1) / systemNodes.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Active State Card (Living event reflection) */}
              <div className="p-4 sm:p-5 rounded-xl bg-bg-primary/90 border border-accent/30 mb-0 transition-all duration-300 relative overflow-hidden">
                {/* Soft edge accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">
                    {isFinalState ? 'ЕДИНЫЙ КОНТУР РОСТА' : activeNode.tag}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {isFinalState ? 'Система синхронизирована' : 'Событие активно'}
                  </span>
                </div>

                {/* Status headline */}
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    {isFinalState
                      ? 'Все контуры объединены в единую систему'
                      : activeNode.status}
                  </span>
                </h3>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-0">
                  {isFinalState
                    ? 'Спрос, конверсионный слой сайта, захват лидов, CRM-воронка, автоматизированные процессы и сквозная аналитика работают как единый управляемый механизм.'
                    : activeNode.detail}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
