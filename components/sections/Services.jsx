'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const services = [
  {
    label: 'Wetter',
    href: '/wetter-uebersicht',
    src: '/images/184f0c01-7ac1-464d-9e42-d360cd9466f3.png',
    alt: 'Wetter',
    external: false,
  },
  {
    label: 'Live TV',
    href: 'https://www.20min.ch/video/live-tv',
    src: '/images/efd5608f-2d4b-4858-bd66-3aae578a44df.png',
    alt: 'Live TV',
    external: true,
  },
  {
    label: 'Gutscheine',
    href: 'https://www.deals20min.ch/',
    src: '/images/38b0480d-e156-4232-9a16-9dced48ae7f5.png',
    alt: 'Gutscheine',
    external: false,
    nofollow: true,
  },
  {
    label: 'E-paper Archiv',
    href: 'https://epaper.20min.ch',
    src: '/images/b0e59a91-d331-402e-92d6-b9a445bd5c4f.png',
    alt: 'E-paper Archiv',
    external: true,
  },
  {
    label: 'RSS Feed',
    href: 'https://www.20min.ch/story/rssfeed-749569359678',
    src: '/images/4cdcc07e-d7b4-4583-bd44-155026b2fc93.png',
    alt: 'RSS Feed',
    external: true,
  },
  {
    label: 'Werbeformate',
    href: 'https://advertising.20min.ch/',
    src: '/images/1b7456a3-0aea-427f-9285-edff757f74b1.png',
    alt: 'Werbeformate',
    external: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section className="w-full bg-white py-4 border-b border-neutral-200">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-semibold uppercase tracking-widest text-neutral-500 shrink-0"
          >
            Services
          </motion.span>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-x-2 gap-y-2"
          >
            {services.map((service, idx) => (
              <motion.li key={idx} variants={itemVariants}>
                <Link
                  href={service.href}
                  target={service.external ? '_blank' : undefined}
                  rel={
                    service.external
                      ? 'noopener noreferrer'
                      : service.nofollow
                      ? 'nofollow'
                      : undefined
                  }
                  className="flex items-center gap-1 px-2 py-1.5 rounded-md text-sm font-medium text-neutral-800 hover:text-primary-600 hover:bg-neutral-100 transition-colors duration-200"
                >
                  <img
                    src={service.src}
                    alt={service.alt}
                    width={40}
                    height={40}
                    className="w-8 h-8 object-contain rounded mr-1"
                  />
                  <span className="whitespace-nowrap">{service.label}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
