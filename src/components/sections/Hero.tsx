'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import NodeNetwork from '@/components/ui/NodeNetwork';

export default function Hero() {
  const handleScrollToNext = () => {
    const nextEl = document.getElementById('short-benefits');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 sm:pt-36 sm:pb-12 bg-[#F4F1EA] text-[#1D2528] overflow-hidden select-none">
      {/* Background Interactive Network - hidden on small mobile to avoid text clutter */}
      <div className="absolute inset-0 z-0 pointer-events-auto hidden sm:block" aria-hidden="true">
        <NodeNetwork className="absolute inset-0" isLightMode={true} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(62,119,120,0.06),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(201,133,77,0.05),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/30 via-transparent to-[#F4F1EA] pointer-events-none" />
      </div>

      {/* Main Spacious Editorial Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl my-auto">
        <div className="max-w-[960px]">
          {/* Label over headline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3E7778]/10 text-[#3E7778] text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <span>Сайты · Реклама · CRM для B2B</span>
          </div>

          {/* Large Human-Centered Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-[52px] lg:text-[60px] xl:text-[66px] font-extrabold text-[#1D2528] tracking-[-0.03em] leading-[1.1] mb-6 max-w-[880px]">
            Помогаем B2B-компаниям получать заявки и не терять их по дороге к менеджеру.
          </h1>

          {/* Clear, Helpful Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#5D686A] leading-relaxed max-w-[640px] mb-8 sm:mb-10 font-normal">
            Создаём быстрые сайты, настраиваем Яндекс Директ и связываем формы, мессенджеры и CRM в одну рабочую цепочку. Менеджер получает заявку сразу со всеми деталями, а вы видите, откуда пришёл клиент.
          </p>

          {/* Action Row: Primary Button + Secondary Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 mb-10">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#C9854D] hover:bg-[#D99A62] text-[#FFFDF8] font-bold text-sm sm:text-base tracking-wide transition-all shadow-md shadow-[#C9854D]/20 hover:shadow-lg hover:shadow-[#C9854D]/30 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#D7D3C8]/80 max-w-3xl">
            <div className="flex items-start gap-2.5 text-xs text-[#5D686A] leading-snug">
              <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
              <span>Сайт, реклама и CRM работают вместе</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#5D686A] leading-snug">
              <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
              <span>Заявки уходят в Telegram или CRM</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-[#5D686A] leading-snug">
              <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
              <span>Сроки и смета понятны до старта</span>
            </div>
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
