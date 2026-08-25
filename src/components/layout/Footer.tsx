import Link from 'next/link';
import { navigationLinks } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-text-primary tracking-tight">
                VOLTRENA
              </span>
              <span className="text-xs font-mono text-text-secondary tracking-wider ml-2">
                Digital
              </span>
            </Link>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-sm">
              Digital Growth &amp; Automation Agency. We build connected systems that find
              customers, convert leads, and automate sales.
            </p>
            <p className="mt-6 text-text-muted text-xs font-mono">
              Websites · Marketing · AI · Automation · Data
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-text-secondary mb-4">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
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
            <h3 className="text-xs font-mono tracking-[0.2em] uppercase text-text-secondary mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@voltrena.com"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  hello@voltrena.com
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/voltrena"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} VOLTRENA Digital. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-xs text-text-muted hover:text-text-secondary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
