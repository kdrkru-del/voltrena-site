'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const steps = [
  { step: '01', title: 'Решаем критичную задачу', desc: 'Запускаем первоочередной узел (например, сайт или контекстную рекламу).' },
  { step: '02', title: 'Подключаем соседние процессы', desc: 'Связываем входящие лиды с воронкой CRM и оповещениями в Telegram.' },
  { step: '03', title: 'Объединяем данные', desc: 'Настраиваем сквозную аналитику и дашборды для точного расчёта окупаемости.' },
  { step: '04', title: 'Автоматизируем рутину', desc: 'Внедряем AI-ассистентов для квалификации и автогенерацию документов.' },
  { step: '05', title: 'Масштабируем результат', desc: 'Увеличиваем рекламный бюджет и подключаем новые каналы роста.' },
]

export default function SolutionsStartSmall() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПОЭТАПНЫЙ РОСТ"
            title="Не обязательно внедрять всё сразу."
            subtitle="Архитектура VOLTRENA позволяет начать с решения острой боли и постепенно масштабировать систему вместе с ростом бизнеса."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 70}>
              <div className="p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors h-full flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-accent font-bold mb-3 block">
                    ШАГ {s.step}
                  </span>
                  <h3 className="text-base font-bold text-text-primary mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
