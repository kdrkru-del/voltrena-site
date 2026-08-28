export interface FlowNode {
  id: string
  label: string
  detail?: string
}

export interface SaleSystemNode {
  id: string
  label: string
  description: string
}

export interface ServiceType {
  id: string
  title: string
  description: string
  featured?: boolean
  items?: string[]
}

export interface ApproachStep {
  number: string
  title: string
  description: string
}

export interface EcosystemItem {
  id: string
  label: string
  description: string
  angle?: number
}

export interface ServiceProcessStep {
  number: string
  title: string
  description?: string
}

export interface TechItem {
  label: string
  highlight?: boolean
}

export interface UseCase {
  id: string
  title: string
  description: string
}

export interface IncludedItem {
  label: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedService {
  label: string
  href: string
}

export interface ServiceSectionCopy {
  tag?: string
  title: string
  description?: string
}

export interface IntentLevel {
  id: string
  label: string
  description: string
  terms: string[]
  strength: number
}

export interface ComparisonPath {
  id: string
  label: string
  tone: 'muted' | 'accent'
  steps: string[]
}

export interface FormulaStep {
  operator: string
  label: string
  isResult?: boolean
}

export interface SEOData {
  title: string
  description: string
  canonical?: string
}

export interface ServicePageData {
  slug: string
  eyebrow: string
  title: string
  subtitle: string
  description: string
  ctaPrimary: string
  ctaSecondary: string
  ctaSecondaryHref?: string
  heroFlow: FlowNode[]
  heroExample?: string
  saleSystemNodes: SaleSystemNode[]
  saleSystemSection?: ServiceSectionCopy & {
    flow: string[]
    conclusion: string
  }
  types: ServiceType[]
  typesSection?: ServiceSectionCopy & { id?: string }
  approach: ApproachStep[]
  approachSection?: ServiceSectionCopy & { id?: string }
  ecosystem: EcosystemItem[]
  ecosystemSection?: ServiceSectionCopy & { centerLabel: string; id?: string }
  process: ServiceProcessStep[]
  processSection?: ServiceSectionCopy & { id?: string }
  technology?: {
    highlights: string[]
    stack: string[]
  }
  intent?: ServiceSectionCopy & { levels: IntentLevel[]; note: string }
  comparison?: ServiceSectionCopy & { paths: ComparisonPath[]; conclusion: string }
  recurring?: ServiceSectionCopy & { steps: string[]; conclusion: string }
  metrics?: ServiceSectionCopy & { items: ServiceType[]; id?: string }
  principles?: ServiceSectionCopy & { items: ServiceType[]; id?: string }
  workModels?: ServiceSectionCopy & { items: ServiceType[]; id?: string }
  leadSystem?: ServiceSectionCopy & {
    formula: FormulaStep[]
    ctaLabel: string
    ctaHref: string
  }
  useCases: UseCase[]
  included?: {
    base: IncludedItem[]
    extra: IncludedItem[]
  }
  faq: FAQItem[]
  relatedServices: RelatedService[]
  finalCta?: {
    title: string
    description: string
    benefits?: string[]
  }
  seo: SEOData
}

// ─── WEB DEVELOPMENT ──────────────────────────────────────────────────────────

export const webDevelopmentData: ServicePageData = {
  slug: 'web-development',
  eyebrow: 'WEB DEVELOPMENT',
  title: 'Создаём сайты, которые работают на продажи.',
  subtitle: 'Сайт — это инструмент привлечения клиентов.',
  description:
    'Проектируем и разрабатываем сайты как часть системы привлечения клиентов — с рекламой, аналитикой, CRM и автоматизацией.',
  ctaPrimary: 'Обсудить проект',
  ctaSecondary: 'Что мы создаём',

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
      description: 'Бизнесы, где клиенту нужно подробно объяснять предложение и снимать возражения.',
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
}

// ─── YANDEX DIRECT ────────────────────────────────────────────────────────────

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
}
