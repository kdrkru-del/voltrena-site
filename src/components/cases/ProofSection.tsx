'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';

const flagshipCase = {
  title: 'ТехУчёт',
  system: 'Система привлечения клиентов',
  systemHref: '/solutions/digital-sales-system/',
  task: 'Получать целевые обращения по регистрации спецтехники в Гостехнадзоре в условиях жесткой конкуренции за лиды.',
  implemented: 'Сайт techuchet24.ru → Яндекс Директ → сквозные UTM → форма с контекстом услуги → amoCRM → дежурный менеджер',
  result: 'Собран единый контур привлечения и фиксации обращений. Каждая заявка попадает в CRM с указанием конкретной техники и рекламной фразы, исключая ручную пересылку и потерю клиентов.',
  href: '/cases/#tehuchet',
  externalDemoUrl: 'https://techuchet24.ru/',
  externalDemoLabel: 'techuchet24.ru',
  pipeline: [
    { source: 'Яндекс Директ', detail: 'Фраза: «регистрация спецтехники» + UTM' },
    { source: 'Каталог услуг', detail: 'techuchet24.ru · Посадочный квиз' },
    { source: 'Контекстная заявка', detail: 'Тип машины, регион, контакт' },
    { source: 'amoCRM & Telegram', detail: 'Авто-сделка + уведомление' },
  ],
};

const secondaryCases = [
  {
    title: 'ZEMTRAK',
    system: 'Система привлечения клиентов',
    systemHref: '/solutions/digital-sales-system/',
    task: 'Показать парк спецтехники и переводить спрос на аренду в конкретную заявку.',
    implemented: 'Каталог техники → посадочные сценарии → Директ → заявка',
    result: 'Сайт перестроен вокруг аренды техники и задач, для которых она нужна, а не вокруг абстрактных подрядных услуг.',
    href: '/cases/#zemtrak',
    externalDemoUrl: 'https://zemtrak.ru/',
    externalDemoLabel: 'zemtrak.ru',
  },
  {
    title: 'Globerion Group',
    system: 'B2B Sales / Digital Infrastructure',
    systemHref: '/solutions/b2b-sales-system/',
    task: 'Собрать международную B2B-инфраструктуру для поиска и обработки запросов покупателей.',
    implemented: 'Продуктовая структура → B2B-каталог → запрос → данные → коммуникация',
    result: 'Цифровая инфраструктура строится вокруг конкретных товарных направлений и B2B-запросов, а не вокруг списка услуг компании.',
    href: '/cases/',
  },
  {
    title: 'Зелёный Срез',
    system: 'Система привлечения клиентов',
    systemHref: '/solutions/digital-sales-system/',
    task: 'Получать локальные заявки на спил и обслуживание деревьев в Москве и области.',
    implemented: 'Гео-страницы → форма → оценка задачи → Telegram',
    result: 'Короткий путь от локального спроса до обращения исполнителю без лишних промежуточных действий.',
    href: '/cases/#zelenyi-srez',
    externalDemoUrl: 'https://zelsrez.ru/',
    externalDemoLabel: 'zelsrez.ru',
  },
];

