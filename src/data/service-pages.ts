export interface FlowNode {
  id: string
  label: string
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
  heroFlow: FlowNode[]
  saleSystemNodes: SaleSystemNode[]
  types: ServiceType[]
  approach: ApproachStep[]
  ecosystem: EcosystemItem[]
  process: ServiceProcessStep[]
  technology: {
    highlights: string[]
    stack: string[]
  }
  useCases: UseCase[]
  included: {
    base: IncludedItem[]
    extra: IncludedItem[]
  }
  faq: FAQItem[]
  relatedServices: RelatedService[]
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
