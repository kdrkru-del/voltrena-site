'use client';

import React, { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Bot,
  Calculator,
  Check,
  Globe,
  Megaphone,
  Plus,
  Search,
  Sparkles,
  Workflow,
} from 'lucide-react';

type ModuleId = 'direct' | 'seo' | 'site' | 'quiz' | 'crm' | 'bot' | 'ai' | 'analytics';

const MODULES: Record<ModuleId, { label: string; icon: React.ElementType; stage: number; gives: string }> = {
  direct: { label: 'Яндекс Директ', icon: Megaphone, stage: 0, gives: 'Целевой поток заявок из поиска и сетей' },
  seo: { label: 'SEO и AI-поиск', icon: Search, stage: 0, gives: 'Бесплатный трафик из Яндекса и нейропоиска' },
  site: { label: 'Сайт / лендинг', icon: Globe, stage: 1, gives: 'Быстрый сайт, который продаёт с телефона' },
  quiz: { label: 'Калькулятор / квиз', icon: Calculator, stage: 1, gives: 'Заявки сразу с параметрами заказа' },
  crm: { label: 'CRM-интеграция', icon: Workflow, stage: 2, gives: 'Все обращения в одной воронке, без потерь' },
  bot: { label: 'Telegram-бот', icon: Bot, stage: 2, gives: 'Мгновенные уведомления и ответы клиентам' },
  ai: { label: 'AI-ассистент', icon: Sparkles, stage: 2, gives: 'Ответы 24/7 и первичная квалификация' },
  analytics: { label: 'Сквозная аналитика', icon: BarChart3, stage: 3, gives: 'Видно, какая реклама окупается' },
};

const STAGES = ['Трафик', 'Сайт', 'Обработка', 'Контроль'];

const SCENARIOS: { id: string; title: string; hint: string; modules: ModuleId[] }[] = [
  { id: 'new-site', title: 'Нужен новый сайт', hint: 'Старый устарел или его нет', modules: ['site', 'quiz', 'crm', 'direct'] },
  { id: 'few-leads', title: 'Мало заявок с рекламы', hint: 'Бюджет тратится, звонков мало', modules: ['direct', 'quiz', 'analytics'] },
  { id: 'lost-leads', title: 'Заявки теряются', hint: 'Менеджеры не успевают или забывают', modules: ['crm', 'bot', 'analytics'] },
  { id: 'automation', title: 'Хочу автоматизировать', hint: 'Рутина съедает время команды', modules: ['ai', 'bot', 'crm'] },
  { id: 'turnkey', title: 'Всё под ключ', hint: 'Система от рекламы до продажи', modules: ['direct', 'seo', 'site', 'quiz', 'crm', 'bot', 'analytics'] },
];

