import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F4F1EA',
          secondary: '#EAE6DD',
          surface: '#FFFDF8',
          'surface-hover': '#F0ECE3',
        },
        text: {
          primary: '#1D2528',
          secondary: '#5D686A',
          muted: '#7F8987',
        },
        accent: {
          DEFAULT: '#3E7778',
          light: '#5A9692',
          dark: '#2D5D60',
          glow: 'rgba(62, 119, 120, 0.14)',
        },
        cta: {
          DEFAULT: '#C9854D',
          light: '#D99A62',
          dark: '#A9683A',
          glow: 'rgba(201, 133, 77, 0.16)',
        },
        mint: {
          DEFAULT: '#3E7778',
          light: '#5A9692',
          muted: '#8EAAA5',
          glow: 'rgba(62, 119, 120, 0.14)',
        },
        warm: {
          DEFAULT: '#C9854D',
          light: '#D99A62',
          muted: '#A9683A',
          glow: 'rgba(201, 133, 77, 0.16)',
        },
        border: {
          DEFAULT: '#D7D3C8',
          light: '#C3C0B6',
          accent: '#3E7778',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'subheading': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 12vh, 10rem)',
        'section-sm': 'clamp(3rem, 8vh, 6rem)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
