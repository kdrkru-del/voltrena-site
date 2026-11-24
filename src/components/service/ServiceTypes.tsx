'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Band, pad } from '@/components/service/Band'

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
  const indexOf = (t: ServiceType) => types.indexOf(t) + 1
  const featured = types.find((t) => t.featured)
  const others = types.filter((t) => !t.featured)

  return (
    <Band tone="sand" id={id}>
      <SectionHeading tag={tag} title={title} subtitle={description} align="left" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {featured && (
          <ScrollReveal className="md:col-span-2">
            <article className="group relative h-full overflow-hidden rounded-3xl bg-[#1D2528] p-7 text-[#F4F1EA] shadow-[0_30px_70px_-40px_rgba(29,37,40,0.8)] md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.4),transparent_65%)] blur-2xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-[#D99A62]">
                  <span>{pad(indexOf(featured))}</span>
                  <span className="h-px w-8 bg-[#D99A62]/60" />
                  <span>основное направление</span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight md:text-4xl">{featured.title}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A9B3B1] md:text-lg">{featured.description}</p>
                {featured.items && (
                  <ul className="mt-7 flex flex-wrap gap-2">
                    {featured.items.map((item) => (
                      <li key={item} className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-[#E6EAE9] ring-1 ring-white/10 sm:text-[13px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </ScrollReveal>
        )}

        {others.map((type, i) => (
          <ScrollReveal key={type.id} delay={i * 60}>
            <article className="group relative flex h-full flex-col rounded-2xl bg-[#FFFDF8] p-6 ring-1 ring-[#D7D3C8] transition-all duration-300 hover:-translate-y-1 hover:ring-[#3E7778]/50 hover:shadow-[0_24px_50px_-28px_rgba(29,37,40,0.35)] md:p-7">
              <span className="font-mono text-xs text-[#C9854D]">{pad(indexOf(type))}</span>
              <h4 className="mt-3 text-lg font-extrabold leading-snug tracking-tight text-[#1D2528] md:text-xl">{type.title}</h4>
              <p className="mt-2.5 text-sm leading-relaxed text-[#5D686A]">{type.description}</p>
              {type.items && (
                <ul className="mt-5 space-y-1.5 border-t border-[#D7D3C8] pt-4">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-[#5D686A]">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#3E7778]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Band>
  )
}
