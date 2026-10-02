'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServiceProduct {
  id: string;
  title: string;
  desc: string;
  fitsIf: string;
  outcome: string;
  serviceHref: string;
  solutionName: string;
  solutionHref: string;
}

const services: ServiceProduct[] = [
  {
    id: 'b2b-sites',
    title: 'Сайты для B2B и производства',
    desc: 'Делаем многостраничные сайты и каталоги для компаний, которым важно показать услуги, оборудование, кейсы и условия работы без лишней воды.',
    fitsIf: 'старый сайт устарел, плохо выглядит на телефоне или не помогает продажам.',
    outcome: 'быстрый сайт с понятной структурой, формами заявок и базовой подготовкой к рекламе и SEO.',
    serviceHref: '/services/web-development/',
    solutionName: 'Система B2B-продаж',
    solutionHref: '/solutions/b2b-sales-system/',
  },
  {
    id: 'landing-pages',
    title: 'Посадочные страницы под рекламу',
    desc: 'Создаём точечные конверсионные страницы под конкретную услугу, товарную группу или горячие коммерческие запросы.',
    fitsIf: 'нужно быстро протестировать спрос или направить трафик на узкую коммерческую услугу.',
    outcome: 'страница с точным оффером, быстрой загрузкой и формами, с которых удобно отправлять заявки.',
    serviceHref: '/services/web-development/',
    solutionName: 'Система привлечения клиентов',
    solutionHref: '/solutions/digital-sales-system/',
  },
  {
    id: 'yandex-direct',
    title: 'Яндекс Директ',
    desc: 'Настраиваем рекламу на поиске и в сетях, чтобы приводить людей, которые прямо сейчас ищут ваши услуги или продукцию.',
    fitsIf: 'кликов много, а заявок мало, или рекламу нужно запустить с нуля без слива бюджета.',
    outcome: 'работающие кампании с очищенной семантикой, разметкой целей и отсечением нецелевого трафика.',
    serviceHref: '/services/yandex-direct/',
    solutionName: 'Мониторинг рынка и данных',
    solutionHref: '/solutions/market-monitoring-system/',
  },
  {
    id: 'crm-integration',
    title: 'Интеграция сайта с CRM и Telegram',
    desc: 'Связываем формы на сайте с вашей CRM и рабочими чатами, чтобы менеджеры моментально видели новые контакты.',
    fitsIf: 'заявки висят на почте, теряются между сотрудниками или приходят без контекста.',
    outcome: 'новое обращение сразу появляется в CRM со всеми метками, а в Telegram падает мгновенное уведомление.',
    serviceHref: '/services/crm/',
    solutionName: 'Квалификация и обработка заявок',
    solutionHref: '/solutions/lead-operations-system/',
  },
  {
    id: 'bots-calculators',
    title: 'Калькуляторы, квизы и Telegram-боты',
    desc: 'Внедряем простые инструменты предварительного расчёта стоимости и квалификации заказчиков.',
    fitsIf: 'менеджеры тратят рабочие часы на типовые расчёты для тех, кто просто приценивается.',
    outcome: 'инструмент, который считает ориентировочную смету и передаёт менеджеру уже заполненную заявку.',
    serviceHref: '/services/telegram-bots/',
    solutionName: 'Автоматизация операционных процессов',
    solutionHref: '/solutions/operations-automation-system/',
  },
];

export default function DigitalGrowthContours() {
  return (
    <section
      id="digital-growth-contours"
      className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight leading-[1.15]">
              Понятные услуги без лишней сложности
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#5D686A] mt-4 leading-relaxed">
              Не навязываем всё сразу. Вы можете заказать конкретную задачу — или собрать их в единую связку «сайт + реклама + CRM».
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Services Grid */}
        <div className="space-y-6">
          {services.map((s, idx) => (
            <ScrollReveal key={s.id} delay={idx * 50}>
              <SpotlightCard className="p-6 sm:p-8 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm hover:border-[#3E7778] transition-all group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left: Title & Description */}
                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1D2528] group-hover:text-[#3E7778] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D686A] leading-relaxed">
                      {s.desc}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={s.serviceHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#C9854D] hover:text-[#D99A62] transition-colors"
                      >
                        <span>Подробнее об услуге</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right: Fits If & Outcome */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 lg:pt-0">
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/70">
                      <span className="text-[11px] font-mono text-[#7F8987] uppercase tracking-wider block mb-1.5 font-semibold">
                        Подходит, если:
                      </span>
                      <p className="text-xs text-[#1D2528] leading-relaxed">
                        {s.fitsIf}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F0F7F6] border border-[#3E7778]/30">
                      <span className="text-[11px] font-mono text-[#3E7778] uppercase tracking-wider block mb-1.5 font-semibold">
                        На выходе:
                      </span>
                      <p className="text-xs text-[#1D2528] font-medium leading-relaxed">
                        {s.outcome}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Sub-link preserving solution route */}
                <div className="mt-4 pt-4 border-t border-[#D7D3C8]/50 flex items-center justify-between text-xs text-[#7F8987]">
                  <span>Готовый отраслевой модуль:</span>
                  <Link
                    href={s.solutionHref}
                    className="font-mono text-[#3E7778] hover:underline"
                  >
                    {s.solutionName}
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
