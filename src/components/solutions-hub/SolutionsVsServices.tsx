'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function SolutionsVsServices() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПОДХОД"
            title="Услуга решает часть задачи. Solution — всю цепочку."
            subtitle="Клиенту не нужно самостоятельно собирать систему из отдельных сервисов и нанимать 5 разных подрядчиков."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Service Card */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-text-muted uppercase tracking-widest block mb-2">
                  ОТДЕЛЬНАЯ УСЛУГА
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Например: Яндекс Директ
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Привлекает трафик на сайт. Но если сайт не конвертирует, CRM не настроена, а менеджеры долго перезванивают — рекламный бюджет сливается.
                </p>
                <div className="p-4 rounded-xl bg-bg-primary border border-border text-xs font-mono text-text-muted">
                  Фокус: только клики и показы рекламы
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-border text-xs text-text-secondary">
                Результат: изолированное звено без гарантии окупаемости
              </div>
            </div>
          </ScrollReveal>

          {/* Solution Card */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/40 bg-gradient-to-b from-bg-surface to-bg-secondary h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-accent text-bg-primary text-xs font-mono font-bold rounded-bl-xl uppercase tracking-wider">
                End-to-End System
              </div>
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">
                  КОМПЛЕКСНОЕ РЕШЕНИЕ
                </span>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  Lead Generation System
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Связываем контекстную рекламу, конверсионный сайт, CRM, Telegram-оповещения и сквозную аналитику в единую управляемую систему.
                </p>
                <div className="p-4 rounded-xl bg-bg-primary border border-accent/20 text-xs font-mono text-accent">
                  Трафик + Сайт + CRM + Аналитика = Managed Lead Flow
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-accent/20 text-xs font-mono text-accent font-semibold">
                Результат: регулярные квалифицированные продажи и прозрачный ROMI
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Клиенту не обязательно собирать систему самостоятельно — мы проектируем связку целиком.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
