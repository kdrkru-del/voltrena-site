import { useId } from 'react';
import { cn } from '@/lib/utils';

/** VOLTRENA monogram: two-stroke "V" in a dark squircle with an orange lead-node. */
export function LogoMark({ size = 32, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn('shrink-0', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2C3A3E" />
          <stop offset="100%" stopColor="#1D2528" />
        </linearGradient>
        <linearGradient id={`${id}-ac`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6FB0AB" />
          <stop offset="100%" stopColor="#3E7778" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${id}-bg)`} />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="rgba(111,176,171,0.35)" />
      <path d="M6.5 8 H11.2 L16 21.5 L13.2 21.5 Z" fill="#F4F1EA" />
      <path d="M25.5 8 H20.8 L14.2 24.5 H17.5 Z" fill={`url(#${id}-ac)`} />
      <circle cx="25.6" cy="6.6" r="2.7" fill="#C9854D" stroke="#1D2528" strokeWidth="1.3" />
    </svg>
  );
}

export default function Logo({
  tone = 'dark',
  showDigital = true,
  size = 32,
  className,
}: {
  tone?: 'dark' | 'light';
  showDigital?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark size={size} />
      <span className="inline-flex items-baseline gap-2">
        <span
          className={cn(
            'font-display text-[1.15rem] sm:text-xl font-extrabold tracking-[-0.03em] leading-none transition-colors',
            tone === 'dark' ? 'text-[#1D2528]' : 'text-[#F4F1EA]'
          )}
        >
          VOLTRENA
        </span>
        {showDigital && (
          <span
            className={cn(
              'hidden sm:inline text-[10px] font-mono uppercase tracking-[0.2em] leading-none',
              tone === 'dark' ? 'text-[#7F8987]' : 'text-[#7F8987]'
            )}
          >
            Digital
          </span>
        )}
      </span>
    </span>
  );
}
