'use client'

import { serviceCategories } from '@/data/services'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Link from 'next/link'

export default function Services() {
  return (
    <section className="py-section bg-bg-secondary relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading
            title="Полный цикл цифровых услуг."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
          {serviceCategories.map((category, index) => (
            <ScrollReveal
              key={category.id}
              delay={index * 0.1}
              className="bg-bg-surface/30 rounded-xl p-6 border border-border hover:border-border-light transition-colors duration-300 flex flex-col h-full"
            >
              <h3 className="text-lg font-bold text-text-primary mb-4">
                {category.title}
              </h3>
              
              <ul className="flex flex-col gap-3 mt-auto">
                {category.services.map((service, sIdx) => (
                  <li key={sIdx}>
                    <Link 
                      href={service.href}
                      className="group flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-border mr-3 group-hover:bg-accent transition-colors duration-200" />
                      <span className="relative overflow-hidden">
                        {service.title}
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
