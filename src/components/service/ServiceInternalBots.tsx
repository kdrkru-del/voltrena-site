'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { UserCheck, CheckSquare, Search, FileText, Terminal, BellRing, Eye } from 'lucide-react'

const tools = [
  {
    icon: UserCheck,
    title: 'New Lead Alert',
    desc: 'Менеджер моментально получает карточку нового клиента с контактами, задачей и ссылкой на сделку в CRM.',
  },
  {
    icon: CheckSquare,
    title: 'Quick Approvals',
    desc: 'Руководитель согласовывает скидку, счёт или договор одной кнопкой прямо в чате Telegram.',
  },
  {
    icon: Eye,
    title: 'Status Check',
    desc: 'Сотрудник за секунду проверяет статус заказа, остаток на складе или этап прохождения документа.',
  },
  {
    icon: Search,
    title: 'Smart Search',
    desc: 'Мгновенный поиск информации по клиенту, регламенту компании или корпоративной базе знаний.',
  },
  {
    icon: FileText,
    title: 'Daily Reports',
    desc: 'Автоматическая утренняя и вечерняя сводка ключевых метрик продаж и операций прямо в чат.',
  },
  {
    icon: Terminal,
    title: 'Custom Commands',
    desc: 'Быстрый запуск автоматических цепочек: генерация КП, экспорт таблицы или постановка задачи.',
  },
  {
    icon: BellRing,
    title: 'Market & System Alerts',
    desc: 'Мгновенные оповещения об изменении цен конкурентов, критических сбоях или важных событиях.',
  },
]

export default function ServiceInternalBots() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ВНУТРЕННИЕ СЕРВИСЫ"
            title="Telegram может быть интерфейсом для сотрудников."
            subtitle="Менеджеры и руководители управляют процессами прямо со смартфона без постоянного входа в громоздкие системы."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, i) => {
            const Icon = tool.icon
            return (
              <ScrollReveal key={tool.title} delay={i * 70}>
                <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors group flex flex-col justify-between">
                  <div>
                    <div className="p-3 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4 group-hover:bg-accent/10 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2 font-mono group-hover:text-accent transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Смартфон превращается в пульт управления операциями бизнеса.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
