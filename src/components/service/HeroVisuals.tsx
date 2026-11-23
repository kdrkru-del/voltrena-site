'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import {
  AdsVisual,
  AnalyticsVisual,
  BotVisual,
  CrmVisual,
  Panel,
  SiteVisual,
  useStepLoop,
} from '@/components/sections/story/StoryVisuals';

export interface PipelineNode {
  id: string;
  label: string;
  detail?: string;
}

/** Generic animated pipeline: nodes light up one after another, then loop. */
export function PipelineVisual({
  nodes,
  title = 'Схема работы',
  tag = 'схема',
}: {
  nodes: PipelineNode[];
  title?: string;
  tag?: string;
}) {
  const step = useStepLoop(true, nodes.length + 2, 1100);
  return (
    <Panel title={title} tag={tag}>
      <ol className="relative space-y-3">
        {nodes.map((n, i) => {
          const done = step > i;
          const cur = step === i;
          return (
            <li key={n.id} className="relative flex items-center gap-3.5">
              {i < nodes.length - 1 && (
                <span className="absolute left-[17px] top-9 h-[calc(100%-4px)] w-px bg-white/10 overflow-hidden">
                  <motion.span
                    className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#3E7778] to-[#C9854D]"
                    initial={false}
                    animate={{ height: done ? '100%' : '0%' }}
                    transition={{ duration: 0.6 }}
                  />
                </span>
              )}
              <span
                className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-500 ${
                  cur
                    ? 'bg-[#C9854D] text-white shadow-[0_0_24px_rgba(201,133,77,0.6)] scale-110'
                    : done
                    ? 'bg-[#3E7778] text-white'
                    : 'bg-white/[0.05] text-[#7F8987] ring-1 ring-white/10'
                }`}
              >
                {done ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
              </span>
              <div
                className={`min-w-0 flex-1 rounded-xl px-3.5 py-2.5 ring-1 transition-all duration-500 ${
                  cur ? 'bg-white/[0.08] ring-[#C9854D]/50' : done ? 'bg-white/[0.04] ring-white/10' : 'bg-white/[0.02] ring-white/5 opacity-60'
                }`}
              >
                <div className="truncate text-sm font-bold text-[#F4F1EA]">{n.label}</div>
                {n.detail && <div className="truncate text-[11px] font-mono text-[#7F8987]">{n.detail}</div>}
              </div>
            </li>
          );
        })}
      </ol>
    </Panel>
  );
}

/** Picks the most fitting live demo for the current /services/<slug>/ page. */
export default function ServiceHeroVisual({ nodes }: { nodes: PipelineNode[] }) {
  const pathname = usePathname() ?? '';
  const slug = pathname.match(/^\/services\/([^/]+)/)?.[1];
  switch (slug) {
    case 'yandex-direct':
      return <AdsVisual active />;
    case 'web-development':
      return <SiteVisual active />;
    case 'crm':
      return <CrmVisual active />;
    case 'telegram-bots':
    case 'ai-automation':
      return <BotVisual active />;
    case 'analytics':
      return <AnalyticsVisual active />;
    default:
      return <PipelineVisual nodes={nodes} />;
  }
}
