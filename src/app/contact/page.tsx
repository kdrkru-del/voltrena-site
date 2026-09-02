import type { Metadata } from 'next';
import Link from 'next/link';
import LeadForm from '@/components/ui/LeadForm';
import { siteConfig } from '@/config/site';
import { Send, MessageCircle, Mail, Phone, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

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
            
            {/* Left Column: Direct Contact Actions */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Telegram Card (Direct Action Button without raw @nickname) */}
              <div className="p-6 rounded-2xl bg-bg-surface border border-accent/30 shadow-xl flex flex-col justify-between group hover:border-accent/60 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 blur-xl pointer-events-none" />
                
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent shrink-0 group-hover:scale-105 transition-transform">
                    <Send className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-accent font-semibold uppercase tracking-wider">Быстрый ответ</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 text-accent">Direct</span>
                    </div>
                    <h2 className="text-lg font-bold text-text-primary">
                      Telegram
                    </h2>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Прямой контакт со специалистом без очередей
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all shadow-md shadow-accent/20 min-h-[46px] group/btn"
                >
                  <span>Написать в Telegram</span>
                  <Send className="w-4 h-4 fill-current group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* WhatsApp Card (Visible Phone + Action Button) */}
              <div className="p-6 rounded-2xl bg-bg-surface border border-border/80 shadow-lg flex flex-col justify-between group hover:border-emerald-500/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Мессенджер</span>
                    </div>
                    <h2 className="text-lg font-bold text-text-primary">
                      WhatsApp
                    </h2>
                    <p className="text-sm font-mono text-text-primary font-semibold mt-1">
                      {siteConfig.whatsappPhone}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Удобно для отправки фото и файлов
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-bg-primary border border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/10 text-emerald-400 font-semibold text-sm transition-all min-h-[44px] group/btn"
                >
                  <span>Написать в WhatsApp</span>
                  <MessageCircle className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Email Card (Visible Email + Action Button) */}
              <div className="p-6 rounded-2xl bg-bg-surface border border-border/80 shadow-lg flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-bg-primary border border-border flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-text-muted font-semibold uppercase tracking-wider">Официальный канал</span>
                    </div>
                    <h2 className="text-lg font-bold text-text-primary">
                      Email
                    </h2>
                    <p className="text-sm font-mono text-text-primary font-semibold mt-1">
                      {siteConfig.email}
                    </p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Для ТЗ, брифов и официальных запросов
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-bg-primary border border-border hover:border-accent/50 hover:bg-accent/10 text-text-primary hover:text-accent font-semibold text-sm transition-all min-h-[44px] group/btn"
                >
                  <span>Отправить письмо</span>
                  <Mail className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Response Time Guarantees */}
              <div className="p-4 sm:p-5 rounded-xl bg-bg-primary border border-border/80 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-text-muted uppercase">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>Регламент первого ответа:</span>
                </div>
                <div className="space-y-1.5 text-xs text-text-secondary">
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
