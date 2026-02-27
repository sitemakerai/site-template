'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Section5() {
  return (
    <section className="bg-white border-t border-neutral-200 py-8">
      <Container>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-neutral-900 font-semibold text-base sm:text-lg"
          >
            Hol dir die 20 Minuten App!
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center gap-3 sm:items-end"
          >
            <p className="text-neutral-600 text-sm">Bleib auf dem Laufenden.</p>
            <div className="flex flex-row items-center gap-3">
              <Link
                href="https://apps.apple.com/us/app/20-minuten-nachrichten/id285688859"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download 20 Minuten from Apple App Store"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/icons/footer/apps/de/ios.svg"
                  alt="20 Minuten Apple App Store"
                  width={120}
                  height={40}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=ch.iAgentur.i20Min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download 20 Minuten from Google Play Store"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/icons/footer/apps/de/android.svg"
                  alt="20 Minuten Google Play Store"
                  width={120}
                  height={40}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
