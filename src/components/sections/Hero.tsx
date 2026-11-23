'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle2, MessageSquare, Send, Sparkles } from 'lucide-react';
import LeadFlowEngine from '@/components/ui/LeadFlowEngine';

export default function Hero() {
  const handleScrollToNext = () => {
    const nextEl = document.getElementById('system-story');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 sm:pt-36 sm:pb-12 bg-[#F4F1EA] text-[#1D2528] overflow-hidden select-none">
      {/* Background: soft drifting color fields + dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-[20%] right-[-10%] w-[70vw] max-w-[900px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.16),transparent_62%)] blur-2xl motion-safe:animate-[hero-blob_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-25%] right-[15%] w-[55vw] max-w-[700px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(201,133,77,0.14),transparent_60%)] blur-2xl motion-safe:animate-[hero-blob_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(29,37,40,0.09)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_60%_at_70%_45%,#000_20%,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#F4F1EA]" />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Subtitle, Actions, Facts */}
          <div className="lg:col-span-7 space-y-6">
            {/* Label over headline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3E7778]/10 text-[#3E7778] text-xs font-mono font-bold uppercase tracking-wider">
              <span>Сайты · Реклама · CRM для бизнеса</span>
            </div>

            {/* Clear Human-Centered Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[56px] xl:text-[62px] font-extrabold text-[#1D2528] tracking-[-0.03em] leading-[1.12] max-w-[820px]">
              Помогаем компаниям получать заявки и не терять их по дороге к менеджеру.
            </h1>

            {/* Clear, Helpful Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#5D686A] leading-relaxed max-w-[620px] font-normal">
              Создаём быстрые сайты, настраиваем Яндекс Директ и связываем формы с CRM и Telegram. Менеджер получает заявку сразу со всеми деталями заказа, а вы видите, какая реклама сработала.
            </p>

            {/* Action Row: Primary Button + Secondary Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#C9854D] hover:bg-[#D99A62] text-[#FFFDF8] font-bold text-sm sm:text-base tracking-wide transition-all shadow-md shadow-[#C9854D]/20 hover:shadow-lg hover:shadow-[#C9854D]/30 hover:scale-[1.02] active:scale-[0.98] min-h-[48px] w-full sm:w-auto"
              >
                Получить оценку проекта
              </Link>

              <Link
                href="/cases/"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#5D686A] hover:text-[#1D2528] transition-colors py-2 group/link"
              >
                <span>Посмотреть работы</span>
                <ArrowRight className="w-4 h-4 text-[#3E7778] group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 3 Real Facts below buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#D7D3C8]/80 max-w-2xl">
              <div className="flex items-start gap-2 text-xs text-[#5D686A] leading-snug">
                <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                <span>Сайт, реклама и CRM работают вместе</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#5D686A] leading-snug">
                <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                <span>Заявки уходят в Telegram или CRM</span>
              </div>
              <div className="flex items-start gap-2 text-xs text-[#5D686A] leading-snug">
                <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                <span>Сроки и смету фиксируем до старта</span>
              </div>
            </div>
          </div>

          {/* Right Column: animated lead flow (sources → hub → manager inbox) */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            <LeadFlowEngine />
          </div>

        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl pt-4">
        <button
          type="button"
          onClick={handleScrollToNext}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#7F8987] hover:text-[#1D2528] transition-colors uppercase py-1 focus:outline-none"
        >
          <span>Листать дальше</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
