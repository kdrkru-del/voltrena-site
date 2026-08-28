'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

export interface IncludedItem {
  label: string;
}

export interface ServiceIncludesProps {
  included: { base: IncludedItem[]; extra: IncludedItem[] };
}

export default function ServiceIncludes({ included }: ServiceIncludesProps) {
  return (
    <section className="py-section bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Что входит в разработку." align="left" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Base */}
          <ScrollReveal direction="up" delay={0}>
            <div className="bg-bg-surface border border-border rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-text-primary mb-6">Базовая комплектация</h3>
              <ul className="space-y-4">
                {included.base.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[10px] shrink-0 mt-1">
                      ✓
                    </div>
                    <span className="text-text-primary">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Extra */}
          <ScrollReveal direction="up" delay={100}>
            <div className="bg-bg-primary border border-border-light border-dashed rounded-2xl p-8 h-full relative">
              <span className="font-mono text-xs text-accent uppercase mb-4 block tracking-wider">
                Дополнительные опции
              </span>
              <ul className="space-y-4">
                {included.extra.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[10px] shrink-0 mt-1">
                      ✓
                    </div>
                    <span className="text-text-secondary">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
