'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowUpRight } from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  problemSolved: string
  deliverables: string[]
  flow: string
  href: string
}

export interface ServiceGroup {
  id: string
  tag: string
  title: string
  desc: string
  badgeColor: string
  services: ServiceItem[]
}

const serviceGroups: ServiceGroup[] = [
  {
    id: 'attract',
    tag: 'ATTRACT',
    title: 'Привлечение клиентов',
    desc: 'Находим платежеспособный спрос и конвертируем его в первичные целевые обращения.',
    badgeColor: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    services: [
      {
        id: 'yandex-direct',
        title: 'Яндекс Директ',
        problemSolved: 'Привлекает горячий поисковый спрос и масштабирует лиды без слива бюджета.',
        deliverables: ['Сбор семантики и чистка минус-слов', 'Настройка поисковых и РСЯ кампаний', 'Оптимизация автостратегий по CPL'],
        flow: 'Поиск → Объявление → Заявка',
        href: '/services/yandex-direct',
      },
      {
        id: 'seo-geo',
        title: 'SEO / GEO & AI Search',
        problemSolved: 'Обеспечивает органический трафик из поиска и присутствие в ответах нейросетей.',
        deliverables: ['Технический и семантический аудит', 'Оптимизация под AI-поиск (GEO)', 'Разметка Schema.org и геосервисы'],
        flow: 'Запрос → Выдача / AI-ответ',
        href: '/services/seo-geo',
      },
      {
        id: 'b2b-lead-generation',
        title: 'B2B Лидогенерация',
        problemSolved: 'Находит корпоративных клиентов и выводит на лиц, принимающих решения.',
        deliverables: ['Сбор баз компаний по ICP', 'Обогащение и валидация контактов ЛПР', 'Запуск персональных outbound-цепочек'],
        flow: 'База → Фильтр ЛПР → Сделка',
        href: '/services/b2b-lead-generation',
      },
    ],
  },
  {
    id: 'convert',
    tag: 'CONVERT',
    title: 'Интерфейсы и конверсия',
    desc: 'Создаём посадочные страницы, корпоративные сайты и приложения внутри Telegram.',
    badgeColor: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400',
    services: [
      {
        id: 'web-development',
        title: 'Создание сайтов',
        problemSolved: 'Превращает посетителей в заявки через понятную структуру и высокую скорость.',
        deliverables: ['Прототипирование и конверсионная структура', 'Быстрая адаптивная вёрстка на Next.js', 'Интеграция с CRM и аналитикой'],
        flow: 'Архитектура → UI → Конверсия',
        href: '/services/web-development',
      },
      {
        id: 'telegram-bots',
        title: 'Telegram Bots & Mini Apps',
        problemSolved: 'Упрощает заказ, запись и коммуникацию с клиентами прямо в мессенджере.',
        deliverables: ['Чат-боты для квалификации лидов', 'Telegram Mini Apps с веб-интерфейсом', 'Уведомления менеджерам о новых заявках'],
        flow: 'Пользователь → Бот → CRM',
        href: '/services/telegram-bots',
      },
    ],
  },
  {
    id: 'automate',
    tag: 'AUTOMATE',
    title: 'Автоматизация процессов',
    desc: 'Убираем ручные операции, ускоряем ответ лидам и наводим порядок в воронке продаж.',
    badgeColor: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    services: [
      {
        id: 'ai-automation',
        title: 'ИИ и автоматизация',
        problemSolved: 'Квалифицирует заявки за секунды и выполняет рутинные рабочие сценарии.',
        deliverables: ['AI-ассистенты по базе знаний компании', 'Автоматические сценарии в n8n / Make', 'Классификация и обработка документов'],
        flow: 'Триггер → AI-логика → Действие',
        href: '/services/ai-automation',
      },
      {
        id: 'crm',
        title: 'Внедрение CRM',
        problemSolved: 'Исключает потерю входящих обращений и автоматизирует контроль сделок.',
        deliverables: ['Настройка этапов воронки и регламентов', 'Подключение сайта, рекламы и телефонии', 'Автоматические задачи и триггеры менеджерам'],
        flow: 'Лид → Воронка → Выручка',
        href: '/services/crm',
      },
    ],
  },
  {
    id: 'data',
    tag: 'DATA',
    title: 'Данные и управление',
    desc: 'Собираем внешние данные рынка и сводим сквозные показатели в единые дашборды.',
    badgeColor: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    services: [
      {
        id: 'web-scraping',
        title: 'Парсинг и сбор данных',
        problemSolved: 'Автоматизирует мониторинг цен конкурентов, каталогов и открытых реестров.',
        deliverables: ['Разработка парсеров под любые сайты', 'Очистка и нормализация потока данных', 'Telegram-алерты об изменении цен'],
        flow: 'Источник → Данные → Алерт',
        href: '/services/web-scraping',
      },
      {
        id: 'analytics',
        title: 'Сквозная аналитика',
        problemSolved: 'Показывает реальную окупаемость рекламы от клика до денег в кассе.',
        deliverables: ['Связка рекламных каналов с CRM и кассой', 'Построение дашбордов ROMI, CPL и CAC', 'Настройка корректной передачи UTM-меток'],
        flow: 'Сигналы → Дашборд → Решение',
        href: '/services/analytics',
      },
    ],
  },
]

export default function ServicesGroupGrid() {
  return (
    <section id="service-groups" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="КАТАЛОГ УСЛУГ"
            title="Девять направлений для управляемого роста."
            subtitle="Каждая услуга решает конкретную проблему бизнеса и имеет чёткий список результатов."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 space-y-16 max-w-6xl mx-auto">
          {serviceGroups.map((group, gi) => (
            <div key={group.id} className="relative">
              {/* Group Header */}
              <ScrollReveal delay={gi * 60}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-3 border-b border-border/80 gap-2">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded border font-mono text-[11px] uppercase font-bold tracking-wider ${group.badgeColor}`}>
                      {group.tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary">
                      {group.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary text-xs sm:text-sm max-w-md">
                    {group.desc}
                  </p>
                </div>
              </ScrollReveal>

              {/* Service Items Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 ${group.services.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}>
                {group.services.map((service, si) => (
                  <ScrollReveal key={service.id} delay={si * 70}>
                    <div className="h-full p-5 sm:p-6 rounded-xl bg-bg-surface/80 border border-border/80 hover:border-accent/50 transition-all flex flex-col justify-between group">
                      <div>
                        {/* Title & Flow */}
                        <div className="flex items-start justify-between gap-3 mb-2.5">
                          <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                            {service.title}
                          </h3>
                          <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded font-medium shrink-0">
                            {service.flow}
                          </span>
                        </div>

                        {/* Problem Solved */}
                        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                          {service.problemSolved}
                        </p>

                        {/* Deliverables List */}
                        <div className="space-y-1.5 mb-5 pt-3 border-t border-border/50">
                          <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-1">
                            Что делаем:
                          </span>
                          {service.deliverables.map((item) => (
                            <div key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer Link */}
                      <Link
                        href={service.href}
                        className="pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-text-primary group-hover:text-accent transition-colors font-medium"
                      >
                        <span>Подробнее об услуге</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
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
