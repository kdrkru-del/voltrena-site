'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const formulaSteps = [
  { operator: '', label: 'САЙТ' },
  { operator: '+', label: 'Яндекс Директ' },
  { operator: '+', label: 'Аналитика' },
  { operator: '+', label: 'CRM' },
  { operator: '=', label: 'СИСТЕМА ПОЛУЧЕНИЯ ЗАЯВОК', isResult: true }
]

export default function ServiceLeadSystem() {
  return (
    <section className="py-section bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading title="Сайт может сразу стать системой получения заявок." align="center" />
        </ScrollReveal>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="flex flex-col">
            {formulaSteps.map((step, index) => (
              <ScrollReveal key={step.label} delay={0.1 + index * 0.1}>
                <div 
                  className={cn(
                    "flex items-center gap-4 py-3 border-b border-border last:border-b-0",
                    step.isResult && "pt-6 mt-2"
                  )}
                >
                  <div className="w-8 text-accent font-mono text-xl font-bold flex-shrink-0 text-center">
                    {step.operator}
                  </div>
                  <div 
                    className={cn(
                      "text-text-primary",
                      step.isResult ? "text-xl md:text-2xl font-bold text-gradient" : "text-lg md:text-xl font-medium"
                    )}
                  >
                    {step.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <div className="mt-12 flex justify-center">
              <Button variant="primary" size="lg">
                Обсудить систему привлечения клиентов
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
