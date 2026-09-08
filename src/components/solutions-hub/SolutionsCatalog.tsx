import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { digitalProducts } from '@/data/digital-products';

export default function SolutionsCatalog() {
  return (
    <section id="solutions-catalog" className="py-20 md:py-28 bg-bg-primary relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionHeading
            tag="КАТАЛОГ СИСТЕМ"
            title="Пять готовых контуров под конкретные бизнес-задачи."
            subtitle="Выберите ближайший сценарий, изучите состав и соберите первую очередь под существующие процессы компании."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {digitalProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 50} className={i === digitalProducts.length - 1 ? 'lg:col-span-2' : undefined}>
              <article id={`solution-${product.id}`} className="h-full p-6 md:p-8 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/50 transition-colors shadow-lg scroll-mt-28 flex flex-col min-w-0">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">{product.tag}</span>
                  <span className="text-xs font-mono text-text-muted">{product.number}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 break-words hyphens-auto">{product.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{product.summary}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                  <div className="p-4 rounded-xl bg-bg-primary border border-border min-w-0">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1.5">Задача / проблема</span>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{product.problemFit}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-bg-primary border border-border min-w-0">
                    <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1.5">Кому подходит</span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary">
                      {product.idealFor.slice(0, 3).map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-bg-primary border border-border mb-5 min-w-0">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider block mb-1">Сквозной flow</span>
                  <p className="text-xs sm:text-sm font-mono text-text-primary font-medium break-words">{product.flow}</p>
                </div>

                <div className="mb-5">
                  <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-2">Ключевые компоненты</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.components.map((component) => (
                      <span key={component} className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-xs font-mono text-text-secondary">{component}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-border/50">
                  <div className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-text-primary block mb-1">Результат</strong>
                    {product.outcome}
                  </div>
                  <div className="text-xs text-text-secondary leading-relaxed">
                    <strong className="text-accent block mb-1">Первая очередь</strong>
                    {product.minimalStart}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-text-muted">Конфигурация адаптируется под текущий процесс</span>
                  <Link href={`/solutions/${product.slug}/`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-white text-xs font-semibold transition-colors min-h-[44px]">
                    <span>Открыть систему</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
