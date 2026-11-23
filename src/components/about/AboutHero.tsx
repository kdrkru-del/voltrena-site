'use client'

import React from 'react'
import { BarChart3, Bot, Globe, Megaphone, Workflow } from 'lucide-react'
import { DarkHeroSection, HeroActions, HeroEyebrow, HeroLead, HeroTitle } from '@/components/ui/DarkHero'

const modules = [
  { icon: Megaphone, label: 'Реклама' },
  { icon: Globe, label: 'Сайты' },
  { icon: Workflow, label: 'CRM' },
  { icon: Bot, label: 'Боты и AI' },
  { icon: BarChart3, label: 'Аналитика' },
]

export default function AboutHero() {
  return (
    <DarkHeroSection>
      <div className="max-w-4xl mx-auto text-center">
        <HeroEyebrow>О нас</HeroEyebrow>
        <HeroTitle className="mt-5 mx-auto max-w-4xl">
          Мы строим не отдельные инструменты. <br className="hidden sm:inline" />
          <span className="text-[#D99A62]">Мы строим системы роста.</span>
        </HeroTitle>
        <HeroLead className="mt-6 mx-auto max-w-3xl">
          VOLTRENA Digital объединяет стратегию, разработку, маркетинг, данные и AI-автоматизацию в одной системе — от первого контакта с клиентом до заявки, продажи и дальнейшего роста.
        </HeroLead>
        <HeroActions
          className="mt-8 sm:justify-center"
          primary={{ label: 'Познакомиться с командой', href: '#team' }}
          secondary={{ label: 'Обсудить проект', href: '#contact' }}
        />

        <ul className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {modules.map(({ icon: Icon, label }, i) => (
            <React.Fragment key={label}>
              <li className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] ring-1 ring-white/10 px-4 py-2 text-sm font-semibold text-[#E6EAE9]">
                <Icon className="h-4 w-4 text-[#D99A62]" />
                {label}
              </li>
              {i < modules.length - 1 && <span className="hidden sm:block h-px w-6 bg-gradient-to-r from-[#3E7778] to-[#C9854D]" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs tracking-[0.18em] uppercase text-[#7F8987]">От первого клика — до продажи</p>
      </div>
    </DarkHeroSection>
  )
}
