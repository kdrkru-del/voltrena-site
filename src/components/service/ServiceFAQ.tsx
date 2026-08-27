'use client';

import React, { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceFAQProps {
  faq: FAQItem[];
}

export default function ServiceFAQ({ faq }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-section bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Часто задаваемые вопросы." align="left" />

        <div className="mt-12 max-w-3xl">
          <ScrollReveal direction="up" delay={0}>
            <div className="border-t border-border">
              {faq.map((item, index) => {
                const isOpen = activeIndex === index;
                const id = `faq-${index}`;
                return (
                  <div key={index} className="border-b border-border">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-answer`}
                      id={`${id}-question`}
                      className="w-full flex items-center justify-between py-5 text-left font-medium text-text-primary hover:text-accent transition-colors"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.question}</span>
                      <span
                        className={cn(
                          'text-xl transition-transform duration-300 text-text-muted',
                          isOpen ? 'rotate-45' : 'rotate-0'
                        )}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={`${id}-answer`}
                      role="region"
                      aria-labelledby={`${id}-question`}
                      className={cn(
                        'transition-all duration-300 ease-in-out overflow-hidden',
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <p className="text-text-secondary leading-relaxed pb-5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
