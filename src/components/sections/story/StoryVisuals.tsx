'use client';

import React, { useEffect, useId, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { Check, Image as ImageIcon, Lock, Send, TrendingDown } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/** Ticks 0..max-1 in a loop while `active`; restarts from 0 on activation. */
export function useStepLoop(active: boolean, max: number, ms: number) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduced) {
      setStep(max - 1);
      return;
    }
    if (!active) return;
    setStep(0);
    const id = setInterval(() => setStep((s) => (s + 1) % max), ms);
    return () => clearInterval(id);
  }, [active, max, ms, reduced]);
  return step;
}

function Panel({ title, tag = 'демонстрация', children }: { title: string; tag?: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-[#1D2528] ring-1 ring-white/10 shadow-[0_40px_90px_-40px_rgba(29,37,40,0.8)] overflow-hidden">
      <div className="flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b border-white/5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex gap-1.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
            <span className="w-2 h-2 rounded-full bg-white/15" />
          </span>
          <span className="ml-1 text-[11px] font-mono text-[#A9B3B1] truncate">{title}</span>
        </div>
        <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-[#7F8987] ring-1 ring-white/10 rounded px-1.5 py-0.5">
          {tag}
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

/* ───────────── 1. Реклама ───────────── */

const AD_ROWS = [
  { name: 'окна пвх владивосток', type: 'Поиск', leads: 14, offAt: 99 },
  { name: 'остекление балкона под ключ', type: 'Поиск', leads: 9, offAt: 99 },
  { name: 'РСЯ · game-apps.mobi', type: 'Сети', leads: 0, offAt: 2 },
  { name: 'РСЯ · free-wallpapers.app', type: 'Сети', leads: 0, offAt: 3 },
];

const CPL_POINTS = [1480, 1420, 1510, 1390, 1300, 1240, 1120, 1060, 980, 940, 860, 820];

export function AdsVisual({ active }: { active: boolean }) {
  const step = useStepLoop(active, 7, 1100);
  const progress = Math.min(step, 5) / 5;
  const cpl = Math.round(1480 - (1480 - 820) * progress);
  const leads = Math.round(41 + (68 - 41) * progress);

  const w = 300;
  const h = 90;
  const max = 1550;
  const min = 750;
  const pts = CPL_POINTS.map((v, i) => `${(i / (CPL_POINTS.length - 1)) * w},${h - ((v - min) / (max - min)) * h}`).join(' ');

  return (
    <Panel title="Директ · Поиск + РСЯ · кампания «Окна»">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          { label: 'Заявки', value: leads, suffix: '' },
          { label: 'Цена заявки', value: cpl, suffix: ' ₽', accent: true },
          { label: 'Площадок отключено', value: AD_ROWS.filter((r) => step >= r.offAt).length, suffix: '' },
        ].map((k) => (
          <div key={k.label} className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-2.5 sm:p-3">
            <div className="text-[10px] sm:text-[11px] text-[#7F8987] leading-tight">{k.label}</div>
            <div className={`mt-1 text-lg sm:text-xl font-extrabold tabular-nums ${k.accent ? 'text-[#D99A62]' : 'text-[#F4F1EA]'}`}>
              {k.value.toLocaleString('ru-RU')}
              {k.suffix}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-white/[0.03] ring-1 ring-white/10 p-3">
        <div className="flex items-center justify-between text-[11px] text-[#A9B3B1] mb-2">
          <span>Цена заявки, 12 недель</span>
          <span className="inline-flex items-center gap-1 text-[#9FD0CB]">
            <TrendingDown className="w-3.5 h-3.5" /> снижается
          </span>
        </div>
        <svg viewBox={`0 0 ${w} ${h + 6}`} className="w-full h-24 overflow-visible">
          <defs>
            <linearGradient id="cpl-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9854D" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#C9854D" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.polygon
            key={`f-${active}`}
            points={`0,${h + 6} ${pts} ${w},${h + 6}`}
            fill="url(#cpl-fill)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <motion.polyline
            key={`l-${active}`}
            points={pts}
            fill="none"
            stroke="#D99A62"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: active ? 1 : 0.999 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>
      </div>

      <div className="mt-4 space-y-1.5">
        {AD_ROWS.map((r) => {
          const off = step >= r.offAt;
          return (
            <div
              key={r.name}
              className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs transition-all duration-500 ${
                off ? 'bg-[#E07B67]/10 ring-1 ring-[#E07B67]/30' : 'bg-white/[0.03] ring-1 ring-white/5'
              }`}
            >
              <span className={`truncate ${off ? 'line-through text-[#7F8987]' : 'text-[#E6EAE9]'}`}>{r.name}</span>
              <span className="shrink-0 flex items-center gap-2 font-mono text-[10px]">
                <span className="text-[#7F8987]">{r.type}</span>
                <span className={off ? 'text-[#E07B67]' : r.leads ? 'text-[#9FD0CB]' : 'text-[#7F8987]'}>
                  {off ? 'отключено' : `${r.leads} заяв.`}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

/* ───────────── 2. Сайт ───────────── */

const SITES = [
  { id: 'okna-center', domain: 'окнацентр.рф' },
  { id: 'centr-kondicionerov', domain: 'центр-кондиционеров.рф' },
  { id: 'zelenyi-srez', domain: 'zelsrez.ru' },
  { id: 'zemtrak', domain: 'zemtrak.ru' },
];

export function SiteVisual({ active }: { active: boolean }) {
  const step = useStepLoop(active, SITES.length * 2, 1500);
  const idx = Math.floor(step / 2) % SITES.length;
  const sent = step % 2 === 1;
  const site = SITES[idx];

  return (
    <div className="relative">
      <div className="rounded-2xl overflow-hidden bg-[#2A3437] ring-1 ring-black/10 shadow-[0_40px_90px_-40px_rgba(29,37,40,0.8)]">
        <div className="flex items-center gap-3 px-3 py-2 border-b border-white/5">
          <span className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E07B67]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D9A54A]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#6FA77B]/80" />
          </span>
          <div className="flex-1 flex justify-center min-w-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={site.domain}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="inline-flex items-center gap-1.5 truncate rounded-md bg-black/25 px-3 py-0.5 text-[11px] font-mono text-[#A9B3B1]"
              >
                <Lock className="w-3 h-3" />
                {site.domain}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="w-10" />
        </div>
        <div className="relative aspect-[16/10] bg-[#1D2528]">
          <AnimatePresence initial={false}>
            <motion.img
              key={site.id}
              src={siteConfig.getAssetUrl(`/images/cases/${site.id}-desktop.jpg`)}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {sent && (
          <motion.div
            key={`sent-${step}`}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="absolute -bottom-5 right-3 sm:-right-5 rounded-xl bg-[#FFFDF8] ring-1 ring-[#D7D3C8] shadow-xl px-3.5 py-2.5 flex items-center gap-2.5"
          >
            <span className="w-7 h-7 rounded-full bg-[#3E7778] text-white flex items-center justify-center">
              <Check className="w-4 h-4" strokeWidth={3} />
            </span>
            <div className="leading-tight">
              <div className="text-xs font-bold text-[#1D2528]">Заявка отправлена</div>
              <div className="text-[11px] text-[#5D686A]">с параметрами → CRM</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex flex-wrap gap-2">
        {['Next.js', 'Адаптив под телефон', 'Калькуляторы и квизы', 'Формы → CRM', 'Цели Метрики'].map((b) => (
          <span key={b} className="rounded-full bg-[#FFFDF8] ring-1 ring-[#D7D3C8] px-3 py-1 text-xs font-semibold text-[#5D686A]">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ───────────── 3. CRM ───────────── */

const CRM_COLS = ['Новые', 'В работе', 'Замер / КП', 'Сделка'];
const CRM_CARDS = [
  { id: 'a', who: 'Иван', what: 'Окна, 14 шт', src: 'Директ', delay: 0 },
  { id: 'b', who: 'ООО «Стройресурс»', what: 'Экскаватор, 3 смены', src: 'Квиз', delay: 1 },
  { id: 'c', who: 'Мария', what: 'Сплит 2,5 кВт', src: 'Карты', delay: 2 },
  { id: 'd', who: 'Алексей', what: 'Спил берёзы', src: 'Поиск', delay: 3 },
];

export function CrmVisual({ active }: { active: boolean }) {
  const step = useStepLoop(active, 9, 1000);
  const uid = useId();
  const colOf = (delay: number) => {
    const t = step - delay;
    if (t < 0) return -1;
    return Math.min(3, Math.floor(t / 1.5));
  };

  return (
    <Panel title="CRM · воронка «Заявки с сайта»">
      <LayoutGroup id={uid}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CRM_COLS.map((col, ci) => (
            <div key={col} className="rounded-xl bg-white/[0.03] ring-1 ring-white/5 p-2 min-h-[118px] sm:min-h-[230px]">
              <div className="flex items-center justify-between px-1 pb-2">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#A9B3B1]">{col}</span>
                <span className="text-[10px] font-mono text-[#7F8987]">
                  {CRM_CARDS.filter((c) => colOf(c.delay) === ci).length}
                </span>
              </div>
              <div className="space-y-1.5">
                {CRM_CARDS.filter((c) => colOf(c.delay) === ci).map((c) => (
                  <motion.div
                    key={c.id}
                    layoutId={`crm-${uid}-${c.id}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className={`rounded-lg p-2 ring-1 ${
                      ci === 3 ? 'bg-[#3E7778]/25 ring-[#3E7778]/50' : 'bg-[#FFFDF8] ring-transparent'
                    }`}
                  >
                    <div className={`text-[11px] font-bold leading-tight truncate ${ci === 3 ? 'text-[#E6EAE9]' : 'text-[#1D2528]'}`}>
                      {c.who}
                    </div>
                    <div className={`text-[10px] leading-tight truncate ${ci === 3 ? 'text-[#A9B3B1]' : 'text-[#5D686A]'}`}>{c.what}</div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-[9px] font-mono rounded bg-[#C9854D]/15 text-[#A9683A] px-1">{c.src}</span>
                      {ci === 3 && <Check className="w-3 h-3 text-[#9FD0CB]" strokeWidth={3} />}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </LayoutGroup>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#A9B3B1]">
        <span className="inline-flex items-center gap-1"><Check className="w-3 h-3 text-[#9FD0CB]" /> источник и UTM-метки</span>
        <span className="inline-flex items-center gap-1"><Check className="w-3 h-3 text-[#9FD0CB]" /> параметры заказа</span>
        <span className="inline-flex items-center gap-1"><Check className="w-3 h-3 text-[#9FD0CB]" /> дубли склеиваются</span>
      </div>
    </Panel>
  );
}

/* ───────────── 4. Бот ───────────── */

type Msg = { from: 'user' | 'bot'; text: string; photo?: boolean };
const DIALOG: Msg[] = [
  { from: 'user', text: 'Здравствуйте! Сколько стоит спилить берёзу у дома?' },
  { from: 'bot', text: 'Здравствуйте! Пришлите фото дерева и примерную высоту — посчитаю предварительно.' },
  { from: 'user', text: 'Высота около 15 м', photo: true },
  { from: 'bot', text: 'Дерево рядом с домом — спиливаем по частям, от 3 500 ₽. Точную цену назовёт бригадир. Удобно, если он позвонит сегодня?' },
  { from: 'user', text: 'Да, после 18:00' },
  { from: 'bot', text: 'Готово ✓ Заявка в CRM, бригадир позвонит после 18:00.' },
];

export function BotVisual({ active }: { active: boolean }) {
  const step = useStepLoop(active, DIALOG.length * 2 + 2, 1100);
  const shown = Math.min(DIALOG.length, Math.ceil(step / 2));
  const typing = step % 2 === 1 && shown < DIALOG.length && DIALOG[shown]?.from === 'bot';

  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[34px] bg-[#0F1416] p-2.5 ring-1 ring-black/20 shadow-[0_40px_90px_-30px_rgba(29,37,40,0.8)]">
      <div className="rounded-[26px] overflow-hidden bg-[#17212B]">
        <div className="flex items-center gap-2.5 px-4 pt-5 pb-3 bg-[#1F2C38]">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#3E7778] to-[#2D5D60] flex items-center justify-center text-white font-extrabold text-sm">
            V
          </span>
          <div className="leading-tight">
            <div className="text-sm font-bold text-white">Бот-консультант</div>
            <div className="text-[11px] text-[#6AB3F3]">{typing ? 'печатает…' : 'онлайн'}</div>
          </div>
        </div>
        <div className="h-[380px] px-3 py-3 flex flex-col justify-end gap-2 overflow-hidden">
          <AnimatePresence initial={false}>
            {DIALOG.slice(0, shown).map((m, i) => (
              <motion.div
                key={`${i}-${m.text}`}
                layout
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug ${
                  m.from === 'user' ? 'self-end bg-[#2B5278] text-white rounded-br-md' : 'self-start bg-[#182533] text-[#E6EAE9] ring-1 ring-white/5 rounded-bl-md'
                }`}
              >
                {m.photo && (
                  <div className="mb-1.5 flex items-center gap-2 rounded-lg bg-black/20 px-2 py-3 text-[11px] text-[#A9C4DE]">
                    <ImageIcon className="w-4 h-4" /> фото_дерева.jpg
                  </div>
                )}
                {m.text}
              </motion.div>
            ))}
            {typing && (
              <motion.div
                key="typing"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="self-start rounded-2xl rounded-bl-md bg-[#182533] ring-1 ring-white/5 px-3 py-2.5 flex gap-1"
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="w-1.5 h-1.5 rounded-full bg-[#7F8987]"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.12 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-2 px-3 py-2.5 bg-[#1F2C38]">
          <span className="flex-1 rounded-full bg-[#17212B] px-3 py-1.5 text-[11px] text-[#7F8987]">Сообщение</span>
          <Send className="w-4 h-4 text-[#6AB3F3]" />
        </div>
      </div>
    </div>
  );
}

/* ───────────── 5. Аналитика ───────────── */

const FUNNEL = [
  { label: 'Расход на рекламу', value: '120 000 ₽', w: 48 },
  { label: 'Переходы на сайт', value: '3 400', w: 40 },
  { label: 'Заявки', value: '146', w: 30 },
  { label: 'Продажи', value: '31', w: 22 },
  { label: 'Выручка', value: '1 240 000 ₽', w: 100, accent: true },
];

const CHANNELS = [
  { name: 'Директ · Поиск', cpl: '690 ₽', romi: '+940%', good: true },
  { name: 'Директ · РСЯ', cpl: '1 180 ₽', romi: '+210%', good: true },
  { name: 'Яндекс Карты', cpl: '520 ₽', romi: '+1 120%', good: true },
  { name: 'Баннеры на площадках', cpl: '4 300 ₽', romi: '−35%', good: false },
];

export function AnalyticsVisual({ active }: { active: boolean }) {
  const step = useStepLoop(active, 9, 700);
  return (
    <Panel title="Сквозная аналитика · месяц" tag="пример отчёта">
      <div className="space-y-2">
        {FUNNEL.map((f, i) => (
          <div key={f.label} className="flex items-center gap-3">
            <div className="w-[38%] text-[11px] sm:text-xs text-[#A9B3B1] truncate">{f.label}</div>
            <div className="flex-1 h-7 rounded-md bg-white/[0.04] overflow-hidden">
              <motion.div
                className={`h-full rounded-md flex items-center justify-end pr-2 text-[11px] font-bold tabular-nums whitespace-nowrap ${
                  f.accent ? 'bg-gradient-to-r from-[#A9683A] to-[#D99A62] text-white' : 'bg-gradient-to-r from-[#2D5D60] to-[#3E7778] text-[#E6EAE9]'
                }`}
                initial={false}
                animate={{ width: step > i ? `${f.w}%` : '0%' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                {step > i ? f.value : ''}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl ring-1 ring-white/10 overflow-hidden">
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-3 py-2 bg-white/[0.04] text-[10px] font-mono uppercase tracking-wider text-[#7F8987]">
          <span>Канал</span>
          <span className="text-right">Заявка</span>
          <span className="text-right w-14">ROMI</span>
        </div>
        {CHANNELS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={false}
            animate={{ opacity: step > 5 + i * 0.5 ? 1 : 0.25 }}
            className="grid grid-cols-[1fr_auto_auto] gap-x-4 px-3 py-2 border-t border-white/5 text-xs"
          >
            <span className="text-[#E6EAE9] truncate">{c.name}</span>
            <span className="text-right font-mono text-[#A9B3B1]">{c.cpl}</span>
            <span className={`text-right w-14 font-mono font-bold ${c.good ? 'text-[#9FD0CB]' : 'text-[#E07B67]'}`}>{c.romi}</span>
          </motion.div>
        ))}
      </div>
    </Panel>
  );
}
