import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
  description: 'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
  keywords: ['цифровое агентство','система роста','разработка сайтов','ИИ автоматизация','CRM','лидогенерация','SEO','парсинг','автоматизация бизнеса','цифровой маркетинг'],
  alternates: { canonical: siteConfig.getCanonicalUrl('/') },
  icons: {
    icon: [
      { url: siteConfig.getAssetUrl('/favicon.svg'), type: 'image/svg+xml' },
      { url: siteConfig.getAssetUrl('/favicon.ico'), sizes: 'any' },
    ],
    shortcut: [siteConfig.getAssetUrl('/favicon.svg')],
    apple: [{ url: siteConfig.getAssetUrl('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    description: 'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
    url: siteConfig.getCanonicalUrl('/'), type: 'website', locale: 'ru_RU', siteName: siteConfig.name,
    images: [{ url: siteConfig.getCanonicalUrl('/images/og-image.svg'), width: 1200, height: 630, alt: 'VOLTRENA Digital — Digital Growth Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLTRENA Digital — Агентство цифрового роста и автоматизации',
    description: 'Мы создаем цифровые системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи. Сайты, маркетинг, ИИ, автоматизация и данные — в единой системе роста.',
    images: [siteConfig.getCanonicalUrl('/images/og-image.svg')],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-accent focus:text-white">
          Перейти к содержанию
        </a>
        {siteConfig.yandexMetrikaId && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=${siteConfig.yandexMetrikaId}','ym');
              ym(${siteConfig.yandexMetrikaId},'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});
            ` }} />
            <noscript><div><img src={`https://mc.yandex.ru/watch/${siteConfig.yandexMetrikaId}`} style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
          </>
        )}
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
