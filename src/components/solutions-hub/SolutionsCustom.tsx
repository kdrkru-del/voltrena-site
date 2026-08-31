'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Wrench } from 'lucide-react'

export default function SolutionsCustom() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-bg-surface border border-accent/30 text-center relative overflow-hidden shadow-2xl">
            <div className="inline-flex p-3 rounded-2xl bg-accent/10 text-accent mb-6 border border-accent/20">
              <Wrench className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Не нашли подходящий сценарий?
            </h2>
            <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Некоторые задачи требуют индивидуального подхода. Мы спроектируем custom-архитектуру: от нестандартных парсеров и AI-пайплайнов до сложных интеграций ERP и баз данных.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-accent mb-8">
              <span>Цель бизнеса</span>
              <span>→</span>
              <span>Индивидуальная архитектура</span>
              <span>→</span>
              <span>Сборка компонентов</span>
              <span>→</span>
              <span>Работающая система</span>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-bg-primary font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <span>Обсудить индивидуальную задачу</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
