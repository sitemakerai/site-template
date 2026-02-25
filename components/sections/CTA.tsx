"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Votre montre mérite le meilleur
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Confiez-nous votre garde-temps précieux. Devis gratuit et diagnostic complet sous 24h. Plus de 35 ans d'expertise à votre service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-primary-600 hover:bg-primary-50"
            >
              Devis Gratuit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Nous Contacter
            </Button>
          </div>
          <p className="mt-8 text-sm text-primary-100">
            Devis gratuit • Diagnostic sous 24h • Garantie 2 ans
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
