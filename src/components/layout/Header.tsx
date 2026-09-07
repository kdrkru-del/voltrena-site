'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationLinks, serviceLinks, ctaButton } from '@/data/navigation';
import Button from '@/components/ui/Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileServicesOpen(false);
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const background = [document.querySelector('main'), document.querySelector('footer')];
    background.forEach(element => element?.setAttribute('inert', ''));
    menuRef.current?.querySelector<HTMLElement>('a, button')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setMobileOpen(false); }
      if (event.key !== 'Tab') return;
      const targets = [...Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []), menuButtonRef.current].filter((element): element is HTMLElement => !!element);
      const index = targets.indexOf(document.activeElement as HTMLElement);
      event.preventDefault();
      targets[(index + (event.shiftKey ? -1 : 1) + targets.length) % targets.length]?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach(element => element?.removeAttribute('inert'));
      document.removeEventListener('keydown', onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)');
    const reset = () => { setMobileOpen(false); setServicesOpen(false); };
    desktop.addEventListener('change', reset);
    return () => desktop.removeEventListener('change', reset);
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [servicesOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-500',
        scrolled
          ? 'py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-border'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <span className="text-xl font-bold text-text-primary tracking-tight">
            VOLTRENA
          </span>
          <span className={cn(
            'text-xs font-mono text-text-secondary tracking-wider transition-opacity duration-300',
            scrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
          )}>
            Digital
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
          {navigationLinks.map((link) => {
            const isServices = link.href === '/services';
            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');

            if (isServices) {
              return (
                <div key={link.href} className="relative" ref={dropdownRef} onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false);
                }}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    ref={servicesButtonRef}
                    aria-controls="desktop-services"
                    className={cn(
                      'min-h-[44px] inline-flex items-center text-sm transition-colors duration-200 relative group flex items-center gap-1',
                      isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                    )}
                    aria-expanded={servicesOpen}

                  >
                    {link.label}
                    <svg
                      className={cn('w-3 h-3 transition-transform duration-200', servicesOpen && 'rotate-180')}
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-[width] duration-300" />
                  </button>

                  {/* Dropdown */}
                  <div
                    id="desktop-services"
                    hidden={!servicesOpen}
                    className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[420px] bg-bg-primary/95 backdrop-blur-xl border border-border rounded-2xl overflow-hidden shadow-2xl transition-[opacity,transform,color,background-color,border-color] duration-300',
                      servicesOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
                    )}
                  >
                    <div className="p-2">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className={cn(
                            'flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-[opacity,transform,color,background-color,border-color] duration-200 group',
                            pathname === service.href
                              ? 'bg-accent/10 text-text-primary'
                              : 'hover:bg-bg-surface text-text-secondary hover:text-text-primary'
                          )}
                        >
                          <span className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                            {service.label}
                          </span>
                          {service.description && (
                            <span className="text-xs text-text-muted">{service.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-border p-3">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-center gap-2 text-xs font-mono text-accent hover:text-accent-light transition-colors min-h-[44px] py-1"
                      >
                        Все услуги
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'min-h-[44px] inline-flex items-center text-sm transition-colors duration-200 relative group',
                  isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-[width] duration-300" />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block flex-shrink-0">
          <Button href={ctaButton.href} variant="primary" size="sm">
            {ctaButton.label}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-1.5 p-2 relative z-50"
          aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              'w-6 h-px bg-text-primary transition-transform duration-300',
              mobileOpen && 'rotate-45 translate-y-[4px]'
            )}
          />
          <span
            className={cn(
              'w-6 h-px bg-text-primary transition-transform duration-300',
              mobileOpen && '-rotate-45 -translate-y-[3px]'
            )}
          />
        </button>
      </div>
    </header>

      {/* Mobile menu overlay — outside <header> to avoid backdrop-filter stacking context bug on iOS */}
      <div
        id="mobile-navigation"
        ref={menuRef}
        hidden={!mobileOpen}
        className={cn(
          'lg:hidden fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-xl transition-[opacity,transform,color,background-color,border-color] duration-500 flex flex-col overflow-y-auto',
          mobileOpen ? 'opacity-100 pointer-events-auto' : '!hidden'
        )}
      >
        <div className="flex-1 flex flex-col px-6 pt-24 pb-8 gap-2">
          <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
            {navigationLinks.map((link) => {
              const isServices = link.href === '/services';

              if (isServices) {
                return (
                  <div key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services"
                      className="w-full flex items-center justify-between py-4 text-xl font-medium text-text-primary border-b border-border"
                    >
                      {link.label}
                      <svg
                        className={cn('w-5 h-5 transition-transform duration-200 text-text-secondary', mobileServicesOpen && 'rotate-180')}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {mobileServicesOpen && (
                      <div id="mobile-services" className="pl-4 py-2 flex flex-col gap-1">
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={() => setMobileOpen(false)}
                            className="py-2.5 text-base text-text-secondary hover:text-accent transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-4 text-xl font-medium text-text-primary hover:text-accent transition-colors border-b border-border"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8">
            <Button href={ctaButton.href} variant="primary" size="lg" className="w-full" onClick={() => setMobileOpen(false)}>
              {ctaButton.label}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
