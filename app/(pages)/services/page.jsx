'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, DollarSign, Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const services = [
  {
    title: 'Standard Service',
    description: 'Perfect for regular maintenance and routine needs.',
    price: 'From $99',
    features: [
      'Comprehensive inspection',
      'Quality materials',
      'Professional service',
      '30-day warranty',
      'Flexible scheduling',
    ],
    badge: 'Popular',
  },
  {
    title: 'Premium Service',
    description: 'Enhanced service with priority support and extended coverage.',
    price: 'From $199',
    features: [
      'Everything in Standard',
      'Priority scheduling',
      'Premium materials',
      '90-day warranty',
      'Follow-up consultation',
      'Satisfaction guaranteed',
    ],
    badge: 'Best Value',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored service packages for unique requirements.',
    price: 'Custom Quote',
    features: [
      'Personalized consultation',
      'Custom project planning',
      'Specialized expertise',
      'Extended warranty options',
      'Ongoing support',
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We respect your time and complete projects efficiently without sacrificing quality.',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Transparent, competitive pricing with no hidden fees or surprise charges.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'We stand behind our work with comprehensive warranties and ongoing support.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              Professional solutions designed to meet your specific needs, delivered with 
              expertise and care.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col">
                  <CardHeader>
                    {service.badge && (
                      <Badge variant="primary" className="mb-2 w-fit">
                        {service.badge}
                      </Badge>
                    )}
                    <CardTitle>{service.title}</CardTitle>
                    <p className="text-sm text-neutral-600">{service.description}</p>
                    <div className="mt-4 text-3xl font-bold text-neutral-900">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="mt-6">
                    <Button className="w-full">Get Started</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-neutral-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Why Work With Us
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Experience the difference that professional service makes.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">{benefit.title}</h3>
                  <p className="mt-2 text-neutral-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-primary-600 px-8 py-16 text-center lg:px-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-50">
              Contact us today to discuss your project and receive a free quote.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary-600 hover:bg-neutral-50"
              >
                Request a Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
