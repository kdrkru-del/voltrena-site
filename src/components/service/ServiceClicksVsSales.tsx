'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, MousePointer, Users, FileCheck, CheckCircle2, TrendingUp } from 'lucide-react'

const funnelSteps = [
  { icon: MousePointer, title: 'Клик', subtitle: 'Рекламный переход', note: 'CPC' },
  { icon: Users, title: 'Визит', subtitle: 'Поведение на сайте', note: 'Отказы / Время' },
  { icon: FileCheck, title: 'Заявка', subtitle: 'Контакты в форме', note: 'CPL' },
  { icon: CheckCircle2, title: 'Квал. Лид', subtitle: 'Целевой клиент в CRM', note: 'SQL Cost' },
  { icon: TrendingUp, title: 'Продажа & Выручка', subtitle: 'Оплата на счёт', note: 'ROMI / Прибыль', isTarget: true },
]

export default function ServiceClicksVsSales() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СУТЬ АНАЛИТИКИ"
            title="Реклама заканчивается не на клике."
            subtitle="Бизнесу нужны не просто дешевые клики или заявки, а реальные продажи и окупаемость вложений."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {funnelSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.title} delay={i * 80}>
                  <div className={`h-full p-5 rounded-2xl bg-bg-surface border flex flex-col justify-between relative transition-all duration-300 ${step.isTarget ? 'border-accent shadow-[0_0_20px_rgba(99,102,241,0.15)] bg-gradient-to-b from-bg-surface to-accent/5' : 'border-border hover:border-accent/40'}`}>
                    <div>
                      <div className={`p-3 rounded-xl inline-flex mb-4 ${step.isTarget ? 'bg-accent text-bg-primary font-bold' : 'bg-bg-primary text-accent border border-border'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-text-primary mb-1">{step.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed mb-4">{step.subtitle}</p>
                    </div>
                    <div className="pt-3 border-t border-border/50">
                      <span className="text-xs font-mono font-semibold text-accent">{step.note}</span>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                Чем глубже аналитика, тем точнее управленческие решения.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
