'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const activities = [
  {
    name: 'Spiele',
    href: 'https://spiele.20min.ch/?utm_campaign=startpage&utm_medium=navigation_link&utm_source=20min_ch',
    img: '/images/918ba89e-0484-4136-bfff-0ba3e0c43ff3.png',
    alt: 'Spiele',
    external: true,
  },
  {
    name: 'Fantasy League',
    href: 'https://fantasy.20min.ch/',
    img: '/images/02f87417-9bb4-4af5-894e-44ee44da0cdc.png',
    alt: 'Fantasy League',
    external: false,
  },
  {
    name: 'Horoscope',
    href: 'https://horoscope.20min.ch/',
    img: '/images/f97ae9b1-3c30-49f9-abb8-7c1822290ea4.png',
    alt: 'Horoscope',
    external: true,
  },
  {
    name: 'GOAT',
    href: 'https://audio.20min.ch/?language=de&platform=20min-de/',
    img: '/images/c12837f4-1d16-4791-9011-0cea4f4deaa4.png',
    alt: 'GOAT',
    external: false,
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
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Section3() {
  return (
    <section className="bg-white py-4 border-b border-neutral-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 whitespace-nowrap">
            Aktivitäten
          </span>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-2 sm:gap-4 list-none m-0 p-0"
          >
            {activities.map((activity) => (
              <motion.li key={activity.name} variants={itemVariants}>
                <a
                  href={activity.href}
                  target={activity.external ? '_blank' : undefined}
                  rel={activity.external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-50 hover:bg-primary-50 border border-neutral-200 hover:border-primary-200 transition-all duration-200 text-sm font-medium text-neutral-800 hover:text-primary-700 no-underline group"
                >
                  <img
                    src={activity.img}
                    alt={activity.alt}
                    width={40}
                    height={40}
                    className="w-6 h-6 object-contain rounded-sm flex-shrink-0"
                  />
                  <span>{activity.name}</span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </section>
  );
}
