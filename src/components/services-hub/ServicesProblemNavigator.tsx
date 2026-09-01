'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

interface ProblemOption {
  id: string
  label: string
  primaryService: { title: string; href: string; reason: string }
  secondaryServices: string[]
  expectedOutcome: string
}

const problemOptions: ProblemOption[] = [
  {
    id: 'inbound-leads',
    label: 'Нужно быстро получать входящие заявки',
    primaryService: {
      title: 'Яндекс Директ',
      href: '/services/yandex-direct',
      reason: 'Быстрый запуск целевой контекстной рекламы по сформированному поисковому спросу.',
    },
    secondaryServices: ['Создание сайтов', 'Внедрение CRM', 'Сквозная аналитика'],
    expectedOutcome: 'Управляемый поток входящих обращений с прозрачной стоимостью за лид.',
  },
  {
    id: 'organic-geo',
    label: 'Нужен органический спрос из поиска и AI-ответов',
    primaryService: {
      title: 'SEO / GEO & AI Search',
      href: '/services/seo-geo',
      reason: 'Оптимизация под алгоритмы классического поиска и генеративные AI-выдачи.',
    },
    secondaryServices: ['Создание сайтов', 'Сквозная аналитика'],
    expectedOutcome: 'Стабильная бесплатная видимость сайта по целевым коммерческим запросам.',
  },
  {
    id: 'b2b-outbound',
    label: 'Нужен выход на B2B-компании',
    primaryService: {
      title: 'B2B Лидогенерация',
      href: '/services/b2b-lead-generation',
      reason: 'Точечный сбор баз предприятий, поиск прямых контактов ЛПР и запуск аутрича.',
    },
    secondaryServices: ['Парсинг данных', 'Внедрение CRM'],
    expectedOutcome: 'Прямой контакт с лицами, принимающими решения в целевых компаниях.',
  },
  {
    id: 'new-site',
    label: 'Нужен новый сайт или интерфейс',
    primaryService: {
      title: 'Создание сайтов',
      href: '/services/web-development',
      reason: 'Разработка конверсионной посадочной страницы или многостраничного портала.',
    },
    secondaryServices: ['Telegram Bots & Mini Apps', 'Внедрение CRM'],
    expectedOutcome: 'Современный быстрый интерфейс, адаптированный под приём и конверсию трафика.',
  },
  {
    id: 'lost-leads',
    label: 'Нужно перестать терять лиды и ручные операции',
    primaryService: {
      title: 'Внедрение CRM',
      href: '/services/crm',
      reason: 'Фиксация всех заявок в единой базе, настройка регламентов и автозадач менеджерам.',
    },
    secondaryServices: ['ИИ и автоматизация', 'Telegram боты'],
    expectedOutcome: 'Каждое обращение получает ответственного, регламентный срок и следующий шаг.',
  },
  {
    id: 'market-data',
    label: 'Нужны данные, мониторинг или прозрачная аналитика',
    primaryService: {
      title: 'Сквозная аналитика',
      href: '/services/analytics',
      reason: 'Сведение данных рекламных систем, сайта и реальных продаж в единый дашборд.',
    },
    secondaryServices: ['Парсинг и сбор данных'],
    expectedOutcome: 'Полная прозрачность окупаемости маркетинга и цен конкурентов на рынке.',
  },
]

export default function ServicesProblemNavigator() {
  const [activeId, setActiveId] = useState<string>(problemOptions[0].id)
  const activeOption = problemOptions.find((p) => p.id === activeId) || problemOptions[0]

  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="НАВИГАТОР ПО ЗАДАЧЕ"
            title="С какой услуги начать именно вам?"
            subtitle="Выберите текущую потребность бизнеса — покажем стартовую точку и логику развития."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto">
          {/* Selector Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8" role="tablist" aria-label="Выбор бизнес-задачи">
            {problemOptions.map((opt) => {
              const isSelected = activeId === opt.id
              return (
                <button
                  key={opt.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(opt.id)}
                  className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-medium transition-all duration-200 border min-h-[48px] flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isSelected
                      ? 'bg-accent/15 border-accent text-text-primary font-semibold shadow-md'
                      : 'bg-bg-surface text-text-secondary border-border hover:border-border-light hover:text-text-primary'
                  }`}
                >
                  <span>{opt.label}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-accent shrink-0 ml-2" />}
                </button>
              )
            })}
          </div>

          {/* Active Option Panel */}
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Recommended Service */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono text-accent uppercase tracking-wider font-semibold">
                    Рекомендуемая стартовая услуга
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {activeOption.primaryService.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {activeOption.primaryService.reason}
                </p>

                <div className="p-4 rounded-xl bg-bg-primary border border-border flex items-start gap-3 mb-6">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div className="text-xs sm:text-sm text-text-primary">
                    <strong className="block text-accent mb-0.5">Ожидаемый результат:</strong>
                    {activeOption.expectedOutcome}
                  </div>
                </div>

                <Link
                  href={activeOption.primaryService.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
                >
                  <span>Перейти к услуге {activeOption.primaryService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Secondary services stack */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-bg-primary/70 border border-border/80">
                <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-3 font-semibold">
                  Что может понадобиться позже:
                </span>
                <div className="space-y-2 mb-4">
                  {activeOption.secondaryServices.map((serviceName) => (
                    <div key={serviceName} className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                      <span className="text-accent">+</span>
                      <span>{serviceName}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-text-muted leading-tight border-t border-border/50 pt-3">
                  Все компоненты легко стыкуются между собой по мере роста ваших задач.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
