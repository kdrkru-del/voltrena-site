'use client'

import { cn } from '@/lib/utils'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export interface ServiceType {
  id: string
  title: string
  description: string
  featured?: boolean
  items?: string[]
}

interface ServiceTypesProps {
  types: ServiceType[]
  id?: string
  tag?: string
  title?: string
  description?: string
}

export default function ServiceTypes({
  types,
  id = 'what-we-create',
  tag,
  title = 'Что мы создаём.',
  description,
}: ServiceTypesProps) {
  const featured = types.find((t) => t.featured)
  const others = types.filter((t) => !t.featured)

  return (
    <section id={id} className="py-section bg-bg-primary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading tag={tag} title={title} subtitle={description} align="left" />
        
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
            {featured && (
              <div tabIndex={0} className="md:col-span-2 bg-bg-surface border border-accent/20 rounded-2xl p-8 md:p-10 hover:border-accent/50 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-10">
                    <h3 className="text-heading font-bold text-text-primary group-hover:text-gradient transition-colors">
                      {featured.title}
                    </h3>
                    
                  </div>
                  <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
                    {featured.description}
                  </p>
                  {featured.items && (
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {featured.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                          <span className="text-accent" aria-hidden="true">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
            
            {others.map((type, i) => {
              const index = featured ? i + 2 : i + 1
              const formattedIndex = index < 10 ? `0${index}` : `${index}`

              return (
                <div 
                  key={type.id} 
                  tabIndex={0}
                  className="bg-bg-surface border border-border hover:border-accent/40 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 rounded-xl p-5 md:p-6 transition-all duration-300 group flex flex-col relative overflow-hidden cursor-default"
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-subheading font-bold text-text-primary z-10">{type.title}</h4>
                    
                  </div>
                  
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-300 mt-3 md:mt-0 md:group-hover:mt-4 md:group-focus:mt-4">
                    <div className="overflow-hidden">
                      <p className="text-text-secondary text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus:opacity-100 transition-opacity duration-300 delay-100">
                        {type.description}
                      </p>
                      {type.items && (
                        <ul className="mt-4 space-y-2">
                          {type.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                              <span className="text-accent" aria-hidden="true">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
