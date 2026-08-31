'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function SolutionsWhyVoltrena() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ЕДИНАЯ ОТВЕТСТВЕННОСТЬ"
            title="Одна система вместо набора подрядчиков."
            subtitle="В типичном бизнесе сайт делает одна студия, рекламу настраивает фрилансер, CRM внедряет интегратор, а аналитику не делает никто. VOLTRENA отвечает за всю цепочку целиком."
            align="center"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
              Один архитектурный подход от первого контакта клиента до данных о реальной продаже.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
