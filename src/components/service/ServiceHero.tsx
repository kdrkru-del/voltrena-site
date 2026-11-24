'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DarkHeroSection, HeroActions, HeroEyebrow, HeroLead, HeroTitle } from '@/components/ui/DarkHero'
import ServiceHeroVisual from '@/components/service/HeroVisuals'

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
  ctaSecondary?: string
  ctaSecondaryHref?: string
  heroFlow: FlowNode[]
  heroExample?: string
}

/** CSS entrance (no JS needed, so the hero is never stuck invisible before hydration). */
const rise = (delay: number, className?: string) => ({
  className: cn('rise', className),
  style: { '--d': `${delay}s` } as React.CSSProperties,
})

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
  return (
    <DarkHeroSection serviceHero>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          {eyebrow && (
            <div {...rise(0)}>
              <HeroEyebrow>{eyebrow}</HeroEyebrow>
            </div>
          )}
          <div {...rise(0.08)}>
            <HeroTitle className="mt-5 break-words">{title}</HeroTitle>
          </div>
          <div {...rise(0.16)}>
            <HeroLead className="mt-5 max-w-xl">{description}</HeroLead>
          </div>
          <div {...rise(0.24)}>
            <HeroActions
              className="mt-8"
              primary={{ label: ctaPrimary, href: '#contact' }}
              secondary={ctaSecondary ? { label: ctaSecondary, href: ctaSecondaryHref } : undefined}
            />
          </div>
          {heroExample && (
            <p {...rise(0.32, 'mt-7 max-w-xl border-l-2 border-[#3E7778] pl-4 text-sm leading-relaxed text-[#A9B3B1]')}>
              {heroExample}
            </p>
          )}
        </div>

        <div {...rise(0.2, 'lg:col-span-6 min-w-0')}>
          <ServiceHeroVisual nodes={heroFlow} />
        </div>
      </div>

      {heroFlow && heroFlow.length > 0 && (
        <div {...rise(0.4, 'mt-14 md:mt-20 border-t border-white/10 pt-6')}>
          <div className="mb-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#7F8987]">Как устроена связка</div>
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-3">
            {heroFlow.map((n, i) => (
              <React.Fragment key={n.id}>
                <li className="rounded-full bg-white/[0.05] ring-1 ring-white/10 px-3.5 py-1.5">
                  <span className="text-xs sm:text-[13px] font-semibold text-[#E6EAE9]">{n.label}</span>
                  {n.detail && <span className="ml-2 hidden sm:inline text-[11px] font-mono text-[#7F8987]">{n.detail}</span>}
                </li>
                {i < heroFlow.length - 1 && <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#3E7778]" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}
    </DarkHeroSection>
  )
}
