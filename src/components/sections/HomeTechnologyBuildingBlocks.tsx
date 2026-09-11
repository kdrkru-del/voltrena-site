import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { serviceLinks } from '@/data/navigation'

export default function HomeTechnologyBuildingBlocks() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            title="Модули цифровых систем."
            subtitle="Сайт, реклама, CRM, AI, парсинг и аналитика, объединяемые в единую инфраструктуру компании."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceLinks.map((service, index) => (
            <ScrollReveal key={service.href} delay={index * 35}>
              <Link
                href={`${service.href}/`}
                className="group h-full min-w-0 rounded-2xl bg-bg-surface border border-border/80 p-5 sm:p-6 flex flex-col justify-between hover:border-accent/45 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2 break-words">{service.label}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
                </div>
                <span className="mt-5 pt-4 border-t border-border/60 inline-flex min-h-[44px] items-center gap-2 text-xs font-semibold text-accent">
                  Как используется
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120}>
          <div className="mt-8 text-center">
            <Link href="/services/" className="inline-flex min-h-[44px] items-center gap-2 px-5 py-3 rounded-xl border border-border bg-bg-surface text-sm font-semibold text-text-primary hover:border-accent/50 hover:text-accent transition-colors">
              Все технологии и услуги
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
