"use client";

import { motion } from "framer-motion";
import { Clock, Wrench, Award, Users } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const team = [
  {
    name: "Henri Meylan",
    role: "Maître Horloger, 5e génération",
    icon: Clock,
    bio: "Formé à l'École d'Horlogerie de Genève, Henri perpétue le savoir-faire familial transmis depuis 1887. Spécialiste des montres à complications.",
  },
  {
    name: "Isabelle Favre",
    role: "Restauratrice & Experte",
    icon: Wrench,
    bio: "Diplômée du WOSTEP avec 18 ans d'expérience. Isabelle est reconnue pour la restauration de montres de poche anciennes et de garde-temps de collection.",
  },
  {
    name: "Marc-Antoine Perret",
    role: "Conseiller en Acquisition",
    icon: Award,
    bio: "Ancien commissaire-priseur spécialisé en horlogerie, il accompagne nos clients dans l'acquisition et la valorisation de leur patrimoine horloger.",
  },
];

const values = [
  {
    icon: Clock,
    title: "Patience & Précision",
    description:
      "L'horlogerie exige une patience absolue. Chaque geste est posé avec soin, chaque réglage vérifié et revérifié avant de restituer un garde-temps.",
  },
  {
    icon: Award,
    title: "Authenticité",
    description:
      "Nous n'utilisons que des pièces d'origine. La valeur d'une montre réside dans son intégrité — nous la préservons à chaque intervention.",
  },
  {
    icon: Wrench,
    title: "Savoir-Faire Ancestral",
    description:
      "Cinq générations de transmission orale et gestuelle. Un art que ni les machines ni l'intelligence artificielle ne peuvent reproduire.",
  },
  {
    icon: Users,
    title: "Relation de Confiance",
    description:
      "Vos montres sont souvent des héritages. Nous les traitons avec le respect qu'elles méritent et une transparence totale sur chaque intervention.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-secondary-950 min-h-screen">
      {/* Hero */}
      <section className="py-28 border-b border-secondary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-6 font-sans">
              Notre Histoire
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary-600/50" />
              <div className="w-1 h-1 rounded-full bg-primary-500" />
              <div className="h-px w-12 bg-primary-600/50" />
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-8 leading-tight">
              Cinq générations au service
              <br />
              <em className="text-primary-400 not-italic">de l&apos;excellence horlogère</em>
            </h1>
            <p className="text-secondary-400 text-lg max-w-2xl mx-auto leading-relaxed font-sans">
              Fondé en 1887 par Gustave Meylan, Centre Horloger est aujourd'hui dirigé par
              Henri Meylan, son arrière-arrière-petit-fils. La même passion, les mêmes valeurs,
              au cœur de Genève.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4 font-sans">Chronologie</p>
            <h2 className="font-serif text-3xl text-white font-bold">137 ans d&apos;histoire</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-0"
          >
            {[
              { year: "1887", event: "Gustave Meylan ouvre sa première boutique Rue du Rhône." },
              { year: "1923", event: "Louis Meylan développe l'atelier de restauration, spécialisé en complications." },
              { year: "1961", event: "Pierre Meylan devient partenaire officiel de plusieurs grandes manufactures suisses." },
              { year: "1998", event: "Jean-Philippe Meylan modernise l'atelier et introduit les équipements ultrasons." },
              { year: "2015", event: "Henri Meylan prend la direction et lance le service d'expertise indépendante." },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className="flex gap-8 items-start group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-primary-700/40" />
                  <div className="w-2 h-2 rounded-full bg-primary-500 group-hover:bg-primary-300 transition-colors" />
                  {index < 4 && <div className="w-px flex-1 min-h-[3rem] bg-primary-700/40" />}
                </div>
                <div className="pb-10">
                  <span className="font-serif text-primary-400 text-xl font-bold">{item.year}</span>
                  <p className="text-secondary-400 text-sm mt-1 leading-relaxed font-sans">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4 font-sans">L&apos;Équipe</p>
            <h2 className="font-serif text-4xl text-white font-bold">Nos Maîtres Artisans</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-px bg-secondary-800"
          >
            {team.map((member) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="bg-secondary-950 p-10 text-center group hover:bg-secondary-900 transition-colors"
                >
                  <div className="w-16 h-16 rounded-full border border-primary-600/40 flex items-center justify-center mx-auto mb-6 group-hover:border-primary-400 transition-colors">
                    <Icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary-400 text-xs uppercase tracking-widest mb-4 font-sans">{member.role}</p>
                  <p className="text-secondary-400 text-sm leading-relaxed font-sans">{member.bio}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary-900 border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-4 font-sans">Nos Valeurs</p>
            <h2 className="font-serif text-4xl text-white font-bold">Ce qui nous guide</h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary-800"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="bg-secondary-900 p-8 group hover:bg-secondary-800/60 transition-colors"
                >
                  <div className="w-10 h-10 border border-primary-600/50 flex items-center justify-center mb-5 group-hover:border-primary-400 transition-colors">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-semibold mb-3">{value.title}</h3>
                  <p className="text-secondary-400 text-sm leading-relaxed font-sans">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
