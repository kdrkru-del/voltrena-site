'use client';

import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';

const CASES = [
  { id: '01' },
  { id: '02' },
  { id: '03' }
];

export default function Cases() {
  return (
    <section className="py-section bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Результаты, которые говорят сами за себя." />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {CASES.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1}>
              <div className="bg-bg-surface/30 border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-border-light hover:scale-[1.02] group">
                <div className="h-[200px] w-full bg-bg-surface bg-dot-grid flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-bg-secondary/50 pointer-events-none" />
                  <span className="font-mono text-xs text-text-muted opacity-50 group-hover:opacity-100 transition-opacity">
                    Проект {item.id}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-text-muted text-sm italic">
                    Кейс в разработке
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
