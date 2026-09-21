'use client';

import React from 'react';
import LeadForm from '@/components/ui/LeadForm';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { siteConfig } from '@/config/site';
import { Send, MessageCircle, Mail, Terminal } from 'lucide-react';

export default function HomeFinalContact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0D1012] relative overflow-hidden border-t border-[#232B2D] scroll-mt-24"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-[#3E7778]/8 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct channels & consultation context */}
          <div className="lg:col-span-5 space-y-4 min-w-0">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
                <Terminal className="w-3.5 h-3.5 text-[#5A9692]" />
                <span>Прямой диалог</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2EFE6] tracking-tight leading-[1.15] mb-3 break-words hyphens-auto">
                Какую задачу нужно решить?
              </h2>
              <p className="text-[#AAB4B1] text-sm sm:text-base leading-relaxed mb-6">
                Опишите бизнес-задачу или назовите выбранную систему. Мы предложим первую рабочую конфигурацию и объясним, с какого контура разумно начать без переплат.
              </p>
            </div>

            {/* Telegram card */}
            <SpotlightCard className="p-5 rounded-2xl bg-[#131719] border border-[#232B2D] shadow-md flex flex-col justify-between gap-3 group hover:border-[#3E7778] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3E7778]/20 border border-[#3E7778]/40 flex items-center justify-center text-[#5A9692] shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#5A9692] font-semibold uppercase tracking-wider block">
                    Быстрый ответ в течение часа
                  </span>
                  <h3 className="text-lg font-bold text-[#F2EFE6]">Telegram</h3>
                </div>
              </div>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#C9854D] text-[#0D1012] font-bold text-sm hover:bg-[#D9955D] transition-all shadow-sm min-h-[44px] group/btn"
              >
                <span>Запросить конфигурацию в Telegram</span>
                <Send className="w-4 h-4 fill-current group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </SpotlightCard>

            {/* WhatsApp card */}
            <SpotlightCard className="p-5 rounded-2xl bg-[#131719] border border-[#232B2D] shadow-md flex flex-col justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider block">
                    Прямой диалог
                  </span>
                  <h3 className="text-lg font-bold text-[#F2EFE6]">WhatsApp</h3>
                </div>
              </div>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0D1012] border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-semibold text-sm transition-colors min-h-[44px] group/btn"
              >
                <span>Написать в WhatsApp</span>
                <MessageCircle className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </SpotlightCard>

            {/* Email card */}
            <SpotlightCard className="p-5 rounded-2xl bg-[#131719] border border-[#232B2D] shadow-md flex flex-col justify-between gap-3 group hover:border-[#384547] transition-colors min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1012] border border-[#232B2D] flex items-center justify-center text-[#AAB4B1] group-hover:text-[#5A9692] transition-colors shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#7A8885] font-semibold uppercase tracking-wider block">
                      Официальный запрос
                    </span>
                    <h3 className="text-lg font-bold text-[#F2EFE6]">Email</h3>
                  </div>
                </div>
                <span className="font-mono text-xs sm:text-sm text-[#D7D3C8] font-semibold break-all">
                  {siteConfig.email}
                </span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0D1012] border border-[#232B2D] hover:border-[#3E7778] hover:bg-[#182022] text-[#F2EFE6] font-semibold text-sm transition-colors min-h-[44px] group/btn"
              >
                <span>Отправить запрос на почту</span>
                <Mail className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </SpotlightCard>
          </div>

          {/* Right Column: Lead Form Card with Spotlight Sheen */}
          <div className="lg:col-span-7 min-w-0">
            <SpotlightCard className="p-6 sm:p-8 rounded-2xl bg-[#131719] border border-[#2B3537] shadow-2xl relative overflow-hidden">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F2EFE6] mb-2">
                  Получить конфигурацию под ваш бизнес
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB4B1] leading-relaxed">
                  Укажите задачу, текущие инструменты и желаемый результат. Мы предложим стартовый контур без необходимости внедрять всю систему сразу.
                </p>
              </div>
              <LeadForm source="homepage_configuration_request" />
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
