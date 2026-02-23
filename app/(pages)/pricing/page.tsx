import { Container } from "@/components/ui/Container";
import { PricingSection } from "@/components/sections/PricingSection";
import { Badge } from "@/components/ui/Badge";

export default function PricingPage() {
  return (
    <div className="py-24">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-4">Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Flexible pricing options designed to scale with your business needs
          </p>
        </div>
        <PricingSection />
      </Container>
    </div>
  );
}
