'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowDown } from 'lucide-react'

const before = [
  'Клиент отправляет заявку',
  'Менеджер вручную копирует данные',
  'Открывает CRM',
  'Создаёт сделку',
  'Пишет сообщение',
  'Создаёт задачу',
  'Обновляет таблицу',
]

const after = [
  'Клиент отправляет заявку',
  'Система обрабатывает данные',
  'CRM-запись создана',
  'Менеджер уведомлён',
  'Черновик ответа готов',
  'Задача поставлена',
  'Данные обновлены',
]

export default function ServiceBeforeAfter() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Как меняется процесс после автоматизации."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* BEFORE */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-red-500/20 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-red-500/5" />
              <h3 className="text-xl font-bold text-red-400 mb-6 relative z-10 font-mono tracking-wider">BEFORE</h3>
              <div className="space-y-3 relative z-10">
                {before.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {i > 0 && (
                      <div className="flex flex-col items-center mt-1">
                        <ArrowDown className="w-3 h-3 text-red-500/60 flex-shrink-0" />
                      </div>
                    )}
                    {i === 0 && <div className="w-3 flex-shrink-0" />}
                    <span className={i === 0 ? "text-text-primary font-medium" : "text-text-secondary text-sm"}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-red-400/70 text-sm relative z-10 italic">
                Менеджер тратит время на рутину вместо продаж
              </p>
            </div>
          </ScrollReveal>

          {/* AFTER */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/20 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-accent/5" />
              <h3 className="text-xl font-bold text-accent mb-6 relative z-10 font-mono tracking-wider">AFTER</h3>
              <div className="space-y-3 relative z-10">
                {after.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {i > 0 && (
                      <div className="flex flex-col items-center mt-1">
                        <ArrowDown className="w-3 h-3 text-accent/60 flex-shrink-0" />
                      </div>
                    )}
                    {i === 0 && <div className="w-3 flex-shrink-0" />}
                    <span className={i === 0 ? "text-text-primary font-medium" : (i > 1 ? "text-accent/90 text-sm font-medium" : "text-text-secondary text-sm")}>
                      {step}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-accent text-sm relative z-10 font-medium">
                Менеджер начинает с готовой информацией
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Если действие повторяется — его стоит проверить на возможность автоматизации.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
