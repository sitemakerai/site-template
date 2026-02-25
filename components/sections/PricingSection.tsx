"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Entretien Standard",
    price: "CHF 250",
    subtitle: "à partir de",
    description: "Pour les montres de ville et sport en bon état général.",
    features: [
      "Démontage & nettoyage complet",
      "Remplacement des joints",
      "Lubrification du calibre",
      "Réglage chronométrique",
      "Vérification de l'étanchéité",
    ],
    featured: false,
    cta: "Demander un devis",
  },
  {
    name: "Révision Complète",
    price: "CHF 450",
    subtitle: "à partir de",
    description: "Révision intégrale recommandée tous les 5 à 7 ans pour les montres mécaniques.",
    features: [
      "Tout le Standard inclus",
      "Remplacement des pièces usées",
      "Polissage ou brossage du boîtier",
      "Remplacement du verre saphir",
      "Contrôle sur 6 positions",
      "Garantie 24 mois",
    ],
    featured: true,
    cta: "Prendre rendez-vous",
  },
  {
    name: "Restauration",
    price: "Sur devis",
    subtitle: "",
    description: "Pour les pièces de collection, les montres vintage et les complications rares.",
    features: [
      "Diagnostic approfondi",
      "Pièces d'origine ou reproduction à l'identique",
      "Restauration du cadran & aiguilles",
      "Documentation photographique",
      "Certificat d'authenticité",
      "Délai adapté à la pièce",
    ],
    featured: false,
    cta: "Nous consulter",
  },
];

export function PricingSection() {
  return (
    <div className="grid md:grid-cols-3 gap-px bg-secondary-800">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`flex flex-col p-10 relative ${
            plan.featured
              ? "bg-secondary-800 border-t-2 border-t-primary-500"
              : "bg-secondary-950"
          }`}
        >
          {plan.featured && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-primary-600 text-white text-[10px] uppercase tracking-widest px-4 py-1 font-sans">
                Recommandé
              </span>
            </div>
          )}

          <div className="mb-8">
            <h3 className="font-serif text-xl text-white font-semibold mb-3">{plan.name}</h3>
            <p className="text-secondary-400 text-sm mb-5 leading-relaxed font-sans">{plan.description}</p>
            <div>
              {plan.subtitle && (
                <p className="text-xs uppercase tracking-widest text-secondary-500 mb-1 font-sans">{plan.subtitle}</p>
              )}
              <p className="font-serif text-3xl text-primary-400 font-bold">{plan.price}</p>
            </div>
          </div>

          <ul className="space-y-3 mb-10 flex-grow">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-secondary-300 text-sm font-sans">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm uppercase tracking-widest font-sans transition-colors ${
              plan.featured
                ? "bg-primary-600 text-white hover:bg-primary-500"
                : "border border-secondary-700 text-secondary-300 hover:border-primary-500 hover:text-primary-300"
            }`}
          >
            {plan.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
