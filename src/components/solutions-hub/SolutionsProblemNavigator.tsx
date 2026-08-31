'use client'

import React, { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const navigatorItems = [
  {
    id: 'leads',
    question: 'Нужны новые заявки',
    solutionTitle: 'Lead Generation System',
    desc: 'Комплексный запуск контекстной рекламы, конверсионного сайта, CRM и сквозной аналитики.',
    result: 'Поток квалифицированных лидов с прозрачной стоимостью обращения.',
  },
  {
    id: 'b2b',
    question: 'Нужны B2B-клиенты',
    solutionTitle: 'B2B Lead Machine',
    desc: 'Сбор баз компаний, парсинг реестров, обогащение контактов и автоматизированный аутрич.',
    result: 'Прямой выход на ЛПР целевых компаний без ожидания органики.',
  },
  {
    id: 'speed',
    question: 'Менеджеры медленно отвечают',
    solutionTitle: 'AI Sales Manager',
    desc: 'Интеллектуальная квалификация заявок нейросетью, подготовка черновиков ответов и роутинг.',
    result: 'Первый ответ клиенту за 1 минуту 24/7 и разгрузка отдела продаж.',
  },
  {
    id: 'lost',
    question: 'Лиды теряются в процессе',
    solutionTitle: 'Sales Automation System',
    desc: 'Четкие регламенты воронки CRM, автозадачи менеджерам, контроль сроков и документов.',
    result: 'Ни одна заявка не остаётся без назначенного следующего шага.',
  },
  {
    id: 'market',
    question: 'Нужно следить за рынком',
    solutionTitle: 'Digital Intelligence',
    desc: 'Автоматический мониторинг цен конкурентов, динамики остатков и мгновенные алерты в Telegram.',
    result: 'Актуальные рыночные данные для быстрых ценовых и стратегических решений.',
  },
]

export default function SolutionsProblemNavigator() {
  const [activeId, setActiveId] = useState(navigatorItems[0].id)
  const activeItem = navigatorItems.find((item) => item.id === activeId) || navigatorItems[0]

  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="НАВИГАТОР РЕШЕНИЙ"
            title="Что сейчас мешает бизнесу расти?"
            subtitle="Выберите ключевое узкое место в ваших продажах — мы покажем готовую систему для его устранения."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Question Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {navigatorItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border ${
                  activeId === item.id
                    ? 'bg-accent text-bg-primary border-accent font-bold shadow-lg shadow-accent/20'
                    : 'bg-bg-surface text-text-secondary border-border hover:border-accent/40 hover:text-text-primary'
                }`}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Active Card */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-3xl bg-bg-surface border border-accent/40 shadow-xl">
              <span className="text-xs font-mono text-accent uppercase tracking-widest font-semibold block mb-2">
                РЕКОМЕНДУЕМАЯ СИСТЕМА
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {activeItem.solutionTitle}
              </h3>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                {activeItem.desc}
              </p>
              <div className="p-4 rounded-xl bg-bg-primary border border-border flex items-start gap-3 mb-6">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-text-primary font-medium">
                  <strong>Результат:</strong> {activeItem.result}
                </span>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-bg-primary font-bold text-xs md:text-sm hover:opacity-90 transition-opacity"
              >
                <span>Подобрать и рассчитать решение</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
