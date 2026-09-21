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
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      href,
      children,
      className,
      onClick,
      type = 'button',
      disabled,
    },
    ref
  ) => {
    const baseStyles =
      'group relative inline-flex items-center justify-center font-medium min-h-[44px] overflow-hidden rounded-xl transition-[border-color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A9692] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1012] disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variants = {
      primary:
        'bg-[#C9854D] text-[#0D1012] font-bold shadow-sm shadow-[#C9854D]/20 hover:shadow-md hover:shadow-[#C9854D]/30 border border-[#D9955D]/40',
      secondary:
        'bg-[#131719] text-[#F2EFE6] border border-[#2B3537] hover:border-[#5A9692]',
      ghost:
        'bg-transparent text-[#AAB4B1] hover:text-[#F2EFE6] hover:bg-[#182022] border border-transparent',
    };

    const liquidFills = {
      primary: 'bg-[#D9955D]',
      secondary: 'bg-[#182426]',
      ghost: 'bg-[#182022]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-xs',
      default: 'px-6 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-sm sm:text-base',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    const innerContent = (
      <>
        {/* Liquid Fill Element sliding up from bottom */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 translate-y-[102%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none',
            liquidFills[variant]
          )}
        />

        {/* Primary sliding text (moves up and out) */}
        <span className="relative z-10 inline-flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
          {children}
        </span>

        {/* Inflow sliding text (moves up from bottom and into center) */}
        <span
          aria-hidden="true"
          className="absolute inset-0 z-10 flex items-center justify-center gap-2 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 pointer-events-none"
        >
          {children}
        </span>
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          onClick={onClick}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
