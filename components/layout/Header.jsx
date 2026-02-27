'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navItems = [
  { text: 'Accueil', href: '/' },
  { text: 'Réparation et SAV Certifié', href: '/sous-traitance-sav-certifie' },
  { text: 'Formation et découverte', href: '/formation' },
  { text: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100'
          : 'bg-white/90 backdrop-blur-sm'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <span
              className="w-9 h-9 rounded-md flex items-center justify-center text-white font-bold text-lg flex-shrink-0 transition-transform group-hover:scale-105"
              style={{ backgroundColor: 'rgb(216, 97, 60)' }}
              aria-hidden="true"
            >
              CH
            </span>
            <div className="hidden sm:block">
              <span className="font-semibold text-neutral-900 text-sm leading-tight block">
                Centre Horloger
              </span>
              <span className="text-xs text-neutral-500 leading-tight block">
                Le mouvement c&apos;est la vie
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 rounded-md hover:text-[rgb(216,97,60)] hover:bg-primary-50 transition-colors duration-150"
              >
                {item.text}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="primary"
              size="sm"
              className="text-sm"
              style={{ backgroundColor: 'rgb(216, 97, 60)', borderColor: 'rgb(216, 97, 60)' }}
              asChild
            >
              <Link href="/contact">Prendre contact</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-[rgb(216,97,60)] hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100 shadow-lg">
          <Container>
            <nav className="py-4 flex flex-col gap-1" aria-label="Navigation mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-neutral-700 rounded-md hover:text-[rgb(216,97,60)] hover:bg-neutral-50 transition-colors"
                >
                  {item.text}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-4 py-3 rounded-md text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: 'rgb(216, 97, 60)' }}
                >
                  Prendre contact
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
