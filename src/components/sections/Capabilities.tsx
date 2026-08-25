'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { capabilities } from '@/data/services'

export default function Capabilities() {
  const isMobile = useIsMobile()
  const prefersReducedMotion = useReducedMotion()
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  // Adjusted positions to give space for hover expansion
  const offsetPositions = [
    'top-[-20%] left-1/2 -translate-x-1/2 -translate-y-[100%]', 
    'right-[-10%] top-1/2 translate-x-[100%] -translate-y-1/2', 
    'bottom-[-20%] left-1/2 -translate-x-1/2 translate-y-[100%]', 
    'left-[-10%] top-1/2 -translate-x-[100%] -translate-y-1/2', 
  ]

  return (
    <section className="py-section bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-32">
            <h2 className="text-display font-bold text-text-primary">
              Всё, что нужно бизнесу для цифрового роста.
            </h2>
          </div>
        </ScrollReveal>

        {isMobile ? (
          // Mobile Layout: Vertical Accordion
          <div className="flex flex-col gap-4 max-w-lg mx-auto">
            {capabilities.map((cap, index) => (
              <ScrollReveal key={cap.id} delay={index * 0.1}>
                <div 
                  className={cn(
                    "bg-bg-surface border rounded-xl overflow-hidden transition-all duration-300",
                    activeAccordion === index ? "border-accent/50" : "border-border"
                  )}
                  style={{
                    borderColor: activeAccordion === index ? cap.color : undefined
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-wider uppercase mb-2 block" style={{ color: cap.color }}>
                        {cap.tag}
                      </span>
                      <h3 className="text-heading font-semibold text-text-primary">{cap.title}</h3>
                    </div>
                    <div className={cn(
                      "transition-transform duration-300 text-text-muted flex items-center justify-center w-8 h-8 rounded-full bg-bg-secondary", 
                      activeAccordion === index ? "rotate-180" : ""
                    )}>
                      ↓
                    </div>
                  </button>
                  
                  <div 
                    className={cn(
                      "transition-all duration-300 ease-in-out px-6",
                      activeAccordion === index ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    )}
                  >
                    <p className="text-text-secondary mb-4 text-sm leading-relaxed">{cap.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cap.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-bg-secondary px-2 py-1 rounded-md text-text-secondary border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          // Desktop Layout: Orbital
          <div className="relative max-w-[800px] mx-auto min-h-[700px] flex items-center justify-center mt-20">
            {/* Center Core */}
            <ScrollReveal>
              <div className="relative z-10 w-40 h-40 rounded-full bg-bg-surface border border-accent/40 flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.15)] glow-accent group">
                <span className="font-bold text-text-primary tracking-widest text-xl z-10 bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                  VOLTRENA
                </span>
                {/* Pulse circles */}
                <div className="absolute inset-0 rounded-full border border-accent/20 animate-ping opacity-20" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -inset-6 rounded-full border border-accent/10 opacity-30"></div>
                <div className="absolute -inset-12 rounded-full border border-accent/5 opacity-20"></div>
              </div>
            </ScrollReveal>

            {/* Orbiting Cards */}
            {capabilities.map((cap, index) => {
              const posClass = offsetPositions[index % 4]
              return (
                <div 
                  key={cap.id}
                  className={cn(
                    "absolute w-72 z-20 transition-transform duration-500",
                    posClass,
                    !prefersReducedMotion && "animate-float"
                  )}
                  style={{ 
                    animationDelay: `${index * 0.7}s`,
                    animationDuration: '6s'
                  }}
                >
                  <ScrollReveal delay={0.2 + (index * 0.1)}>
                    <div 
                      className="capability-card bg-bg-surface border border-border rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-black/20"
                      style={{ '--hover-color': cap.color } as React.CSSProperties}
                    >
                      <span className="font-mono text-xs font-semibold tracking-wider uppercase mb-3 block" style={{ color: cap.color }}>
                        {cap.tag}
                      </span>
                      <h3 className="text-xl font-semibold text-text-primary mb-2">{cap.title}</h3>
                      
                      <div className="capability-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                        <div className="pt-4 mt-4 border-t border-border/50">
                          <p className="text-text-secondary text-sm mb-4 leading-relaxed">{cap.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {cap.technologies.map((tech) => (
                              <span key={tech} className="text-[10px] uppercase tracking-wider bg-bg-secondary px-2 py-1 rounded-md text-text-secondary border border-border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              )
            })}
            
            {/* SVG Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
              <g className="stroke-border/40" strokeWidth="1" strokeDasharray="4 4">
                {/* Lines to top, right, bottom, left offsets */}
                <line x1="50%" y1="50%" x2="50%" y2="-5%" className="transition-all duration-300" />
                <line x1="50%" y1="50%" x2="105%" y2="50%" className="transition-all duration-300" />
                <line x1="50%" y1="50%" x2="50%" y2="105%" className="transition-all duration-300" />
                <line x1="50%" y1="50%" x2="-5%" y2="50%" className="transition-all duration-300" />
              </g>
            </svg>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(0.5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .capability-card:hover {
          border-color: var(--hover-color);
          box-shadow: 0 0 20px -5px var(--hover-color);
        }

        .capability-card:hover .capability-content {
          max-height: 300px;
          opacity: 1;
        }

        .capability-card:hover + svg line {
          stroke: var(--hover-color);
          opacity: 0.8;
          stroke-dasharray: none;
        }
      `}} />
    </section>
  )
}
