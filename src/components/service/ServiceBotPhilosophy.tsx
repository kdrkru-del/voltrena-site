'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CheckCircle2 } from 'lucide-react'

const objectives = [
  { title: 'Принять и квалифицировать заявку', desc: 'Собрать имя, телефон, параметры заказа и отправить готовую сделку в CRM.' },
  { title: 'Показать интерактивный каталог', desc: 'Удобно продемонстрировать товары и услуги без перехода на сторонние сайты.' },
  { title: 'Рассчитать предварительную стоимость', desc: 'Пошагово собрать параметры и выдать клиенту прозрачный расчёт сметы.' },
  { title: 'Записать на приём или консультацию', desc: 'Выбрать доступный слот времени, подтвердить запись и отправить напоминание.' },
  { title: 'Найти информацию в базе знаний', desc: 'AI-ассистент ответит на частые вопросы по регламентам и документам компании.' },
  { title: 'Уведомить команду о событии', desc: 'Моментально передать новую сделку, алерт о цене или запрос на согласование.' },
]

export default function ServiceBotPhilosophy() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПОДХОД"
            title="Сначала задача. Потом бот."
            subtitle="Telegram — это интерфейс. Бизнесу нужен не сам бот, а конкретный результат."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {objectives.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <h3 className="text-base font-bold text-text-primary group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
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
            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
              Проектируем сценарий вокруг бизнес-процесса.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
