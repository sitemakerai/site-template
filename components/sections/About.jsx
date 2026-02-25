'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';

const features = [
  'Locally owned and operated',
  'Over 15 years of experience',
  'Certified professionals',
  'Satisfaction guaranteed',
];

export default function About() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl bg-neutral-200 lg:aspect-auto lg:h-full">
              <div className="flex h-full items-center justify-center text-neutral-400">
                <span className="text-sm">Image Placeholder</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              About Our Business
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              We're a family-owned business dedicated to serving our community with integrity, 
              expertise, and a personal touch. Every project we undertake reflects our commitment 
              to quality and customer satisfaction.
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              Our team brings together years of experience and a passion for what we do. 
              We believe in building lasting relationships with our clients through honest 
              communication and exceptional service.
            </p>

            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-600" />
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
