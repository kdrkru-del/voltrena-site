'use client'

import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowDown, Layers, Sparkles } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 font-mono text-xs text-text-muted mb-5">
            <Link href="/" className="hover:text-text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-accent">О нас</span>
          </div>

          {/* Eyebrow */}
          <div className="mb-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              О КОМАНДЕ / VOLTRENA DIGITAL
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight leading-[1.12] mb-6 max-w-4xl mx-auto">
            Мы строим не отдельные инструменты. <br className="hidden sm:inline" />
            Мы строим системы роста.
          </h1>

          {/* Supporting text */}
          <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-6">
            VOLTRENA Digital объединяет стратегию, разработку, маркетинг, данные и AI-автоматизацию в одной системе — от первого контакта с клиентом до заявки, продажи и дальнейшего роста.
          </p>

          {/* Extra punch line */}
          <p className="font-mono text-xs sm:text-sm text-accent tracking-wider uppercase mb-8 font-medium">
            От первого клика — до продажи.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Button variant="primary" size="lg" href="#team">
              Познакомиться с командой
            </Button>
            <Button variant="secondary" size="lg" href="#contact">
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
