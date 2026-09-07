'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 700,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion || !('IntersectionObserver' in window)) {
      if (element) {
        element.style.opacity = '1';
        element.style.transform = 'none';
      }
      return;
    }

    // Never hide content that has already been painted in the viewport.
    // Only prepare unseen content below the fold for a reveal.
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    const directionMap = {
      up: 'translateY(30px)',
      down: 'translateY(-30px)',
      left: 'translateX(30px)',
      right: 'translateX(-30px)',
      none: 'none',
    };

    element.style.opacity = '0';
    element.style.transform = directionMap[direction];
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'none';
          observer.unobserve(element);
          clearTimeout(fallbackTimer);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    // Safety fallback: ensure content is always visible even if IntersectionObserver doesn't fire
    const fallbackTimer = setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'none';
    }, duration + delay + 2000);

    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
      element.style.opacity = '1';
      element.style.transform = 'none';
      element.style.transition = '';
      element.style.transitionDelay = '';
    };
  }, [delay, direction, duration, threshold, prefersReducedMotion]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
