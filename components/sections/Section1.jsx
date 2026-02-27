'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Réparation et SAV Certifié', href: '/sous-traitance-sav-certifie/' },
  { label: 'Formation et découverte', href: '/formation/' },
  { label: 'Contact', href: '/contact/' },
];

export default function Section1() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-neutral-50 w-full">
      <Container className="py-5">
        <div className="flex items-center justify-between w-full">
          {/* Logo + Site Title */}
          <Link href="/" className="flex items-center gap-3 group" aria-current="page">
            <div className="relative w-[60px] h-[60px] flex-shrink-0">
              <Image
                src="/images/centrehorloger_logo.png"
                width={60}
                height={60}
                alt="Centre Horloger"
                className="object-contain"
              />
            </div>
            <span
              className="text-2xl font-semibold text-neutral-900 leading-tight"
              style={{ fontFamily: 'Cardo, serif' }}
            >
              Centre Horloger
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Menu" className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 whitespace-nowrap"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 transition-colors duration-200"
            aria-label="Ouvrir le menu"
            aria-haspopup="dialog"
            onClick={() => setMobileOpen(true)}
          >
            <Menu width={24} height={24} />
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/50"
          onClick={() => setMobileOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute right-0 top-0 h-full w-72 bg-neutral-50 shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-label="Menu"
            aria-modal="true"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
              <span
                className="text-lg font-semibold text-neutral-900"
                style={{ fontFamily: 'Cardo, serif' }}
              >
                Centre Horloger
              </span>
              <button
                aria-label="Fermer le menu"
                className="p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                <X width={24} height={24} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-neutral-700 hover:text-primary-600 py-3 border-b border-neutral-100 last:border-b-0 transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
