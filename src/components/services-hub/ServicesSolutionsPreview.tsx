'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Sparkles, ArrowRight } from 'lucide-react'

const solutions = [
  {
    title: 'Lead Generation System',
    desc: 'Связка контекстной рекламы, конверсионного сайта, CRM и сквозной аналитики для постоянного притока клиентов.',
    stack: ['Яндекс Директ', 'Сайт', 'CRM', 'Аналитика'],
  },
  {
    title: 'B2B Lead Machine',
    desc: 'Система поиска корпоративных клиентов: парсинг реестров, автоматический скоринг контактов и прямой аутрич.',
    stack: ['B2B Базы', 'Парсинг', 'CRM Воронка', 'Аутрич'],
  },
  {
    title: 'AI Sales Assistant',
    desc: 'Нейросетевой ассистент и Telegram-бот для автоматической квалификации входящих заявок и помощи менеджерам.',
    stack: ['AI Модели', 'Telegram', 'CRM', 'Workflow'],
  },
  {
    title: 'Digital Market Intelligence',
    desc: 'Автоматический мониторинг цен конкурентов, динамики рынка и ежедневная сводка алертов в Telegram.',
    stack: ['Web Scraping', 'База данных', 'Дашборд', 'Telegram Alerts'],
  },
]

export default function ServicesSolutionsPreview() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ГОТОВЫЕ СИСТЕМЫ"
            title="Нужна не отдельная услуга, а готовое решение?"
            subtitle="Мы объединяем ключевые инструменты в комплексные пакеты под конкретные типы бизнеса."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {solutions.map((sol, i) => (
            <ScrollReveal key={sol.title} delay={i * 80}>
              <div className="h-full p-6 md:p-8 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <h3 className="text-lg font-bold text-text-primary">{sol.title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/50">
                  {sol.stack.map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-accent">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
