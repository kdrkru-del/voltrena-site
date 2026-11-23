'use client'

import React from 'react'
import { DarkHeroSection, HeroActions, HeroEyebrow, HeroLead, HeroTitle } from '@/components/ui/DarkHero'
import { PipelineVisual } from '@/components/service/HeroVisuals'

const servicePillars = [
  { id: 'attract', label: 'Привлечь', detail: 'Директ, SEO / GEO, B2B-поиск' },
  { id: 'convert', label: 'Конвертировать', detail: 'Сайты, калькуляторы, Mini Apps' },
  { id: 'automate', label: 'Автоматизировать', detail: 'ИИ-ассистенты, боты, CRM-воронки' },
  { id: 'measure', label: 'Измерять', detail: 'Парсинг данных, сквозная аналитика' },
]

export default function ServicesHubHero() {
  return (
    <DarkHeroSection>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <HeroEyebrow>Услуги</HeroEyebrow>
          <HeroTitle className="mt-5">Услуги для каждого участка цифровой системы продаж</HeroTitle>
          <HeroLead className="mt-5 max-w-xl">
            Можно начать с сайта, рекламы, CRM, автоматизации или аналитики — а затем соединить нужные компоненты в одну управляемую систему.
          </HeroLead>
          <HeroActions
            className="mt-8"
            primary={{ label: 'Выбрать услугу', href: '#service-groups' }}
            secondary={{ label: 'Описать задачу', href: '#contact' }}
          />
        </div>
        <div className="lg:col-span-6 min-w-0">
          <PipelineVisual nodes={servicePillars} title="Система продаж · 4 этапа" tag="карта услуг" />
        </div>
      </div>
    </DarkHeroSection>
  )
}
