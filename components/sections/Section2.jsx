'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const navItems = [
  {
    label: 'News',
    href: '/',
    src: '/images/8d503e6f-6c62-47a0-a4ba-089dc1bf4b77.png',
    alt: 'News',
  },
  {
    label: 'Video',
    href: '/video',
    src: '/images/d0b52dce-ffea-41e6-8606-7253dc1d16d3.png',
    alt: 'Video',
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
    src: '/images/23ac0492-5708-4698-91db-5963eda5387b.png',
    alt: 'Lifestyle',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Section2() {
  return (
    <section className="w-full bg-white py-3 border-b border-neutral-100">
      <Container>
        <div className="flex flex-row items-center gap-4 flex-wrap">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium text-neutral-500 whitespace-nowrap"
          >
            Inhalte
          </motion.span>

          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-row items-center gap-2 flex-wrap list-none m-0 p-0"
          >
            {navItems.map((navItem) => (
              <motion.li key={navItem.href} variants={item}>
                <Link
                  href={navItem.href}
                  className="flex flex-row items-center gap-1 text-sm font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-200 px-2 py-1 rounded-md hover:bg-neutral-50"
                >
                  <Image
                    src={navItem.src}
                    alt={navItem.alt}
                    width={40}
                    height={40}
                    className="w-6 h-6 mr-1 rounded-sm object-contain"
                  />
                  {navItem.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
