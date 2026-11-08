import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Политика обработки персональных данных — VOLTRENA Digital',
  description:
    'Официальная политика обработки и защиты персональных данных пользователей сайта VOLTRENA Digital (ООО «ЮНАТ») в соответствии с 152-ФЗ РФ.',
  alternates: { canonical: siteConfig.getCanonicalUrl('/privacy/') },
  openGraph: {
    title: 'Политика конфиденциальности — VOLTRENA Digital',
    description: 'Политика обработки и защиты персональных данных пользователей сайта VOLTRENA Digital.',
    url: siteConfig.getCanonicalUrl('/privacy/'),
    type: 'website',
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Политика конфиденциальности — VOLTRENA Digital',
    description: 'Политика обработки и защиты персональных данных пользователей сайта VOLTRENA Digital.',
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 bg-bg-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">
        
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-8">
          Политика конфиденциальности и обработки персональных данных
        </h1>

        <div className="prose max-w-none space-y-8 text-text-secondary text-sm sm:text-base leading-relaxed">
          
          <div className="p-4 rounded-xl bg-bg-surface border border-border text-xs sm:text-sm text-text-primary">
            Утверждена Генеральным директором ООО «ЮНАТ» Кошевенко Р. С. | Действует с 1 сентября 2025 года. Настоящий документ обеспечивает соблюдение требований Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              1. Общие положения и сведения об Операторе
            </h2>
            <p>
              1.1. Настоящая Политика определяет порядок обработки и защиты информации о физических лицах, пользующихся сервисами, формами обратной связи и материалами сайта <strong>VOLTRENA Digital</strong> ({siteConfig.siteUrl}).
            </p>
            <p className="mt-2">
              1.2. <strong>Оператор персональных данных:</strong> Общество с ограниченной ответственностью «ЮНИВЕРСАЛ АТЛАНТ» (ООО «ЮНАТ»), ОГРН 1242500018859, ИНН 2536345868, КПП 253601001, ОКПО 74392794.
            </p>
            <p className="mt-1">
              Юридический адрес: 690066, Приморский край, г. Владивосток, ул. Тунгусская, д. 61, кв. 412.
            </p>
            <p className="mt-1">
              Генеральный директор: Кошевенко Роман Сергеевич.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              2. Категории и состав обрабатываемых данных
            </h2>
            <p>При использовании сайта и отправке обращений могут обрабатываться следующие категории данных:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
              <li>Имя пользователя / контактного лица;</li>
              <li>Контактные данные (номер телефона, логин в Telegram, адрес электронной почты);</li>
              <li>Текст сообщения, выбранная отраслевая конфигурация и описание бизнес-задачи;</li>
              <li>Обезличенные технические параметры сессии (IP-адрес, источник перехода, UTM-метки, дата и время отправки).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              3. Цели сбора и правовые основания обработки
            </h2>
            <p>Сбор информации осуществляется исключительно для следующих целей:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-text-secondary">
              <li>Обработка входящих обращений, расчет стоимости разработки и подготовка технико-коммерческих предложений;</li>
              <li>Связь с заказчиком для уточнения технических требований к проекту;</li>
              <li>Заключение и исполнение договоров на разработку цифровых систем, автоматизацию и маркетинг.</li>
            </ul>
            <p className="mt-2">
              Правовыми основаниями являются ст. 6 п. 1 (согласие субъекта) и ст. 6 п. 5 (действия в целях заключения договора по инициативе субъекта) 152-ФЗ РФ.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              4. Локализация баз данных в РФ (ч. 5 ст. 18 152-ФЗ)
            </h2>
            <p>
              Оператор гарантирует, что первичная запись, систематизация, накопление, хранение и извлечение персональных данных граждан Российской Федерации производятся с использованием баз данных, физически расположенных на территории Российской Федерации.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              5. Файлы cookie и системы веб-аналитики
            </h2>
            <p>
              Сайт использует файлы cookie и сервис веб-аналитики Яндекс.Метрика для сбора обезличенной статистики посещаемости. Пользователь может в любой момент ограничить или отключить cookie в настройках своего браузера.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              6. Сроки хранения и уничтожение данных (ст. 21 152-ФЗ)
            </h2>
            <p>
              Персональные данные хранятся не дольше, чем этого требуют цели их обработки, либо до момента отзыва согласия субъектом. При поступлении отзыва согласия данные уничтожаются в течение 30 календарных дней.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-text-primary mb-3">
              7. Права пользователя и порядок отзыва согласия
            </h2>
            <p>
              Пользователь вправе в любой момент направить запрос на уточнение, блокирование или уничтожение своих персональных данных на адрес: <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-bg-surface border border-border/80 font-mono text-xs text-text-primary space-y-1">
            <p><strong>Оператор:</strong> ООО «ЮНАТ» (VOLTRENA Digital)</p>
            <p><strong>ИНН:</strong> 2536345868 | <strong>КПП:</strong> 253601001 | <strong>ОГРН:</strong> 1242500018859</p>
            <p><strong>Юр. адрес:</strong> 690066, Приморский край, г. Владивосток, ул. Тунгусская, д. 61, кв. 412</p>
            <p><strong>Email:</strong> {siteConfig.email}</p>
            <p><strong>Телефоны:</strong> +7 (423) 272-57-25, +7 (925) 757-78-88</p>
          </div>

        </div>

      </div>
    </section>
  );
}
