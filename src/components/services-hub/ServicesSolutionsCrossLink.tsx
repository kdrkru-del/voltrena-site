'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Layers } from 'lucide-react'

export default function ServicesSolutionsCrossLink() {
  return (
    <section className="py-14 bg-bg-primary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-bg-surface/60 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold block mb-1.5 flex items-center justify-center sm:justify-start gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                КОМПЛЕКСНЫЙ ПОДХОД
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-text-primary max-w-xl">
                Если задача затрагивает несколько участков — смотрите готовые архитектуры решений.
              </h2>
            </div>

            <Link
              href="/solutions/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white text-xs sm:text-sm font-semibold hover:bg-accent-light transition-colors whitespace-nowrap min-h-[44px] shrink-0"
            >
              <span>Перейти к решениям</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
