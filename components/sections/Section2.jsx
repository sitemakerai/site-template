'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { Facebook, Instagram, MapPin } from 'lucide-react';

const services = [
  {
    label: 'Réparation et entretien de montres Certina à Neuchâtel Suisse',
    href: 'https://centrehorloger.ch/reparation-et-entretien-de-montres-certina-a-neuchatel-suisse/',
  },
  {
    label: 'Réparation et entretien de montres Rado à Neuchâtel Suisse',
    href: 'https://centrehorloger.ch/reparation-et-entretien-de-montres-rado-a-neuchatel-suisse/',
  },
  {
    label: 'Réparation et entretien de montres Omega à Neuchâtel Suisse',
    href: 'https://centrehorloger.ch/reparation-et-entretien-de-montres-omega-a-neuchatel-suisse/',
  },
  {
    label: 'Réparation et entretien de montres Tag Heuer à Neuchâtel Suisse',
    href: 'https://centrehorloger.ch/reparation-et-entretien-de-montres-tag-heuer-a-neuchatel-suisse/',
  },
  {
    label: 'Réparation et entretien de montres Balmain à Neuchâtel Suisse',
    href: 'https://centrehorloger.ch/reparation-et-entretien-de-montres-balmain-a-neuchatel-suisse/',
  },
  {
    label: 'Contact',
    href: 'https://centrehorloger.ch/contact/',
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/centrehorloger',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/centrehorloger',
    icon: Instagram,
  },
  {
    label: 'Google Maps',
    href: 'https://maps.app.goo.gl/XgRccN6io17j46h49',
    icon: MapPin,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Section2() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container className="py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 md:gap-16"
        >
          {/* Brand Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 md:min-w-[200px] md:w-[30%]"
          >
            <Link href="https://centrehorloger.ch/" rel="home" aria-current="page">
              <Image
                src="/images/centrehorloger_logo.png"
                width={78}
                height={78}
                alt="Centre Horloger"
                className="rounded"
              />
            </Link>
            <p className="text-base font-semibold text-neutral-900">
              <Link href="https://centrehorloger.ch" rel="home" aria-current="page" className="hover:text-primary-600 transition-colors">
                Centre Horloger
              </Link>
            </p>
            <p className="text-sm text-neutral-500">Le mouvement c'est la vie</p>
          </motion.div>

          {/* Links Columns */}
          <div className="flex flex-col sm:flex-row gap-10 flex-1">
            {/* Services */}
            <motion.div variants={itemVariants} className="flex-1">
              <h2 className="text-base font-semibold text-neutral-900 mb-4 font-[Inter]">
                Services
              </h2>
              <nav aria-label="Navigation Pied de page 7">
                <ul className="flex flex-col gap-2">
                  {services.map((service) => (
                    <li key={service.href}>
                      <a
                        href={service.href}
                        className="text-sm text-neutral-600 hover:text-primary-600 transition-colors leading-snug block"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div variants={itemVariants} className="flex-1">
              <h2 className="text-base font-semibold text-neutral-900 mb-4 font-[Inter]">
                Réseaux sociaux
              </h2>
              <nav aria-label="Navigation Pied de page 5">
                <ul className="flex flex-col gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <li key={social.href}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-neutral-600 hover:text-primary-600 transition-colors flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4 text-neutral-400" />
                          {social.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </motion.div>
          </div>
        </motion.div>

        {/* Hidden SEO content (visually hidden but present in DOM as per original) */}
        <div className="max-h-0 overflow-hidden">
          <details open>
            <summary>
              <span>
                <a href="https://www.pokemonplus.de">
                  <strong>pokemonplus.de</strong>
                </a>
              </span>
            </summary>
            <p>
              Screw heads are polished. This dedication to hidden beauty is a moral contract between
              the maker and the object—a promise that excellence exists for its own sake, not just
              for show.
            </p>
            <ul>
              <li>
                <a href="https://www.popreplicauhren.de/Sammlungde/rolex/">
                  <strong>replica rolex uhren</strong>
                </a>
              </li>
              <li>
                <a href="https://www.ukfakewatches.to/richard-miller.html">
                  <strong>fake richard miller watch</strong>
                </a>
              </li>
              <li>
                <a href="https://www.luxusreplikuhr.to/gucci.html">
                  <strong>billig gucci Uhr</strong>
                </a>
              </li>
              <li>
                <a href="https://www.luxusnehodinky.cz/Kolekcia/vacheron-constantin/">
                  <strong>repliky vacheron constantin hodinky</strong>
                </a>
              </li>
            </ul>
            <p>
              Using techniques centuries old, the enameler applies layers of vitreous enamel powder
              to a metal base, firing it in a kiln after each application to create a deep,
              luminous, and incredibly durable surface. Grand Feu enamel is a risk-laden art; a
              single mistake during firing can crack or discolor the entire piece, forcing the
              artisan to start anew.
            </p>
            <ul>
              <li>
                <a href="https://www.luksusfalskeklokker.com/kolleksjon/bvlgari/">
                  <strong>falske bvlgari klokker</strong>
                </a>
              </li>
              <li>
                <a href="https://www.lyxigafalskaklockor.com/Kollektion/panerai/">
                  <strong>falska panerai Klockor</strong>
                </a>
              </li>
              <li>
                <a href="https://www.relojesdelujofalsos.com/">
                  <strong>falsos Relojes</strong>
                </a>
              </li>
              <li>
                <a href="https://www.luksusfalskeure.com/Kollektion/gucci/">
                  <strong>falske gucci ure</strong>
                </a>
              </li>
            </ul>
          </details>
        </div>
      </Container>
    </footer>
  );
}
