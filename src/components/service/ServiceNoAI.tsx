'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export default function ServiceNoAI() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <SectionHeading
              tag="ЧЕСТНО"
              title="Не каждую задачу нужно решать через AI."
              align="center"
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full">
                <h3 className="text-lg font-bold text-text-primary mb-4">Простая автоматизация</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Часто обычная deterministic automation — быстрее, дешевле, стабильнее и предсказуемее.
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {['Form', 'CRM', 'Telegram'].map((step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-sm font-mono text-text-primary">
                        {step}
                      </span>
                      {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-accent/40" />}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-text-secondary/60">
                  Не требует AI. Работает предсказуемо.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="p-8 rounded-2xl bg-bg-surface border border-accent/20 h-full">
                <h3 className="text-lg font-bold text-text-primary mb-4">Когда нужен AI</h3>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  AI добавляется только там, где нужно анализировать смысл, классифицировать или генерировать контент.
                </p>
                <ul className="space-y-2">
                  {[
                    'Понять смысл текста',
                    'Классифицировать обращение',
                    'Извлечь структурированные данные',
                    'Определить приоритет',
                    'Подготовить черновик ответа',
                    'Суммаризировать документ',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
                Используем AI только там, где он действительно даёт пользу.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
