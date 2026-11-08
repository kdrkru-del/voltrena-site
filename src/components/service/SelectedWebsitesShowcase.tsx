'use client'

import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { siteConfig } from '@/config/site'
import { ExternalLink, CheckCircle2, ArrowUpRight, Lock } from 'lucide-react'

export interface SelectedProject {
  id: string
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
    id: 'okna-center',
    title: 'Окна Центр',
    label: 'MANUFACTURING & GLAZING / 24-PAGE NEXT.JS SITE',
    url: 'https://окнацентр.рф/',
    displayDomain: 'ОкнаЦентр.рф',
    description: 'Многостраничный сайт оконного производства и монтажа во Владивостоке и Уссурийске (24 канонические страницы на Next.js). Полная миграция со старой CMS с сохранением поискового трафика.',
    additionalText: 'Структура охватывает пластиковые окна, комплексное остекление и внутреннюю отделку балконов и лоджий, коттеджи и панорамные конструкции. Встроен интерактивный конфигуратор расчёта стоимости и быстрая отправка заявки в отдел замеров.',
    tags: ['Next.js', '24 Pages', 'SEO 301 Migration', 'Online Configurator', 'Yandex Metrica'],
    goal: 'привлечение целевого поискового спроса по Приморскому краю и запись на замер.',
    image: '/images/projects/okna-center.svg',
    accentColor: 'text-[#C9854D] border-[#C9854D]/30 bg-[#C9854D]/10',
  },
  {
    id: 'zelenyi-srez',
    title: 'Зелёный Срез',
    label: 'LOCAL SERVICE / LEAD GENERATION',
    url: 'https://zelsrez.ru/',
    displayDomain: 'zelsrez.ru',
    description: 'Многостраничный сайт сервиса по спилу и уходу за деревьями в Москве и Московской области. Структура построена вокруг поискового спроса, реальных работ и быстрого перехода пользователя к оценке объекта.',
    additionalText: 'Посетитель может выбрать услугу, посмотреть примеры выполненных работ, рассчитать смету и передать заявку исполнителю с необходимым контекстом.',
    tags: ['Multi-page', 'Local Service', 'Lead Generation', 'Fast Estimate', 'Analytics'],
    goal: 'получение и первичная квалификация заявок.',
    image: '/images/projects/zelenyi-srez.jpg',
    accentColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
  },
    {
    id: 'centr-kondicionerov',
    title: 'Центр Кондиционеров',
    label: 'E-COMMERCE & CLIMATE INSTALLATION / NEXT.JS 16',
    url: 'https://кондиционеры-владивосток.рф/',
    displayDomain: 'кондиционеры-владивосток.рф',
    description: 'Высокоскоростной интернет-магазин сплит-систем и климатической техники во Владивостоке, Артёме и Уссурийске на Next.js 16 и Tailwind CSS v4.',
    additionalText: 'Каталог из 13 моделей (MDV, AMSTON, DAHATSU, HUNBERG) с умным подбором по площади помещений (от 20 до 100+ м²), прозрачным расчетом монтажа под ключ, гарантией до 4 лет, фиксацией целей Яндекс Метрики (101376260) и мгновенным пушем заказов в Telegram монтажным бригадам.',
    tags: ['Next.js 16', 'Tailwind v4', 'Area Selector', 'Telegram Alerts', 'Yandex Metrica'],
    goal: 'быстрый подбор сплит-системы под площадь и заказ монтажа без предоплаты.',
    image: '/images/projects/centr-kondicionerov.svg',
    accentColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  },
  {
    id: 'techuchet',
    title: 'ТехУчёт',
    label: 'NICHE SERVICE / MULTI-REGION MSK + SPB',
    url: 'https://tehuchet24.ru/',
    displayDomain: 'tehuchet24.ru + spb.tehuchet24.ru',
    description: 'Мультирегиональная сеть посадочных страниц специализированного сервиса по регистрации спецтехники, правам на спецтехнику и техосмотру грузовиков ЕАИСТО в Москве и Санкт-Петербурге.',
    additionalText: 'Архитектура разделяет региональный и поисковый контекст заказчиков, исключает путаницу между ведомственными процедурами и коммерческим сопровождением. Оснащена 3-ступенчатым каскадом доставки заявок в обход DPI мобильных операторов (CR 18.8% МСК / 31.8% СПб).',
    tags: ['Multi-region (MSK + SPB)', 'EAISTO & Inspection', 'Driver License', 'DPI-Proof Cascade', 'Yandex Direct & Metrica'],
    goal: 'превращать нишевой поисковый спрос в целевые обращения в двух столицах.',
    image: '/images/projects/techuchet.svg',
    accentColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  },
  {
    id: 'cenlaro',
    title: 'CENLARO Selected Origins',
    label: 'INTERNATIONAL B2B / COFFEE EXPORT & AI LEAD PIPELINE',
    url: 'https://cenlaro.com/',
    displayDomain: 'cenlaro.com',
    description: 'Международный B2B-портал прямого экспорта вьетнамского кофе (робуста, арабика Lam Dong, Private Label) на трех языках (EN / RU / VI) в связке с AI-пайплайном сбора оптовых байеров.',
    additionalText: 'Платформа спроектирована под требования международных обжарщиков и торговых сетей: детальные спецификации лотов (SCA, скрины, дефекты), расчет контейнерных партий FOB/CIF, интеграция с Python-пайплайном автоматического сбора и квалификации баз оптовиков (РФ, СНГ, Австралия, Океания).',
    tags: ['Next.js Multilingual', 'EN / RU / VI', 'B2B Coffee Export', 'Python AI Scraper', 'Lead Pipeline'],
    goal: 'заключение прямых внешнеторговых контрактов на контейнерные поставки кофе.',
    image: '/images/projects/cenlaro.svg',
    accentColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
  },
  {
    id: 'globerion',
    title: 'GLOBERION GROUP',
    label: 'INTERNATIONAL B2B / TRADE',
    url: 'https://globeriongroup.com/',
    displayDomain: 'globeriongroup.com',
    description: 'Международный B2B-сайт компании, работающей с поставками, sourcing, экспортом и торговыми операциями между Вьетнамом и зарубежными рынками.',
    additionalText: 'Сайт должен одновременно объяснять сложную модель бизнеса нескольким аудиториям: покупателям, поставщикам, производителям и компаниям, которым нужен партнёр во Вьетнаме. Многостраничная архитектура объединяет направления sourcing, проверки поставщиков, экспорта, импорта, логистики, торгового сопровождения и продуктовых категорий.',
    tags: ['International B2B', 'Multi-page', 'Trade', 'Sourcing', 'Export'],
    goal: 'сформировать доверие и превратить сложную B2B-модель в понятный путь до коммерческого запроса.',
    image: '/images/projects/globerion.jpg',
    accentColor: 'text-mint border-mint/30 bg-mint/10',
  },
]

