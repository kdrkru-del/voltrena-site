'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import LeadForm from '@/components/ui/LeadForm';

export interface ServiceCTAProps {
  title?: string;
  description?: string;
  benefits?: string[];
}

export default function ServiceCTA({
  title = 'Расскажите, какой сайт вам нужен.',
  description = 'Опишите задачу — мы предложим структуру, подход и систему вокруг проекта.',
  benefits = [
    'Ответим в течение рабочего дня',
    'Без навязчивых продаж',
    'Предложим конкретное решение',
  ],
}: ServiceCTAProps) {
  return (
    <section id="contact" className="py-section bg-bg-primary relative overflow-hidden scroll-mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column */}
          <ScrollReveal direction="right" delay={0}>
            <div>
              <h2 className="text-heading md:text-display font-bold text-text-primary mb-4">
                {title}
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                {description}
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[12px] shrink-0">
                      ✓
                    </div>
                    <span className="text-text-primary font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right Column */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="bg-bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-xl">
              <LeadForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
