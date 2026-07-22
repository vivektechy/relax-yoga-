'use client';

import Link from 'next/link';
import { Heart, TrendingDown, Building2, Home, Monitor, Brain, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    slug: 'weight-loss-yoga',
    title: 'Weight Loss Yoga',
    description:
      'Dynamic yoga sequences combined with breathwork for sustainable, healthy weight management.',
    icon: TrendingDown,
    image:
      'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-orange-50 to-amber-50',
    badge: null,
  },

  {
    slug: 'therapeutic-yoga',
    title: 'Therapeutic Yoga',
    description:
      'Heal chronic pain, manage stress, and restore balance through specialized therapeutic yoga tailored to your condition.',
    icon: Heart,
    image:
      'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-rose-50 to-pink-50',
    badge: 'Most Popular',
  },

  {
    slug: 'corporate-yoga',
    title: 'Corporate Yoga',
    description:
      'Bring wellness to your workplace with tailored corporate programs to reduce stress and boost productivity.',
    icon: Building2,
    image:
      'https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-blue-50 to-cyan-50',
    badge: 'New',
  },

  {
    slug: 'home-yoga',
    title: 'Home Yoga',
    description:
      'Personalized one-on-one sessions at your doorstep — tailored to your schedule and health goals.',
    icon: Home,
    image:
      'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-green-50 to-emerald-50',
    badge: null,
  },

  {
    slug: 'online-yoga',
    title: 'Online Yoga',
    description:
      'Join live interactive classes from anywhere via high-quality video streaming. Flexible and effective.',
    icon: Monitor,
    image:
      'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-violet-50 to-purple-50',
    badge: null,
  },

  {
    slug: 'meditation',
    title: 'Meditation',
    description:
      'Deep guided meditation practices for inner peace, mental clarity, and emotional balance.',
    icon: Brain,
    image:
      'https://images.pexels.com/photos/3822864/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-teal-50 to-cyan-50',
    badge: null,
  },

  {
    slug: 'teacher-training',
    title: 'Teacher Training',
    description:
      'Comprehensive 200-hour Yoga Teacher Training certification program recognized internationally.',
    icon: GraduationCap,
    image:
      'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-yellow-50 to-amber-50',
    badge: 'Certification',
  },
];

export default function ServicesSection() {
return (
  <section id="services" className="section-padding bg-white">
    <div className="container-custom">
      {/* Heading */}
      <div className="text-center mb-16">
        <span className="inline-block font-inter text-sage text-sm font-semibold tracking-widest uppercase mb-3">
          What We Offer
        </span>

        <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal mb-4">
          Programs for Every{" "}
          <span className="text-gradient">Wellness Goal</span>
        </h2>

        <p className="font-inter text-charcoal/60 max-w-2xl mx-auto text-base md:text-lg">
          Whether you're a beginner or an advanced practitioner, we have a
          program tailored specifically for your needs and lifestyle.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            key={service.slug}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            {/* Badge */}
            {service.badge && (
              <div className="absolute top-3 right-3 z-10 bg-sage text-white text-[10px] font-semibold px-2 py-1 rounded-full">
                {service.badge}
              </div>
            )}

            {/* Image */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />

              <div
                className={`absolute top-3 left-3 w-9 h-9 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow`}
              >
                <service.icon className="w-4 h-4 text-sage" />
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-poppins font-semibold text-base text-charcoal mb-1">
                {service.title}
              </h3>

              <p className="font-inter text-xs text-charcoal/60 leading-5 mb-3 line-clamp-2">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 font-inter font-medium text-xs text-sage hover:text-charcoal transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <p className="font-inter text-charcoal/60 mb-4">
          Not sure which program is right for you?
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-sage/10 hover:bg-sage/20 text-sage font-poppins font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Get Free Consultation
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);
}
