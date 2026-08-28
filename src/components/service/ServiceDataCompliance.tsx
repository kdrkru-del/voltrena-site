'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServiceDataCompliance() {
  const compliancePoints = [
    "учитываем доступность источника;",
    "работаем с публичной информацией;",
    "не обещаем доступ к закрытым данным;",
    "учитываем технические ограничения;",
    "учитываем применимые правила и законодательство.",
  ];

  return (
    <section className="py-20 bg-bg-primary relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Part 1: Quality over Quantity */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                Качество данных важнее количества.
              </h2>
              <p className="text-text-secondary text-lg max-w-3xl mx-auto">
                Ценность базы определяется не размером, а тем, насколько данные пригодны для реальной бизнес-задачи.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex flex-col items-center opacity-50 relative">
                <span className="text-4xl md:text-5xl font-bold text-text-secondary line-through mb-2 decoration-2">
                  1 000 000
                </span>
                <span className="text-text-secondary uppercase tracking-widest text-sm">
                  сырых строк
                </span>
              </div>
              
              <div className="text-text-secondary text-2xl font-light hidden md:block">VS</div>
              
              <div className="flex flex-col items-center bg-bg-surface p-8 rounded-2xl border border-accent shadow-lg">
                <span className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  10 000
                </span>
                <span className="text-text-primary uppercase tracking-widest text-sm font-medium">
                  структурированных записей
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Part 2: Open Data & Compliance */}
        <div className="max-w-4xl mx-auto bg-bg-secondary rounded-3xl p-8 md:p-12 border border-border">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-bg-surface rounded-2xl flex items-center justify-center mb-6 border border-border">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Работаем с открытыми данными.
                </h3>
              </div>
              
              <div className="md:w-2/3">
                <ul className="space-y-4">
                  {compliancePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1 opacity-70 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-text-secondary text-lg">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
