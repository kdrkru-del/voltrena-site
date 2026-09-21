'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface PipelineStep {
  label: string;
  sub: string;
}

interface ProblemItem {
  id: string;
  tabLabel: string;
  problemTitle: string;
  summary: string;
  badge: string;
  solutionName: string;
  solutionHref: string;
  pipeline: PipelineStep[];
  outcome: string;
  firstStep: string;
}

const problems: ProblemItem[] = [
  {
    id: 'lost-leads',
    tabLabel: 'Теряются лиды',
    problemTitle: 'Теряются лиды между рекламой, сайтом и CRM',
    summary:
      'Реклама даёт переходы, но сайт конвертирует слабо, а поступившие заявки падают на общую почту или зависают у менеджеров без контекста.',
    badge: 'Сквозной контур лидогенерации',
    solutionName: 'Система привлечения клиентов',
    solutionHref: '/solutions/digital-sales-system/',
    pipeline: [
      { label: 'Яндекс Директ', sub: 'Семантика + UTM-метки' },
      { label: 'Посадочный сценарий', sub: 'Форма с контекстом' },
      { label: 'amoCRM & Telegram', sub: 'Маршрутизация за 0.8с' },
      { label: 'Сквозная аналитика', sub: 'ROMI по фразам' },
    ],
    outcome:
      'Каждое обращение фиксируется в CRM со всеми метками в течение 0.8 секунд, дежурный менеджер получает мгновенное уведомление, а неэффективные рекламные ключи отключаются.',
    firstStep:
      'Аудит цепочки «Директ → Сайт → CRM» с выявлением точек обрыва данных и сценария конверсии.',
  },
  {
    id: 'long-b2b-cycle',
    tabLabel: 'Долгие B2B-сделки',
    problemTitle: 'Сложные B2B-продажи и длинный цикл сделки',
    summary:
      'У клиента сложный продукт, решения принимают несколько ЛПР, а менеджеры тонут в рутине и забывают перезванивать вовремя.',
    badge: 'Контур B2B-продаж',
    solutionName: 'Система B2B-продаж',
    solutionHref: '/solutions/b2b-sales-system/',
    pipeline: [
      { label: 'База ЛПР & Парсинг', sub: 'Сбор целевых компаний' },
      { label: 'B2B-каталог', sub: 'Понятное КП на сайте' },
      { label: 'Воронка сделок', sub: 'Регламент касаний' },
      { label: 'Контроль пайплайна', sub: 'Прогноз закрытия' },
    ],
    outcome:
      'Структурированная база клиентов, прозрачные этапы движения сделки, автоматические напоминания и понятные материалы для ЛПР, сокращающие цикл переговоров на 25–40%.',
    firstStep:
      'Разработка карты пути ЛПР и проектирование цифровой воронки под специфику вашего продукта.',
  },
  {
    id: 'manual-scoring',
    tabLabel: 'Ручная рутина',
    problemTitle: 'Менеджеры тратят часы на нецелевые запросы',
    summary:
      'Отдел продаж перегружен первичной квалификацией, переписками в WhatsApp и заполнением типовых полей вручную.',
    badge: 'Контур квалификации и автоматизации',
    solutionName: 'Квалификация и обработка заявок',
    solutionHref: '/solutions/lead-operations-system/',
    pipeline: [
      { label: 'Входящий запрос', sub: 'Форма / Бот / Мессенджер' },
      { label: 'AI-скоринг', sub: 'Оценка бюджета и задачи' },
      { label: 'Обогащение данных', sub: 'Проверка ИНН и сайта' },
      { label: 'Целевой пайплайн', sub: 'Передача старшему сейлу' },
    ],
    outcome:
      'AI-квалификация отсеивает спам и нецелевые запросы за секунды, обогащает данные по компании и передаёт менеджеру готовый структурированный бриф.',
    firstStep:
      'Внедрение базового сценария квалификации входящих заявок через Telegram-бота или AI-скрипт.',
  },
  {
    id: 'routine-operations',
    tabLabel: 'Хаос в процессах',
    problemTitle: 'Операционные процессы завязаны на ручном труде',
    summary:
      'Генерация счетов, отправка документов, обновление остатков и передача данных между сервисами требуют постоянного внимания людей.',
    badge: 'Операционный контур',
    solutionName: 'Автоматизация операционных процессов',
    solutionHref: '/solutions/operations-automation-system/',
    pipeline: [
      { label: 'Событие в CRM', sub: 'Смена статуса сделки' },
      { label: 'Сценарий n8n', sub: 'Авто-обработка логики' },
      { label: 'Генерация смет/КП', sub: 'PDF по шаблону' },
      { label: 'Синхронизация 1С', sub: 'Обновление баз' },
    ],
    outcome:
      'Документы формируются без ошибок за секунды, данные передаются между системами по API, а сотрудники освобождены от многочасовой монотонной работы.',
    firstStep:
      'Картирование повторяющихся операций и запуск первого автоматического сценария документов.',
  },
  {
    id: 'blind-decisions',
    tabLabel: 'Нет данных',
    problemTitle: 'Решения принимаются вслепую, без рыночных данных',
    summary:
      'Собственник не видит реальные цены конкурентов, отслеживает ассортимент вручную и не понимает точную окупаемость каждого канала.',
    badge: 'Контур данных и мониторинга',
    solutionName: 'Мониторинг рынка и данных',
    solutionHref: '/solutions/market-intelligence-system/',
    pipeline: [
      { label: 'Регулярный парсинг', sub: 'Мониторинг сайтов' },
      { label: 'Нормализация', sub: 'Очистка и сопоставление' },
      { label: 'Дашборд и алерты', sub: 'Telegram при демпинге' },
      { label: 'Динамическое ценообразование', sub: 'Реакция рынка' },
    ],
    outcome:
      'Автоматический ежедневный мониторинг конкурентной среды, мгновенные алерты на изменение цен и четкие дашборды для принятия управленческих решений.',
    firstStep:
      'Пилотный сбор данных по ключевому пулу конкурентов с выгрузкой в единую таблицу.',
  },
];

