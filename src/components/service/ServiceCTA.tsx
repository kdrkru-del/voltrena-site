'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/ui/LeadForm';
import ServiceRelatedSystems from '@/components/service/ServiceRelatedSystems';
import { siteConfig } from '@/config/site';
import { reachGoal } from '@/lib/analytics';
import { Send, Mail, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';

export interface ServiceCTAProps {
  title?: string;
  description?: string;
  benefits?: string[];
  mode?: 'standard' | 'directContact';
}

export default function ServiceCTA({
  title = 'Расскажите, какую задачу нужно решить.',
  description = 'Опишите текущий процесс и желаемый результат — предложим подходящую систему и состав первой очереди.',
  benefits = [
    'Ответим в течение рабочего дня',
    'Без навязчивых продаж',
    'Предложим конкретное решение',
  ],
  mode = 'standard',
}: ServiceCTAProps) {
  const pathname = usePathname();
  const serviceMatch = pathname?.match(/^\/services\/([^/]+)\/?$/);
  const serviceSlug = serviceMatch?.[1];

  return (
    <>
      {serviceSlug && <ServiceRelatedSystems serviceSlug={serviceSlug} />}

      <section id="contact" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
        <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 mx-auto -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent/5 blur-[160px] rounded-full pointer-events-none"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" delay={0}>
                <span className="inline-block px-3 py-1 rounded-md bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent mb-4 font-semibold">
                  КОНФИГУРАЦИЯ / СВЯЗЬ С КОМАНДОЙ
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight break-words hyphens-auto">
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

            <div className="lg:col-span-6">
              <ScrollReveal direction="left" delay={100}>
                {mode === 'directContact' ? (
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border/80 shadow-2xl space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        Получить конфигурацию
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        Обсудим задачу, покажем подходящую архитектуру и определим состав первой очереди без необходимости внедрять весь контур сразу.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <a
                        href={siteConfig.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => reachGoal('contact_telegram_click', { origin: 'cta_direct' })}
                        className="flex items-center justify-between p-4 rounded-xl bg-accent text-white font-semibold text-sm md:text-base hover:bg-accent-light transition-all shadow-lg shadow-accent/20 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[50px]"
                      >
                        <div className="flex items-center gap-3">
                          <Send className="w-5 h-5 fill-current" />
                          <span>Написать в Telegram</span>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => reachGoal('contact_whatsapp_click', { origin: 'cta_direct' })}
                        className="flex items-center justify-between p-4 rounded-xl bg-bg-primary border border-emerald-500/30 hover:border-emerald-500/60 text-text-primary font-medium text-sm md:text-base transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 min-h-[50px]"
                      >
                        <div className="flex items-center gap-3">
                          <MessageCircle className="w-5 h-5 text-emerald-400" />
                          <span>Написать в WhatsApp</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href={`mailto:${siteConfig.email}`}
                        onClick={() => reachGoal('contact_email_click', { origin: 'cta_direct' })}
                        className="flex items-center justify-between p-4 rounded-xl bg-bg-primary border border-border hover:border-accent/40 text-text-primary font-medium text-sm md:text-base transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent min-h-[50px]"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <Mail className="w-5 h-5 text-accent shrink-0" />
                          <span className="break-all">{siteConfig.email}</span>
                        </div>
                        <span className="text-xs font-mono text-accent group-hover:underline hidden sm:inline ml-3">Отправить письмо</span>
                      </a>
                    </div>

                    <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2 items-center justify-between text-xs font-mono text-text-muted">
                      <span>Ответ в течение 1 рабочего дня</span>
                      <span>Прямой канал связи</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                    <LeadForm source="service_cta" />
                  </div>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
