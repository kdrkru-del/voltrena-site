'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Bot, Globe, Megaphone, Workflow } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { AdsVisual, AnalyticsVisual, BotVisual, CrmVisual, SiteVisual } from './story/StoryVisuals';

const CHAPTERS = [
  {
    id: 'ads',
    short: 'Реклама',
    icon: Megaphone,
    title: 'Реклама приводит людей, которые готовы купить',
    text: 'Настраиваем Яндекс Директ под реальный спрос: собираем запросы, отсекаем мусорные площадки РСЯ и следим не за кликами, а за ценой заявки.',
    points: ['Семантика и минус-слова', 'Чистка площадок РСЯ', 'Цели и конверсии в Метрике'],
    href: '/services/yandex-direct/',
    link: 'Яндекс Директ',
    Visual: AdsVisual,
  },
  {
    id: 'site',
    short: 'Сайт',
    icon: Globe,
    title: 'Сайт превращает визит в заявку',
    text: 'Делаем быстрые сайты на Next.js с калькуляторами и квизами: клиент сразу видит цену и оставляет заявку с параметрами заказа.',
    points: ['Скорость и адаптив под телефон', 'Калькуляторы, квизы, формы по фото', 'Страницы под каждое направление рекламы'],
    href: '/services/web-development/',
    link: 'Создание сайтов',
    Visual: SiteVisual,
  },
  {
    id: 'crm',
    short: 'CRM',
    icon: Workflow,
    title: 'Каждая заявка сразу попадает в CRM',
    text: 'Формы, звонки и мессенджеры сходятся в одну воронку. Менеджер видит источник, метки и детали заказа, а вы — на каком этапе каждая сделка.',
    points: ['Источник и UTM в карточке', 'Уведомления менеджеру в Telegram', 'Ни одна заявка не теряется в почте'],
    href: '/services/crm/',
    link: 'Интеграция с CRM',
    Visual: CrmVisual,
  },
  {
    id: 'bot',
    short: 'Бот',
    icon: Bot,
    title: 'Бот отвечает клиенту за секунды, даже ночью',
    text: 'Telegram-бот или AI-ассистент уточняет детали, принимает фото и передаёт готовую заявку человеку. Менеджер подключается, когда клиент уже «тёплый».',
    points: ['Ответ 24/7 без ожидания', 'Сбор фото и параметров', 'Передача живому менеджеру'],
    href: '/services/telegram-bots/',
    link: 'Telegram-боты и AI',
    Visual: BotVisual,
  },
  {
    id: 'analytics',
    short: 'Аналитика',
    icon: BarChart3,
    title: 'Аналитика показывает, какие деньги окупаются',
    text: 'Связываем рекламу, заявки и продажи в один отчёт. Видно, какой канал приносит выручку, а какой только тратит бюджет.',
    points: ['Расход → заявки → продажи', 'Цена заявки и ROMI по каналам', 'Решения на цифрах, а не ощущениях'],
    href: '/services/analytics/',
    link: 'Сквозная аналитика',
    Visual: AnalyticsVisual,
  },
] as const;

export default function SystemStory() {
  const [active, setActive] = useState(0);
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Active chapter = the one whose box is closest to the viewport centre.
    // Computed from scroll position, so fast jumps and anchor links never leave a stale chapter.
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      refs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = mid < r.top ? r.top - mid : mid > r.bottom ? mid - r.bottom : 0;
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="system-story" className="relative bg-[#EAE6DD] border-t border-[#D7D3C8] scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pt-20 md:pt-28">
        <div className="max-w-3xl">
          <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-[#3E7778] mb-4">
            Как это работает · 5 звеньев
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight leading-[1.08]">
            Одна система вместо пяти подрядчиков
          </h2>
          <p className="mt-4 text-[#5D686A] text-base sm:text-lg max-w-2xl">
            Пролистайте, как заявка проходит путь от рекламы до продажи. Каждое звено мы делаем сами и связываем с остальными.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl pb-20 md:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Chapters */}
          <div className="lg:col-span-5">
            {CHAPTERS.map((c, i) => {
              const Icon = c.icon;
              const Visual = c.Visual;
              const isActive = active === i;
              return (
                <div
                  key={c.id}
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  data-idx={i}
                  className="py-12 lg:py-0 lg:min-h-[85vh] flex flex-col justify-center border-b border-[#D7D3C8] lg:border-0 last:border-0"
                >
                  <div className={`transition-opacity duration-500 ${isActive ? 'lg:opacity-100' : 'lg:opacity-35'}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors duration-500 ${
                          isActive ? 'bg-[#1D2528] text-[#D99A62]' : 'bg-[#FFFDF8] text-[#3E7778] ring-1 ring-[#D7D3C8]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="font-mono text-xs text-[#7F8987]">
                        {String(i + 1).padStart(2, '0')} / {String(CHAPTERS.length).padStart(2, '0')} · {c.short}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2528] tracking-tight leading-tight">{c.title}</h3>
                    <p className="mt-4 text-[#5D686A] leading-relaxed">{c.text}</p>
                    <ul className="mt-5 space-y-2">
                      {c.points.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-[#1D2528]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C9854D] shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={c.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3E7778] hover:text-[#2D5D60] group/l"
                    >
                      {c.link}
                      <ArrowRight className="w-4 h-4 group-hover/l:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Mobile: visual inline under each chapter */}
                  <div className="lg:hidden mt-8">
                    <Visual active={isActive && !isDesktop} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop: sticky stage */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="sticky top-24 h-[calc(100vh-7rem)] flex flex-col justify-center">
              {/* Progress rail */}
              <div className="mb-6 flex items-center">
                {CHAPTERS.map((c, i) => {
                  const Icon = c.icon;
                  const done = i < active;
                  const cur = i === active;
                  return (
                    <React.Fragment key={c.id}>
                      <button
                        type="button"
                        onClick={() => refs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                        className="flex flex-col items-center gap-1.5 group/n"
                        aria-label={c.short}
                      >
                        <span
                          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                            cur
                              ? 'bg-[#1D2528] text-[#D99A62] scale-110 shadow-lg'
                              : done
                              ? 'bg-[#3E7778] text-white'
                              : 'bg-[#FFFDF8] text-[#7F8987] ring-1 ring-[#D7D3C8] group-hover/n:text-[#1D2528]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${cur ? 'text-[#1D2528]' : 'text-[#7F8987]'}`}>
                          {c.short}
                        </span>
                      </button>
                      {i < CHAPTERS.length - 1 && (
                        <span className="flex-1 h-px mx-2 mb-5 bg-[#D7D3C8] relative overflow-hidden">
                          <span
                            className="absolute inset-y-0 left-0 bg-[#3E7778] transition-all duration-700"
                            style={{ width: i < active ? '100%' : '0%' }}
                          />
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* All stages stacked in one grid cell; only the active one is visible and animating */}
              <div className="grid items-center">
                {CHAPTERS.map((c, i) => {
                  const V = c.Visual;
                  const on = i === active;
                  return (
                    <div
                      key={c.id}
                      aria-hidden={!on}
                      className={`[grid-area:1/1] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        on ? 'opacity-100 translate-y-0 scale-100' : `opacity-0 pointer-events-none scale-[0.98] ${i < active ? '-translate-y-4' : 'translate-y-6'}`
                      }`}
                    >
                      <V active={on && isDesktop} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
