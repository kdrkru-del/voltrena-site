'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Check } from 'lucide-react'

const problems = [
  {
    id: 'leads',
    question: 'Нужны новые заявки и продажи?',
    recommendations: [
      { title: 'Яндекс Директ', desc: 'Быстрый запуск целевой рекламы по ключевым фразам', href: '/services/yandex-direct' },
      { title: 'SEO / GEO & AI Search', desc: 'Органический трафик из поиска и генеративных ответов', href: '/services/seo-geo' },
      { title: 'B2B Лидогенерация', desc: 'Прямой поиск компаний и выход на ЛПР', href: '/services/b2b-lead-generation' },
    ],
  },
  {
    id: 'lost',
    question: 'Есть заявки, но они теряются?',
    recommendations: [
      { title: 'Внедрение CRM', desc: 'Единая база клиентов, воронка и контроль звонков', href: '/services/crm' },
      { title: 'Telegram боты', desc: 'Мгновенное оповещение дежурных менеджеров', href: '/services/telegram-bots' },
      { title: 'ИИ и автоматизация', desc: 'Автоматическая квалификация и распределение лидов', href: '/services/ai-automation' },
    ],
  },
  {
    id: 'interface',
    question: 'Нужен современный сайт или интерфейс?',
    recommendations: [
      { title: 'Создание сайтов', desc: 'Конверсионные лендинги и корпоративные порталы', href: '/services/web-development' },
      { title: 'Telegram Mini Apps', desc: 'Полноценные веб-приложения внутри Telegram', href: '/services/telegram-bots' },
    ],
  },
  {
    id: 'data',
    question: 'Нужны данные о рынке и конкурентах?',
    recommendations: [
      { title: 'Парсинг данных', desc: 'Сбор открытых данных и мониторинг цен конкурентов', href: '/services/web-scraping' },
      { title: 'Сквозная аналитика', desc: 'Дашборды по окупаемости каналов и ROMI', href: '/services/analytics' },
    ],
  },
  {
    id: 'routine',
    question: 'Слишком много повторяющейся рутины?',
    recommendations: [
      { title: 'ИИ и автоматизация', desc: 'Автоматические workflow и AI-ассистенты', href: '/services/ai-automation' },
      { title: 'Внедрение CRM', desc: 'Автогенерация счетов, договоров и КП в 1 клик', href: '/services/crm' },
      { title: 'Telegram боты', desc: 'Команды и быстрые согласования со смартфона', href: '/services/telegram-bots' },
    ],
  },
]

export default function ServicesProblemNavigator() {
  const [activeTab, setActiveTab] = useState(problems[0].id)

  const activeProblem = problems.find((p) => p.id === activeTab) || problems[0]

  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="НАВИГАТОР"
            title="Не знаете, какая услуга нужна?"
            subtitle="Выберите вашу текущую бизнес-задачу — мы покажем подходящие инструменты."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-5xl mx-auto">
          {/* Question Tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-10">
            {problems.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 border ${
                  activeTab === p.id
                    ? 'bg-accent text-bg-primary border-accent font-bold shadow-lg shadow-accent/20'
                    : 'bg-bg-surface text-text-secondary border-border hover:border-accent/40 hover:text-text-primary'
                }`}
              >
                {p.question}
              </button>
            ))}
          </div>

          {/* Active Tab Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeProblem.recommendations.map((rec) => (
              <Link
                key={rec.title}
                href={rec.href}
                className="p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {rec.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-accent font-semibold">
                  <span>Перейти к услуге</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
