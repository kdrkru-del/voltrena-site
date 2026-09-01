'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const principles = [
  {
    num: '01',
    title: 'Архитектура до дизайна',
    desc: 'Сначала фиксируем бизнес-логику, пользовательский путь, данные и связи между системами. Только после этого проектируем интерфейс.',
  },
  {
    num: '02',
    title: 'Прямой контакт',
    desc: 'Клиент должен иметь возможность обсуждать ключевые решения со специалистами, которые непосредственно работают над системой.',
  },
  {
    num: '03',
    title: 'Прозрачная инфраструктура',
    desc: 'Клиент получает доступ к инфраструктуре проекта, документации и результатам разработки — без искусственной привязки к агентству.',
  },
  {
    num: '04',
    title: 'Прагматичный AI',
    desc: 'Мы используем AI там, где он действительно экономит время, снижает стоимость операции или повышает качество процесса.',
    punch: 'AI — инструмент. Не стратегия.',
  },
]

export default function AboutPrinciples() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="КАК МЫ РАБОТАЕМ"
            title="Несколько принципов, от которых мы не отступаем."
            subtitle="Инженерные стандарты и правила взаимодействия, на которых строится каждый наш проект."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {principles.map((p, idx) => (
            <ScrollReveal key={p.num} delay={idx * 70}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold mb-3 block">
                    ПРИНЦИП {p.num}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {p.punch && (
                  <div className="pt-4 mt-4 border-t border-border/50">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {p.punch}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
