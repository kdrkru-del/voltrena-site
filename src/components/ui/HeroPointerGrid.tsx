'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface NodePoint {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  label: string;
  isPrimary?: boolean;
}

const NODES_DATA = [
  { relX: 0.12, relY: 0.22, label: 'DIRECT' },
  { relX: 0.24, relY: 0.38, label: 'UTM' },
  { relX: 0.08, relY: 0.65, label: 'SEO' },
  { relX: 0.20, relY: 0.82, label: 'B2B' },
  { relX: 0.46, relY: 0.32, label: 'WEBSITE', isPrimary: true },
  { relX: 0.62, relY: 0.20, label: 'AI_AGENT' },
  { relX: 0.58, relY: 0.58, label: 'LEAD_FLOW', isPrimary: true },
  { relX: 0.76, relY: 0.42, label: 'CRM_CORE', isPrimary: true },
  { relX: 0.88, relY: 0.28, label: 'TELEGRAM' },
  { relX: 0.85, relY: 0.72, label: 'ANALYTICS', isPrimary: true },
  { relX: 0.94, relY: 0.52, label: 'DEALS' },
];

const CONNECTIONS = [
  [0, 1], [1, 4], [2, 4], [3, 4],
  [4, 5], [4, 6], [5, 7], [6, 7],
  [7, 8], [7, 9], [7, 10], [9, 10],
];

