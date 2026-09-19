import Link from 'next/link';
import { footerLinks } from '@/data/navigation';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-[#2D383B] bg-[#1D2528] text-[#F2EFE6]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-[#F2EFE6] tracking-tight">
                VOLTRENA
              </span>
              <span className="text-xs font-mono text-[#AAB4B1] tracking-wider ml-2">
                Digital
              </span>
            </Link>
            <p className="mt-4 text-[#AAB4B1] text-sm leading-relaxed max-w-sm">
              Агентство цифрового роста и автоматизации. Мы строим объединенные системы, которые находят клиентов, конвертируют лиды и автоматизируют продажи.
            </p>
            <p className="mt-6 text-[#7A8885] text-xs font-mono">
              Сайты · Маркетинг · ИИ · Автоматизация · Данные
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-[#B9D4D1] mb-4">
              Навигация
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#AAB4B1] hover:text-[#F2EFE6] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-[#B9D4D1] mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#AAB4B1] hover:text-[#F2EFE6] transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#AAB4B1] hover:text-[#F2EFE6] transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-[#AAB4B1] hover:text-[#F2EFE6] transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#2D383B] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#7A8885]">
            © {new Date().getFullYear()} VOLTRENA Digital. Все права защищены.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-[#7A8885] hover:text-[#AAB4B1] transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
