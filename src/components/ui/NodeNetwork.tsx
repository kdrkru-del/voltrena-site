'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface NodeDef {
  id: string;
  label: string;
  relX: number;
  relY: number;
  mobileRelX: number;
  mobileRelY: number;
  isMobileOnly?: boolean;
  isDesktopOnly?: boolean;
}

interface ConnectionDef {
  from: string;
  to: string;
  connectionLabel?: string;
}

const NODES: NodeDef[] = [
  { id: 'demand', label: 'СПРОС', relX: 0.62, relY: 0.20, mobileRelX: 0.88, mobileRelY: 0.22 },
  { id: 'ads', label: 'РЕКЛАМА', relX: 0.82, relY: 0.16, mobileRelX: 0.88, mobileRelY: 0.38 },
  { id: 'site', label: 'САЙТ', relX: 0.68, relY: 0.38, mobileRelX: 0.86, mobileRelY: 0.54 },
  { id: 'crm', label: 'CRM', relX: 0.86, relY: 0.35, mobileRelX: 0.88, mobileRelY: 0.70 },
  { id: 'sales', label: 'ПРОДАЖИ', relX: 0.93, relY: 0.52, mobileRelX: 0.84, mobileRelY: 0.86 },
  { id: 'auto', label: 'АВТОМАТИЗАЦИЯ', relX: 0.75, relY: 0.60, mobileRelX: 0.60, mobileRelY: 0.90, isDesktopOnly: true },
  { id: 'data', label: 'ДАННЫЕ', relX: 0.90, relY: 0.72, mobileRelX: 0.72, mobileRelY: 0.92, isDesktopOnly: true },
  { id: 'analytics', label: 'АНАЛИТИКА', relX: 0.66, relY: 0.80, mobileRelX: 0.40, mobileRelY: 0.90, isDesktopOnly: true },
];

const CONNECTIONS: ConnectionDef[] = [
  { from: 'demand', to: 'site', connectionLabel: 'B2B-поиск' },
  { from: 'ads', to: 'site', connectionLabel: 'UTM-трафик' },
  { from: 'site', to: 'crm', connectionLabel: 'Заявка 0.8с' },
  { from: 'crm', to: 'sales', connectionLabel: 'Лид менеджеру' },
  { from: 'crm', to: 'auto', connectionLabel: 'Сценарии' },
  { from: 'sales', to: 'data', connectionLabel: 'Выручка' },
  { from: 'auto', to: 'data', connectionLabel: 'Документы' },
  { from: 'data', to: 'analytics', connectionLabel: 'Сквозной ROMI' },
  { from: 'analytics', to: 'site', connectionLabel: 'Оптимизация' },
];

interface CanvasNode {
  id: string;
  label: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  driftPhase: number;
  driftSpeed: number;
}

