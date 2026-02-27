'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="bg-[rgb(249,249,249)] py-16 md:py-20">
      <Container>
        {/* Hero heading + subtitle */}
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1
            variants={itemVariants}
            className="font-['Cardo',serif] text-3xl font-bold leading-tight text-neutral-900 md:text-4xl lg:text-5xl"
          >
            Bienvenue au Centre Horloger
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base text-neutral-700 md:text-lg"
          >
            Votre source d'excellence horlogère à Neuchâtel : formations et réparations accréditées
            par les marques prestigieuses de l'industrie horlogère Suisse.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-2">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Contacter-nous
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Spacer */}
        <div className="h-12 md:h-16" />

        {/* Section 1: Formation */}
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Text column */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col gap-5 md:w-[40%]"
          >
            <h3 className="font-['Cardo',serif] text-xl font-bold text-neutral-900 md:text-2xl">
              Formation et découverte de l'horlogerie
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                "Découverte de l'horlogerie",
                'Assemblez votre propre montre de A-Z',
                'Dans un espace privatif à Neuchâtel',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-neutral-700 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 rounded-full bg-primary-100 p-0.5">
                    <Check className="h-4 w-4 text-primary-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link href="/formation">
                <Button variant="primary" size="md">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-[50%]"
          >
            <figure className="flex flex-col gap-1">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/centrehorloger-formation.jpeg"
                  alt="Formation horlogerie au Centre Horloger"
                  width={1920}
                  height={1280}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="text-center text-sm text-neutral-500">
                timfocus.ch
              </figcaption>
            </figure>
          </motion.div>
        </motion.div>

        {/* Spacer */}
        <div className="h-12 md:h-16" />

        {/* Section 2: Réparation */}
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Image column */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-[50%]"
          >
            <figure className="flex flex-col gap-1">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/centrehorloger-reparation-1200x800.jpeg"
                  alt="Réparation et SAV certifié au Centre Horloger"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="text-center text-sm text-neutral-500">
                timfocus.ch
              </figcaption>
            </figure>
          </motion.div>

          {/* Text column */}
          <motion.div
            variants={itemVariants}
            className="flex w-full flex-col gap-5 md:w-[40%]"
          >
            <h3 className="font-['Cardo',serif] text-xl font-bold text-neutral-900 md:text-2xl">
              Réparation et SAV Certifié
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                'Certifié Oméga, Longines, Rado, Balmain, Mido, Certina, etc…',
                "Le CentreHorloger s'occupe de toute vos réparations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-neutral-700 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 rounded-full bg-primary-100 p-0.5">
                    <Check className="h-4 w-4 text-primary-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <Link href="/sous-traitance-sav-certifie">
                <Button variant="primary" size="md">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