export default function HomeProblemNavigator() {
  const [activeId, setActiveId] = useState<string>('lost-leads');

  const activeItem = problems.find((p) => p.id === activeId) || problems[0];

  const handleSelectTask = (item: ProblemItem) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(
          'voltrena_selected_task',
          JSON.stringify({ id: item.id, title: item.solutionName, problem: item.problemTitle })
        );
        window.dispatchEvent(
          new CustomEvent('voltrena:select-task', {
            detail: { id: item.id, title: item.solutionName, problem: item.problemTitle },
          })
        );
      } catch (e) {
        console.warn('Could not save selected task', e);
      }

      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden border-t border-[#D7D3C8]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* No redundant overline label */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              Что сейчас мешает бизнесу расти?
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg">
              Выберите узкое место. Мы покажем архитектуру решения, ожидаемый результат и конкретный первый шаг.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          {/* Problem Selector Buttons: 5 tabs */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 mb-8"
            role="tablist"
            aria-label="Выбор задачи"
          >
            {problems.map((p) => {
              const isSelected = activeId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(p.id)}
                  className={`p-3 sm:p-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left flex flex-col justify-between min-h-[58px] border ${
                    isSelected
                      ? 'bg-[#FFFDF8] border-[#3E7778] text-[#1D2528] shadow-sm ring-1 ring-[#3E7778]/30'
                      : 'bg-[#EAE6DD] border-[#D7D3C8] text-[#5D686A] hover:border-[#3E7778]/50 hover:text-[#1D2528]'
                  }`}
                >
                  <span className="leading-snug">{p.problemTitle}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E7778] mt-1" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Solution Display Card with Spotlight Sheen */}
          <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg relative overflow-hidden">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E7778] bg-[#3E7778]/10 border border-[#3E7778]/30 px-2.5 py-0.5 rounded">
                    {activeItem.badge}
                  </span>
                  <span className="text-xs text-[#7F8987] font-mono">
                    Решение под ключ
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2528]">
                  {activeItem.problemTitle}
                </h3>
              </div>
              <Link
                href={activeItem.solutionHref}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3E7778] hover:text-[#2D5D60] transition-colors py-1 shrink-0"
              >
                <span>Подробнее о системе</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-[#5D686A] leading-relaxed mb-8 max-w-3xl">
              {activeItem.summary}
            </p>

            {/* Architecture Pipeline Diagram */}
            <div className="mb-8 p-5 sm:p-6 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#D7D3C8]">
                <span className="text-[11px] font-mono text-[#7F8987] uppercase tracking-wider">
                  Архитектура решения (Pipeline)
                </span>
                <span className="text-xs font-mono text-[#3E7778] font-bold">
                  {activeItem.solutionName}
                </span>
              </div>

              {/* Responsive 4-node pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative">
                {activeItem.pipeline.map((step, idx) => (
                  <div
                    key={step.label}
                    className="relative p-3.5 rounded-lg bg-[#FFFDF8] border border-[#D7D3C8] flex flex-col justify-between group hover:border-[#3E7778] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3E7778]" />
                        {idx < 3 && (
                          <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#3E7778]/40 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#1D2528] mb-1">
                        {step.label}
                      </div>
                    </div>
                    <div className="text-[11px] text-[#5D686A] font-mono">
                      {step.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Result & Practical First Step Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              {/* Result box */}
              <div className="md:col-span-7 p-5 rounded-xl bg-[#EAE6DD] border border-[#3E7778]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#3E7778] font-bold text-xs font-mono uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Ожидаемый результат для бизнеса</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1D2528] leading-relaxed">
                    {activeItem.outcome}
                  </p>
                </div>
              </div>

              {/* First practical step box + CTA button */}
              <div className="md:col-span-5 p-5 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#C9854D] font-bold text-xs font-mono uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>Первый практический шаг</span>
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed mb-4">
                    {activeItem.firstStep}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectTask(activeItem)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#C9854D] hover:bg-[#D99A62] text-[#FFFDF8] text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-2 mt-2"
                >
                  <span>Выбрать эту задачу</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
