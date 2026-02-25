"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/collections", label: "Collections" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary-950/95 backdrop-blur-sm border-b border-primary-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-primary-500 flex items-center justify-center group-hover:border-primary-300 transition-colors">
              <Clock className="w-4 h-4 text-primary-400 group-hover:text-primary-300 transition-colors" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                Centre Horloger
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-primary-400 font-sans">
                Genève · Est. 1887
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest uppercase text-secondary-300 hover:text-primary-300 transition-colors font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="px-5 py-2 border border-primary-500 text-primary-300 text-xs uppercase tracking-widest hover:bg-primary-500 hover:text-white transition-all font-sans"
            >
              Prendre RDV
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-secondary-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-secondary-950 border-t border-primary-700/30 overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col px-4 py-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest text-secondary-300 hover:text-primary-300 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-3 border border-primary-500 text-primary-300 text-xs uppercase tracking-widest text-center hover:bg-primary-500 hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Prendre RDV
          </Link>
        </nav>
      </div>
    </header>
  );
}
