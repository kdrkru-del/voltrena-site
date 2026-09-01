'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, ArrowDown, XCircle, CheckCircle2 } from 'lucide-react'

export default function AboutManifesto() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="НАШ ПОДХОД"
            title="Один ответственный контур вместо зоопарка подрядчиков."
            subtitle="Во многих проектах сайт делает одна команда, рекламу ведёт другая, CRM внедряет третья, а автоматизацию — четвёртая. Каждый отвечает за свой инструмент, но никто — за весь путь клиента."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 max-w-5xl mx-auto">
          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Fragmented */}
            <ScrollReveal delay={100}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-red-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="font-mono text-xs text-red-400 uppercase tracking-widest font-semibold">
                      Фрагментированный подход
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    Разрозненные подрядчики и сервисы
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    Каждое звено изолировано. Маркетолог гонит клики, веб-студия сдает дизайн, CRM не знает источников, а автоматизация отсутствует.
                  </p>

                  <div className="space-y-2 p-4 rounded-xl bg-bg-primary border border-border text-xs font-mono text-text-muted">
                    <div className="flex items-center justify-between">
                      <span>Traffic → Website</span>
                      <span className="text-red-400">разрыв данных</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>CRM</span>
                      <span className="text-red-400">отдельная система</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Analytics</span>
                      <span className="text-red-400">нет сквозного ROMI</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Automation</span>
                      <span className="text-red-400">ручной ввод</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-border/60 text-xs text-red-400 font-medium">
                  Итог: размытая ответственность и потеря лидов на стыках
                </div>
              </div>
            </ScrollReveal>

            {/* Right: VOLTRENA SYSTEM */}
            <ScrollReveal delay={200}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-accent/40 bg-gradient-to-b from-bg-surface to-bg-secondary flex flex-col justify-between shadow-xl">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold">
                      VOLTRENA SYSTEM
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    Единая сквозная архитектура
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    VOLTRENA рассматривает маркетинг, сайт, CRM, данные, AI и продажи как части одной взаимосвязанной системы.
                  </p>

                  <div className="p-4 rounded-xl bg-bg-primary border border-accent/30 text-xs font-mono text-text-primary space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5 text-accent font-semibold">
                      <span>Traffic</span>
                      <span>→</span>
                      <span>Website</span>
                      <span>→</span>
                      <span>Lead</span>
                      <span>→</span>
                      <span>AI / CRM</span>
                      <span>→</span>
                      <span>Sales</span>
                      <span>→</span>
                      <span>Analytics</span>
                      <span className="text-emerald-400">↺ Growth</span>
                    </div>
                    <p className="text-[11px] text-text-secondary pt-2 border-t border-border/50">
                      Непрерывный поток данных от первого поискового запроса до закрытия сделки и расчета окупаемости.
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-accent/20 text-xs font-mono text-accent font-semibold">
                  Итог: один ответственный контур за весь путь клиента
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
