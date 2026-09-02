'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { TrendingUp, Users, DollarSign, Target, ArrowUpRight, BarChart3, AlertCircle } from 'lucide-react'

const sampleKpis = [
  { label: 'Входящие заявки', value: 'Поток активен', trend: 'Стабильный рост', icon: Users },
  { label: 'Квалификация (SQL)', value: 'Высокое качество', trend: 'Целевые обращения', icon: Target },
  { label: 'Сделки в CRM', value: 'Воронка заполнена', trend: 'Увеличение конверсии', icon: DollarSign },
  { label: 'Окупаемость (ROMI)', value: 'Положительный возврат', trend: 'Масштабируемый итог', icon: TrendingUp },
]

const sampleChannels = [
  { channel: 'Яндекс Директ (Поиск + РСЯ)', leads: 'Высокий объем', sql: 'Квалифицирован', deals: 'Основной пул', cplTier: 'Оптимальный CPL', status: 'Лидер по сведению' },
  { channel: 'SEO / Органический поиск', leads: 'Растущий поток', sql: 'Высокий интент', deals: 'Стабильные сделки', cplTier: 'Минимальная стоимость', status: 'Долгосрочный актив' },
  { channel: 'Telegram Bot & Mini App', leads: 'Мгновенный контакт', sql: 'Автоквалификация', deals: 'Быстрый цикл', cplTier: 'Прямой контакт', status: 'Высокая скорость' },
  { channel: 'B2B Лидогенерация (Аутрич)', leads: 'Прямой ЛПР', sql: 'Точный ICP', deals: 'Крупный контракт', cplTier: 'Высокий чек', status: 'Максимальный LTV' },
]

export default function ServiceAnalyticsDashboard() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ДАШБОРД"
            title="Один экран вместо десятков разрозненных отчётов."
            subtitle="Вся ключевая информация по маркетингу и продажам сведена в понятный управленческий интерфейс."
            align="center"
          />
        </ScrollReveal>

        {/* Dashboard Mock Container */}
        <div className="mt-16 max-w-5xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="p-6 md:p-8 rounded-3xl bg-bg-surface border border-accent/20 shadow-2xl relative overflow-hidden">
              {/* Header inside Dashboard */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-border gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">Сквозной контроль воронки</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mt-1">Сквозная аналитика маркетинга и продаж</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-accent font-semibold">
                    ПРИМЕР ДАШБОРДА
                  </span>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {sampleKpis.map((kpi) => {
                  const Icon = kpi.icon
                  return (
                    <div key={kpi.label} className="p-4 rounded-xl bg-bg-primary border border-border/80 flex flex-col justify-between">
                      <div className="flex items-center justify-between text-text-secondary mb-2">
                        <span className="text-xs font-mono">{kpi.label}</span>
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div className="text-lg font-bold text-text-primary mb-1">{kpi.value}</div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                        <ArrowUpRight className="w-3 h-3" />
                        <span>{kpi.trend}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Channel Performance Table */}
              <div className="overflow-x-auto">
                <div className="text-xs font-mono text-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Эффективность рекламных каналов
                </div>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs font-mono text-text-muted">
                      <th className="pb-3 font-medium">Канал привлечения</th>
                      <th className="pb-3 font-medium">Заявки</th>
                      <th className="pb-3 font-medium">Квалификация</th>
                      <th className="pb-3 font-medium">Сделки</th>
                      <th className="pb-3 font-medium">Стоимость</th>
                      <th className="pb-3 font-medium">Статус</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-mono text-xs md:text-sm">
                    {sampleChannels.map((row) => (
                      <tr key={row.channel} className="hover:bg-bg-primary/50 transition-colors">
                        <td className="py-3.5 text-text-primary font-sans font-medium">{row.channel}</td>
                        <td className="py-3.5 text-text-secondary font-sans">{row.leads}</td>
                        <td className="py-3.5 text-text-secondary font-sans">{row.sql}</td>
                        <td className="py-3.5 text-text-primary font-sans font-bold">{row.deals}</td>
                        <td className="py-3.5 text-text-secondary font-sans">{row.cplTier}</td>
                        <td className="py-3.5">
                          <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-sans font-medium whitespace-nowrap">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Alert inside Dashboard */}
              <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-start gap-3 text-xs text-text-secondary">
                <AlertCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-text-primary">Инсайт сквозной аналитики:</strong> Данные сопоставлены от поискового запроса до итоговой оплаты в CRM. Бюджет автоматически перераспределяется в пользу каналов с подтвержденной окупаемостью.
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Руководителю нужны ответы на ключевые вопросы бизнеса, а не бесконечные таблицы.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
