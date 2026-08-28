'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ServiceCycleProps {
  tag?: string
  title: string
  description?: string
  steps: string[]
  conclusion: string
}

export default function ServiceCycle({ tag, title, description, steps, conclusion }: ServiceCycleProps) {
  return (
    <section className="py-section bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading tag={tag} title={title} subtitle={description} align="left" />

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {steps.map((step, index) => (
              <ScrollReveal key={step} delay={index * 75}>
                <div className="group h-full min-h-28 rounded-xl border border-border bg-bg-surface p-5 hover:border-accent/50 transition-colors relative overflow-hidden">
                  <span className="absolute right-4 top-3 font-mono text-3xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="relative z-10 pr-8 text-sm font-medium text-text-primary leading-relaxed">{step}</p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-accent/70 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 text-accent" aria-hidden="true">
            <span className="h-px w-14 bg-accent/30" />
            <span className="h-3 w-3 rounded-full bg-accent animate-pulse-slow shadow-[0_0_18px_rgba(99,102,241,0.8)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">цикл</span>
            <span className="h-px w-14 bg-accent/30" />
          </div>
        </div>

        <ScrollReveal delay={600}>
          <p className="mt-8 max-w-3xl mx-auto text-center text-text-secondary leading-relaxed">{conclusion}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
