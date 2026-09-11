'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export interface ScenarioItem {
  id: string
  label: string
  steps: string[]
}

const defaultScenarios: ScenarioItem[] = [
  {
    id: 'A',
    label: 'Сценарий: Заявка с сайта',
    steps: ['Форма на сайте', 'Автоматизация', 'Сделка в CRM', 'Telegram', 'Менеджер'],
  },
  {
    id: 'B',
    label: 'Сценарий: Email в задачу',
    steps: ['Email письмо', 'AI анализ', 'Классификация', 'Задача в CRM', 'Уведомление'],
  },
  {
    id: 'C',
    label: 'Сценарий: Данные в дашборд',
    steps: ['Сбор данных / БД', 'AI обработка', 'Дашборд', 'Оповещение'],
  },
]

const defaultIntegrations = [
  'Website', 'CRM', 'Telegram', 'Email', 'Google Sheets',
  'Database', 'API', 'AI', 'Webhooks', 'Analytics',
]

interface ServiceWorkflowScenariosProps {
  tag?: string
  title?: string
  subtitle?: string
  scenarios?: ScenarioItem[]
  integrations?: string[]
}

export default function ServiceWorkflowScenarios({
  tag = 'WORKFLOW',
  title = 'Соединяем сервисы в один процесс.',
  subtitle = 'Если у системы есть API — её часто можно встроить в workflow.',
  scenarios = defaultScenarios,
  integrations = defaultIntegrations,
}: ServiceWorkflowScenariosProps) {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag={tag}
            title={title}
            subtitle={subtitle}
            align="center"
          />
        </ScrollReveal>

        {/* Scenarios */}
        <div className="mt-16 space-y-6 max-w-4xl mx-auto">
          {scenarios.map((scenario, si) => (
            <ScrollReveal key={scenario.id} delay={si * 100}>
              <div className="p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/30 transition-colors">
                <h3 className="text-base font-bold text-text-primary mb-3">
                  {scenario.label}
                </h3>
                <div className="flex flex-wrap items-center gap-2">
                  {scenario.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-xs sm:text-sm font-mono text-text-primary break-words max-w-full">
                        {step}
                      </span>
                      {i < scenario.steps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-accent/50 flex-shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Integration nodes */}
        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-center text-lg font-bold text-text-primary mb-8">
              Системы, с которыми можно работать
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-full bg-bg-surface border border-border text-sm font-mono text-text-secondary hover:border-accent/30 hover:text-text-primary transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