export default function HeroPointerGrid({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameId = useRef<number>(0);
  const isVisibleRef = useRef<boolean>(true);
  const prefersReduced = useReducedMotion();

  // Mouse & smooth target positions
  const mouse = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });
  const nodes = useRef<NodePoint[]>([]);

  // Init node coordinates based on width/height
  const initNodes = useCallback((width: number, height: number) => {
    nodes.current = NODES_DATA.map((item) => ({
      x: item.relX * width,
      y: item.relY * height,
      baseX: item.relX * width,
      baseY: item.relY * height,
      label: item.label,
      isPrimary: item.isPrimary,
    }));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);
    initNodes(width, height);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
      initNodes(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Track mouse with hover capability check
    const hasFineHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasFineHover || prefersReduced) return;
      const rect = container.getBoundingClientRect();
      mouse.current.targetX = e.clientX - rect.left;
      mouse.current.targetY = e.clientY - rect.top;
      mouse.current.active = true;
    };

    const onMouseLeave = () => {
      mouse.current.active = false;
      mouse.current.targetX = -1000;
      mouse.current.targetY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave, { passive: true });

    // IntersectionObserver to pause rendering when off-screen
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    });
    observer.observe(container);

    const onVisibilityChange = () => {
      isVisibleRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // Animation Loop
    let lastTime = 0;
    const render = (time: number) => {
      animFrameId.current = requestAnimationFrame(render);
      if (!isVisibleRef.current) return;

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse interpolation
      if (mouse.current.active) {
        mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.12;
        mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.12;
      } else {
        mouse.current.x += (-1000 - mouse.current.x) * 0.08;
        mouse.current.y += (-1000 - mouse.current.y) * 0.08;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle technical grid
      const gridSize = 48;
      const gridCols = Math.ceil(width / gridSize);
      const gridRows = Math.ceil(height / gridSize);

      // Subtle parallax offset for background grid (4-8px max)
      let parallaxX = 0;
      let parallaxY = 0;
      if (mouse.current.active && !prefersReduced) {
        parallaxX = ((mouse.current.x - width / 2) / (width / 2)) * 6;
        parallaxY = ((mouse.current.y - height / 2) / (height / 2)) * 6;
      }

      ctx.save();
      ctx.translate(parallaxX, parallaxY);

      // Base faint grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.024)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width + gridSize; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height + gridSize; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Spotlight illuminated grid lines near cursor
      if (mouse.current.x > -500) {
        const rad = 280;
        const spotGrad = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          rad
        );
        spotGrad.addColorStop(0, 'rgba(62, 119, 120, 0.22)');
        spotGrad.addColorStop(0.5, 'rgba(62, 119, 120, 0.08)');
        spotGrad.addColorStop(1, 'rgba(62, 119, 120, 0)');

        ctx.strokeStyle = spotGrad;
        ctx.lineWidth = 1.2;
        ctx.beginPath();

        const minX = Math.max(0, Math.floor((mouse.current.x - rad) / gridSize) * gridSize);
        const maxX = Math.min(width, Math.ceil((mouse.current.x + rad) / gridSize) * gridSize);
        const minY = Math.max(0, Math.floor((mouse.current.y - rad) / gridSize) * gridSize);
        const maxY = Math.min(height, Math.ceil((mouse.current.y + rad) / gridSize) * gridSize);

        for (let x = minX; x <= maxX; x += gridSize) {
          ctx.moveTo(x, minY);
          ctx.lineTo(x, maxY);
        }
        for (let y = minY; y <= maxY; y += gridSize) {
          ctx.moveTo(minX, y);
          ctx.lineTo(maxX, y);
        }
        ctx.stroke();

        // Technical crosshairs at nearby grid intersections
        ctx.fillStyle = 'rgba(90, 150, 146, 0.35)';
        for (let x = minX; x <= maxX; x += gridSize) {
          for (let y = minY; y <= maxY; y += gridSize) {
            const d = Math.hypot(x - mouse.current.x, y - mouse.current.y);
            if (d < 180) {
              const alpha = (1 - d / 180) * 0.45;
              ctx.fillStyle = `rgba(90, 150, 146, ${alpha})`;
              ctx.fillRect(x - 2, y - 0.5, 5, 1);
              ctx.fillRect(x - 0.5, y - 2, 1, 5);
            }
          }
        }
      }

      ctx.restore();

      // 2. Draw connections between nodes
      CONNECTIONS.forEach(([fromIdx, toIdx]) => {
        const from = nodes.current[fromIdx];
        const to = nodes.current[toIdx];
        if (!from || !to) return;

        // Check distance to mouse
        let proximityBoost = 0;
        if (mouse.current.x > -500) {
          const midX = (from.x + to.x) / 2;
          const midY = (from.y + to.y) / 2;
          const distToMouse = Math.hypot(midX - mouse.current.x, midY - mouse.current.y);
          if (distToMouse < 220) {
            proximityBoost = (1 - distToMouse / 220) * 0.35;
          }
        }

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = proximityBoost > 0
          ? `rgba(90, 150, 146, ${0.15 + proximityBoost})`
          : 'rgba(62, 119, 120, 0.12)';
        ctx.lineWidth = proximityBoost > 0 ? 1.5 : 1;
        ctx.stroke();
      });

      // 3. Draw nodes & labels
      nodes.current.forEach((node, i) => {
        const floatY = prefersReduced ? 0 : Math.sin(time * 0.0015 + i * 0.8) * 2;
        const curY = node.baseY + floatY;

        let distToMouse = 9999;
        if (mouse.current.x > -500) {
          distToMouse = Math.hypot(node.baseX - mouse.current.x, curY - mouse.current.y);
        }
        const isNear = distToMouse < 200;
        const boost = isNear ? (1 - distToMouse / 200) : 0;

        const radius = node.isPrimary ? 4.5 : 3;

        // Outer glow on hover proximity
        if (boost > 0) {
          const glowGrad = ctx.createRadialGradient(node.baseX, curY, 0, node.baseX, curY, radius * 4);
          glowGrad.addColorStop(0, `rgba(90, 150, 146, ${0.35 * boost})`);
          glowGrad.addColorStop(1, 'rgba(90, 150, 146, 0)');
          ctx.beginPath();
          ctx.arc(node.baseX, curY, radius * 4, 0, Math.PI * 2);
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }

        // Core node circle
        ctx.beginPath();
        ctx.arc(node.baseX, curY, radius, 0, Math.PI * 2);
        ctx.fillStyle = node.isPrimary
          ? (boost > 0 ? '#5A9692' : '#3E7778')
          : (boost > 0 ? '#C9854D' : 'rgba(201, 133, 77, 0.65)');
        ctx.fill();

        // Node label
        ctx.font = '9px "JetBrains Mono", monospace';
        ctx.fillStyle = boost > 0 ? 'rgba(244, 241, 234, 0.85)' : 'rgba(127, 137, 135, 0.55)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(node.label, node.baseX, curY + radius + 4);
      });
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      observer.disconnect();
    };
  }, [initNodes, prefersReduced]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ''}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
