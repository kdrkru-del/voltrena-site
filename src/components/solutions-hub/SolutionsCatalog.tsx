'use client'

import React from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export interface SolutionData {
  id: string
  anchor: string
  number: string
  title: string
  tag: string
  problemFit: string
  flow: string
  components: string[]
  processOutcome: string
  minimalStart: string
}

export const solutionsList: SolutionData[] = [
  {
    id: 'digital-sales',
    anchor: 'solution-digital-sales',
    number: '01',
    title: 'Система привлечения клиентов',
    tag: 'DIGITAL SALES SYSTEM',
    problemFit: 'Когда нужны новые входящие обращения, а разрозненная реклама не окупается.',
    flow: 'Спрос → Реклама / Поиск → Сайт → Заявка → CRM → Аналитика',
    components: ['Яндекс Директ', 'Конверсионный сайт', 'Внедрение CRM', 'Сквозная аналитика', 'Telegram-оповещения'],
    processOutcome: 'Реклама и сайт работают как единый контур: заявки без задержек попадают в CRM, а аналитика показывает реальную цену закрытой сделки.',
    minimalStart: 'Контекстная реклама + посадочная страница с прямой интеграцией в CRM.',
  },
  {
    id: 'b2b-pipeline',
    anchor: 'solution-b2b-pipeline',
    number: '02',
    title: 'Система B2B-продаж',
    tag: 'B2B PIPELINE SYSTEM',
    problemFit: 'Когда входящих заявок недостаточно и требуется системный выход на компании и ЛПР.',
    flow: 'Рынок → Данные → ICP-фильтр → Контакт → CRM → Сделка',
    components: ['Парсинг баз компаний', 'Верификация контактов ЛПР', 'AI-скоринг', 'CRM-воронка', 'Outbound-сценарии'],
    processOutcome: 'Отдел продаж получает регулярный поток квалифицированных контактов нужных компаний без ручного поиска данных в интернете.',
    minimalStart: 'Сбор и верификация базы контактов по ключевому сегменту рынка.',
  },
  {
    id: 'lead-operations',
    anchor: 'solution-lead-operations',
    number: '03',
    title: 'Квалификация и обработка заявок',
    tag: 'LEAD OPERATIONS SYSTEM',
    problemFit: 'Когда менеджеры тратят время на нецелевые запросы и долго отвечают клиентам.',
    flow: 'Заявка → Контекст → Квалификация → Маршрутизация → Менеджер → Контроль',
    components: ['AI-ассистент по базе знаний', 'Telegram-интерфейс', 'Маршрутизация лидов', 'amoCRM / Битрикс24', 'Контроль регламентов'],
    processOutcome: 'Каждое обращение моментально проходит первичную классификацию, а менеджер подключается с уже готовым контекстом диалога.',
    minimalStart: 'AI-квалификатор для первичного разбора входящих заявок.',
  },
  {
    id: 'ai-operations',
    anchor: 'solution-ai-operations',
    number: '04',
    title: 'Автоматизация операционных процессов',
    tag: 'AI OPERATIONS SYSTEM',
    problemFit: 'Когда рутинные операции с документами, счетами и отчётами съедают рабочее время.',
    flow: 'Событие → Правило / AI → Действие → Проверка человеком → Журнал результата',
    components: ['Workflow-автоматизация (n8n)', 'Автогенерация КП и счетов', 'Telegram-боты для команды', 'Синхронизация баз данных'],
    processOutcome: 'Повторяющиеся рутинные действия выполняются программно, а сотрудники фокусируются на переговорах и развитии.',
    minimalStart: 'Автоматизация одного ключевого рутинного процесса в отделе продаж.',
  },
  {
    id: 'market-intelligence',
    anchor: 'solution-market-intelligence',
    number: '05',
    title: 'Мониторинг рынка и данных',
    tag: 'MARKET INTELLIGENCE SYSTEM',
    problemFit: 'Когда нужно отслеживать цены конкурентов, появление новых позиций и тендеров.',
    flow: 'Источники → Сбор → Нормализация → Анализ → Алерт → Решение',
    components: ['Web Scraping парсеры', 'База данных и ETL', 'Модуль сравнения цен', 'Telegram-алерты', 'BI-дашборд'],
    processOutcome: 'Руководство получает оперативные сводки об изменениях на рынке и принимает решения на основе проверенных данных.',
    minimalStart: 'Регулярный сбор и мониторинг цен по ключевым конкурентам.',
  },
]

export default function SolutionsCatalog() {
  return (
    <section id="solutions-catalog" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ГОТОВЫЕ СИСТЕМЫ"
            title="Пять комплексных решений для бизнеса."
            subtitle="Каждая система проектируется как законченный рабочий процесс с прозрачной ответственностью за всю цепочку."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 space-y-10 max-w-5xl mx-auto">
          {solutionsList.map((sol, i) => (
            <ScrollReveal key={sol.id} delay={i * 60}>
              <div
                id={sol.anchor}
                className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/50 transition-all shadow-lg scroll-mt-28"
              >
                {/* Top: Number & Tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider font-semibold">
                      {sol.tag}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
                  {sol.title}
                </h3>

                {/* Fit */}
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-5 max-w-3xl">
                  <strong>Подходит, если:</strong> {sol.problemFit}
                </p>

                {/* Flow */}
                <div className="p-3.5 rounded-xl bg-bg-primary border border-border mb-5">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1">
                    Сквозной Flow:
                  </span>
                  <p className="text-xs sm:text-sm font-mono text-text-primary font-medium">
                    {sol.flow}
                  </p>
                </div>

                {/* Components */}
                <div className="mb-5">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-2">
                    Ключевые компоненты:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.components.map((c) => (
                      <span key={c} className="px-2.5 py-1 rounded-md bg-bg-surface border border-border text-xs font-mono text-text-secondary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome & Minimal Start Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 pt-4 border-t border-border/50">
                  <div className="text-xs text-text-secondary">
                    <strong className="text-text-primary block mb-0.5">После внедрения:</strong>
                    {sol.processOutcome}
                  </div>
                  <div className="text-xs text-text-secondary">
                    <strong className="text-accent block mb-0.5">Можно начать с:</strong>
                    {sol.minimalStart}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-xs text-text-muted">Единый контур ответственности</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white text-xs font-semibold transition-all min-h-[40px]"
                  >
                    <span>Обсудить это решение</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
