// Service page types

// Since the file originally had types, let's include the types directly to be safe:
export interface FlowNode {
  id: string;
  label: string;
}
export interface SaleSystemNode {
  id: string;
  label: string;
  description: string;
}
export interface ServiceType {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  items?: string[];
}
export interface ApproachStep {
  number: string;
  title: string;
  description: string;
}
export interface EcosystemItem {
  id: string;
  label: string;
  description: string;
}
export interface ServiceProcessStep {
  number: string;
  title: string;
  description?: string;
}
export interface TechItem {
  highlights: string[];
  stack: string[];
}
export interface UseCase {
  id: string;
  title: string;
  description: string;
}
export interface IncludedItem {
  base: { label: string }[];
  extra: { label: string }[];
}
export interface FAQItem {
  question: string;
  answer: string;
}
export interface RelatedService {
  label: string;
  href: string;
}
export interface ServiceSectionCopy {
  id?: string;
  tag?: string;
  title?: string;
  description?: string;
  conclusion?: string;
  flow?: string[];
  centerLabel?: string;
  items?: ServiceType[];
}
export interface IntentLevel {
  id: string;
  label: string;
  description: string;
  terms: string[];
  strength: number;
}
export interface ComparisonPath {
  id: string;
  label: string;
  tone: 'muted' | 'accent';
  steps: string[];
}
export interface FormulaStep {
  operator: string;
  label: string;
  isResult?: boolean;
}
export interface SEOData {
  title: string;
  description: string;
  canonical: string;
}

export interface ServicePageData {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
  heroExample?: string;
  heroFlow: FlowNode[];
  saleSystemSection?: ServiceSectionCopy;
  saleSystemNodes?: SaleSystemNode[];
  typesSection?: ServiceSectionCopy;
  types?: ServiceType[];
  approachSection?: ServiceSectionCopy;
  approach?: ApproachStep[];
  ecosystemSection?: ServiceSectionCopy;
  ecosystem?: EcosystemItem[];
  intent?: {
    tag: string;
    title: string;
    description: string;
    levels: IntentLevel[];
    note: string;
  };
  comparison?: {
    tag: string;
    title: string;
    description: string;
    paths: ComparisonPath[];
    conclusion: string;
  };
  processSection?: ServiceSectionCopy;
  process?: ServiceProcessStep[];
  recurring?: {
    tag: string;
    title: string;
    description: string;
    steps: string[];
    conclusion: string;
  };
  metrics?: ServiceSectionCopy;
  principles?: ServiceSectionCopy;
  useCases?: UseCase[];
  workModels?: ServiceSectionCopy;
  leadSystem?: {
    tag: string;
    title: string;
    formula: FormulaStep[];
    ctaLabel: string;
    ctaHref: string;
  };
  technology?: TechItem;
  included?: IncludedItem;
  faq: FAQItem[];
  relatedServices: RelatedService[];
  finalCta?: {
    title: string;
    description: string;
    benefits: string[];
  };
  seo: SEOData;
}

// --- WEB DEVELOPMENT ---------------------------------------------------------

export const webDevelopmentData: ServicePageData = {
  slug: 'web-development',
  eyebrow: 'WEB DEVELOPMENT',
  title: 'Создаём сайты, которые работают на продажи.',
  subtitle: 'Сайт — это инструмент привлечения клиентов.',
  description:
    'Проектируем и разрабатываем сайты как часть системы привлечения клиентов — с рекламой, аналитикой, CRM и автоматизацией.',
  ctaPrimary: 'Обсудить проект',
  ctaSecondary: 'Что мы создаём',
  ctaSecondaryHref: '#what-we-create',
  heroFlow: [
    { id: 'traffic', label: 'Трафик' },
    { id: 'website', label: 'Сайт' },
    { id: 'lead', label: 'Лид' },
    { id: 'crm', label: 'CRM' },
    { id: 'sale', label: 'Продажа' },
  ],

  saleSystemNodes: [
    {
      id: 'traffic',
      label: 'Трафик',
      description: 'Яндекс Директ, SEO, GEO — источники, которые мы настраиваем и оптимизируем.',
    },
    {
      id: 'website',
      label: 'Сайт',
      description: 'Принимает трафик, объясняет предложение и конвертирует посетителей в заявки.',
    },
    {
      id: 'crm',
      label: 'CRM',
      description: 'Каждая заявка попадает в воронку. Менеджер видит контекст и историю.',
    },
    {
      id: 'analytics',
      label: 'Аналитика',
      description: 'Яндекс Метрика показывает, откуда пришёл клиент и что его привело к заявке.',
    },
  ],

  types: [
    {
      id: 'landing',
      title: 'Лендинги',
      description: 'Посадочные страницы под конкретные услуги и рекламные кампании. Максимальная конверсия на единственном предложении.',
      featured: true,
    },
    {
      id: 'multipage',
      title: 'Многостраничные сайты',
      description: 'Полноценные сайты компаний с разделами услуг, кейсов, команды и контактов.',
    },
    {
      id: 'corporate',
      title: 'Корпоративные сайты',
      description: 'Сайты с развитой структурой и профессиональной презентацией бизнеса.',
    },
    {
      id: 'b2b',
      title: 'B2B Websites',
      description: 'Сайты производителей, поставщиков, оборудования, логистики и профессиональных услуг.',
    },
    {
      id: 'catalog',
      title: 'Каталоги продукции',
      description: 'Каталоги с фильтрацией, карточками товаров и формами заявок.',
    },
    {
      id: 'webapp',
      title: 'Web Applications',
      description: 'Небольшие бизнес-системы и client-facing инструменты.',
    },
    {
      id: 'telegram',
      title: 'Telegram Mini Apps',
      description: 'Интерактивные приложения внутри Telegram для ваших клиентов.',
    },
    {
      id: 'redesign',
      title: 'Редизайн',
      description: 'Полная переработка существующего сайта: новая структура, UX и визуал.',
    },
  ],

  approach: [
    {
      number: '01',
      title: 'Спрос',
      description: 'Что реально ищут потенциальные клиенты? Анализируем запросы, конкурентов и путь клиента до заявки.',
    },
    {
      number: '02',
      title: 'Предложение',
      description: 'Почему клиент должен выбрать именно эту компанию? Формулируем уникальность и сильные стороны.',
    },
    {
      number: '03',
      title: 'Конверсия',
      description: 'Что должно привести посетителя к заявке? Проектируем структуру, CTA и доверие.',
    },
    {
      number: '04',
      title: 'Система',
      description: 'Что происходит после заявки? Подключаем CRM, аналитику и автоматизацию.',
    },
  ],

  ecosystem: [
    { id: 'direct', label: 'Яндекс Директ', description: 'Запускаем и оптимизируем рекламу, которая приводит целевой трафик на сайт.' },
    { id: 'seo', label: 'SEO', description: 'Настраиваем техническое SEO и помогаем расти в поисковых позициях.' },
    { id: 'geo', label: 'GEO / ИИ-поиск', description: 'Оптимизируем присутствие в геосервисах и ИИ-поисковиках.' },
    { id: 'maps', label: 'Яндекс Карты', description: 'Работаем с отзывами и рейтингом на картах.' },
    { id: 'crm', label: 'CRM', description: 'Передаём каждую заявку в воронку продаж.' },
    { id: 'telegram', label: 'Telegram', description: 'Уведомления менеджерам и боты для клиентов.' },
    { id: 'ai', label: 'AI', description: 'Автоматически квалифицируем обращения с помощью ИИ.' },
    { id: 'analytics', label: 'Аналитика', description: 'Отслеживаем источник, действия и конверсии каждого посетителя.' },
    { id: 'call', label: 'Call Tracking', description: 'Отслеживаем, какая реклама приводит к звонкам.' },
    { id: 'email', label: 'Email', description: 'Автоматические письма после заявки и цепочки прогрева.' },
    { id: 'data', label: 'Данные', description: 'Собираем и структурируем данные о клиентах для аналитики.' },
  ],

  process: [
    { number: '01', title: 'Погружение' },
    { number: '02', title: 'Анализ спроса' },
    { number: '03', title: 'Архитектура' },
    { number: '04', title: 'Прототип' },
    { number: '05', title: 'Дизайн' },
    { number: '06', title: 'Разработка' },
    { number: '07', title: 'Интеграции' },
    { number: '08', title: 'Запуск' },
    { number: '09', title: 'Рост' },
  ],

  technology: {
    highlights: ['FAST', 'RESPONSIVE', 'SEO READY', 'SCALABLE', 'INTEGRATED'],
    stack: ['Next.js', 'React', 'TypeScript', 'REST API', 'Яндекс Метрика', 'CRM API'],
  },

  useCases: [
    {
      id: 'services',
      title: 'Услуги',
      description: 'Строительство, ремонт, аренда техники, профессиональные услуги — сайт как главный инструмент лидогенерации.',
    },
    {
      id: 'b2b',
      title: 'B2B',
      description: 'Производители, поставщики, оборудование, логистика, экспорт — сайт для работы с корпоративными клиентами.',
    },
    {
      id: 'local',
      title: 'Локальный бизнес',
      description: 'Медицина, beauty, сервисы — сайт + Яндекс Карты + реклама = поток местных клиентов.',
    },
    {
      id: 'new-product',
      title: 'Новый продукт',
      description: 'Запуск нового направления или услуги — от идеи до первых заявок.',
    },
    {
      id: 'complex',
      title: 'Сложная услуга',
      description: 'Бизнесы, где клиенту нужно подробно объяснить предложение и снять возражения.',
    },
  ],

  included: {
    base: [
      { label: 'Анализ задачи и конкурентов' },
      { label: 'Структура сайта' },
      { label: 'UX-проектирование' },
      { label: 'Прототип' },
      { label: 'Дизайн' },
      { label: 'Адаптивная разработка' },
      { label: 'Формы и уведомления' },
      { label: 'Базовое техническое SEO' },
      { label: 'Яндекс Метрика' },
      { label: 'Публикация и тестирование' },
    ],
    extra: [
      { label: 'CRM интеграция' },
      { label: 'Telegram-уведомления' },
      { label: 'Яндекс Директ' },
      { label: 'SEO продвижение' },
      { label: 'GEO / Яндекс Карты' },
      { label: 'ИИ-квалификация заявок' },
      { label: 'Калькуляторы' },
      { label: 'Автоматизация процессов' },
      { label: 'Мультиязычность' },
    ],
  },

  faq: [
    {
      question: 'Сколько стоит создание сайта?',
      answer:
        'Цена зависит от структуры, количества страниц, дизайна, функциональности и интеграций. Чтобы назвать точную цифру, нам нужно понять вашу задачу — расскажите о проекте.',
    },
    {
      question: 'Сколько занимает разработка?',
      answer:
        'Срок зависит от сложности проекта. Лендинг — быстро. Многостраничный сайт с интеграциями — дольше. Обсудим конкретный срок после понимания задачи.',
    },
    {
      question: 'Можно ли создать сайт специально под Яндекс Директ?',
      answer:
        'Да. Мы делаем лендинги, оптимизированные под конкретные рекламные кампании — с правильной структурой, быстрой загрузкой и конверсионными элементами.',
    },
    {
      question: 'Подключаете ли Яндекс Метрику?',
      answer:
        'Да, это входит в базовую разработку. Настраиваем счётчик, цели и события, чтобы вы видели откуда приходят клиенты и что они делают на сайте.',
    },
    {
      question: 'Можно ли подключить Telegram?',
      answer:
        'Да. Подключаем уведомления о заявках в Telegram, а также можем разработать Telegram-бота или Mini App для вашего бизнеса.',
    },
    {
      question: 'Можно ли подключить CRM?',
      answer:
        'Да. Интегрируем сайт с Битрикс24, amoCRM и другими системами — каждая заявка будет автоматически попадать в воронку.',
    },
    {
      question: 'Делаете ли редизайн существующего сайта?',
      answer:
        'Да. Анализируем текущий сайт, определяем проблемы, перепроектируем структуру и делаем новый дизайн с сохранением или улучшением контента.',
    },
    {
      question: 'Можно ли после разработки заказать рекламу?',
      answer:
        'Да. Именно для этого мы проектируем сайт — чтобы потом запустить рекламу и получить поток заявок. Мы занимаемся Яндекс Директ, SEO и GEO.',
    },
  ],

  relatedServices: [
    { label: 'Яндекс Директ', href: '/services/yandex-direct' },
    { label: 'SEO / GEO', href: '/services/seo-geo' },
    { label: 'CRM интеграция', href: '/services/crm' },
    { label: 'Telegram боты', href: '/services/telegram-bots' },
    { label: 'ИИ и автоматизация', href: '/services/ai-automation' },
  ],

  seo: {
    title: 'Создание сайтов для бизнеса | VOLTRENA Digital',
    description:
      'Разрабатываем современные сайты для бизнеса: лендинги, многостраничные и корпоративные сайты с аналитикой, CRM и автоматизацией.',
    canonical: '/services/web-development',
  },
};

