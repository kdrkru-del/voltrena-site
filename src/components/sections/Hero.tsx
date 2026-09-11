import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import NodeNetwork from '@/components/ui/NodeNetwork'
import { digitalProducts } from '@/data/digital-products'

const systemFlow = ['Задача', 'Система', 'Интеграции', 'Данные', 'Результат']

export default function Hero() {
  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-18 md:pt-36 md:pb-24 bg-bg-primary overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <NodeNetwork className="absolute inset-0 opacity-45 sm:opacity-60 md:opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/30 via-bg-primary/70 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_32%,rgba(99,102,241,0.13),transparent_48%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          <div className="xl:col-span-6 min-w-0">
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 font-mono text-[11px] sm:text-xs uppercase tracking-[0.16em] text-accent font-semibold backdrop-blur-sm">
                VOLTRENA / DIGITAL SYSTEMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] font-black text-text-primary tracking-tight leading-[1.03] mb-6 break-words hyphens-auto">
              Цифровые системы
              <span className="block text-accent">для бизнеса.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-7">
              Привлечение клиентов, B2B-продажи, обработка заявок, AI-автоматизация и мониторинг данных — как готовые связанные системы, а не набор разрозненных услуг.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button variant="primary" size="lg" href="/solutions/" className="w-full sm:w-auto">
                Выбрать систему
              </Button>
              <Button variant="secondary" size="lg" href="/cases/" className="w-full sm:w-auto">
                Посмотреть кейсы
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
              {digitalProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/solutions/${product.slug}/`}
                  className="group min-w-0 flex items-center justify-between gap-3 rounded-xl border border-border/80 bg-bg-surface/65 px-4 py-3 hover:border-accent/40 hover:bg-bg-surface transition-colors min-h-[52px]"
                >
                  <span className="min-w-0 text-sm font-semibold text-text-primary leading-tight break-words">
                    {product.title}
                  </span>
                  <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent shrink-0 transition-colors" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          <div className="xl:col-span-6 min-w-0">
            <div className="rounded-2xl sm:rounded-3xl bg-bg-surface/88 backdrop-blur-md border border-border/90 shadow-2xl overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-border/70 bg-bg-primary/50">
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-text-primary font-semibold">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] text-accent uppercase tracking-wider">
                  от задачи до результата
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 mb-6" aria-label="Логика цифровой системы">
                  {systemFlow.map((step, index) => (
                    <div key={step} className="relative min-w-0">
                      <div className="rounded-xl border border-border bg-bg-primary px-3 py-3 min-h-[62px] flex flex-col justify-center text-center">
                        <span className="font-mono text-[10px] text-text-muted mb-1">0{index + 1}</span>
                        <span className="text-xs sm:text-[13px] font-semibold text-text-primary break-words">{step}</span>
                      </div>
                      {index < systemFlow.length - 1 && (
                        <span className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-accent text-xs" aria-hidden="true">→</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-bg-primary border border-accent/25 p-5 sm:p-6 mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="min-w-0">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-accent block mb-1.5">Принцип VOLTRENA</span>
                      <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-tight break-words">
                        Не продаём инструмент отдельно от результата.
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Сайт, реклама, CRM, AI, парсинг и аналитика становятся модулями одной архитектуры. Начинаем с бизнес-задачи и собираем только тот контур, который нужен для её решения.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    'Выбрать задачу',
                    'Получить конфигурацию',
                    'Запустить первую очередь',
                  ].map((label) => (
                    <div key={label} className="rounded-xl bg-bg-primary/70 border border-border/80 px-4 py-3 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-accent mb-2" />
                      <span className="text-xs sm:text-sm font-semibold text-text-secondary break-words">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
