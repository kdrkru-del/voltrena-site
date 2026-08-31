'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Bot, UserCheck, ArrowRight, ShieldCheck, CornerDownRight } from 'lucide-react'

const handoffCases = [
  'Сложный нестандартный запрос или ТЗ',
  'Согласование индивидуальных коммерческих условий',
  'Прямая просьба клиента позвать человека',
  'Спорная или конфликтная ситуация',
  'Обращение от ключевого VIP-клиента',
]

export default function ServiceHumanHandoff() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="НАДЁЖНОСТЬ"
            title="Бот должен знать, когда передать разговор человеку."
            subtitle="Автоматизация не должна создавать тупиков для клиента."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Decision Branch */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-accent" />
                  Логика ветвления
                </h3>
                <div className="space-y-4 text-sm text-text-secondary mt-6">
                  <div className="p-4 rounded-xl bg-bg-primary border border-border">
                    <p className="font-mono text-xs text-accent font-bold mb-1">СИТУАЦИЯ 1: СТАНДАРТНЫЙ СЦЕНАРИЙ</p>
                    <p className="text-text-secondary">Бот проводит пользователя по алгоритму и сохраняет результат в CRM.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-bg-primary border border-accent/30 bg-accent/5">
                    <p className="font-mono text-xs text-accent font-bold mb-1">СИТУАЦИЯ 2: НУЖЕН ЧЕЛОВЕК</p>
                    <p className="text-text-primary font-medium">Бот моментально передаёт чат свободному оператору, сохраняя всю историю диалога.</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-xs text-text-secondary/70 italic">
                Контекст общения не теряется при переключении
              </p>
            </div>
          </ScrollReveal>

          {/* When to handoff */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-accent" />
                  Триггеры передачи человеку
                </h3>
                <ul className="space-y-3 mt-6">
                  {handoffCases.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-text-secondary">
                      <ShieldCheck className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-border text-xs font-mono text-accent">
                Статус: бесшовное переключение в 1 клик
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Клиент всегда получает точный ответ — автоматически или от эксперта.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
