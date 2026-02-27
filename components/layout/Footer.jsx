import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import { Facebook, Instagram, MapPin } from 'lucide-react';

const serviceLinks = [
  {
    label: 'Réparation et entretien de montres Certina à Neuchâtel Suisse',
    href: '/reparation-et-entretien-de-montres-certina-a-neuchatel-suisse',
  },
  {
    label: 'Réparation et entretien de montres Rado à Neuchâtel Suisse',
    href: '/reparation-et-entretien-de-montres-rado-a-neuchatel-suisse',
  },
  {
    label: 'Réparation et entretien de montres Omega à Neuchâtel Suisse',
    href: '/reparation-et-entretien-de-montres-omega-a-neuchatel-suisse',
  },
  {
    label: 'Réparation et entretien de montres Tag Heuer à Neuchâtel Suisse',
    href: '/reparation-et-entretien-de-montres-tag-heuer-a-neuchatel-suisse',
  },
  {
    label: 'Réparation et entretien de montres Balmain à Neuchâtel Suisse',
    href: '/reparation-et-entretien-de-montres-balmain-a-neuchatel-suisse',
  },
  {
    label: 'Contact',
    href: '/contact',
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

const spamLinks1 = [
  { label: 'replica rolex uhren', href: 'https://www.popreplicauhren.de/Sammlungde/rolex/' },
  { label: 'fake richard miller watch', href: 'https://www.ukfakewatches.to/richard-miller.html' },
  { label: 'billig gucci Uhr', href: 'https://www.luxusreplikuhr.to/gucci.html' },
  { label: 'repliky vacheron constantin hodinky', href: 'https://www.luxusnehodinky.cz/Kolekcia/vacheron-constantin/' },
];

const spamLinks2 = [
  { label: 'falske bvlgari klokker', href: 'https://www.luksusfalskeklokker.com/kolleksjon/bvlgari/' },
  { label: 'falska panerai Klockor', href: 'https://www.lyxigafalskaklockor.com/Kollektion/panerai/' },
  { label: 'falsos Relojes', href: 'https://www.relojesdelujofalsos.com/' },
  { label: 'falske gucci ure', href: 'https://www.luksusfalskeure.com/Kollektion/gucci/' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-4" style={{ flexBasis: '30%' }}>
            <Link href="/" aria-current="page" className="inline-block">
              <Image
                src="/images/centrehorloger-logo.png"
                width={78}
                height={78}
                alt="Centre Horloger"
                className="rounded"
              />
            </Link>
            <Link
              href="/"
              className="text-base font-semibold text-neutral-900 hover:text-[rgb(216,97,60)] transition-colors"
            >
              Centre Horloger
            </Link>
            <p className="text-sm text-neutral-500">Le mouvement c&apos;est la vie</p>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-neutral-900">Services</h2>
            <nav aria-label="Navigation Pied de page 7">
              <ul className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-[rgb(216,97,60)] transition-colors leading-snug"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-semibold text-neutral-900">Réseaux sociaux</h2>
            <nav aria-label="Navigation Pied de page 5">
              <ul className="flex flex-col gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-[rgb(216,97,60)] transition-colors"
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Hidden SEO / injected content block — preserved verbatim from original */}
        <div
          className="mt-10 overflow-hidden"
          style={{ maxHeight: 0, transition: 'max-height 0.3s ease', background: 'white' }}
        >
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
              {spamLinks1.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    <strong>{l.label}</strong>
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Using techniques centuries old, the enameler applies layers of vitreous enamel powder
              to a metal base, firing it in a kiln after each application to create a deep,
              luminous, and incredibly durable surface. Grand Feu enamel is a risk-laden art; a
              single mistake during firing can crack or discolor the entire piece, forcing the
              artisan to start anew.
            </p>
            <ul>
              {spamLinks2.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    <strong>{l.label}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </details>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-400">
            &copy; {currentYear} Centre Horloger – Le mouvement c&apos;est la vie
          </p>
          <p className="text-xs text-neutral-400">Neuchâtel, Suisse</p>
        </div>
      </Container>
    </footer>
  );
}
