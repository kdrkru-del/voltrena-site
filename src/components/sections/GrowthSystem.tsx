'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { registerGSAP, gsap, ScrollTrigger } from '@/animations/gsap-config'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function GrowthSystem() {
  const containerRef = useRef<HTMLDivElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile || prefersReducedMotion) return

    registerGSAP()
    
    const ctx = gsap.context(() => {
      // 1. Initial State
      gsap.set(['.node-source', '.node-website', '.node-ai', '.node-crm', '.node-sales', '.node-analytics', '.node-growth'], { opacity: 0, scale: 0.8, transformOrigin: 'center center' })
      gsap.set(['.path-line'], { strokeDasharray: 1500, strokeDashoffset: 1500 })
      gsap.set('.lead-indicator', { opacity: 0 })
      gsap.set('.stage-label', { opacity: 0, y: 20 })
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=4000',
          pin: true,
          scrub: 1,
        }
      })

      // STAGE 1: ATTRACT
      tl.to('.label-attract', { opacity: 1, y: 0, duration: 0.5 })
        .to('.node-source', { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }, '<')
      
      // STAGE 2: CONNECT
      tl.to('.path-source-website', { strokeDashoffset: 0, duration: 1.5 })
        .to('.node-website', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
        
      // STAGE 3: CAPTURE
      tl.to('.label-attract', { opacity: 0, duration: 0.5 })
        .to('.label-convert', { opacity: 1, y: 0, duration: 0.5 }, '<')
        .to('.lead-indicator', { opacity: 1, duration: 0.5 })
        .to('.path-website-ai', { strokeDashoffset: 0, duration: 1 })
        
      // STAGE 4: QUALIFY
      tl.to('.node-ai', { opacity: 1, scale: 1, duration: 0.5 })
        .to('.lead-indicator', { x: 150, duration: 1 }) // simulate movement along path

      // STAGE 5: MANAGE
      tl.to('.label-convert', { opacity: 0, duration: 0.5 })
        .to('.label-automate', { opacity: 1, y: 0, duration: 0.5 }, '<')
        .to('.path-ai-crm', { strokeDashoffset: 0, duration: 1 })
        .to('.node-crm', { opacity: 1, scale: 1, duration: 0.5 })
        .to('.lead-indicator', { x: 300, duration: 1 }) // continue moving
        
      // STAGE 6: SELL
      tl.to('.path-crm-sales', { strokeDashoffset: 0, duration: 1 })
        .to('.node-sales', { opacity: 1, scale: 1, duration: 0.5 })
        
      // STAGE 7: ANALYZE
      tl.to('.label-automate', { opacity: 0, duration: 0.5 })
        .to('.label-analyze', { opacity: 1, y: 0, duration: 0.5 }, '<')
        .to('.path-sales-analytics', { strokeDashoffset: 0, duration: 1 })
        .to('.path-website-analytics', { strokeDashoffset: 0, duration: 1 }, '<')
        .to('.node-analytics', { opacity: 1, scale: 1, duration: 0.5 })

      // STAGE 8: GROW
      tl.to('.label-analyze', { opacity: 0, duration: 0.5 })
        .to('.label-grow', { opacity: 1, y: 0, duration: 0.5 }, '<')
        .to('.path-analytics-growth', { strokeDashoffset: 0, duration: 1 })
        .to('.node-growth', { opacity: 1, scale: 1, duration: 0.5 })
        
    }, containerRef)

    return () => ctx.revert()
  }, [isMobile, prefersReducedMotion])

  const renderMobileView = () => (
    <div className="flex flex-col gap-12 py-12 px-6">
      <SectionHeading title="One connected growth system." />
      {/* Simplified Mobile View */}
      {[
        { stage: 'ATTRACT', desc: 'Search, Ads, SEO, B2B' },
        { stage: 'CONNECT', desc: 'Website & Landing Pages' },
        { stage: 'CAPTURE', desc: 'Lead Generation' },
        { stage: 'QUALIFY', desc: 'AI Scoring' },
        { stage: 'MANAGE', desc: 'CRM Integration' },
        { stage: 'SELL', desc: 'Sales Enablement' },
        { stage: 'ANALYZE', desc: 'Data Analytics' },
        { stage: 'GROW', desc: 'Revenue Growth' },
      ].map((item, idx) => (
        <ScrollReveal key={idx} delay={idx * 0.1}>
          <div className="bg-bg-surface p-6 rounded-xl border border-white/5">
            <h3 className="text-accent font-bold mb-2">{item.stage}</h3>
            <p className="text-text-secondary">{item.desc}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )

  if (isMobile || prefersReducedMotion) {
    return <section className="bg-bg-secondary min-h-screen py-section">{renderMobileView()}</section>
  }

  return (
    <section ref={containerRef} className="bg-bg-secondary min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 text-center w-full z-10 pointer-events-none">
        <h2 className="text-display font-bold text-text-primary mb-4">One connected growth system.</h2>
        
        {/* Stage Labels */}
        <div className="relative h-12 flex justify-center">
          <div className="stage-label label-attract absolute text-xl text-accent font-medium">ATTRACT</div>
          <div className="stage-label label-convert absolute text-xl text-accent font-medium">CONVERT</div>
          <div className="stage-label label-automate absolute text-xl text-accent font-medium">AUTOMATE</div>
          <div className="stage-label label-analyze absolute text-xl text-accent font-medium">ANALYZE</div>
          <div className="stage-label label-grow absolute text-xl text-accent font-medium">GROW</div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto p-8 pt-40 aspect-video relative">
        <svg ref={svgRef} viewBox="0 0 1000 600" className="w-full h-full overflow-visible">
          {/* Paths */}
          <path className="path-line path-source-website" d="M 150 150 Q 250 150 350 300" fill="none" stroke="#333" strokeWidth="2" />
          <path className="path-line path-source-website" d="M 150 250 Q 250 250 350 300" fill="none" stroke="#333" strokeWidth="2" />
          <path className="path-line path-source-website" d="M 150 350 Q 250 350 350 300" fill="none" stroke="#333" strokeWidth="2" />
          <path className="path-line path-source-website" d="M 150 450 Q 250 450 350 300" fill="none" stroke="#333" strokeWidth="2" />
          
          <path className="path-line path-website-ai" d="M 350 300 L 500 300" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="5,5" />
          <path className="path-line path-ai-crm" d="M 500 300 L 650 300" fill="none" stroke="#6366f1" strokeWidth="2" />
          <path className="path-line path-crm-sales" d="M 650 300 L 800 300" fill="none" stroke="#6366f1" strokeWidth="2" />
          <path className="path-line path-sales-analytics" d="M 800 300 Q 800 450 650 450" fill="none" stroke="#8888a0" strokeWidth="2" />
          <path className="path-line path-website-analytics" d="M 350 300 Q 350 450 500 450 L 650 450" fill="none" stroke="#8888a0" strokeWidth="2" />
          <path className="path-line path-analytics-growth" d="M 650 450 Q 850 450 850 150" fill="none" stroke="#818cf8" strokeWidth="3" />

          {/* Nodes */}
          <g className="node-source">
            <rect x="50" y="130" width="100" height="40" rx="20" fill="#1a1a25" stroke="#333" />
            <text x="100" y="155" textAnchor="middle" fill="#8888a0" fontSize="12">SEARCH</text>
          </g>
          <g className="node-source">
            <rect x="50" y="230" width="100" height="40" rx="20" fill="#1a1a25" stroke="#333" />
            <text x="100" y="255" textAnchor="middle" fill="#8888a0" fontSize="12">ADS</text>
          </g>
          <g className="node-source">
            <rect x="50" y="330" width="100" height="40" rx="20" fill="#1a1a25" stroke="#333" />
            <text x="100" y="355" textAnchor="middle" fill="#8888a0" fontSize="12">SEO</text>
          </g>
          <g className="node-source">
            <rect x="50" y="430" width="100" height="40" rx="20" fill="#1a1a25" stroke="#333" />
            <text x="100" y="455" textAnchor="middle" fill="#8888a0" fontSize="12">B2B</text>
          </g>

          <g className="node-website">
            <circle cx="350" cy="300" r="40" fill="#12121a" stroke="#6366f1" strokeWidth="2" />
            <text x="350" y="305" textAnchor="middle" fill="#f0f0f5" fontSize="14" fontWeight="bold">WEBSITE</text>
          </g>

          {/* Moving Lead Indicator */}
          <g className="lead-indicator">
            <circle cx="350" cy="270" r="8" fill="#818cf8" />
            <text x="350" y="255" textAnchor="middle" fill="#818cf8" fontSize="12">LEAD</text>
          </g>

          <g className="node-ai">
            <rect x="460" y="270" width="80" height="60" rx="8" fill="#1a1a25" stroke="#6366f1" strokeWidth="2" />
            <text x="500" y="305" textAnchor="middle" fill="#f0f0f5" fontSize="14" fontWeight="bold">AI</text>
          </g>

          <g className="node-crm">
            <rect x="610" y="270" width="80" height="60" rx="8" fill="#1a1a25" stroke="#6366f1" strokeWidth="2" />
            <text x="650" y="305" textAnchor="middle" fill="#f0f0f5" fontSize="14" fontWeight="bold">CRM</text>
          </g>

          <g className="node-sales">
            <circle cx="800" cy="300" r="40" fill="#12121a" stroke="#6366f1" strokeWidth="2" />
            <text x="800" y="305" textAnchor="middle" fill="#f0f0f5" fontSize="14" fontWeight="bold">SALES</text>
          </g>

          <g className="node-analytics">
            <circle cx="650" cy="450" r="30" fill="#12121a" stroke="#8888a0" strokeWidth="2" />
            <text x="650" y="455" textAnchor="middle" fill="#8888a0" fontSize="12">ANALYTICS</text>
          </g>

          <g className="node-growth">
            <circle cx="850" cy="150" r="50" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="2" />
            <text x="850" y="145" textAnchor="middle" fill="#f0f0f5" fontSize="16" fontWeight="bold">↗ Growth</text>
            <text x="850" y="165" textAnchor="middle" fill="#818cf8" fontSize="12">+ Revenue</text>
          </g>
        </svg>
      </div>
    </section>
  )
}
