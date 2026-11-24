'use client';

import React, { useMemo, useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Band, pad } from '@/components/service/Band';
import { cn } from '@/lib/utils';

export interface EcosystemItem {
  id: string;
  label: string;
  description: string;
  angle?: number;
}

export interface ServiceEcosystemProps {
  items: EcosystemItem[];
  id?: string;
  tag?: string;
  title?: string;
  description?: string;
  centerLabel?: string;
}

export default function ServiceEcosystem({
  items,
  id,
  tag,
  title = 'Сайт может работать гораздо больше.',
  description,
  centerLabel = 'САЙТ',
}: ServiceEcosystemProps) {
  const [active, setActive] = useState<string | null>(null);

  const positioned = useMemo(
    () =>
      items.map((item, index) => {
        const deg = item.angle ?? (360 / items.length) * index;
        const rad = (deg - 90) * (Math.PI / 180);
        return { ...item, x: 50 + 41 * Math.cos(rad), y: 50 + 41 * Math.sin(rad) };
      }),
    [items]
  );

  return (
    <Band tone="sand" id={id}>
      <SectionHeading tag={tag} title={title} subtitle={description} align="center" />

      {/* Desktop: orbit diagram on a dark stage */}
      <div className="relative mx-auto hidden h-[560px] max-w-4xl overflow-hidden rounded-[2rem] bg-[#1D2528] shadow-[0_40px_90px_-40px_rgba(29,37,40,0.8)] lg:block">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_80%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.35),transparent_65%)]" aria-hidden="true" />

        <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
          {positioned.map((it) => (
            <line
              key={it.id}
              x1="50%"
              y1="50%"
              x2={`${it.x}%`}
              y2={`${it.y}%`}
              stroke={active === it.id ? '#D99A62' : 'rgba(159,208,203,0.32)'}
              strokeWidth={active === it.id ? 1.75 : 1.25}
              strokeDasharray="4 5"
              className="transition-all duration-300"
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#2C3A3E] to-[#141B1D] text-center shadow-[0_0_60px_rgba(62,119,120,0.5)] ring-1 ring-[#6FB0AB]/40">
          <span className="px-3 font-mono text-[11px] font-bold uppercase tracking-wider text-[#F4F1EA]">{centerLabel}</span>
        </div>

        {positioned.map((it) => (
          <button
            type="button"
            key={it.id}
            className="group absolute z-10 focus-visible:outline-none"
            style={{ top: `${it.y}%`, left: `${it.x}%`, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setActive(it.id)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(it.id)}
            onBlur={() => setActive(null)}
            aria-describedby={`eco-${it.id}`}
          >
            <span
              className={cn(
                'block whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold ring-1 transition-all duration-300',
                active === it.id ? 'scale-105 bg-[#F4F1EA] text-[#1D2528] ring-[#D99A62]' : 'bg-white/[0.06] text-[#E6EAE9] ring-white/15'
              )}
            >
              {it.label}
            </span>
            <span
              id={`eco-${it.id}`}
              className={cn(
                'pointer-events-none absolute z-20 w-max max-w-[210px] rounded-xl bg-[#FFFDF8] p-3 text-left text-xs leading-relaxed text-[#5D686A] shadow-xl ring-1 ring-[#D7D3C8] transition-all duration-300',
                it.x > 50 ? 'left-full ml-3' : 'right-full mr-3',
                it.y > 50 ? 'bottom-full mb-2' : 'top-full mt-2',
                active === it.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              )}
            >
              {it.description}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile / tablet: cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
        <div className="sm:col-span-2 flex items-center gap-3 rounded-2xl bg-[#1D2528] p-4 text-[#F4F1EA]">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2C3A3E] to-[#141B1D] font-mono text-[10px] font-bold ring-1 ring-[#6FB0AB]/40">
            {centerLabel}
          </span>
          <span className="text-sm text-[#A9B3B1]">Центр системы — к нему подключается всё остальное</span>
        </div>
        {items.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 50}>
            <div className="h-full rounded-2xl bg-[#FFFDF8] p-4 ring-1 ring-[#D7D3C8]">
              <span className="font-mono text-xs text-[#C9854D]">{pad(i + 1)}</span>
              <h3 className="mt-1 text-base font-extrabold text-[#1D2528]">{item.label}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#5D686A]">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Band>
  );
}
