"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-28 bg-secondary-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border border-primary-700/40 p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary-500/60" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary-500/60" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary-500/60" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary-500/60" />

          <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-6 font-sans">
            Confier votre montre à des experts
          </p>

          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
            Votre garde-temps mérite
            <br />
            <em className="text-primary-400 not-italic">le meilleur soin</em>
          </h2>

          <p className="text-secondary-400 max-w-xl mx-auto mb-10 leading-relaxed font-sans">
            Prenez rendez-vous à notre atelier genevois. Nos maîtres horlogers vous accueillent
            et évaluent votre montre gratuitement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white text-sm uppercase tracking-widest hover:bg-primary-500 transition-colors font-sans"
            >
              Prendre Rendez-vous
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+41223104567"
              className="inline-flex items-center gap-2 px-8 py-4 border border-secondary-600 text-secondary-300 text-sm uppercase tracking-widest hover:border-primary-500 hover:text-primary-300 transition-colors font-sans"
            >
              <Phone className="w-4 h-4" />
              +41 22 310 45 67
            </a>
          </div>

          <p className="mt-8 text-xs text-secondary-600 font-sans tracking-wide">
            Lun–Ven : 9h–18h30 &nbsp;·&nbsp; Sam : 10h–17h &nbsp;·&nbsp; Consultation gratuite
          </p>
        </motion.div>
      </div>
    </section>
  );
}
