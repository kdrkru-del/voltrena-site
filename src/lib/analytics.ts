import { siteConfig } from '@/config/site';

declare global {
  interface Window {
    ym?: (counterId: number | string, action: string, target: string, params?: Record<string, any>) => void;
  }
}

export function reachGoal(target: string, params?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.ym && siteConfig.yandexMetrikaId) {
    window.ym(siteConfig.yandexMetrikaId, 'reachGoal', target, params);
  }
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Goal]: ${target}`, params);
  }
}
