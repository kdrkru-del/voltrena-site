'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ArrowRight, ExternalLink, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

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
    <section className="py-20 md:py-28 bg-[#0D1012] relative overflow-hidden border-t border-[#232B2D]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5A9692]" />
              <span>Реальные внедрения</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2EFE6] tracking-tight mb-4">
              Работающие системы клиентов.
            </h2>
            <p className="text-[#AAB4B1] text-base sm:text-lg">
              Реальные проекты с измеримым результатом в привлечении заявок, цифровой инфраструктуре и продажах. Без выдуманных цифр.
            </p>
          </div>
        </ScrollReveal>

        {/* Flagship Case Card */}
        <ScrollReveal delay={50}>
          <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#131719] border border-[#2B3537] shadow-2xl mb-8 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#232B2D]">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#C9854D] bg-[#C9854D]/15 border border-[#C9854D]/35 px-2.5 py-0.5 rounded font-bold">
                  Флагманский проект
                </span>
                <span className="text-xs font-mono text-[#7A8885]">
                  {flagshipCase.system}
                </span>
              </div>
              <a
                href={flagshipCase.externalDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5A9692] hover:text-[#7EB5B1] transition-colors py-1 px-2.5 rounded bg-[#182022] border border-[#232B2D]"
              >
                <span>{flagshipCase.externalDemoLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Context, Task & Value */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F2EFE6] tracking-tight">
                  {flagshipCase.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] font-mono text-[#7A8885] uppercase tracking-wider block mb-1">
                      Задача бизнеса
                    </span>
                    <p className="text-sm sm:text-base text-[#D7D3C8] leading-relaxed">
                      {flagshipCase.task}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-[#7A8885] uppercase tracking-wider block mb-1">
                      Архитектура внедрения
                    </span>
                    <p className="text-sm font-mono text-[#AAB4B1] leading-relaxed bg-[#0D1012] p-3 rounded-lg border border-[#232B2D]">
                      {flagshipCase.implemented}
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#182325] border border-[#3E7778]/40 p-4">
                    <span className="text-xs font-mono text-[#5A9692] font-bold block mb-1">
                      Практический результат
                    </span>
                    <p className="text-xs sm:text-sm text-[#F2EFE6] leading-relaxed">
                      {flagshipCase.result}
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={flagshipCase.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C9854D] hover:text-[#D9955D] transition-colors min-h-[44px]"
                  >
                    <span>Разобрать кейс подробно</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Flow Diagram / Mockup View */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-[#0D1012] border border-[#232B2D] overflow-hidden shadow-inner">
                  {/* Schematic header bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#14181A] border-b border-[#232B2D] text-[11px] font-mono text-[#7A8885]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#344042]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#344042]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#344042]" />
                      <span className="ml-2 text-[#D7D3C8]">techuchet24.ru · live-flow</span>
                    </div>
                    <span className="text-[#5A9692] font-semibold">Сквозной контур</span>
                  </div>

                  {/* Flow Steps */}
                  <div className="p-4 sm:p-5 space-y-3">
                    {flagshipCase.pipeline.map((step, index) => (
                      <div key={step.source} className="relative">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#14181A] border border-[#232B2D]/80">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#5A9692] shrink-0" />
                            <div>
                              <div className="text-xs font-bold text-[#F2EFE6]">
                                {step.source}
                              </div>
                              <div className="text-[11px] font-mono text-[#AAB4B1]">
                                {step.detail}
                              </div>
                            </div>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-[#5A9692] shrink-0" />
                        </div>
                        {index < flagshipCase.pipeline.length - 1 && (
                          <div className="h-2 w-0.5 bg-[#3E7778]/40 mx-auto my-0.5" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Schema footer stats */}
                  <div className="px-4 py-3 bg-[#111618] border-t border-[#232B2D] flex items-center justify-between text-[11px] font-mono text-[#7A8885]">
                    <span>Атрибуция: 100% данных</span>
                    <span className="text-[#5A9692]">Без потерь заявок</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

        {/* Compact Grid for Remaining Real Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {secondaryCases.map((c, idx) => (
            <ScrollReveal key={c.title} delay={100 + idx * 60}>
              <SpotlightCard className="h-full p-6 rounded-2xl bg-[#131719] border border-[#232B2D] hover:border-[#384547] transition-colors flex flex-col justify-between shadow-lg group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider">
                      {c.system}
                    </span>
                    {c.externalDemoUrl && (
                      <a
                        href={c.externalDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono text-[#7A8885] hover:text-[#F2EFE6] transition-colors"
                        aria-label={c.externalDemoLabel}
                      >
                        <span>{c.externalDemoLabel}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[#F2EFE6] mb-3">
                    {c.title}
                  </h3>

                  <div className="space-y-3 mb-5">
                    <div>
                      <span className="text-[10px] font-mono text-[#7A8885] uppercase tracking-wider block mb-1">
                        Задача
                      </span>
                      <p className="text-xs text-[#AAB4B1] leading-relaxed">
                        {c.task}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-[#7A8885] uppercase tracking-wider block mb-1">
                        Внедрение
                      </span>
                      <p className="text-xs font-mono text-[#D7D3C8] leading-relaxed bg-[#0D1012] p-2 rounded border border-[#232B2D]/70">
                        {c.implemented}
                      </p>
                    </div>

                    <div className="rounded-lg bg-[#14181A] border border-[#232B2D] p-3">
                      <span className="text-[10px] font-mono text-[#5A9692] font-semibold block mb-0.5">
                        Результат
                      </span>
                      <p className="text-xs text-[#D7D3C8] leading-relaxed">
                        {c.result}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#232B2D] flex items-center justify-between">
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5A9692] hover:text-[#7EB5B1] transition-colors min-h-[44px]"
                  >
                    <span>Разобрать кейс</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Cases Link */}
        <ScrollReveal delay={200}>
          <div className="mt-12 text-center">
            <Link
              href="/cases/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#14181A] border border-[#2B3537] hover:border-[#5A9692] text-[#F2EFE6] hover:text-[#F2EFE6] font-semibold text-xs sm:text-sm transition-all min-h-[44px] shadow-md hover:scale-[1.02]"
            >
              <span>Смотреть все кейсы</span>
              <ArrowRight className="w-4 h-4 text-[#5A9692]" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
