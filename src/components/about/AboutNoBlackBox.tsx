'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

const checkpoints = [
  'что мы делаем на текущем этапе;',
  'зачем мы это делаем с точки зрения бизнеса;',
  'какие показатели и метрики отслеживаем;',
  'что уже изменилось в процессе;',
  'что будем делать дальше в следующей очереди.',
]

export default function AboutNoBlackBox() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <ScrollReveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-bg-surface border border-accent/30 shadow-2xl relative overflow-hidden">
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-3">
              ПРОЗРАЧНОСТЬ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">
              Без чёрного ящика.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
              Digital-система может быть сложной. <br />
              <strong className="text-text-primary">Работа с нами — не должна.</strong>
            </p>

            <div className="space-y-3.5 mb-10">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-2">
                Клиент всегда точно понимает:
              </span>
              {checkpoints.map((cp, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm sm:text-base text-text-primary font-medium">{cp}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-border/60">
              <p className="text-lg sm:text-xl font-bold text-text-primary">
                Технологии могут быть сложными. <br />
                <span className="text-accent">Работа с нами — нет.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
