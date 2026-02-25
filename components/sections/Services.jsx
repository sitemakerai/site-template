'use client';

import { motion } from 'framer-motion';
import { Wrench, Clock, Award, HeartHandshake } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const services = [
  {
    icon: Wrench,
    title: 'Expert Craftsmanship',
    description: 'Our skilled professionals deliver exceptional quality with attention to every detail.',
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'We respect your time and ensure prompt, efficient service without compromising quality.',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Years of experience and countless satisfied customers speak to our commitment to excellence.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go above and beyond to exceed your expectations.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            We combine expertise, dedication, and personalized service to deliver outstanding results.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
