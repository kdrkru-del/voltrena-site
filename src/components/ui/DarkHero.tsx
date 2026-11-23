import React from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/** Shared dark hero shell for inner pages. `data-dark-hero` lets the Header switch to light-on-dark. */
export function DarkHeroSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      data-dark-hero
      className={cn('relative bg-[#141B1D] text-[#F4F1EA] overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24', className)}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 right-[-10%] w-[60vw] max-w-[820px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.32),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-30%] left-[-12%] w-[50vw] max-w-[700px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(201,133,77,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_65%_70%_at_72%_40%,#000_10%,transparent_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-6xl">{children}</div>
    </section>
  );
}

export function HeroEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-white/[0.06] ring-1 ring-white/10 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.16em] text-[#D99A62]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C9854D]" />
      {children}
    </span>
  );
}

export function HeroTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn('font-extrabold tracking-tight leading-[1.06] text-[#F4F1EA] text-4xl sm:text-5xl lg:text-[3.4rem]', className)}>
      {children}
    </h1>
  );
}

export function HeroLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-base sm:text-lg text-[#A9B3B1] leading-relaxed', className)}>{children}</p>;
}

export function HeroActions({
  primary,
  secondary,
  className,
}: {
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col sm:flex-row sm:items-center gap-3.5', className)}>
      <Button variant="primary" size="lg" href={primary.href}>
        {primary.label}
      </Button>
      {secondary && (
        <Button variant="secondary" size="lg" href={secondary.href}>
          {secondary.label}
        </Button>
      )}
    </div>
  );
}
