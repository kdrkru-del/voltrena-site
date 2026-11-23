'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ListChecks, MapPin, Megaphone, Search } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * Hero visual: leads flow from traffic sources into the VOLTRENA hub
 * and land as cards in the manager's inbox (CRM + Telegram).
 */

const VB_W = 400;
const VB_H = 250;
const HUB = { x: 200, y: 200, r: 34 };

const SOURCES = [
  { id: 'direct', label: 'Директ', icon: Megaphone, x: 50 },
  { id: 'seo', label: 'Поиск', icon: Search, x: 150 },
  { id: 'maps', label: 'Карты', icon: MapPin, x: 250 },
  { id: 'quiz', label: 'Квиз', icon: ListChecks, x: 350 },
] as const;

const pathFor = (x: number) => `M ${x} 46 C ${x} 118, ${HUB.x} 112, ${HUB.x} ${HUB.y - HUB.r}`;

interface Lead {
  source: number;
  sourceLabel: string;
  title: string;
  meta: string;
}

const LEADS: Lead[] = [
  { source: 0, sourceLabel: 'Яндекс Директ · Поиск', title: 'Остекление лоджии 6 м', meta: 'Владивосток · замер на четверг' },
  { source: 3, sourceLabel: 'Квиз на сайте', title: 'Аренда экскаватора-погрузчика', meta: '3 смены · объект в Артёме' },
  { source: 1, sourceLabel: 'Органический поиск', title: 'Спил аварийного дерева', meta: 'Фото приложено · срочно' },
  { source: 2, sourceLabel: 'Яндекс Карты', title: 'Монтаж сплит-системы 2,5 кВт', meta: 'Квартира 40 м² · с установкой' },
  { source: 0, sourceLabel: 'Яндекс Директ · РСЯ', title: 'Расчёт окон для коттеджа', meta: '14 окон · Rehau · доставка' },
  { source: 3, sourceLabel: 'Квиз на сайте', title: 'Сайт-каталог для B2B', meta: 'Производство · интеграция с CRM' },
];

const POOL = 40;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

type Particle = {
  path: number;
  start: number;
  dur: number;
  kind: 'lead' | 'ambient';
  onArrive?: () => void;
};

type StackItem = { key: number; lead: Lead };

