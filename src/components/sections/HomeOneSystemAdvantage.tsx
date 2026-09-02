'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react'

export default function HomeOneSystemAdvantage() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="СИСТЕМНОЕ ПРЕИМУЩЕСТВО"
            title="Один подрядчик на всю цепочку."
            subtitle="Мы отвечаем не только за отдельные инструменты, но и за связи между ними."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Fragmented approach */}
          <ScrollReveal direction="right" delay={0}>
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface/50 border border-border/70 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-red-400 font-mono text-xs uppercase font-semibold">
                  <XCircle className="w-4 h-4" />
                  <span>Разрозненный подход</span>
                </div>

                <div className="p-4 rounded-xl bg-bg-primary/80 border border-border/60 mb-6 font-mono text-xs text-text-secondary flex flex-wrap items-center justify-between gap-2">
                  <span>Реклама</span>
                  <span className="text-red-400 font-bold">≠</span>
                  <span>Сайт</span>
                  <span className="text-red-400 font-bold">≠</span>
                  <span>CRM</span>
                  <span className="text-red-400 font-bold">≠</span>
                  <span>Аналитика</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    <span>Разные подрядчики перекладывают ответственность друг на друга.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    <span>Потери заявок и UTM-меток на стыках между сайтом и CRM.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    <span>Реклама тратит бюджет без привязки к реальной выручке в CRM.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border/60 font-mono text-xs text-text-muted mt-6">
                Итог: бюджет уходит в потери, аналитика не сходится.
              </div>
            </div>
          </ScrollReveal>

          {/* Unified VOLTRENA system */}
          <ScrollReveal direction="left" delay={100}>
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-accent/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-4 text-accent font-mono text-xs uppercase font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Единый контур VOLTRENA</span>
                </div>

                <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 mb-6 font-mono text-xs text-accent font-semibold flex flex-wrap items-center justify-between gap-2">
                  <span>Спрос</span>
                  <span className="text-accent">→</span>
                  <span>Сайт</span>
                  <span className="text-accent">→</span>
                  <span>CRM</span>
                  <span className="text-accent">→</span>
                  <span>Процессы</span>
                  <span className="text-accent">→</span>
                  <span>Аналитика</span>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-text-primary">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>Единый инженерный подрядчик, отвечающий за конечный результат.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>Сквозная передача данных: от первого клика до статуса закрытой сделки.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>Оптимизация маркетинга по окупаемости и реальной стоимости клиента.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border/60 font-mono text-xs text-accent font-semibold mt-6">
                Итог: прозрачная управляемость и сквозной контроль окупаемости.
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
