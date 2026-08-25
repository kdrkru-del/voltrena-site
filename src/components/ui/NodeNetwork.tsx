'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useIsMobile } from '@/hooks/useMediaQuery';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
}

interface Connection {
  from: string;
  to: string;
  pulseOffset: number;
  pulseSpeed: number;
}

interface DataPulse {
  connection: Connection;
  progress: number;
  speed: number;
  active: boolean;
}

const NODE_DEFINITIONS = [
  { id: 'ads', label: 'ADS', relX: 0.12, relY: 0.25 },
  { id: 'search', label: 'SEARCH', relX: 0.08, relY: 0.55 },
  { id: 'seo', label: 'SEO', relX: 0.18, relY: 0.75 },
  { id: 'b2b', label: 'B2B', relX: 0.15, relY: 0.42 },
  { id: 'website', label: 'WEBSITE', relX: 0.38, relY: 0.48 },
  { id: 'ai', label: 'AI', relX: 0.55, relY: 0.38 },
  { id: 'bot', label: 'BOT', relX: 0.52, relY: 0.65 },
  { id: 'crm', label: 'CRM', relX: 0.7, relY: 0.5 },
  { id: 'data', label: 'DATA', relX: 0.82, relY: 0.35 },
  { id: 'sales', label: 'SALES', relX: 0.88, relY: 0.6 },
];

const CONNECTIONS: Omit<Connection, 'pulseOffset' | 'pulseSpeed'>[] = [
  { from: 'ads', to: 'website' },
  { from: 'search', to: 'website' },
  { from: 'seo', to: 'website' },
  { from: 'b2b', to: 'website' },
  { from: 'website', to: 'ai' },
  { from: 'website', to: 'bot' },
  { from: 'ai', to: 'crm' },
  { from: 'bot', to: 'crm' },
  { from: 'crm', to: 'data' },
  { from: 'crm', to: 'sales' },
  { from: 'data', to: 'sales' },
];

const ACCENT_COLOR = '#6366f1';
const ACCENT_LIGHT = '#818cf8';

export default function NodeNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const pulsesRef = useRef<DataPulse[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const initNodes = useCallback((width: number, height: number) => {
    nodesRef.current = NODE_DEFINITIONS.map((def) => ({
      id: def.id,
      label: def.label,
      x: def.relX * width,
      y: def.relY * height,
      baseX: def.relX * width,
      baseY: def.relY * height,
      radius: def.id === 'website' || def.id === 'crm' ? 28 : 22,
      color: ACCENT_COLOR,
    }));

    connectionsRef.current = CONNECTIONS.map((conn, i) => ({
      ...conn,
      pulseOffset: i * 0.3,
      pulseSpeed: 0.003 + Math.random() * 0.002,
    }));

    pulsesRef.current = connectionsRef.current.map((conn) => ({
      connection: conn,
      progress: Math.random(),
      speed: conn.pulseSpeed,
      active: true,
    }));
  }, []);

  const getNodeById = useCallback((id: string): Node | undefined => {
    return nodesRef.current.find((n) => n.id === id);
  }, []);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      ctx.clearRect(0, 0, width * dpr, height * dpr);
      ctx.save();
      ctx.scale(dpr, dpr);

      const time = timeRef.current;

      // Update node positions (cursor interaction)
      if (!isMobile) {
        nodesRef.current.forEach((node) => {
          const dx = mouseRef.current.x - node.baseX;
          const dy = mouseRef.current.y - node.baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 250;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 15;
            node.x = node.baseX - (dx / dist) * force;
            node.y = node.baseY - (dy / dist) * force;
          } else {
            node.x += (node.baseX - node.x) * 0.05;
            node.y += (node.baseY - node.y) * 0.05;
          }
        });
      }

      // Draw connections
      connectionsRef.current.forEach((conn) => {
        const fromNode = getNodeById(conn.from);
        const toNode = getNodeById(conn.to);
        if (!fromNode || !toNode) return;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw data pulses
      if (!prefersReducedMotion) {
        pulsesRef.current.forEach((pulse) => {
          pulse.progress += pulse.speed;
          if (pulse.progress > 1) pulse.progress = 0;

          const fromNode = getNodeById(pulse.connection.from);
          const toNode = getNodeById(pulse.connection.to);
          if (!fromNode || !toNode) return;

          const px = fromNode.x + (toNode.x - fromNode.x) * pulse.progress;
          const py = fromNode.y + (toNode.y - fromNode.y) * pulse.progress;

          const gradient = ctx.createRadialGradient(px, py, 0, px, py, 6);
          gradient.addColorStop(0, 'rgba(129, 140, 248, 0.8)');
          gradient.addColorStop(1, 'rgba(129, 140, 248, 0)');

          ctx.beginPath();
          ctx.arc(px, py, 6, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        });
      }

      // Draw nodes
      nodesRef.current.forEach((node) => {
        const floatY = prefersReducedMotion ? 0 : Math.sin(time * 0.001 + node.baseX * 0.01) * 3;

        // Glow
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y + floatY,
          0,
          node.x,
          node.y + floatY,
          node.radius * 2.5
        );
        glowGradient.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
        glowGradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        ctx.beginPath();
        ctx.arc(node.x, node.y + floatY, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y + floatY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(18, 18, 26, 0.9)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label
        ctx.font = '10px JetBrains Mono, monospace';
        ctx.fillStyle = ACCENT_LIGHT;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.label, node.x, node.y + floatY);
      });

      ctx.restore();
    },
    [getNodeById, isMobile, prefersReducedMotion]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initNodes(rect.width, rect.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (!isMobile) {
      canvas.addEventListener('mousemove', handleMouse, { passive: true });
    }

    const animate = (timestamp: number) => {
      timeRef.current = timestamp;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        draw(ctx, rect.width, rect.height);
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouse);
    };
  }, [draw, initNodes, isMobile]);

  if (isMobile && prefersReducedMotion) {
    return null;
  }

  return (
    <div className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
}
