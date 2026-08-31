'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { AlertTriangle, Bell, ShieldCheck, Database, RefreshCw, CheckCircle2 } from 'lucide-react'

const alerts = [
  { title: 'Резкий рост CPL', desc: 'Мгновенное уведомление, если стоимость заявки в канале превысила допустимый лимит.' },
  { title: 'Остановка форм / сбои', desc: 'Алерт, если формы на сайте перестали отправлять данные или сломался скрипт.' },
  { title: 'Слив бюджета без лидов', desc: 'Оповещение, если кампания расходует средства, но не приносит обращений.' },
  { title: 'Зависшие сделки в CRM', desc: 'Контроль регламента: менеджер не связался с клиентом в течение заданного времени.' },
  { title: 'Утренняя сводка в Telegram', desc: 'Ежедневный краткий отчёт по ключевым метрикам за вчерашний день прямо в чат.' },
  { title: 'Контроль качества данных', desc: 'Автоматическая проверка разметки UTM, дублей лидов и сходимости статусов.' },
]

export default function ServiceAnalyticsReliability() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="АЛЕРТЫ И КОНТРОЛЬ"
            title="Важно знать не только что произошло, но и когда что-то пошло не так."
            subtitle="Автоматический мониторинг предупреждает о сбоях и защищает рекламный бюджет от слива."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {alerts.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 70}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-2.5 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4">
                    <Bell className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Ошибочные данные дают ошибочные решения. Мы гарантируем точность сбора.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
