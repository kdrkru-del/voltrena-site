'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { siteConfig } from '@/config/site';
import { ArrowRight, Users } from 'lucide-react';

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
];

export default function HomeTeamTrust() {
  return (
    <section className="py-20 md:py-28 bg-[#101416] relative overflow-hidden border-t border-[#232B2D]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
              <Users className="w-3.5 h-3.5 text-[#5A9692]" />
              <span>Команда инженеров</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2EFE6] tracking-tight mb-4">
              За каждой системой стоят люди.
            </h2>
            <p className="text-[#AAB4B1] text-base sm:text-lg">
              Прямой контакт со специалистами, принимающими решения по проекту, без посредников и лишних звеньев.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <ScrollReveal key={member.id} delay={idx * 60}>
              <SpotlightCard className="h-full rounded-2xl bg-[#131719] border border-[#232B2D] overflow-hidden shadow-xl hover:border-[#384547] transition-colors flex flex-col justify-between group">
                {/* Image container */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#0D1012]">
                  <img
                    src={siteConfig.getAssetUrl(member.image)}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.position} group-hover:scale-[1.03] transition-transform duration-500`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Initials fallback */}
                  <div
                    className="absolute inset-0 items-center justify-center bg-[#14181A] border border-[#232B2D] text-3xl font-bold text-[#5A9692] select-none"
                    style={{ display: 'none' }}
                    aria-hidden="true"
                  >
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131719] via-[#131719]/30 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] font-mono text-[#5A9692] font-semibold uppercase tracking-wider mb-1">
                      {member.role}
                    </div>
                    <h3 className="text-lg font-bold text-[#F2EFE6] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#AAB4B1] leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* About team CTA link */}
        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14181A] border border-[#2B3537] hover:border-[#5A9692] text-[#F2EFE6] font-semibold text-xs sm:text-sm transition-all min-h-[44px] shadow-md hover:scale-[1.02]"
            >
              <span>Подробнее о принципах команды</span>
              <ArrowRight className="w-4 h-4 text-[#5A9692]" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
