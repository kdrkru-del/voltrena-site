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
  title: 'VOLTRENA Digital — Digital Growth & Automation Agency',
  description:
    'We build connected digital systems that find customers, convert leads, and automate sales. Websites, performance marketing, AI, automation, and data — in one growth system.',
  keywords: [
    'digital agency',
    'growth system',
    'website development',
    'AI automation',
    'CRM',
    'lead generation',
    'SEO',
    'web scraping',
    'business automation',
    'digital marketing',
  ],
  openGraph: {
    title: 'VOLTRENA Digital — Digital Growth & Automation Agency',
    description:
      'Websites, performance marketing, AI, automation and data — connected into one growth system.',
    type: 'website',
    locale: 'en_US',
    siteName: 'VOLTRENA Digital',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Digital Growth & Automation Agency',
    description:
      'Websites, performance marketing, AI, automation and data — connected into one growth system.',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
