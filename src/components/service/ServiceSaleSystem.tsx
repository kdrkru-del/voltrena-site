'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { registerGSAP } from '@/animations/gsap-config'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useIsMobile } from '@/hooks/useMediaQuery'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { cn } from '@/lib/utils'

export interface SaleSystemNode {
  id: string
  label: string
  description: string
}

interface ServiceSaleSystemProps {
  nodes: SaleSystemNode[]
}

export default function ServiceSaleSystem({ nodes }: ServiceSaleSystemProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return
    
    registerGSAP()
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>('.flow-path')
      
      paths.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        }
      })

      paths.forEach((path) => {
        tl.to(path, { strokeDashoffset: 0, duration: 1, ease: 'none' })
      })

      tl.fromTo('.final-text', 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '<0.5' // start fading in text when the line is halfway done
      )
    }, containerRef)
    
    return () => ctx.revert()
  }, [prefersReducedMotion, isMobile])

  return (
    <section className="py-section bg-bg-secondary relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          tag="СИСТЕМА" 
          title="Сайт — это часть системы продаж." 
          align="left" 
        />
        
        {/* Desktop Flow SVG & Title */}
        <div className="hidden md:block mt-16 mb-20 max-w-4xl">
          <div className="relative h-16 w-full flex items-center justify-between">
            <div className="absolute top-1/2 left-[10%] right-[10%] h-[2px] -translate-y-1/2 z-0">
              <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <path 
                  className="flow-path text-accent" 
                  vectorEffect="non-scaling-stroke" 
                  d="M 0 1 L 1000 1" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                />
              </svg>
            </div>
            
            {['Трафик', 'Сайт', 'CRM', 'Аналитика'].map((label, idx) => (
              <div 
                key={idx} 
                className="bg-bg-surface border border-accent/40 text-text-primary px-6 py-2 rounded-full font-mono text-sm z-10 shadow-md"
              >
                {label}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-left">
            <h3 className="final-text text-heading font-bold text-gradient opacity-0">
              Мы соединяем всё.
            </h3>
          </div>
        </div>

        {/* Nodes Grid */}
        <div className="mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
          {nodes.map((node, i) => (
            <ScrollReveal key={node.id} direction="up" delay={i * 100}>
              <div className="bg-bg-surface border border-border rounded-xl p-6 h-full hover:border-accent/50 transition-colors">
                <h4 className="text-xl font-bold text-text-primary mb-3">{node.label}</h4>
                <p className="text-text-secondary leading-relaxed">{node.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        {/* Mobile Title */}
        <div className="md:hidden mt-12">
          <ScrollReveal direction="up">
            <h3 className="text-heading font-bold text-gradient">
              Мы соединяем всё.
            </h3>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
