'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ServiceDataConfigurator() {
  const formulaItems = [
    { label: 'Источники', sub: 'Сайты, API, каталоги' },
    { label: 'Поля', sub: 'Что именно собираем' },
    { label: 'Частота', sub: 'Раз в день/неделю' },
    { label: 'Правила', sub: 'Фильтрация и чистка' },
    { label: 'Формат', sub: 'CSV, JSON, База' },
  ];

  return (
    <section className="py-20 bg-bg-secondary relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <SectionHeading title="Разрабатываем систему под конкретную задачу." />
            <p className="text-text-secondary text-lg mt-6">
              Нет одного универсального парсера. Для каждого проекта определяются:
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 flex-wrap justify-center">
              {formulaItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="bg-bg-surface border border-border rounded-xl p-6 flex flex-col items-center justify-center min-w-[160px] text-center shadow-sm w-full md:w-auto">
                    <span className="text-text-primary font-medium text-lg mb-1">{item.label}</span>
                    <span className="text-text-secondary text-sm">{item.sub}</span>
                  </div>
                  {index < formulaItems.length - 1 && (
                    <span className="text-accent text-3xl font-light">+</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="text-accent text-3xl font-light my-4 xl:my-0">=</div>

            <div className="bg-bg-surface border-2 border-accent rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform hover:scale-105 w-full xl:w-auto">
              <span className="text-accent font-bold text-2xl mb-2">Custom Data System</span>
              <span className="text-text-primary text-sm">Уникальное решение для вас</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
