import { PricingSection } from "@/components/sections/PricingSection";

export default function PricingPage() {
  return (
    <div className="bg-secondary-950 min-h-screen">
      {/* Header */}
      <section className="py-24 border-b border-secondary-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-400 mb-6 font-sans">
            Nos Tarifs
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-primary-600/50" />
            <div className="w-1 h-1 rounded-full bg-primary-500" />
            <div className="h-px w-12 bg-primary-600/50" />
          </div>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6">
            Transparence & Qualité
          </h1>
          <p className="text-secondary-400 text-lg max-w-xl mx-auto leading-relaxed font-sans">
            Nos tarifs reflètent le soin apporté à chaque intervention. Chaque devis est
            gratuit et sans engagement, établi après examen de votre garde-temps.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </div>
      </section>

      {/* Note */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary-500 text-sm font-sans leading-relaxed">
            Les tarifs indiqués sont des estimations hors pièces détachées. Le coût final
            vous est communiqué par devis écrit avant tout commencement des travaux.
            Paiement accepté en CHF et EUR, en espèces ou par virement bancaire.
          </p>
        </div>
      </section>
    </div>
  );
}
