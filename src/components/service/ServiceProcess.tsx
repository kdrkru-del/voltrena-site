'use client';

import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { registerGSAP, gsap } from '@/animations/gsap-config';
import { cn } from '@/lib/utils';

export interface ServiceProcessStep {
  number: string;
  title: string;
  description?: string;
}

export interface ServiceProcessProps {
  steps: ServiceProcessStep[];
  id?: string;
  tag?: string;
  title?: string;
  description?: string;
}

export default function ServiceProcess({
  steps,
  id,
  tag,
  title = 'От идеи до работающего сайта.',
  description,
}: ServiceProcessProps) {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;
    
    registerGSAP();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.to(progressBarRef.current, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out',
      }, 0);

      tl.fromTo(
        '.process-step',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.7)' },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, prefersReducedMotion]);

  if (isMobile) {
    return (
      <section id={id} className="py-section bg-bg-secondary relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeading tag={tag} title={title} subtitle={description} align="left" />
          <div className="flex flex-col gap-4 mt-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 80}>
                <div className="bg-bg-surface border border-border rounded-xl p-6 relative group">
                  
                  <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                  {step.description && <p className="mt-2 text-sm text-text-secondary">{step.description}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} ref={sectionRef} className="py-section bg-bg-secondary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading tag={tag} title={title} subtitle={description} align="left" />
        
        <div className="relative mt-12 max-w-5xl mx-auto">
          {/* Progress Bar Track */}
          <div className="w-full h-[2px] bg-border mb-8 rounded-full overflow-hidden">
            {/* Animated Progress Bar */}
            <div 
              ref={progressBarRef} 
              className="h-full bg-accent w-0"
            />
          </div>

          <div className="grid grid-cols-3 gap-6 relative">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className={cn('process-step bg-bg-surface border border-border rounded-xl p-6 relative group', !prefersReducedMotion && 'opacity-0 translate-y-4')}>
                  
                  <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                  {step.description && <p className="mt-2 text-sm text-text-secondary leading-relaxed">{step.description}</p>}
                  
                  {/* Arrow Right (Except for last item in row) */}
                  {index % 3 !== 2 && index < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-border flex items-center justify-center z-10 w-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                  
                  {/* Arrow Down (For last item in row, connecting to next row) */}
                  {index % 3 === 2 && index < steps.length - 1 && (
                    <div className="absolute -bottom-4 right-1/2 translate-x-1/2 text-border flex items-center justify-center z-10 h-4">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
                      </svg>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
