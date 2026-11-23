'use client';

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight, ArrowUpRight, Lock } from 'lucide-react';
import { siteConfig } from '@/config/site';

type CaseItem = {
  id: string;
  title: string;
  niche: string;
  domain: string;
  url: string;
  href: string;
  fact: string;
  result: string;
};

const flagship = {
  id: 'okna-center',
  title: 'Окна Центр',
  niche: 'Остекление · Владивосток и Уссурийск',
  domain: 'окнацентр.рф',
  url: 'https://окнацентр.рф/',
  href: '/cases/#okna-center',
  task: 'Заменить устаревший сайт на конструкторе и сделать страницы, которые удобно запускать в рекламу.',
  result: 'Клиент оставляет заявку с нужными параметрами, а менеджер сразу понимает, какой расчёт нужен.',
  stats: [
    { value: '24', label: 'страницы вместо конструктора' },
    { value: 'Next.js', label: 'быстрая загрузка' },
    { value: 'Расчёт', label: 'форма с параметрами окон' },
  ],
};

const cases: CaseItem[] = [
  {
    id: 'tehuchet',
    title: 'ТехУчёт',
    niche: 'Спецтехника и права · Москва и СПб',
    domain: 'tehuchet24.ru',
    url: 'https://tehuchet24.ru/',
    href: '/cases/#tehuchet',
    fact: 'Конверсия 18,8% МСК · 31,8% СПб',
    result: 'Разделили региональные потоки и настроили каскад доставки заявок.',
  },
  {
    id: 'centr-kondicionerov',
    title: 'Центр Кондиционеров',
    niche: 'Сплит-системы · Приморье',
    domain: 'центр-кондиционеров.рф',
    url: 'https://центр-кондиционеров.рф/',
    href: '/cases/#centr-kondicionerov',
    fact: 'Подбор по площади за 2 клика',
    result: 'Каталог 13 моделей с расчётом монтажа и заявками в Telegram.',
  },
  {
    id: 'zelenyi-srez',
    title: 'Зелёный Срез',
    niche: 'Арбористика · Москва и МО',
    domain: 'zelsrez.ru',
    url: 'https://zelsrez.ru/',
    href: '/cases/#zelenyi-srez',
    fact: 'Оценка стоимости по фото',
    result: 'Заказчик отправляет фото, бригада получает его в Telegram и считает смету.',
  },
  {
    id: 'zemtrak',
    title: 'ZEMTRAK',
    niche: 'Аренда спецтехники',
    domain: 'zemtrak.ru',
    url: 'https://zemtrak.ru/',
    href: '/cases/#zemtrak',
    fact: 'Каталог техники + Директ',
    result: 'Заказчик видит параметры машин, а заявка приходит со сроками и местом работ.',
  },
];

const shot = (id: string, kind: 'desktop' | 'mobile') =>
  siteConfig.getAssetUrl(`/images/cases/${id}-${kind}.jpg`);

export function BrowserFrame({
  src,
  alt,
  domain,
  className = '',
  eager = false,
}: {
  src: string;
  alt: string;
  domain: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-[#2A3437] ring-1 ring-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] ${className}`}
    >
      <div className="flex items-center gap-3 px-3 py-2 bg-[#2A3437] border-b border-white/5">
        <div className="flex gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E07B67]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#D9A54A]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#6FA77B]/80" />
        </div>
        <div className="flex-1 min-w-0 flex justify-center">
          <span className="inline-flex items-center gap-1.5 max-w-full truncate rounded-md bg-black/25 px-3 py-0.5 text-[11px] font-mono text-[#A9B3B1]">
            <Lock className="w-3 h-3 shrink-0" />
            {domain}
          </span>
        </div>
        <span className="w-10 shrink-0" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1D2528]">
        <img
          src={src}
          alt={alt}
          width={1440}
          height={900}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );
}

function PhoneFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`rounded-[22px] bg-[#0F1416] p-1.5 ring-1 ring-white/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] ${className}`}
    >
      <div className="relative rounded-[17px] overflow-hidden aspect-[390/844] bg-[#1D2528]">
        <img src={src} alt={alt} width={390} height={844} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover object-top" />
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3.5 rounded-full bg-[#0F1416]" />
      </div>
    </div>
  );
}

