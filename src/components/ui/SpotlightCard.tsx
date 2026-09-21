'use client';

import React, { useRef, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(62, 119, 120, 0.08)',
  borderColor = 'rgba(90, 150, 146, 0.35)',
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReduced = useReducedMotion();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, [prefersReduced]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-2xl border border-border bg-bg-surface transition-all duration-300 overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Spotlight highlight layer following cursor */}
      {!prefersReduced && isHovered && (
        <>
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(420px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${spotlightColor}, transparent 65%)`,
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
            style={{
              maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
              WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
              background: `radial-gradient(280px circle at var(--mouse-x, -500px) var(--mouse-y, -500px), ${borderColor}, transparent 60%)`,
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
