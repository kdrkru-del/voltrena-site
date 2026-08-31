'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { FileText, CheckCircle, Database, Sparkles, BookOpen, Compass } from 'lucide-react'

const principles = [
  {
    icon: CheckCircle,
    title: 'Прямые и точные ответы',
    desc: 'Структурированный ответ на вопрос в начале блока без длинных вводных фраз.',
  },
  {
    icon: Database,
    title: 'Факты и конкретика',
    desc: 'Цифры, параметры, реальные свойства и ограничения вместо абстрактного рекламного текста.',
  },
  {
    icon: Compass,
    title: 'Семантическая структура',
    desc: 'Четкая иерархия H1–H3, списки, таблицы и логичные абзацы для быстрого машинного парсинга.',
  },
  {
    icon: BookOpen,
    title: 'Практическая экспертиза',
    desc: 'Уникальные знания практиков отрасли: разбор ошибок, неочевидные нюансы и реальный опыт.',
  },
  {
    icon: Sparkles,
    title: 'Сравнения и критерии',
    desc: 'Объективные таблицы «когда подходит А, а когда Б», помогающие сделать осознанный выбор.',
  },
  {
    icon: FileText,
    title: 'Актуальность информации',
    desc: 'Регулярное обновление данных о ценах, регламентах, технологиях и стандартах.',
  },
]

export default function ServiceAiSearchReadiness() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="AI CITATION READINESS"
            title="AI-поиск предпочитает понятную и структурированную информацию."
            subtitle="Принципы подготовки контента, который с высокой вероятностью используется генеративными системами в качестве источника."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {principles.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={i * 70}>
                <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="p-3 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.desc}
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
              Контент должен быть полезным человеку и понятным поисковой машине.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
