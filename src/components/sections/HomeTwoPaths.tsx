'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Layers, Wrench } from 'lucide-react'

export default function HomeTwoPaths() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="МАРШРУТИЗАЦИЯ"
            title="Начните с результата или с конкретной услуги."
            subtitle="Мы работаем в двух форматах в зависимости от того, как сформулирована ваша задача."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Path 1: Solutions */}
          <ScrollReveal delay={100}>
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-accent/40 bg-gradient-to-b from-bg-surface to-bg-secondary flex flex-col justify-between relative overflow-hidden shadow-xl group">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-3">
                  <Layers className="w-4 h-4" />
                  <span>КОМПЛЕКСНЫЕ РЕШЕНИЯ</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Идти от бизнес-задачи
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Для тех, кому нужен измеримый результат (поток заявок, B2B-сделки, ускорение обработки), без необходимости самостоятельно подбирать стек технологий.
                </p>
                <div className="p-3.5 rounded-xl bg-bg-primary border border-accent/20 text-xs font-mono text-text-primary mb-6">
                  Проектируем связанную систему под результат и запускаем её поэтапно.
                </div>
              </div>

              <Link
                href="/solutions/"
                className="inline-flex items-center justify-between p-3.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
              >
                <span>Смотреть решения</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Path 2: Services */}
          <ScrollReveal delay={200}>
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border hover:border-border-light flex flex-col justify-between shadow-lg group">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted font-semibold mb-3">
                  <Wrench className="w-4 h-4 text-accent" />
                  <span>ОТДЕЛЬНЫЕ УСЛУГИ</span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Идти от конкретной компетенции
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Для тех, кто точно знает требуемый участок работы: создать конверсионный сайт, настроить контекстную рекламу, внедрить CRM или автоматизировать рутину.
                </p>
                <div className="p-3.5 rounded-xl bg-bg-primary border border-border text-xs font-mono text-text-secondary mb-6">
                  Подключаем конкретную компетенцию: сайт, рекламу, CRM, автоматизацию или данные.
                </div>
              </div>

              <Link
                href="/services/"
                className="inline-flex items-center justify-between p-3.5 rounded-xl bg-bg-primary border border-border hover:border-accent/40 text-text-primary font-semibold text-xs sm:text-sm transition-colors min-h-[44px]"
              >
                <span>Смотреть услуги</span>
                <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
