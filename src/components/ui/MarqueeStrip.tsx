'use client';

import React from 'react';

const INTEGRATIONS = [
  'Яндекс Директ',
  'amoCRM',
  'Битрикс24',
  'n8n Workflows',
  'Telegram Bot API',
  'Яндекс Метрика',
  '1С:Предприятие',
  'PostgreSQL',
  'OpenAI API',
  'HeadHunter API',
  'Сквозной ROMI',
  'Webhook Engine',
];

export default function MarqueeStrip() {
  return (
    <div
      aria-label="Поддерживаемые интеграции и технологии"
      className="relative w-full overflow-hidden bg-[#0A0D0E] border-y border-[#232B2D] py-3.5 select-none"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...INTEGRATIONS, ...INTEGRATIONS].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-4 shrink-0"
          >
            <span className="text-xs font-mono font-semibold tracking-wider text-[#AAB4B1] uppercase hover:text-[#F2EFE6] transition-colors flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#5A9692]" />
              {item}
            </span>
            <span className="text-[10px] text-[#344042] select-none font-mono">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
