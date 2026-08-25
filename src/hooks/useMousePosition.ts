'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0.5,
    normalizedY: 0.5,
  });

  const rafRef = useRef<number>(0);
  const latestPos = useRef({ x: 0, y: 0 });

  const updatePosition = useCallback(() => {
    const { x, y } = latestPos.current;
    setPosition({
      x,
      y,
      normalizedX: typeof window !== 'undefined' ? x / window.innerWidth : 0.5,
      normalizedY: typeof window !== 'undefined' ? y / window.innerHeight : 0.5,
    });
    rafRef.current = 0;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      latestPos.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updatePosition]);

  return position;
}
