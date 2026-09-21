'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import HeroPointerGrid from '@/components/ui/HeroPointerGrid';
import HeroSystemJourney from '@/components/sections/HeroSystemJourney';
import { digitalProducts } from '@/data/digital-products';

export default function Hero() {
  const handleScrollToDemo = () => {
    const demoEl = document.getElementById('system-demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 bg-[#0D1012] text-[#F2EFE6] overflow-hidden border-b border-[#232B2D]">
      {/* Background Interactive Pointer Grid & Subtle Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <HeroPointerGrid className="absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_15%,rgba(62,119,120,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_75%,rgba(201,133,77,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1012]/40 to-[#0D1012]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* Left Column: Clear Permanent Heading, Subtitle & CTAs */}
          <div className="xl:col-span-6 min-w-0">
            {/* Permanent Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-black text-[#F2EFE6] tracking-tight leading-[1.08] mb-5 break-words hyphens-auto">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-4 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15 block w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5A9692] animate-pulse" />
                Цифровые системы · Инженерный контур
              </span>
              От первого клика до сделки — одна управляемая система.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#AAB4B1] leading-relaxed max-w-xl mb-8 font-normal">
              VOLTRENA связывает сайт, рекламу, CRM и автоматизацию, чтобы обращения попадали к нужным людям, а результат можно было проследить.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                className="w-full sm:w-auto"
                aria-label="Подобрать систему"
              >
                Подобрать систему
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#system-demo"
                onClick={handleScrollToDemo}
                className="w-full sm:w-auto border-[#344042] text-[#EAE6DD] hover:border-[#5A9692] hover:text-[#F2EFE6] hover:bg-[#182022]"
              >
                Посмотреть, как работает
              </Button>
            </div>

            {/* Quick Digital Products Navigation (Preserves all 5 links for QA suite) */}
            <div className="pt-6 border-t border-[#232B2D]/80">
              <div className="text-[11px] font-mono text-[#7F8987] uppercase tracking-wider mb-3">
                Контуры цифрового роста:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {digitalProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/solutions/${product.slug}/`}
                    className="group flex items-center justify-between gap-2.5 rounded-xl border border-[#232B2D] bg-[#131719]/80 px-3.5 py-2.5 hover:border-[#3E7778] hover:bg-[#1A2023] transition-colors min-h-[44px]"
                  >
                    <span className="text-xs font-semibold text-[#D7D3C8] group-hover:text-[#F2EFE6] truncate">
                      {product.title}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#7A8885] group-hover:text-[#5A9692] shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Living System Demonstration */}
          <div id="system-demo" className="xl:col-span-6 min-w-0 scroll-mt-28">
            <HeroSystemJourney />
          </div>

        </div>
      </div>
    </section>
  );
}