export default function LeadFlowEngine({ className = '' }: { className?: string }) {
  const reduced = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const circleRefs = useRef<(SVGCircleElement | null)[]>([]);
  const particles = useRef<Particle[]>([]);
  const visible = useRef(true);

  const [stack, setStack] = useState<StackItem[]>([
    { key: -2, lead: LEADS[5] },
    { key: -1, lead: LEADS[3] },
  ]);
  const [count, setCount] = useState(27);
  const [activeSource, setActiveSource] = useState<number | null>(null);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(([e]) => {
      visible.current = e.isIntersecting;
    });
    io.observe(root);

    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));
    const canRun = () => visible.current && document.visibilityState === 'visible';

    let leadIndex = 0;
    let keySeq = 0;

    const launchLead = () => {
      if (!canRun()) return;
      const lead = LEADS[leadIndex % LEADS.length];
      leadIndex += 1;
      setActiveSource(lead.source);
      particles.current.push({
        path: lead.source,
        start: performance.now(),
        dur: 1500,
        kind: 'lead',
        onArrive: () => {
          setPulse((p) => p + 1);
          later(() => {
            keySeq += 1;
            setStack((prev) => [{ key: keySeq, lead }, ...prev].slice(0, 3));
            setCount((c) => c + 1);
            setActiveSource(null);
          }, 280);
        },
      });
    };

    const launchAmbient = () => {
      if (!canRun() || particles.current.length > 12) return;
      particles.current.push({
        path: Math.floor(Math.random() * SOURCES.length),
        start: performance.now(),
        dur: 1900 + Math.random() * 900,
        kind: 'ambient',
      });
    };

    later(launchLead, 700);
    const leadTimer = setInterval(launchLead, 3200);
    const ambientTimer = setInterval(launchAmbient, 380);

    let raf = 0;
    const frame = (now: number) => {
      let c = 0;
      const set = (x: number, y: number, r: number, fill: string, opacity: number) => {
        const el = circleRefs.current[c++];
        if (!el) return;
        el.setAttribute('cx', x.toFixed(2));
        el.setAttribute('cy', y.toFixed(2));
        el.setAttribute('r', r.toString());
        el.setAttribute('fill', fill);
        el.setAttribute('opacity', opacity.toFixed(3));
      };

      const alive: Particle[] = [];
      for (const p of particles.current) {
        const path = pathRefs.current[p.path];
        const t = (now - p.start) / p.dur;
        if (!path) continue;
        if (t >= 1) {
          p.onArrive?.();
          continue;
        }
        alive.push(p);
        const len = path.getTotalLength();
        const e = easeInOut(Math.max(0, t));
        if (p.kind === 'lead') {
          const trail = [
            [0, 4.2, 1],
            [0.035, 3.2, 0.5],
            [0.07, 2.4, 0.28],
            [0.105, 1.6, 0.14],
          ];
          for (const [lag, r, o] of trail) {
            const pt = path.getPointAtLength(len * Math.max(0, e - lag));
            set(pt.x, pt.y, r, '#C9854D', o);
          }
        } else {
          const pt = path.getPointAtLength(len * e);
          set(pt.x, pt.y, 1.8, '#3E7778', 0.6 * Math.sin(Math.PI * t));
        }
      }
      particles.current = alive;
      for (; c < POOL; c++) circleRefs.current[c]?.setAttribute('r', '0');
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      clearInterval(leadTimer);
      clearInterval(ambientTimer);
      timers.forEach(clearTimeout);
      io.disconnect();
      particles.current = [];
    };
  }, [reduced]);

  return (
    <div ref={rootRef} className={`relative w-full max-w-[440px] xl:max-w-[480px] mx-auto select-none ${className}`} aria-hidden="true">
      {/* Sources → hub */}
      <div className="relative w-full" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 w-full h-full overflow-visible">
          <defs>
            <linearGradient id="lfe-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3E7778" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#3E7778" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          {SOURCES.map((s, i) => (
            <g key={s.id}>
              <path
                ref={(el) => {
                  pathRefs.current[i] = el;
                }}
                d={pathFor(s.x)}
                fill="none"
                stroke="url(#lfe-line)"
                strokeWidth={1.25}
              />
              <path
                d={pathFor(s.x)}
                fill="none"
                stroke="#C9854D"
                strokeWidth={1.75}
                strokeLinecap="round"
                style={{ opacity: activeSource === i ? 0.55 : 0, transition: 'opacity 500ms ease' }}
              />
            </g>
          ))}
          {Array.from({ length: POOL }).map((_, i) => (
            <circle
              key={i}
              ref={(el) => {
                circleRefs.current[i] = el;
              }}
              r={0}
            />
          ))}
        </svg>

        {/* Source chips */}
        {SOURCES.map((s, i) => {
          const Icon = s.icon;
          const active = activeSource === i;
          return (
            <div
              key={s.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(s.x / VB_W) * 100}%`, top: `${(24 / VB_H) * 100}%` }}
            >
              <div
                className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 sm:px-3 text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-500 ${
                  active
                    ? 'bg-[#1D2528] border-[#1D2528] text-[#FFFDF8] shadow-lg shadow-[#C9854D]/25 scale-105'
                    : 'bg-[#FFFDF8]/90 border-[#D7D3C8] text-[#5D686A] shadow-sm'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${active ? 'text-[#D99A62]' : 'text-[#3E7778]'}`} />
                {s.label}
              </div>
            </div>
          );
        })}

        {/* Hub */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${(HUB.x / VB_W) * 100}%`,
            top: `${(HUB.y / VB_H) * 100}%`,
            width: `${((HUB.r * 2) / VB_W) * 100}%`,
          }}
        >
          <div className="relative aspect-square">
            <AnimatePresence>
              <motion.span
                key={pulse}
                className="absolute inset-0 rounded-full border-2 border-[#C9854D]"
                initial={{ scale: 1, opacity: pulse ? 0.7 : 0 }}
                animate={{ scale: 2.1, opacity: 0 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
              />
            </AnimatePresence>
            <div
              className="absolute -inset-[14%] rounded-full motion-safe:animate-[spin_9s_linear_infinite]"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, rgba(62,119,120,0.65) 70deg, transparent 140deg, transparent 190deg, rgba(201,133,77,0.6) 260deg, transparent 330deg)',
                WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
                mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2px))',
              }}
            />
            <motion.div
              key={`core-${pulse}`}
              initial={{ scale: pulse ? 1.12 : 1 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 14 }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2D3A3D] to-[#1D2528] shadow-[0_10px_30px_-8px_rgba(29,37,40,0.55)] flex items-center justify-center"
            >
              <span className="text-[#FFFDF8] font-extrabold text-lg sm:text-xl tracking-tight">V</span>
              <span className="absolute inset-[18%] rounded-full bg-[#3E7778]/25 blur-md" />
            </motion.div>
          </div>
        </div>

        <div
          className="absolute -translate-y-1/2 text-[10px] font-mono uppercase tracking-wider text-[#7F8987] leading-tight hidden sm:block"
          style={{ left: `${((HUB.x + HUB.r + 18) / VB_W) * 100}%`, top: `${(HUB.y / VB_H) * 100}%` }}
        >
          UTM · проверка
          <br />
          маршрут заявки
        </div>
      </div>

      {/* Connector hub → inbox */}
      <div className="relative mx-auto h-7 w-px bg-gradient-to-b from-[#3E7778]/40 to-[#3E7778]/10 overflow-hidden">
        <span className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C9854D] motion-safe:animate-[lfe-drop_1.6s_ease-in_infinite]" />
      </div>

      {/* Inbox */}
      <div className="rounded-2xl border border-[#D7D3C8] bg-[#FFFDF8]/80 backdrop-blur-sm p-3 sm:p-4 shadow-[0_24px_60px_-28px_rgba(29,37,40,0.35)]">
        <div className="flex items-center justify-between px-1 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-[#3E7778] motion-safe:animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-[#3E7778]" />
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3E7778]">Заявки менеджеру</span>
          </div>
          <div className="text-[11px] font-mono text-[#7F8987] tabular-nums">
            сегодня{' '}
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={count}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 8, opacity: 0 }}
                className="inline-block font-bold text-[#1D2528]"
              >
                {count}
              </motion.span>
            </AnimatePresence>
            {' · '}потеряно <span className="font-bold text-[#3E7778]">0</span>
          </div>
        </div>

        <div className="relative h-[156px]">
          <AnimatePresence initial={false}>
            {stack.map((item, idx) => (
              <motion.div
                key={item.key}
                className="absolute inset-x-0 top-0"
                style={{ zIndex: 10 - idx }}
                initial={{ y: -34, opacity: 0, scale: 1.04 }}
                animate={{ y: idx * 11, opacity: idx === 2 ? 0.45 : 1, scale: 1 - idx * 0.045 }}
                exit={{ y: 40, opacity: 0, scale: 0.86 }}
                transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              >
                <LeadCard lead={item.lead} fresh={idx === 0} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function LeadCard({ lead, fresh }: { lead: Lead; fresh: boolean }) {
  return (
    <div
      className={`rounded-xl border bg-[#FFFDF8] p-3.5 sm:p-4 h-[134px] flex flex-col justify-between transition-colors duration-700 ${
        fresh ? 'border-[#C9854D]/50 shadow-[0_12px_30px_-14px_rgba(201,133,77,0.55)]' : 'border-[#D7D3C8] shadow-sm'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7F8987] truncate">{lead.sourceLabel}</span>
          <span className={`text-[10px] font-mono shrink-0 ${fresh ? 'text-[#C9854D] font-bold' : 'text-[#7F8987]'}`}>
            {fresh ? 'только что' : 'ранее'}
          </span>
        </div>
        <div className="mt-1 font-bold text-[#1D2528] text-sm sm:text-[15px] leading-snug truncate">{lead.title}</div>
        <div className="text-xs text-[#5D686A] truncate">{lead.meta}</div>
      </div>
      <div className="flex items-center gap-1.5 flex-wrap">
        {['CRM', 'Telegram', 'Менеджер уведомлён'].map((label, i) => (
          <motion.span
            key={label}
            initial={fresh ? { opacity: 0, y: 4 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.28, duration: 0.35 }}
            className="inline-flex items-center gap-1 rounded-md bg-[#3E7778]/10 px-1.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-[#2D5D60]"
          >
            <Check className="w-3 h-3" strokeWidth={3} />
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
