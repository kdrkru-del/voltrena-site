'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const realCases = [
  {
    title: 'ТехУчёт',
    tag: 'B2B ПРИВЛЕЧЕНИЕ & САЙТ',
    scope: 'Сайт + Яндекс Директ + CRM',
    desc: 'Нишевой посадочный контур в сегменте спецтехники и Гостехнадзора: сквозная UTM-разметка, целевые посадочные страницы и моментальная передача лидов в CRM без потерь.',
    href: '/cases/#tehuchet',
  },
  {
    title: 'Зелёный Срез',
    tag: 'ЛОКАЛЬНЫЙ СЕРВИС & КОНВЕРСИЯ',
    scope: 'Локальный сайт + форма с фото + Telegram',
    desc: 'Гео-структура посадочных страниц, калькулятор быстрой оценки стоимости по фото и доставка заявок напрямую дежурному инженеру в Telegram.',
    href: '/cases/#zelenyi-srez',
  },
  {
    title: 'ГИЭ Групп',
    tag: 'B2B ДАННЫЕ & ЗАКУПКИ',
    scope: 'Аналитический шорт-лист + 16 контрактов',
    desc: 'Система поиска и фильтрации профильных закупок от 1 млн ₽ без жестких ограничений по госопыту. 16 выигранных контрактов (3,5–12 млн ₽) на основе подготовленной базы.',
    href: '/cases/#gie-group',
  },
]

export default function ProofSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ПРАКТИКА"
            title="Реальные проекты и результаты."
            subtitle="Показываем, как работают созданные нами системы на реальных задачах клиентов."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {realCases.map((c, idx) => (
            <ScrollReveal key={c.title} delay={idx * 70}>
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-all flex flex-col justify-between shadow-lg group">
                <div>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-wider font-semibold block mb-2">
                    {c.tag}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {c.title}
                  </h3>
                  <p className="font-mono text-xs text-text-muted mb-4">
                    {c.scope}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light group-hover:translate-x-1 transition-transform min-h-[44px]"
                >
                  <span>Разобрать архитектуру проекта</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Global CTA link */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/cases/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-border hover:border-accent text-text-primary hover:text-accent font-semibold text-xs sm:text-sm transition-all min-h-[44px]"
            >
              <span>Смотреть все кейсы агентства</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
