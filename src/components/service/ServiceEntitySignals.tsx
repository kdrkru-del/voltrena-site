'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Building2, Globe, FileCode, MapPin, Award, Share2, Layers } from 'lucide-react'

const signals = [
  {
    icon: Globe,
    title: 'Официальный сайт',
    desc: 'Главный источник первоисточника: структура страниц, реквизиты, лицензии и прозрачные описания услуг.',
  },
  {
    icon: FileCode,
    title: 'Микроразметка Schema.org',
    desc: 'Машиночитаемые данные: типы Organization, Service, LocalBusiness, FAQPage и BreadcrumbList.',
  },
  {
    icon: Building2,
    title: 'Единые данные компании',
    desc: 'Идентичность названия, ИНН, контактов и адресов на сайте и во всех открытых реестрах.',
  },
  {
    icon: MapPin,
    title: 'Гео-профили и Карты',
    desc: 'Подтвержденные карточки в Яндекс Картах и 2ГИС с актуальными фото, часами работы и прайс-листами.',
  },
  {
    icon: Award,
    title: 'Topical Authority',
    desc: 'Глубокое раскрытие профильных тем с экспертными формулировками и практическими разборами.',
  },
  {
    icon: Share2,
    title: 'Внешний цифровой след',
    desc: 'Упоминания в отраслевых каталогах, профильных медиа, профессиональных сообществах и партнерских сетях.',
  },
]

export default function ServiceEntitySignals() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ЦИФРОВОЙ ПРОФИЛЬ"
            title="Поиску нужно понимать, кто вы."
            subtitle="Чем последовательнее бизнес представлен в сети, тем проще поисковым системам и AI-агентам связать информацию о вашем бренде."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {signals.map((signal, i) => {
            const Icon = signal.icon
            return (
              <ScrollReveal key={signal.title} delay={i * 70}>
                <div className="h-full p-6 rounded-2xl bg-bg-surface border border-border hover:border-accent/40 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="p-3 rounded-xl border border-accent/20 bg-accent/5 text-accent inline-flex mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-2">
                      {signal.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {signal.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Формируем устойчивую сущность бренда (Entity), понятную поисковым алгоритмам.
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
