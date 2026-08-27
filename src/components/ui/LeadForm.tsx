'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    contact: '',
    message: '',
  });

  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', contact: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
      isValid = false;
    }
    if (!formData.contact.trim()) {
      newErrors.contact = 'Пожалуйста, введите контактные данные';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Пожалуйста, опишите вашу задачу';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('loading');

    // TODO: Replace with real webhook/CRM integration
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 h-full">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-3xl mb-4">
          ✓
        </div>
        <h3 className="text-xl font-bold text-text-primary mb-2">Заявка отправлена!</h3>
        <p className="text-text-secondary">
          Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-text-secondary">
          Имя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={cn(
            "w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm",
            errors.name && "border-red-400 focus:border-red-400 focus:ring-red-400/30"
          )}
        />
        {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact" className="text-sm font-medium text-text-secondary">
          Телефон / Telegram / Email
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="+7 (xxx) xxx-xx-xx или @username"
          value={formData.contact}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={cn(
            "w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm",
            errors.contact && "border-red-400 focus:border-red-400 focus:ring-red-400/30"
          )}
        />
        {errors.contact && <span className="text-xs text-red-400 mt-1">{errors.contact}</span>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text-secondary">
          Кратко о задаче
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Расскажите, что вам нужно..."
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={formState === 'loading'}
          className={cn(
            "w-full bg-bg-surface border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all duration-200 text-sm resize-none",
            errors.message && "border-red-400 focus:border-red-400 focus:ring-red-400/30"
          )}
        />
        {errors.message && <span className="text-xs text-red-400 mt-1">{errors.message}</span>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={formState === 'loading'}
      >
        {formState === 'loading' ? 'Отправляется...' : 'Отправить заявку'}
      </Button>
    </form>
  );
}
