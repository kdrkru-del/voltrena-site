export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Погружение',
    description: 'Изучаем ваш бизнес, рынок и путь клиента (CJM).',
  },
  {
    number: '02',
    title: 'Проектирование',
    description: 'Разрабатываем архитектуру, воронку и техническое решение.',
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Создаём сайт, настраиваем автоматизацию и системы данных.',
  },
  {
    number: '04',
    title: 'Запуск',
    description: 'Подключаем трафик, интеграции и сквозную аналитику.',
  },
  {
    number: '05',
    title: 'Оптимизация',
    description: 'Улучшаем конверсию, снижаем стоимость лида и растим выручку.',
  },
];
