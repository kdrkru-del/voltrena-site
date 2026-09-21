'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!mediaHover.matches || mediaReduced.matches) return;
    setEnabled(true);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const target = e.target as HTMLElement | null;
      isHovering = !!target?.closest('a, button, [role="button"], input, textarea, select');
    };

    const onMouseLeave = () => {
      mouseX = -100;
      mouseY = -100;
    };

    const render = () => {
      // Direct position for dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
        dotRef.current.style.opacity = mouseX > 0 ? '1' : '0';
      }

      // Lerp for outer ring
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      if (ringRef.current) {
        const ringSize = isHovering ? 36 : 22;
        ringRef.current.style.transform = `translate3d(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px, 0)`;
        ringRef.current.style.width = `${ringSize}px`;
        ringRef.current.style.height = `${ringSize}px`;
        ringRef.current.style.opacity = mouseX > 0 ? (isHovering ? '0.85' : '0.45') : '0';
        ringRef.current.style.borderColor = isHovering ? '#C9854D' : '#5A9692';
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none"
    >
      {/* Outer subtle lagging ring */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 rounded-full border border-[#5A9692] transition-[width,height,border-color] duration-200 ease-out pointer-events-none opacity-0 will-change-transform"
      />
      {/* Inner sharp dot */}
      <div
        ref={dotRef}
        className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C9854D] pointer-events-none opacity-0 shadow-[0_0_6px_rgba(201,133,77,0.8)] will-change-transform"
      />
    </div>
  );
}
