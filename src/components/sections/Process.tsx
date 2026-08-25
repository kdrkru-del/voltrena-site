'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap-config';
import { processSteps } from '@/data/process';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    
    registerGSAP();
    
    const ctx = gsap.context(() => {
      if (!containerRef.current || !lineRef.current) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      });
      
      // Draw the line
      const pathLength = lineRef.current.getTotalLength() || 1000;
      gsap.set(lineRef.current, { 
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });
      
      tl.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: 'none',
      });
      
      // Light up nodes based on scroll progress
      nodesRef.current.forEach((node, i) => {
        if (!node) return;
        const progressPos = i / (processSteps.length - 1 || 1);
        
        tl.to(node, {
          backgroundColor: 'var(--accent)',
          boxShadow: '0 0 15px var(--accent)',
          duration: 0.1,
        }, progressPos);
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, [prefersReducedMotion, isMobile]);

  return (
    <section className="py-section bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="От проблемы к работающей системе." />
        </ScrollReveal>

        <div className="mt-16 relative" ref={containerRef}>
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-border -translate-x-1/2" />
          
          {!isMobile && !prefersReducedMotion && (
            <svg 
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-full pointer-events-none z-0" 
              preserveAspectRatio="none"
            >
              <line 
                ref={lineRef}
                x1="1" y1="0" x2="1" y2="100%" 
                stroke="var(--accent)" 
                strokeWidth="2"
              />
            </svg>
          )}

          <div className="space-y-12 md:space-y-24 relative z-10">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={step.number} 
                  className={cn(
                    "flex flex-col md:flex-row items-start md:items-center w-full group",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "w-full md:w-1/2 pl-12 md:pl-0",
                    isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  )}>
                    <ScrollReveal 
                      direction={isMobile ? 'up' : isEven ? 'left' : 'right'}
                      className="inline-block"
                    >
                      <div className="font-mono text-accent text-3xl md:text-4xl mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed max-w-sm ml-0 md:mx-0 inline-block text-left md:text-inherit">
                        {step.description}
                      </p>
                    </ScrollReveal>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2 md:mt-0 w-4 h-4 rounded-full bg-bg-surface border-2 border-border transition-colors duration-300 z-10">
                    <div 
                      ref={(el) => {
                        if (el) nodesRef.current[index] = el;
                      }}
                      className="absolute inset-0 rounded-full bg-transparent transition-all duration-300"
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
