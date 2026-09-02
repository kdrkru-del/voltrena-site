import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    template: '%s | VOLTRENA Digital',
  },
  description:
    'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
  keywords: [
    'цифровое агентство',
    'система роста',
    'разработка сайтов',
    'ИИ автоматизация',
    'CRM',
    'лидогенерация',
    'SEO',
    'парсинг',
    'автоматизация бизнеса',
    'цифровой маркетинг',
  ],
  alternates: {
    canonical: siteConfig.getCanonicalUrl('/'),
  },
  icons: {
    icon: [
      { url: siteConfig.getAssetUrl('/favicon.svg'), type: 'image/svg+xml' },
      { url: siteConfig.getAssetUrl('/favicon.ico'), sizes: 'any' },
    ],
    shortcut: [siteConfig.getAssetUrl('/favicon.svg')],
    apple: [
      { url: siteConfig.getAssetUrl('/favicon.svg'), sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    description:
      'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
    url: siteConfig.getCanonicalUrl('/'),
    type: 'website',
    locale: 'ru_RU',
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.getCanonicalUrl('/images/og-image.svg'),
        width: 1200,
        height: 630,
        alt: 'VOLTRENA Digital — Digital Growth Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    description:
      'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
