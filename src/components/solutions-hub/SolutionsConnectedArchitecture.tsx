'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Layers, ArrowDown } from 'lucide-react'

const services = ['Трафик', 'Сайты', 'CRM', 'AI', 'Telegram', 'Парсинг', 'Аналитика']
const solutions = ['Lead Generation', 'B2B Lead Machine', 'AI Sales Manager', 'Sales Automation', 'Digital Intelligence']

export default function SolutionsConnectedArchitecture() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="МОДУЛЬНОСТЬ"
            title="Каждое решение строится из проверенных блоков."
            subtitle="Одни и те же технологии используются по-разному в зависимости от специфики бизнес-задачи."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-bg-surface border border-border text-center">
          {/* Services row */}
          <span className="text-xs font-mono text-text-muted uppercase tracking-widest block mb-4">
            БАЗОВЫЕ ИНСТРУМЕНТЫ (SERVICES)
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {services.map((s) => (
              <span key={s} className="px-3.5 py-1.5 rounded-lg bg-bg-primary border border-border text-xs font-mono text-text-primary">
                {s}
              </span>
            ))}
          </div>

          <div className="flex justify-center my-4 text-accent">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>

          {/* Solutions row */}
          <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-4 font-semibold">
            ГОТОВЫЕ СИСТЕМЫ (SOLUTIONS)
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {solutions.map((sol) => (
              <span key={sol} className="px-4 py-2 rounded-xl bg-accent/10 border border-accent/30 text-xs md:text-sm font-mono text-accent font-bold">
                {sol}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
