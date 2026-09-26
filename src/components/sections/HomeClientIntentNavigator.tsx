'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import TelegramBotSimulator from '@/components/ui/TelegramBotSimulator';
import { siteConfig } from '@/config/site';
import {
  Globe,
  TrendingUp,
  Bot,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Clock,
  Code2,
  FileCheck,
} from 'lucide-react';

type IntentType = 'website' | 'direct' | 'bot';

export default function HomeClientIntentNavigator() {
  const [activeTab, setActiveTab] = useState<IntentType>('website');

  return (
    <section
      id="client-intent-navigator"
      className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              С какой задачей вы пришли?
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg leading-relaxed">
              Выберите задачу — покажем точный состав работ, реальные примеры внедрений и сроки запуска.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Intent Tabs Switcher */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3 mb-10 max-w-4xl mx-auto">
            <button
              onClick={() => setActiveTab('website')}
              className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 border ${
                activeTab === 'website'
                  ? 'bg-[#1D2528] text-[#FFFDF8] border-[#1D2528] shadow-md'
                  : 'bg-[#FFFDF8] text-[#1D2528] border-[#D7D3C8] hover:border-[#3E7778]'
              }`}
            >
              <Globe className={`w-5 h-5 ${activeTab === 'website' ? 'text-[#C9854D]' : 'text-[#3E7778]'}`} />
              <span>Мне нужен сайт или лендинг</span>
            </button>

            <button
              onClick={() => setActiveTab('direct')}
              className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 border ${
                activeTab === 'direct'
                  ? 'bg-[#1D2528] text-[#FFFDF8] border-[#1D2528] shadow-md'
                  : 'bg-[#FFFDF8] text-[#1D2528] border-[#D7D3C8] hover:border-[#3E7778]'
              }`}
            >
              <TrendingUp className={`w-5 h-5 ${activeTab === 'direct' ? 'text-[#C9854D]' : 'text-[#3E7778]'}`} />
              <span>Нужны заявки и реклама</span>
            </button>

            <button
              onClick={() => setActiveTab('bot')}
              className={`flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 border ${
                activeTab === 'bot'
                  ? 'bg-[#1D2528] text-[#FFFDF8] border-[#1D2528] shadow-md'
                  : 'bg-[#FFFDF8] text-[#1D2528] border-[#D7D3C8] hover:border-[#3E7778]'
              }`}
            >
              <Bot className={`w-5 h-5 ${activeTab === 'bot' ? 'text-[#C9854D]' : 'text-[#3E7778]'}`} />
              <span>Нужен бот или автоматизация</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Tab 1 Content: Website / Landing */}
        {activeTab === 'website' && (
          <ScrollReveal delay={100}>
            <SpotlightCard className="p-6 sm:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3E7778] font-bold bg-[#3E7778]/10 px-3 py-1 rounded">
                      Разработка сайтов на Next.js
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2528] mt-3">
                      Быстрый сайт с прямой передачей заявок в CRM без лишних доплат
                    </h3>
                  </div>

                  <p className="text-[#5D686A] text-sm sm:text-base leading-relaxed">
                    Частая проблема заказчиков — студия делает сайт на медленном конструкторе, который грузится по 5 секунд, а за подключение CRM и сквозных меток требует отдельный бюджет. Мы разрабатываем сайты на инженерном стеке Next.js: мгновенная загрузка, чистый код и базовая интеграция с вашей рабочей системой сразу в проекте.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Отклик до 0.4 сек (Google PageSpeed 95+)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Интеграция с amoCRM / Битрикс24 бесплатно</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Сквозные UTM, YCLID и цели Метрики</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Защита от спама и чистая мобильная верстка</span>
                    </div>
                  </div>

                  {/* Concrete metrics row */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D7D3C8]">
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#3E7778]">0.4 с</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">время загрузки</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#3E7778]">98 / 100</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">PageSpeed</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#C9854D]">10–14 дней</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">запуск первого контура</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/services/web-development/"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E7778] hover:bg-[#2F5F60] text-[#FFFDF8] font-bold text-sm transition-colors"
                    >
                      <span>Подробнее о разработке сайтов</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="#final-contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D7D3C8] hover:bg-[#EAE6DD] text-[#1D2528] font-bold text-sm transition-colors"
                    >
                      <span>Обсудить задачу</span>
                    </a>
                  </div>
                </div>

                {/* Right: Real Live Proof Websites */}
                <div className="lg:col-span-5 bg-[#F4F1EA] p-5 sm:p-6 rounded-xl border border-[#D7D3C8] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#5D686A] font-bold">
                    Примеры работающих сайтов
                  </div>

                  <a
                    href="https://окнацентр.рф/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-[#FFFDF8] border border-[#D7D3C8] hover:border-[#C9854D] transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#C9854D] mb-1 font-bold">
                      <span>oknacenter.rf</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="font-bold text-[#1D2528] text-sm group-hover:text-[#3E7778] transition-colors">
                      Окна Центр · Оконное производство (24 страницы)
                    </div>
                    <div className="text-xs text-[#5D686A] mt-1">
                      Многостраничный сайт на Next.js, SEO 301 миграция, конфигуратор расчёта и запись на замер.
                    </div>
                  </a>

                  <a
                    href="https://techuchet24.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-[#FFFDF8] border border-[#D7D3C8] hover:border-[#3E7778] transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#3E7778] mb-1 font-bold">
                      <span>techuchet24.ru</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="font-bold text-[#1D2528] text-sm group-hover:text-[#3E7778] transition-colors">
                      ТехУчёт · Регистрация спецтехники
                    </div>
                    <div className="text-xs text-[#5D686A] mt-1">
                      Многостраничная структура под поисковые запросы, сквозная разметка лидов.
                    </div>
                  </a>

                  <a
                    href="https://zelsrez.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-[#FFFDF8] border border-[#D7D3C8] hover:border-[#3E7778] transition-all group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-[#3E7778] mb-1 font-bold">
                      <span>zelsrez.ru</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="font-bold text-[#1D2528] text-sm group-hover:text-[#3E7778] transition-colors">
                      Зелёный Срез · Услуги и оценка по фото
                    </div>
                    <div className="text-xs text-[#5D686A] mt-1">
                      26 локальных страниц, форма расчета сметы и отправка в закрытый чат мастеров.
                    </div>
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        )}

        {/* Tab 2 Content: Yandex Direct */}
        {activeTab === 'direct' && (
          <ScrollReveal delay={100}>
            <SpotlightCard className="p-6 sm:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3E7778] font-bold bg-[#3E7778]/10 px-3 py-1 rounded">
                      Яндекс Директ с привязкой к кассе
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2528] mt-3">
                      Реклама, которая приносит целевые сделки, а не пустые клики
                    </h3>
                  </div>

                  <p className="text-[#5D686A] text-sm sm:text-base leading-relaxed">
                    Главный риск в контекстной рекламе — слить бюджет на мусорные околоцелевые фразы и автоматический трафик Яндекса. Мы жестко фильтруем семантику, настраиваем сквозные UTM и ведем учет не по кликам, а по фактическим квалифицированным сделкам в CRM.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Исключение мусорных запросов и площадок</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Связка групп с точными посадочными экранами</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Передача офлайн-конверсий из CRM в Директ</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Экспресс-аудит текущего кабинета за 24 часа</span>
                    </div>
                  </div>

                  {/* Concrete metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#D7D3C8]">
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#3E7778]">-35...-50%</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">отсечение мусора</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#3E7778]">100%</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">сквозная разметка</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#C9854D]">24 часа</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">экспресс-аудит</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/services/yandex-direct/"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E7778] hover:bg-[#2F5F60] text-[#FFFDF8] font-bold text-sm transition-colors"
                    >
                      <span>Подробнее о Яндекс Директе</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="#final-contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D7D3C8] hover:bg-[#EAE6DD] text-[#1D2528] font-bold text-sm transition-colors"
                    >
                      <span>Заказать аудит кампаний</span>
                    </a>
                  </div>
                </div>

                {/* Right: Proof & Audit Offer */}
                <div className="lg:col-span-5 bg-[#F4F1EA] p-5 sm:p-6 rounded-xl border border-[#D7D3C8] space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#5D686A] font-bold">
                    Бесплатный экспресс-аудит
                  </div>

                  <div className="p-4 rounded-xl bg-[#FFFDF8] border border-[#D7D3C8] space-y-3">
                    <div className="flex items-center gap-2 text-[#C9854D] font-bold text-sm">
                      <FileCheck className="w-4 h-4" />
                      <span>Уже крутите рекламу в Директе?</span>
                    </div>
                    <p className="text-xs text-[#5D686A] leading-relaxed">
                      Предоставьте гостевой доступ на просмотр без права изменений. За 24 часа подготовим отчет:
                    </p>
                    <ul className="text-xs text-[#1D2528] space-y-1.5 list-disc pl-4">
                      <li>Сколько бюджета уходит на нецелевые поисковые фразы;</li>
                      <li>Корректно ли передаются цели и UTM-метки в CRM;</li>
                      <li>3 конкретных действия для снижения цены заявки.</li>
                    </ul>
                    <a
                      href="#final-contact"
                      className="block text-center py-2.5 px-4 rounded-lg bg-[#1D2528] hover:bg-[#3E7778] text-[#FFFDF8] text-xs font-bold transition-colors mt-2"
                    >
                      Получить аудит за 24 часа
                    </a>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FFFDF8]/80 border border-[#D7D3C8]/70 text-xs text-[#5D686A]">
                    <span className="font-bold text-[#1D2528]">Пример внедрения:</span> в проекте ТехУчёт разделение на 6 узких групп фраз снизило цену квалифицированного обращения на 42%.
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        )}

        {/* Tab 3 Content: Telegram Bot & Automation */}
        {activeTab === 'bot' && (
          <ScrollReveal delay={100}>
            <SpotlightCard className="p-6 sm:p-10 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#3E7778] font-bold bg-[#3E7778]/10 px-3 py-1 rounded">
                      Telegram-боты и CRM
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1D2528] mt-3">
                      Автоматизация рутины: расчет смет и квалификация клиентов
                    </h3>
                  </div>

                  <p className="text-[#5D686A] text-sm sm:text-base leading-relaxed">
                    Клиент не ждет, пока менеджер освободится и откроет Excel. Telegram-бот квалифицирует входящий запрос за секунды, рассчитывает смету и сразу передает карточку заказа в CRM и чат дежурного специалиста.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Мгновенный расчет по параметрам (остекление, техника, услуги)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Прямая передача лида в amoCRM / Битрикс24 за 0.3 сек</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D2528]">
                      <CheckCircle2 className="w-4 h-4 text-[#3E7778] shrink-0 mt-0.5" />
                      <span>Уведомление ответственного сотрудника в Telegram</span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#D7D3C8]">
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#3E7778]">0.3 с</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">время отклика</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#3E7778]">24 / 7</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">без выходных</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F4F1EA] border border-[#D7D3C8]/60 text-center">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#C9854D]">0 ₽</div>
                      <div className="text-[11px] font-mono text-[#5D686A] mt-0.5">потерь лидов</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/services/telegram-bots/"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3E7778] hover:bg-[#2F5F60] text-[#FFFDF8] font-bold text-sm transition-colors"
                    >
                      <span>Подробнее о ботах</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={siteConfig.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D7D3C8] hover:bg-[#EAE6DD] text-[#1D2528] font-bold text-sm transition-colors"
                    >
                      <span>Написать разработчику</span>
                    </a>
                  </div>
                </div>

                {/* Right: Live Interactive Bot Simulator */}
                <div className="lg:col-span-7">
                  <div className="mb-2 text-xs font-mono uppercase tracking-wider text-[#5D686A] font-bold">
                    Интерактивный симулятор бота (протестируйте кликом):
                  </div>
                  <TelegramBotSimulator />
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
