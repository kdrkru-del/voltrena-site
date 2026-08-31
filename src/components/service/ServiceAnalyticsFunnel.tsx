'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stages = [
  { label: 'Трафик и Клики', value: '100%', sub: 'Показы объявлений, переходы из Директа, SEO и Telegram', color: 'bg-accent/30 border-accent/40' },
  { label: 'Посещения сайта', value: 'Поведение', sub: 'Изучение предложения, просмотр цен, кейсов и условий', color: 'bg-indigo-500/30 border-indigo-500/40' },
  { label: 'Первичные заявки', value: 'Конверсия', sub: 'Заполнение формы, звонок или запуск Telegram-бота', color: 'bg-blue-500/30 border-blue-500/40' },
  { label: 'Квалифицированные лиды', value: 'Качество', sub: 'Проверка соответствия профилю клиента в CRM', color: 'bg-cyan-500/30 border-cyan-500/40' },
  { label: 'Сделки и Оплата', value: 'Выручка', sub: 'Закрытие сделки, поступление денег на расчётный счёт', color: 'bg-emerald-500/30 border-emerald-500/40' },
]

export default function ServiceAnalyticsFunnel() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ВОРОНКА"
            title="Вся воронка в одном месте."
            subtitle="Находим точку отвала: где именно бизнес теряет потенциальных клиентов и прибыль."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-4xl mx-auto space-y-4">
          {stages.map((stage, i) => (
            <ScrollReveal key={stage.label} delay={i * 80}>
              <div className="p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
                    <h3 className="text-lg font-bold text-text-primary">{stage.label}</h3>
                  </div>
                  <p className="text-sm text-text-secondary pl-5.5">{stage.sub}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-bg-primary border border-border text-accent">
                    {stage.value}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Аналитика показывает не просто общие цифры, а точное место для роста конверсии.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
