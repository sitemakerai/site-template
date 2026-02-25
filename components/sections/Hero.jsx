'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Exceptional Service for Your Business
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-neutral-600 sm:text-xl"
          >
            We provide professional solutions tailored to meet your unique needs. 
            Quality, reliability, and customer satisfaction are at the heart of everything we do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100 opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary-200 opacity-20 blur-3xl"></div>
        </div>
      </Container>
    </section>
  );
}
