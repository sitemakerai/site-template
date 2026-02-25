import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Container from '@/components/ui/Container';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary-600"></div>
                <span className="text-xl font-bold text-neutral-900">YourBusiness</span>
              </div>
              <p className="mt-4 max-w-md text-sm text-neutral-600">
                Providing exceptional service and quality to our community since 2020. 
                Your trusted partner for all your needs.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Mail className="h-4 w-4" />
                  <span>hello@yourbusiness.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <MapPin className="h-4 w-4" />
                  <span>123 Main St, Anytown, ST 12345</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Company</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-900">Legal</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between border-t border-neutral-200 pt-8 md:flex-row">
            <p className="text-sm text-neutral-600">
              © {currentYear} YourBusiness. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-neutral-600 hover:text-primary-600"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
