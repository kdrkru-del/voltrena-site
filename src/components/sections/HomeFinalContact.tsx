'use client'

import React from 'react'
import LeadForm from '@/components/ui/LeadForm'
import { siteConfig } from '@/config/site'
import { Send, MessageCircle, Mail } from 'lucide-react'

export default function HomeFinalContact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden border-t border-border/40 scroll-mt-24">
      <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent/6 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-4 min-w-0">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-4">
                ПОДБОР КОНФИГУРАЦИИ
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight leading-[1.15] mb-3 break-words hyphens-auto">
                Какую задачу нужно решить?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
                Опишите бизнес-задачу или назовите выбранную систему. Мы предложим первую рабочую конфигурацию и объясним, с какого контура разумно начать.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl flex flex-col justify-between gap-3 group hover:border-accent/60 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider block">Быстрый запрос</span>
                  <h3 className="text-lg font-bold text-text-primary">Telegram</h3>
                </div>
              </div>
              <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-colors shadow-md shadow-accent/20 min-h-[44px] group/btn">
                <span>Запросить конфигурацию</span>
                <Send className="w-4 h-4 fill-current group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-bg-surface border border-border/80 shadow-lg flex flex-col justify-between gap-3 group hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">Мессенджер</span>
                  <h3 className="text-lg font-bold text-text-primary">WhatsApp</h3>
                </div>
              </div>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-bg-primary border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-semibold text-sm transition-colors min-h-[44px] group/btn">
                <span>Написать в WhatsApp</span>
                <MessageCircle className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-bg-surface border border-border/80 shadow-lg flex flex-col justify-between gap-3 group hover:border-accent/40 transition-colors min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-bg-primary border border-border flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-text-muted font-semibold uppercase tracking-wider block">Почта</span>
                    <h3 className="text-lg font-bold text-text-primary">Email</h3>
                  </div>
                </div>
                <span className="font-mono text-xs sm:text-sm text-text-primary font-semibold break-all">{siteConfig.email}</span>
              </div>
              <a href={`mailto:${siteConfig.email}`} className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-bg-primary border border-border hover:border-accent/50 hover:bg-accent/10 text-text-primary hover:text-accent font-semibold text-sm transition-colors min-h-[44px] group/btn">
                <span>Отправить запрос</span>
                <Mail className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 min-w-0">
            <div className="p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/90 shadow-2xl relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">Получить конфигурацию под ваш бизнес</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Укажите задачу, текущие инструменты и желаемый результат. Мы предложим стартовый контур без необходимости внедрять всю систему сразу.
                </p>
              </div>
              <LeadForm source="homepage_configuration_request" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
