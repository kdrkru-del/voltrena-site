'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const techGroups = [
  {
    category: 'WEB',
    items: ['Next.js', 'React', 'TypeScript'],
  },
  {
    category: 'DATA / BACKEND',
    items: ['Python', 'PostgreSQL', 'API / Webhooks'],
  },
  {
    category: 'AUTOMATION',
    items: ['n8n', 'Make', 'Telegram Bot API'],
  },
  {
    category: 'CRM',
    items: ['amoCRM', 'Битрикс24'],
  },
  {
    category: 'MARKETING',
    items: ['Yandex Direct', 'Yandex Metrica'],
  },
  {
    category: 'AI',
    items: ['OpenAI API', 'LLM integrations'],
  },
]

export default function AboutTechnology() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ECOSYSTEM"
            title="Технологии, которые помогают нам строить системы."
            subtitle="Мы работаем только с проверенным стеком, гарантирующим стабильность, высокую скорость и расширяемость."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {techGroups.map((group, idx) => (
            <ScrollReveal key={group.category} delay={idx * 60}>
              <div className="p-5 sm:p-6 rounded-2xl bg-bg-surface border border-border/80">
                <span className="font-mono text-xs text-accent font-bold uppercase tracking-wider block mb-3">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-bg-primary border border-border text-xs sm:text-sm font-mono text-text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
