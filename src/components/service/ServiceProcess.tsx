'use client';

import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap-config';

export interface ServiceProcessStep {
  number: string;
  title: string;
}

export interface ServiceProcessProps {
  steps: ServiceProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile) return;
    
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
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="py-section bg-bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading title="От идеи до работающего сайта." align="left" />
          <div className="flex flex-col gap-4 mt-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="bg-bg-surface border border-border rounded-xl p-6 relative group">
                  <div className="text-display font-bold font-mono text-accent/20 leading-none mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-section bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="От идеи до работающего сайта." align="left" />
        
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
                <div className="process-step bg-bg-surface border border-border rounded-xl p-6 relative group opacity-0 translate-y-4">
                  <div className="text-display font-bold font-mono text-accent/20 leading-none mb-2 transition-colors duration-300 group-hover:text-accent/40">
                    {step.number}
                  </div>
                  <h3 className="text-base font-semibold text-text-primary">{step.title}</h3>
                  
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
