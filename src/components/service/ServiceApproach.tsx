'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export interface ApproachStep {
  number: string
  title: string
  description: string
}

interface ServiceApproachProps {
  steps: ApproachStep[]
  id?: string
  tag?: string
  title?: string
  description?: string
}

export default function ServiceApproach({
  steps,
  id,
  tag,
  title = 'Начинаем не с дизайна.',
  description,
}: ServiceApproachProps) {
  return (
    <section id={id} className="py-section bg-bg-secondary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading tag={tag} title={title} subtitle={description} align="left" />
        
        <div className="mt-16 md:mt-24">
          {/* Mobile view: vertical timeline */}
          <div className="md:hidden relative border-l border-border ml-4 space-y-12 pb-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} direction="up" delay={i * 100}>
                <div className="relative pl-8">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(var(--accent),0.5)] glow-accent" />
                  <div className="text-display font-bold font-mono text-accent/20 mb-2 leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-heading font-bold text-text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Desktop view: horizontal stepper */}
          <div className="hidden md:grid grid-cols-4 gap-8 relative">
            {/* Connecting horizontal line */}
            <div className="absolute top-10 left-0 right-0 h-px bg-border -z-10" />
            
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} direction="up" delay={i * 100} className="relative z-10 group">
                <div className="w-full flex flex-col items-start pr-6 bg-bg-secondary/60 backdrop-blur-sm">
                  <div className="text-display font-bold font-mono text-accent/20 transition-colors duration-500 group-hover:text-accent/50 mb-6 leading-none">
                    {step.number}
                  </div>
                  <h3 className="text-heading font-bold text-text-primary mb-4 relative">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
