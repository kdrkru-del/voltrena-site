'use client'

import React, { useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap-config'

const nodes = [
  { id: 'traffic', label: 'Traffic' },
  { id: 'website', label: 'Website' },
  { id: 'ai', label: 'AI' },
  { id: 'crm', label: 'CRM' },
  { id: 'sales', label: 'Sales' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'growth', label: 'Growth' }
]

export default function ConnectedSystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const isMobile = useIsMobile()
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !svgRef.current) return

    registerGSAP()
    
    const ctx = gsap.context(() => {
      const paths = svgRef.current?.querySelectorAll('path')
      const nodeElements = document.querySelectorAll('.flow-node')
      
      if (!paths || paths.length === 0) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: 1,
        }
      })
      
      // Initialize SVG paths for drawing
      paths.forEach(path => {
        const length = path.getTotalLength()
        gsap.set(path, { 
          strokeDasharray: length, 
          strokeDashoffset: length 
        })
      })

      // Add paths and node glows sequentially to timeline
      paths.forEach((path, i) => {
        // Draw the connection line
        tl.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "none"
        })
        
        // Light up the next node when connection reaches it
        if (nodeElements[i + 1]) {
          tl.to(nodeElements[i + 1], {
            boxShadow: "0 0 20px 2px rgba(99, 102, 241, 0.4)",
            borderColor: "rgba(129, 140, 248, 0.8)",
            color: "#f0f0f5",
            duration: 0.2
          }, "<")
        }
      })
      
      // Light up the first node initially before scrolling
      if (nodeElements[0]) {
        gsap.set(nodeElements[0], {
          boxShadow: "0 0 20px 2px rgba(99, 102, 241, 0.4)",
          borderColor: "rgba(129, 140, 248, 0.8)",
          color: "#f0f0f5"
        })
      }
      
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion, isMobile])

  return (
    <section ref={containerRef} className="py-section bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-4xl mx-auto text-center mb-24">
          <ScrollReveal>
            <h2 className="text-display font-bold text-text-primary mb-6 leading-tight">
              A website is only <span className="text-text-muted">one part of the system.</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-heading text-text-secondary mb-12">
              Most businesses hire a web studio, advertising specialist, CRM integrator and automation developer separately.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h3 className="text-display-xl font-bold text-gradient inline-block pb-2">
              We connect everything.
            </h3>
          </ScrollReveal>
        </div>

        {/* Flow Diagram */}
        <div className="relative max-w-5xl mx-auto mt-16 pb-12">
          {isMobile ? (
            // Mobile Layout: Vertical Flow
            <div className="flex flex-col items-center relative h-[600px] w-full">
              <svg 
                ref={svgRef}
                className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
                viewBox="0 0 16 1000"
                preserveAspectRatio="none"
              >
                {nodes.slice(0, -1).map((_, i) => (
                  <path 
                    key={i}
                    d={`M 8 ${i * (1000 / (nodes.length - 1))} L 8 ${(i + 1) * (1000 / (nodes.length - 1))}`}
                    vectorEffect="non-scaling-stroke"
                    className="stroke-accent" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.5"
                  />
                ))}
              </svg>
              
              {nodes.map((node, i) => (
                <div 
                  key={node.id} 
                  className="flow-node relative z-10 bg-bg-surface border border-accent/20 rounded-full px-6 py-3 font-mono text-sm text-text-secondary w-40 text-center shadow-lg"
                  style={{
                    position: 'absolute',
                    top: `${i * (100 / (nodes.length - 1))}%`,
                    transform: 'translateY(-50%)'
                  }}
                >
                  {node.label}
                </div>
              ))}
            </div>
          ) : (
            // Desktop Layout: Horizontal Flow
            <div className="flex flex-row items-center justify-between relative h-16 w-full">
              <svg 
                ref={svgRef}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-4 pointer-events-none z-0" 
                viewBox="0 0 1000 16"
                preserveAspectRatio="none"
              >
                {nodes.slice(0, -1).map((_, i) => (
                  <path 
                    key={i}
                    d={`M ${i * (1000 / (nodes.length - 1))} 8 L ${(i + 1) * (1000 / (nodes.length - 1))} 8`}
                    vectorEffect="non-scaling-stroke"
                    className="stroke-accent" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.4"
                  />
                ))}
              </svg>
              
              {nodes.map((node, i) => (
                <div 
                  key={node.id} 
                  className="flow-node relative z-10 bg-bg-surface border border-accent/20 rounded-full px-5 py-2 font-mono text-sm text-text-secondary whitespace-nowrap shadow-lg transition-colors duration-300"
                  style={{
                    position: 'absolute',
                    left: `${i * (100 / (nodes.length - 1))}%`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {node.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
