import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ServiceCTA from '@/components/service/ServiceCTA';
import { digitalProducts, getDigitalProduct } from '@/data/digital-products';
import { siteConfig } from '@/config/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return digitalProducts.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getDigitalProduct(params.slug);
  if (!product) return {};

  const title = `${product.title} — готовое digital-решение | VOLTRENA Digital`;
  const description = `${product.summary} ${product.problemFit}`;
  const url = `${siteConfig.siteUrl}/solutions/${product.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      locale: 'ru_RU',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default function DigitalProductPage({ params }: { params: { slug: string } }) {
  const product = getDigitalProduct(params.slug);
  if (!product) notFound();

  const url = `${siteConfig.siteUrl}/solutions/${product.slug}/`;
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: product.title,
    description: product.summary,
    url,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    areaServed: 'RU',
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Главная', item: `${siteConfig.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Решения', item: `${siteConfig.siteUrl}/solutions/` },
      { '@type': 'ListItem', position: 3, name: product.title, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/50">
        <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <nav aria-label="Хлебные крошки" className="mb-8 text-xs font-mono text-text-muted flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
            <span aria-hidden="true">/</span>
            <Link href="/solutions/" className="hover:text-accent transition-colors">Решения</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-secondary">{product.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 min-w-0">
              <span className="inline-block px-3 py-1 rounded-md bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent mb-5 font-semibold">
                {product.tag}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.05] break-words hyphens-auto mb-6">
                {product.title}
              </h1>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
                {product.summary}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-colors">
                  Получить конфигурацию
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/solutions/" className="inline-flex min-h-[48px] items-center justify-center px-6 py-3 rounded-xl border border-border-light text-text-primary hover:border-accent/60 hover:bg-bg-surface transition-colors">
                  Все решения
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-5 p-6 rounded-2xl bg-bg-surface border border-border/80 shadow-xl min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent block mb-3">Подходит, если</span>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">{product.problemFit}</p>
              <div className="pt-5 border-t border-border/60">
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block mb-2">Можно начать с</span>
                <p className="text-sm text-text-primary leading-relaxed">{product.minimalStart}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-secondary border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">SYSTEM FLOW</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-4">Как работает система.</h2>
              <p className="text-text-secondary text-sm leading-relaxed">Не набор отдельных работ, а связанный процесс с понятным входом, передачей данных и результатом.</p>
            </div>
            <div className="lg:col-span-8 p-6 md:p-8 rounded-2xl bg-bg-primary border border-border/80 min-w-0">
              <p className="font-mono text-sm sm:text-base md:text-lg text-text-primary leading-relaxed break-words">{product.flow}</p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-2">Результат</span>
                <p className="text-text-secondary leading-relaxed">{product.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-bg-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border/80">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">Состав системы</span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-6">Что входит.</h2>
              <ul className="space-y-3">
                {product.components.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-bg-surface border border-border/80">
              <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">Результат проекта</span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-6">Что передаём.</h2>
              <ul className="space-y-3">
                {product.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="p-6 rounded-2xl bg-bg-secondary border border-border/70">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-4">Для кого</span>
              <div className="flex flex-wrap gap-2">
                {product.idealFor.map((item) => <span key={item} className="px-3 py-2 rounded-lg bg-bg-surface border border-border text-xs text-text-secondary">{item}</span>)}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-bg-secondary border border-border/70">
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-4">Интеграции</span>
              <div className="flex flex-wrap gap-2">
                {product.integrations.map((item) => <span key={item} className="px-3 py-2 rounded-lg bg-bg-surface border border-border text-xs text-text-secondary">{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        mode="directContact"
        title={`Собрать ${product.title.toLowerCase()} под ваш процесс?`}
        description="Опишите текущий процесс, ограничения и желаемый результат. Мы определим состав первой очереди и точки интеграции."
        benefits={[
          'Не заставляем внедрять весь контур сразу',
          'Фиксируем входы, выходы и ответственность каждого узла',
          'Проектируем решение вокруг существующего процесса бизнеса',
        ]}
      />
    </>
  );
}
