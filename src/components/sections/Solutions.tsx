'use client'

import { solutions } from '@/data/solutions'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'

export default function Solutions() {
  return (
    <section className="py-section bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <SectionHeading
            title="Solutions, not isolated services."
            align="center"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <ScrollReveal
              key={solution.id}
              delay={index * 0.1}
              className="group relative flex flex-col h-full bg-bg-surface/50 rounded-xl p-6 md:p-8 border border-border hover:border-accent/40 transition-colors duration-300 overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="text-lg font-bold text-text-primary mb-6 relative z-10">
                {solution.title}
              </h3>

              {/* Connected components diagram */}
              <div className="flex flex-wrap items-center gap-2 mb-8 relative z-10">
                {solution.components.map((comp, compIdx) => (
                  <div key={compIdx} className="flex items-center">
                    <div className="px-3 py-1.5 rounded-full bg-bg-primary border border-border-light text-text-primary text-xs font-mono whitespace-nowrap">
                      {comp}
                    </div>
                    {/* Connector line (except after last item) */}
                    {compIdx < solution.components.length - 1 && (
                      <div className="w-4 md:w-6 h-px bg-border-light mx-1 group-hover:bg-accent/60 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300" />
                    )}
                  </div>
                ))}
              </div>

              {/* Description at bottom */}
              <p className="text-sm text-text-secondary mt-auto relative z-10">
                {solution.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
