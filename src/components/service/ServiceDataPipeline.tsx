'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const pipelineSteps = [
  { id: 1, title: 'SOURCE', desc: 'Определяем источник' },
  { id: 2, title: 'EXTRACT', desc: 'Получаем нужные поля' },
  { id: 3, title: 'VALIDATE', desc: 'Проверяем формат и структуру' },
  { id: 4, title: 'CLEAN', desc: 'Удаляем лишнее' },
  { id: 5, title: 'NORMALIZE', desc: 'Приводим к единому виду' },
  { id: 6, title: 'DEDUPLICATE', desc: 'Удаляем повторы' },
  { id: 7, title: 'CLASSIFY', desc: 'Разделяем по категориям' },
  { id: 8, title: 'DELIVER', desc: 'Передаём в систему' }
];

export default function ServiceDataPipeline() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Данные проходят полный pipeline."
            subtitle=""
          />
        </ScrollReveal>

        <div className="mt-16">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-0.5 bg-border z-0"></div>
            
            {pipelineSteps.map((step, index) => (
              <ScrollReveal key={step.id} delay={index * 0.1} className="w-full lg:w-auto relative z-10 flex-1 flex flex-col">
                <div className="flex flex-col items-center bg-bg-surface p-4 rounded-xl border border-border hover:border-accent transition-colors group flex-1">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary border-2 border-border flex items-center justify-center text-text-secondary group-hover:bg-accent group-hover:text-bg-primary group-hover:border-accent font-bold mb-4 transition-all">
                    {step.id}
                  </div>
                  <h4 className="text-sm font-bold text-text-primary mb-2 text-center uppercase tracking-wider">{step.title}</h4>
                  <p className="text-xs text-text-secondary text-center leading-tight">{step.desc}</p>
                </div>
                
                {/* Mobile connecting line */}
                {index < pipelineSteps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-6 bg-border mx-auto my-2"></div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
