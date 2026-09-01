'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { XCircle, CheckCircle2 } from 'lucide-react'

const breakdowns = [
  {
    problem: 'Реклама приводит трафик, но сайт не передаёт нужный контекст',
    consequence: 'Посетитель видит общие фразы, не находит решения и уходит, а бюджет списывается впустую.',
    solution: 'Связка семантики, посадочной страницы и формы под точный интент пользователя.',
  },
  {
    problem: 'Заявка попадает менеджеру, но CRM не назначает следующий шаг',
    consequence: 'Лид остывает, перезвон откладывается, а регламенты ведения клиентов нарушаются.',
    solution: 'Автоматическое распределение с дедлайнами, контекстом диалога и Telegram-алертом.',
  },
  {
    problem: 'Продажа состоялась, но источник и экономика не возвращаются в аналитику',
    consequence: 'Маркетинг не понимает, какие ключевые фразы принесли выручку, и тратит бюджет наугад.',
    solution: 'Сквозная передача данных из CRM в отчёты о реальной стоимости и окупаемости сделок.',
  },
]

export default function HomeBreakdownsVsSystem() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="СИСТЕМНЫЙ ПОДХОД"
            title="Рост теряется на стыках между инструментами."
            subtitle="Большинство потерь происходят не из-за плохой технологии, а из-за отсутствия связей между подрядчиками и сервисами."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 space-y-4 max-w-5xl mx-auto">
          {breakdowns.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 80}>
              <div className="p-5 sm:p-6 rounded-2xl bg-bg-surface border border-border/80 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* Breakpoint issue */}
                <div className="lg:col-span-6 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1">
                      {item.problem}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {item.consequence}
                    </p>
                  </div>
                </div>

                {/* System Fix */}
                <div className="lg:col-span-6 p-4 rounded-xl bg-bg-primary border border-accent/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-0.5 font-semibold">
                      Решение VOLTRENA:
                    </span>
                    <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
