'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input, { Textarea, Label } from '@/components/ui/Input';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Placeholder for API integration
    // In production, this would call /api/contact with nodemailer
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1000);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or inquiry..."
            className="mt-1"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? (
            'Sending...'
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>

        {status === 'success' && (
          <p className="text-center text-sm text-green-600">
            Message sent successfully! We&apos;ll get back to you soon.
          </p>
        )}
      </form>
    </Card>
  );
}
