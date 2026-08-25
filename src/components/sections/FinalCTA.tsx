'use client';

import { cn } from '@/lib/utils';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-section bg-bg-primary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <ScrollReveal className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-display-xl font-bold text-text-primary mb-6 tracking-tight">
            Давайте построим вашу систему роста.
          </h2>
          
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Расскажите, что вы хотите улучшить. Мы спроектируем цифровую систему специально для вас.
          </p>
          
          <Button variant="primary" size="lg" className="mb-8">
            Обсудить проект
          </Button>
          
          <div className="font-mono text-xs text-text-muted flex flex-wrap items-center justify-center gap-2">
            <span>Сайты</span>
            <span className="opacity-50">·</span>
            <span>Маркетинг</span>
            <span className="opacity-50">·</span>
            <span>ИИ</span>
            <span className="opacity-50">·</span>
            <span>Автоматизация</span>
            <span className="opacity-50">·</span>
            <span>Данные</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
