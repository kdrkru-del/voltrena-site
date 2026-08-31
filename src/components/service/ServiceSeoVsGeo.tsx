'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Search, Sparkles, Check } from 'lucide-react'

const seoPoints = [
  'Поисковый спрос и семантическое ядро',
  'Техническое SEO и безупречная индексация',
  'Оптимизация коммерческих страниц под ключевые фразы',
  'Логичная внутренняя перелинковка и структура',
  'Позиции и видимость в Яндекс и Google',
  'Локальное присутствие на картах (Яндекс Карты, 2ГИС)',
]

const geoPoints = [
  'Generative Engine Optimization (AI Visibility)',
  'Структурированные данные и микроразметка Schema.org',
  'Четкие факты, цифры и экспертные формулировки',
  'Согласованность информации о бренде (Entity Graph)',
  'Понятность контента для нейросетевых моделей',
  'Готовность материалов к прямому цитированию в AI-ответах',
]

export default function ServiceSeoVsGeo() {
  return (
    <section className="py-20 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СИНЕРГИЯ"
            title="SEO и GEO работают вместе."
            subtitle="Классический поиск и генеративные AI-интерфейсы дополняют друг друга в единой системе видимости."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* SEO Card */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 rounded-xl border border-accent/30 bg-accent/5 text-accent mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Классическое SEO</h3>
                <p className="text-xs font-mono text-accent uppercase tracking-widest mb-6">
                  Цель: видимость в поисковой выдаче (SERP)
                </p>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Помогает пользователям находить ваш сайт в Яндекс и Google по коммерческим и информационным запросам.
                </p>
                <ul className="space-y-3">
                  {seoPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 text-xs font-mono text-text-muted">
                Фокус: трафик из поисковых систем
              </div>
            </div>
          </ScrollReveal>

          {/* GEO Card */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/30 bg-gradient-to-b from-bg-surface to-bg-secondary h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-accent text-bg-primary text-xs font-mono font-bold rounded-bl-xl uppercase tracking-wider">
                AI Search Ready
              </div>
              <div>
                <div className="inline-flex p-3 rounded-xl border border-purple-500/30 bg-purple-500/5 text-purple-400 mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">GEO & AI Search</h3>
                <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-6">
                  Цель: авторитет в генеративных ответах
                </p>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Делает данные о вашей компании понятными и доступными для AI-поиска, нейросетевых ассистентов и суммаризаторов.
                </p>
                <ul className="space-y-3">
                  {geoPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 text-xs font-mono text-purple-400/80">
                Фокус: присутствие в ответах нового поколения
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Это не две разные стратегии — это единая система цифрового присутствия бренда.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
