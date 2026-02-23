"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for side projects and small teams",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "Community access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "79",
      description: "For growing businesses and teams",
      features: [
        "Up to 20 team members",
        "100GB storage",
        "Advanced analytics",
        "Priority support",
        "Custom integrations",
        "API access",
        "Advanced security",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "249",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom contracts",
        "SLA guarantee",
        "Advanced compliance",
      ],
      popular: false,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            className={`p-8 h-full flex flex-col relative ${
              plan.popular ? "border-primary-500 border-2 shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="primary">Most Popular</Badge>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-secondary-600 text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline">
                <span className="text-5xl font-bold text-secondary-900">${plan.price}</span>
                <span className="text-secondary-600 ml-2">/month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? "primary" : "outline"}
              className="w-full"
              size="lg"
            >
              Get Started
            </Button>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
