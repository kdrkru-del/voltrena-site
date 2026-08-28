'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ServiceDataProblem() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Проблема не в отсутствии данных."
            subtitle="Проблема в том, что они разбросаны по десяткам источников, меняются и требуют ручной обработки."
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-red-500/20 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-red-500/5"></div>
              <h3 className="text-2xl font-bold text-red-400 mb-6 relative z-10">ДО: Хаос и рутина</h3>
              <ul className="space-y-4 relative z-10 text-text-secondary">
                <li className="flex items-center gap-3 transform -rotate-1"><span className="text-red-500 text-xl">✗</span> Десятки разрозненных сайтов</li>
                <li className="flex items-center gap-3 transform translate-x-2"><span className="text-red-500 text-xl">✗</span> Ручной поиск и копирование в Excel</li>
                <li className="flex items-center gap-3 transform -translate-x-1"><span className="text-red-500 text-xl">✗</span> Дубликаты и ошибки</li>
                <li className="flex items-center gap-3 transform rotate-1"><span className="text-red-500 text-xl">✗</span> Устаревшие данные</li>
                <li className="flex items-center gap-3 transform translate-x-3"><span className="text-red-500 text-xl">✗</span> Потеря времени</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/20 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-accent/5"></div>
              <h3 className="text-2xl font-bold text-accent mb-6 relative z-10">ПОСЛЕ: Структура и порядок</h3>
              <ul className="space-y-4 relative z-10 text-text-primary font-medium">
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Автоматический сбор</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Единая структура</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Очистка и фильтрация</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Регулярное обновление</li>
                <li className="flex items-center gap-3"><span className="text-accent text-xl">✓</span> Доставка в рабочую систему</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-20 text-center">
            <h2 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
              Мы автоматизируем этот процесс.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
