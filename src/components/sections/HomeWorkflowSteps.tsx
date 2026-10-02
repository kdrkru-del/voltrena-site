'use client';

import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Search, FileText, Code2, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Разбираем задачу',
    text: 'Смотрим, как сейчас устроены сайт, реклама и обработка заявок. Вам не нужно готовить сложное ТЗ — мы сами зададим нужные вопросы.',
  },
  {
    icon: FileText,
    title: 'Показываем план и смету',
    text: 'Фиксируем структуру сайта, этапы работ, точные сроки и стоимость. Вы понимаете, за что платите и когда получите результат.',
  },
  {
    icon: Code2,
    title: 'Собираем сайт и связки',
    text: 'Пишем понятные тексты, делаем адаптивную вёрстку, подключаем формы к CRM и настраиваем передачу рекламных меток.',
  },
  {
    icon: Rocket,
    title: 'Запускаем первую версию',
    text: 'Выкатываем сайт на рабочий домен, включаем тестовый трафик и проверяем отправку и доставку заявок.',
  },
  {
    icon: LineChart,
    title: 'Проверяем и улучшаем',
    text: 'Смотрим, откуда приходят обращения, как работают формы и что можно улучшить на основе реальных данных.',
  },
];

export default function HomeWorkflowSteps() {
  return (
    <section
      id="workflow"
      className="py-20 md:py-28 bg-[#F4F1EA] relative overflow-hidden border-t border-[#D7D3C8] scroll-mt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D2528] tracking-tight mb-4">
              Как проходит работа
            </h2>
            <p className="text-[#5D686A] text-base sm:text-lg leading-relaxed">
              Понятный прозрачный процесс: вам не нужно разбираться в технических нюансах — мы берём реализацию на себя.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Steps Grid (No ordinal numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <ScrollReveal key={st.title} delay={idx * 60}>
                <SpotlightCard className="p-6 rounded-2xl bg-[#FFFDF8] border border-[#D7D3C8] shadow-sm hover:border-[#3E7778] transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#3E7778]/10 text-[#3E7778] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1D2528] mb-2.5 leading-snug">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D686A] leading-relaxed">
                      {st.text}
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
