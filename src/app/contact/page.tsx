import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/ui/LeadForm';
import { siteConfig } from '@/config/site';
import { Send, MessageCircle, Mail, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Контакты — VOLTRENA Digital',
  description:
    'Свяжитесь с нами для аудита и разработки цифровой системы роста. Прямой контакт в Telegram, WhatsApp, email или через форму.',
  alternates: { canonical: siteConfig.getCanonicalUrl('/contact/') },
  openGraph: {
    title: 'Контакты — VOLTRENA Digital',
    description:
      'Свяжитесь с нами для аудита и разработки цифровой системы роста. Прямой контакт в Telegram, WhatsApp, email или через форму.',
    url: siteConfig.getCanonicalUrl('/contact/'),
    type: 'website',
    locale: 'ru_RU',
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Контакты — VOLTRENA Digital',
    description:
      'Свяжитесь с нами для аудита и разработки цифровой системы роста.',
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Контакты VOLTRENA Digital',
    url: siteConfig.getCanonicalUrl('/contact/'),
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      sameAs: [siteConfig.telegramUrl],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.whatsappPhone,
          contactType: 'customer service',
          email: siteConfig.email,
          availableLanguage: ['Russian'],
        },
      ],
    },
  };

  const breadcrumbsSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: siteConfig.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Контакты' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }} />

      <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-bg-primary overflow-hidden border-b border-border/40">
        {/* Soft Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          
          {/* Breadcrumbs & Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 font-mono text-xs text-text-muted mb-4">
              <Link href="/" className="hover:text-text-primary transition-colors">
                Главная
              </Link>
              <span>/</span>
              <span className="text-accent">Контакты</span>
            </div>

            <div className="mb-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                КОНТАКТ / VOLTRENA DIGITAL
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-[1.15] mb-6">
              Расскажите, что сейчас мешает бизнесу расти.
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Опишите задачу, которая сейчас создаёт потери, тормозит продажи или требует слишком много ручной работы. Мы посмотрим на ситуацию целиком и предложим разумную точку старта.
            </p>
          </div>

          {/* Main 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Direct Contacts */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Telegram Card */}
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-2xl bg-bg-surface/90 border border-border hover:border-accent/60 transition-all flex items-start gap-4 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-accent font-semibold uppercase">Быстрый ответ</span>
                    <span className="text-[11px] font-mono text-text-muted">Direct</span>
                  </div>
                  <h2 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                    Telegram
                  </h2>
                  <p className="text-xs text-text-secondary mt-1">
                    Прямой контакт со специалистом без очередей
                  </p>
                  <p className="text-sm font-mono text-text-primary font-semibold mt-2.5">
                    {siteConfig.telegramHandle}
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 rounded-2xl bg-bg-surface/90 border border-border hover:border-emerald-500/60 transition-all flex items-start gap-4 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">Мессенджер</span>
                    <span className="text-[11px] font-mono text-text-muted">Direct</span>
                  </div>
                  <h2 className="text-lg font-bold text-text-primary group-hover:text-emerald-400 transition-colors">
                    WhatsApp
                  </h2>
                  <p className="text-xs text-text-secondary mt-1">
                    Удобно для отправки файлов и аудио-сообщений
                  </p>
                  <p className="text-sm font-mono text-text-primary font-semibold mt-2.5">
                    {siteConfig.whatsappPhone}
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-5 sm:p-6 rounded-2xl bg-bg-surface/90 border border-border hover:border-accent/40 transition-all flex items-start gap-4 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-bg-primary border border-border flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-text-muted font-semibold uppercase">Почта</span>
                    <span className="text-[11px] font-mono text-text-muted">Docs & RFPs</span>
                  </div>
                  <h2 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                    Email
                  </h2>
                  <p className="text-xs text-text-secondary mt-1">
                    Для ТЗ, брифов и официальных запросов
                  </p>
                  <p className="text-sm font-mono text-text-primary font-semibold mt-2.5">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              {/* Guarantees Box */}
              <div className="p-5 rounded-xl bg-bg-primary border border-border/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Регламент первого ответа:</span>
                </div>
                <div className="space-y-2 text-xs text-text-secondary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>Отвечаем в течение 1 рабочего дня</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>Без навязчивых звонков и спама</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span>Сразу привлекаем технического специалиста</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/90 shadow-2xl relative overflow-hidden">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                    Форма обратной связи
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    Заполните поля ниже — мы подготовим предварительное видение решения перед звонком.
                  </p>
                </div>

                <LeadForm source="contact_page" />
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
