'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Activity, 
  Cpu, 
  ArrowUpRight,
  Database,
  Search,
  Bot,
  FileText,
  Clock,
  Radio
} from 'lucide-react';

interface ProblemItem {
  id: string;
  problemTitle: string;
  problemSubtitle: string;
  solutionName: string;
  badge: string;
  outcome: string;
  firstStep: string;
  pipeline: Array<{ label: string; sub: string }>;
  tags: string[];
  solutionHref: string;
}

const problems: ProblemItem[] = [
  {
    id: 'leads',
    problemTitle: 'Нет потока заявок',
    problemSubtitle: 'Реклама крутится, но не окупается и не даёт стабильных сделок',
    solutionName: 'Система привлечения клиентов',
    badge: 'Сквозной ROMI',
    outcome: 'Связка контекстной рекламы, конверсионного сайта и CRM со сквозным контролем окупаемости.',
    firstStep: 'Аудит текущей воронки и поиск точек потерь (2 дня)',
    pipeline: [
      { label: 'Яндекс Директ', sub: 'B2B-семантика' },
      { label: 'Конверсионный сайт', sub: 'Посадочный сценарий' },
      { label: 'Внедрение CRM', sub: 'Фиксация источника' },
      { label: 'Сквозная аналитика', sub: 'Контроль окупаемости' }
    ],
    tags: ['Контекст', 'UX-структура', 'amoCRM / Битрикс24', 'ROI / ROMI'],
    solutionHref: '/solutions/digital-sales-system/',
  },
  {
    id: 'b2b',
    problemTitle: 'Нужны B2B-продажи',
    problemSubtitle: 'Входящего спроса мало, а холодные звонки вслепую не работают',
    solutionName: 'Система B2B-продаж',
    badge: 'ICP & Аутрич',
    outcome: 'Сбор и обогащение баз целевых компаний, AI-скоринг ЛПР и передача контактов в отдел продаж.',
    firstStep: 'Определение профиля идеального клиента (ICP) и тестовая выборка (3 дня)',
    pipeline: [
      { label: 'Сбор баз компаний', sub: 'ОКВЭД, выручка' },
      { label: 'Верификация ЛПР', sub: 'Контакты директоров' },
      { label: 'AI-скоринг', sub: 'Фильтрация целевых' },
      { label: 'CRM-воронка', sub: 'Выход на сделку' }
    ],
    tags: ['B2B-пайплайн', 'Обогащение данных', 'Аутрич', 'Сделки в CRM'],
    solutionHref: '/solutions/b2b-sales-system/',
  },
  {
    id: 'speed',
    problemTitle: 'Теряются лиды',
    problemSubtitle: 'Заявки висят без ответа часами, менеджеры забывают перезвонить',
    solutionName: 'Квалификация и обработка заявок',
    badge: 'Ответ < 1 мин',
    outcome: 'Моментальная AI-квалификация обращений и передача менеджеру готового контекста диалога.',
    firstStep: 'Настройка квалификатора и регламентов маршрутизации в CRM (2 дня)',
    pipeline: [
      { label: 'Форма / Чат', sub: 'Входящий сигнал' },
      { label: 'AI-квалификатор', sub: 'Сбор параметров' },
      { label: 'Telegram-пуш', sub: 'Бриф дежурному' },
      { label: 'Сделка в CRM', sub: 'Контроль SLA' }
    ],
    tags: ['AI-квалификатор', 'Telegram-интерфейс', 'Маршрутизация лидов', 'amoCRM / Битрикс24'],
    solutionHref: '/solutions/lead-operations-system/',
  },
  {
    id: 'routine',
    problemTitle: 'Рутина в процессах',
    problemSubtitle: 'Сотрудники вручную копируют данные, заполняют договоры и путаются в Excel',
    solutionName: 'Автоматизация операционных процессов',
    badge: '0 ошибок ввода',
    outcome: 'Автоматическая генерация КП, счетов, синхронизация баз данных и оповещения команды.',
    firstStep: 'Аудит повторяющихся операций и запуск первого n8n-сценария (3 дня)',
    pipeline: [
      { label: 'Триггер в CRM', sub: 'Смена этапа сделки' },
      { label: 'n8n Workflow', sub: 'Сбор реквизитов' },
      { label: 'Генерация КП/счёта', sub: 'PDF без ошибок' },
      { label: '1С / Документы', sub: 'Синхронизация' }
    ],
    tags: ['Workflow (n8n)', 'Генерация документов', 'Telegram-боты', 'Синхронизация данных'],
    solutionHref: '/solutions/ai-operations-system/',
  },
  {
    id: 'market',
    problemTitle: 'Цены конкурентов',
    problemSubtitle: 'Нет понимания, как меняются прайсы на рынке и что предлагают конкуренты',
    solutionName: 'Мониторинг рынка и данных',
    badge: 'Алерты в реальном времени',
    outcome: 'Регулярный сбор цен, ассортимента и активности конкурентов с оповещениями в Telegram.',
    firstStep: 'Подключение парсинга 5 ключевых конкурентов и настройка таблицы матчинга (2 дня)',
    pipeline: [
      { label: 'Парсинг площадок', sub: 'Каталоги и сайты' },
      { label: 'Матчинг SKU', sub: 'Нормализация данных' },
      { label: 'Мониторинг цен', sub: 'Фиксация демпинга' },
      { label: 'Дашборд и Telegram', sub: 'Уведомление директору' }
    ],
    tags: ['Парсинг площадок', 'Нормализация данных', 'Мониторинг цен', 'Дашборды'],
    solutionHref: '/solutions/market-intelligence-system/',
  },
];

