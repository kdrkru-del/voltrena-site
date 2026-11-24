'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Band, pad } from '@/components/service/Band'
import { cn } from '@/lib/utils'

export interface SaleSystemNode {
  id: string
  label: string
  description: string
}

interface ServiceSaleSystemProps {
  nodes: SaleSystemNode[]
  tag?: string
  title?: string
  description?: string
  flow?: string[]
  conclusion?: string
}

export default function ServiceSaleSystem({
  nodes,
  tag,
  title = 'Сайт — это часть системы продаж.',
  description,
  flow = ['Трафик', 'Сайт', 'CRM', 'Аналитика'],
  conclusion = 'Мы соединяем всё.',
}: ServiceSaleSystemProps) {
  return (
    <Band tone="sand">
      <SectionHeading tag={tag} title={title} subtitle={description} align="left" />

      {/* Flow chain */}
      <ScrollReveal>
        <div className="mb-10 flex flex-wrap items-center gap-y-3 md:mb-14 md:flex-nowrap">
          {flow.map((label, idx) => (
            <React.Fragment key={`${label}-${idx}`}>
              <span className="whitespace-nowrap rounded-full bg-[#1D2528] px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-[#F4F1EA] shadow-md md:px-5 md:text-xs">
                {label}
              </span>
              {idx < flow.length - 1 && (
                <span className="relative mx-1 hidden h-px min-w-[28px] flex-1 overflow-hidden bg-[#D7D3C8] md:block" aria-hidden="true">
                  <span className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#C9854D] to-transparent motion-safe:animate-[flow-x_2.4s_linear_infinite]" />
                </span>
              )}
              {idx < flow.length - 1 && <span className="mx-2 text-[#C9854D] md:hidden" aria-hidden="true">→</span>}
            </React.Fragment>
          ))}
        </div>
      </ScrollReveal>

      <div className={cn('grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5', nodes.length > 4 && 'lg:grid-cols-3')}>
        {nodes.map((node, i) => (
          <ScrollReveal key={node.id} delay={i * 70}>
            <article className="group h-full rounded-2xl bg-[#FFFDF8] p-6 ring-1 ring-[#D7D3C8] transition-all duration-300 hover:-translate-y-1 hover:ring-[#3E7778]/50 hover:shadow-[0_24px_50px_-28px_rgba(29,37,40,0.35)]">
              <span className="font-mono text-xs text-[#C9854D]">{pad(i + 1)}</span>
              <h4 className="mt-2 text-lg font-extrabold tracking-tight text-[#1D2528] md:text-xl">{node.label}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#5D686A]">{node.description}</p>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <p className="mt-12 max-w-3xl bg-gradient-to-r from-[#3E7778] to-[#C9854D] bg-clip-text text-2xl font-extrabold leading-tight tracking-tight text-transparent md:mt-16 md:text-4xl">
          {conclusion}
        </p>
      </ScrollReveal>
    </Band>
  )
}
