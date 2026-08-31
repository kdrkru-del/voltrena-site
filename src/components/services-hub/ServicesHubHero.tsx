'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { ArrowRight, ArrowDown } from 'lucide-react'

const mainFlow = [
  { id: 'traffic', label: 'Трафик', sub: 'Директ / SEO / B2B' },
  { id: 'website', label: 'Сайт', sub: 'Интерфейс & Конверсия' },
  { id: 'lead', label: 'Заявка', sub: 'Квалификация' },
  { id: 'crm', label: 'CRM', sub: 'Воронка сделок' },
  { id: 'auto', label: 'Автоматизация', sub: 'AI & Telegram' },
  { id: 'growth', label: 'Аналитика & Рост', sub: 'ROMI & Выручка' },
]

export default function ServicesHubHero() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 bg-bg-primary overflow-hidden flex flex-col justify-center">
      {/* Background patterns & radial glow */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <ScrollReveal delay={50}>
            <div className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted mb-6">
              <Link href="/" className="hover:text-text-primary transition-colors">Главная</Link>
              <span>/</span>
              <span className="text-accent">Услуги</span>
            </div>
          </ScrollReveal>

          {/* Eyebrow */}
          <ScrollReveal delay={100}>
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent mb-6 font-semibold">
              SERVICES & DIGITAL ECOSYSTEM
            </span>
          </ScrollReveal>

          {/* H1 */}
          <ScrollReveal delay={150}>
            <h1 className="text-display-xl font-bold text-text-primary tracking-tight mb-6">
              Всё, что нужно для цифровой системы продаж.
            </h1>
          </ScrollReveal>

          {/* Subtitle / Description */}
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-10">
              От сайта и рекламы до CRM, AI и аналитики. Объединяем инструменты в единую систему, которая привлекает клиентов, обрабатывает заявки и помогает бизнесу расти.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#contact">
                Обсудить задачу
              </Button>
              <Button variant="secondary" size="lg" href="#service-groups">
                Выбрать направление
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Connected System Visual Flow */}
        <ScrollReveal delay={350}>
          <div className="mt-16 max-w-5xl mx-auto p-6 md:p-8 rounded-3xl bg-bg-surface border border-border/80 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                CONNECTED GROWTH SYSTEM
              </span>
              <p className="text-xs text-text-secondary mt-1">
                Единая сквозная цепочка: от первого рекламного касания до повторных продаж
              </p>
            </div>

            {/* Desktop Horizontal Flow */}
            <div className="hidden lg:grid grid-cols-6 gap-2 relative">
              {mainFlow.map((node, i) => (
                <div key={node.id} className="relative flex flex-col items-center text-center">
                  <div className="w-full p-4 rounded-xl bg-bg-primary border border-border hover:border-accent/50 transition-colors h-full flex flex-col justify-center">
                    <span className="font-bold text-sm text-text-primary mb-1">{node.label}</span>
                    <span className="text-[11px] text-text-secondary leading-tight">{node.sub}</span>
                  </div>
                  {i < mainFlow.length - 1 && (
                    <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-accent/60">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Vertical Flow */}
            <div className="lg:hidden flex flex-col gap-3">
              {mainFlow.map((node, i) => (
                <React.Fragment key={node.id}>
                  <div className="p-4 rounded-xl bg-bg-primary border border-border flex items-center justify-between">
                    <span className="font-bold text-sm text-text-primary">{node.label}</span>
                    <span className="text-xs text-text-secondary">{node.sub}</span>
                  </div>
                  {i < mainFlow.length - 1 && (
                    <div className="flex justify-center -my-1 text-accent/50">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
