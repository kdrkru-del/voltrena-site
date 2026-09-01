'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const mapNodes = [
  { step: '01', name: 'Спрос', desc: 'Поисковые запросы, реклама или реестры' },
  { step: '02', name: 'Интерфейс', desc: 'Посадочная страница с точным оффером' },
  { step: '03', name: 'Заявка', desc: 'Форма с UTM, фото и параметрами' },
  { step: '04', name: 'Данные', desc: 'Сквозная аналитика и разметка целей' },
  { step: '05', name: 'Операции', desc: 'Telegram алерты, CRM и квалификация' },
  { step: '06', name: 'Результат', desc: 'Продажа, контракт или окупаемость' },
]

export default function CasesSystemMap() {
  return (
    <section className="py-16 md:py-20 bg-bg-secondary relative overflow-hidden border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl mb-10 text-left sm:text-center sm:mx-auto">
            <span className="font-mono text-xs text-accent uppercase tracking-widest font-semibold block mb-2">
              КОММЕРЧЕСКИЙ КОНТУР
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Как мы оцениваем готовность системы
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary mt-2">
              VOLTRENA оценивает работу не только по внешнему виду страницы, а по тому, проходит ли задача через весь сквозной процесс.
            </p>
          </div>

          {/* Map Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
            {mapNodes.map((node, idx) => (
              <div
                key={node.step}
                className="p-4 rounded-xl bg-bg-surface border border-border/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-accent font-bold">
                      ШАГ {node.step}
                    </span>
                    {idx < mapNodes.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted hidden lg:block" />
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1">
                    {node.name}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-snug">
                    {node.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
