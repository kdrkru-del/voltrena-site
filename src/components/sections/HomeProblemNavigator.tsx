'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ScenarioItem {
  id: string;
  tabLabel: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  ctaText: string;
  ctaHref: string;
}

const scenarios: ScenarioItem[] = [
  {
    id: 'new-site',
    tabLabel: 'Нужен новый сайт',
    title: 'Нужен новый сайт для компании или завода',
    problem:
      'Старый сайт устарел, плохо открывается с телефона и не объясняет, почему клиенту стоит обратиться именно к вам.',
    solution:
      'Проектируем структуру, пишем понятные тексты, собираем быстрый сайт и подключаем формы заявок.',
    result:
      'У компании появляется аккуратный сайт, который можно показывать клиентам и запускать в рекламу.',
    ctaText: 'Рассчитать стоимость сайта',
    ctaHref: '/services/web-development/',
  },
  {
    id: 'low-leads',
    tabLabel: 'Реклама есть, заявок мало',
    title: 'Реклама работает, но приносит мало целевых заявок',
    problem:
      'Бюджет в Яндекс Директе тратится, клики идут, но обращений мало или они нецелевые.',
    solution:
      'Проверяем запросы, объявления и посадочные страницы. Убираем лишний трафик и приводим рекламу к конкретным услугам.',
    result:
      'Менеджеры получают больше обращений от людей, которым действительно нужна ваша услуга или продукция.',
    ctaText: 'Получить аудит Директа',
    ctaHref: '/services/yandex-direct/',
  },
  {
    id: 'lost-leads',
    tabLabel: 'Заявки теряются',
    title: 'Заявки теряются между сайтом и менеджерами',
    problem:
      'Клиенты пишут в разные формы и мессенджеры, а менеджеры не всегда быстро видят новые обращения.',
    solution:
      'Связываем сайт, формы, Telegram и CRM. Настраиваем уведомления и передачу данных по заявке.',
    result:
      'Каждое обращение попадает в рабочую систему, а руководитель видит, что с ним происходит дальше.',
    ctaText: 'Настроить связку с CRM',
    ctaHref: '/services/crm/',
  },
  {
    id: 'faster-estimate',
    tabLabel: 'Нужно считать быстрее',
    title: 'Нужно считать заявки и сметы быстрее',
    problem:
      'Менеджеры тратят много времени на одинаковые вопросы и предварительные расчёты.',
    solution:
      'Добавляем калькулятор, квиз или Telegram-бота, который собирает параметры заказа до разговора с менеджером.',
    result:
      'Клиент быстрее получает ориентир, а менеджер работает уже с подготовленной заявкой.',
    ctaText: 'Посмотреть симулятор бота',
    ctaHref: '/services/telegram-bots/',
  },
];

export default function HomeProblemNavigator() {
  const [activeTab, setActiveTab] = useState<string>('new-site');
  const current = scenarios.find((s) => s.id === activeTab) || scenarios[0];

  return (
    <section
      id="problem-navigator"
      className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              С какими задачами помогаем
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg leading-relaxed">
              Выберите ситуацию, которая ближе к вашей — покажем, как мы её решаем и какой результат вы получите.
            </p>
          </div>
        </ScrollReveal>

        {/* Scenarios Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-4xl mx-auto">
          {scenarios.map((sc) => {
            const isActive = sc.id === activeTab;
            return (
              <button
                key={sc.id}
                type="button"
                onClick={() => setActiveTab(sc.id)}
                className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                  isActive
                    ? 'bg-[#1D2528] text-[#FFFDF8] border-[#1D2528] shadow-md'
                    : 'bg-[#FFFDF8] text-[#5D686A] hover:text-[#1D2528] border-[#D7D3C8]'
                }`}
              >
                {sc.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Active Scenario Card */}
        <ScrollReveal delay={60}>
          <SpotlightCard className="p-6 sm:p-10 md:p-12 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2528] mb-6">
                {current.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-[#D7D3C8]">
                {/* Pain */}
                <div className="p-5 rounded-xl bg-[#FFF5F5] border border-[#C93B3B]/20">
                  <div className="flex items-center gap-2 text-[#C93B3B] font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                    <AlertCircle className="w-4 h-4" />
                    <span>В чём сложность</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5D686A] leading-relaxed">
                    {current.problem}
                  </p>
                </div>

                {/* What we do */}
                <div className="p-5 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]">
                  <div className="flex items-center gap-2 text-[#3E7778] font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                    <Sparkles className="w-4 h-4" />
                    <span>Что делаем</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D2528] leading-relaxed">
                    {current.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="p-5 rounded-xl bg-[#F0F7F6] border border-[#3E7778]/30">
                  <div className="flex items-center gap-2 text-[#3E7778] font-bold text-xs uppercase tracking-wider mb-2 font-mono">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Какой результат</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D2528] font-medium leading-relaxed">
                    {current.result}
                  </p>
                </div>
              </div>

              {/* Action row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#7F8987] font-mono">
                  Обсудим проект без навязывания лишних услуг
                </span>

                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#C9854D] hover:bg-[#D99A62] text-[#FFFDF8] font-bold text-xs sm:text-sm transition-all shadow-sm w-full sm:w-auto"
                  >
                    Обсудить эту задачу
                  </Link>

                  <Link
                    href={current.ctaHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#3E7778] hover:text-[#2D5D60] transition-colors py-2 whitespace-nowrap"
                  >
                    <span>Подробнее об услуге</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
