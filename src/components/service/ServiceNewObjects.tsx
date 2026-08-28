'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Megaphone, Building2, FileCheck, Truck, Package, Briefcase, MapPin, FolderGit2, Send, Database, Bell } from 'lucide-react';

export default function ServiceNewObjects() {
  const examples = [
    { icon: Megaphone, label: 'Новые объявления' },
    { icon: Building2, label: 'Новые компании' },
    { icon: FileCheck, label: 'Новые тендеры' },
    { icon: Truck, label: 'Новые поставщики' },
    { icon: Package, label: 'Новые товары' },
    { icon: Briefcase, label: 'Новые вакансии' },
    { icon: MapPin, label: 'Новые объекты' },
    { icon: FolderGit2, label: 'Новые проекты' },
  ];

  const actions = [
    { icon: Database, label: 'Добавить в базу' },
    { icon: Send, label: 'Отправить в Telegram' },
    { icon: FileCheck, label: 'Передать в CRM' },
    { icon: Bell, label: 'Уведомить менеджера' },
  ];

  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading 
            title="Узнавайте о новых возможностях раньше" 
            subtitle="Система автоматически находит новые объекты и сообщает вам об этом первыми."
          />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto mt-16">
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {examples.map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center gap-3 p-6 bg-bg-surface border border-border rounded-2xl text-center">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary flex items-center justify-center text-text-primary mb-2">
                    <item.icon size={24} />
                  </div>
                  <span className="text-text-primary font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-bg-surface border border-border rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-text-primary mb-12">
                При появлении новой записи система может:
              </h3>
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-center relative">
                {/* Horizontal line for desktop connecting items */}
                <div className="hidden md:block absolute top-1/2 left-8 right-8 h-px bg-border -translate-y-1/2 z-0"></div>
                
                {actions.map((action, i) => (
                  <div key={i} className="flex flex-col items-center gap-4 relative z-10 w-full md:w-auto">
                    <div className="w-16 h-16 bg-bg-primary border border-border rounded-2xl flex items-center justify-center shadow-sm text-accent">
                      <action.icon size={28} />
                    </div>
                    <div className="bg-bg-primary border border-border px-4 py-2 rounded-lg text-sm font-medium text-text-primary whitespace-nowrap shadow-sm">
                      {action.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
