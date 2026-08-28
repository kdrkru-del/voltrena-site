'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export interface IntentLevel {
  id: string
  label: string
  description: string
  terms: string[]
  strength: number
}

interface ServiceIntentProps {
  tag?: string
  title: string
  description?: string
  levels: IntentLevel[]
  note: string
}

export default function ServiceIntent({ tag, title, description, levels, note }: ServiceIntentProps) {
  return (
    <section id="search-intent" className="py-section bg-bg-primary relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading tag={tag} title={title} subtitle={description} align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {levels.map((level, index) => (
            <ScrollReveal key={level.id} delay={index * 100}>
              <article className="h-full rounded-2xl border border-border bg-bg-surface p-6 md:p-8 hover:border-accent/40 transition-colors">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                    Коммерческий сигнал
                  </span>
                </div>

                <h3 className="text-subheading font-bold text-text-primary">{level.label}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{level.description}</p>

                <div className="mt-6 h-1 rounded-full bg-bg-primary overflow-hidden" aria-label={`Условная сила коммерческого намерения: ${level.strength}%`}>
                  <div
                    className="h-full rounded-full bg-accent shadow-[0_0_16px_rgba(99,102,241,0.5)]"
                    style={{ width: `${level.strength}%` }}
                  />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {level.terms.map((term) => (
                    <span key={term} className="rounded-full border border-border bg-bg-primary px-3 py-1.5 font-mono text-xs text-text-secondary">
                      {term}
                    </span>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="mt-8 max-w-3xl border-l-2 border-accent pl-5 text-sm md:text-base text-text-secondary leading-relaxed">
            {note}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
