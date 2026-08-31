'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowDown, Check, Send, User, Database, Bell } from 'lucide-react'

const flowSteps = [
  {
    icon: Send,
    speaker: 'Клиент в Telegram',
    badge: 'START',
    text: '/start → «Хочу рассчитать проект автоматизации»',
    tone: 'user',
  },
  {
    icon: MessageSquareIcon,
    speaker: 'Telegram Bot',
    badge: 'QUALIFY',
    text: 'Уточняет нишу, ключевую задачу и контактный номер телефона',
    tone: 'bot',
  },
  {
    icon: Database,
    speaker: 'Бизнес-логика',
    badge: 'CRM PIPELINE',
    text: 'Создаёт сделку в CRM, прикрепляет параметры и ставит статус «Новая»',
    tone: 'system',
  },
  {
    icon: Bell,
    speaker: 'Оповещение команды',
    badge: 'TELEGRAM ALERT',
    text: 'Дежурный менеджер получает карточку лида с кнопкой прямого звонка',
    tone: 'manager',
  },
  {
    icon: Check,
    speaker: 'Подтверждение клиенту',
    badge: 'CONFIRM',
    text: '«Спасибо! Заявка принята в работу. Менеджер свяжется в течение 10 минут»',
    tone: 'bot',
  },
]

function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
}

export default function ServiceTelegramLeadFlow() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СЦЕНАРИЙ"
            title="Заявка может сразу превращаться в рабочий лид."
            subtitle="Бот не просто собирает текст — он структурирует данные и передаёт их в рабочие системы."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {flowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <ScrollReveal key={step.badge} delay={index * 100}>
                <div className="p-5 md:p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex items-start gap-4 relative">
                  <div className="p-3 rounded-xl bg-bg-primary border border-border text-accent flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <span className="text-sm font-bold text-text-primary">{step.speaker}</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-semibold">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center my-1.5">
                    <ArrowDown className="w-4 h-4 text-accent/40" />
                  </div>
                )}
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Менеджер начинает работу уже с готовой структурированной информацией.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
