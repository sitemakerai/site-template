'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary-600"></div>
            <span className="text-xl font-bold text-neutral-900">YourBusiness</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-neutral-700" />
            ) : (
              <Menu className="h-6 w-6 text-neutral-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden',
            mobileMenuOpen ? 'block' : 'hidden'
          )}
        >
          <div className="space-y-1 pb-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 pt-2">
              <Button variant="primary" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
