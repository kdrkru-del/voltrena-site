'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('voltrena_cookie_consent');
      if (!consent) setShow(true);
    } catch {}
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('voltrena_cookie_consent', 'accepted');
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Уведомление об использовании файлов cookie"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-5 bg-bg-surface/95 backdrop-blur-md text-text-primary border-t border-border shadow-2xl transition-all"
    >
      <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p className="leading-relaxed text-text-secondary text-center sm:text-left">
          Мы используем файлы cookie и Яндекс.Метрику для технической оптимизации работы интерфейса и сбора аналитики в соответствии с 152-ФЗ РФ. Продолжая использовать сайт, вы принимаете условия{' '}
          <Link href="/privacy" className="text-accent underline font-medium">
            Политики конфиденциальности
          </Link>.
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-6 py-2.5 bg-accent hover:bg-accent/90 text-bg-primary font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
        >
          Принять
        </button>
      </div>
    </aside>
  );
}
