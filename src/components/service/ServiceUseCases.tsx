'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useIsMobile } from '@/hooks/useMediaQuery'

interface UseCase {
  id: string
  title: string
  description: string
}

interface ServiceUseCasesProps {
  useCases: UseCase[]
}

export default function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
  const isMobile = useIsMobile()

  return (
    <section className="py-section bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Для каких задач." align="left" />
        </ScrollReveal>

        <div className="mt-16 flex flex-col">
          {useCases.map((useCase, index) => {
            const number = String(index + 1).padStart(2, '0')
            
            return (
              <ScrollReveal key={useCase.id} delay={0.1 + index * 0.1}>
                <div className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 border-b border-border transition-all duration-300 md:hover:border-l-2 md:hover:border-l-accent md:hover:pl-4">
                  <div className="w-2 h-2 rounded-full bg-accent/60 mt-3 flex-shrink-0 hidden md:block" />
                  
                  <div className="flex-1">
                    <h3 className="text-subheading font-bold group-hover:text-accent transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-text-secondary max-w-xs md:max-w-md">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