export default function HomeProblemNavigator() {
  const [activeId, setActiveId] = useState<string>(problems[0].id);
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
    <section className="py-20 md:py-28 bg-[#101416] relative overflow-hidden border-t border-[#232B2D]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>Навигатор задач</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2EFE6] tracking-tight mb-4">
              Что сейчас мешает бизнесу расти?
            </h2>
            <p className="text-[#AAB4B1] text-base sm:text-lg">
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
                  role="tab"
                  aria-selected={isSelected}
                  aria-pressed={isSelected}
                  onClick={() => setActiveId(p.id)}
                  className={`p-3.5 sm:p-4 rounded-xl text-center text-xs sm:text-sm font-bold transition-all duration-200 border min-h-[54px] flex flex-col items-center justify-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A9692] ${
                    isSelected
                      ? 'bg-[#182325] border-[#5A9692] text-[#F2EFE6] shadow-[0_0_20px_rgba(90,150,146,0.18)] scale-[1.02]'
                      : 'bg-[#131719] text-[#AAB4B1] border-[#232B2D] hover:border-[#384547] hover:text-[#F2EFE6]'
                  }`}
                >
                  <span className="leading-snug">{p.problemTitle}</span>
                  {isSelected && (
                    <span className="w-1 h-1 rounded-full bg-[#5A9692] mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Solution Display Card with Spotlight Sheen */}
          <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#14181A] border border-[#2B3537] shadow-2xl relative overflow-hidden">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#5A9692] bg-[#3E7778]/15 border border-[#3E7778]/35 px-2.5 py-0.5 rounded">
                    {activeItem.badge}
                  </span>
                  <span className="text-xs text-[#7A8885] font-mono">
                    Решение под ключ
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F2EFE6] tracking-tight">
                  {activeItem.solutionName}
                </h3>
              </div>
              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => handleSelectTask(activeItem)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C9854D] hover:bg-[#D9955D] text-[#0D1012] font-bold text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
                >
                  <span>Выбрать эту задачу</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#D7D3C8] leading-relaxed mb-8 max-w-3xl">
              {activeItem.outcome}
            </p>

            {/* Dynamic Architecture Flow Diagram */}
            <div className="mb-8 rounded-xl bg-[#0D1012] border border-[#232B2D] p-4 sm:p-6">
              <div className="text-[11px] font-mono text-[#7A8885] uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Инженерная цепочка процесса</span>
                <span className="text-[#5A9692] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5A9692] animate-pulse" />
                  Активный контур
                </span>
              </div>

              {/* Responsive 4-node pipeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative">
                {activeItem.pipeline.map((step, idx) => (
                  <div
                    key={step.label}
                    className="relative p-3.5 rounded-lg bg-[#14181A] border border-[#232B2D] flex flex-col justify-between group hover:border-[#3E7778] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono text-[#5A9692] font-semibold">
                          0{idx + 1}
                        </span>
                        {idx < 3 && (
                          <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#3E7778]/60 absolute -right-3 top-1/2 -translate-y-1/2 z-10" />
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#F2EFE6] mb-1">
                        {step.label}
                      </div>
                    </div>
                    <div className="text-[11px] text-[#AAB4B1] font-mono">
                      {step.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* First step and tags */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-[#232B2D] items-center">
              <div className="md:col-span-7">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#5A9692]/15 border border-[#5A9692]/35 flex items-center justify-center text-[#5A9692] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#7A8885] uppercase tracking-wider block mb-0.5">
                      Первый практический шаг:
                    </span>
                    <span className="text-sm font-semibold text-[#F2EFE6]">
                      {activeItem.firstStep}
                    </span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end items-start sm:items-center gap-3">
                <Link
                  href={activeItem.solutionHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#5A9692] hover:text-[#7EB5B1] transition-colors py-2 group/link"
                >
                  <span>Подробнее об инженерном решении</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Tags strip */}
            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-[#232B2D]/50">
              {activeItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#0D1012] border border-[#232B2D] text-[11px] font-mono text-[#7A8885]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
