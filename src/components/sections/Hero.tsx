'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import NodeNetwork from '@/components/ui/NodeNetwork';

export default function Hero() {
  const handleScrollToNext = () => {
    const nextEl = document.getElementById('digital-growth-contours');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 sm:pt-36 sm:pb-12 bg-[#F4F1EA] text-[#1D2528] overflow-hidden select-none">
      {/* Background Full-Bleed Interactive System Network */}
      <div className="absolute inset-0 z-0 pointer-events-auto" aria-hidden="true">
        <NodeNetwork className="absolute inset-0" isLightMode={true} />
        {/* Subtle radial depth gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(62,119,120,0.06),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(201,133,77,0.05),transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA]/30 via-transparent to-[#F4F1EA] pointer-events-none" />
      </div>

      {/* Decorative Technical HUD Labels (subtle, low contrast) */}
      <div
        className="absolute top-24 right-6 sm:top-28 sm:right-10 z-10 hidden sm:flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#7F8987] uppercase pointer-events-none"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#3E7778] animate-pulse" />
        <span>SYSTEM MAP · LIVE CONNECTIONS</span>
      </div>

      <div
        className="absolute bottom-12 right-6 sm:right-10 z-10 hidden md:block text-[10px] font-mono tracking-widest text-[#7F8987] uppercase pointer-events-none text-right"
        aria-hidden="true"
      >
        <span>DATA FLOW</span>
        <span className="block text-[#3E7778]/70 mt-0.5">LATENCY &lt; 0.8S</span>
      </div>

      {/* Main Spacious Editorial Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl my-auto">
        <div className="max-w-[960px]">
          {/* Large Editorial Headline (No redundant overline kicker) */}
          <h1 className="text-[38px] sm:text-[52px] md:text-[66px] lg:text-[78px] xl:text-[88px] font-extrabold text-[#1D2528] tracking-[-0.04em] leading-[0.93] sm:leading-[0.95] mb-8 break-words uppercase">
            Цифровые системы,<br className="hidden sm:inline" />{' '}
            которые связывают бизнес<br className="hidden sm:inline" />{' '}
            <span className="text-[#3E7778]">в единый контур.</span>
          </h1>

          {/* Restrained Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#5D686A] leading-relaxed max-w-[620px] mb-10 sm:mb-12 font-normal">
            VOLTRENA связывает сайт, рекламу, CRM, автоматизацию и данные, чтобы обращения доходили до нужных людей, а результат можно было проследить.
          </p>

          {/* Action Row: 1 Primary Button + 1 Secondary Text Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#C9854D] hover:bg-[#D99A62] text-[#FFFDF8] font-bold text-sm sm:text-base tracking-wide transition-all shadow-md shadow-[#C9854D]/20 hover:shadow-lg hover:shadow-[#C9854D]/30 hover:scale-[1.02] active:scale-[0.98] min-h-[48px]"
            >
              Подобрать систему
            </Link>

            <Link
              href="/cases/"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#5D686A] hover:text-[#1D2528] transition-colors py-2 group/link"
            >
              <span>Посмотреть кейсы</span>
              <ArrowRight className="w-4 h-4 text-[#3E7778] group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl pt-6">
        <button
          type="button"
          onClick={handleScrollToNext}
          className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#7F8987] hover:text-[#1D2528] transition-colors uppercase py-1 focus:outline-none"
        >
          <span>SCROLL TO EXPLORE</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
