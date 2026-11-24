'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Band, pad } from '@/components/service/Band'

interface UseCase {
  id: string
  title: string
  description: string
}

interface ServiceUseCasesProps {
  useCases: UseCase[]
}

export default function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
  return (
    <Band tone="sand2">
      <SectionHeading tag="Применение" title="Для каких задач." align="left" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {useCases.map((useCase, index) => (
          <ScrollReveal key={useCase.id} delay={index * 60}>
            <article className="group relative h-full overflow-hidden rounded-2xl bg-[#FFFDF8] p-6 ring-1 ring-[#D7D3C8] transition-all duration-300 hover:-translate-y-1 hover:ring-[#C9854D]/50 hover:shadow-[0_24px_50px_-28px_rgba(29,37,40,0.35)] md:p-7">
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[5.5rem] font-extrabold leading-none text-[#1D2528]/[0.04] transition-colors duration-300 group-hover:text-[#C9854D]/[0.12]"
                aria-hidden="true"
              >
                {pad(index + 1)}
              </span>
              <span className="mb-5 block h-1 w-8 rounded-full bg-[#C9854D] transition-all duration-300 group-hover:w-14" aria-hidden="true" />
              <h3 className="relative text-lg font-extrabold leading-snug tracking-tight text-[#1D2528] md:text-xl">{useCase.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-[#5D686A]">{useCase.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Band>
  )
}
