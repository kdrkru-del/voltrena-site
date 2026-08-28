'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils'

export interface ComparisonPath {
  id: string
  label: string
  tone: 'muted' | 'accent'
  steps: string[]
}

interface ServiceComparisonProps {
  tag?: string
  title: string
  description?: string
  paths: ComparisonPath[]
  conclusion: string
}

export default function ServiceComparison({ tag, title, description, paths, conclusion }: ServiceComparisonProps) {
  return (
    <section className="py-section bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading tag={tag} title={title} subtitle={description} align="left" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {paths.map((path, pathIndex) => (
            <ScrollReveal key={path.id} delay={pathIndex * 120}>
              <article
                className={cn(
                  'h-full rounded-2xl border p-6 md:p-8',
                  path.tone === 'accent'
                    ? 'border-accent/40 bg-accent/5'
                    : 'border-border bg-bg-surface/60'
                )}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className={cn(
                      'h-2.5 w-2.5 rounded-full',
                      path.tone === 'accent' ? 'bg-accent shadow-[0_0_12px_rgba(99,102,241,0.7)]' : 'bg-text-muted'
                    )}
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-text-primary">{path.label}</h3>
                </div>

                <div className="flex flex-col">
                  {path.steps.map((step, index) => (
                    <React.Fragment key={`${path.id}-${index}`}>
                      <div className="rounded-xl border border-border bg-bg-primary/70 px-4 py-4 text-sm md:text-base text-text-primary">
                        {step}
                      </div>
                      {index < path.steps.length - 1 && (
                        <div className="h-8 flex items-center pl-5 text-accent/60" aria-hidden="true">
                          <span className="h-6 w-px bg-current" />
                          <span className="-ml-[5px] mt-5 rotate-45 h-2 w-2 border-r border-b border-current" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={260}>
          <h3 className="mt-10 max-w-4xl text-heading font-bold text-gradient">{conclusion}</h3>
        </ScrollReveal>
      </div>
    </section>
  )
}
