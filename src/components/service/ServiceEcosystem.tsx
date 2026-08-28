'use client';

import React, { useState, useMemo } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/useMediaQuery';

export interface EcosystemItem {
  id: string;
  label: string;
  description: string;
  angle?: number;
}

export interface ServiceEcosystemProps {
  items: EcosystemItem[];
  id?: string;
  tag?: string;
  title?: string;
  description?: string;
  centerLabel?: string;
}

export default function ServiceEcosystem({
  items,
  id,
  tag,
  title = 'Сайт может работать гораздо больше.',
  description,
  centerLabel = 'САЙТ',
}: ServiceEcosystemProps) {
  const isMobile = useIsMobile();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const positionedItems = useMemo(() => {
    return items.map((item, index) => {
      // Angle in radians, starting from top (offset by -PI/2)
      const angleDeg = item.angle ?? (360 / items.length) * index;
      const angleRad = (angleDeg - 90) * (Math.PI / 180);
      const x = 50 + 42 * Math.cos(angleRad);
      const y = 50 + 42 * Math.sin(angleRad);
      return { ...item, x, y };
    });
  }, [items]);

  if (isMobile) {
    return (
      <section id={id} className="py-section bg-bg-primary relative overflow-hidden scroll-mt-20">
        <div className="container mx-auto px-4">
          <SectionHeading tag={tag} title={title} subtitle={description} align="center" />
          <div className="flex flex-col gap-4 mt-8">
            {items.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <div className="bg-bg-surface border border-border rounded-xl p-4">
                  <h3 className="font-bold text-text-primary text-sm mb-1">{item.label}</h3>
                  <p className="text-text-secondary text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-section bg-bg-primary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeading tag={tag} title={title} subtitle={description} align="center" />
        <div className="relative w-full max-w-2xl mx-auto h-[500px] mt-12">
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {positionedItems.map((item) => (
              <line
                key={`line-${item.id}`}
                x1="50%"
                y1="50%"
                x2={`${item.x}%`}
                y2={`${item.y}%`}
                className={cn(
                  "transition-colors duration-300",
                  activeItem === item.id ? "stroke-accent/60" : "stroke-[rgba(99,102,241,0.15)]"
                )}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-bg-surface border border-accent/40 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <span className="px-2 text-center font-mono text-[10px] sm:text-xs text-accent animate-pulse">{centerLabel}</span>
          </div>

          {/* Satellites */}
          {positionedItems.map((item) => (
            <button
              type="button"
              key={item.id}
              className="absolute group z-10 focus-visible:outline-none"
              style={{
                top: `${item.y}%`,
                left: `${item.x}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              onFocus={() => setActiveItem(item.id)}
              onBlur={() => setActiveItem(null)}
              aria-describedby={`ecosystem-${item.id}`}
            >
              <div
                className={cn(
                  "px-3 py-1.5 rounded-full bg-bg-surface border text-xs font-mono transition-all duration-300 cursor-default whitespace-nowrap",
                  activeItem === item.id
                    ? "border-accent/60 text-text-primary scale-105 shadow-md" 
                    : "border-border text-text-secondary"
                )}
              >
                {item.label}
              </div>
              
              {/* Tooltip */}
              <div
                id={`ecosystem-${item.id}`}
                className={cn(
                  "absolute z-20 bg-bg-surface border border-border rounded-lg p-3 text-xs text-text-secondary w-max max-w-[180px] shadow-lg transition-all duration-300 pointer-events-none",
                  item.x > 50 ? "left-full ml-3" : "right-full mr-3",
                  item.y > 50 ? "bottom-full mb-3" : "top-full mt-3",
                  activeItem === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                )}
              >
                {item.description}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
