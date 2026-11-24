'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import { Band, pad } from '@/components/service/Band';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceFAQProps {
  faq: FAQItem[];
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <Band tone="sand">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading tag="Вопросы" title="Часто задаваемые вопросы." align="left" className="mb-6 md:mb-6" />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-[#5D686A]">Не нашли свой вопрос? Опишите задачу — ответим по существу и без шаблонов.</p>
            <Button variant="primary" size="default" href="#contact">
              Задать вопрос
            </Button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <ScrollReveal>
            <div className="border-t border-[#D7D3C8]">
              {faq.map((item, index) => {
                const isOpen = activeIndex === index;
                const id = `faq-${index}`;
                return (
                  <div key={index} className="border-b border-[#D7D3C8]">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-answer`}
                      id={`${id}-question`}
                      className="group flex w-full items-start gap-4 py-5 text-left md:gap-6 md:py-6"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                    >
                      <span className="mt-1 font-mono text-xs text-[#C9854D]">{pad(index + 1)}</span>
                      <span className={cn('flex-1 text-base font-bold leading-snug transition-colors md:text-lg', isOpen ? 'text-[#1D2528]' : 'text-[#1D2528] group-hover:text-[#3E7778]')}>
                        {item.question}
                      </span>
                      <span
                        className={cn(
                          'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300',
                          isOpen ? 'rotate-45 bg-[#1D2528] text-[#F4F1EA] ring-[#1D2528]' : 'text-[#5D686A] ring-[#D7D3C8] group-hover:ring-[#3E7778]'
                        )}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div
                      id={`${id}-answer`}
                      role="region"
                      aria-labelledby={`${id}-question`}
                      className={cn('grid transition-[grid-template-rows] duration-300 ease-out', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-6 pl-9 pr-12 text-sm leading-relaxed text-[#5D686A] md:pl-12 md:text-base">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </Band>
  );
}
