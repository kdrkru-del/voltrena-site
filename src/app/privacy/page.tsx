import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — VOLTRENA Digital',
  description:
    'Политика обработки и защиты персональных данных пользователей сайта VOLTRENA Digital.',
  alternates: { canonical: siteConfig.getCanonicalUrl('/privacy/') },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 font-mono text-xs text-text-muted mb-6">
          <Link href="/" className="hover:text-text-primary transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-accent">Политика конфиденциальности</span>
        </div>

        <div className="mb-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 font-mono text-xs uppercase tracking-widest text-accent font-semibold">
            LEGAL / DATA PRIVACY
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
          Политика конфиденциальности и обработки персональных данных
        </h1>

        <div className="prose prose-invert prose-indigo max-w-none space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
          
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика определяет порядок обработки и защиты информации о физических лицах, пользующихся сервисами, формами обратной связи и материалами сайта <strong>VOLTRENA Digital</strong> ({siteConfig.siteUrl}).
            </p>
            <p className="mt-2">
              Мы уважаем право на неприкосновенность частной жизни и обеспечиваем соблюдение требований законодательства в области персональных данных.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              2. Категории обрабатываемых данных
            </h2>
            <p>При использовании сайта и отправке обращений могут обрабатываться следующие категории данных:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
              <li>Имя пользователя;</li>
              <li>Контактные данные (номер телефона, адрес электронной почты, логин в Telegram);</li>
              <li>Текст сообщения и описание задачи, переданные в форме обратной связи;</li>
              <li>Обезличенные технические данные (IP-адрес, данные файлов cookie, информация о браузере, реферер, UTM-метки, дата и время посещения).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              3. Цели сбора и обработки данных
            </h2>
            <p>Сбор информации осуществляется исключительно для следующих целей:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
              <li>Обработка входящих заявок, расчёт стоимости услуг и подготовка коммерческих предложений;</li>
              <li>Связь с пользователем по указанным контактным данным для уточнения деталей проекта;</li>
              <li>Анализ эффективности работы веб-ресурса и улучшение пользовательского опыта.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              4. Файлы cookie и системы веб-аналитики
            </h2>
            <p>
              Сайт может использовать файлы cookie и сервисы веб-аналитики (включая Яндекс Метрику) для сбора статистики и оптимизации работы интерфейса. Пользователь может отключить сохранение файлов cookie в настройках своего браузера.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              5. Порядок хранения и защиты информации
            </h2>
            <p>
              Мы принимаем необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования и распространения.
            </p>
            <p className="mt-2">
              Данные не передаются третьим лицам, за исключением случаев, предусмотренных действующим законодательством.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              6. Сроки хранения и права пользователя
            </h2>
            <p>
              Персональные данные хранятся не дольше, чем этого требуют цели их обработки. Пользователь имеет право в любой момент запросить уточнение, блокирование или уничтожение своих персональных данных, направив запрос на наш официальный контактный email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              7. Контакты по вопросам обработки данных
            </h2>
            <p>
              По всем вопросам, связанным с обработкой и защитой персональных данных, вы можете обращаться:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-bg-surface border border-border/80 space-y-1.5 font-mono text-xs">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a></p>
              <p>Telegram: <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" className="text-accent underline">{siteConfig.telegramHandle}</a></p>
              <p>WhatsApp: <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-accent underline">{siteConfig.whatsappPhone}</a></p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
