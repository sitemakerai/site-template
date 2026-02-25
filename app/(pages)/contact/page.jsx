'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/sections/ContactForm';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['(555) 123-4567', 'Mon-Fri, 8am-6pm'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@yourbusiness.com', 'We reply within 24 hours'],
  },
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Main Street', 'Anytown, ST 12345'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8am - 6pm', 'Saturday: 9am - 3pm', 'Sunday: Closed'],
  },
];

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              Have a question or ready to start your project? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Contact Information
                  </h2>
                  <p className="mt-2 text-neutral-600">
                    Reach out through any of these channels, and we&apos;ll get back to you promptly.
                  </p>
                </div>

                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                        <Icon className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="mt-1 text-sm text-neutral-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-50 py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Visit Our Location
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Stop by during business hours or schedule an appointment.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 overflow-hidden rounded-2xl">
              <div className="aspect-video bg-neutral-200">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-12 w-12 text-neutral-400" />
                    <p className="mt-2 text-neutral-500">Map Placeholder</p>
                    <p className="mt-1 text-sm text-neutral-400">
                      Integrate with Google Maps or Mapbox
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
