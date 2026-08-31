'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { MessageSquare, LayoutGrid, Check } from 'lucide-react'

const botPoints = [
  'Последовательный диалог и опрос по шагам',
  'Быстрые сервисные команды и меню кнопок',
  'Моментальные уведомления и алерты',
  'Простые формы сбора контактных данных',
  'FAQ и первичная консультация',
  'Внутренние рабочие команды для сотрудников',
]

const miniAppPoints = [
  'Многоэкранный графический интерфейс (React / Web)',
  'Сложные каталоги товаров с фильтрами и поиском',
  'Корзина, расчёт доставки и оформление заказа',
  'Личный кабинет пользователя и история заказов',
  'Интерактивные калькуляторы и визуализаторы',
  'Аналитические дашборды и графики',
]

export default function ServiceBotVsMiniApp() {
  return (
    <section className="py-20 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionHeading
            tag="СРАВНЕНИЕ"
            title="Бот или Mini App?"
            subtitle="Выбираем инструмент под конкретную задачу пользователя и бизнеса."
            align="center"
          />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Telegram Bot Card */}
          <ScrollReveal delay={100}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-border h-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="inline-flex p-3 rounded-xl border border-accent/30 bg-accent/5 text-accent mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Telegram Bot</h3>
                <p className="text-xs font-mono text-accent uppercase tracking-widest mb-6">
                  Интерфейс: сообщения, кнопки, команды
                </p>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Идеален для прямолинейных текстовых сценариев, быстрой фиксации лидов и оперативного взаимодействия.
                </p>
                <ul className="space-y-3">
                  {botPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 text-xs font-mono text-text-muted">
                Фокус: скорость и простота диалога
              </div>
            </div>
          </ScrollReveal>

          {/* Telegram Mini App Card */}
          <ScrollReveal delay={200}>
            <div className="p-8 rounded-2xl bg-bg-surface border border-accent/30 bg-gradient-to-b from-bg-surface to-bg-secondary h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-accent text-bg-primary text-xs font-mono font-bold rounded-bl-xl uppercase tracking-wider">
                Web inside Telegram
              </div>
              <div>
                <div className="inline-flex p-3 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-6">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Telegram Mini App</h3>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-6">
                  Интерфейс: полноценное веб-приложение
                </p>
                <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                  Используется, когда чат становится тесным: для сложных каталогов, богатых форм и личных кабинетов.
                </p>
                <ul className="space-y-3">
                  {miniAppPoints.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-border/50 text-xs font-mono text-cyan-400/80">
                Фокус: богатый UI без установки отдельного приложения
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Иногда лучший продукт объединяет Bot + Mini App.
            </h2>
            <p className="mt-3 text-text-secondary text-sm md:text-base">
              Бот присылает уведомления и встречает пользователя, а сложный выбор открывается в Mini App в один клик.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
