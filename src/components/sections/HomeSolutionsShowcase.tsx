import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { digitalProducts } from '@/data/digital-products';

export default function HomeSolutionsShowcase() {
  const featured = digitalProducts.slice(0, 4);

  return (
    <section id="products" className="py-20 md:py-28 bg-bg-secondary relative overflow-hidden border-t border-border/40 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            tag="ГОТОВЫЕ СИСТЕМЫ"
            title="Сначала выберите результат, а не набор услуг."
            subtitle="VOLTRENA собирает связанные цифровые системы под конкретную бизнес-задачу. Каждую можно изучить как отдельный продукт и запустить с первой очереди."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featured.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 60}>
              <article className="h-full p-6 sm:p-8 rounded-2xl bg-bg-surface border border-border/80 hover:border-accent/40 transition-colors flex flex-col justify-between shadow-lg group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">{product.tag}</span>
                    <span className="font-mono text-[11px] text-text-muted">{product.number}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">{product.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{product.summary}</p>
                  <div className="p-3.5 rounded-xl bg-bg-primary border border-border/80 mb-5">
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block mb-1.5">Подходит, если</span>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{product.problemFit}</p>
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-2 mb-5">
                    {product.components.slice(0, 4).map((component) => (
                      <span key={component} className="px-2.5 py-1 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-text-secondary">
                        {component}
                      </span>
                    ))}
                  </div>
                  <Link href={`/solutions/${product.slug}/`} className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light group-hover:translate-x-1 transition-transform min-h-[44px]">
                    <span>Открыть решение</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 text-center">
            <Link href="/solutions/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-xs sm:text-sm hover:bg-accent-light transition-colors min-h-[44px]">
              <span>Открыть каталог всех систем</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
