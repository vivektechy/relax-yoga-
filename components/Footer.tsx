import Link from 'next/link';
import { Leaf, Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Our Services' },
  { href: '#founder', label: 'About Founder' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' },
];

const services = [
  { href: '/services/therapeutic-yoga', label: 'Therapeutic Yoga' },
  { href: '/services/weight-loss-yoga', label: 'Weight Loss Yoga' },
  { href: '/services/corporate-yoga', label: 'Corporate Yoga' },
  { href: '/services/home-yoga', label: 'Home Yoga' },
  { href: '/services/online-yoga', label: 'Online Yoga' },
  { href: '/services/meditation', label: 'Meditation' },
  { href: '/services/teacher-training', label: 'Teacher Training' },
];

const seoLinks = [
  'Best Yoga Classes in Patna',
  'Yoga Therapy in Patna',
  'Corporate Yoga Patna',
  'Online Yoga Classes Bihar',
  'Meditation Classes Patna',
  'Yoga Teacher Training Patna',
  'Weight Loss Yoga Patna',
  'Therapeutic Yoga Bihar',
];

const socials = [
  { href: 'https://www.instagram.com/relaxyogacentre/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/dnyoga.dharmnathsingh', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.youtube.com/@RelaxYogaCentre', icon: Youtube, label: 'YouTube' },
  { href: '#', icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-sage flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-poppins font-bold text-white text-lg leading-none">Relax Yoga</p>
                <p className="font-inter text-mint text-xs tracking-widest">CENTRE</p>
              </div>
            </div>
            <p className="font-inter text-white/60 text-sm leading-relaxed mb-6">
              Balance Body, Calm Mind, Transform Life. Founded by Dharmanath Singh with 15+ years
              of expertise in yoga therapy and wellness.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-sage flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-inter text-sm text-white/60 hover:text-mint transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5">Our Programs</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="font-inter text-sm text-white/60 hover:text-mint transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-5">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-mint flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-white/60">Patna, Bihar – 800020</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-mint flex-shrink-0" />
                <a href="tel:+919876543210" className="font-inter text-sm text-white/60 hover:text-mint transition-colors">
                  +91-9835384062
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-mint flex-shrink-0" />
                <a href="mailto:info@relaxyogacentre.in" className="font-inter text-sm text-white/60 hover:text-mint transition-colors">
                  info@relaxyogacentre.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEO footer links */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            {seoLinks.map((keyword) => (
              <Link
                key={keyword}
                href="#services"
                className="font-inter text-xs text-white/40 hover:text-white/60 transition-colors"
              >
                {keyword}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-white/40 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Relax Yoga Centre. All rights reserved. Founded by Dharmnath Singh.
          </p>
          <p className="font-inter text-xs text-white/40">
            Patna, Bihar, India
          </p>
        </div>
      </div>
    </footer>
  );
}
