'use client';

import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' ? 'text-center mx-auto max-w-4xl' : 'text-left max-w-3xl',
        className
      )}
    >
      {tag && (
        <span
          className={cn(
            'mb-4 inline-flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.18em]',
            dark ? 'text-[#D99A62]' : 'text-[#3E7778]'
          )}
        >
          <span className="h-px w-6 bg-current" aria-hidden="true" />
          {tag}
        </span>
      )}
      <h2
        className={cn(
          'break-words text-[clamp(1.9rem,4.2vw,3.1rem)] font-extrabold leading-[1.08] tracking-tight',
          dark ? 'text-[#F4F1EA]' : 'text-[#1D2528]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 md:mt-5 max-w-2xl text-base md:text-lg leading-relaxed',
            dark ? 'text-[#A9B3B1]' : 'text-[#5D686A]',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
