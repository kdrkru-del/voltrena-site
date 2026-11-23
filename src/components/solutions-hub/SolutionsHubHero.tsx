'use client'

import React from 'react'
import { DarkHeroSection, HeroActions, HeroEyebrow, HeroLead, HeroTitle } from '@/components/ui/DarkHero'
import { CrmVisual } from '@/components/sections/story/StoryVisuals'

export default function SolutionsHubHero() {
  return (
    <DarkHeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <HeroEyebrow>Решения</HeroEyebrow>
          <HeroTitle className="mt-5">Готовые цифровые системы для бизнеса</HeroTitle>
          <HeroLead className="mt-5 max-w-xl">
            Соединяем привлечение клиентов, сайт, CRM и автоматизацию в единый рабочий процесс.
          </HeroLead>
          <HeroActions
            className="mt-8"
            primary={{ label: 'Подобрать решение', href: '#solution-navigator' }}
            secondary={{ label: 'Обсудить задачу', href: '#contact' }}
          />
        </div>
        <div className="lg:col-span-6 min-w-0">
          <CrmVisual active />
        </div>
      </div>
    </DarkHeroSection>
  )
}
