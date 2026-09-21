'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowUpRight } from 'lucide-react';
import { digitalProducts } from '@/data/digital-products';

export default function DigitalGrowthContours() {
  return (
    <section
      id="digital-growth-contours"
      className="py-20 md:py-28 bg-[#111315] relative overflow-hidden border-t border-[#2B3330] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Large Editorial Transition Header */}
        <ScrollReveal>
          <div className="mb-14 sm:mb-20 max-w-4xl">
            <div className="text-xs font-mono tracking-widest text-[#648D8B] uppercase mb-4">
              АРХИТЕКТУРА РОСТА
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F2EFE6] tracking-[-0.04em] leading-[0.98] uppercase">
              Система — не набор услуг.{' '}
              <span className="text-[#D3C6A4]">Единый контур роста.</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#A8ADA8] mt-5 max-w-2xl leading-relaxed">
              Каждый контур решает конкретную задачу бизнеса и бесшовно передаёт данные на следующий уровень.
            </p>
          </div>
        </ScrollReveal>

        {/* Large Editorial List with Clean Dividers (No ordinal numbers) */}
        <div className="border-t border-[#2B3330]">
          {digitalProducts.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 40}>
              <Link
                href={`/solutions/${product.slug}/`}
                className="group flex flex-col md:flex-row md:items-center justify-between py-7 sm:py-8 border-b border-[#2B3330] hover:border-[#648D8B]/60 transition-colors gap-4"
              >
                {/* Left: Main Title and Badge */}
                <div className="md:w-5/12">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F2EFE6] group-hover:text-[#D3C6A4] transition-colors flex items-center gap-3">
                    <span>{product.title}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.components.slice(0, 3).map((comp) => (
                      <span
                        key={comp}
                        className="text-[10px] font-mono text-[#737B77] uppercase tracking-wider"
                      >
                        {comp} ·
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center: Clean 1-line explanation */}
                <div className="md:w-5/12 text-sm text-[#A8ADA8] leading-relaxed group-hover:text-[#F2EFE6] transition-colors">
                  {product.summary}
                </div>

                {/* Right: Technical Link / Arrow */}
                <div className="md:w-2/12 flex items-center md:justify-end">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#648D8B] group-hover:text-[#D3C6A4] transition-colors py-1">
                    <span>КОНТУР</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