// --- YANDEX DIRECT -----------------------------------------------------------

export const yandexDirectData: ServicePageData = {
  slug: 'yandex-direct',
  eyebrow: 'YANDEX DIRECT',
  title: 'Приводим клиентов из Яндекс Директа.',
  subtitle: 'Система получения заявок из поискового спроса.',
  description:
    'Настраиваем рекламу под реальный поисковый спрос, связываем её с посадочной страницей и аналитикой и постоянно улучшаем стоимость заявки.',
  ctaPrimary: 'Обсудить рекламу',
  ctaSecondary: 'Как мы работаем',
  ctaSecondaryHref: '#how-we-work',
  heroExample: '«спил деревьев цена» → релевантное объявление → страница услуги → заявка',

  heroFlow: [
    { id: 'query', label: 'SEARCH QUERY' },
    { id: 'ad', label: 'AD' },
    { id: 'landing', label: 'LANDING PAGE' },
    { id: 'lead', label: 'LEAD' },
    { id: 'analytics', label: 'ANALYTICS' },
  ],

  saleSystemSection: {
    tag: 'ВОРОНКА',
    title: 'Клик сам по себе ничего не стоит.',
    description: 'Реклама имеет смысл только тогда, когда понятна вся цепочка от поискового запроса до обращения и продажи.',
    flow: ['Запрос', 'Объявление', 'Страница', 'Заявка', 'Продажа', 'Данные'],
    conclusion: 'Оптимизируем не ради кликов. Оптимизируем ради результата.',
  },
  saleSystemNodes: [
    { id: 'query', label: 'Запрос', description: 'Находим людей, которые уже ищут конкретную услугу или товар.' },
    { id: 'ad', label: 'Объявление', description: 'Отвечаем на намерение пользователя точным и релевантным предложением.' },
    { id: 'page', label: 'Страница', description: 'Ведём на посадочную страницу, которая продолжает ту же мысль.' },
    { id: 'lead', label: 'Заявка', description: 'Делаем понятным следующий шаг: звонок, форму или сообщение.' },
    { id: 'sale', label: 'Продажа', description: 'Учитываем экономику бизнеса и качество обработки обращений.' },
    { id: 'data', label: 'Данные', description: 'Возвращаем результаты в систему и улучшаем следующий цикл.' },
  ],

  typesSection: { id: 'what-we-create', tag: 'РАБОТЫ', title: 'Что мы делаем.' },
  types: [
    { id: 'demand', title: 'Анализ спроса', description: 'Изучаем, что и как потенциальные клиенты ищут в Яндексе.', featured: true },
    { id: 'semantics', title: 'Семантика', description: 'Собираем и группируем поисковые запросы по намерению пользователя.' },
    { id: 'structure', title: 'Структура кампаний', description: 'Разделяем направления, услуги, географию и типы спроса.' },
    { id: 'ads', title: 'Объявления', description: 'Создаём релевантные объявления под конкретные запросы и задачи.' },
    { id: 'negative', title: 'Минус-слова', description: 'Отсекаем нецелевой спрос и бесполезные показы.' },
    { id: 'landing', title: 'Посадочные страницы', description: 'Проверяем, соответствует ли страница рекламному запросу.' },
    { id: 'analytics', title: 'Аналитика', description: 'Настраиваем цели и отслеживаем реальные обращения.' },
    { id: 'optimization', title: 'Оптимизация', description: 'Корректируем кампанию на основании фактических данных.' },
  ],

  approachSection: { id: 'how-we-work', tag: 'ИСХОДНЫЕ ДАННЫЕ', title: 'Сначала выясняем, что ищут ваши клиенты.' },
  approach: [
    { number: '01', title: 'Бизнес', description: 'Что именно продаёт компания?' },
    { number: '02', title: 'Спрос', description: 'Какие запросы используют потенциальные клиенты?' },
    { number: '03', title: 'Намерение', description: 'Какие запросы действительно показывают готовность купить?' },
    { number: '04', title: 'Экономика', description: 'Сколько можно платить за обращение?' },
  ],

  intent: {
    tag: 'SEARCH INTENT',
    title: 'Не все запросы одинаково ценны.',
    description: 'Ставка, объявление и стратегия зависят от коммерческого намерения.',
    levels: [
      { id: 'high', label: 'Высокое намерение', description: 'Пользователь близок к целевому действию.', terms: ['заказать', 'цена', 'стоимость', 'купить', 'аренда', 'под ключ'], strength: 100 },
      { id: 'medium', label: 'Среднее намерение', description: 'Интерес есть, но контекст и готовность нужно уточнить.', terms: ['компания', 'услуги', 'где найти'], strength: 62 },
      { id: 'info', label: 'Информационный спрос', description: 'Может быть полезен для отложенного спроса, контента или ремаркетинга.', terms: ['как сделать', 'что такое', 'инструкция'], strength: 30 },
    ],
    note: 'Информационные запросы не исключаются автоматически: их роль зависит от стратегии и цикла сделки.',
  },

  comparison: {
    tag: 'РЕЛЕВАНТНОСТЬ',
    title: 'Хорошая реклама не спасёт плохую страницу.',
    description: 'Запрос, объявление и посадочная страница должны продолжать одну логику.',
    paths: [
      { id: 'bad', label: 'Плохая система', tone: 'muted', steps: ['«аренда дорожной фрезы»', 'Общее объявление', 'Главная страница компании', 'Низкая релевантность'] },
      { id: 'good', label: 'Правильная система', tone: 'accent', steps: ['«аренда дорожной фрезы»', 'Объявление про аренду фрезы', 'Отдельная страница услуги', 'CTA / звонок / заявка'] },
    ],
    conclusion: 'Запрос, объявление и страница должны говорить об одном и том же.',
  },

  ecosystemSection: { id: 'ecosystem', tag: 'ИНТЕГРАЦИИ', title: 'Что можно подключить.', centerLabel: 'YANDEX DIRECT' },
  ecosystem: [
    { id: 'website', label: 'Website', description: 'Создаём отдельные посадочные страницы под рекламные направления.' },
    { id: 'landing', label: 'Landing Page', description: 'Проектируем посадочную страницу под конкретный спрос.' },
    { id: 'metrica', label: 'Yandex Metrica', description: 'Отслеживаем заявки, звонки и действия пользователя.' },
    { id: 'crm', label: 'CRM', description: 'Передаём обращения в систему продаж.' },
    { id: 'call', label: 'Call Tracking', description: 'Определяем, какие рекламные кампании приводят звонки.' },
    { id: 'telegram', label: 'Telegram', description: 'Мгновенно уведомляем менеджера о новом лиде.' },
    { id: 'analytics', label: 'Analytics', description: 'Сравниваем стоимость и качество обращений.' },
    { id: 'seo', label: 'SEO', description: 'Соединяем платный и органический спрос в общую систему.' },
    { id: 'maps', label: 'Yandex Maps', description: 'Усиливаем локальное присутствие и доверие.' },
    { id: 'ai', label: 'AI', description: 'Помогаем квалифицировать и маршрутизировать обращения.' },
    { id: 'sales', label: 'Sales', description: 'Связываем рекламные данные с процессом обработки лидов.' },
  ],

  processSection: { id: 'campaign-launch', tag: 'НАСТРОЙКА', title: 'Запуск кампании.' },
  process: [
    { number: '01', title: 'Анализ бизнеса', description: 'Услуги, география, экономика, конкуренты.' },
    { number: '02', title: 'Анализ спроса', description: 'Поисковые запросы и потенциальный объём.' },
    { number: '03', title: 'Семантика', description: 'Сбор, очистка и кластеризация.' },
    { number: '04', title: 'Структура', description: 'Разделение кампаний и групп.' },
    { number: '05', title: 'Объявления', description: 'Создание релевантных рекламных сообщений.' },
    { number: '06', title: 'Аналитика', description: 'Метрика, цели, UTM, звонки при необходимости.' },
    { number: '07', title: 'Запуск', description: 'Проверка и начало показов.' },
    { number: '08', title: 'Первичная оптимизация', description: 'Анализ поисковых запросов и качества трафика.' },
  ],

  recurring: {
    tag: 'ВЕДЕНИЕ',
    title: 'После запуска работа только начинается.',
    description: 'Кампания становится точнее по мере накопления реальных данных.',
    steps: ['Собираем данные', 'Анализируем запросы', 'Добавляем минус-слова', 'Корректируем ставки и бюджеты', 'Тестируем объявления', 'Улучшаем посадочные страницы', 'Сравниваем стоимость заявок', 'Повторяем'],
    conclusion: 'Регулярное ведение — это цикл измерения, проверки гипотез и улучшений.',
  },

  metrics: {
    id: 'metrics', tag: 'МЕТРИКИ', title: 'Смотрим глубже стоимости клика.',
    description: 'Метрики работают в связке: одна цифра не объясняет качество всей системы.',
    items: [
      { id: 'cpc', title: 'CPC', description: 'Стоимость клика.' },
      { id: 'ctr', title: 'CTR', description: 'Релевантность объявления аудитории.' },
      { id: 'cr', title: 'Conversion Rate', description: 'Какая доля трафика превращается в заявку.' },
      { id: 'cpl', title: 'CPL', description: 'Стоимость обращения.' },
      { id: 'quality', title: 'Lead Quality', description: 'Качество и целевой характер обращений.' },
      { id: 'revenue', title: 'Sale / Revenue', description: 'Если CRM и бизнес-процессы позволяют передавать эти данные.' },
    ],
  },

  principles: {
    id: 'principles', tag: 'ПРИНЦИПЫ', title: 'Не запускаем рекламу вслепую.',
    items: [
      { id: 'not-clicks', title: 'Не считаем клики главным результатом', description: 'Оцениваем путь до заявки и её качество.' },
      { id: 'not-mix', title: 'Не смешиваем весь спрос в одну группу', description: 'Структура помогает точно управлять кампанией.' },
      { id: 'not-ignore', title: 'Не игнорируем запросы после запуска', description: 'Они показывают, какой трафик кампания получает на деле.' },
      { id: 'not-page', title: 'Не ведём на нерелевантную страницу', description: 'Посадочная страница должна отвечать на рекламный запрос.' },
      { id: 'not-analytics', title: 'Не оцениваем кампанию без аналитики', description: 'Без целей и событий невозможно отличить движение от результата.' },
    ],
  },

  useCases: [
    { id: 'services', title: 'Услуги', description: 'Строительство, ремонт, техника, юридические и профессиональные услуги.' },
    { id: 'b2b', title: 'B2B', description: 'Производители, оборудование, поставщики и логистика.' },
    { id: 'local', title: 'Local Business', description: 'Медицина, beauty и сервисные компании.' },
    { id: 'new', title: 'New Direction', description: 'Проверка спроса на новую услугу.' },
    { id: 'high-value', title: 'High-value Services', description: 'Услуги, где один качественный клиент имеет высокую ценность.' },
  ],

  workModels: {
    id: 'work-models', tag: 'ФОРМАТ', title: 'Как можем работать.',
    items: [
      { id: 'launch', title: 'Запуск рекламы', description: 'Для бизнеса, который ещё не работает с Яндекс Директом.', items: ['Анализ', 'Семантика', 'Структура', 'Объявления', 'Аналитика', 'Запуск'] },
      { id: 'audit', title: 'Аудит существующей рекламы', description: 'Если кампания уже работает, но результат не устраивает.', items: ['Структура', 'Запросы', 'Минус-слова', 'Объявления', 'Ставки', 'Посадочные страницы', 'Аналитика'] },
      { id: 'management', title: 'Ведение и оптимизация', description: 'Регулярно анализируем данные и улучшаем кампанию.', items: ['Поисковые запросы', 'Ставки и бюджеты', 'Объявления', 'Посадочные страницы', 'Стоимость и качество заявок'] },
    ],
  },

  leadSystem: {
    tag: 'САЙТ + ДИРЕКТ',
    title: 'Максимальный эффект — когда сайт и реклама проектируются вместе.',
    formula: [
      { operator: '', label: 'SEARCH DEMAND' },
      { operator: '+', label: 'YANDEX DIRECT' },
      { operator: '+', label: 'LANDING PAGE' },
      { operator: '+', label: 'ANALYTICS' },
      { operator: '=', label: 'LEAD GENERATION SYSTEM', isResult: true },
    ],
    ctaLabel: 'Нужен сайт под рекламу',
    ctaHref: '/services/web-development',
  },

  faq: [
    { question: 'Сколько стоит настройка Яндекс Директа?', answer: 'Стоимость зависит от количества услуг, регионов, объёма семантики и сложности рекламной структуры. После анализа задачи формируется предложение.' },
    { question: 'Какой нужен рекламный бюджет?', answer: 'Бюджет зависит от спроса, региона, стоимости клика и экономики бизнеса. Перед запуском можно провести предварительную оценку рынка.' },
    { question: 'Когда появятся первые заявки?', answer: 'Реклама может начать приводить трафик сразу после запуска, но качество и стоимость обращений обычно требуют накопления данных и оптимизации. Гарантировать срок получения заявки без этих данных нельзя.' },
    { question: 'Вы гарантируете количество заявок?', answer: 'Нет. Результат зависит от спроса, предложения, конкуренции, сайта, бюджета и качества обработки лидов. Мы отвечаем за прозрачную систему, корректную настройку и оптимизацию по данным.' },
    { question: 'Можно ли вести рекламу на существующий сайт?', answer: 'Да, но сначала стоит проверить, насколько сайт соответствует рекламному спросу и способен конвертировать посетителей.' },
    { question: 'Вы делаете посадочные страницы?', answer: 'Да. При необходимости VOLTRENA может создать отдельную landing page или полноценный сайт под рекламную кампанию.' },
    { question: 'Вы подключаете Метрику?', answer: 'Да. Настройка аналитики и целей может быть частью проекта.' },
    { question: 'Можно ли подключить CRM?', answer: 'Да. При необходимости заявки можно передавать в CRM и другие системы.' },
    { question: 'Можно ли заказать только аудит?', answer: 'Да. Можно отдельно проверить структуру, запросы, минус-слова, объявления, ставки, посадочные страницы и аналитику.' },
  ],

  relatedServices: [
    { label: 'Создание сайтов', href: '/services/web-development' },
    { label: 'SEO / GEO', href: '/services/seo-geo' },
    { label: 'CRM интеграция', href: '/services/crm' },
    { label: 'Аналитика', href: '/services/analytics' },
  ],

  finalCta: {
    title: 'Хотите понять, сколько клиентов может дать Яндекс Директ?',
    description: 'Расскажите, чем занимается ваш бизнес. Мы изучим задачу и предложим подход к рекламе.',
    benefits: ['Разберём спрос и задачу', 'Оценим сайт и аналитику', 'Предложим конкретный подход'],
  },

  seo: {
    title: 'Настройка и ведение Яндекс Директа | VOLTRENA Digital',
    description: 'Настраиваем и ведём Яндекс Директ для бизнеса: анализ спроса, семантика, объявления, посадочные страницы, Метрика и оптимизация стоимости заявок.',
    canonical: '/services/yandex-direct/',
  },
};

