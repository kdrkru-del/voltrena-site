'use client'

import React from 'react'
import { ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { DarkHeroSection, HeroActions, HeroEyebrow, HeroLead, HeroTitle } from '@/components/ui/DarkHero'
import { BrowserFrame } from '@/components/cases/ProofSection'

const shot = (id: string) => siteConfig.getAssetUrl(`/images/cases/${id}-desktop.jpg`)

export default function CasesHero() {
  return (
    <DarkHeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <HeroEyebrow>Кейсы</HeroEyebrow>
          <HeroTitle className="mt-5">Кейсы внедрений: от первого клика до сделки в CRM</HeroTitle>
          <HeroLead className="mt-5 max-w-xl">
            Показываем проекты через связку: спрос, интерфейс, заявка, данные, обработка и следующий шаг. Без выдуманных процентов и фейковых обещаний.
          </HeroLead>
          <HeroActions
            className="mt-8"
            primary={{ label: 'Разобрать похожую задачу', href: siteConfig.telegramUrl }}
            secondary={{ label: 'Смотреть кейсы', href: '#cases' }}
          />
          <div className="mt-8 inline-flex items-start gap-2.5 rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-2.5 text-xs font-mono text-[#A9B3B1]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#9FD0CB]" />
            <span>Только проверяемые артефакты и подтверждённые данные проектов</span>
          </div>
        </div>

        <div className="lg:col-span-6 min-w-0">
          <div className="group relative pb-14 sm:pb-16">
            <BrowserFrame
              src={shot('okna-center')}
              alt="Сайт Окна Центр"
              domain="окнацентр.рф"
              eager
              className="-rotate-1 transition-transform duration-700 group-hover:rotate-0"
            />
            <div className="absolute -bottom-0 right-0 w-[62%]">
              <BrowserFrame
                src={shot('centr-kondicionerov')}
                alt="Сайт Центр Кондиционеров"
                domain="центр-кондиционеров.рф"
                eager
                className="rotate-[1.5deg] transition-transform duration-700 group-hover:rotate-0 group-hover:translate-y-1"
              />
            </div>
          </div>
        </div>
      </div>
    </DarkHeroSection>
  )
}
