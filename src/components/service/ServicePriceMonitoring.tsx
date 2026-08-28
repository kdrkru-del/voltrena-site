'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowDown, Bell, TrendingDown, Tag, PackageX, Layers, Activity } from 'lucide-react';

export default function ServicePriceMonitoring() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading 
            title="Следим за ценами конкурентов" 
            subtitle="Оперативно реагируйте на изменения на рынке, чтобы всегда оставаться на шаг впереди."
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto mt-16">
          <ScrollReveal delay={100}>
            {/* Visual Example */}
            <div className="bg-bg-surface border border-border rounded-3xl p-8 md:p-12 mb-16 relative">
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-8">
                <div className="px-6 py-4 bg-bg-primary border border-border rounded-xl text-center w-full md:w-auto shadow-sm">
                  <div className="text-sm text-text-secondary mb-1">Competitor A</div>
                  <div className="font-mono text-xl font-medium text-text-primary">12 500 ₽</div>
                </div>
                <div className="px-6 py-4 bg-bg-primary border border-border rounded-xl text-center w-full md:w-auto shadow-sm">
                  <div className="text-sm text-text-secondary mb-1">Competitor B</div>
                  <div className="font-mono text-xl font-medium text-text-primary">11 900 ₽</div>
                </div>
                <div className="px-6 py-4 bg-bg-primary border border-border rounded-xl text-center w-full md:w-auto shadow-sm">
                  <div className="text-sm text-text-secondary mb-1">Competitor C</div>
                  <div className="font-mono text-xl font-medium text-text-primary">13 100 ₽</div>
                </div>
              </div>
              
              <div className="flex justify-center my-8">
                <div className="bg-bg-primary border border-border w-12 h-12 rounded-full flex items-center justify-center text-accent shadow-sm relative z-10">
                  <ArrowDown size={24} />
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-border -z-0"></div>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <div className="flex items-center gap-4 px-6 py-4 bg-accent/10 border border-accent/20 rounded-xl w-full md:w-auto">
                  <TrendingDown className="text-accent" size={24} />
                  <div>
                    <div className="text-sm text-accent font-medium uppercase tracking-wider mb-1">Price Change</div>
                    <div className="text-text-primary font-medium">Снижение цены у B</div>
                  </div>
                </div>
                
                <ArrowDown size={20} className="text-text-secondary hidden md:block -rotate-90" />
                <ArrowDown size={20} className="text-text-secondary md:hidden" />

                <div className="flex items-center gap-4 px-6 py-4 bg-bg-primary border border-border rounded-xl w-full md:w-auto shadow-sm">
                  <Bell className="text-accent" size={24} />
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Alert / Dashboard</div>
                    <div className="text-text-primary font-medium">Уведомление менеджеру</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Scenarios */}
          <ScrollReveal delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Activity, title: 'Ежедневный мониторинг' },
                { icon: TrendingDown, title: 'Изменение цен' },
                { icon: Tag, title: 'Скидки и акции' },
                { icon: Bell, title: 'Новые товары' },
                { icon: PackageX, title: 'Исчезновение товара' },
                { icon: Layers, title: 'Сравнение по категориям' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-bg-surface border border-border rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-bg-secondary flex items-center justify-center text-text-primary shrink-0">
                    <item.icon size={20} />
                  </div>
                  <span className="text-text-primary font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
