'use client';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16 md:mb-20',
        align === 'center' ? 'text-center mx-auto max-w-4xl' : 'text-left max-w-3xl',
        className
      )}
    >
      {tag && (
        <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 md:mb-6">
          {tag}
        </span>
      )}
      <h2 className="text-display font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className={cn('mt-4 md:mt-6 text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed', align === 'center' && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
