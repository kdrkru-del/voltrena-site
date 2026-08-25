export interface Solution {
  id: string;
  title: string;
  components: string[];
  description?: string;
}

export const solutions: Solution[] = [
  {
    id: 'lead-generation',
    title: 'Система генерации лидов',
    components: ['Лендинг', 'Реклама', 'Аналитика', 'CRM'],
    description: 'Комплексная система, которая автоматически привлекает, собирает и квалифицирует заявки.',
  },
  {
    id: 'b2b-lead-machine',
    title: 'B2B Лид-машина',
    components: ['Целевые компании', 'Сбор данных', 'Обогащение', 'Аутрич', 'Автоматизация'],
    description: 'Автоматизированная B2B воронка: от поиска компаний до первого контакта.',
  },
  {
    id: 'ai-sales-manager',
    title: 'ИИ Менеджер по продажам',
    components: ['ИИ-агент', 'База знаний', 'CRM', 'Telegram / Сайт', 'Квалификация'],
    description: 'ИИ-ассистент, который общается с клиентами и квалифицирует лиды 24/7.',
  },
  {
    id: 'digital-intelligence',
    title: 'Цифровая разведка',
    components: ['Рыночные данные', 'Конкуренты', 'Цены', 'Мониторинг', 'Дашборды'],
    description: 'Мониторинг рынка и конкурентов в реальном времени для принятия решений.',
  },
];
