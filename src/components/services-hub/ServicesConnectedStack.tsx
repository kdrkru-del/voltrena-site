'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react'

const separateProblems = [
  'Сайт, реклама, CRM и аналитика живут в разных окнах',
  'Менеджеры вручную переносят заявки между таблицами',
  'Непонятно, какие рекламные фразы приносят реальные деньги',
  'Лиды теряются из-за долгого первого ответа',
  'Каждый подрядчик отвечает только за свой узкий участок',
]

const connectedBenefits = [
  'Заявка с любого источника за 1 секунду попадает в CRM',
  'Автоматические цепочки уведомляют команду в Telegram',
  'Сквозная аналитика считает окупаемость рекламы до выручки',
  'AI-ассистенты готовят черновики ответов и квалифицируют лиды',
  'Один архитектурный подход и единая ответственность за результат',
]

export default function ServicesConnectedStack() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СИСТЕМНЫЙ ПОДХОД"
            title="Инструменты работают сильнее, когда соединены."
            subtitle="VOLTRENA проектирует не изолированные услуги, а синхронизированный цифровой стек для роста выручки."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Unconnected Stack */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-red-500/20 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-red-400 font-mono text-sm font-bold uppercase tracking-wider">
                  <XCircle className="w-5 h-5" />
                  Разрозненные исполнители
                </div>
                <ul className="space-y-4">
                  {separateProblems.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-red-400 font-bold flex-shrink-0">✕</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-border text-xs text-text-muted italic">
                Итог: хаос в данных, потерянные заявки и слив бюджета
              </div>
            </div>
          </ScrollReveal>

          {/* Connected Stack */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/30 bg-accent/5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-accent font-mono text-sm font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5" />
                  Единая система VOLTRENA
                </div>
                <ul className="space-y-4">
                  {connectedBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-accent/20 text-xs text-accent font-mono">
                Итог: прозрачные продажи и предсказуемый рост
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Мы проектируем не отдельные инструменты, а связанный digital stack.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