export default function ProofSection() {
  return (
    <section className="py-20 md:py-28 bg-[#EAE6DD] relative overflow-hidden border-t border-[#D7D3C8]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* No redundant overline label */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              Работающие системы клиентов.
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg">
              Реальные проекты с измеримым результатом в привлечении заявок, цифровой инфраструктуре и продажах. Без выдуманных цифр.
            </p>
          </div>
        </ScrollReveal>

        {/* Flagship Case Card */}
        <ScrollReveal delay={50}>
          <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg mb-8 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#D7D3C8]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9854D] bg-[#C9854D]/10 border border-[#C9854D]/30 px-2.5 py-0.5 rounded font-bold">
                  Флагманский проект
                </span>
                <span className="text-xs font-mono text-[#5D686A]">
                  {flagshipCase.system}
                </span>
              </div>
              <a
                href={flagshipCase.externalDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#3E7778] hover:text-[#2D5D60] transition-colors py-1 px-2.5 rounded bg-[#F4F1EA] border border-[#D7D3C8]"
              >
                <span>{flagshipCase.externalDemoLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Context, Task & Value */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2528] tracking-tight">
                  {flagshipCase.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#7F8987] uppercase tracking-wider block mb-1">
                      Задача бизнеса
                    </span>
                    <p className="text-sm sm:text-base text-[#1D2528] leading-relaxed">
                      {flagshipCase.task}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#7F8987] uppercase tracking-wider block mb-1">
                      Архитектура внедрения
                    </span>
                    <p className="text-sm font-mono text-[#5D686A] leading-relaxed bg-[#F4F1EA] p-3 rounded-lg border border-[#D7D3C8]">
                      {flagshipCase.implemented}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#EAE6DD] border border-[#3E7778]/30 p-4">
                    <span className="text-xs font-mono text-[#3E7778] font-bold block mb-1">
                      Практический результат
                    </span>
                    <p className="text-xs sm:text-sm text-[#1D2528] leading-relaxed">
                      {flagshipCase.result}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={flagshipCase.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#3E7778] hover:text-[#2D5D60] transition-colors"
                  >
                    <span>Читать детальный разбор</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Flow Diagram / Mockup View */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-[#F4F1EA] border border-[#D7D3C8] overflow-hidden shadow-inner">
                  {/* Schematic header bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#EAE6DD] border-b border-[#D7D3C8] text-[11px] font-mono text-[#5D686A]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D7D3C8]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D7D3C8]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D7D3C8]" />
                      <span className="ml-2 text-[#1D2528] font-medium">techuchet24.ru · live-flow</span>
                    </div>
                    <span className="text-[#3E7778] font-semibold">Сквозной контур</span>
                  </div>

                  {/* Flow Steps */}
                  <div className="p-4 sm:p-5 space-y-3">
                    {flagshipCase.pipeline.map((step) => (
                      <div key={step.source} className="relative">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#FFFDF8] border border-[#D7D3C8]">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#3E7778] shrink-0" />
                            <div>
                              <div className="text-xs font-bold text-[#1D2528]">
                                {step.source}
                              </div>
                              <div className="text-[11px] font-mono text-[#5D686A]">
                                {step.detail}
                              </div>
                            </div>
                          </div>
                          <span className="text-[10px] font-mono text-[#3E7778] uppercase px-2 py-0.5 rounded bg-[#3E7778]/10 border border-[#3E7778]/25">
                            Active
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* 3 Secondary Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryCases.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 60}>
              <SpotlightCard className="h-full p-6 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm hover:border-[#3E7778] transition-colors flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono text-[#3E7778] uppercase tracking-wider">
                      Внедрение
                    </span>
                    {item.externalDemoUrl && (
                      <a
                        href={item.externalDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#7F8987] hover:text-[#1D2528] transition-colors"
                      >
                        <span>{item.externalDemoLabel}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h4 className="text-xl font-bold text-[#1D2528] mb-2 group-hover:text-[#3E7778] transition-colors">
                    {item.title}
                  </h4>
                  <div className="text-xs font-mono text-[#5D686A] mb-3">
                    {item.system}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5D686A] leading-relaxed mb-4">
                    {item.task}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D7D3C8]">
                  <div className="text-xs text-[#1D2528] font-medium leading-relaxed mb-4">
                    {item.result}
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#3E7778] hover:text-[#2D5D60] group-hover:translate-x-1 transition-all"
                  >
                    <span>Смотреть кейс</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={150}>
          <div className="mt-12 text-center">
            <Link
              href="/cases/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFFDF8] border border-[#D7D3C8] hover:border-[#3E7778] text-xs sm:text-sm font-semibold text-[#1D2528] transition-all shadow-sm hover:scale-[1.02] min-h-[44px]"
            >
              <span>Смотреть все кейсы и разборы</span>
              <ArrowRight className="w-4 h-4 text-[#3E7778]" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
