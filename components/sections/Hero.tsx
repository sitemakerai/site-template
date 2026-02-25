"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-white -z-10" />
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Expertise horlogère depuis 1985</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
              Centre
              <span className="text-primary-600"> Horloger</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Spécialistes en réparation, vente et restauration de montres et horloges de prestige. L'excellence horlogère suisse à votre service.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group">
                Prendre Rendez-vous
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Nos Services
              </Button>
            </div>

            {/* Social Proof */}
            <p className="mt-12 text-sm text-secondary-500">
              Plus de 10'000 montres réparées avec succès
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
