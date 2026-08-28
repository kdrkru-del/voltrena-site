'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export interface FormulaStep {
  operator: string
  label: string
  isResult?: boolean
}

const defaultFormulaSteps: FormulaStep[] = [
  { operator: '', label: 'САЙТ' },
  { operator: '+', label: 'Яндекс Директ' },
  { operator: '+', label: 'Аналитика' },
  { operator: '+', label: 'CRM' },
  { operator: '=', label: 'СИСТЕМА ПОЛУЧЕНИЯ ЗАЯВОК', isResult: true }
]

interface ServiceLeadSystemProps {
  tag?: string
  title?: string
  description?: string
  formula?: FormulaStep[]
  ctaLabel?: string
  ctaHref?: string
}

export default function ServiceLeadSystem({
  tag,
  title = 'Сайт может сразу стать системой получения заявок.',
  description,
  formula = defaultFormulaSteps,
  ctaLabel = 'Обсудить систему привлечения клиентов',
  ctaHref = '#contact',
}: ServiceLeadSystemProps) {
  return (
    <section className="py-section bg-bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-accent/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <SectionHeading tag={tag} title={title} subtitle={description} align="center" />
        </ScrollReveal>

        <div className="mt-16 max-w-lg mx-auto">
          <div className="flex flex-col">
            {formula.map((step, index) => (
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

          <ScrollReveal delay={600}>
            <div className="mt-12 flex justify-center">
              <Button variant="primary" size="lg" href={ctaHref}>
                {ctaLabel}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
