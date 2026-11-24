'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export interface FormulaStep {
  operator: string
  label: string
  isResult?: boolean
}

const defaultFormulaSteps: FormulaStep[] = [
  { operator: '', label: 'САЙТ' },
  { operator: '+', label: 'Яндекс Директ' },
  { operator: '+', label: 'Аналитика' },
  { operator: '+', label: 'CRM' },
  { operator: '=', label: 'СИСТЕМА ПОЛУЧЕНИЯ ЗАЯВОК', isResult: true },
]

interface ServiceLeadSystemProps {
  tag?: string
  title?: string
  description?: string
  formula?: FormulaStep[]
  ctaLabel?: string
  ctaHref?: string
}

/**
 * Formula band. Colours come from CSS variables (see .lead-sys in globals.css) so that
 * consecutive instances on one page automatically alternate dark / light.
 */
export default function ServiceLeadSystem({
  tag,
  title = 'Сайт может сразу стать системой получения заявок.',
  description,
  formula = defaultFormulaSteps,
  ctaLabel = 'Обсудить систему привлечения клиентов',
  ctaHref = '#contact',
}: ServiceLeadSystemProps) {
  const parts = formula.filter((s) => !s.isResult)
  const result = formula.find((s) => s.isResult)

  return (
    <section className="lead-sys relative overflow-hidden border-t border-[color:var(--ls-line)] bg-[color:var(--ls-bg)] py-14 text-[color:var(--ls-fg)] md:py-20">
      <div className="relative container mx-auto max-w-6xl px-4 sm:px-6">
        <ScrollReveal>
          <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
            {tag && (
              <span className="mb-4 inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ls-accent)]">
                <span className="h-px w-6 bg-current" aria-hidden="true" />
                {tag}
              </span>
            )}
            <h2 className="break-words text-[clamp(1.7rem,3.6vw,2.7rem)] font-extrabold leading-[1.1] tracking-tight">{title}</h2>
            {description && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--ls-sub)] md:text-lg">{description}</p>}
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:items-center md:justify-center">
            {parts.map((step, i) => (
              <React.Fragment key={step.label}>
                {i > 0 && (
                  <span className="self-center font-mono text-2xl font-bold text-[color:var(--ls-accent)]" aria-hidden="true">
                    {step.operator || '+'}
                  </span>
                )}
                <span className="rounded-2xl bg-[color:var(--ls-chip)] px-5 py-3 text-center text-base font-bold ring-1 ring-[color:var(--ls-line)] md:text-lg">
                  {step.label}
                </span>
              </React.Fragment>
            ))}
          </div>

          {result && (
            <div className="mx-auto mt-3 flex max-w-4xl flex-col items-center gap-3">
              <span className="font-mono text-3xl font-bold text-[color:var(--ls-accent)]" aria-hidden="true">
                {result.operator || '='}
              </span>
              <div className="w-full rounded-3xl bg-gradient-to-br from-[#C9854D]/50 to-[#3E7778]/50 p-px">
                <div className="rounded-[calc(1.5rem-1px)] bg-[color:var(--ls-inner)] px-6 py-5 text-center md:py-7">
                  <span className="text-xl font-extrabold tracking-tight md:text-3xl">{result.label}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-9 flex justify-center">
            <Button variant="primary" size="lg" href={ctaHref}>
              {ctaLabel}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
