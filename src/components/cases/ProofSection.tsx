'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, ExternalLink } from 'lucide-react'

const realCases = [
  {
    title: 'ТехУчёт',
    system: 'Система привлечения клиентов',
    systemHref: '/solutions/digital-sales-system/',
    task: 'Получать целевые обращения по регистрации спецтехники в Гостехнадзоре.',
    implemented: 'Сайт → Яндекс Директ → UTM → заявка → обработка лида',
    result: 'Собран единый контур привлечения и фиксации обращений вместо отдельного сайта без связанной воронки.',
    href: '/cases/#tehuchet',
    externalDemoUrl: 'https://techuchet24.ru/',
    externalDemoLabel: 'Открыть techuchet24.ru',
  },
  {
    title: 'ZEMTRAK',
    system: 'Система привлечения клиентов',
    systemHref: '/solutions/digital-sales-system/',
    task: 'Показать парк спецтехники и переводить спрос на аренду в конкретную заявку.',
    implemented: 'Каталог техники → посадочные сценарии → Директ → заявка',
    result: 'Сайт перестроен вокруг аренды техники и задач, для которых она нужна, а не вокруг абстрактных подрядных услуг.',
    href: '/cases/#zemtrak',
    externalDemoUrl: 'https://zemtrak.ru/',
    externalDemoLabel: 'Открыть zemtrak.ru',
  },
  {
    title: 'Globerion Group',
    system: 'B2B Sales / Digital Infrastructure',
    systemHref: '/solutions/b2b-sales-system/',
    task: 'Собрать международную B2B-инфраструктуру для поиска и обработки запросов покупателей.',
    implemented: 'Продуктовая структура → B2B-каталог → запрос → данные → коммуникация',
    result: 'Цифровая инфраструктура строится вокруг конкретных товарных направлений и B2B-запросов, а не вокруг списка услуг компании.',
    href: '/cases/',
  },
  {
    title: 'Зелёный Срез',
    system: 'Система привлечения клиентов',
    systemHref: '/solutions/digital-sales-system/',
    task: 'Получать локальные заявки на спил и обслуживание деревьев в Москве и области.',
    implemented: 'Гео-страницы → форма → оценка задачи → Telegram',
    result: 'Короткий путь от локального спроса до обращения исполнителю без лишних промежуточных действий.',
    href: '/cases/#zelenyi-srez',
    externalDemoUrl: 'https://zelsrez.ru/',
    externalDemoLabel: 'Открыть zelsrez.ru',
  },
]

export default function ProofSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="СИСТЕМЫ В РАБОТЕ"
            title="Не просто что сделали. Какую систему собрали."
            subtitle="Каждый кейс показываем через бизнес-задачу, архитектуру решения и результат — чтобы было понятно, как продуктовая система работает на практике."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {realCases.map((c, idx) => (
            <ScrollReveal key={c.title} delay={idx * 70}>
              <article className="h-full p-6 sm:p-7 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between shadow-lg group min-w-0">
                <div>
                  <Link href={c.systemHref} className="font-mono text-[11px] text-accent uppercase tracking-wider font-semibold inline-flex items-center gap-1.5 mb-3 hover:text-accent-light">
                    {c.system}
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-5">{c.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">Задача</span>
                      <p className="text-sm text-text-secondary leading-relaxed">{c.task}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted block mb-1.5">Что внедрено</span>
                      <p className="text-sm text-text-primary leading-relaxed break-words">{c.implemented}</p>
                    </div>
                    <div className="rounded-xl bg-bg-primary border border-border/70 p-4">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent block mb-1.5">Результат</span>
                      <p className="text-sm text-text-secondary leading-relaxed">{c.result}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-4 border-t border-border/60">
                  <Link href={c.href} className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light">
                    Разобрать кейс
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {c.externalDemoUrl && (
                    <a href={c.externalDemoUrl} target="_blank" rel="noopener noreferrer" className="sm:ml-auto inline-flex min-h-[44px] items-center gap-2 text-xs font-mono text-text-secondary hover:text-text-primary">
                      {c.externalDemoLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link href="/cases/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-border hover:border-accent text-text-primary hover:text-accent font-semibold text-xs sm:text-sm transition-colors min-h-[44px]">
              <span>Смотреть все кейсы</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
