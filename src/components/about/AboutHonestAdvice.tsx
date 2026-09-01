'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const honestStatements = [
  {
    condition: 'Если существующий сайт решает задачу —',
    action: 'мы не будем продавать новый.',
  },
  {
    condition: 'Если проблему решает аналитика —',
    action: 'не нужна большая разработка.',
  },
  {
    condition: 'Если AI не даёт преимущества —',
    action: 'не нужно внедрять AI ради модного слова.',
  },
  {
    condition: 'Если автоматизация стоит дороже проблемы —',
    action: 'она не нужна.',
  },
]

export default function AboutHonestAdvice() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <ScrollReveal>
          <SectionHeading
            tag="ПРИНЦИП 02"
            title="Иногда лучший совет — ничего не переделывать."
            subtitle="Мы ориентируемся на целесообразность для бизнеса, а не на максимальный чек разработки."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {honestStatements.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 60}>
              <div className="p-6 rounded-2xl bg-bg-surface border border-border/80 flex flex-col justify-between h-full">
                <span className="text-xs sm:text-sm text-text-muted mb-2 font-mono">
                  {item.condition}
                </span>
                <p className="text-base sm:text-lg font-bold text-text-primary">
                  {item.action}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={250}>
          <div className="mt-10 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-accent">
              Любое решение должно иметь экономический смысл для бизнеса.
            </h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
