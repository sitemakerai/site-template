import Link from "next/link";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = {
    boutique: [
      { name: "Collections", href: "/collections" },
      { name: "Marques", href: "/collections" },
      { name: "Nouveautés", href: "/collections" },
    ],
    services: [
      { name: "Révision & Entretien", href: "/services" },
      { name: "Restauration", href: "/services" },
      { name: "Expertise", href: "/services" },
    ],
    maison: [
      { name: "Notre Histoire", href: "/about" },
      { name: "L'Atelier", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-secondary-950 border-t border-primary-700/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full border border-primary-500 flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary-400" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-base font-bold text-white">Centre Horloger</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary-400">Genève · Est. 1887</span>
              </div>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed mb-6 max-w-xs">
              Maîtres horlogers depuis cinq générations, nous perpétuons l'excellence de l'horlogerie suisse au cœur de Genève.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-secondary-400 text-sm">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <span>12, Rue du Rhône, 1204 Genève</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-400 text-sm">
                <Phone className="w-4 h-4 text-primary-500 shrink-0" />
                <span>+41 22 310 45 67</span>
              </li>
              <li className="flex items-center gap-2 text-secondary-400 text-sm">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span>contact@centrehorloger.ch</span>
              </li>
            </ul>
          </div>

          {/* Boutique */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-400 mb-5 font-sans">Boutique</h3>
            <ul className="space-y-3">
              {footerLinks.boutique.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary-400 hover:text-primary-300 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-400 mb-5 font-sans">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary-400 hover:text-primary-300 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* La Maison */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-primary-400 mb-5 font-sans">La Maison</h3>
            <ul className="space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary-400 hover:text-primary-300 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-500 text-xs tracking-wide">
            © {new Date().getFullYear()} Centre Horloger SA — Tous droits réservés
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-secondary-500 hover:text-primary-400 text-xs transition-colors">
              Confidentialité
            </Link>
            <Link href="#" className="text-secondary-500 hover:text-primary-400 text-xs transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
