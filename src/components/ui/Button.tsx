'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'lg' | 'sm';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', href, children, className, onClick, type = 'button' }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary';

    const variants = {
      primary:
        'bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/20 hover:shadow-accent/40',
      secondary:
        'bg-transparent text-text-primary border border-border-light hover:border-accent/50 hover:bg-bg-surface',
      ghost:
        'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-surface',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      default: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>}>
          {children}
          {variant === 'primary' && (
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          )}
        </Link>
      );
    }

    return (
      <button type={type} className={classes} onClick={onClick} ref={ref as React.Ref<HTMLButtonElement>}>
        {children}
        {variant === 'primary' && (
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
