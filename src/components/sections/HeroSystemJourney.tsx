'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Send,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Building2,
  Users,
  Search,
} from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface JourneyStep {
  id: string;
  stageName: string;
  title: string;
  subtitle: string;
  metric: string;
  badge: string;
  badgeType: 'teal' | 'copper' | 'neutral';
  panelContent: {
    tag: string;
    headline: string;
    details: Array<{ label: string; val: string }>;
    note?: string;
  };
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'source',
    stageName: 'Источник',
    title: 'Посетитель из рекламы',
    subtitle: 'Яндекс Директ: целевой B2B-поиск с фиксацией меток',
    metric: 'Запрос: внедрение CRM для опта',
    badge: 'UTM ЗАФИКСИРОВАНА',
    badgeType: 'teal',
    panelContent: {
      tag: 'ЯНДЕКС ДИРЕКТ · ПОИСК',
      headline: 'Ключевая фраза: «внедрение CRM для оптовых поставок»',
      details: [
        { label: 'Кампания', val: 'b2b_crm_direct' },
        { label: 'UTM-метки', val: 'utm_source=yandex · utm_medium=cpc' },
        { label: 'ID сессии', val: '#VT-9042 · Москва' },
      ],
      note: 'Контекст рекламного объявления сохраняется на всём пути обращения.',
    },
  },
  {
    id: 'website',
    stageName: 'Сайт',
    title: 'Обращение на сайте',
    subtitle: 'Конверсионный интерфейс с фиксацией параметров задачи',
    metric: 'Форма заполнена за 42 сек',
    badge: 'КОНВЕРСИЯ 4.8%',
    badgeType: 'copper',
    panelContent: {
      tag: 'КОНВЕРСИОННЫЙ СЛОЙ',
      headline: 'Заявка на расчет конфигурации: Алексей (ООО «ПромСнаб»)',
      details: [
        { label: 'Задача', val: 'Аудит воронки и автоматизация B2B-отдела' },
        { label: 'Команда', val: '15 менеджеров · телефония + склад' },
        { label: 'Срок', val: 'Запуск первой очереди в течение 3 недель' },
      ],
      note: 'Параметры формы передаются в CRM без потерь и обрыва сессии.',
    },
  },
  {
    id: 'lead',
    stageName: 'Заявка',
    title: 'Мгновенная квалификация',
    subtitle: 'Валидация контакта и автоматический AI-скоринг',
    metric: 'Скоринг: 96% ICP Match',
    badge: 'ЛИД ВЕРИФИЦИРОВАН',
    badgeType: 'teal',
    panelContent: {
      tag: 'АВТОМАТИЧЕСКАЯ КВАЛИФИКАЦИЯ',
      headline: 'Лид проверен по открытым реестрам и базам контрагентов',
      details: [
        { label: 'Сегмент', val: 'Оптовая дистрибуция B2B' },
        { label: 'Приоритет', val: 'ВЫСОКИЙ · Полномочия ЛПР подтверждены' },
        { label: 'Контакты', val: 'Телефон + Telegram подтверждены' },
      ],
      note: 'Менеджер не тратит время на спам или нецелевые обращения.',
    },
  },
  {
    id: 'crm',
    stageName: 'CRM',
    title: 'Создание сделки в CRM',
    subtitle: 'Постановка в воронку и автоматическое назначение ответственного',
    metric: 'Время маршрутизации: 1.4 сек',
    badge: 'ВОРОНКА B2B-ПРОДАЖ',
    badgeType: 'copper',
    panelContent: {
      tag: 'amoCRM / БИТРИКС24',
      headline: 'Сделка #2041 создана на этапе «Первичный аудит»',
      details: [
        { label: 'Ответственный', val: 'Максим Орлов (старший специалист)' },
        { label: 'Регламент', val: 'Связаться с клиентом в течение 10 минут' },
        { label: 'Связка', val: 'Привязана к рекламной кампании #VT-9042' },
      ],
      note: 'Сделка не теряется в общем почтовом ящике или чатах.',
    },
  },
  {
    id: 'manager',
    stageName: 'Ответственный',
    title: 'Уведомление менеджеру',
    subtitle: 'Мгновенный Telegram-пуш с готовым контекстом диалога',
    metric: 'Доставка уведомления: 0.8 сек',
    badge: 'TELEGRAM ПУШ ОТПРАВЛЕН',
    badgeType: 'teal',
    panelContent: {
      tag: 'TELEGRAM БОТ ОПЕРАЦИЙ',
      headline: '⚡ Новая квалифицированная сделка из Директа',
      details: [
        { label: 'Клиент', val: 'Алексей (ООО «ПромСнаб») · Дистрибуция' },
        { label: 'Контекст', val: '15 менеджеров, нужен аудит и воронка' },
        { label: 'Действие', val: 'Кнопка: «Взять в работу» нажата через 2 мин' },
      ],
      note: 'Специалист начинает разговор, зная точную задачу клиента.',
    },
  },
  {
    id: 'analytics',
    stageName: 'Аналитика',
    title: 'Сквозная окупаемость',
    subtitle: 'Выручка сделки сопоставлена с рекламным кликом',
    metric: 'ROMI: 310% · Сквозной цикл',
    badge: 'КОНТУР ЗАМКНУТ',
    badgeType: 'copper',
    panelContent: {
      tag: 'СКВОЗНАЯ АНАЛИТИКА',
      headline: 'От первого клика до оплаты счета — полная прозрачность',
      details: [
        { label: 'Расход на рекламу', val: '1 240 ₽ за целевое обращение' },
        { label: 'Оплата счета', val: 'Сделка закрыта · Выручка зафиксирована' },
        { label: 'Управленческий итог', val: 'Кампания Директа масштабируется' },
      ],
      note: 'Бизнес видит реальную отдачу каждого вложенного рубля.',
    },
  },
];

