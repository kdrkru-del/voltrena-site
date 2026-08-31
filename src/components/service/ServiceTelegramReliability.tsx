'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Shield, Server, RefreshCw, Lock, AlertTriangle, Activity } from 'lucide-react'

const standards = [
  {
    icon: Shield,
    title: 'Строгая валидация',
    desc: 'Проверка форматов телефонов, email, чисел и защита от ввода некорректных данных на каждом шаге.',
  },
  {
    icon: RefreshCw,
    title: 'Защита от дублей и сбоев',
    desc: 'Idempotency keys и очереди сообщений предотвращают повторные списания или дублирование сделок в CRM.',
  },
  {
    icon: Server,
    title: 'Graceful Fallback',
    desc: 'Если внешняя CRM или API временно недоступны, бот сохраняет данные в локальный буфер и повторяет отправку.',
  },
  {
    icon: Lock,
    title: 'Безопасность доступов',
    desc: 'Хранение API-токенов в зашифрованных переменных окружения и минимально необходимые права доступа.',
  },
  {
    icon: Activity,
    title: 'Логирование и мониторинг',
    desc: 'Фиксация ключевых событий и ошибок для оперативного реагирования команды поддержки.',
  },
  {
    icon: AlertTriangle,
    title: 'Контроль ограничений Telegram',
    desc: 'Соблюдение Telegram Rate Limits и политики против спама для стабильной бесперебойной работы.',
  },
]

export default function ServiceTelegramReliability() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ИНЖЕНЕРИЯ"
            title="Бот должен работать и в нестандартных ситуациях."
            subtitle="Надёжность и безопасность закладываются в архитектуру с самого начала."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {standards.map((s, i) => {
            const Icon = s.icon
            return (
              <ScrollReveal key={s.title} delay={i * 60}>
                <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2">
                      {s.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {s.desc}
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
              Хороший бот спроектирован так, чтобы не ломаться при ошибках пользователя или внешних сервисов.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
