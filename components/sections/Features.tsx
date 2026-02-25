"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Clock, Shield, Award, Wrench, Gem, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Réparation Expertisée",
      description: "Réparation complète de montres mécaniques, automatiques et à quartz par nos maîtres horlogers certifiés.",
    },
    {
      icon: Shield,
      title: "Garantie Assurée",
      description: "Toutes nos réparations sont garanties 2 ans. Votre montre est assurée pendant toute la durée de l'intervention.",
    },
    {
      icon: Award,
      title: "Marques de Prestige",
      description: "Nous travaillons avec les plus grandes marques: Rolex, Omega, Breitling, TAG Heuer, et bien d'autres.",
    },
    {
      icon: Wrench,
      title: "Outillage Professionnel",
      description: "Équipés des derniers outils de précision et technologies pour une restauration parfaite.",
    },
    {
      icon: Gem,
      title: "Pièces Authentiques",
      description: "Utilisation exclusive de pièces détachées d'origine ou de qualité équivalente certifiée.",
    },
    {
      icon: Heart,
      title: "Passion Artisanale",
      description: "Une approche personnalisée et passionnée pour redonner vie à vos garde-temps précieux.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Nos Services d'Excellence
          </h2>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Un savoir-faire artisanal et des technologies de pointe pour prendre soin de vos montres les plus précieuses.
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
