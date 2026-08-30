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
