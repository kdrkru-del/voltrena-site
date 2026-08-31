'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowUpRight, TrendingUp, Code, Cpu, Database, Sparkles, Bot, Layers, BarChart3, Search } from 'lucide-react'

export interface ServiceCardItem {
  id: string
  title: string
  desc: string
  href: string
  flowMetaphor: string
  capabilities: string[]
}

export interface ServiceGroup {
  id: string
  tag: string
  title: string
  desc: string
  colorBadge: string
  services: ServiceCardItem[]
}

const serviceGroups: ServiceGroup[] = [
  {
    id: 'grow',
    tag: 'GROW',
    title: 'Привлечение клиентов',
    desc: 'Находим платежеспособный спрос и превращаем его в целевые обращения.',
    colorBadge: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    services: [
      {
        id: 'yandex-direct',
        title: 'Яндекс Директ',
        desc: 'Контекстная реклама в поиске и РСЯ с оптимизацией по квалифицированным лидам.',
        href: '/services/yandex-direct',
        flowMetaphor: 'Поиск → Объявление → Заявка',
        capabilities: ['Поисковая реклама', 'РСЯ и ретаргетинг', 'Автостратегии по CPL'],
      },
      {
        id: 'seo-geo',
        title: 'SEO / GEO & AI Search',
        desc: 'Органическая видимость сайта в классических поисковиках и ответах генеративных нейросетей.',
        href: '/services/seo-geo',
        flowMetaphor: 'Запрос → Выдача / AI-ответ',
        capabilities: ['Техническое SEO', 'Generative Engine (GEO)', 'Карты и Schema.org'],
      },
      {
        id: 'b2b-lead-gen',
        title: 'B2B Лидогенерация',
        desc: 'Автоматизированный поиск корпоративных клиентов, сбор баз компаний и прямой аутрич.',
        href: '/services/b2b-lead-generation',
        flowMetaphor: 'База → Фильтр ЛПР → Сделка',
        capabilities: ['Сбор баз по ICP', 'Обогащение контактов', 'Outbound-кампании'],
      },
    ],
  },
  {
    id: 'build',
    tag: 'BUILD',
    title: 'Интерфейсы и продукты',
    desc: 'Создаём быстрые сайты и Telegram-сервисы, ориентированные на конверсию.',
    colorBadge: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    services: [
      {
        id: 'web-development',
        title: 'Создание сайтов',
        desc: 'Лендинги, корпоративные порталы и веб-системы как фундамент продаж.',
        href: '/services/web-development',
        flowMetaphor: 'Архитектура → UI → Конверсия',
        capabilities: ['Конверсионные лендинги', 'Многостраничные сайты', 'Синхронизация с CRM'],
      },
      {
        id: 'telegram-bots',
        title: 'Telegram Bots & Mini Apps',
        desc: 'Рабочие сервисы внутри Telegram: заявки, каталоги, запись и инструменты сотрудников.',
        href: '/services/telegram-bots',
        flowMetaphor: 'Пользователь → Бот → CRM',
        capabilities: ['Чат-боты для лидов', 'Telegram Mini Apps', 'Интерфейс для команды'],
      },
    ],
  },
  {
    id: 'automate',
    tag: 'AUTOMATE',
    title: 'Автоматизация процессов',
    desc: 'Убираем рутину, ускоряем обработку заявок и повышаем продуктивность команды.',
    colorBadge: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    services: [
      {
        id: 'ai-automation',
        title: 'ИИ и автоматизация',
        desc: 'Автоматические workflow, AI-ассистенты по базе знаний и интеграция систем.',
        href: '/services/ai-automation',
        flowMetaphor: 'Триггер → AI-логика → Действие',
        capabilities: ['Автоматические workflow', 'AI-ассистенты', 'Обработка документов'],
      },
      {
        id: 'crm',
        title: 'Внедрение CRM',
        desc: 'Настройка amoCRM и Битрикс24: связка с сайтом, рекламой, воронки и автозадачи.',
        href: '/services/crm',
        flowMetaphor: 'Лид → Воронка → Выручка',
        capabilities: ['Воронки и регламенты', 'Интеграция каналов', 'Автозадачи менеджерам'],
      },
    ],
  },
  {
    id: 'data',
    tag: 'DATA',
    title: 'Работа с данными',
    desc: 'Превращаем сырую информацию в цифры для точных управленческих решений.',
    colorBadge: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    services: [
      {
        id: 'web-scraping',
        title: 'Парсинг и сбор данных',
        desc: 'Автоматический сбор данных с сайтов, мониторинг цен конкурентов и реестров.',
        href: '/services/web-scraping',
        flowMetaphor: 'Источник → Данные → Алерт',
        capabilities: ['Мониторинг цен', 'Сбор каталогов и баз', 'Алерты об изменениях'],
      },
      {
        id: 'analytics',
        title: 'Сквозная аналитика',
        desc: 'Связываем рекламные расходы, поведение на сайте и продажи из CRM в дашборд.',
        href: '/services/analytics',
        flowMetaphor: 'Сигналы → Дашборд → Решение',
        capabilities: ['Сквозной дашборд', 'Расчёт ROMI и CPL', 'Отчёты и алерты'],
      },
    ],
  },
]

export default function ServicesGroupGrid() {
  return (
    <section id="service-groups" className="py-20 bg-bg-primary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="КАТАЛОГ НАПРАВЛЕНИЙ"
            title="Четыре блока цифровой системы роста."
            subtitle="Каждая услуга решает конкретную задачу бизнеса и легко стыкуется с остальными в единый механизм."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 space-y-16 max-w-6xl mx-auto">
          {serviceGroups.map((group, gi) => (
            <div key={group.id} className="relative">
              {/* Group Header */}
              <ScrollReveal delay={gi * 80}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border/70 gap-3">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-md border font-mono text-xs uppercase font-bold tracking-wider mb-2 ${group.colorBadge}`}>
                      {group.tag}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                      {group.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary text-sm md:max-w-md">
                    {group.desc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Service Cards in Group */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${group.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
                {group.services.map((service, si) => (
                  <ScrollReveal key={service.id} delay={si * 100}>
                    <Link
                      href={service.href}
                      className="h-full p-6 md:p-8 rounded-2xl bg-bg-surface border border-border hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-lg hover:shadow-accent/5"
                    >
                      <div>
                        {/* Meta Flow */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[11px] font-mono text-accent bg-accent/10 px-2.5 py-1 rounded-md font-semibold">
                            {service.flowMetaphor}
                          </span>
                          <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors mb-2">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-secondary text-sm leading-relaxed mb-6">
                          {service.desc}
                        </p>

                        {/* Capabilities Pills */}
                        <div className="space-y-2 mb-6">
                          {service.capabilities.map((cap) => (
                            <div key={cap} className="flex items-center gap-2 text-xs text-text-secondary">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Link */}
                      <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-text-muted group-hover:text-accent transition-colors">
                        <span>Подробнее об услуге</span>
                        <span>→</span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
