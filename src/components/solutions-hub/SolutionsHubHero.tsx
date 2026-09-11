'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function SolutionsHubHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]">
            Готовые цифровые системы для бизнеса.
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Соединяем привлечение клиентов, сайт, CRM и автоматизацию в единый рабочий процесс.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Button variant="primary" size="lg" href="#solution-navigator">
              Подобрать решение
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Обсудить задачу
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
