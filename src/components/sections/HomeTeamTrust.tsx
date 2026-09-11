'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/site'
import { ArrowRight } from 'lucide-react'

const teamMembers = [
  {
    id: 'roman',
    name: 'Роман Корнев',
    role: 'Основатель / Digital-стратег',
    desc: 'Определяет бизнес-архитектуру, сквозную стратегию и лично контролирует качество реализации.',
    image: '/images/team/roman-kornev.jpg',
    position: 'object-top',
  },
  {
    id: 'andrey',
    name: 'Андрей Соколов',
    role: 'UX/UI & Brand Design',
    desc: 'Проектирует интерфейсы и дизайн-системы, формирующие доверие и повышающие конверсию.',
    image: '/images/team/andrey-sokolov.jpg',
    position: 'object-[50%_15%]',
  },
  {
    id: 'dmitry',
    name: 'Дмитрий Волков',
    role: 'Performance Marketing',
    desc: 'Отвечает за привлечение целевого трафика, рекламную стратегию и аналитику окупаемости.',
    image: '/images/team/dmitry-volkov.jpg',
    position: 'object-[50%_15%]',
  },
  {
    id: 'maxim',
    name: 'Максим Орлов',
    role: 'AI & Automation',
    desc: 'Проектирует AI-интеграции, автоматизированные сценарии и сбор рыночных данных.',
    image: '/images/team/maxim-orlov.jpg',
    position: 'object-[50%_15%]',
  },
]

export default function HomeTeamTrust() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            title="За каждой системой стоят люди."
            subtitle="Прямой контакт со специалистами, принимающими решения по проекту, без посредников и лишних звеньев."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.id} delay={idx * 60}>
              <div className="h-full rounded-2xl bg-bg-surface border border-border/80 overflow-hidden shadow-lg hover:border-accent/40 transition-colors flex flex-col justify-between group">
                {/* Image with headroom */}
                <div className="relative aspect-square w-full overflow-hidden bg-bg-primary">
                  <img
                    src={siteConfig.getAssetUrl(member.image)}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.position} group-hover:scale-[1.02] transition-transform duration-500`}
                    loading="lazy"
                    onError={(e) => {
                      // Hide broken image and show initials fallback
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Initials fallback (shown if image fails to load) */}
                  <div
                    className="absolute inset-0 items-center justify-center bg-bg-surface border border-border/60 text-3xl font-bold text-accent select-none"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  >
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-80" />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-mono text-[11px] text-accent uppercase tracking-wider block mb-1 font-semibold">
                      {member.role}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* About team CTA link */}
        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-bg-surface border border-border hover:border-accent text-text-primary hover:text-accent font-semibold text-xs sm:text-sm transition-colors min-h-[44px]"
            >
              <span>Подробнее о принципах команды</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
