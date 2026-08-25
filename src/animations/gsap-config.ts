'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let isRegistered = false;

export function registerGSAP() {
  if (typeof window === 'undefined' || isRegistered) return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
  });

  ScrollTrigger.defaults({
    toggleActions: 'play none none reverse',
  });

  isRegistered = true;
}

export { gsap, ScrollTrigger };
