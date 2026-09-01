'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, Layers, FileText, CheckCircle2 } from 'lucide-react'

const compactCases = [
  {
    title: 'ТехУчёт',
    scope: 'сайт + Яндекс Директ + tracking',
    desc: 'Нишевой посадочный контур сопровождения в Гостехнадзоре: 6 поисковых групп, 40 фраз, сквозная UTM-разметка.',
    href: '/cases/#tehuchet',
  },
  {
    title: 'Зелёный Срез',
    scope: 'локальный сайт + фото + Telegram delivery',
    desc: '26 локальных страниц, реальные пары «до / стало», форма с оценкой по фото и доставка заявок через Cloudflare Worker.',
    href: '/cases/#zelenyi-srez',
  },
  {
    title: 'ГИЭ Групп',
    scope: 'закупочный shortlist + 16 контрактов',
    desc: 'Поиск и отбор закупок от 1 млн ₽ без барьера по госопыту. По данным проекта, компания выиграла 16 контрактов (3,5–12 млн ₽).',
    href: '/cases/#gie-group',
  },
]

export default function ProofSection() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ПРАКТИКА"
            title="Работы, на которых виден системный подход"
            subtitle="Эти проекты показывают разные входы: сайт и реклама, локальная заявка с фото, закупочный поиск и отбор возможностей."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {compactCases.map((c, idx) => (
            <ScrollReveal key={c.title} delay={idx * 70}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-all flex flex-col justify-between shadow-lg group">
                <div>
                  <span className="font-mono text-xs text-accent font-semibold block mb-1">
                    {c.scope}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light group-hover:translate-x-1 transition-transform min-h-[44px]"
                >
                  <span>Разобрать кейс</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Global CTA link */}
        <ScrollReveal delay={250}>
          <div className="mt-10 text-center">
            <Link
              href="/cases/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]"
            >
              <span>Смотреть все кейсы</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
