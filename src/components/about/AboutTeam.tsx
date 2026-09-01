'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/site'

const teamMembers = [
  {
    id: 'roman',
    name: 'Роман Корнев',
    role: 'Основатель / Digital-стратег',
    bio: 'Определяет стратегию проекта, бизнес-архитектуру и контролирует, чтобы технологии, маркетинг и продажи работали на одну задачу.',
    tags: ['Стратегия', 'Архитектура', 'Бизнес'],
    image: '/images/team/roman-kornev.jpg',
  },
  {
    id: 'andrey',
    name: 'Андрей Соколов',
    role: 'UX/UI & Brand Design',
    bio: 'Проектирует интерфейсы и визуальные системы, которые помогают объяснять продукт, формировать доверие и повышать конверсию.',
    tags: ['UX/UI', 'Brand', 'Design Systems'],
    image: '/images/team/andrey-sokolov.jpg',
  },
  {
    id: 'dmitry',
    name: 'Дмитрий Волков',
    role: 'Performance Marketing',
    bio: 'Отвечает за рекламную стратегию, привлечение клиентов, аналитику и оптимизацию экономики рекламных кампаний.',
    tags: ['Yandex Direct', 'Analytics', 'Performance'],
    image: '/images/team/dmitry-volkov.jpg',
  },
  {
    id: 'maxim',
    name: 'Максим Орлов',
    role: 'AI & Automation',
    bio: 'Проектирует AI-интеграции, автоматизированные процессы, парсинг данных и взаимодействие между бизнес-системами.',
    tags: ['AI', 'Automation', 'API'],
    image: '/images/team/maxim-orlov.jpg',
  },
]

export default function AboutTeam() {
  return (
    <section id="team" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ЛЮДИ"
            title="За каждой системой стоят люди."
            subtitle="Небольшая команда позволяет глубже погружаться в бизнес клиента и сохранять прямой контакт между заказчиком и специалистами, которые принимают решения по проекту."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.id} delay={idx * 70}>
              <div className="h-full rounded-2xl bg-bg-surface border border-border/80 overflow-hidden shadow-xl hover:border-accent/40 transition-all group flex flex-col justify-between">
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-primary">
                  <img
                    src={siteConfig.getAssetUrl(member.image)}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-1 font-semibold">
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
