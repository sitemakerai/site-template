/**
 * Site Configuration
 * ===================
 * Edit this file to customize your website's content.
 * Changes here will update text across the entire site.
 */

export const siteConfig = {
  // Basic Info
  name: "My Business",
  tagline: "Your trusted partner for quality services",
  description: "We provide professional services to help your business grow.",
  
  // Contact Information
  contact: {
    email: "hello@mybusiness.com",
    phone: "(555) 123-4567",
    address: "123 Main Street, Suite 100, City, State 12345",
  },
  
  // Social Links (leave empty to hide)
  social: {
    twitter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  
  // Navigation
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  
  // Homepage Content
  home: {
    hero: {
      title: "Welcome to My Business",
      subtitle: "We help businesses succeed with our professional services and dedicated support.",
      ctaText: "Get in Touch",
      ctaLink: "/contact",
    },
    features: [
      {
        title: "Quality Service",
        description: "We deliver exceptional quality in everything we do.",
      },
      {
        title: "Expert Team",
        description: "Our experienced professionals are here to help you succeed.",
      },
      {
        title: "Fast Turnaround",
        description: "We work efficiently to meet your deadlines.",
      },
    ],
  },
  
  // About Page Content
  about: {
    title: "About Us",
    intro: "We are a dedicated team passionate about helping businesses grow and succeed.",
    story: "Founded with a vision to provide exceptional services, we have been helping clients achieve their goals since day one. Our commitment to quality and customer satisfaction sets us apart.",
    mission: "Our mission is to empower businesses with the tools and support they need to thrive in today's competitive market.",
    values: [
      "Integrity in everything we do",
      "Customer-first approach",
      "Continuous improvement",
      "Collaborative teamwork",
    ],
  },
  
  // Contact Page Content
  contactPage: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    formFields: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "How can we help you?",
      submitText: "Send Message",
    },
  },
  
  // Footer
  footer: {
    copyright: "© 2024 My Business. All rights reserved.",
  },
};

export type SiteConfig = typeof siteConfig;
