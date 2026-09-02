'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { siteConfig } from '@/config/site'
import { Send, MessageCircle } from 'lucide-react'

export default function AboutFounder() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        <ScrollReveal>
          <div className="p-8 sm:p-10 md:p-12 rounded-3xl bg-bg-surface/80 border border-border shadow-2xl relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Founder Portrait */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-accent/40 shadow-xl mb-4 bg-bg-primary">
                  <img
                    src={siteConfig.getAssetUrl('/images/team/roman-kornev.jpg')}
                    alt="Роман Корнев — основатель VOLTRENA Digital"
                    className="w-full h-full object-cover object-[50%_15%]"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  Роман Корнев
                </h3>
                <p className="font-mono text-xs text-accent mt-1">
                  Основатель & Технический лидер
                </p>
              </div>

              {/* Founder Narrative */}
              <div className="md:col-span-8 space-y-4 text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                  ЛИЧНАЯ ОТВЕТСТВЕННОСТЬ
                </span>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                  «Мы не прячемся за аккаунт-менеджерами и сложными отчётами.»
                </h2>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  VOLTRENA создавалась как агентство инженерного типа. Для нас важно не просто сдать проект по акту, а сделать так, чтобы связка рекламы, сайта, CRM и автоматизации стабильно приносила целевые заявки.
                </p>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                  Я лично участвую в архитектурном проектировании каждой системы, согласовании контрольных точек и проверке сквозной логики.
                </p>

                {/* Direct Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="default"
                    href={siteConfig.telegramUrl}
                    className="inline-flex items-center gap-2"
                  >
                    <Send className="w-4 h-4 fill-current" />
                    <span>Написать Роману в Telegram</span>
                  </Button>
                  <Button
                    variant="secondary"
                    size="default"
                    href={siteConfig.whatsappUrl}
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
