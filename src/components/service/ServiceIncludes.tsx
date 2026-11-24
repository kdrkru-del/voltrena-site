'use client';

import React from 'react';
import { Check, Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Band } from '@/components/service/Band';

export interface IncludedItem {
  label: string;
}

export interface ServiceIncludesProps {
  included: { base: IncludedItem[]; extra: IncludedItem[] };
}

export default function ServiceIncludes({ included }: ServiceIncludesProps) {
  return (
    <Band tone="dark">
      <SectionHeading tag="Состав работ" title="Что входит в разработку." align="left" tone="dark" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <ScrollReveal className="lg:col-span-3">
          <div className="h-full rounded-3xl bg-white/[0.05] p-6 ring-1 ring-white/10 md:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold tracking-tight text-[#F4F1EA]">Базовая комплектация</h3>
              <span className="rounded-md bg-[#3E7778]/25 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9FD0CB]">входит всегда</span>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {included.base.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#E6EAE9]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3E7778] text-white">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="lg:col-span-2">
          <div className="h-full rounded-3xl border border-dashed border-white/20 p-6 md:p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold tracking-tight text-[#F4F1EA]">Дополнительно</h3>
              <span className="rounded-md bg-[#C9854D]/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#D99A62]">по задаче</span>
            </div>
            <ul className="mt-6 space-y-3.5">
              {included.extra.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#A9B3B1]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ring-[#D99A62]/60 text-[#D99A62]">
                    <Plus className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </Band>
  );
}
