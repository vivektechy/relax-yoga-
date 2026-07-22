'use client';

import Link from 'next/link';
import { Heart, TrendingDown, Building2, Home, Monitor, Brain, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    slug: "general-fitness-yoga",
    title: "General Fitness Yoga",
    description:
      "Build strength, improve flexibility, and maintain overall fitness with balanced yoga sessions for all levels.",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-green-50 to-emerald-50",
    badge: "Popular",
  },

  {
    slug: "weight-loss-yoga",
    title: "Weight Loss Yoga",
    description:
      "Burn calories, boost metabolism, and achieve sustainable weight management through dynamic yoga practices.",
    icon: TrendingDown,
    image:
      "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-orange-50 to-amber-50",
    badge: null,
  },

  {
    slug: "female-yoga",
    title: "Female Yoga",
    description:
      "Specialized yoga sessions designed to support women's health, hormonal balance, flexibility, and wellness.",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-pink-50 to-rose-50",
    badge: "Exclusive",
  },

  {
    slug: "yoga-for-championship",
    title: "Yoga for Championship",
    description:
      "Professional yoga training for competitions, improving flexibility, balance, endurance, and advanced postures.",
    icon: GraduationCap,
    image:
      "https://images.pexels.com/photos/4327024/pexels-photo-4327024.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-yellow-50 to-amber-50",
    badge: "Advanced",
  },

  {
    slug: "therapeutic-yoga",
    title: "Therapeutic Yoga",
    description:
      "Personalized therapeutic yoga to relieve chronic pain, improve mobility, and support recovery naturally.",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-rose-50 to-pink-50",
    badge: "Most Popular",
  },

  {
    slug: "personal-yoga-class",
    title: "Personal Yoga Class",
    description:
      "One-on-one yoga sessions customized to your fitness level, health goals, and daily routine.",
    icon: Home,
    image:
      "https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-blue-50 to-cyan-50",
    badge: null,
  },

  {
    slug: "stretching-yoga",
    title: "Stretching Yoga",
    description:
      "Improve flexibility, posture, and muscle recovery through guided stretching and mobility-focused yoga.",
    icon: Heart,
    image:
      "https://images.pexels.com/photos/1812964/pexels-photo-1812964.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-indigo-50 to-blue-50",
    badge: null,
  },

  {
    slug: "meditation-pranayama",
    title: "Meditation & Pranayama",
    description:
      "Practice guided meditation and breathing techniques to reduce stress, improve focus, and enhance inner peace.",
    icon: Brain,
    image:
      "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-teal-50 to-cyan-50",
    badge: null,
  },

  {
    slug: "home-yoga-service",
    title: "Home Yoga Service",
    description:
      "Enjoy personalized yoga sessions in the comfort of your home with flexible scheduling and expert guidance.",
    icon: Home,
    image:
      "https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-green-50 to-lime-50",
    badge: null,
  },

  {
    slug: "corporate-yoga-program",
    title: "Corporate Yoga Program",
    description:
      "Wellness programs for organizations to reduce workplace stress, improve productivity, and boost employee health.",
    icon: Building2,
    image:
      "https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-sky-50 to-cyan-50",
    badge: "New",
  },

  {
    slug: "online-yoga",
    title: "Online Yoga",
    description:
      "Attend live interactive yoga classes from anywhere with personalized guidance and flexible timings.",
    icon: Monitor,
    image:
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-violet-50 to-purple-50",
    badge: null,
  },

  {
    slug: "apartment-yoga-class",
    title: "Apartment Yoga Class",
    description:
      "Community yoga sessions organized within apartments and residential societies for all age groups.",
    icon: Building2,
    image:
      "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600",
    color: "from-orange-50 to-yellow-50",
    badge: "Community",
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
