'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function AboutStartWithProblem() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <ScrollReveal>
          <div className="space-y-12">
            {/* Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
              ПРИНЦИП 01 / ФОКУС НА ЗАДАЧЕ
            </span>

            {/* Big statements */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
                Мы начинаем <br className="hidden sm:inline" />
                не с сайта.
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-secondary tracking-tight">
                И не с рекламы.
              </h3>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent tracking-tight pt-2">
                Сначала — задача.
              </p>
            </div>

            {/* Question explanation */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl border-l-2 border-accent/40 pl-4">
              Что бизнес хочет изменить? Получать больше обращений? Снизить стоимость привлечения клиента? Ускорить обработку заявок? Автоматизировать ручную работу? Создать новый канал продаж?
            </p>

            {/* Next stage */}
            <div className="pt-4">
              <h4 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                Потом — система.
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
                Мы смотрим, как клиент проходит путь от первого контакта до покупки и где в этой цепочке бизнес теряет время, данные, заявки или деньги.
              </p>
            </div>

            {/* Final stage */}
            <div className="pt-2">
              <h4 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                И только потом — инструменты.
              </h4>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mb-4">
                Иногда нужен новый сайт. Иногда — новая рекламная стратегия. Иногда проблема находится внутри CRM. А иногда несколько небольших изменений дают больше результата, чем большой дорогостоящий проект.
              </p>
            </div>

            {/* Closing statement */}
            <div className="p-6 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl">
              <p className="text-xl sm:text-2xl font-bold text-text-primary">
                Мы не продаём технологию. <br />
                <span className="text-accent">Мы решаем задачу.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
