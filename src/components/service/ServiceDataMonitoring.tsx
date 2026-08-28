'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Database, Activity, RefreshCw, Bell, Search, BarChart } from 'lucide-react';

export default function ServiceDataMonitoring() {
  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading 
            title="Можно собирать данные один раз. А можно следить за изменениями постоянно." 
            subtitle="Два подхода к работе с данными, в зависимости от ваших целей."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* One-time Data Collection */}
          <ScrollReveal delay={100}>
            <div className="h-full p-8 rounded-2xl bg-bg-surface border border-border flex flex-col">
              <div className="w-12 h-12 bg-bg-secondary rounded-xl flex items-center justify-center mb-6 text-text-primary">
                <Database size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Разовый сбор
              </h3>
              <p className="text-text-secondary mb-6 flex-grow">
                Сбор информации под конкретную задачу. Идеально для старта проекта или разового анализа рынка.
              </p>
              
              <div className="space-y-3">
                <div className="text-sm font-medium text-text-primary uppercase tracking-wider mb-2">Примеры задач:</div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Search size={18} className="text-accent" /> Анализ рынка
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Database size={18} className="text-accent" /> База компаний
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Database size={18} className="text-accent" /> Каталог товаров
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Search size={18} className="text-accent" /> Список поставщиков
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <BarChart size={18} className="text-accent" /> Конкурентный анализ
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Continuous Monitoring */}
          <ScrollReveal delay={200}>
            <div className="h-full p-8 rounded-2xl bg-bg-surface border-2 border-accent relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -z-10 blur-xl"></div>
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-accent">
                <Activity size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">
                Постоянный мониторинг
              </h3>
              <p className="text-text-secondary mb-6 flex-grow">
                Система работает регулярно, автоматически отслеживая любые изменения в источниках.
              </p>

              <div className="space-y-3">
                <div className="text-sm font-medium text-text-primary uppercase tracking-wider mb-2">Как это работает:</div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Search size={18} className="text-accent" /> Проверяет источники
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Activity size={18} className="text-accent" /> Обнаруживает изменения
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Database size={18} className="text-accent" /> Добавляет новые записи
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <RefreshCw size={18} className="text-accent" /> Обновляет старые данные
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <Bell size={18} className="text-accent" /> Отправляет уведомления
                </div>
                <div className="flex items-center text-text-secondary gap-3">
                  <BarChart size={18} className="text-accent" /> Обновляет dashboard
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
