'use client';

import React from 'react';
import LeadForm from '@/components/ui/LeadForm';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { siteConfig } from '@/config/site';
import { Send, MessageCircle, Mail } from 'lucide-react';

export default function HomeFinalContact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-24"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-[#3E7778]/5 blur-[160px] rounded-full pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct channels & consultation context */}
          <div className="lg:col-span-5 space-y-4 min-w-0">
            <div>
              {/* No redundant overline label */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D2528] tracking-tight leading-[1.15] mb-3 break-words hyphens-auto">
                Какую задачу нужно решить?
              </h2>
              <p className="text-[#5D686A] text-sm sm:text-base leading-relaxed mb-6">
                Опишите бизнес-задачу или назовите выбранную систему. Мы предложим первую рабочую конфигурацию и объясним, с какого контура разумно начать без переплат.
              </p>
            </div>

            {/* Telegram card */}
            <SpotlightCard className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm flex flex-col justify-between gap-3 group hover:border-[#3E7778] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3E7778]/10 border border-[#3E7778]/30 flex items-center justify-center text-[#3E7778] shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#3E7778] font-semibold uppercase tracking-wider block">
                    Быстрый ответ в течение часа
                  </span>
                  <h3 className="text-lg font-bold text-[#1D2528]">Telegram</h3>
                </div>
              </div>
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#C9854D] text-[#FFFDF8] font-bold text-sm hover:bg-[#D99A62] transition-all shadow-sm min-h-[44px] group/btn"
              >
                <span>Запросить конфигурацию в Telegram</span>
                <Send className="w-4 h-4 fill-current group-hover/btn:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </SpotlightCard>

            {/* WhatsApp card */}
            <SpotlightCard className="p-5 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm flex flex-col justify-between gap-3 group hover:border-[#3E7778] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#3E7778]/10 border border-[#3E7778]/30 flex items-center justify-center text-[#3E7778] shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#3E7778] font-semibold uppercase tracking-wider block">
                    Удобно с телефона
                  </span>
                  <h3 className="text-lg font-bold text-[#1D2528]">WhatsApp</h3>
                </div>
              </div>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#D7D3C8] hover:border-[#3E7778] text-[#1D2528] bg-[#F4F1EA] text-sm font-semibold hover:bg-[#FFFDF8] transition-colors min-h-[44px]"
              >
                <span>Написать в WhatsApp</span>
              </a>
            </SpotlightCard>

            {/* Email / Direct Contacts note */}
            <div className="p-4 rounded-xl bg-[#EAE6DD] border border-[#D7D3C8] text-xs text-[#5D686A] space-y-1">
              <div className="flex items-center gap-2 text-[#1D2528] font-bold">
                <Mail className="w-3.5 h-3.5 text-[#3E7778]" />
                <span>Прямая почта инженеров:</span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#3E7778] hover:text-[#2D5D60] font-mono block underline pt-0.5"
              >
                {siteConfig.email}
              </a>
              <p className="pt-1 text-[11px] text-[#7F8987]">
                Конфиденциально. Отвечаем лично, без колл-центров и назойливых звонков.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form Card with Context */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg relative overflow-hidden">
              <div className="mb-6 pb-5 border-b border-[#D7D3C8]">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1D2528] mb-1">
                  Запрос на проектирование системы
                </h3>
                <p className="text-xs sm:text-sm text-[#5D686A]">
                  Оставьте контакты — мы свяжемся для обсуждения требований и вышлем предварительную схему контура.
                </p>
              </div>

              <LeadForm />
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
