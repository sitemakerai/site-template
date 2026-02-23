"use client";

import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Target, 
  Users, 
  Sparkles,
  Heart,
  Zap,
  User,
  Briefcase,
  Code
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  return (
    <div className="py-24">
      {/* Hero Section */}
      <Container>
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-24"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6">About Us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            Building the future, <br />
            <span className="text-primary-600">one project at a time</span>
          </h1>
          <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
            We're a team of passionate individuals dedicated to creating exceptional 
            digital experiences that make a lasting impact.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="max-w-3xl mx-auto mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-12 bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h2>
                <p className="text-lg text-secondary-700 leading-relaxed">
                  Founded in 2024, we set out with a simple yet ambitious mission: to make 
                  technology accessible, beautiful, and meaningful for everyone. What started 
                  as a small team of three dreamers has grown into a diverse collective of 
                  talented designers, developers, and strategists united by a common vision.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">Meet the Team</h2>
            <p className="text-xl text-secondary-600">
              The talented people behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                icon: User,
                bio: "Visionary leader with 10+ years of experience in tech innovation. Passionate about building products that matter."
              },
              {
                name: "Marcus Rodriguez",
                role: "Head of Design",
                icon: Briefcase,
                bio: "Award-winning designer focused on creating beautiful, intuitive user experiences that delight and inspire."
              },
              {
                name: "Alex Kim",
                role: "Lead Developer",
                icon: Code,
                bio: "Full-stack engineer who loves solving complex problems with elegant, scalable solutions."
              }
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <member.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-secondary-600 leading-relaxed">{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">Our Values</h2>
            <p className="text-xl text-secondary-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Innovation",
                description: "We constantly push boundaries and explore new possibilities, staying ahead of the curve in technology and design."
              },
              {
                icon: Heart,
                title: "Quality",
                description: "Every detail matters. We craft experiences that stand the test of time, built with care and precision."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Great work happens when diverse perspectives come together. We believe in the power of teamwork."
              },
              {
                icon: Lightbulb,
                title: "Creativity",
                description: "We embrace bold ideas and creative thinking, transforming imagination into reality through our work."
              },
              {
                icon: Zap,
                title: "Speed",
                description: "We move fast without sacrificing quality, delivering results that exceed expectations on time."
              },
              {
                icon: Target,
                title: "Impact",
                description: "We measure success by the positive change we create for our clients and their communities."
              }
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