export default function ProofSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#1D2528] text-[#F4F1EA] overflow-hidden">
      {/* ambient light */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-[-10%] w-[60vw] max-w-[800px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(62,119,120,0.28),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] max-w-[700px] aspect-square rounded-full bg-[radial-gradient(circle,rgba(201,133,77,0.16),transparent_65%)] blur-2xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-[#D99A62] mb-4">
                Портфолио · работающие сайты
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08]">
                Реальные проекты клиентов
              </h2>
              <p className="mt-4 text-[#A9B3B1] text-base sm:text-lg">
                Сайты и связки с рекламой и CRM, которые уже работают и приносят заявки.
              </p>
            </div>
            <Link
              href="/cases/"
              className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-semibold text-[#F4F1EA] hover:text-[#D99A62] transition-colors group/all"
            >
              Все кейсы и разборы
              <ArrowRight className="w-4 h-4 group-hover/all:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Flagship */}
        <ScrollReveal delay={50}>
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 md:mb-24">
            <div className="lg:col-span-7 relative pb-10 sm:pb-12 pr-10 sm:pr-16">
              <BrowserFrame src={shot(flagship.id, 'desktop')} alt={`Сайт ${flagship.title}`} domain={flagship.domain} />
              <PhoneFrame
                src={shot(flagship.id, 'mobile')}
                alt={`Мобильная версия ${flagship.title}`}
                className="absolute right-0 bottom-0 w-[28%] max-w-[170px] transition-transform duration-700 group-hover:-translate-y-2"
              />
            </div>

            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-[#D99A62] bg-[#C9854D]/10 ring-1 ring-[#C9854D]/30 px-2.5 py-1 rounded-md">
                Флагманский проект
              </span>
              <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">{flagship.title}</h3>
              <div className="mt-1 text-sm font-mono text-[#7F8987]">{flagship.niche}</div>
              <p className="mt-5 text-[#C9D0CE] leading-relaxed">{flagship.task}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {flagship.stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#F4F1EA]">{s.value}</div>
                    <div className="mt-0.5 text-[11px] leading-snug text-[#A9B3B1]">{s.label}</div>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm text-[#A9B3B1] leading-relaxed border-l-2 border-[#3E7778] pl-4">{flagship.result}</p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  href={flagship.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#C9854D] hover:bg-[#D99A62] px-5 py-3 text-sm font-bold text-[#FFFDF8] transition-colors"
                >
                  Читать разбор
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={flagship.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-mono text-[#A9B3B1] hover:text-[#F4F1EA] transition-colors"
                >
                  {flagship.domain}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Other cases: swipeable on mobile, 2×2 grid on desktop */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid sm:grid-cols-2 gap-5 lg:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cases.map((c, idx) => (
            <ScrollReveal key={c.id} delay={idx * 70} className="snap-start shrink-0 w-[85%] sm:w-auto">
              <article className="group relative h-full rounded-2xl bg-white/[0.03] ring-1 ring-white/10 hover:ring-[#D99A62]/50 p-3 sm:p-4 transition-all duration-500 hover:bg-white/[0.05]">
                <BrowserFrame src={shot(c.id, 'desktop')} alt={`Сайт ${c.title}`} domain={c.domain} />
                <div className="px-1 sm:px-2 pt-5 pb-2">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-bold tracking-tight">
                        <Link href={c.href} className="after:absolute after:inset-0 after:rounded-2xl focus:outline-none">
                          {c.title}
                        </Link>
                      </h4>
                      <div className="mt-0.5 text-xs font-mono text-[#7F8987]">{c.niche}</div>
                    </div>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Открыть ${c.domain}`}
                      className="relative z-10 shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 ring-white/15 text-[#A9B3B1] hover:text-[#1D2528] hover:bg-[#F4F1EA] transition-colors"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="mt-4 inline-flex items-center rounded-md bg-[#3E7778]/20 ring-1 ring-[#3E7778]/40 px-2.5 py-1 text-xs font-semibold text-[#9FD0CB]">
                    {c.fact}
                  </div>
                  <p className="mt-3 text-sm text-[#A9B3B1] leading-relaxed">{c.result}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
