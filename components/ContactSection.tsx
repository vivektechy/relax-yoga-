'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

const BATCHES = ['Morning 6 AM', 'Morning 7 AM', 'Evening 5 PM', 'Evening 6 PM'] as const;
const MODES = ['Online', 'Offline', 'Home', 'Corporate'] as const;

type FormData = {
  name: string;
  mobile: string;
  email: string;
  preferred_batch: typeof BATCHES[number];
  mode: typeof MODES[number];
  message: string;
};

const defaultForm: FormData = {
  name: '',
  mobile: '',
  email: '',
  preferred_batch: 'Morning 6 AM',
  mode: 'Online',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(defaultForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.mobile.trim()) {
      toast.error('Please fill in your name and mobile number.');
      return;
    }
    if (!/^\d{10}$/.test(form.mobile.trim())) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from('demo_bookings').insert({
        name: form.name.trim(),
        mobile: form.mobile.trim(),
        email: form.email.trim() || null,
        preferred_batch: form.preferred_batch,
        mode: form.mode,
        message: form.message.trim() || null,
        status: 'Pending',
      });
      if (error) throw error;
      toast.success('Demo booked successfully! We will contact you shortly.', {
        description: `Batch: ${form.preferred_batch} · Mode: ${form.mode}`,
      });
      setForm(defaultForm);
    } catch {
      toast.error('Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
            Start Your{' '}
            <span className="text-gradient">Wellness Journey</span>
          </h2>
          <p className="font-inter text-charcoal/60 max-w-xl mx-auto">
            Book your free demo session today. No commitment required — just show up and experience the transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-offwhite rounded-3xl p-8 shadow-xl border border-mint/20">
            <h3 className="font-poppins font-bold text-2xl text-charcoal mb-6">
              Book Free Demo Session
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal/80 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full border border-mint/40 rounded-xl px-4 py-3 text-sm font-inter text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                  />
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal/80 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    required
                    maxLength={10}
                    className="w-full border border-mint/40 rounded-xl px-4 py-3 text-sm font-inter text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal/80 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-mint/40 rounded-xl px-4 py-3 text-sm font-inter text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal/80 mb-1.5">
                    Preferred Batch *
                  </label>
                  <select
                    name="preferred_batch"
                    value={form.preferred_batch}
                    onChange={handleChange}
                    className="w-full border border-mint/40 rounded-xl px-4 py-3 text-sm font-inter text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                  >
                    {BATCHES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-inter text-sm font-medium text-charcoal/80 mb-1.5">
                    Mode *
                  </label>
                  <select
                    name="mode"
                    value={form.mode}
                    onChange={handleChange}
                    className="w-full border border-mint/40 rounded-xl px-4 py-3 text-sm font-inter text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                  >
                    {MODES.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-inter text-sm font-medium text-charcoal/80 mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any specific health goals or queries..."
                  rows={3}
                  className="w-full border border-mint/40 rounded-xl px-4 py-3 text-sm font-inter text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-sage hover:bg-sage/90 text-white font-poppins font-semibold py-3.5 rounded-2xl shadow-lg shadow-sage/30 transition-all hover:-translate-y-0.5 hover:shadow-sage/50 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Booking...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Book Free Demo
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Info Cards */}
            {[
              {
                icon: MapPin,
                title: 'Visit Us',
                lines: ['Relax Yoga Centre', 'Patna, Bihar - 800020'],
              },
              {
                icon: Phone,
                title: 'Call / WhatsApp',
                lines: ['+91-9835384062', '+91-9507776177'],
              },
              {
                icon: Mail,
                title: 'Email Us',
                lines: ['info@relaxyogacentre.in', 'relaxyogabydn@gmail.com'],
              },
              {
                icon: Clock,
                title: 'Class Timings',
                lines: ['Morning: 6:00 AM – 8:00 AM', 'Evening: 5:00 PM – 7:00 PM'],
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 bg-offwhite rounded-2xl p-5 border border-mint/20"
              >
                <div className="w-10 h-10 rounded-xl bg-mint/20 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-sm text-charcoal mb-1">{info.title}</p>
                  {info.lines.map((line) => (
                    <p key={line} className="font-inter text-sm text-charcoal/60">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Relax%20Yoga%20Centre%2C%20I%20would%20like%20to%20know%20more%20about%20your%20yoga%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-poppins font-semibold py-4 rounded-2xl shadow-lg shadow-green-500/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-48 border border-mint/20 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57975.69682879296!2d85.07372574999999!3d25.594094849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Relax Yoga Centre Location – Patna, Bihar"
              />
            </div>
          </div>
        </div>git --version
      </div>
    </section>
  );
}