export default function SystemConfigurator() {
  const [scenario, setScenario] = useState(SCENARIOS[0].id);
  const [selected, setSelected] = useState<ModuleId[]>(SCENARIOS[0].modules);
  const [sent, setSent] = useState(false);

  const pick = (id: string) => {
    const s = SCENARIOS.find((x) => x.id === id)!;
    setScenario(id);
    setSelected(s.modules);
    setSent(false);
  };

  const toggle = (m: ModuleId) => {
    setSent(false);
    setSelected((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  };

  const byStage = useMemo(
    () => STAGES.map((_, si) => (Object.keys(MODULES) as ModuleId[]).filter((m) => MODULES[m].stage === si && selected.includes(m))),
    [selected]
  );

  const send = () => {
    const sc = SCENARIOS.find((x) => x.id === scenario)!;
    const detail = {
      id: `configurator-${scenario}`,
      title: `Система: ${selected.map((m) => MODULES[m].label).join(', ')}`,
      problem: sc.title,
    };
    try {
      localStorage.setItem('voltrena_selected_task', JSON.stringify(detail));
    } catch {
      /* storage may be unavailable */
    }
    window.dispatchEvent(new CustomEvent('voltrena:select-task', { detail }));
    setSent(true);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#1D2528] text-[#F4F1EA] overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-[-20%] right-[-10%] w-[55vw] max-w-[760px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.25),transparent_65%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_50%,#000_10%,transparent_75%)]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mb-10 md:mb-14">
          <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-[#D99A62] mb-4">
            Конструктор · 30 секунд
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08]">Соберите свою систему</h2>
          <p className="mt-4 text-[#A9B3B1] text-base sm:text-lg">
            Выберите ситуацию — предложим состав. Добавьте или уберите модули и отправьте схему: мы оценим её и вернёмся с планом и сметой.
          </p>
        </div>

        {/* Step 1: scenario */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-5 gap-3 overflow-x-auto snap-x pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SCENARIOS.map((s) => {
            const on = s.id === scenario;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => pick(s.id)}
                aria-pressed={on}
                className={`snap-start shrink-0 w-[62%] sm:w-auto text-left rounded-2xl p-4 transition-all duration-300 ${
                  on ? 'bg-[#F4F1EA] text-[#1D2528] shadow-[0_20px_50px_-20px_rgba(201,133,77,0.6)]' : 'bg-white/[0.04] ring-1 ring-white/10 hover:bg-white/[0.07]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${on ? 'text-[#C9854D]' : 'text-[#7F8987]'}`}>
                    Ситуация
                  </span>
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center ${on ? 'bg-[#C9854D]' : 'ring-1 ring-white/20'}`}>
                    {on && <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />}
                  </span>
                </div>
                <div className="mt-3 font-bold leading-snug">{s.title}</div>
                <div className={`mt-1 text-xs leading-snug ${on ? 'text-[#5D686A]' : 'text-[#A9B3B1]'}`}>{s.hint}</div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Step 2: modules */}
          <div className="lg:col-span-4 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-4 sm:p-5">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#7F8987] mb-3">Модули</div>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              {(Object.keys(MODULES) as ModuleId[]).map((m) => {
                const mod = MODULES[m];
                const Icon = mod.icon;
                const on = selected.includes(m);
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => toggle(m)}
                    aria-pressed={on}
                    className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-300 ${
                      on ? 'bg-[#3E7778]/25 ring-1 ring-[#3E7778]/60 text-[#F4F1EA]' : 'ring-1 ring-white/10 text-[#A9B3B1] hover:text-[#F4F1EA] hover:ring-white/25'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${on ? 'text-[#9FD0CB]' : ''}`} />
                    <span className="flex-1 leading-tight">{mod.label}</span>
                    <span
                      className={`w-5 h-5 shrink-0 rounded-md flex items-center justify-center transition-colors ${
                        on ? 'bg-[#3E7778] text-white' : 'ring-1 ring-white/20'
                      }`}
                    >
                      {on ? <Check className="w-3 h-3" strokeWidth={3} /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Schema */}
          <div className="lg:col-span-8 rounded-2xl bg-[#F4F1EA] text-[#1D2528] p-4 sm:p-6 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E7778]">Ваша система</span>
              <span className="text-[11px] font-mono text-[#7F8987]">
                модулей: <span className="font-bold text-[#1D2528]">{selected.length}</span>
              </span>
            </div>

            <LayoutGroup>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3">
                {STAGES.map((stage, si) => (
                  <React.Fragment key={stage}>
                    <motion.div layout className="relative rounded-xl bg-[#FFFDF8] ring-1 ring-[#D7D3C8] p-2.5 min-h-[96px] sm:min-h-[190px]">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#7F8987] mb-2">
                        {String(si + 1).padStart(2, '0')} · {stage}
                      </div>
                      <div className="flex flex-wrap sm:flex-col gap-1.5">
                        <AnimatePresence mode="popLayout">
                          {byStage[si].map((m) => {
                            const Icon = MODULES[m].icon;
                            return (
                              <motion.div
                                key={m}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 6 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-[#1D2528] text-[#F4F1EA] px-2 py-1.5 text-xs font-semibold"
                              >
                                <Icon className="w-3.5 h-3.5 text-[#D99A62]" />
                                {MODULES[m].label}
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>
                        {byStage[si].length === 0 && (
                          <span className="text-xs text-[#7F8987] italic">не выбрано</span>
                        )}
                      </div>
                    </motion.div>
                    {si < STAGES.length - 1 && (
                      <div className="sm:hidden flex justify-center -my-1 text-[#7F8987]">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </LayoutGroup>

            <div className="hidden sm:block relative h-1.5 mt-3 rounded-full bg-[#D7D3C8] overflow-hidden">
              <motion.span
                className="absolute inset-y-0 w-1/4 rounded-full bg-gradient-to-r from-transparent via-[#C9854D] to-transparent"
                animate={{ left: ['-25%', '100%'] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            <div className="mt-5 pt-5 border-t border-[#D7D3C8]">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#7F8987] mb-2">Что вы получите</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                <AnimatePresence initial={false}>
                  {selected.map((m) => (
                    <motion.li
                      key={m}
                      layout
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-2 text-sm text-[#1D2528]"
                    >
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#3E7778]" strokeWidth={3} />
                      {MODULES[m].gives}
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="button"
                onClick={send}
                disabled={selected.length === 0}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9854D] hover:bg-[#D99A62] disabled:opacity-40 disabled:cursor-not-allowed px-6 py-3.5 text-sm font-bold text-[#FFFDF8] shadow-md shadow-[#C9854D]/25 transition-colors"
              >
                Отправить схему на оценку
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#5D686A]">
                {sent ? 'Схема добавлена в форму ниже ✓' : 'Состав попадёт в форму заявки — останется оставить контакт.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
