'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-600 py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg text-primary-50 sm:text-xl">
            Let's discuss how we can help bring your vision to life. 
            Contact us today for a free consultation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary-600 hover:bg-neutral-50"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary-500 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-primary-700 opacity-20 blur-3xl"></div>
        </div>
      </Container>
    </section>
  );
}
