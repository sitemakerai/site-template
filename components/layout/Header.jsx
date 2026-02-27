'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const navItems = [
  { text: 'News', href: '/' },
  { text: 'Video', href: '/video' },
  { text: 'Entdecken', href: '/discover' },
  { text: 'Profil', href: '/register' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span
              className="flex items-center justify-center w-8 h-8 rounded font-bold text-white text-sm select-none"
              style={{ backgroundColor: 'rgb(0, 0, 238)' }}
            >
              20
            </span>
            <span className="font-bold text-neutral-900 text-sm md:text-base leading-tight hidden sm:block">
              20 Minuten
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors'
                )}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/register"
              className="px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: 'rgb(0, 0, 238)' }}
            >
              Anmelden
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <Container>
            <nav className="flex flex-col py-3 gap-1" aria-label="Mobile Navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 rounded-md text-sm font-medium text-neutral-800 hover:bg-neutral-100 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="/register"
                  className="block w-full text-center px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: 'rgb(0, 0, 238)' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Anmelden
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
