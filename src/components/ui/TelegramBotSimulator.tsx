'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Bot, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  payload?: {
    specs?: { label: string; value: string }[];
    status?: string;
  };
}

interface Scenario {
  id: string;
  title: string;
  userPrompt: string;
  botReply: string;
  specs: { label: string; value: string }[];
  status: string;
}

const scenarios: Scenario[] = [
  {
    id: 'glazing',
    title: '🪟 Окна Центр: расчет панорамного фасада',
    userPrompt: 'Рассчитать панорамное остекление 4.5 × 2.6 м во Владивостоке',
    botReply: 'Предварительный инженерный расчет сформирован:',
    specs: [
      { label: 'Система профиля', value: 'Alutech ALT SL160 (теплый портал)' },
      { label: 'Стеклопакет', value: 'Триплекс 8 мм, мультифункциональный энергосберегающий' },
      { label: 'Ветровая нагрузка', value: 'Приморский класс А (до 38 м/с)' },
      { label: 'Скорость доставки', value: 'Параметры ушли замерщику в Telegram за 0.4 сек' },
    ],
    status: 'Сделка создана в amoCRM · Инженер уже видит чертеж',
  },
  {
    id: 'techuchet',
    title: '🚜 ТехУчёт: регистрация спецтехники',
    userPrompt: 'Постановка на учёт экскаватора в Гостехнадзоре МО',
    botReply: 'Маршрут оформления сформирован:',
    specs: [
      { label: 'Тип техники', value: 'Гусеничный экскаватор (ПСМ в наличии)' },
      { label: 'Ведомство', value: 'Гостехнадзор МО (электронная подача)' },
      { label: 'Атрибуция', value: 'utm_source=yandex_direct · кампания «Спецтехника»' },
      { label: 'Интеграция', value: 'Карточка лида создана в CRM за 0.3 сек' },
    ],
    status: 'Дежурный юрист получил пуш с перечнем документов',
  },
  {
    id: 'audit',
    title: '⚡ Экспресс-аудит рекламы в Директе',
    userPrompt: 'Хочу экспресс-аудит рекламного кабинета за 24 часа',
    botReply: 'Запрос на экспресс-аудит принят в обработку:',
    specs: [
      { label: 'Канал проверки', value: 'Яндекс Директ (Поиск + РСЯ + Мастер Кампаний)' },
      { label: 'Что ищем', value: 'Слив на мусорных фразах, автотаргетинг, сбои UTM-разметки' },
      { label: 'Формат отчета', value: 'PDF-заключение с 3 ключевыми точками роста' },
      { label: 'Срок готовности', value: '24 часа с момента предоставления гостевого доступа' },
    ],
    status: 'Заявка передана ведущему директологу VOLTRENA',
  },
];

export default function TelegramBotSimulator({ className = '' }: { className?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: 'Здравствуйте! Я интерактивный бот VOLTRENA. Мы проектируем таких ботов, чтобы убрать рутину: бот квалифицирует клиента за 15 секунд, рассчитывает смету и передает готовую сделку в CRM. Выберите сценарий для проверки:',
      time: '12:00',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);

  const getCurrentTime = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleSelectScenario = (scenario: Scenario) => {
    if (isTyping) return;
    setHasSelected(true);

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: scenario.userPrompt,
      time: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: scenario.botReply,
        time: getCurrentTime(),
        payload: {
          specs: scenario.specs,
          status: scenario.status,
        },
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: 'Сценарий сброшен. Выберите любой вариант, чтобы протестировать механику отклика:',
        time: getCurrentTime(),
      },
    ]);
    setHasSelected(false);
    setIsTyping(false);
  };

  return (
    <div className={`w-full max-w-2xl mx-auto rounded-2xl overflow-hidden border border-[#D7D3C8] bg-[#FFFDF8] shadow-xl ${className}`}>
      {/* Telegram App Header */}
      <div className="bg-[#1D2528] px-4 py-3.5 flex items-center justify-between text-[#FFFDF8]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#3E7778] flex items-center justify-center font-bold text-base text-[#FFFDF8] relative">
            <span>V</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-[#1D2528]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base leading-tight">
              <span>VOLTRENA Automation Bot</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#3E7778]/40 text-[#DE9E68] uppercase">bot</span>
            </div>
            <div className="text-[12px] text-emerald-400 font-medium">онлайн · отклик 0.3 сек</div>
          </div>
        </div>

        <button
          onClick={handleReset}
          title="Сбросить диалог"
          className="p-2 rounded-lg text-[#9EA8AA] hover:text-[#FFFDF8] hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-mono"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Сбросить</span>
        </button>
      </div>

      {/* Telegram Chat Area */}
      <div className="p-4 sm:p-5 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4 bg-[#F4F1EA]/60">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div
              className={`max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-[#3E7778] text-[#FFFDF8] rounded-br-xs'
                  : 'bg-[#FFFDF8] text-[#1D2528] border border-[#D7D3C8] rounded-bl-xs'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>

              {/* Bot Structured Payload Card */}
              {msg.payload?.specs && (
                <div className="mt-3 pt-3 border-t border-[#D7D3C8] space-y-2">
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    {msg.payload.specs.map((item, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:justify-between py-1 border-b border-[#EAE6DD] last:border-b-0">
                        <span className="text-[#5D686A]">{item.label}:</span>
                        <span className="font-semibold text-[#1D2528] sm:text-right">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {msg.payload.status && (
                    <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 text-xs font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{msg.payload.status}</span>
                    </div>
                  )}
                </div>
              )}

              <div
                className={`text-[10px] mt-1 text-right ${
                  msg.sender === 'user' ? 'text-white/70' : 'text-[#7F8987]'
                }`}
              >
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#5D686A] italic bg-[#FFFDF8] border border-[#D7D3C8] px-3.5 py-2 rounded-2xl w-fit shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#3E7778] animate-bounce" />
            <span className="w-2 h-2 rounded-full bg-[#3E7778] animate-bounce [animation-delay:0.2s]" />
            <span className="w-2 h-2 rounded-full bg-[#3E7778] animate-bounce [animation-delay:0.4s]" />
            <span>Бот формирует расчет...</span>
          </div>
        )}
      </div>

      {/* Quick Reply Scenarios & Action Buttons */}
      <div className="p-4 bg-[#FFFDF8] border-t border-[#D7D3C8]">
        {!hasSelected ? (
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#5D686A] mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9854D]" />
              <span>Выберите сценарий для онлайн-теста:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {scenarios.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => handleSelectScenario(sc)}
                  className="text-left text-xs font-medium p-2.5 rounded-xl border border-[#D7D3C8] bg-[#F4F1EA] hover:bg-[#3E7778] hover:text-[#FFFDF8] hover:border-[#3E7778] transition-all duration-200"
                >
                  {sc.title}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-[#5D686A] text-center sm:text-left">
              Хотите такую же мгновенную автоматизацию для своего бизнеса?
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={siteConfig.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#3E7778] hover:bg-[#2F5F60] text-[#FFFDF8] text-xs font-bold transition-colors"
              >
                <span>Обсудить в Telegram</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={handleReset}
                className="px-3 py-2 rounded-lg border border-[#D7D3C8] hover:bg-[#EAE6DD] text-xs text-[#1D2528] font-medium transition-colors"
              >
                Еще тест
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
