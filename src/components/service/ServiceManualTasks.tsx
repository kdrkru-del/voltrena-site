'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

const tasks = [
  'Копирование заявок',
  'Перенос данных между системами',
  'Ответы на одинаковые вопросы',
  'Создание задач вручную',
  'Сортировка обращений',
  'Подготовка документов',
  'Отправка уведомлений',
  'Обновление таблиц',
  'Проверка новых записей',
  'Формирование отчётов',
]

export default function ServiceManualTasks() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="ПРОБЛЕМА"
            title="Ручные процессы незаметно съедают часы."
            subtitle="Каждое из этих действий выполняется снова и снова — каждый день."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {tasks.map((task, i) => (
              <ScrollReveal key={task} delay={i * 50}>
                <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-bg-surface border border-red-500/20 text-text-secondary text-sm hover:border-red-500/40 transition-colors">
                  <span className="text-red-500/60 font-bold">✗</span>
                  {task}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={600}>
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
                Если действие повторяется — его стоит проверить на возможность автоматизации.
              </h2>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
