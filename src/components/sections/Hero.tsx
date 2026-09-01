'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { CheckCircle2, Activity, ArrowRight, Zap, Radio } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SystemNode {
  id: string
  step: string
  name: string
  status: string
  detail: string
  tag: string
}

const systemNodes: SystemNode[] = [
  {
    id: 'demand',
    step: '01',
    name: 'Спрос',
    status: 'Поисковый сигнал зафиксирован',
    detail: 'Релевантный запрос в поиске или AI. Передача контекста без искажения интента.',
    tag: 'Трафик & Поиск',
  },
  {
    id: 'website',
    step: '02',
    name: 'Сайт',
    status: 'Сессия открыта, UTM сохранены',
    detail: 'Посадочная страница отвечает на точную задачу посетителя и удерживает входящие метки.',
    tag: 'Конверсионный слой',
  },
  {
    id: 'lead',
    step: '03',
    name: 'Заявка',
    status: 'Форма заполнена без потерь',
    detail: 'Контакты, контекст запроса и технические параметры зафиксированы в едином пакете.',
    tag: 'Захват данных',
  },
  {
    id: 'crm',
    step: '04',
    name: 'CRM',
    status: 'Сделка создана и обогащена',
    detail: 'Карточка клиента мгновенно создана в воронке продаж с полной историей касаний.',
    tag: 'Управление воронкой',
  },
  {
    id: 'automation',
    step: '05',
    name: 'Автоматизация',
    status: 'AI-квалификация и Telegram-алерт',
    detail: 'Сценарий классифицирует лид, назначает ответственного и отправляет задачу с дедлайном.',
    tag: 'Workflow & Алерты',
  },
  {
    id: 'analytics',
    step: '06',
    name: 'Аналитика',
    status: 'Данные сведены в сквозной отчёт',
    detail: 'Выручка и статус сделки сопоставлены с рекламным источником для расчета окупаемости.',
    tag: 'Сквозной контроль',
  },
]

export default function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const [activeIdx, setActiveIdx] = useState(0)

  // Calm, cyclic traveling pulse through the 6 nodes
  useEffect(() => {
    if (prefersReducedMotion) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % systemNodes.length)
    }, 2600)
    return () => clearInterval(timer)
  }, [prefersReducedMotion])

  const activeNode = systemNodes[activeIdx]

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Soft ambient center glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Positioning & CTAs (Static, instantly readable) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                VOLTRENA / DIGITAL GROWTH SYSTEMS
              </span>
            </div>

            {/* H1 - Fully static, high contrast */}
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

          {/* Right Column: Living System Flow Visual */}
          <div className="lg:col-span-6 w-full">
            <div className="p-5 sm:p-7 rounded-2xl bg-bg-surface border border-border/90 shadow-2xl relative overflow-hidden">
              
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
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-[11px] text-accent">
                  <span>Узел {activeNode.step} из 06</span>
                </div>
              </div>

              {/* Connected Nodes Diagram (6 Nodes) */}
              <div className="mb-6">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 relative" role="tablist" aria-label="Узлы системы">
                  {systemNodes.map((node, idx) => {
                    const isActive = idx === activeIdx
                    const isPast = idx < activeIdx

                    return (
                      <button
                        key={node.id}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveIdx(idx)}
                        className={`p-2.5 rounded-xl text-center transition-all duration-300 relative border flex flex-col items-center justify-between min-h-[72px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          isActive
                            ? 'bg-accent/15 border-accent text-text-primary shadow-[0_0_20px_rgba(99,102,241,0.25)] scale-[1.02]'
                            : isPast
                            ? 'bg-bg-primary/90 border-accent/30 text-text-secondary'
                            : 'bg-bg-primary border-border text-text-muted hover:border-border-light hover:text-text-secondary'
                        }`}
                      >
                        <span className={`font-mono text-[10px] font-bold block mb-1 ${
                          isActive ? 'text-accent' : 'text-text-muted'
                        }`}>
                          {node.step}
                        </span>
                        <span className="text-xs font-semibold block leading-tight">
                          {node.name}
                        </span>

                        {/* Active signal indicator dot */}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 animate-pulse" />
                        )}
                        {!isActive && (
                          <span className={`w-1 h-1 rounded-full mt-1.5 ${isPast ? 'bg-accent/40' : 'bg-border'}`} />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Connecting Pulse Line */}
                <div className="w-full bg-bg-primary h-1 rounded-full mt-3 overflow-hidden relative border border-border/40">
                  <div
                    className="h-full bg-accent transition-all duration-500 rounded-full"
                    style={{ width: `${((activeIdx + 1) / systemNodes.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Active State Card (Living event reflection) */}
              <div className="p-4 sm:p-5 rounded-xl bg-bg-primary border border-accent/30 mb-4 transition-all duration-300 relative overflow-hidden">
                {/* Subtle soft edge accent glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">
                    {activeNode.tag}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Событие активно
                  </span>
                </div>

                {/* Status headline */}
                <h3 className="text-base sm:text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span>{activeNode.status}</span>
                </h3>

                {/* Detail */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                  {activeNode.detail}
                </p>

                {/* Flow context footer */}
                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>Сквозной процесс:</span>
                  <span className="text-accent font-medium">
                    {activeIdx < systemNodes.length - 1
                      ? `Передача данных → ${systemNodes[activeIdx + 1].name}`
                      : 'Цикл завершён · Возврат в аналитику'}
                  </span>
                </div>
              </div>

              {/* Node quick jump buttons */}
              <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1">
                <span className="font-mono text-[10px] text-text-muted uppercase">Переключить узел:</span>
                <div className="flex flex-wrap gap-1">
                  {systemNodes.map((node, idx) => (
                    <button
                      key={node.id}
                      onClick={() => setActiveIdx(idx)}
                      className={`px-2 py-1 rounded text-[10px] font-mono transition-colors border ${
                        idx === activeIdx
                          ? 'bg-accent text-white border-accent font-semibold'
                          : 'bg-bg-primary text-text-muted border-border hover:text-text-primary'
                      }`}
                    >
                      {node.name}
                    </button>
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
