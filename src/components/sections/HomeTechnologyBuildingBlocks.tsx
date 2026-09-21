'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { serviceLinks } from '@/data/navigation';

export default function HomeTechnologyBuildingBlocks() {
  return (
    <section className="py-20 md:py-28 bg-[#0D1012] relative overflow-hidden border-t border-[#232B2D]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
              <Cpu className="w-3.5 h-3.5 text-[#5A9692]" />
              <span>Технологические модули</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2EFE6] tracking-tight mb-4">
              Модули цифровых систем.
            </h2>
            <p className="text-[#AAB4B1] text-base sm:text-lg">
              Сайт, реклама, CRM, AI, парсинг и аналитика, объединяемые в единую управляемую инфраструктуру компании.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceLinks.map((service, index) => (
            <ScrollReveal key={service.href} delay={index * 30}>
              <SpotlightCard className="h-full min-w-0 rounded-xl bg-[#131719] border border-[#232B2D] p-5 sm:p-6 flex flex-col justify-between hover:border-[#384547] transition-colors group">
                <div>
                  <h3 className="text-lg font-bold text-[#F2EFE6] mb-2 break-words">
                    {service.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#AAB4B1] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={`${service.href}/`}
                  className="mt-5 pt-3 border-t border-[#232B2D] inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold text-[#5A9692] hover:text-[#7EB5B1] transition-colors"
                >
                  <span>Как используется в системе</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <div className="mt-10 text-center">
            <Link
              href="/services/"
              className="inline-flex min-h-[44px] items-center gap-2 px-6 py-3 rounded-xl border border-[#2B3537] bg-[#14181A] hover:border-[#5A9692] text-xs sm:text-sm font-semibold text-[#F2EFE6] transition-all shadow-md hover:scale-[1.02]"
            >
              <span>Все технологии и услуги</span>
              <ArrowRight className="w-4 h-4 text-[#5A9692]" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
