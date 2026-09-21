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
      className="relative w-full overflow-hidden bg-[#EAE6DD] border-y border-[#D7D3C8] py-3.5 select-none"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...INTEGRATIONS, ...INTEGRATIONS].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-4 shrink-0"
          >
            <span className="text-xs font-mono font-semibold tracking-wider text-[#5D686A] uppercase hover:text-[#1D2528] transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3E7778]" />
              {item}
            </span>
            <span className="text-[10px] text-[#B3B3AF] select-none font-mono">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