export default function NodeNetwork({
  className,
  isLightMode = true,
}: {
  className?: string;
  isLightMode?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number>(0);
  const nodesRef = useRef<CanvasNode[]>([]);
  const mouseRef = useRef({ x: -2000, y: -2000 });
  const hoveredNodeIdRef = useRef<string | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const prefersReducedMotion = useReducedMotion();

  const initNodes = useCallback((width: number, height: number, isMobile: boolean) => {
    const activeDefs = NODES.filter((n) => (isMobile ? !n.isDesktopOnly : !n.isMobileOnly));

    nodesRef.current = activeDefs.map((def, idx) => {
      const targetRelX = isMobile ? def.mobileRelX : def.relX;
      const targetRelY = isMobile ? def.mobileRelY : def.relY;
      const x = targetRelX * width;
      const y = targetRelY * height;

      return {
        id: def.id,
        label: def.label,
        x,
        y,
        baseX: x,
        baseY: y,
        radius: isMobile ? 3 : 4,
        driftPhase: idx * 1.3,
        driftSpeed: 0.0004 + (idx % 3) * 0.00015,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initNodes(width, height, width < 768);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -2000, y: -2000 };
      hoveredNodeIdRef.current = null;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mouseleave', onMouseLeave);

    let lastTime = performance.now();

    const draw = (currentTime: number) => {
      if (!isVisibleRef.current) {
        animFrameId.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const nodes = nodesRef.current;
      const nodeMap = new Map(nodes.map((n) => [n.id, n]));

      // Check nearest hovered node
      let nearestNode: CanvasNode | null = null;
      let minDistance = 75; // hover trigger radius

      for (const node of nodes) {
        if (!prefersReducedMotion) {
          // Slow organic drift
          const t = currentTime * node.driftSpeed + node.driftPhase;
          node.x = node.baseX + Math.sin(t) * 12;
          node.y = node.baseY + Math.cos(t * 0.8) * 8;
        }

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < minDistance) {
          nearestNode = node;
          minDistance = dist;
        }
      }

      hoveredNodeIdRef.current = nearestNode ? nearestNode.id : null;
      const activeId = hoveredNodeIdRef.current;

      // Draw Connections
      for (const conn of CONNECTIONS) {
        const fromNode = nodeMap.get(conn.from);
        const toNode = nodeMap.get(conn.to);
        if (!fromNode || !toNode) continue;

        const isRelatedToHover = activeId === fromNode.id || activeId === toNode.id;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        if (isRelatedToHover) {
          ctx.strokeStyle = isLightMode ? 'rgba(62, 119, 120, 0.75)' : 'rgba(100, 141, 139, 0.65)';
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = isLightMode ? 'rgba(62, 119, 120, 0.22)' : 'rgba(100, 141, 139, 0.18)';
          ctx.lineWidth = 1;
        }

        ctx.stroke();

        // If related to active node, draw subtle label in middle of line
        if (isRelatedToHover && conn.connectionLabel && width > 640) {
          const midX = (fromNode.x + toNode.x) / 2;
          const midY = (fromNode.y + toNode.y) / 2;

          ctx.font = '9px monospace';
          ctx.fillStyle = isLightMode ? '#3E7778' : '#D3C6A4';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(conn.connectionLabel, midX, midY - 3);
        }

        // Slow data packet pulse along line
        if (!prefersReducedMotion) {
          const pulseSpeed = 0.00025;
          const pulseProgress = ((currentTime * pulseSpeed + fromNode.baseX * 0.01) % 1);
          const px = fromNode.x + (toNode.x - fromNode.x) * pulseProgress;
          const py = fromNode.y + (toNode.y - fromNode.y) * pulseProgress;

          ctx.beginPath();
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = isRelatedToHover
            ? (isLightMode ? '#C9854D' : '#D3C6A4')
            : (isLightMode ? 'rgba(62, 119, 120, 0.45)' : 'rgba(100, 141, 139, 0.4)');
          ctx.fill();
        }
      }

      // Draw Nodes
      for (const node of nodes) {
        const isHovered = activeId === node.id;

        // Outer glow on hover
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? 'rgba(62, 119, 120, 0.12)' : 'rgba(211, 198, 164, 0.12)';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
          ctx.fillStyle = isLightMode ? 'rgba(62, 119, 120, 0.22)' : 'rgba(211, 198, 164, 0.25)';
          ctx.fill();
        }

        // Main node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? 4.5 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered
          ? (isLightMode ? '#3E7778' : '#D3C6A4')
          : (isLightMode ? 'rgba(62, 119, 120, 0.45)' : 'rgba(211, 198, 164, 0.35)');
        ctx.fill();

        ctx.strokeStyle = isHovered
          ? (isLightMode ? '#2D5D60' : '#D3C6A4')
          : (isLightMode ? 'rgba(62, 119, 120, 0.60)' : 'rgba(100, 141, 139, 0.45)');
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node Label
        ctx.font = '10px monospace';
        ctx.fillStyle = isHovered
          ? (isLightMode ? '#1D2528' : '#F2EFE6')
          : (isLightMode ? '#5D686A' : '#737B77');
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x + (isHovered ? 9 : 8), node.y);
      }

      if (!prefersReducedMotion) {
        animFrameId.current = requestAnimationFrame(draw);
      }
    };

    if (prefersReducedMotion) {
      draw(0);
    } else {
      animFrameId.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animFrameId.current);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [initNodes, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-auto overflow-hidden ${className || ''}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
    </div>
  );
}
