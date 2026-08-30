'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Zap, Check, User } from 'lucide-react'

const modes = [
  {
    icon: Zap,
    label: 'Fully Automated',
    color: 'text-accent border-accent/30 bg-accent/5',
    description: 'Для простых и безопасных операций. Система выполняет действие без участия человека.',
    examples: ['Создание CRM-записи', 'Telegram-уведомление', 'Обновление таблицы'],
  },
  {
    icon: Check,
    label: 'AI + Approval',
    color: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
    description: 'AI готовит результат — человек подтверждает. Для ситуаций, где важна проверка.',
    examples: ['Черновик ответа клиенту', 'Классификация обращения', 'Предложенная сделка'],
  },
  {
    icon: User,
    label: 'Human First',
    color: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
    description: 'AI только помогает сотруднику: собирает информацию, подсказывает, структурирует.',
    examples: ['Подбор данных для переговоров', 'Поиск по базе знаний', 'Подготовка КП'],
  },
]

export default function ServiceHumanInLoop() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="КОНТРОЛЬ"
            title="Автоматизация не должна лишать бизнес контроля."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modes.map((mode, i) => {
            const Icon = mode.icon
            return (
              <ScrollReveal key={mode.label} delay={i * 100}>
                <div className={`h-full p-8 rounded-2xl bg-bg-surface border ${mode.color.split(' ')[1]} relative overflow-hidden`}>
                  <div className={`absolute inset-0 ${mode.color.split(' ')[2]}`} />
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl border mb-6 ${mode.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-xl font-bold mb-3 font-mono ${mode.color.split(' ')[0]}`}>
                      {mode.label}
                    </h3>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                      {mode.description}
                    </p>
                    <ul className="space-y-2">
                      {mode.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${mode.color.split(' ')[0].replace('text-', 'bg-')}`} />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-text-secondary text-lg">
              Уровень автоматизации определяется <span className="text-text-primary font-medium">риском и ценой ошибки</span> в конкретном процессе.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
