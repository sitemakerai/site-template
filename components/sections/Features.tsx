"use client";

import { Wrench, Award, Clock, Gem, Eye, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Wrench,
    title: "Révision Complète",
    description:
      "Démontage, nettoyage aux ultrasons, remplacement des joints et lubrification. Chaque pièce est examinée sous loupe binoculaire.",
  },
  {
    icon: Award,
    title: "Pièces Authentiques",
    description:
      "Nous utilisons exclusivement des pièces d'origine certifiées par les manufactures pour préserver la valeur de vos garde-temps.",
  },
  {
    icon: Clock,
    title: "Horlogerie de Précision",
    description:
      "Réglage chronométrique sur six positions, conforme aux normes COSC. Précision garantie à ±4 secondes par jour.",
  },
  {
    icon: Gem,
    title: "Restauration Esthétique",
    description:
      "Repolissage du boîtier, remplacement du verre saphir et restauration des cadrans. Rendu à l'état d'origine ou personnalisé.",
  },
  {
    icon: Eye,
    title: "Expertise & Estimation",
    description:
      "Certificats d'authenticité, expertises successorales et estimations pour assurance ou revente par nos maîtres horlogers.",
  },
  {
    icon: ShieldCheck,
    title: "Garantie 2 Ans",
    description:
      "Toutes nos interventions sont couvertes par une garantie de 24 mois. Votre satisfaction est notre engagement absolu.",
  },
];

export function Features() {
  return (
    <section className="py-28 bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4 font-sans">Notre Savoir-Faire</p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary-600/50" />
            <div className="w-1 h-1 rounded-full bg-primary-500" />
            <div className="h-px w-12 bg-primary-600/50" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-5">
            Excellence à chaque détail
          </h2>
          <p className="text-secondary-400 max-w-xl mx-auto leading-relaxed font-sans text-base">
            De la révision courante à la restauration d'une pièce de collection, notre atelier maîtrise
            tous les aspects de l'horlogerie mécanique suisse.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-secondary-800">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-secondary-900 p-10 hover:bg-secondary-800/60 transition-colors group"
              >
                <div className="w-10 h-10 border border-primary-600/50 flex items-center justify-center mb-6 group-hover:border-primary-400 transition-colors">
                  <Icon className="w-5 h-5 text-primary-500 group-hover:text-primary-300 transition-colors" />
                </div>
                <h3 className="font-serif text-lg text-white font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-400 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
