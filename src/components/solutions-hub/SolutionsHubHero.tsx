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
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted mb-5">
            <Link href="/" className="hover:text-text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-accent">Решения</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              РЕШЕНИЯ / CONNECTED BUSINESS SYSTEMS
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]">
            Собираем цифровые системы под конкретные задачи бизнеса.
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Соединяем привлечение, сайт, CRM, данные и автоматизацию в рабочий процесс — от первого сигнала до измеримого результата.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <Button variant="primary" size="lg" href="#solution-navigator">
              Подобрать решение
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Обсудить задачу
            </Button>
          </div>
        </div>

        {/* Hero Visual: One clean transformation */}
        <div className="max-w-4xl mx-auto">
          <div className="p-4 sm:p-6 rounded-2xl bg-bg-surface/70 border border-border/70 backdrop-blur-sm shadow-xl">
            <div className="text-center mb-4">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold">
                Трансформация бизнес-процесса
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
              <div className="p-3 rounded-xl bg-bg-primary/90 border border-border">
                <span className="text-[10px] font-mono text-text-muted uppercase block mb-1">Вход</span>
                <span className="text-xs sm:text-sm font-bold text-text-primary">Проблема бизнеса</span>
              </div>
              <div className="p-3 rounded-xl bg-bg-primary/90 border border-accent/30">
                <span className="text-[10px] font-mono text-accent uppercase block mb-1">Связка</span>
                <span className="text-xs sm:text-sm font-bold text-accent">Связанные компоненты</span>
              </div>
              <div className="p-3 rounded-xl bg-bg-primary/90 border border-border">
                <span className="text-[10px] font-mono text-text-muted uppercase block mb-1">Процесс</span>
                <span className="text-xs sm:text-sm font-bold text-text-primary">Работающая система</span>
              </div>
              <div className="p-3 rounded-xl bg-bg-primary/90 border border-emerald-500/30">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Итог</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-400">Бизнес-результат</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
