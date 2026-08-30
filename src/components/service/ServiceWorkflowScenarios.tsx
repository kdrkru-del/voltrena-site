'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ArrowRight } from 'lucide-react'

const scenarios = [
  {
    id: 'A',
    label: 'Сценарий A — Заявка с сайта',
    steps: ['Website Form', 'Automation', 'CRM Deal', 'Telegram', 'Manager'],
  },
  {
    id: 'B',
    label: 'Сценарий B — Email в задачу',
    steps: ['Email', 'AI', 'Classification', 'CRM Task', 'Notification'],
  },
  {
    id: 'C',
    label: 'Сценарий C — Data → Dashboard',
    steps: ['Parser / DB', 'AI Processing', 'Dashboard', 'Alert'],
  },
]

const integrations = [
  'Website', 'CRM', 'Telegram', 'Email', 'Google Sheets',
  'Database', 'API', 'AI', 'Webhooks', 'Analytics',
]

export default function ServiceWorkflowScenarios() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="WORKFLOW"
            title="Соединяем сервисы в один процесс."
            subtitle="Если у системы есть API — её часто можно встроить в workflow."
            align="center"
          />
        </ScrollReveal>

        {/* Scenarios */}
        <div className="mt-16 space-y-6 max-w-4xl mx-auto">
          {scenarios.map((scenario, si) => (
            <ScrollReveal key={scenario.id} delay={si * 100}>
              <div className="p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/30 transition-colors">
                <p className="text-xs font-mono text-accent/70 uppercase tracking-widest mb-4">
                  {scenario.label}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {scenario.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-lg bg-bg-primary border border-border text-sm font-mono text-text-primary whitespace-nowrap">
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
            <p className="text-center text-sm font-mono text-text-secondary/60 uppercase tracking-widest mb-8">
              Системы, с которыми можно работать
            </p>
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
