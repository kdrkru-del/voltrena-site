'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Band, pad } from '@/components/service/Band'

export interface Step {
  number?: string
  title: string
  description?: string
}

/** Dark numbered-steps section shared by "Approach" and "Process" blocks. */
export default function StepsGrid({
  steps,
  id,
  tag,
  title,
  description,
}: {
  steps: Step[]
  id?: string
  tag?: string
  title: string
  description?: string
}) {
  const cols = steps.length <= 4 ? 'lg:grid-cols-4' : steps.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-3'

  return (
    <Band tone="dark" id={id}>
      <SectionHeading tag={tag} title={title} subtitle={description} align="left" tone="dark" />

      <ol className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 ${cols}`}>
        {steps.map((step, i) => (
          <ScrollReveal key={`${step.title}-${i}`} delay={i * 70}>
            <li className="group relative h-full list-none">
              <div className="relative mb-5 h-px w-full bg-white/10">
                <span
                  className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-[#3E7778] to-[#C9854D] transition-transform duration-700 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="absolute -top-[5px] left-0 h-[11px] w-[11px] rounded-full bg-[#1D2528] ring-2 ring-[#C9854D]" aria-hidden="true" />
              </div>
              <div className="font-display text-5xl font-extrabold leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_rgba(244,241,234,0.28)] md:text-6xl">
                {pad(i + 1)}
              </div>
              <h3 className="mt-4 text-lg font-extrabold leading-snug tracking-tight text-[#F4F1EA] md:text-xl">{step.title}</h3>
              {step.description && <p className="mt-2.5 text-sm leading-relaxed text-[#A9B3B1]">{step.description}</p>}
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </Band>
  )
}
