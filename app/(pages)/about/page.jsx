'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card, { CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

const values = [
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency, building trust with every interaction.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do, never settling for good enough.',
  },
  {
    icon: Users,
    title: 'Community',
    description: "We're proud to serve our local community and give back whenever we can.",
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We continuously improve our methods and stay current with industry best practices.',
  },
];

const team = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Specialist',
    bio: 'With over 20 years of experience, John leads our team with expertise and dedication.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Operations Manager',
    bio: 'Sarah ensures every project runs smoothly and every customer receives exceptional service.',
  },
  {
    name: 'Mike Davis',
    role: 'Senior Technician',
    bio: 'Mike brings technical excellence and attention to detail to every job.',
  },
];

export default function AboutPage() {
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
              Our Story
            </h1>
            <p className="mt-6 text-lg text-neutral-600 sm:text-xl">
              Built on a foundation of quality, integrity, and customer service.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg prose-neutral max-w-none">
              <p>
                Founded in 2020, YourBusiness began with a simple mission: to provide our community 
                with honest, reliable service at fair prices. What started as a one-person operation 
                has grown into a trusted team of professionals, but our core values remain the same.
              </p>
              <p>
                Every day, we work hard to earn the trust of our customers. We believe that quality 
                work speaks for itself, and our growing list of satisfied clients is the best testament 
                to our commitment. We&apos;re not just building a business; we&apos;re building relationships 
                that last.
              </p>
              <p>
                As a locally owned and operated business, we understand the unique needs of our community. 
                We&apos;re your neighbors, and we take pride in serving the area we call home. When you choose 
                us, you&apos;re supporting local business and getting personal attention that larger companies 
                simply can&apos;t match.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-neutral-50 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              These principles guide everything we do.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Experienced professionals dedicated to your satisfaction.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-neutral-200">
                    <div className="flex h-full items-center justify-center text-neutral-400">
                      <span className="text-sm">Photo</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="text-sm text-primary-600">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
