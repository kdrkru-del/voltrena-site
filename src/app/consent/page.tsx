import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных — VOLTRENA Digital',
  description: 'Условия согласия на обработку персональных данных пользователей сайта VOLTRENA Digital (ООО «ЮНАТ»).',
  alternates: { canonical: siteConfig.getCanonicalUrl('/consent/') },
  robots: { index: true, follow: true },
};

export default function ConsentPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
          Согласие на обработку персональных данных
        </h1>

        <div className="prose max-w-none space-y-6 text-text-secondary text-sm sm:text-base leading-relaxed bg-bg-surface p-6 sm:p-8 rounded-2xl border border-border">
          <p>
            Отправляя форму заявки, запрос конфигурации или обратный звонок на сайте <strong>voltrena.ru</strong>, я свободно, своей волей и в своем интересе даю согласие <strong>Обществу с ограниченной ответственностью «ЮНАТ»</strong> (ОГРН 1242500018859, ИНН 2536345868, КПП 253601001, адрес: 690066, Приморский край, г. Владивосток, ул. Тунгусская, д. 61, кв. 412) на обработку моих персональных данных.
          </p>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-2">1. Состав персональных данных</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Имя;</li>
              <li>Контактный телефон, Telegram или адрес электронной почты;</li>
              <li>Описание коммерческой задачи и комментарии к обращению;</li>
              <li>Технические параметры обращения (IP-адрес, источник перехода).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-2">2. Цели обработки</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Консультирование по вопросам разработки сайтов, рекламы и автоматизации;</li>
              <li>Расчет предварительной стоимости и подготовка технического предложения;</li>
              <li>Связь для согласования деталей проекта и заключения договора.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-2">3. Условия и локализация</h2>
            <p>
              Персональные данные фиксируются в базе данных на территории Российской Федерации (ч. 5 ст. 18 152-ФЗ РФ) и обрабатываются в строгом соответствии с требованиями законодательства РФ.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-text-primary mb-2">4. Срок действия и отзыв согласия</h2>
            <p>
              Согласие действует до достижения целей обработки либо до момента его отзыва. Согласие может быть отозвано путем направления письма на адрес: <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a>.
            </p>
          </div>

          <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-text-muted">
            <span>Оператор: ООО «ЮНАТ» (ИНН 2536345868)</span>
            <Link href="/privacy" className="text-accent underline font-medium">
              Политика конфиденциальности
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
