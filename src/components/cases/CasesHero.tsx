'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { ArrowDown, ShieldCheck, Layers } from 'lucide-react'

export default function CasesHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted mb-5">
            <Link href="/" className="hover:text-text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-accent">Кейсы</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              VOLTRENA / CASES
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Кейсы, где виден не только сайт, но и работающая система.
          </h1>

          {/* Supporting */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-8">
            Показываем проекты через связку: спрос, интерфейс, заявка, данные, обработка и следующий шаг. Без выдуманных процентов и фейковых обещаний.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            <Button variant="primary" size="lg" href={siteConfig.telegramUrl}>
              Разобрать похожую задачу
            </Button>
            <Button variant="secondary" size="lg" href="#cases">
              Смотреть кейсы
            </Button>
          </div>

          {/* Fact-check badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-surface border border-border/80 text-xs font-mono text-text-muted">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Только проверяемые артефакты и подтверждённые данные проектов</span>
          </div>
        </div>
      </div>
    </section>
  )
}
