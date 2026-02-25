"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-secondary-950">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,16,46,0.10)_0%,_rgba(29,52,97,0.08)_50%,_transparent_70%)] pointer-events-none" />

      {/* Thin decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-primary-600/40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-transparent to-primary-600/40" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.35em] text-primary-400 mb-8 font-sans">
            Maîtres Horlogers · Genève · depuis 1887
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-primary-600/50" />
            <div className="w-1 h-1 rounded-full bg-primary-500" />
            <div className="h-px w-16 bg-primary-600/50" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
            L&apos;art du temps,{" "}
            <em className="text-primary-400 not-italic">transmis</em>
            <br />
            depuis cinq générations
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-secondary-400 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
            Vente, restauration et entretien de montres de prestige.
            Notre atelier genevois perpétue les gestes ancestraux de l'horlogerie suisse.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/collections"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white text-sm uppercase tracking-widest hover:bg-primary-500 transition-colors font-sans"
            >
              Découvrir les Collections
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border border-secondary-600 text-secondary-300 text-sm uppercase tracking-widest hover:border-primary-500 hover:text-primary-300 transition-colors font-sans"
            >
              Nos Services
            </Link>
          </div>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-8"
        >
          {[
            { label: "Ans d'excellence", value: "137" },
            { label: "Montres restaurées", value: "12 000+" },
            { label: "Marques partenaires", value: "40+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl text-primary-400 font-bold">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-secondary-500 mt-1 font-sans">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
