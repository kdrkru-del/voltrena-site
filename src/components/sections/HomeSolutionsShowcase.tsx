'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const keySolutions = [
  {
    id: 'digital-sales',
    tag: 'ПРИВЛЕЧЕНИЕ & САЙТ',
    title: 'Система привлечения клиентов',
    problem: 'Когда нужны новые целевые обращения, а разрозненная реклама не окупается.',
    outcome: 'Реклама, посадочная страница и CRM работают как единый контур со сквозной аналитикой.',
    components: ['Яндекс Директ', 'Конверсионный сайт', 'CRM', 'Сквозная аналитика'],
    href: '/solutions/#solution-digital-sales',
  },
  {
    id: 'b2b-pipeline',
    tag: 'B2B ПРОДАЖИ',
    title: 'Система B2B-продаж',
    problem: 'Когда входящего спроса мало и нужен регулярный выход на целевые компании и ЛПР.',
    outcome: 'Сбор баз компаний, обогащение контактов ЛПР и автоматизированная передача в CRM.',
    components: ['Парсинг баз', 'Верификация ЛПР', 'AI-скоринг', 'Outbound-сценарии'],
    href: '/solutions/#solution-b2b-pipeline',
  },
  {
    id: 'lead-operations',
    tag: 'ОБРАБОТКА & CRM',
    title: 'Квалификация и обработка заявок',
    problem: 'Когда менеджеры тратят время на нецелевые запросы и долго отвечают клиентам.',
    outcome: 'Моментальная AI-квалификация лидов и передача менеджеру готового контекста диалога.',
    components: ['AI-ассистент', 'Telegram-интерфейс', 'Маршрутизация', 'CRM-воронка'],
    href: '/solutions/#solution-lead-operations',
  },
  {
    id: 'ai-operations',
    tag: 'АВТОМАТИЗАЦИЯ & ДАННЫЕ',
    title: 'Автоматизация процессов и данных',
    problem: 'Когда рутинные операции с документами, счетами или сбор данных отнимают рабочее время.',
    outcome: 'Программное выполнение рутины, мониторинг рынка и своевременные Telegram-алерты.',
    components: ['Workflow (n8n)', 'Генерация документов', 'Боты для команды', 'Мониторинг цен'],
    href: '/solutions/#solution-ai-operations',
  },
]

export default function HomeSolutionsShowcase() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ГОТОВЫЕ РЕШЕНИЯ"
            title="Связанные цифровые системы под бизнес-задачи."
            subtitle="Не разрозненные услуги, а готовые архитектурные решения с измеримым результатом."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {keySolutions.map((sol, idx) => (
            <ScrollReveal key={sol.id} delay={idx * 60}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-all flex flex-col justify-between shadow-lg group">
                <div>
                  <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2 font-semibold">
                    {sol.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    <strong className="text-text-primary font-medium">Задача: </strong>
                    {sol.problem}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    <strong className="text-text-primary font-medium">Результат: </strong>
                    {sol.outcome}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2 mb-6">
                    {sol.components.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-text-secondary"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light group-hover:translate-x-1 transition-transform min-h-[44px]"
                  >
                    <span>Изучить состав решения</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Catalog CTA link */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/solutions/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
            >
              <span>Посмотреть все пакетные решения</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
