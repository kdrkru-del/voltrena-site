'use client'

import React from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { ArrowRight, Layers, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react'

const flowBranches = [
  { problem: 'Нужны новые заявки', stack: 'Директ + Сайт + CRM + Аналитика', system: 'Lead Generation System', result: 'Управляемый поток лидов' },
  { problem: 'Нужны B2B клиенты', stack: 'Scraping + Скоринг + CRM + Аутрич', system: 'B2B Lead Machine', result: 'Выходы на ЛПР компаний' },
  { problem: 'Менеджеры перегружены', stack: 'AI + CRM + Telegram + Автозадачи', system: 'AI Sales Manager', result: 'Квалификация заявок 24/7' },
  { problem: 'Нужны данные о рынке', stack: 'Парсинг + DWH + Алерты + Дашборд', system: 'Digital Intelligence', result: 'Быстрые рыночные решения' },
]

export default function SolutionsHubHero() {
  return (
    <section className="relative min-h-[85vh] pt-32 pb-20 bg-bg-primary overflow-hidden flex flex-col justify-center">
      {/* Background radial effects */}
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumbs */}
          <ScrollReveal delay={50}>
            <div className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted mb-6">
              <Link href="/" className="hover:text-text-primary transition-colors">Главная</Link>
              <span>/</span>
              <span className="text-accent">Решения</span>
            </div>
          </ScrollReveal>

          {/* Eyebrow */}
          <ScrollReveal delay={100}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent mb-6 font-semibold">
              SOLUTIONS & BUSINESS SYSTEMS
            </span>
          </ScrollReveal>

          {/* H1 */}
          <ScrollReveal delay={150}>
            <h1 className="text-display-xl font-bold text-text-primary tracking-tight mb-6">
              Не отдельные инструменты. Готовые системы для бизнеса.
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-10">
              Объединяем сайты, рекламу, CRM, AI, данные и автоматизацию в решения под конкретные задачи: привлечение клиентов, B2B-продажи, обработка заявок и контроль бизнеса.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="primary" size="lg" href="#solutions-catalog">
                Выбрать решение
              </Button>
              <Button variant="secondary" size="lg" href="#contact">
                Обсудить задачу
              </Button>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Visual Formula */}
        <ScrollReveal delay={350}>
          <div className="mt-16 max-w-5xl mx-auto p-6 md:p-8 rounded-3xl bg-bg-surface border border-border/80 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                PROBLEM → CONNECTED SERVICES → SYSTEM → BUSINESS RESULT
              </span>
              <p className="text-xs text-text-secondary mt-1">
                Каждое решение закрывает бизнес-задачу от начала до конца
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {flowBranches.map((branch, i) => (
                <div
                  key={branch.system}
                  className="p-5 rounded-2xl bg-bg-primary border border-border hover:border-accent/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-mono text-text-muted uppercase block mb-1">
                      Задача:
                    </span>
                    <h3 className="font-bold text-sm text-text-primary mb-3">
                      {branch.problem}
                    </h3>
                    <div className="text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md mb-3">
                      {branch.stack}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-border/60">
                    <span className="text-xs font-bold text-text-primary block">
                      {branch.system}
                    </span>
                    <span className="text-[11px] text-text-secondary">
                      → {branch.result}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
