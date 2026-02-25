"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/Input";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const faqs = [
  {
    question: "Combien coûte une révision complète ?",
    answer:
      "Le tarif dépend du calibre, de la marque et de l'état de la montre. Comptez en général entre CHF 250 et CHF 800. Un devis gratuit vous est remis après examen.",
  },
  {
    question: "Quel est le délai pour une révision ?",
    answer:
      "Pour une révision standard, comptez 3 à 6 semaines. La restauration d'une pièce de collection peut nécessiter davantage de temps selon la disponibilité des pièces.",
  },
  {
    question: "Acceptez-vous toutes les marques ?",
    answer:
      "Oui, nous intervenons sur l'ensemble des grandes manufactures suisses (Rolex, Patek Philippe, AP, IWC, Jaeger-LeCoultre, etc.) ainsi que les montres vintage.",
  },
  {
    question: "Proposez-vous un service d'expertise pour assurance ?",
    answer:
      "Absolument. Nous établissons des certificats d'authenticité et d'estimation reconnus par les compagnies d'assurance, sur rendez-vous.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-secondary-950 min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-secondary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-6 font-sans">
              Nous Contacter
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary-600/50" />
              <div className="w-1 h-1 rounded-full bg-primary-500" />
              <div className="h-px w-12 bg-primary-600/50" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
              Prenez Rendez-vous
            </h1>
            <p className="text-secondary-400 text-lg max-w-xl mx-auto leading-relaxed font-sans">
              Notre atelier vous accueille du lundi au samedi. Apportez votre montre ou
              décrivez-nous votre besoin — nous vous répondrons sous 24 heures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Form */}
            <motion.div variants={fadeInUp}>
              <div className="border border-secondary-800 p-10 bg-secondary-900/50">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 border border-primary-600/50 flex items-center justify-center">
                    <Send className="w-4 h-4 text-primary-500" />
                  </div>
                  <h2 className="font-serif text-2xl text-white font-semibold">Envoyer un message</h2>
                </div>
                <form className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-secondary-400 mb-2 font-sans">
                      Nom complet
                    </label>
                    <Input type="text" placeholder="Jean Dupont" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-secondary-400 mb-2 font-sans">
                      Adresse e-mail
                    </label>
                    <Input type="email" placeholder="jean@exemple.ch" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-secondary-400 mb-2 font-sans">
                      Téléphone (optionnel)
                    </label>
                    <Input type="tel" placeholder="+41 79 000 00 00" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-secondary-400 mb-2 font-sans">
                      Votre montre & demande
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-secondary-700 bg-secondary-900 text-white placeholder:text-secondary-600 focus:outline-none focus:border-primary-500 transition-colors resize-none font-sans text-sm"
                      rows={5}
                      placeholder="Décrivez votre montre (marque, référence, année) et votre besoin..."
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full px-6 py-4 bg-primary-600 text-white text-sm uppercase tracking-widest hover:bg-primary-500 transition-colors font-sans"
                  >
                    Envoyer le message
                  </button>
                  <p className="text-xs text-secondary-600 text-center font-sans">
                    Réponse garantie sous 24 heures ouvrables
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="border border-secondary-800 p-8 bg-secondary-900/50">
                <h2 className="font-serif text-xl text-white font-semibold mb-6">Informations pratiques</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: "Adresse",
                      value: "12, Rue du Rhône\n1204 Genève, Suisse",
                      href: undefined,
                    },
                    {
                      icon: Phone,
                      label: "Téléphone",
                      value: "+41 22 310 45 67",
                      href: "tel:+41223104567",
                    },
                    {
                      icon: Mail,
                      label: "E-mail",
                      value: "contact@centrehorloger.ch",
                      href: "mailto:contact@centrehorloger.ch",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-9 h-9 border border-primary-600/40 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-widest text-secondary-500 mb-1 font-sans">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-secondary-200 hover:text-primary-300 transition-colors text-sm font-sans"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-secondary-200 text-sm font-sans whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border border-secondary-700/40 p-8 bg-secondary-900/50">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-primary-400" />
                  <h3 className="font-serif text-lg text-white font-semibold">Horaires d&apos;ouverture</h3>
                </div>
                <div className="space-y-3 font-sans">
                  {[
                    { day: "Lundi – Vendredi", hours: "9h00 – 18h30" },
                    { day: "Samedi", hours: "10h00 – 17h00" },
                    { day: "Dimanche", hours: "Fermé" },
                  ].map((row) => (
                    <div key={row.day} className="flex justify-between text-sm">
                      <span className="text-secondary-400">{row.day}</span>
                      <span className={row.hours === "Fermé" ? "text-secondary-600" : "text-secondary-200"}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 pt-5 border-t border-secondary-800 text-xs text-secondary-500 font-sans">
                  Consultation initiale gratuite. Devis sans engagement.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary-900 border-t border-secondary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4 font-sans">FAQ</p>
            <h2 className="font-serif text-3xl text-white font-bold">Questions fréquentes</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-px"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.question}
                variants={fadeInUp}
                className="bg-secondary-950 border border-secondary-800 p-8 hover:border-primary-700/50 transition-colors"
              >
                <h3 className="font-serif text-lg text-white font-semibold mb-3">{faq.question}</h3>
                <p className="text-secondary-400 text-sm leading-relaxed font-sans">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
