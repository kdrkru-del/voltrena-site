import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 bg-bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-lg">
        <span className="font-mono text-6xl sm:text-7xl font-bold text-accent block mb-4">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
          Страница не найдена
        </h1>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
          Возможно, указан неверный адрес, или страница была перемещена в рамках обновления структуры сайта.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="primary" size="default" href="/">
            На главную
          </Button>
          <Button variant="secondary" size="default" href="/services/">
            Каталог услуг
          </Button>
          <Button variant="ghost" size="default" href="/contact/">
            Контакты
          </Button>
        </div>
      </div>
    </section>
  );
}
