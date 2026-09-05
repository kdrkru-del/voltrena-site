'use client'

import React from 'react'
import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react'
import { casesData } from '@/data/cases'

export default function CasesFeaturedOverview() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ПРОЕКТЫ"
            title="Проекты в разработке и работающие системы"
            subtitle="Показываем как готовые внедрения, так и проекты в активной разработке, включая интерактивные прототипы на этапе выбора направления."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 space-y-8 max-w-5xl mx-auto">
          {casesData.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 80}>
              <div className="p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-all shadow-xl group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Info */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
                          {item.label}
                        </span>
                        {item.statusBadge && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>{item.statusBadge}</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                        {item.shortDescription}
                      </p>
                    </div>

                    {/* Action links */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <Link
                        href={`#${item.anchorId}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-accent-light transition-colors group-hover:translate-x-1 duration-200"
                      >
                        <span>Разобрать кейс подробно</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {item.externalDemoUrl && (
                        <a
                          href={item.externalDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-white hover:bg-accent-light text-xs font-semibold shadow-sm transition-all"
                        >
                          <span>{item.externalDemoLabel || 'Смотреть демо'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Key metrics */}
                  <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-bg-primary border border-border/80">
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block mb-3 font-semibold">
                      Подтверждённые параметры проекта:
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-lg bg-bg-surface border border-border/60">
                          <span className="text-sm sm:text-base font-bold text-text-primary font-mono block">
                            {m.value}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-text-secondary leading-tight block mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
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
