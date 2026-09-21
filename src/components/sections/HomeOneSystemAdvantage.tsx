'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Layers, 
  TrendingUp, 
  Zap,
  ShieldCheck,
  Split
} from 'lucide-react';

export default function HomeOneSystemAdvantage() {
  const [activeMode, setActiveMode] = useState<'connected' | 'fragmented'>('connected');

  return (
    <section className="py-20 md:py-28 bg-[#101416] relative overflow-hidden border-t border-[#232B2D]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5A9692] uppercase mb-3 px-3 py-1 rounded-md border border-[#3E7778]/35 bg-[#3E7778]/15">
              <Split className="w-3.5 h-3.5 text-[#5A9692]" />
              <span>Архитектурное сравнение</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F2EFE6] tracking-tight mb-4">
              Один подрядчик на всю цепочку.
            </h2>
            <p className="text-[#AAB4B1] text-base sm:text-lg">
              Сравните, что происходит с данными, заявками и окупаемостью при разрозненных подрядчиках и в едином контуре VOLTRENA.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div 
            role="tablist"
            aria-label="Режим сравнения систем"
            className="inline-flex p-1.5 rounded-2xl bg-[#0D1012] border border-[#232B2D] shadow-inner"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'connected'}
              onClick={() => setActiveMode('connected')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] ${
                activeMode === 'connected'
                  ? 'bg-[#182325] text-[#5A9692] border border-[#3E7778]/50 shadow-[0_0_15px_rgba(90,150,146,0.15)]'
                  : 'text-[#AAB4B1] hover:text-[#F2EFE6]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#5A9692]" />
              <span>Инструменты связаны (VOLTRENA)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'fragmented'}
              onClick={() => setActiveMode('fragmented')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] ${
                activeMode === 'fragmented'
                  ? 'bg-[#221717] text-[#E06C6C] border border-[#E06C6C]/40 shadow-[0_0_15px_rgba(224,108,108,0.15)]'
                  : 'text-[#AAB4B1] hover:text-[#F2EFE6]'
              }`}
            >
              <XCircle className="w-4 h-4 text-[#E06C6C]" />
              <span>Инструменты разрознены</span>
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Stage View */}
        <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#131719] border border-[#2B3537] shadow-2xl relative overflow-hidden mb-12">
          {activeMode === 'connected' ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#232B2D]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#5A9692] animate-pulse" />
                  <span className="text-sm font-mono text-[#5A9692] font-bold uppercase tracking-wider">
                    Единый контур: 100% данных и прозрачный ROMI
                  </span>
                </div>
                <span className="text-xs font-mono text-[#7A8885]">
                  Один инженерный SLA
                </span>
              </div>

              {/* 4 Nodes Connected Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mb-8">
                {/* Node 1 */}
                <div className="p-4 rounded-xl bg-[#0D1012] border border-[#3E7778]/50 relative">
                  <div className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider mb-1">
                    Спрос и аудитория
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Яндекс Директ / B2B
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Целевой поиск с жесткой семантикой. Каждому визиту присваиваются UTM и ID клика.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#5A9692]">
                    ✓ Метки сохранены
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-xl bg-[#0D1012] border border-[#3E7778]/50 relative">
                  <div className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider mb-1">
                    Посадочный сценарий
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Конверсионный сайт
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Посадочный сценарий под задачу. Форма собирает контекст и передает UTM без потерь.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#5A9692]">
                    ✓ Передача за 0.8 сек
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-xl bg-[#0D1012] border border-[#3E7778]/50 relative">
                  <div className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider mb-1">
                    CRM и маршрутизация
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    amoCRM / Битрикс24
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Сделка создается мгновенно с рекламной фразой. Telegram-пуш дежурному менеджеру.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#5A9692]">
                    ✓ Контекст у продавца
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-xl bg-[#0D1012] border border-[#3E7778]/50 relative">
                  <div className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider mb-1">
                    Сквозной ROMI
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Сквозная аналитика
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Выручка по закрытым сделкам связывается с рекламными расходами до рубля.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#5A9692]">
                    ✓ Управление по окупаемости
                  </div>
                </div>
              </div>

              {/* Bottom Outcome Strip */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#182325] border border-[#3E7778]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#5A9692] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#F2EFE6] font-medium">
                    Итог: полная прозрачность инвестиций, нулевые потери на стыках и единое лицо, отвечающее за результат.
                  </span>
                </div>
                <span className="text-xs font-mono text-[#5A9692] font-bold shrink-0">
                  Потери лидов: 0%
                </span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#232B2D]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E06C6C]" />
                  <span className="text-sm font-mono text-[#E06C6C] font-bold uppercase tracking-wider">
                    Разрозненные подрядчики: потеря до 40% лидов и бюджета
                  </span>
                </div>
                <span className="text-xs font-mono text-[#7A8885]">
                  Размытая ответственность
                </span>
              </div>

              {/* 4 Nodes Disconnected Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mb-8">
                {/* Node 1 */}
                <div className="p-4 rounded-xl bg-[#181212] border border-[#E06C6C]/40 relative">
                  <div className="text-[10px] font-mono text-[#E06C6C] uppercase tracking-wider mb-1">
                    Трафик
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Директолог
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Отчитывается кликами и CTR. Не знает, какие ключевые фразы привели к реальным оплатам.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#E06C6C]">
                    ✕ Слепая оптимизация
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-xl bg-[#181212] border border-[#E06C6C]/40 relative">
                  <div className="text-[10px] font-mono text-[#E06C6C] uppercase tracking-wider mb-1">
                    Разработка
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Веб-студия
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Сдала сайт и ушла. Форма отправляет письма на общую почту, теряя метки кампаний.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#E06C6C]">
                    ✕ Обрыв UTM-меток
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-xl bg-[#181212] border border-[#E06C6C]/40 relative">
                  <div className="text-[10px] font-mono text-[#E06C6C] uppercase tracking-wider mb-1">
                    Интеграция CRM
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Интегратор CRM
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Настроил поля, но не связал с рекламой. Менеджеры перезванивают через 4 часа и не знают контекст.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#E06C6C]">
                    ✕ Слив горячих заявок
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-xl bg-[#181212] border border-[#E06C6C]/40 relative">
                  <div className="text-[10px] font-mono text-[#E06C6C] uppercase tracking-wider mb-1">
                    Слепая зона
                  </div>
                  <div className="text-sm font-bold text-[#F2EFE6] mb-2">
                    Аналитика не сходится
                  </div>
                  <p className="text-xs text-[#AAB4B1] leading-relaxed">
                    Каждый подрядчик винит другого: сайт винит рекламу, реклама — менеджеров, а собственник теряет деньги.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#232B2D] text-[10px] font-mono text-[#E06C6C]">
                    ✕ Нет виновных
                  </div>
                </div>
              </div>

              {/* Bottom Outcome Strip */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#201515] border border-[#E06C6C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#E06C6C] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#F2EFE6] font-medium">
                    Итог: бюджет уходит в потери, аналитика не сходится, а руководство тратит время на споры подрядчиков.
                  </span>
                </div>
                <span className="text-xs font-mono text-[#E06C6C] font-bold shrink-0">
                  Потери лидов: ~35-40%
                </span>
              </div>
            </div>
          )}
        </SpotlightCard>

        {/* Side by Side Key Metric Differences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-[#131719] border border-[#232B2D]">
            <div className="text-xs font-mono text-[#7A8885] uppercase tracking-wider mb-2">
              Скорость реакции на лид
            </div>
            <div className="text-lg font-bold text-[#F2EFE6] mb-1">
              &lt; 60 секунд <span className="text-xs text-[#5A9692] font-mono font-normal">в VOLTRENA</span>
            </div>
            <p className="text-xs text-[#AAB4B1]">
              Против 2–4 часов при ручной пересылке с почты в разрозненном подходе.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#131719] border border-[#232B2D]">
            <div className="text-xs font-mono text-[#7A8885] uppercase tracking-wider mb-2">
              Сквозная атрибуция
            </div>
            <div className="text-lg font-bold text-[#F2EFE6] mb-1">
              100% данных <span className="text-xs text-[#5A9692] font-mono font-normal">до сделки</span>
            </div>
            <p className="text-xs text-[#AAB4B1]">
              Каждый рубль выручки в CRM четко привязан к конкретной кампании и объявлению.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#131719] border border-[#232B2D]">
            <div className="text-xs font-mono text-[#7A8885] uppercase tracking-wider mb-2">
              Инженерная ответственность
            </div>
            <div className="text-lg font-bold text-[#F2EFE6] mb-1">
              1 контракт и SLA <span className="text-xs text-[#5A9692] font-mono font-normal">на весь контур</span>
            </div>
            <p className="text-xs text-[#AAB4B1]">
              Никаких споров между дизайнером, программистом, директологом и интегратором.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
