'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const blocks = [
  "Company Name",
  "Website",
  "Industry",
  "Location",
  "Products",
  "Public Business Contacts",
  "Company Summary",
  "Classification"
];

export default function ServiceDataEnrichment() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            title="Дополняем записи данными из нескольких источников."
            subtitle="Если один источник содержит мало данных, информацию можно объединить из нескольких доступных источников."
          />
        </ScrollReveal>

        <div className="mt-20 max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-full relative">
            {/* Line connecting the blocks */}
            <div className="absolute left-1/2 top-0 bottom-16 w-0.5 bg-border -translate-x-1/2 z-0"></div>

            {blocks.map((block, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="relative z-10 mx-auto w-full max-w-sm mb-4">
                  <div className="bg-bg-surface border border-border py-3 px-6 rounded-lg text-center shadow-sm hover:border-accent hover:shadow-accent/20 transition-all cursor-default relative">
                    <span className="text-text-primary font-medium">{block}</span>
                  </div>
                  {/* Plus icon between blocks */}
                  {index < blocks.length - 1 && (
                    <div className="h-6 w-6 rounded-full bg-bg-secondary border border-border flex items-center justify-center mx-auto absolute -bottom-5 left-1/2 -translate-x-1/2 text-text-secondary text-xs z-20">
                      +
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
            
            <ScrollReveal delay={blocks.length * 0.15 + 0.2}>
              <div className="relative z-10 mx-auto w-full max-w-md mt-8">
                <div className="bg-gradient-to-r from-accent/20 to-blue-500/20 border-2 border-accent py-5 px-8 rounded-xl text-center shadow-lg shadow-accent/10">
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500 uppercase tracking-widest">
                    Complete Record
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
