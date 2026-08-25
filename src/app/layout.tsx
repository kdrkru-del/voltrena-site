import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
  title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
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
  openGraph: {
    title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    description:
      'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    description:
      'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
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
