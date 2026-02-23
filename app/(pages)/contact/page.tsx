"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, HelpCircle } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive digital solutions including web development, mobile apps, UI/UX design, and strategic consulting."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Most projects range from 4-12 weeks from kickoff to launch."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We provide maintenance packages and ongoing support to ensure your digital products continue to perform optimally."
  },
  {
    question: "What's your pricing model?",
    answer: "We offer flexible pricing based on project scope. Contact us for a custom quote tailored to your specific needs."
  }
];

export default function ContactPage() {
  return (
    <div className="py-24">
      <Container>
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4">Contact Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you. 
            Drop us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form and Info */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 mb-32"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <Card className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-900">Send us a message</h2>
              </div>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Full Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="John Doe" 
                    className="transition-all focus:scale-[1.01]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com"
                    className="transition-all focus:scale-[1.01]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="transition-all focus:scale-[1.01]"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-secondary-300 bg-white text-secondary-900 placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none focus:scale-[1.01]"
                    rows={6}
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>
                
                <Button 
                  className="w-full group"
                  type="button"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                
                <p className="text-sm text-secondary-500 text-center">
                  We typically respond within 24 hours during business days
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                    <a 
                      href="mailto:hello@example.com" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      hello@example.com
                    </a>
                    <p className="text-sm text-secondary-500 mt-1">
                      For general inquiries
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Phone</h3>
                    <a 
                      href="tel:+15551234567" 
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                    <p className="text-sm text-secondary-500 mt-1">
                      Mon-Fri, 9AM-6PM PST
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Office</h3>
                    <p className="text-secondary-600">
                      123 Business Street<br />
                      Suite 400<br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </motion.div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-secondary-900 mb-3">Office Hours</h3>
                  <div className="space-y-2 text-sm text-secondary-700">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span className="text-secondary-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-200">
                <p className="text-sm text-secondary-600">
                  <strong>Note:</strong> Emergency support available 24/7 for active projects
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary-600" />
              <h2 className="text-4xl font-bold text-secondary-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-secondary-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-12 text-center"
            variants={fadeInUp}
          >
            <Card className="p-8 bg-gradient-to-br from-secondary-50 to-secondary-100 border-secondary-200">
              <p className="text-secondary-700 mb-4">
                Can't find what you're looking for?
              </p>
              <Button variant="outline" size="lg">
                View Full FAQ
              </Button>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
