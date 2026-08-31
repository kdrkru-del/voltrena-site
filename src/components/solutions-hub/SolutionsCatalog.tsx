'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Sparkles, Check, ArrowUpRight } from 'lucide-react'

export interface SolutionItem {
  id: string
  number: string
  title: string
  descriptor: string
  problem: string
  flow: string
  components: string[]
  result: string
  href: string
}

export const solutionsData: SolutionItem[] = [
  {
    id: 'lead-generation-system',
    number: '01',
    title: 'Lead Generation System',
    descriptor: 'Система получения и обработки заявок',
    problem: 'Когда бизнесу нужны новые стабильные входящие обращения и прозрачный контроль стоимости лида.',
    flow: 'Поисковый спрос → Реклама → Лендинг → Лид → CRM → Менеджер → Аналитика',
    components: ['Яндекс Директ', 'Конверсионный сайт', 'Внедрение CRM', 'Сквозная аналитика', 'Telegram алерты', 'Автоматизация'],
    result: 'Управляемый поток целевых заявок с контролем окупаемости (ROMI).',
    href: '/solutions/lead-generation-system',
  },
  {
    id: 'b2b-lead-machine',
    number: '02',
    title: 'B2B Lead Machine',
    descriptor: 'Система поиска корпоративных клиентов',
    problem: 'Когда недостаточно ждать входящих заявок и требуется активный выход на нужные компании и ЛПР.',
    flow: 'Целевой рынок → Парсинг баз → Обогащение → Скоринг → CRM → Продажи',
    components: ['Исследование рынка', 'Парсинг данных', 'Обогащение контактов', 'AI Скоринг', 'CRM воронка', 'Outbound Workflow'],
    result: 'Постоянный процесс генерации B2B-сделок без ручного поиска баз.',
    href: '/solutions/b2b-lead-machine',
  },
  {
    id: 'ai-sales-manager',
    number: '03',
    title: 'AI Sales Manager',
    descriptor: 'AI-система обработки заявок',
    problem: 'Когда менеджеры тратят часы на первичные типовые вопросы, долго отвечают и упускают горячих клиентов.',
    flow: 'Новая заявка → Понимание AI → Квалификация → CRM → Черновик ответа → Менеджер',
    components: ['AI Модели', 'База знаний', 'CRM интеграция', 'Telegram бот', 'Черновики ответов', 'Авто-роутинг'],
    result: 'Менеджер подключается к уже квалифицированному лиду с готовым контекстом диалога.',
    href: '/solutions/ai-sales-manager',
  },
  {
    id: 'sales-automation',
    number: '04',
    title: 'Sales Automation System',
    descriptor: 'Автоматизация отдела продаж',
    problem: 'Когда лиды есть, но процесс продаж хаотичен: сделки зависают, а сотрудники забывают перезванивать.',
    flow: 'Лид → CRM → Автозадача → Контроль сроков → Менеджер → Сделка & Оплата',
    components: ['Архитектура CRM', 'Telegram уведомления', 'Автозадачи', 'Генерация КП и счетов', 'Контроль регламентов', 'Дашборд KPI'],
    result: 'Каждый лид получает понятное следующее действие без задержек и человеческого фактора.',
    href: '/solutions/sales-automation',
  },
  {
    id: 'digital-intelligence',
    number: '05',
    title: 'Digital Intelligence',
    descriptor: 'Мониторинг рынка и данных',
    problem: 'Когда бизнесу нужно непрерывно отслеживать цены конкурентов, новые тендеры и динамику рынка.',
    flow: 'Источники → Мониторинг → Данные → AI Анализ → Сигнал → Алерт & Дашборд',
    components: ['Web Scraping', 'Мониторинг цен', 'База данных', 'AI Классификация', 'Telegram Алерты', 'BI Дашборд'],
    result: 'Бизнес мгновенно узнаёт об изменениях цен и появлении новых возможностей на рынке.',
    href: '/solutions/digital-intelligence',
  },
]

export default function SolutionsCatalog() {
  return (
    <section id="solutions-catalog" className="py-20 bg-bg-primary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ГОТОВЫЕ СИСТЕМЫ"
            title="Пять базовых бизнес-решений VOLTRENA."
            subtitle="Каждая система закрывает конкретную потребность компании: от лидогенерации до автоматизации и аналитики."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 space-y-8 max-w-5xl mx-auto">
          {solutionsData.map((sol, i) => (
            <ScrollReveal key={sol.id} delay={i * 80}>
              <div className="p-6 md:p-8 rounded-3xl bg-bg-surface border border-border hover:border-accent/50 transition-all duration-300 group shadow-lg flex flex-col justify-between">
                <div>
                  {/* Top row: Number & Descriptor */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-accent font-bold px-2.5 py-1 rounded-md bg-accent/10">
                        {sol.number}
                      </span>
                      <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold">
                        {sol.descriptor}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold">
                      Production Ready
                    </span>
                  </div>

                  {/* Title & Problem */}
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors mb-3">
                    {sol.title}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                    <strong>Когда нужно:</strong> {sol.problem}
                  </p>

                  {/* Flow Strip */}
                  <div className="p-4 rounded-xl bg-bg-primary border border-border mb-6">
                    <span className="text-[11px] font-mono text-accent uppercase tracking-wider block mb-1 font-semibold">
                      FLOW СИСТЕМЫ:
                    </span>
                    <p className="text-xs md:text-sm font-mono text-text-primary">
                      {sol.flow}
                    </p>
                  </div>

                  {/* Included Services Stack */}
                  <div className="mb-6">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-2">
                      Что входит в систему:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sol.components.map((comp) => (
                        <span
                          key={comp}
                          className="px-3 py-1 rounded-lg bg-bg-surface border border-border text-xs font-mono text-text-secondary"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer: Result & Action */}
                <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-text-primary">
                    <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span><strong>Результат:</strong> {sol.result}</span>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-bg-primary text-xs font-mono font-bold transition-all whitespace-nowrap"
                  >
                    <span>Обсудить внедрение</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
