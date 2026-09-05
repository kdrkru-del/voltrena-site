'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CheckCircle2, AlertCircle, ArrowRight, Layers, Database, Activity, ExternalLink, Sparkles, Globe } from 'lucide-react'
import { casesData, CaseItem } from '@/data/cases'

export default function CaseDetailSections() {
  return (
    <div className="space-y-24 md:space-y-32 bg-bg-primary py-12">
      {casesData.map((item, idx) => (
        <section
          key={item.id}
          id={item.anchorId}
          className="py-16 md:py-20 bg-bg-secondary border-y border-border/40 scroll-mt-24 relative overflow-hidden"
        >
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <ScrollReveal>
              {/* Header */}
              <div className="max-w-4xl mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-accent font-bold px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                    КЕЙС 0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-text-muted uppercase">
                    {item.label}
                  </span>
                  {item.statusBadge && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{item.statusBadge}</span>
                    </span>
                  )}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  {item.problem}
                </p>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: What was built & Result */}
                <div className="lg:col-span-7 space-y-6">
                  {/* What was built */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/80">
                    <h3 className="text-base sm:text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-accent" />
                      <span>Что было собрано в проекте</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {item.whatWasBuilt.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Flow chain */}
                  <div className="p-5 rounded-xl bg-bg-surface border border-accent/30">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-2 font-semibold">
                      Сквозная цепочка системы:
                    </span>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-text-primary font-medium">
                      {item.systemFlow.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2.5 py-1 rounded bg-bg-primary border border-border">
                            {step}
                          </span>
                          {sIdx < item.systemFlow.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-accent shrink-0" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Result statement */}
                  <div className="p-6 rounded-2xl bg-bg-surface border border-border/80">
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider block mb-1">
                      Итог и результат:
                    </span>
                    <p className="text-sm sm:text-base font-bold text-text-primary leading-relaxed">
                      {item.resultStatement}
                    </p>
                  </div>
                </div>

                {/* Right: Demo Artifact & Limitations */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Live Demo Banner for Okna Center */}
                  {item.id === 'okna-center' && item.externalDemoUrl && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-accent/15 via-bg-surface to-bg-surface border border-accent/40 shadow-xl relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-semibold text-accent">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Интерактивный стенд</span>
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <h4 className="text-base font-bold text-text-primary mb-2">
                        5 концепций Hero для компании «Окна Центр»
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mb-4">
                        Вы можете прямо сейчас протестировать все 5 вариантов первого экрана в реальном браузере: динамику света, WebGL-глубину, панорамные виды Владивостока и эффекты скролла.
                      </p>
                      <a
                        href={item.externalDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-all shadow-md shadow-accent/20"
                      >
                        <span>{item.externalDemoLabel || 'Открыть интерактивное демо (5 концепций)'}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  {/* Live Project Banner for ZemTrak */}
                  {item.id === 'zemtrak' && item.externalDemoUrl && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-accent/15 via-bg-surface to-bg-surface border border-accent/40 shadow-xl relative overflow-hidden">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase font-semibold text-accent">
                          <Globe className="w-3.5 h-3.5" />
                          <span>Действующий проект онлайн</span>
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <h4 className="text-base font-bold text-text-primary mb-2">
                        Федеральный сайт-каталог спецтехники «ЗемТрак»
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mb-4">
                        Многостраничный коммерческий каталог спецтехники с подробными техническими характеристиками, формой экспресс-расчёта аренды и связкой с рекламными кампаниями.
                      </p>
                      <a
                        href={item.externalDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-all shadow-md shadow-accent/20"
                      >
                        <span>{item.externalDemoLabel || 'Перейти на сайт zemtrak.ru'}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  {/* Demo/Inspection Box */}
                  {item.demoData && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-bg-surface border border-border/80 shadow-lg">
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/70">
                        <span className="font-mono text-xs uppercase font-semibold text-text-primary">
                          {item.demoData.badge}
                        </span>
                        <Activity className="w-4 h-4 text-accent" />
                      </div>

                      <div className="space-y-2.5 font-mono text-xs">
                        {item.demoData.rows?.map((row, rIdx) => (
                          <div key={rIdx} className="p-3 rounded-lg bg-bg-primary border border-border/60">
                            <span className="text-[10px] text-text-muted block mb-0.5 uppercase">
                              {row.label}
                            </span>
                            <span className="text-text-primary font-medium block">
                              {row.value}
                            </span>
                            {row.status && (
                              <span className="text-[10px] text-accent font-semibold block mt-1">
                                {row.status}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Verifiable Artifacts */}
                  <div className="p-5 rounded-xl bg-bg-surface border border-border/80">
                    <span className="text-xs font-mono text-text-primary uppercase tracking-wider block mb-2 font-semibold flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-accent" />
                      <span>Что можно проверить:</span>
                    </span>
                    <ul className="space-y-1.5 text-xs text-text-secondary">
                      {item.verifiableArtifacts.map((art, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-accent">•</span>
                          <span>{art}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Proof Limitations (Honest boundary) */}
                  <div className="p-4 rounded-xl bg-bg-primary border border-border/70 flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                    <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed">
                      <strong className="text-text-secondary block mb-0.5 font-medium">Границы доказательности:</strong>
                      {item.limitations}
                    </p>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </div>
  )
}
