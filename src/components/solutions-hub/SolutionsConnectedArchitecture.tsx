'use client'

import React, { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Layers } from 'lucide-react'

const architectureNodes = [
  { id: 'source', label: '1. Источник спроса / данных', desc: 'Реклама, поиск, базы, парсинг' },
  { id: 'interface', label: '2. Интерфейс контакта', desc: 'Сайт, лендинг, Telegram бот' },
  { id: 'qualification', label: '3. Квалификация и скоринг', desc: 'AI-ассистент, регламенты, формы' },
  { id: 'crm', label: '4. CRM и процесс продаж', desc: 'Воронка сделок, автозадачи' },
  { id: 'automation', label: '5. Автоматизация операций', desc: 'Workflow n8n, счета, документы' },
  { id: 'analytics', label: '6. Аналитика и сигналы', desc: 'Сквозной дашборд, ROMI, алерты' },
]

export default function SolutionsConnectedArchitecture() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ОБЩАЯ АРХИТЕКТУРА"
            title="Каждое решение строится из шести базовых узлов."
            subtitle="Разница между отдельной услугой и решением в том, что в решении все узлы изначально спроектированы для совместной работы."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {architectureNodes.map((node) => (
                <div
                  key={node.id}
                  className="p-4 rounded-xl bg-bg-primary border border-accent/30 flex flex-col justify-between"
                >
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-text-primary block mb-1">
                      {node.label}
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/60 text-center">
              <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto">
                Вам не нужно настраивать интеграции вручную или состыковывать разных подрядчиков — мы сдаём готовую сквозную цепочку.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
