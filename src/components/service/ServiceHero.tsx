'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { registerGSAP } from '@/animations/gsap-config'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

export interface FlowNode {
  id: string
  label: string
  detail?: string
}

interface ServiceHeroProps {
  eyebrow: string
  title: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  ctaSecondaryHref?: string
  heroFlow: FlowNode[]
  heroExample?: string
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  ctaSecondaryHref = '#what-we-create',
  heroFlow,
  heroExample,
}: ServiceHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return
    
    registerGSAP()
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-flow-node', 
        { opacity: 0, y: 10 }, 
        {
          opacity: 1, 
          y: 0,
          stagger: 0.15,
          duration: 0.5,
          delay: 1,
          ease: 'power2.out'
        }
      )
    }, containerRef)
    
    return () => ctx.revert()
  }, [prefersReducedMotion])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section className="min-h-[90vh] md:min-h-screen pt-28 md:pt-36 pb-16 bg-bg-primary relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={prefersReducedMotion ? undefined : containerVariants}
          initial={prefersReducedMotion ? "show" : "hidden"}
          animate="show"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <nav aria-label="Хлебные крошки" className="font-mono text-[10px] sm:text-xs text-text-muted tracking-wide flex items-center gap-2">
              <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-accent transition-colors">Услуги</Link>
              <span>/</span>
              <span className="text-text-secondary">{eyebrow}</span>
            </nav>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">
              {eyebrow}
            </div>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-display-xl font-bold text-text-primary mb-6 tracking-tight">
            {title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            {description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#contact">
              {ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" href={ctaSecondaryHref}>
              {ctaSecondary}
            </Button>
          </motion.div>

          {heroFlow && heroFlow.length > 0 && (
            <motion.div variants={itemVariants} className="mt-16 sm:mt-24 relative" ref={containerRef}>
              {/* Desktop Flow */}
              <div className="hidden md:flex items-center justify-center max-w-5xl mx-auto relative">
                {heroFlow.map((node, i) => (
                  <React.Fragment key={node.id}>
                    <div className="hero-flow-node relative z-10 border border-accent/40 bg-bg-surface px-4 lg:px-5 py-3 rounded-full flex flex-col items-center justify-center min-w-0">
                      <span className="font-mono text-xs text-text-primary whitespace-nowrap">{node.label}</span>
                      {node.detail && <span className="mt-1 text-[10px] text-text-muted whitespace-nowrap">{node.detail}</span>}
                    </div>
                    {i < heroFlow.length - 1 && (
                      <div className="hero-flow-node flex-1 min-w-[40px] flex items-center justify-center relative px-2">
                        <svg width="100%" height="24" viewBox="0 0 100 24" className="overflow-visible" preserveAspectRatio="none">
                          <line x1="0" y1="12" x2="100%" y2="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-accent/30" />
                          <path d="M 94 6 L 100 12 L 94 18" vectorEffect="non-scaling-stroke" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
                          <line x1="0" y1="12" x2="100%" y2="12" stroke="currentColor" strokeWidth="1" className="text-accent data-pulse-line opacity-0" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Mobile Flow */}
              <div className="flex md:hidden flex-col items-center justify-center space-y-4">
                {heroFlow.map((node, i) => (
                  <React.Fragment key={node.id}>
                    <ScrollReveal direction="up" delay={i * 100}>
                      <div className="border border-accent/40 bg-bg-surface px-6 py-3 rounded-full flex flex-col items-center justify-center min-w-[200px]">
                        <span className="font-mono text-xs text-text-primary">{node.label}</span>
                        {node.detail && <span className="mt-1 text-[10px] text-text-muted">{node.detail}</span>}
                      </div>
                    </ScrollReveal>
                    {i < heroFlow.length - 1 && (
                      <ScrollReveal direction="none" delay={i * 100 + 50}>
                        <div className="h-8 flex justify-center items-center">
                          <svg width="24" height="32" className="overflow-visible">
                            <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-accent/30" />
                            <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="1.5" className="text-accent data-pulse-line" />
                            <path d="M 6 26 L 12 32 L 18 26" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent/30" />
                          </svg>
                        </div>
                      </ScrollReveal>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {heroExample && (
                <ScrollReveal direction="up" delay={600}>
                  <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-border bg-bg-surface/70 px-4 py-3 text-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">Пример механики</span>
                    <p className="mt-2 text-xs sm:text-sm text-text-secondary leading-relaxed">{heroExample}</p>
                  </div>
                </ScrollReveal>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
