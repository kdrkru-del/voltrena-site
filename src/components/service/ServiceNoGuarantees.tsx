'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ShieldAlert, CheckCircle2, XCircle } from 'lucide-react'

const weDoNot = [
  'Не обещаем гарантированный «топ-1 за 10 дней»',
  'Не используем серые методы и ссылочный спам',
  'Не гарантируем конкретные ответы в ChatGPT / Gemini',
  'Не пишем нечитаемые SEO-тексты «для роботов»',
]

const weDo = [
  'Устраняем технические ошибки и барьеры индексации',
  'Проектируем логичную структуру под реальный спрос',
  'Создаем полезные коммерческие и экспертные страницы',
  'Внедряем микроразметку Schema.org и GEO-сигналы',
  'Измеряем реальные заявки и связываем трафик с CRM',
]

export default function ServiceNoGuarantees() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ЧЕСТНЫЙ ПОДХОД"
            title="Никто не контролирует поисковый алгоритм."
            subtitle="Поисковые системы регулярно обновляются. Мы строим устойчивый фундамент, который сохраняет позиции при любых апдейтах."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* We do NOT */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-red-500/20 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-red-400 font-mono text-sm font-bold uppercase tracking-wider">
                  <XCircle className="w-5 h-5" />
                  Чего мы не обещаем
                </div>
                <ul className="space-y-4">
                  {weDoNot.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                      <span className="text-red-400 font-bold flex-shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 pt-4 border-t border-border text-xs text-text-muted italic">
                Остерегайтесь агентств, обещающих гарантированные позиции в закрытых алгоритмах
              </p>
            </div>
          </ScrollReveal>

          {/* We DO */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/30 bg-accent/5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-accent font-mono text-sm font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5" />
                  Что мы делаем на практике
                </div>
                <ul className="space-y-4">
                  {weDo.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text-primary">
                      <span className="text-accent font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-8 pt-4 border-t border-accent/20 text-xs text-accent font-mono">
                Результат: системный рост органической видимости и заявок
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
