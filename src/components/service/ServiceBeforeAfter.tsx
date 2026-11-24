'use client'

import React from 'react'
import { ArrowRight, Check, X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Band, pad } from '@/components/service/Band'

const defaultBefore = [
  'Клиент отправляет заявку',
  'Менеджер вручную копирует данные',
  'Открывает CRM',
  'Создаёт сделку',
  'Пишет сообщение',
  'Создаёт задачу',
  'Обновляет таблицу',
]

const defaultAfter = [
  'Клиент отправляет заявку',
  'Система обрабатывает данные',
  'CRM-запись создана',
  'Менеджер уведомлён',
  'Черновик ответа готов',
  'Задача поставлена',
  'Данные обновлены',
]

interface ServiceBeforeAfterProps {
  tag?: string
  title?: string
  subtitle?: string
  beforeTitle?: string
  beforeSubtitle?: string
  beforeItems?: string[]
  afterTitle?: string
  afterSubtitle?: string
  afterItems?: string[]
  conclusion?: string
}

const clean = (s: string) => s.replace(/^(BEFORE|AFTER)\s*:\s*/i, '')

export default function ServiceBeforeAfter({
  tag,
  title = 'Как меняется процесс после автоматизации.',
  subtitle,
  beforeTitle = 'Было: хаос и рутина',
  beforeSubtitle = 'Менеджер тратит время на рутину вместо продаж',
  beforeItems = defaultBefore,
  afterTitle = 'Стало: порядок и контроль',
  afterSubtitle = 'Менеджер начинает с готовой информацией',
  afterItems = defaultAfter,
  conclusion = 'Если действие повторяется — его стоит проверить на возможность автоматизации.',
}: ServiceBeforeAfterProps) {
  return (
    <Band tone="dark">
      <SectionHeading tag={tag} title={title} subtitle={subtitle} align="center" tone="dark" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
        <span className="absolute left-1/2 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#C9854D] text-white shadow-lg shadow-[#C9854D]/40 lg:flex" aria-hidden="true">
          <ArrowRight className="h-5 w-5" />
        </span>

        <ScrollReveal>
          <div className="relative h-full rounded-3xl bg-white/[0.03] p-6 ring-1 ring-[#E07B67]/25 md:p-8">
            <span className="rounded-md bg-[#E07B67]/15 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#E07B67]">до</span>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#F4F1EA]">{clean(beforeTitle)}</h3>
            <ol className="mt-5 space-y-2.5">
              {beforeItems.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#A9B3B1]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E07B67]/15 text-[#E07B67]">
                    {i === 0 ? <span className="font-mono text-[10px]">{pad(1)}</span> : <X className="h-3 w-3" strokeWidth={3} />}
                  </span>
                  <span className={i === 0 ? 'font-semibold text-[#E6EAE9]' : ''}>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm italic text-[#E07B67]/80">{beforeSubtitle}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#3E7778]/20 to-white/[0.03] p-6 ring-1 ring-[#6FB0AB]/40 md:p-8">
            <span className="rounded-md bg-[#3E7778]/30 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#9FD0CB]">после</span>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#F4F1EA]">{clean(afterTitle)}</h3>
            <ol className="mt-5 space-y-2.5">
              {afterItems.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#E6EAE9]">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3E7778] text-white">
                    <Check className="h-3 w-3" strokeWidth={3.5} />
                  </span>
                  <span className={i === 0 ? 'font-semibold' : ''}>{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-[#9FD0CB]">{afterSubtitle}</p>
          </div>
        </ScrollReveal>
      </div>

      {conclusion && (
        <ScrollReveal delay={200}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-xl font-extrabold leading-snug tracking-tight text-[#F4F1EA] md:text-3xl">{conclusion}</p>
        </ScrollReveal>
      )}
    </Band>
  )
}
