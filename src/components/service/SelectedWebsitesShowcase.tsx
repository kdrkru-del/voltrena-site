'use client'

import React from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { ExternalLink, CheckCircle2, Globe, Shield, ArrowUpRight, Lock } from 'lucide-react'

export interface SelectedProject {
  id: string
  number: string
  title: string
  label: string
  url: string
  displayDomain: string
  description: string
  additionalText: string
  tags: string[]
  goal: string
  image: string
  accentColor: string
}

const projects: SelectedProject[] = [
  {
    id: 'zelenyi-srez',
    number: '01',
    title: 'Зелёный Срез',
    label: 'LOCAL SERVICE / LEAD GENERATION',
    url: 'https://zelsrez.ru/',
    displayDomain: 'zelsrez.ru',
    description:
      'Многостраничный сайт сервиса по спилу и уходу за деревьями в Москве и Московской области. Структура построена вокруг поискового спроса, реальных работ и быстрого перехода пользователя к оценке объекта.',
    additionalText:
      'Посетитель может выбрать услугу, посмотреть примеры выполненных работ, загрузить фотографии объекта и передать заявку исполнителю с необходимым контекстом.',
    tags: ['Multi-page', 'Local Service', 'Lead Generation', 'Photo Upload', 'Analytics'],
    goal: 'получение и первичная квалификация заявок.',
    image: '/images/projects/zelenyi-srez.svg',
    accentColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  },
  {
    id: 'techuchet',
    number: '02',
    title: 'ТехУчёт',
    label: 'NICHE SERVICE / SEARCH INTENT',
    url: 'https://techuchet24.ru/',
    displayDomain: 'techuchet24.ru',
    description:
      'Многостраничный сайт специализированного сервиса по регистрации и сопровождению спецтехники в Гостехнадзоре.',
    additionalText:
      'Архитектура сайта разделяет разные поисковые сценарии владельцев техники: постановку на учёт, снятие с учёта, техосмотр, восстановление документов и другие задачи. Страницы связаны с рекламной структурой Яндекс Директа и аналитикой обращений, чтобы посетитель попадал сразу в контекст своей задачи.',
    tags: ['Multi-page', 'Search Intent', 'Yandex Direct', 'Yandex Metrica', 'Lead Tracking'],
    goal: 'превращать нишевой поисковый спрос в целевые обращения.',
    image: '/images/projects/techuchet.svg',
    accentColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  },
  {
    id: 'globerion',
    number: '03',
    title: 'GLOBERION GROUP',
    label: 'INTERNATIONAL B2B / TRADE',
    url: 'https://globeriongroup.com/',
    displayDomain: 'globeriongroup.com',
    description:
      'Международный B2B-сайт компании, работающей с поставками, sourcing, экспортом и торговыми операциями между Вьетнамом и зарубежными рынками.',
    additionalText:
      'Сайт должен одновременно объяснять сложную модель бизнеса нескольким аудиториям: покупателям, поставщикам, производителям и компаниям, которым нужен партнёр во Вьетнаме. Многостраничная архитектура объединяет направления sourcing, проверки поставщиков, экспорта, импорта, логистики, торгового сопровождения и продуктовых категорий.',
    tags: ['International B2B', 'Multi-page', 'Trade', 'Sourcing', 'Export'],
    goal: 'сформировать доверие и превратить сложную B2B-модель в понятный путь до коммерческого запроса.',
    image: '/images/projects/globerion.svg',
    accentColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
  },
]

export default function SelectedWebsitesShowcase() {
  return (
    <section id="selected-websites" className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40 scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20">
            <div className="mb-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                SELECTED WEBSITES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-[1.15] mb-6">
              Сайты, созданные<br className="hidden sm:inline" /> под реальные бизнес-задачи.
            </h2>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Локальный сервис, специализированная услуга и международный B2B-бизнес требуют разной архитектуры. Поэтому мы начинаем не с шаблона, а с задачи, аудитории и пути клиента.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Showcase (Alternating Layout) */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1

            return (
              <ScrollReveal key={project.id} delay={index * 80}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  
                  {/* Visual Preview / Browser Mockup Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group rounded-2xl overflow-hidden bg-bg-surface border border-border/80 hover:border-accent/60 shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {/* Browser Chrome Toolbar */}
                      <div className="px-4 py-3 bg-bg-primary/90 border-b border-border/70 flex items-center justify-between gap-4">
                        {/* Traffic light dots */}
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                        </div>

                        {/* URL Pill */}
                        <div className="flex-1 max-w-xs mx-auto py-1 px-3 rounded-md bg-bg-surface/80 border border-border/60 flex items-center justify-center gap-1.5 font-mono text-[11px] text-text-muted group-hover:text-text-primary transition-colors">
                          <Lock className="w-3 h-3 text-emerald-400" />
                          <span>{project.displayDomain}</span>
                        </div>

                        {/* Live link icon */}
                        <div className="flex items-center gap-1 text-[11px] font-mono text-accent opacity-80 group-hover:opacity-100 transition-opacity shrink-0">
                          <span className="hidden sm:inline">Открыть</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Mockup Image Area */}
                      <div className="relative aspect-[16/10] w-full bg-bg-primary overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`Сайт ${project.title} — разработка VOLTRENA Digital`}
                          fill
                          className="object-cover object-top group-hover:scale-[1.015] transition-transform duration-500"
                          sizes="(max-width: 1024px) 100vw, 650px"
                        />
                        {/* Subtle gradient vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                      </div>
                    </a>
                  </div>

                  {/* Text Details Column */}
                  <div className={`lg:col-span-5 space-y-5 text-left ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    
                    {/* Label & Number */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-block px-2.5 py-0.5 rounded border font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-wider ${project.accentColor}`}>
                        {project.label}
                      </span>
                      <span className="font-mono text-xs text-text-muted font-bold">
                        ПРОЕКТ {project.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {project.additionalText}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-bg-surface border border-border text-[11px] font-mono text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Task Note Box */}
                    <div className="p-3.5 rounded-xl bg-bg-surface/90 border border-border/80 flex items-start gap-2.5 text-xs text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-text-primary font-semibold">Задача: </strong>
                        {project.goal}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-all shadow-md shadow-accent/20 group min-h-[44px]"
                      >
                        <span>Открыть сайт {project.title}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Closing Editorial Statement */}
        <ScrollReveal delay={150}>
          <div className="mt-24 md:mt-32 p-8 sm:p-10 md:p-12 rounded-3xl bg-bg-surface/70 border border-border text-center max-w-4xl mx-auto relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/6 blur-3xl pointer-events-none" />

            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-4">
              ЕДИНЫЙ ПРИНЦИП ПРОЕКТИРОВАНИЯ
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-5">
              Разные рынки. Разные задачи. Один принцип.
            </h3>

            <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Мы сначала определяем, кто должен прийти на сайт, что этот человек должен понять и какое действие совершить. И только после этого проектируем структуру, интерфейс и техническую реализацию.
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
