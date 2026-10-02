'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Send, TrendingUp, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Send,
    title: 'Заявки не теряются',
    text: 'Обращения с сайта, форм и мессенджеров уходят в CRM или рабочий Telegram. Менеджер видит новую заявку сразу, а не ищет её в почте и чатах.',
  },
  {
    icon: TrendingUp,
    title: 'Понятно, какая реклама работает',
    text: 'Передаём источник заявки, страницу и рекламные метки. Так проще понять, какие кампании приносят клиентов, а какие только расходуют бюджет.',
  },
  {
    icon: Users,
    title: 'Один ответственный за связку',
    text: 'Сайт, рекламу и технические интеграции ведёт одна команда. Не нужно разбираться, кто виноват: разработчик, директолог или CRM-специалист.',
  },
  {
    icon: Zap,
    title: 'Сайт готов к рекламе',
    text: 'Страницы быстро открываются, формы работают корректно, цели и аналитика подключены до запуска трафика.',
  },
];

export default function HomeShortBenefits() {
  return (
    <section
      id="short-benefits"
      className="py-16 md:py-24 bg-[#EAE6DD] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 60}>
                <SpotlightCard className="p-6 sm:p-7 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm hover:border-[#3E7778] transition-colors h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#3E7778]/10 text-[#3E7778] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1D2528] mb-2.5 leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D686A] leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
