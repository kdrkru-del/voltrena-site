'use client';

import React, { useState } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { 
  XCircle, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  TrendingUp, 
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function HomeOneSystemAdvantage() {
  const [activeMode, setActiveMode] = useState<'connected' | 'fragmented'>('connected');

  return (
    <section className="py-20 md:py-28 bg-[#EAE6DD] relative overflow-hidden border-t border-[#D7D3C8]">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            {/* No redundant overline label */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              Один подрядчик на всю цепочку
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg">
              Сравните: что происходит с данными, заявками и окупаемостью при разрозненных исполнителях и в единой системе VOLTRENA.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Mode Toggle */}
        <div className="flex justify-center mb-10">
          <div 
            role="tablist"
            aria-label="Режим сравнения систем"
            className="inline-flex p-1.5 rounded-2xl bg-[#F4F1EA] border border-[#D7D3C8] shadow-inner"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'connected'}
              onClick={() => setActiveMode('connected')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] ${
                activeMode === 'connected'
                  ? 'bg-[#FFFDF8] text-[#3E7778] border border-[#3E7778]/40 shadow-sm ring-1 ring-[#3E7778]/20'
                  : 'text-[#5D686A] hover:text-[#1D2528]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#3E7778]" />
              <span>Инструменты связаны (VOLTRENA)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeMode === 'fragmented'}
              onClick={() => setActiveMode('fragmented')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all min-h-[44px] ${
                activeMode === 'fragmented'
                  ? 'bg-[#FFF5F5] text-[#C93B3B] border border-[#C93B3B]/40 shadow-sm ring-1 ring-[#C93B3B]/20'
                  : 'text-[#5D686A] hover:text-[#1D2528]'
              }`}
            >
              <XCircle className="w-4 h-4 text-[#C93B3B]" />
              <span>Инструменты разрознены</span>
            </button>
          </div>
        </div>

        {/* Dynamic Architectural Stage View */}
        <SpotlightCard className="p-6 sm:p-8 md:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg relative overflow-hidden mb-12">
          {activeMode === 'connected' ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#D7D3C8]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3E7778]" />
                  <span className="text-sm font-mono text-[#3E7778] font-bold uppercase tracking-wider">
                    Единый контур: 100% данных и прозрачный ROMI
                  </span>
                </div>
                <span className="text-xs font-mono text-[#5D686A]">
                  Один инженерный SLA
                </span>
              </div>

              {/* 4 Nodes Connected Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mb-8">
                {/* Node 1 */}
                <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#3E7778]/40 relative">
                  <div className="text-[10px] font-mono text-[#3E7778] uppercase tracking-wider mb-1">
                    Спрос и аудитория
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Яндекс Директ / B2B
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Целевой поиск с жесткой семантикой. Каждому визиту присваиваются UTM и ID клика.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#3E7778]">
                    ✓ Метки сохранены
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#3E7778]/40 relative">
                  <div className="text-[10px] font-mono text-[#3E7778] uppercase tracking-wider mb-1">
                    Посадочный сценарий
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Конверсионный сайт
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Посадочный сценарий под задачу. Форма собирает контекст и передает UTM без потерь.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#3E7778]">
                    ✓ Передача за 0.8 сек
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#3E7778]/40 relative">
                  <div className="text-[10px] font-mono text-[#3E7778] uppercase tracking-wider mb-1">
                    CRM и маршрутизация
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    amoCRM / Битрикс24
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Сделка создается мгновенно с рекламной фразой. Telegram-пуш дежурному менеджеру.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#3E7778]">
                    ✓ Контекст у продавца
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#3E7778]/40 relative">
                  <div className="text-[10px] font-mono text-[#3E7778] uppercase tracking-wider mb-1">
                    Сквозной ROMI
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Сквозная аналитика
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Выручка по закрытым сделкам связывается с рекламными расходами до рубля.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#3E7778]">
                    ✓ Управление по окупаемости
                  </div>
                </div>
              </div>

              {/* Bottom Outcome Strip */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#EAE6DD] border border-[#3E7778]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#3E7778] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#1D2528] font-medium">
                    Итог: полная прозрачность инвестиций, нулевые потери на стыках и единое лицо, отвечающее за результат.
                  </span>
                </div>
                <span className="text-xs font-mono text-[#3E7778] font-bold shrink-0">
                  Потери лидов: 0%
                </span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[#D7D3C8]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C93B3B]" />
                  <span className="text-sm font-mono text-[#C93B3B] font-bold uppercase tracking-wider">
                    Разрозненные подрядчики: потеря до 40% лидов и бюджета
                  </span>
                </div>
                <span className="text-xs font-mono text-[#7F8987]">
                  Размытая ответственность
                </span>
              </div>

              {/* 4 Nodes Disconnected Flow */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mb-8">
                {/* Node 1 */}
                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#C93B3B]/30 relative">
                  <div className="text-[10px] font-mono text-[#C93B3B] uppercase tracking-wider mb-1">
                    Трафик
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Директолог
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Отчитывается кликами и CTR. Не знает, какие ключевые фразы привели к реальным оплатам.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#C93B3B]">
                    ✕ Слепая оптимизация
                  </div>
                </div>

                {/* Node 2 */}
                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#C93B3B]/30 relative">
                  <div className="text-[10px] font-mono text-[#C93B3B] uppercase tracking-wider mb-1">
                    Разработка
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Веб-студия
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Сдала сайт и ушла. Форма отправляет письма на общую почту, теряя метки кампаний.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#C93B3B]">
                    ✕ Обрыв UTM-меток
                  </div>
                </div>

                {/* Node 3 */}
                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#C93B3B]/30 relative">
                  <div className="text-[10px] font-mono text-[#C93B3B] uppercase tracking-wider mb-1">
                    Интеграция CRM
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Интегратор CRM
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Настроил поля, но не связал с рекламой. Менеджеры перезванивают через 4 часа и не знают контекст.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#C93B3B]">
                    ✕ Слив горячих заявок
                  </div>
                </div>

                {/* Node 4 */}
                <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#C93B3B]/30 relative">
                  <div className="text-[10px] font-mono text-[#C93B3B] uppercase tracking-wider mb-1">
                    Слепая зона
                  </div>
                  <div className="text-sm font-bold text-[#1D2528] mb-2">
                    Аналитика не сходится
                  </div>
                  <p className="text-xs text-[#5D686A] leading-relaxed">
                    Каждый подрядчик винит другого: сайт винит рекламу, реклама — менеджеров, а собственник теряет деньги.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#D7D3C8] text-[10px] font-mono text-[#C93B3B]">
                    ✕ Нет виновных
                  </div>
                </div>
              </div>

              {/* Bottom Outcome Strip Fragmented */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#FFF5F5] border border-[#C93B3B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#C93B3B] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#1D2528] font-medium">
                    Итог: бюджет уходит в клики, менеджеры не успевают, сквозная окупаемость не сходится, ответственного нет.
                  </span>
                </div>
                <span className="text-xs font-mono text-[#C93B3B] font-bold shrink-0">
                  Потери лидов: до 40%
                </span>
              </div>
            </div>
          )}
        </SpotlightCard>

        {/* 3 Metric Comparison Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SpotlightCard className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3E7778] uppercase mb-2">
              <Zap className="w-4 h-4" />
              <span>Скорость реакции</span>
            </div>
            <div className="text-2xl font-extrabold text-[#1D2528] mb-1">
              0.8 сек vs 4 часа
            </div>
            <p className="text-xs text-[#5D686A] leading-relaxed">
              В едином контуре заявка падает в CRM и Telegram мгновенно. При разрозненных подрядчиках лиды копятся на почте часами.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3E7778] uppercase mb-2">
              <TrendingUp className="w-4 h-4" />
              <span>Атрибуция продаж</span>
            </div>
            <div className="text-2xl font-extrabold text-[#1D2528] mb-1">
              100% точность ROMI
            </div>
            <p className="text-xs text-[#5D686A] leading-relaxed">
              Каждый оплаченный рубль привязан к конкретному объявлению и ключевой фразе, а не к абстрактному «прямому трафику».
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#3E7778] uppercase mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Зона ответственности</span>
            </div>
            <div className="text-2xl font-extrabold text-[#1D2528] mb-1">
              Один контракт на всё
            </div>
            <p className="text-xs text-[#5D686A] leading-relaxed">
              Никакого перекладывания вины: мы проектируем и отвечаем за всю цепочку от первого клика до закрытой сделки.
            </p>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
