'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { reachGoal } from '@/lib/analytics';
import { Send, CheckCircle2, AlertCircle, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LeadFormProps {
  source?: string;
  className?: string;
}

interface SelectedTask {
  id: string;
  title: string;
  problem: string;
}

export default function LeadForm({ source = 'direct_form', className }: LeadFormProps) {
  const formId = useId();
  const submitting = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', contact: '', message: '' });
  const [errors, setErrors] = useState({ name: '', contact: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  const [selectedTask, setSelectedTask] = useState<SelectedTask | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Parse UTM params
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const params: Record<string, string> = {};
      const trackedKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid', 'gclid'];
      trackedKeys.forEach((key) => {
        const val = searchParams.get(key);
        if (val) params[key] = val;
      });
      setUtmParams(params);
    } catch (e) {
      console.warn('Could not parse URL params', e);
    }

    // Check localStorage for selected task
    try {
      const savedTask = localStorage.getItem('voltrena_selected_task');
      if (savedTask) {
        const parsed = JSON.parse(savedTask) as SelectedTask;
        if (parsed?.title) {
          setSelectedTask(parsed);
          setFormData((prev) => {
            if (!prev.message) {
              return { ...prev, message: `Задача: ${parsed.title} (${parsed.problem})` };
            }
            return prev;
          });
        }
      }
    } catch (e) {
      console.warn('Could not read saved task', e);
    }

    // Listen for task selection events from Problem Navigator
    const handleTaskSelected = (event: Event) => {
      const customEvent = event as CustomEvent<SelectedTask>;
      if (customEvent.detail?.title) {
        const task = customEvent.detail;
        setSelectedTask(task);
        setFormData((prev) => ({
          ...prev,
          message: prev.message.startsWith('Задача:') || !prev.message
            ? `Задача: ${task.title} (${task.problem})`
            : prev.message,
        }));
      }
    };

    window.addEventListener('voltrena:select-task', handleTaskSelected);
    return () => {
      window.removeEventListener('voltrena:select-task', handleTaskSelected);
    };
  }, []);

  const handleClearTask = () => {
    setSelectedTask(null);
    try {
      localStorage.removeItem('voltrena_selected_task');
    } catch (e) {
      console.warn('Could not clear task from storage', e);
    }
    setFormData((prev) => {
      if (prev.message.startsWith('Задача:')) {
        return { ...prev, message: '' };
      }
      return prev;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (formState === 'error') {
      setFormState('idle');
      setErrorMessage('');
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', contact: '', message: '' };
    if (!formData.name.trim()) { newErrors.name = 'Пожалуйста, укажите ваше имя'; isValid = false; }
    if (!formData.contact.trim()) { newErrors.contact = 'Укажите телефон, Telegram или email для связи'; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Опишите кратко вашу задачу'; isValid = false; }
    setErrors(newErrors);
    if (!isValid) {
      const firstInvalid = (Object.keys(newErrors) as Array<keyof typeof newErrors>).find((key) => newErrors[key]);
      if (firstInvalid) formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
    }
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting.current || !validate()) return;
    submitting.current = true;
    setFormState('loading');
    setErrorMessage('');

    const endpoint = siteConfig.leadEndpoint || `https://formsubmit.co/ajax/${siteConfig.leadRecipientEmail}`;
    const subject = `Запрос конфигурации VOLTRENA: ${formData.name.trim()} (${formData.contact.trim()})`;
    const payload = {
      name: formData.name.trim(),
      contact: formData.contact.trim(),
      message: formData.message.trim(),
      selectedTask: selectedTask ? `${selectedTask.title} (${selectedTask.problem})` : undefined,
      source,
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      pageTitle: typeof document !== 'undefined' ? document.title : '',
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      timestamp: new Date().toLocaleString('ru-RU'),
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      ...utmParams,
    };

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Server returned status ${res.status}`);
      const resData = await res.json().catch(() => null);
      if (resData && (resData.success === 'false' || resData.success === false)) throw new Error(resData.message);
      reachGoal('lead_form_success', { source });
      setFormState('success');
    } catch (err: unknown) {
      console.error('Lead submission failed:', err);
      setFormState('error');
      setErrorMessage('Не удалось отправить запрос через форму. Пожалуйста, напишите нам напрямую в Telegram или WhatsApp.');
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  };

  if (formState === 'success') {
    return (
      <div role="status" className="flex flex-col items-center justify-center text-center py-10 px-4 h-full animate-fade-in">
        <div className="w-14 h-14 rounded-full bg-[#5A9692]/20 border border-[#5A9692]/40 flex items-center justify-center text-[#5A9692] mb-4">
          <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Запрос принят</h3>
        <p className="text-text-secondary text-sm leading-relaxed max-w-md mb-6">
          Мы получили контекст задачи, изучим его и свяжемся с вами, чтобы предложить подходящую конфигурацию.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={siteConfig.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal('contact_telegram_click', { origin: 'form_success' })}
            className="inline-flex items-center min-h-[44px] gap-2 px-4 py-2 rounded-lg bg-[#5A9692]/10 border border-[#5A9692]/30 text-[#5A9692] hover:bg-[#5A9692]/20 text-xs font-mono transition-colors"
          >
            <Send className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Написать в Telegram</span>
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => reachGoal('contact_whatsapp_click', { origin: 'form_success' })}
            className="inline-flex items-center min-h-[44px] gap-2 px-4 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-mono transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setFormData({ name: '', contact: '', message: '' });
            setSelectedTask(null);
            setFormState('idle');
          }}
          className="mt-6 min-h-[44px] px-3 text-xs font-mono text-text-muted hover:text-[#5A9692] transition-colors underline"
        >
          Отправить ещё один запрос
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} aria-busy={formState === 'loading'} onSubmit={handleSubmit} className={cn('space-y-4 text-left', className)} noValidate>
      {formState === 'error' && (
        <div role="alert" className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs leading-relaxed flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-2">
            <p>{errorMessage}</p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer" onClick={() => reachGoal('contact_telegram_click', { origin: 'form_error' })} className="inline-flex items-center min-h-[44px] underline font-semibold hover:text-white">
                Написать в Telegram
              </a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => reachGoal('contact_whatsapp_click', { origin: 'form_error' })} className="inline-flex items-center min-h-[44px] underline font-semibold hover:text-white">
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Selected Task Chip */}
      {selectedTask && (
        <div className="p-3 rounded-xl bg-[#182325] border border-[#3E7778]/40 flex items-center justify-between gap-3 text-xs">
          <div className="min-w-0">
            <span className="text-[10px] font-mono text-[#5A9692] uppercase tracking-wider block">
              Выбранная задача:
            </span>
            <span className="font-semibold text-[#F2EFE6] truncate block">
              {selectedTask.title} · {selectedTask.problem}
            </span>
          </div>
          <button
            type="button"
            onClick={handleClearTask}
            title="Убрать выбор"
            className="p-1 rounded-md text-[#7A8885] hover:text-[#F2EFE6] hover:bg-[#232B2D] transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${formId}-name`} className="text-xs font-mono text-text-secondary">
          Ваше имя <span className="text-cta">*</span>
        </label>
        <input
          type="text"
          id={`${formId}-name`}
          required
          maxLength={120}
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          name="name"
          placeholder="Алексей"
          value={formData.name}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={cn(
            'w-full bg-bg-surface border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/22 transition-[color,background-color,border-color,box-shadow] text-sm',
            errors.name && 'border-red-400 focus:border-red-400'
          )}
        />
        {errors.name && <span id={`${formId}-name-error`} className="text-xs text-red-400">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${formId}-contact`} className="text-xs font-mono text-text-secondary">
          Телефон, Telegram или Email <span className="text-cta">*</span>
        </label>
        <input
          type="text"
          id={`${formId}-contact`}
          required
          maxLength={180}
          autoComplete="email"
          aria-invalid={!!errors.contact}
          aria-describedby={errors.contact ? `${formId}-contact-error` : undefined}
          name="contact"
          placeholder="+7 (999) 000-00-00 или @username"
          value={formData.contact}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={cn(
            'w-full bg-bg-surface border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/22 transition-[color,background-color,border-color,box-shadow] text-sm',
            errors.contact && 'border-red-400 focus:border-red-400'
          )}
        />
        {errors.contact && <span id={`${formId}-contact-error`} className="text-xs text-red-400">{errors.contact}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor={`${formId}-message`} className="text-xs font-mono text-text-secondary">
          Бизнес-задача <span className="text-cta">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          required
          maxLength={3000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          name="message"
          placeholder="Например: нужны целевые заявки, B2B-клиенты или автоматизация обработки обращений..."
          rows={3}
          value={formData.message}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={cn(
            'w-full bg-bg-surface border border-border rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/22 transition-[color,background-color,border-color,box-shadow] text-sm resize-none',
            errors.message && 'border-red-400 focus:border-red-400'
          )}
        />
        {errors.message && <span id={`${formId}-message-error`} className="text-xs text-red-400">{errors.message}</span>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full mt-2"
        disabled={formState === 'loading'}
      >
        {formState === 'loading' ? 'Отправляем запрос...' : 'Получить конфигурацию'}
      </Button>
      <p className="text-[11px] text-text-muted leading-relaxed pt-1 text-center sm:text-left">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <Link href="/privacy" className="text-text-secondary hover:text-[#5A9692] underline transition-colors">
          Политикой конфиденциальности
        </Link>{' '}
        и обработкой персональных данных.
      </p>
    </form>
  );
}
