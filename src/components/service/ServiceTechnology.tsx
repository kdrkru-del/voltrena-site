'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ServiceTechnologyProps {
  technology: { highlights: string[]; stack: string[] }
}

export default function ServiceTechnology({ technology }: ServiceTechnologyProps) {
  return (
    <section className="py-section-sm bg-bg-primary relative overflow-hidden border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Технологии под задачу." align="left" />
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-12">
          {/* Highlights Row */}
          <ScrollReveal delay={100}>
            <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-4 md:gap-8 items-center scrollbar-hide">
              {technology.highlights.map((highlight, index) => (
                <React.Fragment key={highlight}>
                  <div className="text-heading font-bold font-mono text-text-primary/20 hover:text-accent transition-colors duration-500 cursor-default whitespace-nowrap">
                    {highlight}
                  </div>
                  {index < technology.highlights.length - 1 && (
                    <span className="text-text-muted hidden md:block">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </ScrollReveal>

          {/* Stack Pills */}
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap gap-2">
              {technology.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-bg-surface border border-border text-xs font-mono text-text-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
