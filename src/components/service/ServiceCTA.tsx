'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/ui/LeadForm';
import { Send, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export interface ServiceCTAProps {
  title?: string;
  description?: string;
  benefits?: string[];
  mode?: 'standard' | 'directContact';
}

export default function ServiceCTA({
  title = 'Расскажите, какой сайт вам нужен.',
  description = 'Опишите задачу — мы предложим структуру, подход и систему вокруг проекта.',
  benefits = [
    'Ответим в течение рабочего дня',
    'Без навязчивых продаж',
    'Предложим конкретное решение',
  ],
  mode = 'standard',
}: ServiceCTAProps) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="right" delay={0}>
              <span className="inline-block px-3 py-1 rounded-md bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
                КОНТАКТ / СВЯЗЬ С КОМАНДОЙ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
                {title}
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                {description}
              </p>

              <ul className="space-y-3.5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-text-primary text-sm md:text-base font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={100}>
              {mode === 'directContact' ? (
                <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border/80 shadow-2xl space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      Прямой контакт с техлидом
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      Обсудим вашу задачу без промежуточных менеджеров, покажем примеры архитектуры и рассчитаем состав первой очереди.
                    </p>
                  </div>

                  <div className="space-y-3.5 pt-2">
                    {/* Telegram Primary Contact */}
                    <a
                      href="https://t.me/voltrena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-xl bg-accent text-white font-semibold text-sm md:text-base hover:bg-accent-light transition-all shadow-lg shadow-accent/20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                    >
                      <div className="flex items-center gap-3">
                        <Send className="w-5 h-5 fill-current" />
                        <span>Написать в Telegram @voltrena</span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Email Secondary Contact */}
                    <a
                      href="mailto:hello@voltrena.com"
                      className="flex items-center justify-between p-4 rounded-xl bg-bg-primary border border-border hover:border-accent/40 text-text-primary font-medium text-sm md:text-base transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[48px]"
                    >
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-accent" />
                        <span>hello@voltrena.com</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-text-muted">
                    <span>Ответ в течение 1 рабочего дня</span>
                    <span>Прямой канал</span>
                  </div>
                </div>
              ) : (
                <div className="bg-bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                  <LeadForm />
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
