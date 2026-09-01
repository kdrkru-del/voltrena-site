'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function AboutFounder() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="p-8 sm:p-12 rounded-3xl bg-bg-surface border border-border/80 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo of Roman */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-bg-primary border border-border">
                  <img
                    src="/voltrena-site/images/team/roman-kornev.jpg"
                    alt="Роман Корнев — Founder VOLTRENA Digital"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Text from 1st person */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-2">
                    ОТ ОСНОВАТЕЛЯ
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-6">
                    Ответственность не делегируется.
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                    <p>
                      Я лично участвую в стратегии ключевых проектов VOLTRENA Digital и контролирую, чтобы итоговое решение соответствовало бизнес-задаче, ради которой мы начали работу.
                    </p>
                    <p>
                      Мне не близка модель агентства, где клиент сначала общается с сильным специалистом по продажам, после подписания договора получает менеджера, а затем перестаёт понимать, кто на самом деле отвечает за результат.
                    </p>
                    <p>
                      Поэтому мы строим другую модель: небольшая команда, прямое общение, понятная ответственность и глубокое погружение в проект.
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-border/60">
                  <span className="font-bold text-base sm:text-lg text-text-primary block">
                    Роман Корнев
                  </span>
                  <span className="font-mono text-xs text-accent">
                    Founder, VOLTRENA Digital
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
