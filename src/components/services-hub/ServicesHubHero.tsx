'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { ArrowDown, Layers } from 'lucide-react'

const servicePillars = [
  { id: 'attract', step: '01', title: 'Привлечь', desc: 'Директ, SEO / GEO, B2B-поиск' },
  { id: 'convert', step: '02', title: 'Конвертировать', desc: 'Сайты, Telegram Mini Apps' },
  { id: 'automate', step: '03', title: 'Автоматизировать', desc: 'ИИ-ассистенты, CRM-воронки' },
  { id: 'measure', step: '04', title: 'Измерять', desc: 'Парсинг данных, Сквозная аналитика' },
]

export default function ServicesHubHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Subtle Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted mb-5">
            <Link href="/" className="hover:text-text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-accent">Услуги</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              УСЛУГИ / DIGITAL GROWTH STACK
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight mb-6 max-w-3xl mx-auto leading-[1.1]">
            Услуги для каждого участка цифровой системы продаж.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-8">
            Можно начать с сайта, рекламы, CRM, автоматизации или аналитики — а затем соединить нужные компоненты в одну управляемую систему.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <Button variant="primary" size="lg" href="#service-groups">
              Выбрать услугу
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Описать задачу
            </Button>
          </div>
        </div>

        {/* Compact 4-Pillar Map (Instantly readable, lightweight) */}
        <div className="max-w-5xl mx-auto">
          <div className="p-4 sm:p-6 rounded-2xl bg-bg-surface/70 border border-border/70 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-accent" />
                Карта 4 направлений стека
              </span>
              <span className="text-[11px] font-mono text-accent">9 связанных услуг</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {servicePillars.map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl bg-bg-primary/80 border border-border/80 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-text-primary">{p.title}</span>
                    <span className="font-mono text-xs text-accent font-semibold">{p.step}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
