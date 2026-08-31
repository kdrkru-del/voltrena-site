'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { HelpCircle, CheckCircle2 } from 'lucide-react'

const questions = [
  'Какой рекламный канал приносит реальные деньги, а не пустые клики?',
  'Сколько стоит привлечение одного реального покупателя (CAC)?',
  'На каком именно этапе менеджеры или сайт теряют заявки?',
  'Какой процент обращений нецелевой и почему?',
  'Какой рекламный источник стоит масштабировать в первую очередь?',
  'Какова реальная окупаемость маркетинговых инвестиций (ROMI)?',
]

export default function ServiceWhatOwnerSees() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ДЛЯ РУКОВОДИТЕЛЯ"
            title="Руководителю нужны ответы, а не таблицы."
            subtitle="Хорошая аналитика помогает принимать точные управленческие решения на основе фактов."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {questions.map((q, i) => (
            <ScrollReveal key={q} delay={i * 70}>
              <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-3 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-text-primary leading-snug mb-4">
                    {q}
                  </h3>
                </div>
                <div className="pt-3 border-t border-border/50 flex items-center gap-2 text-xs font-mono text-accent">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Ответ в дашборде</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Ценность аналитики — в решениях и действиях после цифр.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