export default function SelectedWebsitesShowcase() {
  return (
    <section id="selected-websites" className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40 scroll-mt-20">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square bg-accent/6 blur-[180px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        <ScrollReveal>
          <div className="max-w-3xl mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-[1.15] mb-6">Сайты, созданные<br className="hidden sm:inline" /> под реальные бизнес-задачи.</h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">Локальный сервис, специализированная услуга и международный B2B-бизнес требуют разной архитектуры. Поэтому мы начинаем не с шаблона, а с задачи, аудитории и пути клиента.</p>
          </div>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1
            const assetUrl = siteConfig.getAssetUrl(project.image)
            return (
              <ScrollReveal key={project.id} delay={index * 80}>
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={`lg:col-span-7 ${isEven ? 'lg:col-start-6' : ''}`}>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block group rounded-2xl overflow-hidden bg-bg-surface border border-border/80 hover:border-accent/60 shadow-2xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <div className="px-4 py-3 bg-bg-primary/95 border-b border-border/70 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5" aria-hidden="true"><span className="w-2.5 h-2.5 rounded-full bg-red-500/70" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" /><span className="w-2.5 h-2.5 rounded-full bg-green-500/70" /></div>
                        <div className="flex-1 max-w-xs mx-auto py-1 px-3 rounded-md bg-bg-surface/80 border border-border/60 flex items-center justify-center gap-1.5 font-mono text-[11px] text-text-muted group-hover:text-text-primary transition-colors min-w-0"><Lock className="w-3 h-3 text-emerald-400 shrink-0" /><span className="truncate">{project.displayDomain}</span></div>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-accent opacity-80 group-hover:opacity-100 transition-opacity shrink-0"><span className="hidden sm:inline">Открыть</span><ExternalLink className="w-3.5 h-3.5" /></div>
                      </div>
                      <div className="relative aspect-[16/10] w-full bg-bg-primary overflow-hidden">
                        <img src={assetUrl} alt={`Сайт ${project.title} — разработка VOLTRENA Digital`} className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" decoding="async" />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </a>
                  </div>

                  <div className={`lg:col-span-5 space-y-4 text-left ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">{project.title}</h3>
                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed">{project.description}</p>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">{project.additionalText}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">{project.tags.map((tag) => <span key={tag} className="px-2.5 py-1 rounded-md bg-bg-surface border border-border text-[11px] font-mono text-text-muted">{tag}</span>)}</div>
                    <div className="p-3.5 rounded-xl bg-bg-surface/90 border border-border/80 flex items-start gap-2.5 text-xs text-text-secondary"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /><span><strong className="text-text-primary font-semibold">Задача: </strong>{project.goal}</span></div>
                    <div className="pt-2"><a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-all shadow-md shadow-accent/20 group min-h-[44px]"><span>Открыть сайт {project.title}</span><ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></a></div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-24 md:mt-32 p-8 sm:p-10 md:p-12 rounded-3xl bg-bg-surface/70 border border-border text-center max-w-4xl mx-auto relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/6 blur-3xl pointer-events-none" aria-hidden="true" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-5">Разные рынки. Разные задачи. Один принцип.</h3>
            <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">Мы сначала определяем, кто должен прийти на сайт, что этот человек должен понять и какое действие совершить. И только после этого проектируем структуру, интерфейс и техническую реализацию.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
