'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { ShieldCheck, MessageSquare, CheckCircle, Key, FileCheck, PlayCircle } from 'lucide-react';

const trustItems = [
  {
    icon: MessageSquare,
    title: 'Объясняем простыми словами',
    text: 'Мы не прячемся за сложной терминологией. Если задачу можно решить проще и доступнее — открыто говорим об этом.',
  },
  {
    icon: CheckCircle,
    title: 'Не навязываем лишнее',
    text: 'Если вам сейчас нужен просто аккуратный сайт и реклама, мы не будем предлагать дорогие и громоздкие системы.',
  },
  {
    icon: Key,
    title: 'Все доступы остаются у вас',
    text: 'Сайт, реклама, домен и базы регистрируются на вашу компанию. Вы в любой момент можете передать проект штатному сотруднику.',
  },
  {
    icon: FileCheck,
    title: 'Фиксируем смету до старта',
    text: 'Стоимость и объём работ согласуются на старте и фиксируются в договоре без скрытых доплат в процессе.',
  },
  {
    icon: PlayCircle,
    title: 'Можно начать с малого',
    text: 'Не обязательно сразу перестраивать всё. Можно начать с одной посадочной страницы, аудита рекламы или связки с CRM.',
  },
];

export default function HomeTrustBlock() {
  return (
    <section
      id="trust"
      className="py-20 md:py-28 bg-[#EAE6DD] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              Без технического тумана и скрытых доплат
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg leading-relaxed">
              Работаем открыто: вы понимаете каждый шаг, контролируете бюджет и сохраняете за собой все наработки.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Trust Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={idx * 50}>
                <SpotlightCard className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm hover:border-[#3E7778] transition-all h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#3E7778]/10 text-[#3E7778] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1D2528] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5D686A] leading-relaxed">
                    {item.text}
                  </p>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
