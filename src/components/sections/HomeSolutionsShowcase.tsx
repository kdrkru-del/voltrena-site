'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ArrowRight, Layers, ArrowUpRight } from 'lucide-react';
import { digitalProducts } from '@/data/digital-products';

export default function HomeSolutionsShowcase() {
  const featured = digitalProducts.slice(0, 4);

  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-[#0D1012] relative overflow-hidden border-t border-[#232B2D] scroll-mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
              <Layers className="w-3.5 h-3.5 text-[#5A9692]" />
              <span>Каталог систем</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2EFE6] tracking-tight mb-4">
              Готовые цифровые системы для бизнеса.
            </h2>
            <p className="text-[#AAB4B1] text-base sm:text-lg">
              Выберите результат под задачу компании и запустите первую рабочую очередь без лишних затрат.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featured.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 60}>
              <SpotlightCard className="h-full p-6 sm:p-8 rounded-2xl bg-[#131719] border border-[#232B2D] hover:border-[#384547] transition-colors flex flex-col justify-between shadow-xl group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider">
                      Контур 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono text-[#7A8885]">
                      Под ключ
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F2EFE6] mb-3 group-hover:text-[#F2EFE6] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#AAB4B1] leading-relaxed mb-6">
                    {product.summary}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#232B2D] flex flex-wrap gap-2 mb-5">
                    {product.components.slice(0, 4).map((component) => (
                      <span
                        key={component}
                        className="px-2.5 py-1 rounded-md bg-[#0D1012] border border-[#232B2D] text-[11px] font-mono text-[#7A8885]"
                      >
                        {component}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/solutions/${product.slug}/`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5A9692] hover:text-[#7EB5B1] group-hover:translate-x-1 transition-all min-h-[44px]"
                  >
                    <span>Открыть архитектуру решения</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-10 text-center">
            <Link
              href="/solutions/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14181A] border border-[#2B3537] hover:border-[#5A9692] text-[#F2EFE6] font-semibold text-xs sm:text-sm transition-all min-h-[44px] shadow-md hover:scale-[1.02]"
            >
              <span>Смотреть все 5 цифровых систем</span>
              <ArrowRight className="w-4 h-4 text-[#5A9692]" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