export default function HeroSystemJourney() {
  const prefersReduced = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(!prefersReduced);
  const [userInteracted, setUserInteracted] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play progression (runs once through 6 steps and pauses)
  useEffect(() => {
    if (prefersReduced || !isPlaying || userInteracted) return;

    timerRef.current = setTimeout(() => {
      setActiveIdx((prev) => {
        if (prev >= JOURNEY_STEPS.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIdx, isPlaying, userInteracted, prefersReduced]);

  const handleStepClick = (idx: number) => {
    setUserInteracted(true);
    setIsPlaying(false);
    setActiveIdx(idx);
  };

  const handleTogglePlay = () => {
    setUserInteracted(true);
    setIsPlaying((v) => !v);
  };

  const handleReplay = () => {
    setUserInteracted(false);
    setActiveIdx(0);
    setIsPlaying(true);
  };

  const currentStep = JOURNEY_STEPS[activeIdx];
  const isCompleted = activeIdx === JOURNEY_STEPS.length - 1;

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-[#15191B]/95 border border-[#2B3537] shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
      
      {/* Top Bar: Engineering Status & Scenario Tag */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 border-b border-[#252E30] bg-[#101314]/70">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isPlaying ? 'bg-[#3E7778]' : 'bg-[#C9854D]'}`} />
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-[#5A9692]' : 'bg-[#C9854D]'}`} />
          </span>
          <span className="text-xs font-mono font-semibold text-[#F2EFE6] tracking-wider uppercase">Интерактивная архитектура</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[#8EAAA5] hidden sm:inline-block">
            {isCompleted ? 'Сценарий завершён' : `Этап ${activeIdx + 1} из ${JOURNEY_STEPS.length}`}
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#3E7778]/40 bg-[#3E7778]/15 text-[#5A9692]">
            Демонстрационный сценарий
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6 lg:p-7">
        
        {/* Navigation Step Pills (6 Stages) */}
        <div
          className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-4"
          role="tablist"
          aria-label="Этапы пути обращения"
        >
          {JOURNEY_STEPS.map((step, idx) => {
            const isActive = idx === activeIdx;
            const isPast = idx < activeIdx;

            return (
              <button
                key={step.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleStepClick(idx)}
                className={`py-2 px-1.5 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center min-h-[58px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3E7778] ${
                  isActive
                    ? 'bg-[#3E7778]/20 border-[#5A9692] text-[#F2EFE6] shadow-[0_0_14px_rgba(62,119,120,0.25)] scale-[1.02]'
                    : isPast
                    ? 'bg-[#1D2528]/80 border-[#3E7778]/40 text-[#AAB4B1] hover:text-[#F2EFE6]'
                    : 'bg-[#121617]/70 border-[#232B2D] text-[#7A8885] hover:border-[#384547] hover:text-[#BCC0B7]'
                }`}
              >
                <span className="text-[10px] font-mono text-[#7F8987] block mb-0.5">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold block leading-tight truncate w-full px-1">
                  {step.stageName}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                    isActive
                      ? 'bg-[#5A9692] animate-pulse'
                      : isPast
                      ? 'bg-[#3E7778]'
                      : 'bg-[#2A3436]'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Continuous Connecting Progress Bar */}
        <div className="w-full bg-[#101314] h-1.5 rounded-full mb-5 overflow-hidden relative border border-[#232B2D]">
          <div
            className="h-full bg-gradient-to-r from-[#3E7778] via-[#5A9692] to-[#C9854D] transition-all duration-500 rounded-full"
            style={{
              width: `${((activeIdx + 1) / JOURNEY_STEPS.length) * 100}%`,
            }}
          />
        </div>

        {/* Dynamic Micro-Panel Preview for Active Step */}
        <div className="relative min-h-[220px] rounded-2xl bg-[#0F1213] border border-[#283234] p-5 sm:p-6 overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#3E7778]/8 blur-3xl pointer-events-none" />

          {/* AnimatePresence for smooth transitions */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="space-y-4"
            >
              {/* Header inside Panel */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#202729]">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border border-[#3E7778]/30 bg-[#3E7778]/15 text-[#5A9692]">
                    {currentStep.panelContent.tag}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-[#C9854D]">
                  {currentStep.badge}
                </span>
              </div>

              {/* Title & Headline */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#F2EFE6] leading-tight mb-1">
                  {currentStep.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AAB4B1]">
                  {currentStep.panelContent.headline}
                </p>
              </div>

              {/* Technical Key-Value Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {currentStep.panelContent.details.map((d) => (
                  <div key={d.label} className="p-2.5 rounded-xl bg-[#161B1D] border border-[#283234]">
                    <span className="text-[10px] font-mono text-[#7A8885] block mb-0.5">
                      {d.label}
                    </span>
                    <span className="text-xs font-semibold text-[#EAE6DD] block leading-snug break-words">
                      {d.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Note / System effect */}
              {currentStep.panelContent.note && (
                <div className="flex items-center gap-2 text-[11px] text-[#8EAAA5] pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5A9692] shrink-0" />
                  <span>{currentStep.panelContent.note}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Bar inside Card: Playback Controls */}
          <div className="mt-5 pt-3.5 border-t border-[#202729] flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleTogglePlay}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2B3537] bg-[#171C1E] text-[#EAE6DD] hover:border-[#5A9692] hover:text-[#5A9692] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3E7778]"
                aria-label={isPlaying ? 'Приостановить демонстрацию' : 'Запустить демонстрацию'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">Пауза</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-mono">Воспроизвести</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReplay}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#2B3537] bg-[#171C1E] text-[#AAB4B1] hover:border-[#5A9692] hover:text-[#F2EFE6] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3E7778]"
                aria-label="Повторить демонстрацию с начала"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono">Повтор</span>
              </button>
            </div>

            <div className="text-[11px] font-mono text-[#7A8885] truncate">
              {currentStep.metric}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
