"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Zap, Shield, Globe, Code, Smartphone, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with cutting-edge performance and instant loading times.",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security built in from the ground up to protect your data.",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy worldwide with our CDN network for optimal performance everywhere.",
    },
    {
      icon: Code,
      title: "Developer First",
      description: "Clean APIs, comprehensive docs, and tools that developers actually want to use.",
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Beautiful responsive design that works flawlessly on any device or screen size.",
    },
    {
      icon: TrendingUp,
      title: "Analytics Built-in",
      description: "Deep insights and metrics to help you understand and grow your business.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Powerful features designed to help you build, launch, and scale your projects with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:border-primary-300 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
