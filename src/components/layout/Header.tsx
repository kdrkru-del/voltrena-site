'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { navigationLinks, ctaButton } from '@/data/navigation';
import Button from '@/components/ui/Button';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'py-3 bg-bg-primary/80 backdrop-blur-xl border-b border-border'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
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
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button href={ctaButton.href} variant="primary" size="sm">
            {ctaButton.label}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 relative z-50"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              'w-6 h-px bg-text-primary transition-all duration-300',
              mobileOpen && 'rotate-45 translate-y-[4px]'
            )}
          />
          <span
            className={cn(
              'w-6 h-px bg-text-primary transition-all duration-300',
              mobileOpen && '-rotate-45 -translate-y-[3px]'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 bg-bg-primary/98 backdrop-blur-xl transition-all duration-500 flex flex-col items-center justify-center gap-8',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col items-center gap-6" role="navigation" aria-label="Mobile navigation">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-medium text-text-primary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href={ctaButton.href} variant="primary" size="lg">
          {ctaButton.label}
        </Button>
      </div>
    </header>
  );
}
