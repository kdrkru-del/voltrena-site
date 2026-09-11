'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function SolutionsServicesCrossLink() {
  return (
    <section className="py-14 bg-bg-secondary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-bg-surface/60 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-text-primary max-w-xl">
                Хотите выбрать отдельный компонент системы? Смотрите каталог всех услуг.
              </h2>
            </div>

            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white text-xs sm:text-sm font-semibold hover:bg-accent-light transition-colors whitespace-nowrap min-h-[44px] shrink-0"
            >
              <span>Смотреть все услуги</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
