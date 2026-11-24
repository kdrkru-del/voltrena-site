import React from 'react';
import { cn } from '@/lib/utils';

export type Tone = 'sand' | 'sand2' | 'dark';

/** Full-width page band with a consistent light/dark rhythm for service pages. */
export function Band({
  tone = 'sand',
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const dark = tone === 'dark';
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden scroll-mt-20 py-16 md:py-24 border-t',
        tone === 'sand' && 'bg-[#F4F1EA] text-[#1D2528] border-black/5',
        tone === 'sand2' && 'bg-[#EAE6DD] text-[#1D2528] border-black/5',
        dark && 'bg-[#1D2528] text-[#F4F1EA] border-white/10',
        className
      )}
    >
      {dark && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 right-[-8%] w-[46vw] max-w-[640px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.24),transparent_65%)] blur-2xl" />
          <div className="absolute bottom-[-30%] left-[-8%] w-[40vw] max-w-[560px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(201,133,77,0.12),transparent_65%)] blur-2xl" />
        </div>
      )}
      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">{children}</div>
    </section>
  );
}

export const pad = (n: number) => String(n).padStart(2, '0');