// --- WEB SCRAPING -------------------------------------------------------------

export const webScrapingData: ServicePageData = {
  slug: 'web-scraping',
  eyebrow: 'WEB SCRAPING & DATA AUTOMATION',
  title: 'Собираем данные, которые помогают принимать решения.',
  subtitle: 'Превращаем открытые данные в рабочий бизнес-инструмент.',
  description: 'Разрабатываем системы парсинга и мониторинга открытых источников: собираем нужную информацию, очищаем её, обновляем по расписанию и интегрируем с рабочими системами бизнеса.',
  ctaPrimary: 'Обсудить задачу',
  ctaSecondary: 'Что можно собирать',
  ctaSecondaryHref: '#what-we-collect',

  heroFlow: [
    { id: 'source', label: 'SOURCE' },
    { id: 'collect', label: 'COLLECT' },
    { id: 'clean', label: 'CLEAN' },
    { id: 'structure', label: 'STRUCTURE' },
    { id: 'deliver', label: 'DELIVER' },
  ],

  typesSection: { id: 'what-we-collect', tag: 'ТИПЫ ДАННЫХ', title: 'Какие данные можно собирать.' },
  types: [
    { id: 'companies', title: 'Компании', description: 'Название, сайт, отрасль, география, публичные корпоративные контакты, услуги, категории деятельности.', featured: true },
    { id: 'products', title: 'Товары', description: 'Название, цена, характеристики, категория, наличие, артикул, бренд — с маркетплейсов и каталогов.' },
    { id: 'prices', title: 'Цены', description: 'Текущая цена, динамика изменений, скидки, сравнение конкурентов по категориям.' },
    { id: 'listings', title: 'Объявления', description: 'Новые объявления, цена, описание, регион, дата публикации, статус.' },
    { id: 'catalogs', title: 'Каталоги', description: 'Компании, товары, категории, карточки и параметры из открытых бизнес-каталогов.' },
    { id: 'registries', title: 'Публичные реестры', description: 'Данные из официально доступных источников — там, где это разрешено правилами и применимым законодательством.' },
    { id: 'market', title: 'Рыночные данные', description: 'Ассортимент, новые компании, новые товары, новые позиции, изменения у конкурентов.' },
  ],

  processSection: { id: 'pipeline', tag: 'PIPELINE', title: 'Данные проходят полный pipeline.' },
  process: [
    { number: '01', title: 'Extract', description: 'Получаем нужные поля из открытых источников.' },
    { number: '02', title: 'Validate', description: 'Проверяем формат и структуру данных.' },
    { number: '03', title: 'Clean', description: 'Удаляем лишнее, исправляем ошибки.' },
    { number: '04', title: 'Normalize', description: 'Приводим данные к единому виду.' },
    { number: '05', title: 'Deduplicate', description: 'Удаляем повторяющиеся записи.' },
    { number: '06', title: 'Classify', description: 'Разделяем по категориям и признакам.' },
    { number: '07', title: 'Deliver', description: 'Передаём готовые данные в рабочую систему.' },
  ],

  ecosystemSection: { id: 'integrations', tag: 'ИНТЕГРАЦИИ', title: 'Результат может работать автоматически.', centerLabel: 'DATA SYSTEM' },
  ecosystem: [
    { id: 'sheets', label: 'Google Sheets', description: 'Обновляем рабочую таблицу по расписанию.' },
    { id: 'excel', label: 'Excel / CSV', description: 'Регулярная выгрузка отчётов в удобном формате.' },
    { id: 'crm', label: 'CRM', description: 'Передаём новые записи в нужный pipeline.' },
    { id: 'api', label: 'API', description: 'Отдаём данные другой системе через REST API.' },
    { id: 'db', label: 'Database', description: 'Напрямую в PostgreSQL, MySQL, MongoDB.' },
    { id: 'telegram', label: 'Telegram', description: 'Отправляем уведомления при появлении новых событий.' },
    { id: 'dashboard', label: 'Dashboard', description: 'Показываем ключевые показатели и изменения.' },
    { id: 'email', label: 'Email', description: 'Автоматические отчёты и оповещения по расписанию.' },
    { id: 'ai', label: 'AI Processing', description: 'Классифицируем или кратко описываем записи с помощью ИИ.' },
  ],

  useCases: [
    { id: 'ecommerce', title: 'E-commerce', description: 'Мониторинг товаров, цен и ассортимента конкурентов.' },
    { id: 'b2b-sales', title: 'B2B Sales', description: 'Поиск компаний и обогащение баз для продаж.' },
    { id: 'manufacturing', title: 'Производство', description: 'Мониторинг поставщиков, дилеров и рыночной ситуации.' },
    { id: 'real-estate', title: 'Недвижимость', description: 'Объявления, объекты и динамика предложений на рынке.' },
    { id: 'logistics', title: 'Логистика', description: 'Базы компаний и актуальные рыночные данные.' },
    { id: 'procurement', title: 'Закупки', description: 'Мониторинг поставщиков, товаров и цен для принятия решений.' },
    { id: 'marketing', title: 'Маркетинг', description: 'Конкуренты, рекламные страницы, ассортимент, рынок.' },
    { id: 'research', title: 'Research', description: 'Сбор больших массивов открытой информации для аналитики.' },
  ],

  included: {
    base: [
      { label: 'Анализ задачи и источников' },
      { label: 'Определение полей' },
      { label: 'Проектирование структуры данных' },
      { label: 'Разработка парсера' },
      { label: 'Фильтрация и очистка' },
      { label: 'Дедупликация и нормализация' },
      { label: 'Экспорт в нужный формат' },
      { label: 'Тестирование и запуск' },
    ],
    extra: [
      { label: 'CRM интеграция' },
      { label: 'Google Sheets автообновление' },
      { label: 'Telegram уведомления' },
      { label: 'Автоматический мониторинг' },
      { label: 'AI классификация' },
      { label: 'Dashboard подключение' },
      { label: 'API endpoint' },
      { label: 'Регулярное ведение' },
    ],
  },

  leadSystem: {
    tag: 'B2B ЛИДОГЕНЕРАЦИЯ',
    title: 'Данные могут превращаться в потенциальных клиентов.',
    formula: [
      { operator: '', label: 'WEB SOURCES' },
      { operator: 'to', label: 'COMPANY DATA' },
      { operator: 'to', label: 'ENRICHMENT' },
      { operator: 'to', label: 'QUALIFICATION' },
      { operator: '=', label: 'B2B LEADS', isResult: true },
    ],
    ctaLabel: 'B2B-лидогенерация',
    ctaHref: '/services/b2b-lead-generation',
  },

  faq: [
    { question: 'Что такое парсинг данных?', answer: 'Это автоматизированный сбор и структурирование информации из доступных цифровых источников: сайтов, каталогов, маркетплейсов и открытых реестров.' },
    { question: 'Какие сайты можно парсить?', answer: 'Это зависит от структуры сайта, технической доступности, правил источника и характера данных. Задачу нужно оценивать индивидуально.' },
    { question: 'Можно ли регулярно обновлять данные?', answer: 'Да. Для подходящих источников можно создать систему периодического мониторинга: ежедневно, несколько раз в день или по расписанию.' },
    { question: 'Можно ли собирать цены конкурентов?', answer: 'Да, если данные публично доступны и техническая реализация соответствует условиям конкретного источника.' },
    { question: 'В каком формате я получу данные?', answer: 'В зависимости от задачи: Excel, CSV, Google Sheets, база данных, CRM, API или dashboard.' },
    { question: 'Можно ли отправлять новые данные в Telegram?', answer: 'Да. Можно настроить уведомления о новых или изменённых записях прямо в ваш Telegram-чат или бот.' },
    { question: 'Можно ли подключить AI?', answer: 'Да. AI может использоваться для классификации, анализа, тегирования и структурирования данных — как часть pipeline.' },
    { question: 'Можно ли собрать базу компаний?', answer: 'Да. Для этой задачи также существует отдельное направление B2B-лидогенерации со своей методологией и инструментами.' },
    { question: 'Можно ли получить закрытые данные?', answer: 'Нет. VOLTRENA работает с публично доступной и законно доступной информацией. Мы не обещаем доступ к закрытым базам или защищённым системам.' },
  ],

  relatedServices: [
    { label: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
    { label: 'CRM интеграция', href: '/services/crm' },
    { label: 'ИИ и автоматизация', href: '/services/ai-automation' },
    { label: 'Telegram боты', href: '/services/telegram-bots' },
  ],

  finalCta: {
    title: 'Какие данные вам нужны?',
    description: 'Покажите источник или опишите задачу. Мы предложим способ сбора, структуру данных и вариант автоматизации.',
    benefits: ['Оценим источник и задачу', 'Предложим структуру данных', 'Определим формат и интеграцию'],
  },

  seo: {
    title: 'Парсинг сайтов и сбор данных | VOLTRENA Digital',
    description: 'Разработка парсеров и систем сбора данных: мониторинг цен, конкурентов, товаров, компаний и открытых источников с автоматическим обновлением и интеграциями.',
    canonical: '/services/web-scraping/',
  },
};

// --- AI & AUTOMATION ----------------------------------------------------------

export const aiAutomationData: ServicePageData = {
  slug: 'ai-automation',
  eyebrow: 'AI & AUTOMATION',
  title: 'Автоматизируем процессы, а не просто добавляем AI.',
  subtitle: 'Автоматизируем работу, которую бизнес до сих пор делает вручную.',
  description: 'Строим автоматические workflow для продаж, заявок, коммуникаций, документов и данных — с AI, CRM, Telegram и внешними сервисами.',
  ctaPrimary: 'Обсудить автоматизацию',
  ctaSecondary: 'Что можно автоматизировать',
  ctaSecondaryHref: '#what-to-automate',

  heroFlow: [
    { id: 'event', label: 'EVENT' },
    { id: 'ai', label: 'AI / LOGIC' },
    { id: 'decision', label: 'DECISION' },
    { id: 'action', label: 'ACTION' },
    { id: 'system', label: 'CRM / TG / EMAIL' },
  ],

  typesSection: { id: 'what-to-automate', tag: 'АВТОМАТИЗАЦИЯ', title: 'Что можно автоматизировать.' },
  types: [
    { id: 'sales', title: 'Продажи', description: 'Обработка заявок, квалификация лидов, создание сделок, распределение по менеджерам, follow-up и напоминания.', featured: true },
    { id: 'communication', title: 'Коммуникации', description: 'Первичные ответы, маршрутизация обращений, уведомления через Telegram, email и другие каналы.' },
    { id: 'documents', title: 'Документы', description: 'Извлечение данных, заполнение шаблонов, генерация КП, суммаризация и классификация документов.' },
    { id: 'data', title: 'Данные', description: 'Сбор, очистка, классификация, enrichment и передача данных между системами.' },
    { id: 'operations', title: 'Внутренние операции', description: 'Создание задач, уведомления, отчёты, контроль статусов, синхронизация данных между системами.' },
    { id: 'crm', title: 'CRM Automation', description: 'Автоматическое движение по воронке, создание задач, scoring, напоминания и обновление статусов.' },
  ],

  processSection: { id: 'how-we-build', tag: 'КАК МЫ ПРОЕКТИРУЕМ', title: 'Сначала процесс. Потом технология.' },
  process: [
    { number: '01', title: 'Process', description: 'Разбираем, как работа выполняется сейчас — шаг за шагом.' },
    { number: '02', title: 'Bottleneck', description: 'Находим повторяющиеся и дорогие ручные действия.' },
    { number: '03', title: 'Logic', description: 'Определяем правила и условия процесса.' },
    { number: '04', title: 'Integration', description: 'Определяем системы, данные и точки соединения.' },
    { number: '05', title: 'Automation', description: 'Строим workflow: triggers, actions, branching.' },
    { number: '06', title: 'AI Layer', description: 'Добавляем AI только там, где он действительно даёт пользу.' },
    { number: '07', title: 'Testing', description: 'Проверяем edge cases, ошибки и нестандартные сценарии.' },
    { number: '08', title: 'Launch', description: 'Запускаем с мониторингом и логированием.' },
    { number: '09', title: 'Improve', description: 'Анализируем работу процесса и дорабатываем.' },
  ],

  ecosystemSection: { id: 'integrations', tag: 'ИНТЕГРАЦИИ', title: 'Соединяем сервисы в один процесс.', centerLabel: 'AUTOMATION' },
  ecosystem: [
    { id: 'crm', label: 'CRM', description: 'Битрикс24, amoCRM и другие системы через API или webhooks.' },
    { id: 'telegram', label: 'Telegram', description: 'Боты, уведомления, команды и внутренние рабочие интерфейсы.' },
    { id: 'email', label: 'Email', description: 'Маршрутизация, классификация, draft reply и follow-up.' },
    { id: 'sheets', label: 'Google Sheets', description: 'Чтение, запись и автоматическое обновление данных.' },
    { id: 'db', label: 'Database', description: 'Хранение и передача данных между системами.' },
    { id: 'ai', label: 'AI Models', description: 'Классификация, извлечение, генерация и суммаризация текста.' },
    { id: 'api', label: 'API / Webhooks', description: 'Интеграция с любой системой через стандартные протоколы.' },
    { id: 'website', label: 'Сайт / Форма', description: 'Приём данных с сайта как trigger для automation workflow.' },
    { id: 'analytics', label: 'Аналитика', description: 'Dashboards, alerts и автоматические отчёты.' },
  ],

  useCases: [
    { id: 'sales-teams', title: 'Отделы продаж', description: 'Обработка, квалификация и распределение лидов без ручного труда.' },
    { id: 'b2b', title: 'B2B', description: 'Работа с базами компаний и автоматизация outreach-процессов.' },
    { id: 'service-business', title: 'Сервисный бизнес', description: 'Автоматическая обработка заявок и первичное взаимодействие с клиентами.' },
    { id: 'operations', title: 'Operations', description: 'Внутренние процессы, уведомления и синхронизация данных.' },
    { id: 'data-heavy', title: 'Data-heavy бизнес', description: 'Сбор, обработка и доставка больших объёмов информации.' },
    { id: 'management', title: 'Управление', description: 'Автоматические отчёты, alerts и контроль ключевых показателей.' },
    { id: 'support', title: 'Customer Support', description: 'Первичная обработка типовых обращений и маршрутизация.' },
  ],

  saleSystemSection: {
    tag: 'WORKFLOW',
    title: 'Строим workflow вокруг бизнес-события.',
    flow: ['TRIGGER', 'LOGIC', 'AI', 'ACTION', 'RESULT'],
    conclusion: 'AI добавляется только там, где нужно анализировать текст, классифицировать данные или подготовить контент.',
  },
  saleSystemNodes: [
    { id: 'trigger', label: 'TRIGGER', description: 'Новая заявка, email, форма, изменение CRM, новая строка, документ, событие.' },
    { id: 'logic', label: 'LOGIC', description: 'Проверяем условия: тип, приоритет, канал, ответственный, данные.' },
    { id: 'ai', label: 'AI', description: 'Классификация, извлечение данных, определение приоритета, подготовка текста.' },
    { id: 'action', label: 'ACTION', description: 'Создание записи в CRM, задача, уведомление, email, запись в базу.' },
    { id: 'result', label: 'RESULT', description: 'CRM / Telegram / Email / Database / Dashboard / Manager.' },
  ],

  included: {
    base: [
      { label: 'Анализ процесса' },
      { label: 'Схема workflow' },
      { label: 'Определение trigger' },
      { label: 'Бизнес-логика и условия' },
      { label: 'API и webhook интеграции' },
      { label: 'AI layer и prompt design' },
      { label: 'Data processing' },
      { label: 'Тестирование и error handling' },
      { label: 'Логирование и мониторинг' },
    ],
    extra: [
      { label: 'CRM автоматизация' },
      { label: 'Telegram бот' },
      { label: 'Email маршрутизация' },
      { label: 'Document processing' },
      { label: 'Lead scoring' },
      { label: 'Knowledge base' },
      { label: 'Dashboard и alerts' },
      { label: 'Parser интеграция' },
    ],
  },

  leadSystem: {
    tag: 'AI + DATA',
    title: 'Собранные данные можно обрабатывать автоматически.',
    formula: [
      { operator: '', label: 'RAW DATA' },
      { operator: 'to', label: 'AI' },
      { operator: 'to', label: 'Classification · Summary · Priority' },
      { operator: '=', label: 'CRM / DASHBOARD', isResult: true },
    ],
    ctaLabel: 'Парсинг и сбор данных',
    ctaHref: '/services/web-scraping',
  },

  faq: [
    { question: 'Что можно автоматизировать с помощью AI?', answer: 'Процессы, где нужно анализировать текст, классифицировать данные, извлекать информацию, готовить ответы или помогать сотрудникам принимать решения.' },
    { question: 'Все ли процессы требуют AI?', answer: 'Нет. Многие задачи лучше решаются обычной автоматизацией без AI — быстрее, дешевле и предсказуемее. AI добавляется только там, где он даёт реальную пользу.' },
    { question: 'Можно ли подключить CRM?', answer: 'Да, если CRM поддерживает необходимую интеграцию или API. Мы работаем с Битрикс24, amoCRM и другими системами.' },
    { question: 'Можно ли подключить Telegram?', answer: 'Да. Telegram может использоваться для уведомлений, команд и внутренних рабочих интерфейсов.' },
    { question: 'Можно ли автоматизировать обработку заявок?', answer: 'Да. Система может принимать данные, классифицировать обращение, создавать запись в CRM и уведомлять менеджера.' },
    { question: 'Может ли AI отвечать клиентам?', answer: 'Да, но сценарий зависит от задачи. Для критичных процессов можно использовать согласование ответа человеком — AI готовит черновик.' },
    { question: 'Можно ли использовать собственные документы компании?', answer: 'Да. Можно создать AI-ассистента, который работает с подготовленной базой знаний компании.' },
    { question: 'Можно ли автоматизировать документы?', answer: 'Да. Возможность зависит от формата и структуры документов. Типичные задачи: извлечение данных, заполнение шаблонов, суммаризация.' },
    { question: 'Можно ли интегрировать существующий парсер?', answer: 'Да. Данные из системы сбора данных можно передавать в дальнейший automation workflow для обработки и использования.' },
  ],

  finalCta: {
    title: 'Какой процесс вы хотите автоматизировать?',
    description: 'Опишите, что сотрудники делают вручную. Мы разберём процесс и предложим архитектуру автоматизации.',
    benefits: ['Разберём текущий процесс', 'Предложим архитектуру workflow', 'Определим роль AI и интеграций'],
  },

  relatedServices: [
    { label: 'Парсинг данных', href: '/services/web-scraping' },
    { label: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
    { label: 'Telegram боты', href: '/services/telegram-bots' },
    { label: 'CRM интеграция', href: '/services/crm' },
  ],

  seo: {
    title: 'AI и автоматизация бизнеса | VOLTRENA Digital',
    description: 'Автоматизация бизнес-процессов с AI: обработка заявок, CRM, Telegram, документы, данные, интеграции и автоматические workflow.',
    canonical: '/services/ai-automation/',
  },
};


// --- TELEGRAM BOTS & MINI APPS -----------------------------------------------

export const telegramBotsData: ServicePageData = {
  slug: 'telegram-bots',
  eyebrow: 'TELEGRAM BOTS & MINI APPS',
  title: 'Превращаем Telegram в рабочий инструмент бизнеса.',
  subtitle: 'Создаём Telegram-сервисы, которые решают бизнес-задачи.',
  description: 'Разрабатываем Telegram-ботов и Mini Apps для заявок, продаж, клиентского сервиса, внутренних процессов и автоматизации — с подключением CRM, AI и внешних систем.',
  ctaPrimary: 'Обсудить Telegram-проект',
  ctaSecondary: 'Что можно сделать',
  ctaSecondaryHref: '#what-we-build',

  heroFlow: [
    { id: 'user', label: 'USER' },
    { id: 'telegram', label: 'TELEGRAM' },
    { id: 'bot-app', label: 'BOT / MINI APP' },
    { id: 'logic', label: 'BUSINESS LOGIC' },
    { id: 'crm-ai', label: 'CRM / AI / API' },
  ],

  typesSection: { id: 'what-we-build', tag: 'ВОЗМОЖНОСТИ', title: 'Что можно построить в Telegram.' },
  types: [
    {
      id: 'lead-bot',
      title: 'Lead Bot',
      description: 'Принимает заявку, квалифицирует обращение и моментально передаёт данные менеджеру или в CRM.',
      featured: true,
      items: [
        'Пошаговый опрос и валидация контактов',
        'Автоматическое создание сделки в CRM',
        'Моментальное уведомление дежурному менеджеру',
        'Персонализированное подтверждение клиенту',
      ],
    },
    {
      id: 'sales-bot',
      title: 'Sales Bot',
      description: 'Помогает выбрать подходящую услугу или продукт, рассчитывает условия и доводит пользователя до обращения.',
      items: ['Интерактивный подбор по параметрам', 'Презентация спецпредложений', 'Квалификация и передача в отдел продаж'],
    },
    {
      id: 'catalog-bot',
      title: 'Catalog Bot',
      description: 'Демонстрирует товары, категории, фото и характеристики без необходимости переходить на сторонний сайт.',
      items: ['Поиск и фильтрация по категориям', 'Карточки товаров с описанием и фото', 'Кнопка быстрого заказа или консультации'],
    },
    {
      id: 'calculator-bot',
      title: 'Calculator Bot',
      description: 'Собирает параметры заказа и рассчитывает предварительную стоимость по вашей индивидуальной формуле.',
      items: ['Пошаговый ввод характеристик', 'Прозрачный расчёт стоимости', 'Фиксация сметы в CRM'],
    },
    {
      id: 'booking-bot',
      title: 'Booking Bot',
      description: 'Онлайн-запись, бронирование слотов, подтверждение времени и автоматические напоминания клиентам.',
      items: ['Выбор свободных дат и времени', 'Синхронизация с календарём', 'Автоматические напоминания за час и за сутки'],
    },
    {
      id: 'support-bot',
      title: 'Support Bot',
      description: 'Принимает типовые обращения 24/7, отвечает на частые вопросы и маршрутизирует сложные задачи.',
      items: ['База ответов на частые вопросы', 'Сбор деталей инцидента', 'Бесшовный перевод на оператора'],
    },
    {
      id: 'internal-bot',
      title: 'Internal Bot',
      description: 'Мобильный интерфейс для сотрудников: карточки новых сделок, согласования счетов, отчёты и команды.',
      items: ['Уведомления о новых лидах в чат команды', 'Кнопки согласования для руководителей', 'Ежедневная сводка метрик бизнеса'],
    },
    {
      id: 'ai-assistant',
      title: 'AI Assistant',
      description: 'Нейросетевой ассистент по корпоративной базе знаний: консультирует клиентов и помогает менеджерам находить ответы.',
      items: ['Поиск по регламентам и документам', 'Генерация точных ответов по контексту', 'Контроль ограничений и правил общения'],
    },
    {
      id: 'mini-app',
      title: 'Telegram Mini App',
      description: 'Полноценное веб-приложение внутри Telegram: личный кабинет, сложный каталог, калькулятор с графическим UI.',
      items: ['Многоэкранный богатый интерфейс', 'Корзина, личный кабинет и статусы заказов', 'Интеграция с нативными функциями Telegram'],
    },
  ],

  processSection: { id: 'how-we-build', tag: 'ПРОЦЕСС', title: 'От задачи до рабочего Telegram-сервиса.' },
  process: [
    { number: '01', title: 'Business Task', description: 'Определяем бизнес-цель продукта: какие метрики улучшаем и какие действия автоматизируем.' },
    { number: '02', title: 'User Scenario', description: 'Прорабатываем путь пользователя: от первого запуска до целевого результата.' },
    { number: '03', title: 'Flow & UX', description: 'Проектируем логику диалога, сценарии ветвления и обработку нестандартных ответов.' },
    { number: '04', title: 'Interface', description: 'Выбираем формат: классический чат-бот, инлайн-кнопки, Mini App или их связка.' },
    { number: '05', title: 'Integrations', description: 'Подключаем CRM, базу данных, внешние API, платёжные шлюзы и AI-модели.' },
    { number: '06', title: 'Development', description: 'Разрабатываем серверную бизнес-логику с надёжным контролем состояний.' },
    { number: '07', title: 'Testing', description: 'Тестируем все ветки сценария, edge cases, отказоустойчивость и безопасность.' },
    { number: '08', title: 'Launch', description: 'Разворачиваем на отказоустойчивой инфраструктуре и настраиваем логирование.' },
    { number: '09', title: 'Improvement', description: 'Анализируем действия пользователей, находим точки отвала и совершенствуем продукт.' },
  ],

  ecosystemSection: {
    id: 'architecture',
    tag: 'АРХИТЕКТУРА',
    title: 'Бот — только верхний слой системы.',
    centerLabel: 'BACKEND',
  },
  ecosystem: [
    { id: 'crm', label: 'CRM', description: 'Синхронизация сделок, контактов, этапов воронки и задач.' },
    { id: 'database', label: 'Database', description: 'Хранение пользователей, состояний диалогов и истории заказов.' },
    { id: 'api', label: 'REST API', description: 'Обмен данными с сайтом, складом, ERP и внешними сервисами.' },
    { id: 'ai', label: 'AI Models', description: 'Обработка естественного языка, база знаний, классификация.' },
    { id: 'payments', label: 'Платёжные шлюзы', description: 'Приём платежей через Telegram Payments и эквайринг.' },
    { id: 'analytics', label: 'Аналитика', description: 'Отслеживание конверсий, воронок и действий пользователей.' },
    { id: 'notifications', label: 'Уведомления', description: 'Мгновенная доставка сервисных и системных сообщений.' },
    { id: 'automation', label: 'Automation', description: 'Запуск внешних сценариев и передача данных в рабочие цепочки.' },
  ],

  useCases: [
    { id: 'services', title: 'Сфера услуг', description: 'Приём заявок, онлайн-запись, калькулятор стоимости и напоминания клиентам.' },
    { id: 'b2b', title: 'B2B компании', description: 'Первичная квалификация обращений, лидогенерация и мобильное рабочее место менеджера.' },
    { id: 'ecommerce', title: 'E-commerce и ритейл', description: 'Каталог товаров, корзина, оформление заказов и уведомления о доставке.' },
    { id: 'operations', title: 'Внутренние процессы', description: 'Согласование документов, заявки от сотрудников, отчёты и командные уведомления.' },
    { id: 'data-monitoring', title: 'Мониторинг данных', description: 'Алерты об изменении цен конкурентов, новых объявлениях или событиях.' },
    { id: 'support', title: 'Служба поддержки', description: 'Автоматические ответы на типовые вопросы 24/7 и перевод на оператора.' },
    { id: 'communities', title: 'Клубы и обучение', description: 'Выдача контента, онбординг участников, платный доступ и навигация по материалам.' },
  ],

  included: {
    base: [
      { label: 'Анализ бизнес-задачи и сценариев' },
      { label: 'Проектирование структуры диалога' },
      { label: 'Архитектура бота и Mini App' },
      { label: 'Команды, меню, кнопки и формы' },
      { label: 'Валидация введённых данных' },
      { label: 'Серверная бизнес-логика' },
      { label: 'Интеграция с базой данных' },
      { label: 'Обработка ошибок и логирование' },
      { label: 'Развёртывание и тестирование' },
    ],
    extra: [
      { label: 'CRM интеграция (Битрикс24, amoCRM)' },
      { label: 'Telegram Mini App (React / Web UI)' },
      { label: 'AI-ассистент по базе знаний' },
      { label: 'Платёжные шлюзы и эквайринг' },
      { label: 'Telegram-алерты из веб-парсера' },
      { label: 'Многоуровневые права доступа' },
      { label: 'Личный кабинет клиента' },
      { label: 'Панель администратора' },
    ],
  },

  leadSystem: {
    tag: 'TELEGRAM + CRM',
    title: 'Бот может работать вместе с CRM.',
    formula: [
      { operator: '', label: 'CUSTOMER' },
      { operator: '→', label: 'TELEGRAM BOT' },
      { operator: '→', label: 'CRM PIPELINE' },
      { operator: '→', label: 'MANAGER NOTIFICATION' },
      { operator: '=', label: 'WORKING DEAL', isResult: true },
    ],
    ctaLabel: 'Обсудить интеграцию с CRM',
    ctaHref: '/contact',
  },

  faq: [
    {
      question: 'Чем Telegram-бот отличается от Mini App?',
      answer: 'Бот работает в основном через сообщения, кнопки и команды в чате. Mini App позволяет открыть полноценный веб-интерфейс прямо внутри Telegram — например, интерактивный каталог, сложный калькулятор, корзину или личный кабинет.',
    },
    {
      question: 'Можно ли подключить CRM?',
      answer: 'Да, если CRM поддерживает API или вебхуки. Мы регулярно настраиваем прямую интеграцию с Битрикс24, amoCRM и кастомными системами: данные лида сразу попадают на нужный этап воронки с привязкой менеджера.',
    },
    {
      question: 'Можно ли получать заявки в Telegram?',
      answer: 'Да. Бот собирает контактные данные, параметры заказа, квалифицирует клиента и отправляет готовую структурированную карточку лида менеджеру или в рабочий чат компании.',
    },
    {
      question: 'Можно ли добавить AI?',
      answer: 'Да. AI можно подключить для ответов по корпоративной базе знаний, распознавания естественного языка, суммаризации запросов клиентов или интеллектуальной классификации обращений.',
    },
    {
      question: 'Можно ли сделать каталог?',
      answer: 'Да. Для простого каталога с небольшим количеством позиций подходит кнопочное меню бота, а для сложного каталога с фильтрами, фотогалереями и корзиной оптимален Telegram Mini App.',
    },
    {
      question: 'Можно ли сделать калькулятор стоимости?',
      answer: 'Да, если правила расчёта можно формализовать. Бот или Mini App пошагово запрашивает параметры, рассчитывает итог по формуле и предлагает оформить заявку.',
    },
    {
      question: 'Можно ли использовать Telegram для сотрудников?',
      answer: 'Да. Telegram отлично работает как внутренний корпоративный интерфейс: оперативные уведомления о сделках, согласование счетов и скидок в 1 клик, генерация отчётов и запуск задач.',
    },
    {
      question: 'Можно ли подключить существующий сайт?',
      answer: 'Да. Сайт, Telegram-боты, CRM, системы сбора данных и автоматизация могут быть объединены в единую синхронизированную цифровую экосистему.',
    },
    {
      question: 'Что происходит, если бот не может ответить?',
      answer: 'В архитектуру закладывается сценарий Human Handoff: если вопрос выходит за рамки сценария или клиент просит оператора, диалог переводится на сотрудника с сохранением всей истории.',
    },
  ],

  relatedServices: [
    { label: 'ИИ и автоматизация', href: '/services/ai-automation' },
    { label: 'Создание сайтов', href: '/services/web-development' },
    { label: 'Парсинг данных', href: '/services/web-scraping' },
    { label: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
  ],

  finalCta: {
    title: 'Что должен делать ваш Telegram-сервис?',
    description: 'Опишите задачу. Мы предложим сценарий, архитектуру и определим, нужен обычный бот, Mini App или связка нескольких инструментов.',
    benefits: ['Проанализируем задачу и сценарии', 'Предложим архитектуру Bot / Mini App', 'Рассчитаем интеграции с CRM и API'],
  },

  seo: {
    title: 'Разработка Telegram-ботов и Mini Apps | VOLTRENA Digital',
    description: 'Разрабатываем Telegram-ботов и Mini Apps для бизнеса: заявки, каталоги, калькуляторы, AI, CRM, уведомления и автоматизация процессов.',
    canonical: '/services/telegram-bots/',
  },
};


// --- ANALYTICS & BI ----------------------------------------------------------

export const analyticsData: ServicePageData = {
  slug: 'analytics',
  eyebrow: 'ANALYTICS & BI',
  title: 'Показываем, какие каналы реально приводят продажи.',
  subtitle: 'Система, которая показывает, откуда приходят деньги.',
  description: 'Соединяем рекламу, сайт, заявки и CRM в единую систему аналитики, чтобы бизнес видел не только клики, но и стоимость обращения, качество лидов и фактический результат продаж.',
  ctaPrimary: 'Обсудить аналитику',
  ctaSecondary: 'Что можно измерять',
  ctaSecondaryHref: '#what-to-measure',

  heroFlow: [
    { id: 'traffic', label: 'TRAFFIC / ADS' },
    { id: 'website', label: 'WEBSITE' },
    { id: 'lead', label: 'LEAD' },
    { id: 'crm', label: 'CRM' },
    { id: 'dashboard', label: 'DASHBOARD' },
  ],

  typesSection: { id: 'what-to-measure', tag: 'МЕТРИКИ', title: 'От трафика до выручки.' },
  types: [
    {
      id: 'traffic',
      title: 'Трафик и источники',
      description: 'Визиты, рекламные каналы, кампании, поисковые фразы, устройства и география посетителей.',
      featured: true,
      items: [
        'Яндекс Директ, SEO, Telegram, карты, B2B-аутрич',
        'UTM-разметка и сквозная идентификация Client ID',
        'Отказы, глубина просмотра и время на сайте',
        'Анализ мобильного и десктопного трафика',
      ],
    },
    {
      id: 'engagement',
      title: 'Поведение и действия',
      description: 'Просмотры ключевых страниц, клики по кнопкам, глубина скролла, открытие форм и переходы в мессенджеры.',
      items: ['События и микроконверсии', 'Клик по номеру телефона / email', 'Запуск Telegram-бота / Mini App'],
    },
    {
      id: 'leads',
      title: 'Заявки и лидогенерация',
      description: 'Формы на сайте, звонки с коллтрекинга, диалоги в Telegram, обратные звонки и прямые обращения.',
      items: ['Фиксация источника каждого лида', 'Учёт ассоциированных конверсий', 'Отсечение спама и дубликатов'],
    },
    {
      id: 'sales',
      title: 'Продажи и выручка',
      description: 'Квалифицированные лиды, созданные сделки в CRM, выигранные заказы, средний чек и итоговый доход.',
      items: ['Движение по этапам воронки', 'Конверсия каждого менеджера', 'Фактическая выручка по каналам'],
    },
    {
      id: 'unit-economy',
      title: 'Юнит-экономика и окупаемость',
      description: 'Расчёт CPC, CPL, стоимости квалифицированного лида (SQL), CAC и окупаемости инвестиций в маркетинг (ROMI / ROAS).',
      items: ['Стоимость заявки по кампаниям', 'Стоимость привлечения клиента', 'Расчёт ROMI и окупаемости рекламы'],
    },
    {
      id: 'attribution',
      title: 'Сквозная атрибуция',
      description: 'Связываем первое касание клиента с повторными покупками и LTV даже при длинном цикле принятия решений.',
      items: ['Многоканальные последовательности', 'Учёт отложенных конверсий', 'Оценка вклада каждого источника'],
    },
  ],

  processSection: { id: 'how-we-build', tag: 'ПРОЦЕСС', title: 'Как мы внедряем сквозную аналитику.' },
  process: [
    { number: '01', title: 'Business Questions', description: 'Определяем, на какие ключевые вопросы бизнеса должна отвечать аналитика.' },
    { number: '02', title: 'Data Audit', description: 'Проверяем текущие счетчики, разметку сайта, корректность целей и поля CRM.' },
    { number: '03', title: 'Tracking Setup', description: 'Настраиваем события Яндекс Метрики, цели, отслеживание форм, кнопок и звонков.' },
    { number: '04', title: 'CRM Integration', description: 'Связываем передачу UTM-меток, Client ID и рекламных источников в сделки CRM.' },
    { number: '05', title: 'Data Pipeline', description: 'Настраиваем автоматический сбор и выгрузку данных из рекламных кабинетов и CRM.' },
    { number: '06', title: 'Data Model', description: 'Определяем формулы расчёта стоимости лида (CPL), конверсий, среднего чека и окупаемости.' },
    { number: '07', title: 'Dashboard Build', description: 'Проектируем наглядный дашборд с ключевыми KPI для собственника и маркетолога.' },
    { number: '08', title: 'Data Validation', description: 'Проверяем сходимость цифр между CRM, рекламными кабинетами и фактической выручкой.' },
    { number: '09', title: 'Improvement', description: 'Анализируем первые отчеты, настраиваем Telegram-алерты и обучаем команду работе с данными.' },
  ],

  ecosystemSection: {
    id: 'architecture',
    tag: 'АРХИТЕКТУРА',
    title: 'Единая экосистема аналитических данных.',
    centerLabel: 'DATA MODEL',
  },
  ecosystem: [
    { id: 'direct', label: 'Яндекс Директ', description: 'Расходы, показы, клики, CPC и ключевые фразы.' },
    { id: 'metrica', label: 'Яндекс Метрика', description: 'Сессии, Client ID, цели, отказы и поведение пользователей.' },
    { id: 'crm', label: 'CRM (amo / Битрикс)', description: 'Статусы лидов, этапы сделок, менеджеры и выручка.' },
    { id: 'calltracking', label: 'Call Tracking', description: 'Динамическая подмена номеров и привязка звонков к источникам.' },
    { id: 'telegram', label: 'Telegram Analytics', description: 'События в ботах, запуск Mini Apps и обращения в чат.' },
    { id: 'database', label: 'Data Warehouse', description: 'Централизованное хранение и обработка данных (PostgreSQL / ClickHouse).' },
    { id: 'dashboard', label: 'Executive Dashboard', description: 'Наглядные интерактивные графики и управленческие отчеты.' },
    { id: 'alerts', label: 'Telegram Alerts', description: 'Автоматические уведомления об аномалиях и ежедневные сводки.' },
  ],

  useCases: [
    { id: 'services', title: 'Сфера услуг', description: 'Стоимость и качество заявок по каждому направлению, контроль работы администраторов.' },
    { id: 'b2b', title: 'B2B компании', description: 'Длинная воронка продаж: от первого контакта и КП до оплаты и повторных сделок.' },
    { id: 'ecommerce', title: 'E-commerce и магазины', description: 'Сквозная цепочка: Реклама → Корзина → Заказ → Оплата → Фактическая выручка.' },
    { id: 'construction', title: 'Строительство и ремонт', description: 'Разделение лидов по объектам, расчет стоимости договора и окупаемости рекламы.' },
    { id: 'equipment', title: 'Продажа оборудования', description: 'Сравнение конверсий по категориям техники и отслеживание крупных сделок.' },
    { id: 'agencies', title: 'Маркетинговые команды', description: 'Контроль рекламных бюджетов, оценка эффективности подрядчиков и каналов.' },
    { id: 'management', title: 'Руководители и инвесторы', description: 'Единый экран с ключевыми показателями роста бизнеса без ручных отчетов.' },
  ],

  included: {
    base: [
      { label: 'Аудит текущих источников данных' },
      { label: 'Настройка счетчиков Яндекс Метрики' },
      { label: 'Настройка целей и ключевых событий' },
      { label: 'Сквозная UTM-разметка всех каналов' },
      { label: 'Передача меток и Client ID в CRM' },
      { label: 'Настройка воронки статусов в CRM' },
      { label: 'Построение базового дашборда' },
      { label: 'Валидация точности передачи данных' },
      { label: 'Инструкция по работе с дашбордом' },
    ],
    extra: [
      { label: 'Интеграция динамического коллтрекинга' },
      { label: 'Расчёт окупаемости рекламы (ROAS / ROMI)' },
      { label: 'Автоматические отчеты в Telegram / Email' },
      { label: 'Алерты о сбоях и резких скачках CPL' },
      { label: 'Аналитика Telegram-ботов и Mini Apps' },
      { label: 'AI-суммаризация отчетов и аномалий' },
      { label: 'Кастомные SQL / BI модели данных' },
      { label: 'Регулярное сопровождение и аналитика' },
    ],
  },

  leadSystem: {
    tag: 'ЯНДЕКС ДИРЕКТ + АНАЛИТИКА',
    title: 'Оптимизируем рекламу по качеству заявок.',
    formula: [
      { operator: '', label: 'KEYWORD & AD' },
      { operator: '→', label: 'WEBSITE VISIT' },
      { operator: '→', label: 'CRM QUALIFIED LEAD' },
      { operator: '→', label: 'WON DEAL' },
      { operator: '=', label: 'PRECISE BIDDING & ROI', isResult: true },
    ],
    ctaLabel: 'Настройка Яндекс Директ',
    ctaHref: '/services/yandex-direct',
  },

  faq: [
    {
      question: 'Что такое сквозная аналитика?',
      answer: 'Это система, которая объединяет данные рекламных каналов, поведение посетителей на сайте и фактические продажи из CRM. Она позволяет точно увидеть, сколько прибыли принесло каждое рекламное объявление.',
    },
    {
      question: 'Обязательно ли нужна CRM?',
      answer: 'Для оценки реальной окупаемости рекламы CRM крайне желательна, так как именно в ней фиксируются статусы квалификации лидов, отказы и реальная выручка по закрытым сделкам.',
    },
    {
      question: 'Можно ли начать только с Яндекс Метрики?',
      answer: 'Да. Можно начать с корректной базовой аналитики (цели, формы, звонки, UTM-метки) и затем подключить CRM и дашборды для полноценной сквозной цепочки.',
    },
    {
      question: 'Можно ли учитывать звонки?',
      answer: 'Да, при подключении динамического коллтрекинга входящие звонки связываются с рекламной кампанией, ключевой фразой и Client ID пользователя, после чего попадают в CRM.',
    },
    {
      question: 'Можно ли видеть стоимость продажи?',
      answer: 'Да. При наличии данных о рекламных расходах и суммах закрытых сделок система рассчитывает CAC (Customer Acquisition Cost) и ROMI по каждому каналу.',
    },
    {
      question: 'Можно ли создать dashboard?',
      answer: 'Да. Мы проектируем кастомные интерактивные дашборды, где ключевые показатели бизнеса (лиды, CPL, конверсии, выручка, воронка) обновляются автоматически.',
    },
    {
      question: 'Можно ли получать отчёты в Telegram?',
      answer: 'Да. Можно настроить регулярную утреннюю или вечернюю сводку ключевых показателей и мгновенные алерты о резких изменениях CPL прямо в рабочий Telegram-чат.',
    },
    {
      question: 'Можно ли связать аналитику с Яндекс Директом?',
      answer: 'Да. Связка Директа, Метрики и CRM позволяет передавать данные об оффлайн-конверсиях обратно в рекламные кампании для автостратегий по квалифицированным лидам.',
    },
    {
      question: 'Сколько источников можно подключить?',
      answer: 'Ограничений нет. Мы объединяем Яндекс Директ, SEO, Telegram-ботов, формы сайта, коллтрекинг, CRM, базы данных и внешние сервисы через API.',
    },
  ],

  relatedServices: [
    { label: 'Яндекс Директ', href: '/services/yandex-direct' },
    { label: 'CRM интеграция', href: '/services/crm' },
    { label: 'Создание сайтов', href: '/services/web-development' },
    { label: 'Telegram боты', href: '/services/telegram-bots' },
    { label: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
  ],

  finalCta: {
    title: 'Какие цифры вам действительно нужны для управления бизнесом?',
    description: 'Расскажите, где сейчас находятся данные о рекламе, заявках и продажах. Мы предложим архитектуру аналитики и понятный управленческий dashboard.',
    benefits: ['Проведём аудит текущей аналитики', 'Предложим архитектуру сбора данных', 'Спроектируем дашборд под ваши задачи'],
  },

  seo: {
    title: 'Сквозная аналитика и дашборды | VOLTRENA Digital',
    description: 'Связываем рекламу, сайт, заявки и CRM в единую систему аналитики. Метрика, UTM, продажи, CPL, ROMI, дашборды и автоматические отчёты.',
    canonical: '/services/analytics/',
  },
};


// --- CRM INTEGRATION ---------------------------------------------------------

export const crmData: ServicePageData = {
  slug: 'crm',
  eyebrow: 'CRM & SALES AUTOMATION',
  title: 'Превращаем CRM в работающую систему продаж.',
  subtitle: 'CRM — это не просто записная книжка, а двигатель сделок.',
  description: 'Внедряем и настраиваем amoCRM и Битрикс24: связываем с сайтом, рекламой, Telegram и телефонией, автоматизируем воронку и исключаем потерю клиентов.',
  ctaPrimary: 'Обсудить внедрение CRM',
  ctaSecondary: 'Что входит в настройку',
  ctaSecondaryHref: '#what-we-configure',

  heroFlow: [
    { id: 'lead', label: 'LEAD / TRAFFIC' },
    { id: 'crm', label: 'CRM PIPELINE' },
    { id: 'auto', label: 'AUTOMATION' },
    { id: 'sales', label: 'SALES TEAM' },
    { id: 'revenue', label: 'REVENUE' },
  ],

  typesSection: { id: 'what-we-configure', tag: 'ВОЗМОЖНОСТИ', title: 'Что мы настраиваем в CRM.' },
  types: [
    {
      id: 'pipeline',
      title: 'Воронка и этапы продаж',
      description: 'Проектируем логику стадий сделки под специфику вашего бизнеса, исключая зависание лидов.',
      featured: true,
      items: [
        'Понятные регламенты перехода сделок между стадиями',
        'Обязательные поля и контроль заполнения данных',
        'Автоматическая постановка задач ответственным менеджерам',
        'Исключение забытых клиентов и просроченных действий',
      ],
    },
    {
      id: 'channels',
      title: 'Интеграция каналов связи',
      description: 'Подключаем все точки входа: сайт, формы, Telegram, WhatsApp, входящие звонки и почту.',
      items: ['Мгновенное создание сделок без ручного ввода', 'Сохранение всей переписки и записей звонков в карточке', 'Автоматическое распределение лидов по менеджерам'],
    },
    {
      id: 'automation',
      title: 'Автоматические сценарии',
      description: 'Автоматические задачи, SMS/Telegram уведомления клиентам, смена ответственных и контроль сроков.',
      items: ['Автоматические напоминания о перезвоне', 'Генерация счетов и коммерческих предложений', 'Информирование клиентов о статусе заказа'],
    },
    {
      id: 'telephony',
      title: 'Телефония и коллтрекинг',
      description: 'Интеграция IP-телефонии, запись разговоров, всплывающая карточка клиента при звонке и статистика.',
      items: ['Звонок в 1 клик прямо из карточки CRM', 'Привязка разговора к истории клиента', 'Контроль пропущенных звонков'],
    },
    {
      id: 'documents',
      title: 'Генерация документов',
      description: 'Автоматическое формирование счетов, договоров, актов и КП по вашим шаблонам за 10 секунд.',
      items: ['Автозаполнение реквизитов по ИНН', 'Отправка документов клиенту в мессенджер', 'Фиксация статуса оплаты'],
    },
    {
      id: 'analytics',
      title: 'Отчёты и контроль KPI',
      description: 'Наглядные дашборды по конверсии менеджеров, среднему чеку, причинам отказов и планам продаж.',
      items: ['Сквозной контроль воронки продаж', 'Анализ эффективности каждого сотрудника', 'Прозрачный прогноз выполнения плана'],
    },
  ],

  processSection: { id: 'how-we-build', tag: 'ПРОЦЕСС', title: 'Как мы внедряем CRM.' },
  process: [
    { number: '01', title: 'Sales Audit', description: 'Разбираем ваш текущий процесс продаж: как приходят лиды, как общаются менеджеры и где теряются клиенты.' },
    { number: '02', title: 'Architecture', description: 'Проектируем воронки, карточки сделок, статусы, права доступа и схему автоматизации.' },
    { number: '03', title: 'Base Setup', description: 'Создаём и настраиваем поля, этапы, доступы сотрудников и структуру отделов.' },
    { number: '04', title: 'Integrations', description: 'Подключаем сайт, рекламу, телефонию, Telegram, почту и платёжные сервисы.' },
    { number: '05', title: 'Automation', description: 'Настраиваем автозадачи, триггеры, перемещения сделок и уведомления.' },
    { number: '06', title: 'Templates', description: 'Загружаем шаблоны КП, счетов и договоров для автогенерации.' },
    { number: '07', title: 'Testing', description: 'Тестируем прохождение всех типов заявок, звонков и сценариев в реальном времени.' },
    { number: '08', title: 'Team Training', description: 'Обучаем менеджеров и руководителей работе в системе, записываем видеоинструкции.' },
    { number: '09', title: 'Support', description: 'Сопровождаем запуск, контролируем соблюдение регламентов и дорабатываем сценарии.' },
  ],

  ecosystemSection: {
    id: 'architecture',
    tag: 'ИНТЕГРАЦИИ',
    title: 'CRM как центр цифровой экосистемы.',
    centerLabel: 'CRM CORE',
  },
  ecosystem: [
    { id: 'website', label: 'Сайт и Формы', description: 'Моментальная передача заявок с UTM-метками и Client ID.' },
    { id: 'telephony', label: 'IP-Телефония', description: 'Запись звонков, всплывающие карточки и история обращений.' },
    { id: 'telegram', label: 'Telegram & Боты', description: 'Диалоги с клиентами и уведомления менеджерам прямо в чат.' },
    { id: 'email', label: 'Корпоративная почта', description: 'Автоматическая привязка писем к сделкам и шаблоны ответов.' },
    { id: 'direct', label: 'Реклама и Директ', description: 'Передача оффлайн-конверсий для обучения автостратегий.' },
    { id: 'accounting', label: '1С и Бухгалтерия', description: 'Синхронизация счетов, оплат, остатков и номенклатуры.' },
    { id: 'analytics', label: 'Сквозная аналитика', description: 'Сведение расходов на рекламу и реальной выручки по сделкам.' },
    { id: 'ai', label: 'AI-Ассистенты', description: 'Интеллектуальная оценка лидов и подготовка черновиков ответов.' },
  ],

  useCases: [
    { id: 'services', title: 'Услуги и сервис', description: 'Учёт обращений, фиксация договоренностей, контроль оплат и регулярные напоминания.' },
    { id: 'b2b', title: 'B2B продажи', description: 'Длинный цикл сделки, множество ЛПР, генерация КП и согласование условий.' },
    { id: 'real-estate', title: 'Недвижимость и стройка', description: 'Распределение объектов, фиксация показов, броней и этапов сделок.' },
    { id: 'ecommerce', title: 'Оптовые и онлайн-продажи', description: 'Быстрая обработка заказов, синхронизация со складом и контроль доставки.' },
    { id: 'education', title: 'Онлайн-школы и курсы', description: 'Автоматический онбординг, контроль оплат и напоминания об уроках.' },
    { id: 'production', title: 'Производство', description: 'Отслеживание этапов выполнения заказа, расчёт себестоимости и документооборот.' },
    { id: 'agencies', title: 'Агентства', description: 'Проектная работа, учёт задач, счетов и продлений контрактов.' },
  ],

  included: {
    base: [
      { label: 'Аудит процесса продаж' },
      { label: 'Проектирование структуры воронки' },
      { label: 'Настройка этапов и полей' },
      { label: 'Подключение форм сайта' },
      { label: 'Интеграция корпоративной почты' },
      { label: 'Настройка базовых автозадач' },
      { label: 'Настройка прав сотрудников' },
      { label: 'Тестирование передачи данных' },
      { label: 'Обучение команды' },
    ],
    extra: [
      { label: 'Интеграция IP-телефонии' },
      { label: 'Подключение Telegram и WhatsApp' },
      { label: 'Автогенерация КП и счетов' },
      { label: 'Сквозная UTM-разметка лидов' },
      { label: 'AI-скоринг и классификация лидов' },
      { label: 'Синхронизация с 1С / МойСклад' },
      { label: 'Дашборд аналитики продаж' },
      { label: 'Техническая поддержка и ведение' },
    ],
  },

  leadSystem: {
    tag: 'CRM + АВТОМАТИЗАЦИЯ',
    title: 'Чем меньше рутины — тем выше конверсия в продажу.',
    formula: [
      { operator: '', label: 'LEAD INFLOW' },
      { operator: '→', label: 'INSTANT CRM CAPTURE' },
      { operator: '→', label: 'AUTOMATED FOLLOW-UP' },
      { operator: '→', label: 'FOCUSED SALES TEAM' },
      { operator: '=', label: 'PREDICTABLE REVENUE GROWTH', isResult: true },
    ],
    ctaLabel: 'Обсудить проект автоматизации',
    ctaHref: '/contact',
  },

  faq: [
    {
      question: 'Что лучше: amoCRM или Битрикс24?',
      answer: 'amoCRM идеально подходит для фокусировки на продажах, быстрой обработки лидов и удобства менеджеров. Битрикс24 — мощный комбайн для управления проектами, задачами, внутренними документами и сложными процессами. Мы подбираем систему под ваши цели.',
    },
    {
      question: 'Сколько времени занимает внедрение CRM?',
      answer: 'Базовая настройка занимает от 5 до 10 рабочих дней. Комплексные проекты с интеграциями телефонии, 1С, автогенерацией документов и обучением занимают от 2 до 4 недель.',
    },
    {
      question: 'Как менеджеры адаптируются к новой системе?',
      answer: 'Мы проводим обучение, записываем понятные скринкасты-видеоинструкции и настраиваем интерфейс без лишних кнопок, чтобы сотрудники начали работать с первого дня.',
    },
    {
      question: 'Можно ли подключить сайт и Telegram?',
      answer: 'Да. Все заявки с форм сайта, квизов, чатов и Telegram-ботов попадают в CRM автоматически за 1 секунду с указанием рекламного источника.',
    },
    {
      question: 'Можно ли автоматически создавать счета и договоры?',
      answer: 'Да. Мы настраиваем генерацию документов в 1 клик: реквизиты, суммы и наименования подставляются из карточки сделки автоматически.',
    },
    {
      question: 'Поможет ли CRM сократить потери лидов?',
      answer: 'Да. Автоматические задачи не позволяют менеджеру забыть про клиента, а руководитель видит все сделки без движения в режиме реального времени.',
    },
    {
      question: 'Можно ли связать CRM со сквозной аналитикой?',
      answer: 'Да. Передача Client ID и UTM-меток позволяет точно рассчитать окупаемость рекламы до реальной оплаченной выручки.',
    },
    {
      question: 'Что происходит после внедрения?',
      answer: 'Мы сопровождаем запуск, отвечаем на вопросы команды и при необходимости берем систему на регулярное техническое обслуживание.',
    },
  ],

  relatedServices: [
    { label: 'Сквозная аналитика', href: '/services/analytics' },
    { label: 'ИИ и автоматизация', href: '/services/ai-automation' },
    { label: 'Telegram боты', href: '/services/telegram-bots' },
    { label: 'Яндекс Директ', href: '/services/yandex-direct' },
    { label: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
  ],

  finalCta: {
    title: 'Готовы навести порядок в продажах?',
    description: 'Опишите ваш текущий процесс продаж. Мы проведём аудит и предложим оптимальную архитектуру CRM-системы.',
    benefits: ['Проведём аудит воронки продаж', 'Подберём систему (amoCRM / Битрикс24)', 'Рассчитаем интеграции и автоматизацию'],
  },

  seo: {
    title: 'Внедрение и настройка CRM | VOLTRENA Digital',
    description: 'Внедрение amoCRM и Битрикс24: автоматизация продаж, интеграция с сайтом, рекламой, телефонией и Telegram. Сквозной контроль воронки.',
    canonical: '/services/crm/',
  },
};


// --- SEO & GEO / AI SEARCH VISIBILITY ----------------------------------------

export const seoGeoData: ServicePageData = {
  slug: 'seo-geo',
  eyebrow: 'SEO / GEO',
  title: 'Делаем бизнес заметным в поиске и AI-ответах.',
  subtitle: 'Система органической видимости бизнеса в классическом и AI-поиске.',
  description: 'Строим органическую видимость: от семантики и технического SEO до контента, структуры сайта и присутствия бренда в новых AI-интерфейсах поиска.',
  ctaPrimary: 'Обсудить продвижение',
  ctaSecondary: 'Как мы работаем',
  ctaSecondaryHref: '#how-we-work',

  heroFlow: [
    { id: 'demand', label: 'SEARCH DEMAND' },
    { id: 'structure', label: 'STRUCTURE & TECH' },
    { id: 'content', label: 'EXPERT CONTENT' },
    { id: 'entity', label: 'ENTITY & BRAND' },
    { id: 'visibility', label: 'SEARCH + AI VISIBILITY' },
  ],

  typesSection: { id: 'search-demand', tag: 'СПРОС И НАМЕРЕНИЯ', title: 'Сначала изучаем, что действительно ищут люди.' },
  types: [
    {
      id: 'commercial',
      title: 'Коммерческий спрос (Commercial Intent)',
      description: 'Запросы с явным намерением покупки: «купить», «заказать», «цена», «стоимость разработки», «поставщик оптом».',
      featured: true,
      items: [
        'Посадочные страницы услуг и категорий',
        'Прозрачные коммерческие блоки, цены и формы',
        'Быстрый путь пользователя от запроса к заявке',
        'Оптимизация под конверсионные гео-запросы',
      ],
    },
    {
      id: 'comparison',
      title: 'Сравнительный спрос (Comparison Intent)',
      description: 'Пользователи выбирают между решениями и поставщиками: «лучшие системы», «сравнение вариантов», «рейтинг подрядчиков».',
      items: ['Сравнительные таблицы и матрицы выбора', 'Объективный разбор плюсов и ограничений', 'Помощь в принятии решения до контакта'],
    },
    {
      id: 'informational',
      title: 'Экспертный спрос (Informational Intent)',
      description: 'Вопросы «как выбрать», «что такое», «почему не работает», «пошаговое руководство» и отраслевые термины.',
      items: ['Глубокие практические гайды и инструкции', 'Кластерная структура связанных тем', 'Формирование экспертности бренда'],
    },
    {
      id: 'local',
      title: 'Локальный спрос (Local & Maps)',
      description: 'Поиск компаний на картах и по конкретным городам: Яндекс Карты, 2ГИС, гео-привязка и филиалы.',
      items: ['Оптимизация профилей в гео-сервисах', 'Синхронизация данных об адресах и телефонах', 'Работа с отзывами и рейтингом'],
    },
    {
      id: 'technical',
      title: 'Технический фундамент (Technical SEO)',
      description: 'Индексация, скорость загрузки, мобильная адаптивность, канонические URL, robots.txt и XML-карты сайта.',
      items: ['Безупречная индексация поисковыми роботами', 'Core Web Vitals и высокая скорость рендера', 'Исключение дублей и битых страниц'],
    },
    {
      id: 'structured',
      title: 'Микроразметка данных (Schema.org)',
      description: 'Структурированные данные для поисковых систем и AI-агентов: Organization, Service, FAQ, Breadcrumbs, Product.',
      items: ['Понятные сущности для поисковых ботов', 'Формирование расширенных сниппетов (Rich Snippets)', 'Готовность к парсингу AI-моделями'],
    },
  ],

  processSection: { id: 'how-we-work', tag: 'ПРОЦЕСС', title: 'SEO — это процесс, а не разовая настройка.' },
  process: [
    { number: '01', title: 'Audit & Analysis', description: 'Диагностика сайта: технические ошибки, индексация, текущая видимость и конкуренты.' },
    { number: '02', title: 'Search Demand', description: 'Сбор семантики, кластеризация запросов и анализ коммерческих и информационных интентов.' },
    { number: '03', title: 'Architecture', description: 'Проектирование структуры разделов и посадочных страниц под все группы спроса.' },
    { number: '04', title: 'Technical SEO', description: 'Устранение технических барьеров, настройка редиректов, canonical, sitemap и скорости.' },
    { number: '05', title: 'Commercial Content', description: 'Создание и оптимизация коммерческих страниц услуг с понятными ответами и офферами.' },
    { number: '06', title: 'Entity & GEO', description: 'Внедрение микроразметки Schema.org, единого цифрового профиля бренда и AI-ready данных.' },
    { number: '07', title: 'Authority & Footprint', description: 'Развитие внешнего присутствия: отраслевые каталоги, профили, упоминания и гео-сервисы.' },
    { number: '08', title: 'Analytics & Tracking', description: 'Сквозной мониторинг поисковых запросов, органического трафика, позиций и целевых заявок.' },
    { number: '09', title: 'Continuous Growth', description: 'Регулярное расширение структуры, поиск Content Gap и адаптация под обновления алгоритмов.' },
  ],

  ecosystemSection: {
    id: 'architecture',
    tag: 'АРХИТЕКТУРА САЙТА',
    title: 'Хорошее SEO начинается со структуры сайта.',
    centerLabel: 'HOMEPAGE',
  },
  ecosystem: [
    { id: 'categories', label: 'Категории услуг', description: 'Основные направления бизнеса, группирующие посадочные страницы.' },
    { id: 'services', label: 'Страницы услуг', description: 'Детальные коммерческие страницы под конкретные поисковые интенты.' },
    { id: 'usecases', label: 'Отраслевые решения', description: 'Специализированные страницы под отрасли (B2B, E-commerce, Услуги).' },
    { id: 'knowledge', label: 'База знаний & Статьи', description: 'Экспертные руководства и разбор сложных профессиональных вопросов.' },
    { id: 'faq', label: 'FAQ кластеры', description: 'Прямые ответы на частые вопросы с микроразметкой FAQPage.' },
    { id: 'entity', label: 'Профиль компании', description: 'Страницы «О нас», контакты, реквизиты и реквизиты сущности бренда.' },
    { id: 'maps', label: 'Гео-профили', description: 'Связка сайта с профилями в Яндекс Картах, 2ГИС и локальными страницами.' },
    { id: 'linking', label: 'Внутренняя перелинковка', description: 'Логичные сквозные связи между смежными услугами и статьями.' },
  ],

  useCases: [
    { id: 'services', title: 'Сфера услуг', description: 'Органический поиск целевых клиентов на коммерческие услуги и консультации.' },
    { id: 'b2b', title: 'B2B и оптовые поставки', description: 'Поиск надежных поставщиков, производителей и подрядчиков с длинным циклом сделки.' },
    { id: 'ecommerce', title: 'E-commerce и каталоги', description: 'Продвижение категорий, фильтров, карточек товаров и брендовых линеек.' },
    { id: 'manufacturing', title: 'Производство и оборудование', description: 'Видимость узкоспециализированной номенклатуры, характеристик и чертежей.' },
    { id: 'local', title: 'Локальный бизнес', description: 'Привлечение клиентов в конкретных городах через органику и гео-сервисы.' },
    { id: 'expert', title: 'Экспертный бизнес', description: 'Формирование авторитета через глубокие гайды, исследования и ответы на сложные вопросы.' },
    { id: 'new-market', title: 'Выход на новый рынок', description: 'Анализ спроса, архитектура посадочных страниц и быстрый старт органической видимости.' },
  ],

  included: {
    base: [
      { label: 'Комплексный SEO-аудит сайта' },
      { label: 'Сбор и кластеризация семантики' },
      { label: 'Проектирование структуры посадочных страниц' },
      { label: 'Техническая оптимизация (robots, sitemap, meta)' },
      { label: 'Оптимизация коммерческих страниц' },
      { label: 'Внедрение микроразметки Schema.org' },
      { label: 'Внутренняя перелинковка' },
      { label: 'Настройка панелей вебмастеров (Яндекс / Google)' },
      { label: 'Регулярная аналитика видимости' },
    ],
    extra: [
      { label: 'Оптимизация под AI-поиск (GEO / Citations)' },
      { label: 'Оптимизация профилей в Яндекс Картах и 2ГИС' },
      { label: 'Создание экспертных кластеров контента' },
      { label: 'Анализ Content Gap конкурентов' },
      { label: 'Сквозная связка с CRM и сквозной аналитикой' },
      { label: 'Работа с внешним профилем бренда и упоминаниями' },
      { label: 'Оптимизация скорости рендера (Core Web Vitals)' },
      { label: 'Ежемесячное стратегическое сопровождение' },
    ],
  },

  leadSystem: {
    tag: 'SEO + САЙТ',
    title: 'Проще продвигать сайт, который изначально спроектирован правильно.',
    formula: [
      { operator: '', label: 'SEARCH DEMAND' },
      { operator: '→', label: 'CLEAN SITE ARCHITECTURE' },
      { operator: '→', label: 'OPTIMIZED COMMERCIAL PAGES' },
      { operator: '→', label: 'INDEXING & AI VISIBILITY' },
      { operator: '=', label: 'STEADY ORGANIC TRAFFIC & LEADS', isResult: true },
    ],
    ctaLabel: 'Создание сайтов',
    ctaHref: '/services/web-development',
  },

  faq: [
    {
      question: 'Чем SEO отличается от GEO?',
      answer: 'SEO (Search Engine Optimization) направлено на органическую видимость в классических поисковых системах (Яндекс, Google). GEO (Generative Engine Optimization) фокусируется на понятности и структуре данных для генеративных поисковых моделей и AI-ассистентов. На практике это две стороны одной единой стратегии цифрового присутствия.',
    },
    {
      question: 'Можно ли гарантировать вывод в топ-10?',
      answer: 'Нет. Поисковые алгоритмы закрыты и регулярно обновляются, а позиции зависят от десятков внешних факторов и действий конкурентов. Мы не даём пустых обещаний, а системно устраняем технические ошибки, расширяем релевантный контент и строим авторитет сайта.',
    },
    {
      question: 'Когда SEO начинает давать ощутимый результат?',
      answer: 'SEO обладает накопительным эффектом. Первые результаты по низкочастотным запросам и индексации обычно заметны через 1–2 месяца, а устойчивый рост целевого органического трафика формируется в течение 3–6 месяцев системной работы.',
    },
    {
      question: 'Что такое AI Search Visibility?',
      answer: 'Это подготовка информации о компании, услугах и экспертизе в таком формате, чтобы поисковые системы и AI-модели могли легко распознать сущность бренда, подтвердить факты и использовать сайт как надёжный источник данных.',
    },
    {
      question: 'Можно ли попасть в ответы нейросетей (ChatGPT, Gemini, YandexGPT)?',
      answer: 'Гарантировать конкретное упоминание невозможно, так как генеративные модели формируют ответы динамически. Но структурированный контент, подтвержденная экспертиза, Schema.org и согласованность цифрового следа бренда кратно повышают эту вероятность.',
    },
    {
      question: 'Обязательно ли писать много статей в блог?',
      answer: 'Не обязательно. В первую очередь бизнес-результат дают правильно спроектированные коммерческие страницы услуг и категорий. Информационные статьи создаются точечно — только там, где есть реальный спрос целевой аудитории.',
    },
    {
      question: 'Вы делаете технический SEO-аудит?',
      answer: 'Да. Мы проводим полный аудит: проверяем индексацию, дубли, канонические адреса, скорость загрузки, микроразметку, битые ссылки и корректность отображения на смартфонах.',
    },
    {
      question: 'Можно ли продвигать новый сайт?',
      answer: 'Да. Для нового сайта критически важно сразу заложить правильную структуру разделов под поисковый спрос, чтобы избежать дорогостоящих переделок архитектуры в будущем.',
    },
    {
      question: 'Можно ли совместить SEO и Яндекс Директ?',
      answer: 'Да, эти каналы отлично дополняют друг друга. Яндекс Директ даёт быстрый целевой трафик и заявки с первого дня, а SEO параллельно выстраивает долгосрочный стабильный поток бесплатных обращений.',
    },
  ],

  relatedServices: [
    { label: 'Создание сайтов', href: '/services/web-development' },
    { label: 'Яндекс Директ', href: '/services/yandex-direct' },
    { label: 'Сквозная аналитика', href: '/services/analytics' },
    { label: 'Внедрение CRM', href: '/services/crm' },
    { label: 'B2B Лидогенерация', href: '/services/b2b-lead-generation' },
  ],

  finalCta: {
    title: 'Готовы сделать ваш бизнес заметным в поиске?',
    description: 'Опишите ваш сайт и задачи. Мы проведём первичный аудит видимости и предложим стратегию органического роста.',
    benefits: ['Проведём аудит текущей видимости', 'Соберём карту поискового спроса', 'Спроектируем архитектуру под SEO и AI'],
  },

  seo: {
    title: 'SEO и GEO продвижение сайтов | VOLTRENA Digital',
    description: 'Органическое продвижение сайтов в поиске и AI-ответах: семантика, техническое SEO, коммерческие страницы, Schema.org, гео-сервисы и Generative Engine Optimization.',
    canonical: '/services/seo-geo/',
  },
};
