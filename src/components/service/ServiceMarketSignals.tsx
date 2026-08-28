'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Briefcase, ShoppingCart, Globe, Tag, Percent, Box, Building, FileText, LayoutList, Users, Activity } from 'lucide-react';

export default function ServiceMarketSignals() {
  const signals = [
    { icon: Briefcase, text: 'Новые услуги' },
    { icon: ShoppingCart, text: 'Новые товары' },
    { icon: Globe, text: 'Новые страницы' },
    { icon: Tag, text: 'Цены' },
    { icon: Percent, text: 'Акции' },
    { icon: Box, text: 'Ассортимент' },
    { icon: Building, text: 'Новые филиалы' },
    { icon: FileText, text: 'Изменения описаний' },
    { icon: LayoutList, text: 'Категории' },
    { icon: Users, text: 'Публичные вакансии' },
    { icon: Activity, text: 'Другие бизнес-сигналы' },
  ];

  return (
    <section className="py-20 bg-bg-primary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading 
            title="Видим, что меняется на рынке" 
            subtitle="Отслеживаем ключевые показатели конкурентов и партнеров в реальном времени."
          />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mt-16">
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap gap-4 justify-center mb-20">
              {signals.map((signal, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 px-6 py-3 bg-bg-surface border border-border rounded-full hover:border-accent/50 hover:bg-bg-secondary transition-colors"
                >
                  <signal.icon size={18} className="text-accent" />
                  <span className="text-text-primary font-medium">{signal.text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-30">
                <div className="w-64 h-64 bg-accent rounded-full blur-[100px]"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight max-w-4xl mx-auto">
                Изменение данных превращается в <br className="hidden md:block" />
                <span className="text-accent">сигнал для бизнеса.</span>
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
